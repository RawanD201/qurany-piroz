// The Kaaba and the features immediately around it: the kiswah with its band, corner panels
// and door curtain, the Black Stone, the Mizab, Hijr Ismail and Maqam Ibrahim.
//
// Everything is modelled in the Kaaba's local frame (see layout.ts) and then turned into place.
// Proportions follow published approximate dimensions; details are deliberately simplified,
// and the kiswah's calligraphy is NOT reproduced (see textures.ts).

import {
  BoxGeometry,
  BufferGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Matrix4,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';
import { HIJR, KAABA, KAABA_HALF_D, KAABA_HALF_W, maqamPosition } from '../data/layout';
import { applyBoxUVs, normalizeGeometry, placeRotY, translation, type StaticBatcher } from './geometry';
import { MATERIAL_UV } from './materials';
import { BELT_ATLAS } from './textures';

const KAABA_MATRIX = placeRotY(0, 0, 0, KAABA.rotationY);

/** Builds a piece in Kaaba-local space and moves it into the world. */
function local(geometry: BufferGeometry, matrix: Matrix4, uvWorldSize?: number): BufferGeometry {
  normalizeGeometry(geometry);
  geometry.applyMatrix4(matrix);
  // UVs are projected in the Kaaba's own frame, before the 45° turn, so they stay square to
  // its walls.
  if (uvWorldSize) applyBoxUVs(geometry, uvWorldSize);
  geometry.applyMatrix4(KAABA_MATRIX);
  return geometry;
}

/**
 * Which belt-atlas row each half of each side shows, left then right as seen from outside.
 * Rows (see BELT_ATLAS): 0 and 1 are historical belt panels, 2 is the modern dedication panel,
 * which on the real kiswah sits on the door wall, to the right of the door curtain.
 */
const BELT_ROWS: { normal: [number, number]; rows: [number, number] }[] = [
  { normal: [0, 1], rows: [1, 2] }, // north-east (door) wall
  { normal: [1, 0], rows: [0, 1] }, // north-west (Hijr) wall
  { normal: [0, -1], rows: [0, 1] }, // south-west wall
  { normal: [-1, 0], rows: [1, 0] }, // south-east wall
];

/**
 * The belt: two quads per side, each showing one row of the belt atlas (photographic once
 * loaded, abstract until then). Built in the Kaaba's local frame.
 */
export function beltGeometry(): BufferGeometry {
  const offset = 0.02;
  const bottom = KAABA.hizam.bottom;
  const top = bottom + KAABA.hizam.height;
  const { height: atlasH, rowHeight, gap } = BELT_ATLAS;
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const index: number[] = [];
  for (const { normal, rows } of BELT_ROWS) {
    const [nx, nz] = normal;
    // Seen from outside, "right" along this wall is (nz, -nx).
    const rx = nz;
    const rz = -nx;
    const halfLength = (nx !== 0 ? KAABA_HALF_D : KAABA_HALF_W) + offset;
    const reach = (nx !== 0 ? KAABA_HALF_W : KAABA_HALF_D) + offset;
    const cx = nx * reach;
    const cz = nz * reach;
    for (let half = 0; half < 2; half++) {
      const a = -halfLength + half * halfLength; // from the left end, or the middle
      const b = a + halfLength;
      const row = rows[half];
      const vTop = 1 - (row * (rowHeight + gap)) / atlasH;
      const vBottom = 1 - (row * (rowHeight + gap) + rowHeight) / atlasH;
      const base = positions.length / 3;
      for (const [along, y, u, v] of [
        [a, bottom, 0, vBottom],
        [b, bottom, 1, vBottom],
        [b, top, 1, vTop],
        [a, top, 0, vTop],
      ]) {
        positions.push(cx + rx * along, y, cz + rz * along);
        normals.push(nx, 0, nz);
        uvs.push(u, v);
      }
      index.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(index);
  return geometry;
}

/**
 * One corner panel (kardashiyya), folded around a corner of the Kaaba so its medallion sits
 * on the corner edge, half on each wall. `sx`, `sz` (±1) pick the corner in the local frame.
 */
export function cornerPanel(sx: number, sz: number): BufferGeometry {
  const { size, gapBelowBand } = KAABA.cornerPanel;
  const offset = 0.035; // just proud of the cloth
  const top = KAABA.hizam.bottom - gapBelowBand;
  const bottom = top - size;
  const half = size / 2;
  const corner = new Vector3(sx * (KAABA_HALF_W + offset), 0, sz * (KAABA_HALF_D + offset));
  // Directions along each wall, away from the corner, and those walls' normals.
  const alongZWall = new Vector3(-sx, 0, 0);
  const zWallNormal = new Vector3(0, 0, sz);
  const alongXWall = new Vector3(0, 0, -sz);
  const xWallNormal = new Vector3(sx, 0, 0);
  // Seen from outside the corner, which wall is on the left?
  const right = new Vector3(sz, 0, -sx);
  const zWallOnLeft = alongZWall.dot(right) < 0;
  const [leftDir, leftNormal, rightDir, rightNormal] = zWallOnLeft
    ? [alongZWall, zWallNormal, alongXWall, xWallNormal]
    : [alongXWall, xWallNormal, alongZWall, zWallNormal];

  const left = corner.clone().addScaledVector(leftDir, half);
  const rightPoint = corner.clone().addScaledVector(rightDir, half);
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const quad = (a: Vector3, b: Vector3, n: Vector3, u0: number, u1: number) => {
    // a → b runs left to right as seen from outside; wound anticlockwise to face the viewer.
    for (const [p, y, u, v] of [
      [a, bottom, u0, 0],
      [b, bottom, u1, 0],
      [b, top, u1, 1],
      [a, top, u0, 1],
    ] as [Vector3, number, number, number][]) {
      positions.push(p.x, y, p.z);
      normals.push(n.x, n.y, n.z);
      uvs.push(u, v);
    }
  };
  quad(left, corner, leftNormal, 0, 0.5);
  quad(corner, rightPoint, rightNormal, 0.5, 1);
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  geometry.setIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]);
  return geometry;
}

function hijrWall(): BufferGeometry {
  const t = HIJR.thickness;
  const arc = (reach: number, halfSpan: number) => {
    const start = Math.asin(Math.min(1, HIJR.endGap / reach));
    const points: { x: number; z: number }[] = [];
    const segments = 28;
    for (let i = 0; i <= segments; i++) {
      const angle = start + ((Math.PI - 2 * start) * i) / segments;
      points.push({ x: KAABA_HALF_W + reach * Math.sin(angle), z: halfSpan * Math.cos(angle) });
    }
    return points;
  };
  const outer = arc(HIJR.reach + t / 2, HIJR.halfSpan + t / 2);
  const inner = arc(HIJR.reach - t / 2, HIJR.halfSpan - t / 2).reverse();
  // Drawn in (x, -z) so that after turning the extrusion upright it lands at (x, z).
  const shape = new Shape();
  shape.moveTo(outer[0].x, -outer[0].z);
  for (const p of outer.slice(1)) shape.lineTo(p.x, -p.z);
  for (const p of inner) shape.lineTo(p.x, -p.z);
  shape.closePath();
  const geometry = new ExtrudeGeometry(shape, { depth: HIJR.height, bevelEnabled: false });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

/**
 * The Kaaba's body, with texture coordinates counted in repeats of the kiswah's woven pattern.
 * BoxGeometry's own coordinates run left to right and bottom to top on every face as seen from
 * outside, so the woven calligraphy — the name of Allah and the Shahada — reads the right way
 * on all four walls; a projected mapping would mirror it on two of them.
 */
function kiswahBody(): BufferGeometry {
  const { width, depth, height, kiswahWeave } = KAABA;
  const box = new BoxGeometry(width, height, depth);
  const uv = box.getAttribute('uv');
  const normal = box.getAttribute('normal');
  for (let i = 0; i < uv.count; i++) {
    const sideways = Math.abs(normal.getX(i)) > 0.5 ? depth : width;
    const upwards = Math.abs(normal.getY(i)) > 0.5 ? depth : height;
    uv.setXY(i, (uv.getX(i) * sideways) / kiswahWeave.tileWidth, (uv.getY(i) * upwards) / kiswahWeave.tileHeight);
  }
  return box;
}

export function buildKaaba(batch: StaticBatcher): void {
  const { width, depth, height } = KAABA;
  const marbleSize = MATERIAL_UV.marbleWhite?.worldSize ?? 4;

  // Body, covered by the kiswah.
  batch.add(local(kiswahBody(), translation(0, height / 2, 0)), 'kiswah', { uv: 'keep' });

  // The embroidered belt, two-thirds of the way up.
  const band = beltGeometry();
  band.applyMatrix4(KAABA_MATRIX);
  batch.add(band, 'hizam', { uv: 'keep', castShadow: false });

  // Marble base (shadharwan), simplified to a low plinth.
  batch.add(
    local(
      new BoxGeometry(width + KAABA.base.overhang * 2, KAABA.base.height, depth + KAABA.base.overhang * 2),
      translation(0, KAABA.base.height / 2, 0),
      marbleSize
    ),
    'marbleWhite',
    { uv: 'keep' }
  );

  // The door, on the north-eastern wall (local +Z), shown covered by its embroidered curtain
  // (the sitara), which hangs from the band to just below the door.
  const sitaraHeight = KAABA.hizam.bottom - KAABA.sitara.bottom;
  batch.add(
    local(
      new BoxGeometry(KAABA.sitara.width, sitaraHeight, 0.06),
      translation(KAABA.door.centerX, KAABA.sitara.bottom + sitaraHeight / 2, KAABA_HALF_D + 0.03)
    ),
    'sitara',
    { uv: 'keep' }
  );

  // The embroidered panels under the band at the four corners.
  for (const [sx, sz] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]) {
    const panel = cornerPanel(sx, sz);
    panel.applyMatrix4(KAABA_MATRIX);
    batch.add(panel, 'kardashiyya', { uv: 'keep', castShadow: false });
  }

  // The Black Stone in its silver frame, on the eastern corner, facing outwards.
  const bisector = Math.atan2(-1, 1); // local direction (-x, +z) — out of the east corner
  const stoneAt = (offset: number) =>
    new Matrix4()
      .makeRotationY(bisector)
      .setPosition(-KAABA_HALF_W - offset * Math.SQRT1_2, KAABA.blackStoneHeight, KAABA_HALF_D + offset * Math.SQRT1_2);
  const frame = new TorusGeometry(0.34, 0.075, 8, 28);
  frame.scale(1, 1.2, 1);
  batch.add(local(frame, stoneAt(0.12)), 'silver', { uv: 'keep' });
  const stone = new SphereGeometry(0.3, 18, 12);
  stone.scale(1, 1.15, 0.45);
  batch.add(local(stone, stoneAt(0.1)), 'blackStone', { uv: 'keep' });

  // Mizab al-Rahmah: the gold spout on the roof edge over Hijr Ismail (local +X).
  const mizab = new Matrix4()
    .makeRotationZ(-0.12)
    .setPosition(KAABA_HALF_W + 0.55, height - 0.3, 0);
  batch.add(local(new BoxGeometry(1.8, 0.22, 0.34), mizab), 'gold', { uv: 'keep' });

  // Hijr Ismail's semicircular marble wall.
  batch.add(local(hijrWall(), new Matrix4(), marbleSize), 'marbleWhite', { uv: 'keep' });

  buildMaqam(batch);
}

/** Maqam Ibrahim: a gold-framed glass enclosure on a marble base. Shape is approximate. */
function buildMaqam(batch: StaticBatcher): void {
  const p = maqamPosition();
  const at = (y: number) => placeRotY(p.x, y, p.z, KAABA.rotationY);
  const marbleSize = MATERIAL_UV.marbleWhite?.worldSize ?? 4;

  const base = new CylinderGeometry(1.1, 1.2, 0.42, 8);
  base.applyMatrix4(at(0.21));
  applyBoxUVs(normalizeGeometry(base), marbleSize);
  batch.add(base, 'marbleWhite', { uv: 'keep' });

  const cageBottom = 0.42;
  const cageHeight = 1.6;
  const radius = 0.8;
  batch.add(new CylinderGeometry(radius, radius, cageHeight, 8, 1, true), 'glass', {
    matrix: at(cageBottom + cageHeight / 2),
    uv: 'keep',
    castShadow: false,
    receiveShadow: false,
  });
  for (let k = 0; k < 8; k++) {
    const angle = (k / 8) * Math.PI * 2 + Math.PI / 8;
    const bar = new BoxGeometry(0.07, cageHeight, 0.07);
    bar.translate(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    batch.add(bar, 'gold', { matrix: at(cageBottom + cageHeight / 2), uv: 'keep' });
  }
  for (const y of [cageBottom + 0.03, cageBottom + cageHeight]) {
    const ring = new TorusGeometry(radius, 0.05, 6, 24);
    ring.rotateX(Math.PI / 2);
    batch.add(ring, 'gold', { matrix: at(y), uv: 'keep' });
  }
  batch.add(new SphereGeometry(radius + 0.03, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2), 'gold', {
    matrix: at(cageBottom + cageHeight),
    uv: 'keep',
  });
  const domeTop = cageBottom + cageHeight + radius;
  batch.add(new CylinderGeometry(0.035, 0.06, 0.5, 6), 'gold', { matrix: at(domeTop + 0.25), uv: 'keep' });
  batch.add(new SphereGeometry(0.08, 10, 6), 'gold', { matrix: at(domeTop + 0.52), uv: 'keep' });
  // The stone itself, inside its casing.
  batch.add(new BoxGeometry(0.5, 0.42, 0.5), 'silver', { matrix: at(cageBottom + 0.21), uv: 'keep' });
}
