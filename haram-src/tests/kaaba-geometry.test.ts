import { Vector3 } from 'three';
import { describe, expect, it } from 'vitest';
import { cornerPanel } from '../src/world/kaaba';

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
