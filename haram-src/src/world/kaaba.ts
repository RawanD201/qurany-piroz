// The Kaaba and the features immediately around it: the kiswah with its band and corner panels,
// the doorway, the Black Stone, the Mizab, Hijr Ismail and Maqam Ibrahim. (The door curtain and
// the stairs, which change when the door is opened, are in kaaba-door.ts.)
//
// Everything is modelled in the Kaaba's local frame (see layout.ts) and then turned into place.
// Proportions follow published approximate dimensions; details are deliberately simplified,
// and the kiswah's calligraphy is NOT reproduced (see textures.ts).

import {
  BoxGeometry,
  BufferGeometry,
  CircleGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Float32BufferAttribute,
  LatheGeometry,
  Matrix4,
  PlaneGeometry,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { KAABA_INTERIOR } from '../data/kaaba-interior';
import { HIJR, KAABA, KAABA_HALF_D, KAABA_HALF_W, MAQAM, maqamPosition } from '../data/layout';
import { applyBoxUVs, normalizeGeometry, placeRotY, translation, type StaticBatcher } from './geometry';
import { MATERIAL_UV } from './materials';
import { BELT_ATLAS } from './textures';

export const KAABA_MATRIX = placeRotY(0, 0, 0, KAABA.rotationY);

/** Builds a piece in Kaaba-local space and moves it into the world. */
export function local(geometry: BufferGeometry, matrix: Matrix4, uvWorldSize?: number): BufferGeometry {
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
 *
 * The door wall (+Z) leaves the doorway open, behind the curtain, so the door can be opened
 * (kaaba-door.ts): it is built in four pieces round it, their coordinates continuing the box's.
 */
function kiswahBody(): BufferGeometry {
  const { width, depth, height, kiswahWeave, door } = KAABA;
  const box = new BoxGeometry(width, height, depth);
  const uv = box.getAttribute('uv');
  const normal = box.getAttribute('normal');
  for (let i = 0; i < uv.count; i++) {
    const sideways = Math.abs(normal.getX(i)) > 0.5 ? depth : width;
    const upwards = Math.abs(normal.getY(i)) > 0.5 ? depth : height;
    uv.setXY(i, (uv.getX(i) * sideways) / kiswahWeave.tileWidth, (uv.getY(i) * upwards) / kiswahWeave.tileHeight);
  }
  // BoxGeometry's faces are +X, −X, +Y, −Y, +Z, −Z: drop the fifth.
  const doorWall = box.groups[4];
  const index = Array.from(box.getIndex()?.array ?? []);
  index.splice(doorWall.start, doorWall.count);
  box.setIndex(index);
  box.clearGroups();
  const x0 = door.centerX - door.width / 2;
  const x1 = door.centerX + door.width / 2;
  const y0 = door.bottom;
  const y1 = door.bottom + door.height;
  const pieces: BufferGeometry[] = [box];
  // Left and right of the doorway, below it and above it (x from, x to, y from, y to; y up from the floor).
  for (const [a, b, c, d] of [
    [-width / 2, x0, 0, height],
    [x1, width / 2, 0, height],
    [x0, x1, 0, y0],
    [x0, x1, y1, height],
  ]) {
    const piece = new PlaneGeometry(b - a, d - c).translate((a + b) / 2, (c + d) / 2 - height / 2, depth / 2);
    const position = piece.getAttribute('position');
    const pieceUV = piece.getAttribute('uv');
    for (let i = 0; i < pieceUV.count; i++) {
      pieceUV.setXY(i, (position.getX(i) + width / 2) / kiswahWeave.tileWidth, (position.getY(i) + height / 2) / kiswahWeave.tileHeight);
    }
    pieces.push(piece);
  }
  const body = mergeGeometries(pieces, false);
  if (!body) throw new Error('Could not build the Kaaba');
  for (const piece of pieces) piece.dispose();
  return body;
}

/**
 * The doorway through the wall, behind the curtain: gilded jambs and lintel, and a marble sill
 * level with the room's floor. Seen only when the door is open.
 */
function addDoorway(batch: StaticBatcher, marbleSize: number): void {
  const { door } = KAABA;
  const wall = KAABA_INTERIOR.wall;
  const middle = KAABA_HALF_D - wall / 2;
  const top = door.bottom + door.height;
  const jambs = [
    new PlaneGeometry(wall, door.height).rotateY(Math.PI / 2).translate(door.centerX - door.width / 2, door.bottom + door.height / 2, middle),
    new PlaneGeometry(wall, door.height).rotateY(-Math.PI / 2).translate(door.centerX + door.width / 2, door.bottom + door.height / 2, middle),
    new PlaneGeometry(door.width, wall).rotateX(Math.PI / 2).translate(door.centerX, top, middle),
  ];
  for (const jamb of jambs) batch.add(local(jamb, new Matrix4()), 'gold', { uv: 'keep', castShadow: false });
  const sill = new PlaneGeometry(door.width, wall).rotateX(-Math.PI / 2).translate(door.centerX, KAABA_INTERIOR.floorY + 0.004, middle);
  batch.add(local(sill, new Matrix4(), marbleSize), 'marbleWhite', { uv: 'keep', castShadow: false });
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

  // The doorway on the north-eastern wall (local +Z); its curtain and the door are in kaaba-door.ts.
  addDoorway(batch, marbleSize);

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

  // The Black Stone in its silver frame, set into the eastern corner.
  const blackStone = blackStoneParts();
  for (const part of [blackStone.frame, blackStone.stone]) part.applyMatrix4(KAABA_MATRIX);
  batch.add(blackStone.frame, 'silver', { uv: 'keep', castShadow: false });
  batch.add(blackStone.stone, 'blackStone', { uv: 'keep', castShadow: false });

  // Mizab al-Rahmah: the gold spout on the roof edge over Hijr Ismail (local +X).
  const mizab = new Matrix4()
    .makeRotationZ(-0.12)
    .setPosition(KAABA_HALF_W + 0.55, height - 0.3, 0);
  batch.add(local(new BoxGeometry(1.8, 0.22, 0.34), mizab), 'gold', { uv: 'keep' });

  // Hijr Ismail's semicircular marble wall.
  batch.add(local(hijrWall(), new Matrix4(), marbleSize), 'marbleWhite', { uv: 'keep' });

  buildMaqam(batch);
}

// ---- the Black Stone ---------------------------------------------------------------------------

/**
 * The Black Stone's frame, as photographed: a broad plate of polished silver shaped like a shield
 * with a pointed foot, wrapped round the Kaaba's eastern corner (the corner shows as a rounded
 * crease down its middle), rising to a thick rolled rim round an oval opening; inside it, set a
 * little deeper, the stone's fragments. The exposed face is about 20 × 16 cm and the frame is
 * pure silver (Wikipedia; Saudipedia); the plate's size is estimated from photographs.
 *
 * Built on the corner's outside: a point is given by `u` (metres along the walls, across the
 * corner; 0 on the corner, positive towards the door), `v` (metres up from the stone's centre)
 * and `h` (height off the wall). Round the corner itself the walls are joined by an arc of
 * radius `h`, so nothing ever dips inside the kiswah.
 */
const BLACK_STONE = {
  /** The opening (the stone's exposed face, unwrapped): semi-axes across and up. */
  opening: { u: 0.095, v: 0.125 },
  /** The rolled rim round it: its tube's radius, and its height off the wall. */
  rim: { tube: 0.022, h: 0.052 },
  /** The stone's face, set back inside the rim. */
  stoneH: 0.022,
  /** The plate: half its width, its height above and below the opening's centre. */
  plate: { halfWidth: 0.43, top: 0.33, bottom: 0.38, edgeH: 0.01 },
} as const;

/** Kaaba-local position on the frame's surface (see BLACK_STONE). */
function onBlackStoneCorner(u: number, v: number, h: number, out = new Vector3()): Vector3 {
  const cx = -KAABA_HALF_W;
  const cz = KAABA_HALF_D;
  const y = KAABA.blackStoneHeight + v;
  const arc = (h * Math.PI) / 4;
  if (u > arc) return out.set(cx + (u - arc), y, cz + h); // on the door wall (+Z face)
  if (u < -arc) return out.set(cx - h, y, cz - (-u - arc)); // on the south-east wall (−X face)
  // Round the corner: from the −X face's normal (θ = −45°) to the +Z face's (θ = +45°).
  const theta = u / h;
  const bx = -Math.SQRT1_2;
  const bz = Math.SQRT1_2;
  const tx = Math.SQRT1_2;
  const tz = Math.SQRT1_2;
  return out.set(cx + h * (bx * Math.cos(theta) + tx * Math.sin(theta)), y, cz + h * (bz * Math.cos(theta) + tz * Math.sin(theta)));
}

/** The plate's outline (unwrapped u, v): a broad rounded top and a tapering, pointed foot. */
function blackStoneOutline(): { u: number; v: number }[] {
  const { halfWidth, top, bottom } = BLACK_STONE.plate;
  const points: { u: number; v: number }[] = [];
  const upper = 40;
  for (let k = 0; k <= upper; k++) {
    // A rounded, slightly squared top (a superellipse), broadest a little above the opening.
    const a = (k / upper) * Math.PI;
    const cu = Math.cos(a);
    const sv = Math.sin(a);
    points.push({ u: halfWidth * Math.sign(cu) * Math.pow(Math.abs(cu), 0.8), v: top * Math.pow(sv, 0.8) });
  }
  const lower = 40;
  for (const side of [-1, 1]) {
    const run: { u: number; v: number }[] = [];
    for (let k = 1; k <= lower; k++) {
      const t = k / lower;
      run.push({ u: side * halfWidth * Math.pow(1 - t * t, 1.8), v: -bottom * t });
    }
    if (side > 0) run.reverse();
    points.push(...run);
  }
  return points;
}

/** Where the ray from the opening's centre through (u, v) leaves the outline. */
function outlineAlong(outline: readonly { u: number; v: number }[], u: number, v: number): { u: number; v: number } {
  const len = Math.hypot(u, v) || 1;
  const du = u / len;
  const dv = v / len;
  let best = Infinity;
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i];
    const b = outline[(i + 1) % outline.length];
    const eu = b.u - a.u;
    const ev = b.v - a.v;
    const den = du * ev - dv * eu;
    if (Math.abs(den) < 1e-12) continue;
    const t = (a.u * ev - a.v * eu) / den;
    const s = (a.u * dv - a.v * du) / den;
    if (t > 0 && s >= 0 && s <= 1) best = Math.min(best, t);
  }
  return { u: du * best, v: dv * best };
}

/**
 * A surface built in (u, v, h) on the corner. Each vertex carries the way its surface should
 * face (also in u, v, h); triangles are wound to face that way, so the shapes can be built
 * without minding their winding.
 */
class CornerSurface {
  readonly positions: number[] = [];
  readonly uvs: number[] = [];
  readonly facing: Vector3[] = [];
  readonly index: number[] = [];

  /** Adds a vertex; `face` is the direction (du, dv, dh) the surface faces there. */
  vertex(u: number, v: number, h: number, face: [number, number, number], uv: [number, number] = [0, 0]): number {
    const p = onBlackStoneCorner(u, v, h);
    this.positions.push(p.x, p.y, p.z);
    this.uvs.push(uv[0], uv[1]);
    // The facing direction, carried through the same mapping.
    const step = 0.002;
    const q = onBlackStoneCorner(u + face[0] * step, v + face[1] * step, Math.max(1e-4, h + face[2] * step));
    this.facing.push(q.sub(p));
    return this.positions.length / 3 - 1;
  }

  /** A quad strip: rows of equal length, row k joined to row k + 1 (closed round if `loop`). */
  grid(rows: number[][], loop: boolean): void {
    for (let r = 0; r + 1 < rows.length; r++) {
      const a = rows[r];
      const b = rows[r + 1];
      const n = loop ? a.length : a.length - 1;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % a.length;
        this.triangle(a[i], b[i], a[j]);
        this.triangle(a[j], b[i], b[j]);
      }
    }
  }

  triangle(a: number, b: number, c: number): void {
    const pa = new Vector3().fromArray(this.positions, a * 3);
    const pb = new Vector3().fromArray(this.positions, b * 3);
    const pc = new Vector3().fromArray(this.positions, c * 3);
    const normal = pb.sub(pa).cross(pc.sub(pa));
    const want = new Vector3().add(this.facing[a]).add(this.facing[b]).add(this.facing[c]);
    if (normal.dot(want) >= 0) this.index.push(a, b, c);
    else this.index.push(a, c, b);
  }

  build(): BufferGeometry {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(this.positions, 3));
    geometry.setAttribute('uv', new Float32BufferAttribute(this.uvs, 2));
    geometry.setIndex(this.index);
    geometry.computeVertexNormals();
    return geometry;
  }
}

/**
 * The Black Stone's frame (silver) and face (the stone), in the Kaaba's local frame. Exported
 * for the geometry tests.
 */
export function blackStoneParts(): { frame: BufferGeometry; stone: BufferGeometry } {
  const { opening, rim, stoneH, plate } = BLACK_STONE;
  const ringU = opening.u + rim.tube;
  const ringV = opening.v + rim.tube;
  const around = 96;
  const tube = 12;
  const radial = 14;
  const outline = blackStoneOutline();
  const frame = new CornerSurface();
  const stone = new CornerSurface();

  // Per step round the opening: the rim tube's centre and its outward direction (in u, v).
  const ring = Array.from({ length: around }, (_, k) => {
    const a = (k / around) * Math.PI * 2;
    const cu = ringU * Math.cos(a);
    const cv = ringV * Math.sin(a);
    const nu = ringV * Math.cos(a);
    const nv = ringU * Math.sin(a);
    const nl = Math.hypot(nu, nv);
    return { cu, cv, nu: nu / nl, nv: nv / nl };
  });

  // The rolled rim: a tube round the opening.
  const tubeRows: number[][] = [];
  for (let t = 0; t <= tube; t++) {
    const psi = (t / tube) * Math.PI * 2;
    const c = Math.cos(psi);
    const sn = Math.sin(psi);
    tubeRows.push(ring.map((r) => frame.vertex(r.cu + r.nu * rim.tube * c, r.cv + r.nv * rim.tube * c, rim.h + rim.tube * sn, [r.nu * c, r.nv * c, sn])));
  }
  frame.grid(tubeRows, true);

  // The plate: from the rim's outer side down and out to the outline, then a thin edge to the wall.
  const plateRows: number[][] = [];
  for (let k = 0; k <= radial; k++) {
    const s = k / radial;
    plateRows.push(
      ring.map((r) => {
        const inner = { u: r.cu + r.nu * rim.tube, v: r.cv + r.nv * rim.tube };
        const edge = outlineAlong(outline, inner.u, inner.v);
        const u = inner.u + (edge.u - inner.u) * s;
        const v = inner.v + (edge.v - inner.v) * s;
        // Steep just outside the rim, flattening towards the edge: a shallow, polished bowl.
        const h = plate.edgeH + (rim.h - plate.edgeH) * Math.pow(1 - s, 2.2);
        return frame.vertex(u, v, h, [0, 0, 1]);
      })
    );
  }
  frame.grid(plateRows, true);
  const wallRow = ring.map((r) => {
    const inner = { u: r.cu + r.nu * rim.tube, v: r.cv + r.nv * rim.tube };
    const edge = outlineAlong(outline, inner.u, inner.v);
    const len = Math.hypot(edge.u, edge.v) || 1;
    return frame.vertex(edge.u, edge.v, 0.001, [edge.u / len, edge.v / len, 0]);
  });
  // The edge's own vertices again, facing outwards (a crisp edge, not smoothed into the top).
  const edgeTop = ring.map((r) => {
    const inner = { u: r.cu + r.nu * rim.tube, v: r.cv + r.nv * rim.tube };
    const edge = outlineAlong(outline, inner.u, inner.v);
    const len = Math.hypot(edge.u, edge.v) || 1;
    return frame.vertex(edge.u, edge.v, plate.edgeH, [edge.u / len, edge.v / len, 0]);
  });
  frame.grid([edgeTop, wallRow], true);

  // The well inside the rim, down to the stone.
  const wellTop = ring.map((r) => frame.vertex(r.cu - r.nu * rim.tube, r.cv - r.nv * rim.tube, rim.h, [-r.nu, -r.nv, 0]));
  const wellBottom = ring.map((r) => frame.vertex(r.cu - r.nu * rim.tube, r.cv - r.nv * rim.tube, stoneH, [-r.nu, -r.nv, 0]));
  frame.grid([wellTop, wellBottom], true);

  // The stone: a slightly domed face filling the opening, its texture spanning it.
  const stoneRows: number[][] = [];
  const centre = stone.vertex(0, 0, stoneH + 0.012, [0, 0, 1], [0.5, 0.5]);
  for (let k = 1; k <= 6; k++) {
    const s = k / 6;
    stoneRows.push(
      ring.map((r) => {
        const u = (r.cu - r.nu * rim.tube) * s;
        const v = (r.cv - r.nv * rim.tube) * s;
        return stone.vertex(u, v, stoneH + 0.012 * (1 - s * s), [0, 0, 1], [0.5 + u / (2 * opening.u), 0.5 + v / (2 * opening.v)]);
      })
    );
  }
  for (let i = 0; i < around; i++) stone.triangle(centre, stoneRows[0][i], stoneRows[0][(i + 1) % around]);
  stone.grid(stoneRows, true);

  return { frame: frame.build(), stone: stone.build() };
}

// ---- Maqam Ibrahim ------------------------------------------------------------------------------

/** An upright octagonal prism (or frustum) with flat faces, one face towards local +Z. */
function octagon(apothemBottom: number, apothemTop: number, height: number, open = false): BufferGeometry {
  const toRadius = 1 / Math.cos(Math.PI / 8);
  const g = new CylinderGeometry(apothemTop * toRadius, apothemBottom * toRadius, height, 8, 1, open, Math.PI / 8);
  // Flat-shaded facets: each face keeps its own normal.
  const flat = g.toNonIndexed();
  g.dispose();
  flat.computeVertexNormals();
  return flat;
}

/**
 * Maqam Ibrahim (see MAQAM in layout.ts): on a round base of white marble over green granite, an
 * eight-sided cage of gilded brass — a solid band at its foot, a pierced arabesque grille on
 * every face (glass behind it), a frieze, a cornice — under a shallow eight-sided roof, a collar,
 * a small drum and dome, and a beaded finial with a crescent. Inside, the crystal cover stands
 * over the stone in its casing, with the two footprints on top.
 */
function buildMaqam(batch: StaticBatcher): void {
  const p = maqamPosition();
  const at = (y: number) => placeRotY(p.x, y, p.z, KAABA.rotationY);
  const add = (geometry: BufferGeometry, material: Parameters<StaticBatcher['add']>[1], y: number, options: { castShadow?: boolean } = {}) =>
    batch.add(geometry, material, { matrix: at(y), uv: 'keep', ...options });
  const { base, cage, crystal, stone, roof } = MAQAM;
  const marbleSize = MATERIAL_UV.marbleWhite?.worldSize ?? 4;
  const apothem = cage.side / (2 * Math.tan(Math.PI / 8));
  const corner = cage.side / (2 * Math.sin(Math.PI / 8));

  // The base: a green granite plinth, the white marble drum and its lip.
  add(new CylinderGeometry(base.radius + 0.06, base.radius + 0.08, base.plinth, 40), 'granite', base.plinth / 2);
  const drum = new CylinderGeometry(base.radius - 0.02, base.radius, base.height - base.plinth - 0.07, 40);
  drum.applyMatrix4(at(base.plinth + (base.height - base.plinth - 0.07) / 2));
  applyBoxUVs(normalizeGeometry(drum), marbleSize);
  batch.add(drum, 'marbleWhite', { uv: 'keep' });
  const lip = new CylinderGeometry(base.radius + 0.03, base.radius + 0.01, 0.07, 40);
  lip.applyMatrix4(at(base.height - 0.035));
  applyBoxUVs(normalizeGeometry(lip), marbleSize);
  batch.add(lip, 'marbleWhite', { uv: 'keep' });

  // The cage.
  const foot = base.height;
  const panelBottom = foot + cage.footBand;
  const panelTop = panelBottom + cage.panel;
  const cageTop = panelTop + cage.frieze;
  add(octagon(apothem + 0.02, apothem + 0.02, cage.footBand), 'brass', foot + cage.footBand / 2);
  add(octagon(apothem + 0.02, apothem + 0.02, cage.frieze), 'brass', panelTop + cage.frieze / 2);
  // A grille on each face, and a pane of glass just inside it.
  for (let k = 0; k < 8; k++) {
    const angle = (k / 8) * Math.PI * 2;
    const face = new Matrix4().makeRotationY(angle).multiply(translation(0, 0, apothem));
    const grille = new PlaneGeometry(cage.side, cage.panel);
    grille.applyMatrix4(face);
    add(grille, 'goldLattice', panelBottom + cage.panel / 2, { castShadow: true });
    const pane = new PlaneGeometry(cage.side, cage.panel).applyMatrix4(new Matrix4().makeRotationY(angle).multiply(translation(0, 0, apothem - 0.03)));
    batch.add(pane, 'glass', { matrix: at(panelBottom + cage.panel / 2), uv: 'keep', castShadow: false, receiveShadow: false });
    // The posts at the corners, from the foot band to the frieze.
    const postAngle = angle + Math.PI / 8;
    const post = new BoxGeometry(0.085, cageTop - foot, 0.085).translate(Math.sin(postAngle) * corner, 0, Math.cos(postAngle) * corner);
    add(post, 'brass', foot + (cageTop - foot) / 2);
  }
  // The cornice, and the roof rising from it to the collar.
  add(octagon(apothem + 0.07, apothem + 0.07, 0.05), 'brass', cageTop + 0.025);
  const roofBottom = cageTop + 0.05;
  add(octagon(apothem + 0.07, roof.collarApothem, roof.rise), 'brass', roofBottom + roof.rise / 2);
  const collarBottom = roofBottom + roof.rise;
  add(octagon(roof.collarApothem, roof.collarApothem, roof.collar), 'brass', collarBottom + roof.collar / 2);
  // Drum and dome.
  const drumBottom = collarBottom + roof.collar;
  add(new CylinderGeometry(roof.dome + 0.012, roof.dome + 0.012, 0.03, 32), 'brass', drumBottom + 0.015);
  add(new CylinderGeometry(roof.dome, roof.dome, roof.drum, 32, 1, true), 'brass', drumBottom + roof.drum / 2);
  const domeBase = drumBottom + roof.drum;
  add(new SphereGeometry(roof.dome, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.85, 1), 'brass', domeBase);
  // The finial: a rod with three beads, and a crescent opening upwards.
  const finialBase = domeBase + roof.dome * 0.85;
  add(new CylinderGeometry(0.012, 0.016, roof.finial, 8), 'brass', finialBase + roof.finial / 2);
  for (const [y, r] of [[0.04, 0.032], [0.11, 0.042], [0.18, 0.028]] as const) add(new SphereGeometry(r, 12, 8), 'brass', finialBase + y);
  const crescent = new TorusGeometry(0.055, 0.011, 6, 24, Math.PI * 1.45);
  // Turn the gap in the ring (centred at 1.725π) to the top, so the horns point up.
  crescent.rotateZ(Math.PI / 2 - (Math.PI * 2 + Math.PI * 1.45) / 2);
  add(crescent, 'brass', finialBase + roof.finial + 0.04);

  // Inside: the stone in its casing on the base, two footprints on its top, under the crystal.
  const stoneTop = panelBottom + stone.height;
  add(new BoxGeometry(stone.size, stone.height + cage.footBand, stone.size), 'brass', foot + (stone.height + cage.footBand) / 2);
  for (const side of [-1, 1]) {
    const print = new CircleGeometry(0.5, 24).rotateX(-Math.PI / 2).scale(stone.foot.width, 1, stone.foot.length);
    print.translate(side * 0.085, 0, 0.01);
    // A plain, dark patch of the stone texture (not its fragments).
    const uv = print.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.5 + (uv.getX(i) - 0.5) * 0.04, 0.12 + (uv.getY(i) - 0.5) * 0.04);
    add(print, 'blackStone', stoneTop + 0.002, { castShadow: false });
  }
  const bell = new LatheGeometry(
    [
      new Vector2(crystal.radius, 0),
      new Vector2(crystal.radius, crystal.height * 0.45),
      new Vector2(crystal.radius * 0.92, crystal.height * 0.68),
      new Vector2(crystal.radius * 0.72, crystal.height * 0.86),
      new Vector2(crystal.radius * 0.42, crystal.height * 0.97),
      new Vector2(0.001, crystal.height),
    ],
    32
  );
  batch.add(bell, 'glass', { matrix: at(panelBottom - 0.02), uv: 'keep', castShadow: false, receiveShadow: false });
}
