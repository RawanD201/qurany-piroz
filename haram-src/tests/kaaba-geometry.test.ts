import { Vector3 } from 'three';
import { describe, expect, it } from 'vitest';
import { KAABA, KAABA_HALF_D, KAABA_HALF_W } from '../src/data/layout';
import { blackStoneParts, cornerPanel } from '../src/world/kaaba';

describe('kiswah corner panels', () => {
  it('face outwards on every corner (visible, not back-face culled)', () => {
    for (const [sx, sz] of [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      const geometry = cornerPanel(sx, sz);
      const position = geometry.getAttribute('position');
      const normal = geometry.getAttribute('normal');
      const index = geometry.getIndex();
      expect(index).not.toBeNull();
      const a = new Vector3();
      const b = new Vector3();
      const c = new Vector3();
      for (let i = 0; i < (index?.count ?? 0); i += 3) {
        a.fromBufferAttribute(position, index!.getX(i));
        b.fromBufferAttribute(position, index!.getX(i + 1));
        c.fromBufferAttribute(position, index!.getX(i + 2));
        // Anticlockwise winding gives a face normal pointing at the viewer.
        const faceNormal = new Vector3().subVectors(b, a).cross(new Vector3().subVectors(c, a)).normalize();
        const vertexNormal = new Vector3().fromBufferAttribute(normal, index!.getX(i));
        expect(faceNormal.dot(vertexNormal)).toBeGreaterThan(0.99);
        // And that normal points away from the Kaaba's centre.
        const centre = new Vector3().add(a).add(b).add(c).divideScalar(3).setY(0);
        expect(faceNormal.dot(centre)).toBeGreaterThan(0);
      }
      // The medallion's centre (u = 0.5) sits on the corner edge.
      const uv = geometry.getAttribute('uv');
      const corner = [...Array(uv.count).keys()].filter((k) => Math.abs(uv.getX(k) - 0.5) < 1e-6);
      for (const k of corner) {
        expect(Math.sign(position.getX(k))).toBe(sx);
        expect(Math.sign(position.getZ(k))).toBe(sz);
      }
    }
  });
});

describe('the Black Stone and its frame', () => {
  const { frame, stone } = blackStoneParts();

  it('sit wholly outside the Kaaba walls, on the eastern corner (never hidden in the kiswah)', () => {
    for (const geometry of [frame, stone]) {
      const position = geometry.getAttribute('position');
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = position.getZ(i);
        // Outside the box: beyond at least one of the two walls that meet at the corner.
        expect(Math.max(-KAABA_HALF_W - x, z - KAABA_HALF_D)).toBeGreaterThan(0);
        // On the eastern corner (local −X, +Z), round the stone's height.
        expect(x).toBeLessThan(-KAABA_HALF_W + 0.6);
        expect(z).toBeGreaterThan(KAABA_HALF_D - 0.6);
        expect(Math.abs(y - KAABA.blackStoneHeight)).toBeLessThan(0.5);
      }
    }
  });

  it('show the stone facing out of the corner', () => {
    const position = stone.getAttribute('position');
    const index = stone.getIndex();
    expect(index).not.toBeNull();
    const out = new Vector3(-1, 0, 1).normalize();
    const a = new Vector3();
    const b = new Vector3();
    const c = new Vector3();
    for (let i = 0; i < (index?.count ?? 0); i += 3) {
      a.fromBufferAttribute(position, index!.getX(i));
      b.fromBufferAttribute(position, index!.getX(i + 1));
      c.fromBufferAttribute(position, index!.getX(i + 2));
      const normal = new Vector3().subVectors(b, a).cross(new Vector3().subVectors(c, a)).normalize();
      expect(normal.dot(out)).toBeGreaterThan(0.3);
    }
  });
});
