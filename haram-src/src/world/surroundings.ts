// Scenery beyond the mosque: the surrounding city, the hills of Makkah, and the clock tower.
//
// All of it is schematic backdrop — generic blocks and hills give a sense of place and scale,
// and are not a map of the real city. The clock tower is a simplified outline at an
// approximate distance (see layout.ts).

import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  InstancedMesh,
  Matrix4,
  PlaneGeometry,
  Shape,
  Quaternion,
  TorusGeometry,
  Vector2,
  Vector3,
  type Material,
} from 'three';
import { BALCONY, CLOCK_TOWER, WORLD_BOUNDS, type Vec2 } from '../data/layout';
import { ABDULLAH_OUTLINE, LANDMARKS, NORTH_OUTLINE } from '../data/plan-data';
import { bounds, pairs } from '../data/polygon';
import { INSCRIPTION_ROWS, type InscriptionRow } from './clock-face';
import { placeRotY, translation, type StaticBatcher } from './geometry';
import type { MaterialLibrary } from './materials';

/** The middle of everything mapped: the mosque, its expansions and the Abraj Al-Bait. */
const CENTER = { x: -150, z: -90 };

/** Areas the generic city keeps clear: the mapped buildings and the mosque's expansions. */
const OCCUPIED = [
  ...LANDMARKS.map((l) => bounds(pairs(l.outline))),
  bounds(ABDULLAH_OUTLINE),
  bounds(NORTH_OUTLINE),
];

function occupied(x: number, z: number, w: number, d: number, margin: number): boolean {
  return OCCUPIED.some((b) => x + w > b.minX - margin && x - w < b.maxX + margin && z + d > b.minZ - margin && z - d < b.maxZ + margin);
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** City blocks: one instanced mesh, so hundreds of buildings cost a single draw call. */
export function buildCity(materials: MaterialLibrary, detail: 'full' | 'reduced'): InstancedMesh {
  const count = detail === 'full' ? 420 : 150;
  const geometry = new BoxGeometry(1, 1, 1);
  geometry.translate(0, 0.5, 0);
  const mesh = new InstancedMesh(geometry, materials.city as Material, count);
  const random = mulberry32(2024);
  const matrix = new Matrix4();
  const q = new Quaternion();
  const up = new Vector3(0, 1, 0);
  const palette = ['#efe9dd', '#e6dccb', '#f4f1ea', '#d9cdb8', '#e9e2d6', '#cfc4b2'].map((c) => new Color(c));
  let placed = 0;
  let attempts = 0;
  while (placed < count && attempts < count * 20) {
    attempts++;
    const angle = random() * Math.PI * 2;
    const radius = 600 + Math.pow(random(), 0.9) * 560;
    const x = CENTER.x + Math.cos(angle) * radius;
    const z = CENTER.z + Math.sin(angle) * radius;
    const w = 18 + random() * 34;
    const d = 18 + random() * 34;
    // Keep the plazas and the mapped buildings clear.
    if (x + w > WORLD_BOUNDS.minX - 14 && x - w < WORLD_BOUNDS.maxX + 14 && z + d > WORLD_BOUNDS.minZ - 14 && z - d < WORLD_BOUNDS.maxZ + 14) continue;
    if (occupied(x, z, w, d, 12)) continue;
    const h = 14 + Math.pow(random(), 2.2) * 70;
    q.setFromAxisAngle(up, (random() - 0.5) * 0.5);
    matrix.compose(new Vector3(x, 0, z), q, new Vector3(w, h, d));
    mesh.setMatrixAt(placed, matrix);
    mesh.setColorAt(placed, palette[Math.floor(random() * palette.length)]);
    placed++;
  }
  mesh.count = placed;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.computeBoundingSphere();
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.matrixAutoUpdate = false;
  return mesh;
}

/** Smooth value noise (deterministic), for the terrain. */
function valueNoise(seed: number): (x: number, z: number) => number {
  const hash = (ix: number, iz: number) => {
    let h = (ix * 374761393 + iz * 668265263 + seed * 2147483647) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const fade = (t: number) => t * t * (3 - 2 * t);
  return (x, z) => {
    const ix = Math.floor(x);
    const iz = Math.floor(z);
    const fx = fade(x - ix);
    const fz = fade(z - iz);
    const a = hash(ix, iz) + (hash(ix + 1, iz) - hash(ix, iz)) * fx;
    const b = hash(ix, iz + 1) + (hash(ix + 1, iz + 1) - hash(ix, iz + 1)) * fx;
    return a + (b - a) * fz;
  };
}

function smooth(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * The land around: Makkah lies in a valley ringed by bare, rugged mountains. A flat valley floor
 * under the city (just below the mosque's paving), rising at the city's edge into ridged rocky
 * mountains. Their haze is baked into the vertex colours, so they read the same on every
 * quality tier (the material ignores the fog). Generic, not a map of the real mountains.
 */
export function buildHills(): BufferGeometry {
  const size = 7800;
  const segments = 200;
  const geometry = new PlaneGeometry(size, size, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(CENTER.x, 0, CENTER.z);
  const noise = [valueNoise(3), valueNoise(7), valueNoise(11), valueNoise(19)];
  const ridged = (x: number, z: number) => {
    let sum = 0;
    let amplitude = 1;
    let norm = 0;
    let scale = 1 / 950;
    for (const n of noise) {
      sum += (1 - Math.abs(2 * n(x * scale, z * scale) - 1)) * amplitude;
      norm += amplitude;
      amplitude *= 0.5;
      scale *= 2.1;
    }
    return Math.pow(sum / norm, 1.6);
  };
  const position = geometry.getAttribute('position');
  const colors = new Float32Array(position.count * 3);
  const valley = new Color('#bdb3a3');
  const rockDark = new Color('#6b5d4e');
  const rockLight = new Color('#ae9f88');
  const haze = new Color('#d9d6cf');
  const c = new Color();
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const z = position.getZ(i);
    const dx = x - CENTER.x;
    const dz = z - CENTER.z;
    const r = Math.hypot(dx, dz);
    const angle = Math.atan2(dz, dx);
    // The mountains' foot wanders in and out around the city.
    const foot = 1150 + 120 * Math.sin(3 * angle + 1) + 70 * Math.sin(7 * angle + 2.3);
    const rise = smooth(foot, foot + 700, r);
    const n = ridged(x, z);
    const h = rise * (90 + 380 * n) + rise * rise * 60 * noise[0](x / 260, z / 260);
    position.setY(i, rise > 0.001 ? h - 0.6 : -0.6);
    if (rise < 0.02) {
      c.copy(valley);
    } else {
      c.copy(rockDark).lerp(rockLight, Math.min(1, n * 1.1 + noise[1](x / 120, z / 120) * 0.25));
      c.lerp(valley, (1 - rise) * 0.6);
    }
    c.lerp(haze, smooth(1600, 4200, r) * 0.6);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geometry.setAttribute('color', new BufferAttribute(colors, 3));
  geometry.deleteAttribute('uv');
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * The buildings around the mosque, from the map data: each outline raised between its mapped
 * heights (the Abraj Al-Bait podium and towers, the hotels, the Safa Palace…).
 */
export function buildLandmarks(batch: StaticBatcher): void {
  for (const landmark of LANDMARKS) {
    const outline: Vec2[] = pairs(landmark.outline);
    const shape = new Shape(outline.map((p) => new Vector2(p.x, -p.z)));
    const geometry = new ExtrudeGeometry(shape, { depth: landmark.y1 - landmark.y0, bevelEnabled: false });
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0, landmark.y0, 0);
    batch.add(geometry, 'city', { receiveShadow: false });
  }
}

/** The Makkah Royal Clock Tower, rising from the Abraj Al-Bait podium (see buildLandmarks). */
export function buildClockTower(batch: StaticBatcher): void {
  const { x, z, base, shaftHalf, clockCenterY, clockRadius, inscription, height } = CLOCK_TOWER;
  const opts = { castShadow: false, receiveShadow: false } as const;
  const box = (w: number, h: number, d: number, cx: number, y0: number, cz: number) =>
    batch.add(new BoxGeometry(w, h, d), 'distant', { matrix: translation(cx, y0 + h / 2, cz), ...opts });

  // Main tower: shaft, clock block (each dial with its band of lettering above), crown and spire.
  const clockBottom = clockCenterY - clockRadius - 6;
  const textY = clockCenterY + clockRadius + inscription.gap + inscription.height / 2;
  const crownBottom = textY + inscription.height / 2 + 4;
  box(shaftHalf * 2, clockBottom - base, shaftHalf * 2, x, base, z);
  box(shaftHalf * 2 + 4, crownBottom - clockBottom, shaftHalf * 2 + 4, x, clockBottom, z);
  batch.add(new CylinderGeometry(shaftHalf * 0.55, shaftHalf * 0.95, 48, 4), 'distant', {
    matrix: placeRotY(x, crownBottom + 24, z, Math.PI / 4),
    ...opts,
  });
  batch.add(new ConeGeometry(shaftHalf * 0.45, height - crownBottom - 48 - 10, 8), 'distant', {
    matrix: translation(x, crownBottom + 48 + (height - crownBottom - 58) / 2, z),
    ...opts,
  });
  const crescent = new TorusGeometry(4, 0.9, 6, 18, Math.PI * 1.3);
  crescent.rotateZ(Math.PI * 0.85);
  batch.add(crescent, 'gold', { matrix: translation(x, height - 5, z), uv: 'keep', ...opts });

  // Clock faces on all four sides: "Allahu akbar" above the north and south dials, the Shahada
  // above the east and west ones (see clock-face.ts). Set half a metre proud of the block, as
  // finer offsets flicker at this distance.
  const faceOffset = shaftHalf + 2.5;
  const sides: [number, number, number, InscriptionRow][] = [
    [0, -faceOffset, Math.PI, 'takbir'],
    [0, faceOffset, 0, 'takbir'],
    [faceOffset, 0, Math.PI / 2, 'shahada'],
    [-faceOffset, 0, -Math.PI / 2, 'shahada'],
  ];
  for (const [dx, dz, rotation, row] of sides) {
    batch.add(new CircleGeometry(clockRadius, 64), 'clockDial', {
      matrix: placeRotY(x + dx, clockCenterY, z + dz, rotation),
      uv: 'keep',
      ...opts,
    });
    const ring = new TorusGeometry(clockRadius, 0.9, 6, 64);
    batch.add(ring, 'gold', { matrix: placeRotY(x + dx * 1.01, clockCenterY, z + dz * 1.01, rotation), uv: 'keep', ...opts });

    const lettering = new PlaneGeometry(inscription.width, inscription.height);
    const uv = lettering.getAttribute('uv');
    const { v0, v1 } = INSCRIPTION_ROWS[row];
    for (let i = 0; i < uv.count; i++) uv.setY(i, v0 + uv.getY(i) * (v1 - v0));
    batch.add(lettering, 'clockText', { matrix: placeRotY(x + dx, textY, z + dz, rotation), uv: 'keep', ...opts });
  }
}

/**
 * The viewing balcony under the north clock face (see BALCONY in layout.ts): a marble floor, a
 * glass balustrade with a metal handrail on its three open sides, and a glazed wall behind.
 */
export function buildBalcony(batch: StaticBatcher): void {
  const { minX, maxX, innerZ, depth, floorY, railHeight } = BALCONY;
  const opts = { castShadow: false, receiveShadow: false } as const;
  const width = maxX - minX;
  const cx = (minX + maxX) / 2;
  const outerZ = innerZ - depth;
  const midZ = innerZ - depth / 2;
  const add = (w: number, h: number, d: number, x: number, y: number, z: number, key: 'marbleWhite' | 'glass' | 'window' | 'distant') =>
    batch.add(new BoxGeometry(w, h, d), key, { matrix: translation(x, y, z), ...opts });

  add(width, 0.5, depth, cx, floorY - 0.25, midZ, 'marbleWhite');
  // The tower's face behind the balcony, up to the clock block, running on past the balcony's
  // ends: drawn in the balcony's own pass, as the tower is clipped within 2 m in the far pass.
  const wallHeight = CLOCK_TOWER.clockCenterY - CLOCK_TOWER.clockRadius - 6 - floorY;
  add(width + 6, wallHeight, 0.1, cx, floorY + wallHeight / 2, innerZ - 0.05, 'distant');
  // Balustrade: frameless glass with a slim dark handrail, and posts only at the corners, so
  // nothing stands between the visitor and the view of the mosque below.
  const railY = floorY + railHeight;
  add(width, railHeight, 0.03, cx, floorY + railHeight / 2, outerZ, 'glass');
  add(width + 0.05, 0.05, 0.05, cx, railY, outerZ, 'window');
  for (const x of [minX, maxX]) {
    add(0.03, railHeight, depth, x, floorY + railHeight / 2, midZ, 'glass');
    add(0.05, 0.05, depth, x, railY, midZ, 'window');
    add(0.07, railHeight, 0.07, x, floorY + railHeight / 2, outerZ, 'window');
  }
}
