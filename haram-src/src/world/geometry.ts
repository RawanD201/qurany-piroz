// Geometry helpers: world-space UVs, arch and arcade outlines, and the static batcher.
//
// The whole mosque is static, so instead of thousands of separate meshes (one draw call each),
// every piece is transformed into world space and merged with the other pieces that share its
// material and its patch of the map. The result is a few dozen draw calls, while the patches
// (CHUNK_SIZE metres square) still let the camera skip what is behind it.

import {
  BufferAttribute,
  BufferGeometry,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Matrix4,
  Mesh,
  Shape,
  Vector2,
  Vector3,
  type Material,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Vec2 } from '../data/layout';
import { MATERIAL_UV, type MaterialKey, type MaterialLibrary } from './materials';

const CHUNK_SIZE = 110;

// ---- normalising and UVs -------------------------------------------------------------------

/** Keeps only position/normal/uv, adds an index if missing, and drops material groups. */
export function normalizeGeometry(geometry: BufferGeometry): BufferGeometry {
  for (const name of Object.keys(geometry.attributes)) {
    if (name !== 'position' && name !== 'normal' && name !== 'uv') geometry.deleteAttribute(name);
  }
  if (!geometry.getAttribute('normal')) geometry.computeVertexNormals();
  const count = geometry.getAttribute('position').count;
  if (!geometry.getAttribute('uv')) geometry.setAttribute('uv', new Float32BufferAttribute(new Float32Array(count * 2), 2));
  if (!geometry.index) {
    const index = count > 65535 ? new Uint32Array(count) : new Uint16Array(count);
    for (let i = 0; i < count; i++) index[i] = i;
    geometry.setIndex(new BufferAttribute(index, 1));
  }
  geometry.clearGroups();
  return geometry;
}

/**
 * Box-projected UVs from the vertex positions, in units of `worldSize` metres. Each vertex is
 * projected on the plane its normal faces most, so floors, walls and ceilings all tile evenly.
 */
export function applyBoxUVs(geometry: BufferGeometry, worldSize: number): void {
  const position = geometry.getAttribute('position');
  const normal = geometry.getAttribute('normal');
  const uv = geometry.getAttribute('uv') as BufferAttribute;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const nx = Math.abs(normal.getX(i));
    const ny = Math.abs(normal.getY(i));
    const nz = Math.abs(normal.getZ(i));
    if (ny >= nx && ny >= nz) uv.setXY(i, x / worldSize, z / worldSize);
    else if (nx >= nz) uv.setXY(i, z / worldSize, y / worldSize);
    else uv.setXY(i, x / worldSize, y / worldSize);
  }
  uv.needsUpdate = true;
}

/** Scales a geometry's own UVs (e.g. a cylinder's wrap-around UVs). */
export function scaleUVs(geometry: BufferGeometry, su: number, sv: number): void {
  const uv = geometry.getAttribute('uv') as BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  uv.needsUpdate = true;
}

// ---- transforms ------------------------------------------------------------------------------

const _m = new Matrix4();

export function translation(x: number, y: number, z: number): Matrix4 {
  return new Matrix4().makeTranslation(x, y, z);
}

/** Translation then rotation about +Y (three.js convention), as one matrix. */
export function placeRotY(x: number, y: number, z: number, rotationY: number): Matrix4 {
  return new Matrix4().makeRotationY(rotationY).setPosition(x, y, z);
}

/**
 * A frame whose X axis runs along `dir`, Y is up and Z is X × Y (right-handed, so triangle
 * winding survives). Used to lay outlines drawn in 2D (u along, v up) along a wall line.
 */
export function wallFrame(origin: Vec2, dir: Vec2, y = 0): { matrix: Matrix4; across: Vec2 } {
  const x = new Vector3(dir.x, 0, dir.z);
  const up = new Vector3(0, 1, 0);
  const z = new Vector3().crossVectors(x, up);
  const matrix = new Matrix4().makeBasis(x, up, z).setPosition(origin.x, y, origin.z);
  return { matrix, across: { x: z.x, z: z.z } };
}

/**
 * Extrudes an outline drawn in the (u, v) plane by `thickness` along `side` (a unit vector
 * across the wall line), with the outline's u axis running along `dir` from `origin`.
 */
export function extrudeAlong(
  shape: Shape,
  origin: Vec2,
  dir: Vec2,
  side: Vec2,
  thickness: number,
  y = 0,
  curveSegments = 6
): BufferGeometry {
  const geometry = new ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, curveSegments });
  const { matrix, across } = wallFrame(origin, dir, y);
  // The frame extrudes along `across`; if that points the other way from `side`, start the
  // extrusion one thickness further out so the solid still covers [0, thickness] along `side`.
  const flipped = across.x * side.x + across.z * side.z < 0;
  if (flipped) matrix.premultiply(_m.makeTranslation(side.x * thickness, 0, side.z * thickness));
  geometry.applyMatrix4(matrix);
  return geometry;
}

// ---- arches ------------------------------------------------------------------------------------

/**
 * Points of a pointed (two-centred) arch from (x0, spring) over the apex to (x1, spring).
 * `sharpness` is the arc radius as a fraction of the span (0.5 = round, ~0.85 = pointed).
 */
export function pointedArch(x0: number, x1: number, spring: number, segments = 8, sharpness = 0.82): Vector2[] {
  const span = x1 - x0;
  const radius = Math.max(span * sharpness, span / 2 + 1e-6);
  const mid = (x0 + x1) / 2;
  const points: Vector2[] = [];
  const leftCenter = x0 + radius;
  const apexAngle = Math.acos((mid - leftCenter) / radius);
  for (let i = 0; i <= segments; i++) {
    const a = Math.PI + (apexAngle - Math.PI) * (i / segments);
    points.push(new Vector2(leftCenter + Math.cos(a) * radius, spring + Math.sin(a) * radius));
  }
  const rightCenter = x1 - radius;
  for (let i = 1; i <= segments; i++) {
    const a = Math.PI - apexAngle - (Math.PI - apexAngle) * (i / segments);
    points.push(new Vector2(rightCenter + Math.cos(a) * radius, spring + Math.sin(a) * radius));
  }
  return points;
}

/** Height of a pointed arch's apex above its springing line. */
export function archRise(span: number, sharpness = 0.82): number {
  const radius = Math.max(span * sharpness, span / 2);
  return Math.sqrt(radius * radius - (radius - span / 2) * (radius - span / 2));
}

/**
 * An arcade wall outline: piers of width `pier` centred at u = 0, bay, 2·bay, … with pointed
 * arch openings between them, cut up from the floor. Drawn as one outline (not holes) so the
 * openings can reach the ground.
 */
export function arcadeOutline(length: number, bays: number, height: number, pier: number, spring: number): Shape {
  const bay = length / bays;
  const shape = new Shape();
  shape.moveTo(-pier / 2, 0);
  for (let k = 0; k < bays; k++) {
    const a = k * bay + pier / 2;
    const c = (k + 1) * bay - pier / 2;
    shape.lineTo(a, 0);
    shape.lineTo(a, spring);
    // The arch's first point is (a, spring), already reached above.
    for (const p of pointedArch(a, c, spring).slice(1)) shape.lineTo(p.x, p.y);
    shape.lineTo(c, 0);
  }
  shape.lineTo(length + pier / 2, 0);
  shape.lineTo(length + pier / 2, height);
  shape.lineTo(-pier / 2, height);
  shape.closePath();
  return shape;
}

/** A solid wall outline with rows of closed arched openings (used for blind arcades). */
export function windowedOutline(
  length: number,
  height: number,
  bays: number,
  rows: { bottom: number; spring: number }[],
  openingFraction: number
): Shape {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(length, 0);
  shape.lineTo(length, height);
  shape.lineTo(0, height);
  shape.closePath();
  const bay = length / bays;
  const width = bay * openingFraction;
  for (const row of rows) {
    for (let k = 0; k < bays; k++) {
      const a = k * bay + (bay - width) / 2;
      const c = a + width;
      const hole = new Shape();
      hole.moveTo(a, row.bottom);
      hole.lineTo(c, row.bottom);
      hole.lineTo(c, row.spring);
      const arch = pointedArch(a, c, row.spring, 6);
      // Walk the arch back from right to left, skipping the point (c, spring) just drawn.
      for (let i = arch.length - 2; i >= 0; i--) hole.lineTo(arch[i].x, arch[i].y);
      hole.closePath();
      shape.holes.push(hole);
    }
  }
  return shape;
}

// ---- the batcher -------------------------------------------------------------------------------

export interface BatchOptions {
  /** World transform to apply first. */
  matrix?: Matrix4;
  /** 'box' (default): world-space box projection. 'keep': the geometry already has UVs. */
  uv?: 'box' | 'keep';
  castShadow?: boolean;
  receiveShadow?: boolean;
}

interface Bucket {
  material: MaterialKey;
  castShadow: boolean;
  receiveShadow: boolean;
  geometries: BufferGeometry[];
}

export class StaticBatcher {
  private readonly buckets = new Map<string, Bucket>();
  private readonly center = new Vector3();

  add(geometry: BufferGeometry, material: MaterialKey, options: BatchOptions = {}): void {
    const g = normalizeGeometry(geometry);
    if (options.matrix) g.applyMatrix4(options.matrix);
    if ((options.uv ?? 'box') === 'box') {
      const uv = MATERIAL_UV[material];
      if (uv) applyBoxUVs(g, uv.worldSize);
    }
    g.computeBoundingBox();
    g.boundingBox?.getCenter(this.center);
    const cx = Math.floor(this.center.x / CHUNK_SIZE);
    const cz = Math.floor(this.center.z / CHUNK_SIZE);
    const castShadow = options.castShadow ?? true;
    const receiveShadow = options.receiveShadow ?? true;
    const key = `${material}|${castShadow ? 1 : 0}${receiveShadow ? 1 : 0}|${cx},${cz}`;
    let bucket = this.buckets.get(key);
    if (!bucket) {
      bucket = { material, castShadow, receiveShadow, geometries: [] };
      this.buckets.set(key, bucket);
    }
    bucket.geometries.push(g);
  }

  /** Merges every bucket into one mesh. The batcher is empty afterwards. */
  build(materials: MaterialLibrary): Mesh[] {
    const meshes: Mesh[] = [];
    for (const bucket of this.buckets.values()) {
      const merged = mergeGeometries(bucket.geometries, false);
      for (const g of bucket.geometries) g.dispose();
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new Mesh(merged, materials[bucket.material] as Material);
      mesh.castShadow = bucket.castShadow;
      mesh.receiveShadow = bucket.receiveShadow;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      mesh.userData.materialKey = bucket.material;
      meshes.push(mesh);
    }
    this.buckets.clear();
    return meshes;
  }
}
