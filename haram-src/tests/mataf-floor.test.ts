import { MeshStandardMaterial, ShaderLib, type WebGLProgramParametersWithUniforms, type WebGLRenderer } from 'three';
import { describe, expect, it } from 'vitest';
import { KAABA, KAABA_HALF_D, KAABA_HALF_W } from '../src/data/layout';
import { MATAF_TILE, applyMatafTiling, matafTileCoords } from '../src/world/mataf-floor';

describe('the Mataf floor', () => {
  it('samples every map with the Kaaba-facing tiling, never the plain grid', () => {
    const material = new MeshStandardMaterial();
    applyMatafTiling(material);
    const shader = {
      vertexShader: ShaderLib.standard.vertexShader,
      fragmentShader: ShaderLib.standard.fragmentShader,
      uniforms: {},
    } as unknown as WebGLProgramParametersWithUniforms;
    material.onBeforeCompile(shader, {} as WebGLRenderer);
    const fragment = shader.fragmentShader;
    expect(fragment).toContain('matafSetup();');
    for (const [sampler, uv] of [
      ['map', 'vMapUv'],
      ['normalMap', 'vNormalMapUv'],
      ['roughnessMap', 'vRoughnessMapUv'],
      ['metalnessMap', 'vMetalnessMapUv'],
    ]) {
      expect(fragment, sampler).not.toContain(`texture2D( ${sampler}, ${uv} )`);
      expect(fragment, sampler).toContain(`textureGrad( ${sampler}, matafUv`);
    }
    expect(fragment).toContain('mat3 tbn = mat3( matafTangent, matafBitangent, normal );');
  });

  it('lays rows parallel to each wall, so a row keeps its distance from the Kaaba', () => {
    // Two points beside the same wall, at the same distance from it, are in the same row.
    const cos = Math.cos(KAABA.rotationY);
    const sin = Math.sin(KAABA.rotationY);
    const toWorld = (x: number, z: number) => ({ x: x * cos + z * sin, z: -x * sin + z * cos });
    const out = KAABA_HALF_W + KAABA.base.overhang + 7.3;
    const a = toWorld(out, -3);
    const b = toWorld(out, 2.5);
    const ta = matafTileCoords(a.x, a.z);
    const tb = matafTileCoords(b.x, b.z);
    expect(ta.region).toBe('side');
    expect(ta.row).toBeCloseTo(tb.row, 6);
    expect(Math.abs(ta.along - tb.along)).toBeCloseTo(5.5 / MATAF_TILE, 0);
    // Past a corner, rows swing round in a fan.
    const corner = toWorld(KAABA_HALF_W + 9, KAABA_HALF_D + 9);
    expect(matafTileCoords(corner.x, corner.z).region).toBe('corner');
  });
});
