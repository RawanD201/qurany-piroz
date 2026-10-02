// Small plane-geometry helpers for the plan's outlines (x, z in metres). Pure functions, so the
// tests can use them; no three.js.

import type { Vec2 } from './layout';

/** Signed area (positive when the points run anticlockwise in x-z, i.e. clockwise on a map). */
export function signedArea(points: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const q = points[(i + 1) % points.length];
    a += p.x * q.z - q.x * p.z;
  }
  return a / 2;
}

/** Whether (x, z) lies inside a closed polygon (even-odd rule). */
export function pointInPolygon(x: number, z: number, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const a = points[i];
    const b = points[j];
    if (a.z > z !== b.z > z && x < ((b.x - a.x) * (z - a.z)) / (b.z - a.z) + a.x) inside = !inside;
  }
  return inside;
}

/** Distance from (x, z) to the segment a-b, and how far along it (0-1) the nearest point is. */
export function segmentDistance(x: number, z: number, a: Vec2, b: Vec2): { distance: number; t: number } {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const lengthSq = dx * dx + dz * dz || 1e-9;
  const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / lengthSq));
  return { distance: Math.hypot(x - (a.x + dx * t), z - (a.z + dz * t)), t };
}

/** Distance from (x, z) to the outline of a polygon (or an open polyline). */
export function distanceToOutline(x: number, z: number, points: readonly Vec2[], closed = true): number {
  let best = Infinity;
  const count = closed ? points.length : points.length - 1;
  for (let i = 0; i < count; i++) {
    best = Math.min(best, segmentDistance(x, z, points[i], points[(i + 1) % points.length]).distance);
  }
  return best;
}

/**
 * Distance from `origin` along the unit direction `dir` to the first crossing of a polyline,
 * or Infinity if the ray misses it.
 */
export function rayDistance(origin: Vec2, dir: Vec2, points: readonly Vec2[], closed = false): number {
  let best = Infinity;
  const count = closed ? points.length : points.length - 1;
  for (let i = 0; i < count; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const ex = b.x - a.x;
    const ez = b.z - a.z;
    const denominator = dir.x * ez - dir.z * ex;
    if (Math.abs(denominator) < 1e-9) continue;
    const t = ((a.x - origin.x) * ez - (a.z - origin.z) * ex) / denominator;
    const u = ((a.x - origin.x) * dir.z - (a.z - origin.z) * dir.x) / denominator;
    if (t > 1e-6 && u >= 0 && u <= 1) best = Math.min(best, t);
  }
  return best;
}

export function bounds(points: readonly Vec2[]): { minX: number; maxX: number; minZ: number; maxZ: number } {
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z);
    maxZ = Math.max(maxZ, p.z);
  }
  return { minX, maxX, minZ, maxZ };
}

/** Flat [x0, z0, x1, z1, …] pairs as points. */
export function pairs(flat: readonly number[]): Vec2[] {
  const points: Vec2[] = [];
  for (let i = 0; i + 1 < flat.length; i += 2) points.push({ x: flat[i], z: flat[i + 1] });
  return points;
}
