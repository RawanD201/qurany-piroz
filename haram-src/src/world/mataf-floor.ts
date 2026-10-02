// The Mataf's marble laid in rows around the Kaaba, so that every row faces it, as on the real
// floor: rows run parallel to each wall of the Kaaba and swing round its corners in fans of
// tiles. Further out, the rounded rows become nearly circular.
//
// Ordinary box-projected UVs (geometry.ts) lay every floor on one north–south grid, which
// would cross the Kaaba diagonally. Here the floor material computes its texture coordinates
// in the fragment shader instead, from the distance to the Kaaba (across the rows) and the
// position along the row. Their gradients and the normal map's tangent frame are computed
// from the same mapping rather than from screen-space derivatives, so the joins between the
// straight runs and the corner fans leave no seams.

import { ShaderChunk, type MeshStandardMaterial } from 'three';
import { KAABA, KAABA_HALF_D, KAABA_HALF_W } from '../data/layout';
import { TEXTURE_WORLD_SIZE } from './textures';

/** Width of one row (and one tile), metres: a quarter of the marble texture's repeat. */
export const MATAF_TILE = TEXTURE_WORLD_SIZE.marble / 4;

/** The rows start at the edge of the Kaaba's marble base. */
const HALF_X = KAABA_HALF_W + KAABA.base.overhang;
const HALF_Z = KAABA_HALF_D + KAABA.base.overhang;

/**
 * Row and along-row coordinates (in tiles) of a world position, matching the shader below:
 * `row` is the distance from the Kaaba's base in tiles; `along` counts tiles along the row.
 * Exported for tests.
 */
export function matafTileCoords(x: number, z: number): { row: number; along: number; region: 'side' | 'corner' } {
  const c = Math.cos(KAABA.rotationY);
  const s = Math.sin(KAABA.rotationY);
  const lx = x * c - z * s;
  const lz = x * s + z * c;
  const qx = Math.abs(lx) - HALF_X;
  const qz = Math.abs(lz) - HALF_Z;
  if (qx > 0 && qz > 0) {
    const d = Math.hypot(qx, qz);
    const dr = (Math.floor(d / MATAF_TILE) + 0.5) * MATAF_TILE;
    const n = Math.max(1, Math.round((Math.PI / 2) * (dr / MATAF_TILE)));
    return { row: d / MATAF_TILE, along: (Math.atan2(qz, qx) / (Math.PI / 2)) * n, region: 'corner' };
  }
  if (qx > qz) {
    const n = Math.max(1, Math.round((2 * HALF_Z) / MATAF_TILE));
    return { row: qx / MATAF_TILE, along: ((lz + HALF_Z) / (2 * HALF_Z)) * n, region: 'side' };
  }
  const n = Math.max(1, Math.round((2 * HALF_X) / MATAF_TILE));
  return { row: qz / MATAF_TILE, along: ((lx + HALF_X) / (2 * HALF_X)) * n, region: 'side' };
}

const DECLARATIONS = /* glsl */ `
varying vec3 vMatafWorld;
uniform vec2 matafHalf;
uniform vec2 matafRotation;
uniform float matafTile;
vec2 matafUv;
vec2 matafDx;
vec2 matafDy;
vec3 matafTangent;
vec3 matafBitangent;

void matafSetup() {
  vec2 w = vMatafWorld.xz;
  float c = matafRotation.x;
  float s = matafRotation.y;
  // Into the Kaaba's own frame, folded into one quadrant.
  vec2 l = vec2( w.x * c - w.y * s, w.x * s + w.y * c );
  vec2 q = abs( l ) - matafHalf;
  vec2 sg = vec2( l.x < 0.0 ? -1.0 : 1.0, l.y < 0.0 ? -1.0 : 1.0 );
  float d;
  float u;
  vec2 across;
  vec2 along;
  if ( q.x > 0.0 && q.y > 0.0 ) {
    // Corner: a fan of tiles, a whole number of them per row.
    d = length( q );
    float dr = ( floor( d / matafTile ) + 0.5 ) * matafTile;
    float n = max( 1.0, floor( 1.5707963 * dr / matafTile + 0.5 ) );
    u = atan( q.y, q.x ) / 1.5707963 * n;
    across = normalize( q ) * sg;
    along = vec2( -q.y, q.x ) / max( d, 1e-4 ) * sg;
  } else if ( q.x > q.y ) {
    // Beside a wall: straight rows parallel to it, its length divided into whole tiles.
    d = q.x;
    float n = max( 1.0, floor( 2.0 * matafHalf.y / matafTile + 0.5 ) );
    u = ( l.y + matafHalf.y ) / ( 2.0 * matafHalf.y ) * n;
    across = vec2( sg.x, 0.0 );
    along = vec2( 0.0, 1.0 );
  } else {
    d = q.y;
    float n = max( 1.0, floor( 2.0 * matafHalf.x / matafTile + 0.5 ) );
    u = ( l.x + matafHalf.x ) / ( 2.0 * matafHalf.x ) * n;
    across = vec2( 0.0, sg.y );
    along = vec2( 1.0, 0.0 );
  }
  // Four tiles per texture repeat.
  matafUv = vec2( u, d / matafTile ) * 0.25;
  // Back to world directions (the Kaaba frame's inverse rotation).
  vec2 acrossW = vec2( across.x * c + across.y * s, -across.x * s + across.y * c );
  vec2 alongW = vec2( along.x * c + along.y * s, -along.x * s + along.y * c );
  vec2 px = dFdx( w );
  vec2 py = dFdy( w );
  float k = 0.25 / matafTile;
  matafDx = vec2( dot( alongW, px ), dot( acrossW, px ) ) * k;
  matafDy = vec2( dot( alongW, py ), dot( acrossW, py ) ) * k;
  matafTangent = normalize( ( viewMatrix * vec4( alongW.x, 0.0, alongW.y, 0.0 ) ).xyz );
  matafBitangent = normalize( ( viewMatrix * vec4( acrossW.x, 0.0, acrossW.y, 0.0 ) ).xyz );
}
`;

/** Replaces every occurrence (a chunk may sample the same map in several branches). */
function replaceOrThrow(source: string, search: string | RegExp, replacement: string): string {
  const result = typeof search === 'string' ? source.split(search).join(replacement) : source.replace(search, replacement);
  if (result === source) throw new Error(`"${String(search)}" not found`);
  return result;
}

/** Makes a floor material lay its marble in rows around the Kaaba. */
export function applyMatafTiling(material: MeshStandardMaterial): void {
  material.onBeforeCompile = (shader) => {
    const sample = (sampler: string, uv: string): [string, string] => [
      `texture2D( ${sampler}, ${uv} )`,
      `textureGrad( ${sampler}, matafUv, matafDx, matafDy )`,
    ];
    try {
      let vertex = replaceOrThrow(shader.vertexShader, '#include <common>', '#include <common>\nvarying vec3 vMatafWorld;');
      vertex = replaceOrThrow(
        vertex,
        '#include <project_vertex>',
        '#include <project_vertex>\n\tvMatafWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;'
      );
      let fragment = replaceOrThrow(shader.fragmentShader, '#include <common>', `#include <common>\n${DECLARATIONS}`);
      fragment = replaceOrThrow(fragment, 'void main() {', 'void main() {\n\tmatafSetup();');
      fragment = replaceOrThrow(fragment, '#include <map_fragment>', replaceOrThrow(ShaderChunk.map_fragment, ...sample('map', 'vMapUv')));
      fragment = replaceOrThrow(
        fragment,
        '#include <roughnessmap_fragment>',
        replaceOrThrow(ShaderChunk.roughnessmap_fragment, ...sample('roughnessMap', 'vRoughnessMapUv'))
      );
      fragment = replaceOrThrow(
        fragment,
        '#include <metalnessmap_fragment>',
        replaceOrThrow(ShaderChunk.metalnessmap_fragment, ...sample('metalnessMap', 'vMetalnessMapUv'))
      );
      fragment = replaceOrThrow(
        fragment,
        '#include <normal_fragment_maps>',
        replaceOrThrow(ShaderChunk.normal_fragment_maps, ...sample('normalMap', 'vNormalMapUv'))
      );
      fragment = replaceOrThrow(
        fragment,
        '#include <normal_fragment_begin>',
        replaceOrThrow(
          ShaderChunk.normal_fragment_begin,
          /mat3 tbn = getTangentFrame\([\s\S]*?\);/,
          'mat3 tbn = mat3( matafTangent, matafBitangent, normal );'
        )
      );
      shader.uniforms.matafHalf = { value: [HALF_X, HALF_Z] };
      shader.uniforms.matafRotation = { value: [Math.cos(KAABA.rotationY), Math.sin(KAABA.rotationY)] };
      shader.uniforms.matafTile = { value: MATAF_TILE };
      shader.vertexShader = vertex;
      shader.fragmentShader = fragment;
    } catch (error) {
      // A three.js update changed the shader text: keep the ordinary grid rather than break.
      console.warn('Mataf floor tiling unavailable', error);
    }
  };
  material.customProgramCacheKey = () => 'mataf-floor';
}
