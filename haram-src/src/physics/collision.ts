// A small 2D collision world for a walking visitor.
//
// Each world has a single floor level, so collision is solved top-down: the visitor is a
// circle on the XZ plane, and everything they can bump into is a circle (columns, the Maqam,
// minarets, rocks) or a thick line segment (walls, piers, the Hijr's curve, the Kaaba's sides).
// The one thing to climb, the stairs at the Kaaba's door, is a raised surface walled in on its
// sides: it changes only how high the visitor stands, never where they can go.
// Shapes are bucketed in a uniform grid, so each frame only looks at the handful of shapes in
// the cells around the visitor — cheap enough for any phone, with no physics library.
//
// The same grid answers line-of-sight questions for the place markers ("is there a wall
// between the camera and this marker?") using only the shapes flagged as tall.

import { MOVEMENT } from '../config';

export interface Bounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

interface CircleShape {
  kind: 0;
  x: number;
  z: number;
  r: number;
  tall: boolean;
}

interface SegmentShape {
  kind: 1;
  ax: number;
  az: number;
  bx: number;
  bz: number;
  /** Half-thickness of the segment. */
  r: number;
  tall: boolean;
}

type Shape = CircleShape | SegmentShape;

/** Walkability on a regular grid over the world (see CollisionWorld.rasterize). */
export interface BlockedGrid {
  minX: number;
  minZ: number;
  cellSize: number;
  width: number;
  height: number;
  /** 1 where the visitor cannot stand, row-major (index = j * width + i). */
  blocked: Uint8Array;
}

export interface ShapeOptions {
  /** Tall shapes block the line of sight to place markers. */
  tall?: boolean;
}

const CELL_OFFSET = 4096;

function cellKey(ix: number, iz: number): number {
  return (ix + CELL_OFFSET) * 8192 + (iz + CELL_OFFSET);
}

export class CollisionWorld {
  private readonly shapes: Shape[] = [];
  private readonly cells = new Map<number, number[]>();
  private stamps = new Uint32Array(64);
  private queryId = 0;
  private raised: ((x: number, z: number) => number) | null = null;

  constructor(
    readonly bounds: Bounds,
    private readonly cellSize = 8,
    /** Floor height of this world (the ground is 0; the clock-tower balcony is high up). */
    readonly floor = 0
  ) {}

  get shapeCount(): number {
    return this.shapes.length;
  }

  addCircle(x: number, z: number, r: number, options: ShapeOptions = {}): void {
    this.insert({ kind: 0, x, z, r, tall: options.tall ?? false }, x - r, z - r, x + r, z + r);
  }

  addSegment(ax: number, az: number, bx: number, bz: number, halfThickness: number, options: ShapeOptions = {}): void {
    const r = halfThickness;
    this.insert(
      { kind: 1, ax, az, bx, bz, r, tall: options.tall ?? false },
      Math.min(ax, bx) - r,
      Math.min(az, bz) - r,
      Math.max(ax, bx) + r,
      Math.max(az, bz) + r
    );
  }

  addPolyline(points: readonly { x: number; z: number }[], halfThickness: number, options: ShapeOptions = {}): void {
    for (let i = 0; i < points.length - 1; i++) {
      this.addSegment(points[i].x, points[i].z, points[i + 1].x, points[i + 1].z, halfThickness, options);
    }
  }

  /** A solid rectangle, rotated about +Y (same convention as three.js `rotation.y`). */
  addBox(cx: number, cz: number, halfX: number, halfZ: number, rotationY: number, options: ShapeOptions = {}): void {
    const c = Math.cos(rotationY);
    const s = Math.sin(rotationY);
    const corner = (lx: number, lz: number) => ({ x: cx + lx * c + lz * s, z: cz - lx * s + lz * c });
    const pts = [corner(-halfX, -halfZ), corner(halfX, -halfZ), corner(halfX, halfZ), corner(-halfX, halfZ)];
    pts.push(pts[0]);
    this.addPolyline(pts, 0.02, options);
  }

  /**
   * Adds a raised walking surface (the stairs at the Kaaba's door): its height at a point, or
   * anything at or below the floor where there is none.
   */
  setRaised(height: (x: number, z: number) => number): void {
    this.raised = height;
  }

  /** Ground height under a point: the floor, or the raised surface there. */
  groundHeight(x: number, z: number): number {
    return this.raised ? Math.max(this.floor, this.raised(x, z)) : this.floor;
  }

  /** Whether a circle of `radius` at (x, z) overlaps nothing. */
  isFree(x: number, z: number, radius: number): boolean {
    if (x - radius < this.bounds.minX || x + radius > this.bounds.maxX) return false;
    if (z - radius < this.bounds.minZ || z + radius > this.bounds.maxZ) return false;
    let free = true;
    this.forEachNear(x - radius, z - radius, x + radius, z + radius, (shape) => {
      if (free && penetration(shape, x, z, radius) > 1e-4) free = false;
    });
    return free;
  }

  /**
   * Moves a circle by (dx, dz), sliding along anything in the way. The move is split into
   * sub-steps no longer than MOVEMENT.maxSubstep, which is less than the visitor's radius, so a
   * fast step can never jump straight through a thin wall.
   */
  move(x: number, z: number, dx: number, dz: number, radius: number): { x: number; z: number } {
    const distance = Math.hypot(dx, dz);
    const steps = Math.max(1, Math.ceil(distance / MOVEMENT.maxSubstep));
    let px = x;
    let pz = z;
    for (let i = 0; i < steps; i++) {
      const resolved = this.resolve(px + dx / steps, pz + dz / steps, radius);
      px = resolved.x;
      pz = resolved.z;
    }
    return { x: px, z: pz };
  }

  /** Pushes a circle out of every shape it overlaps, and back inside the world bounds. */
  resolve(x: number, z: number, radius: number): { x: number; z: number } {
    let px = x;
    let pz = z;
    for (let iteration = 0; iteration < 4; iteration++) {
      let moved = false;
      this.forEachNear(px - radius, pz - radius, px + radius, pz + radius, (shape) => {
        const push = pushOut(shape, px, pz, radius);
        if (push) {
          px += push.x;
          pz += push.z;
          moved = true;
        }
      });
      if (!moved) break;
    }
    px = Math.min(this.bounds.maxX - radius, Math.max(this.bounds.minX + radius, px));
    pz = Math.min(this.bounds.maxZ - radius, Math.max(this.bounds.minZ + radius, pz));
    return { x: px, z: pz };
  }

  /**
   * True when nothing tall stands between the two points. Intersections within
   * `endClearance` metres of the target are ignored, so a marker fixed to a wall is not hidden
   * by that same wall.
   */
  lineOfSight(ax: number, az: number, bx: number, bz: number, endClearance = 1): boolean {
    const length = Math.hypot(bx - ax, bz - az);
    if (length < 1e-6) return true;
    const maxT = Math.max(0, 1 - endClearance / length);
    let visible = true;
    this.traverse(ax, az, bx, bz, (shape) => {
      if (!visible || !shape.tall) return;
      const t = shape.kind === 0 ? rayCircle(ax, az, bx, bz, shape) : raySegment(ax, az, bx, bz, shape);
      if (t >= 0 && t < maxT) visible = false;
    });
    return visible;
  }

  /**
   * A grid of blocked cells for route finding: a cell is blocked when its centre is within
   * `clearance` of any shape (or of the world's edge). Built by stamping each shape onto the
   * grid, which is far quicker than testing every cell against the world.
   */
  rasterize(cellSize: number, clearance: number): BlockedGrid {
    const { minX, maxX, minZ, maxZ } = this.bounds;
    const width = Math.ceil((maxX - minX) / cellSize);
    const height = Math.ceil((maxZ - minZ) / cellSize);
    const blocked = new Uint8Array(width * height);
    const centre = (i: number, origin: number) => origin + (i + 0.5) * cellSize;

    for (let j = 0; j < height; j++) {
      const z = centre(j, minZ);
      for (let i = 0; i < width; i++) {
        const x = centre(i, minX);
        if (x - minX < clearance || maxX - x < clearance || z - minZ < clearance || maxZ - z < clearance) {
          blocked[j * width + i] = 1;
        }
      }
    }

    for (const shape of this.shapes) {
      const reach = shape.r + clearance;
      const x0 = shape.kind === 0 ? shape.x : Math.min(shape.ax, shape.bx);
      const x1 = shape.kind === 0 ? shape.x : Math.max(shape.ax, shape.bx);
      const z0 = shape.kind === 0 ? shape.z : Math.min(shape.az, shape.bz);
      const z1 = shape.kind === 0 ? shape.z : Math.max(shape.az, shape.bz);
      const i0 = Math.max(0, Math.floor((x0 - reach - minX) / cellSize));
      const i1 = Math.min(width - 1, Math.floor((x1 + reach - minX) / cellSize));
      const j0 = Math.max(0, Math.floor((z0 - reach - minZ) / cellSize));
      const j1 = Math.min(height - 1, Math.floor((z1 + reach - minZ) / cellSize));
      for (let j = j0; j <= j1; j++) {
        const z = centre(j, minZ);
        for (let i = i0; i <= i1; i++) {
          const k = j * width + i;
          if (blocked[k]) continue;
          const x = centre(i, minX);
          const c = shape.kind === 0 ? shape : closestOnSegment(shape, x, z);
          if (Math.hypot(x - c.x, z - c.z) < reach) blocked[k] = 1;
        }
      }
    }
    return { minX, minZ, cellSize, width, height, blocked };
  }

  // ---- internals --------------------------------------------------------------------------

  private insert(shape: Shape, minX: number, minZ: number, maxX: number, maxZ: number): void {
    const index = this.shapes.length;
    this.shapes.push(shape);
    if (index >= this.stamps.length) {
      const grown = new Uint32Array(this.stamps.length * 2);
      grown.set(this.stamps);
      this.stamps = grown;
    }
    const s = this.cellSize;
    for (let ix = Math.floor(minX / s); ix <= Math.floor(maxX / s); ix++) {
      for (let iz = Math.floor(minZ / s); iz <= Math.floor(maxZ / s); iz++) {
        const key = cellKey(ix, iz);
        let bucket = this.cells.get(key);
        if (!bucket) {
          bucket = [];
          this.cells.set(key, bucket);
        }
        bucket.push(index);
      }
    }
  }

  private nextQuery(): number {
    this.queryId++;
    if (this.queryId === 0xffffffff) {
      this.stamps.fill(0);
      this.queryId = 1;
    }
    return this.queryId;
  }

  private forEachNear(minX: number, minZ: number, maxX: number, maxZ: number, fn: (shape: Shape) => void): void {
    const query = this.nextQuery();
    const s = this.cellSize;
    for (let ix = Math.floor(minX / s); ix <= Math.floor(maxX / s); ix++) {
      for (let iz = Math.floor(minZ / s); iz <= Math.floor(maxZ / s); iz++) {
        const bucket = this.cells.get(cellKey(ix, iz));
        if (!bucket) continue;
        for (const index of bucket) {
          if (this.stamps[index] === query) continue;
          this.stamps[index] = query;
          fn(this.shapes[index]);
        }
      }
    }
  }

  /** Visits the shapes in every grid cell the line from a to b passes through (2D DDA). */
  private traverse(ax: number, az: number, bx: number, bz: number, fn: (shape: Shape) => void): void {
    const query = this.nextQuery();
    const s = this.cellSize;
    let ix = Math.floor(ax / s);
    let iz = Math.floor(az / s);
    const endX = Math.floor(bx / s);
    const endZ = Math.floor(bz / s);
    const dx = bx - ax;
    const dz = bz - az;
    const stepX = dx > 0 ? 1 : -1;
    const stepZ = dz > 0 ? 1 : -1;
    const tDeltaX = dx !== 0 ? Math.abs(s / dx) : Infinity;
    const tDeltaZ = dz !== 0 ? Math.abs(s / dz) : Infinity;
    let tMaxX = dx !== 0 ? ((dx > 0 ? (ix + 1) * s : ix * s) - ax) / dx : Infinity;
    let tMaxZ = dz !== 0 ? ((dz > 0 ? (iz + 1) * s : iz * s) - az) / dz : Infinity;
    const maxCells = Math.abs(endX - ix) + Math.abs(endZ - iz) + 2;
    for (let n = 0; n < maxCells; n++) {
      const bucket = this.cells.get(cellKey(ix, iz));
      if (bucket) {
        for (const index of bucket) {
          if (this.stamps[index] === query) continue;
          this.stamps[index] = query;
          fn(this.shapes[index]);
        }
      }
      if (ix === endX && iz === endZ) break;
      if (tMaxX < tMaxZ) {
        tMaxX += tDeltaX;
        ix += stepX;
      } else {
        tMaxZ += tDeltaZ;
        iz += stepZ;
      }
    }
  }
}

function closestOnSegment(shape: SegmentShape, x: number, z: number): { x: number; z: number } {
  const vx = shape.bx - shape.ax;
  const vz = shape.bz - shape.az;
  const lengthSq = vx * vx + vz * vz;
  const t = lengthSq > 0 ? Math.min(1, Math.max(0, ((x - shape.ax) * vx + (z - shape.az) * vz) / lengthSq)) : 0;
  return { x: shape.ax + vx * t, z: shape.az + vz * t };
}

function penetration(shape: Shape, x: number, z: number, radius: number): number {
  const c = shape.kind === 0 ? shape : closestOnSegment(shape, x, z);
  return radius + shape.r - Math.hypot(x - c.x, z - c.z);
}

function pushOut(shape: Shape, x: number, z: number, radius: number): { x: number; z: number } | null {
  const c = shape.kind === 0 ? shape : closestOnSegment(shape, x, z);
  let dx = x - c.x;
  let dz = z - c.z;
  const minDistance = radius + shape.r;
  const distanceSq = dx * dx + dz * dz;
  if (distanceSq >= minDistance * minDistance) return null;
  const distance = Math.sqrt(distanceSq);
  if (distance < 1e-6) {
    // Exactly on the shape's centre-line: push perpendicular to the segment (or along +X).
    if (shape.kind === 1) {
      const len = Math.hypot(shape.bx - shape.ax, shape.bz - shape.az) || 1;
      dx = -(shape.bz - shape.az) / len;
      dz = (shape.bx - shape.ax) / len;
    } else {
      dx = 1;
      dz = 0;
    }
    return { x: dx * minDistance, z: dz * minDistance };
  }
  const depth = minDistance - distance;
  return { x: (dx / distance) * depth, z: (dz / distance) * depth };
}

/** Parameter t in [0, 1] where the line a→b first meets the circle, or -1. */
function rayCircle(ax: number, az: number, bx: number, bz: number, c: CircleShape): number {
  const dx = bx - ax;
  const dz = bz - az;
  const fx = ax - c.x;
  const fz = az - c.z;
  const a = dx * dx + dz * dz;
  const b = 2 * (fx * dx + fz * dz);
  const cc = fx * fx + fz * fz - c.r * c.r;
  const disc = b * b - 4 * a * cc;
  if (disc < 0) return -1;
  const sqrt = Math.sqrt(disc);
  const t1 = (-b - sqrt) / (2 * a);
  const t2 = (-b + sqrt) / (2 * a);
  if (t1 >= 0 && t1 <= 1) return t1;
  if (t2 >= 0 && t2 <= 1) return t2;
  return -1;
}

/** Parameter t in [0, 1] where the line a→b crosses the segment, or -1. Thickness ignored. */
function raySegment(ax: number, az: number, bx: number, bz: number, s: SegmentShape): number {
  const rx = bx - ax;
  const rz = bz - az;
  const sx = s.bx - s.ax;
  const sz = s.bz - s.az;
  const denominator = rx * sz - rz * sx;
  if (Math.abs(denominator) < 1e-9) return -1;
  const qpx = s.ax - ax;
  const qpz = s.az - az;
  const t = (qpx * sz - qpz * sx) / denominator;
  const u = (qpx * rz - qpz * rx) / denominator;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : -1;
}
