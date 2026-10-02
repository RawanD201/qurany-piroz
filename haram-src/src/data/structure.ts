// Positions derived from the plan: where every pier, column, wall, gate and dome goes.
//
// Both the 3D geometry (src/world/*) and the collision world (src/physics/build-colliders.ts)
// are generated from these functions, so what the visitor sees and what they bump into are
// always the same thing. Pure functions with no three.js dependency, so the tests can use them.
// Results are computed once and cached: the plan never changes while the explorer runs.

import { BUILDING_HEIGHT, EXPANSIONS, GATES, HALL, MASA, PORTICO, type GateSpec, type Vec2 } from './layout';
import {
  ABDULLAH_OUTLINE,
  MAIN_INNER,
  MAIN_OUTER,
  MASA_OUTLINE,
  NORTH_OUTLINE,
  OSM_MINARETS,
  PORTICO_INNER,
  PORTICO_OUTER,
} from './plan-data';
import { distanceToOutline, pointInPolygon, rayDistance, segmentDistance } from './polygon';

export interface Edge {
  a: Vec2;
  b: Vec2;
  length: number;
  /** Unit vector from a to b. */
  dir: Vec2;
  /** Unit vector pointing away from the region the edge bounds (see each function). */
  outward: Vec2;
}

export interface Pier {
  x: number;
  z: number;
  /** Half-size along the edge and across it. */
  halfAlong: number;
  halfAcross: number;
  /** Angle of the edge direction (radians, about +Y). */
  angle: number;
}

export interface ArcadeEdge extends Edge {
  bays: number;
  bayLength: number;
}

export const PORTICO_ARCADE_THICKNESS = 0.9;
export const HALL_FACADE_THICKNESS = 1.4;
export const MINARET_BASE_HALF = 3.6;
/** Columns and walls keep this far from a gate's opening. */
const GATE_CLEARANCE = 6;

function once<T>(compute: () => T): () => T {
  let value: T | undefined;
  return () => (value ??= compute());
}

/**
 * The edges of a polyline (or closed polygon), each with `outward` pointing away from the side
 * where `isInside` is true.
 */
export function edgesOf(points: readonly Vec2[], closed: boolean, isInside: (x: number, z: number) => boolean): Edge[] {
  const edges: Edge[] = [];
  const count = closed ? points.length : points.length - 1;
  for (let i = 0; i < count; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const length = Math.hypot(dx, dz);
    if (length < 0.05) continue;
    const dir = { x: dx / length, z: dz / length };
    let outward = { x: dir.z, z: -dir.x };
    const mid = { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2 };
    if (isInside(mid.x + outward.x * 0.4, mid.z + outward.z * 0.4)) outward = { x: -outward.x, z: -outward.z };
    edges.push({ a, b, length, dir, outward });
  }
  return edges;
}

function toArcade(edges: Edge[], bay: number): ArcadeEdge[] {
  return edges.map((edge) => {
    const bays = Math.max(1, Math.round(edge.length / bay));
    return { ...edge, bays, bayLength: edge.length / bays };
  });
}

/** Piers along each edge (the end pier of an edge is the start pier of the next, so skipped). */
function arcadePiers(edges: ArcadeEdge[], pier: number, thickness: number, offset: number, closed: boolean): Pier[] {
  const piers: Pier[] = [];
  edges.forEach((edge, index) => {
    const angle = Math.atan2(-edge.dir.z, edge.dir.x);
    const last = !closed && index === edges.length - 1;
    for (let k = 0; k <= (last ? edge.bays : edge.bays - 1); k++) {
      const u = k * edge.bayLength;
      piers.push({
        x: edge.a.x + edge.dir.x * u + edge.outward.x * offset,
        z: edge.a.z + edge.dir.z * u + edge.outward.z * offset,
        halfAlong: pier / 2,
        halfAcross: thickness / 2,
        angle,
      });
    }
  });
  return piers;
}

// ---- the courtyard and the Ottoman portico -------------------------------------------------------

/** The portico as one closed outline: its courtyard side, then its outer side. */
export const porticoRing = once((): Vec2[] => [...PORTICO_INNER, ...PORTICO_OUTER]);

/** The open courtyard (sky above): inside the halls' inner face but not under the portico. */
export function inOpenCourtyard(x: number, z: number): boolean {
  return pointInPolygon(x, z, MAIN_INNER) && !pointInPolygon(x, z, porticoRing());
}

/**
 * The portico's courtyard-facing arcade: along its courtyard side, and across its two open
 * ends (the portico is a C open to the east). Outward points into the portico.
 */
export const porticoArcadeEdges = once((): ArcadeEdge[] => {
  const inner = PORTICO_INNER;
  const outer = PORTICO_OUTER;
  const chain = [outer[outer.length - 1], ...inner, outer[0]];
  return toArcade(edgesOf(chain, false, inOpenCourtyard), PORTICO.bay);
});

export const porticoPiers = once((): Pier[] =>
  arcadePiers(porticoArcadeEdges(), PORTICO.pier, PORTICO_ARCADE_THICKNESS, PORTICO_ARCADE_THICKNESS / 2, false)
);

/** How deep the portico is behind a point on its courtyard side, along the edge's outward normal. */
function porticoDepth(edge: Edge, u: number): number {
  const origin = { x: edge.a.x + edge.dir.x * u, z: edge.a.z + edge.dir.z * u };
  const depth = rayDistance(origin, edge.outward, PORTICO_OUTER);
  return Number.isFinite(depth) ? Math.min(depth, 30) : 0;
}

/** The courtyard-side edges proper (not the two end caps). */
const porticoFrontEdges = once((): ArcadeEdge[] => porticoArcadeEdges().slice(1, -1));

/** Rows of columns inside the portico, under the domes, in line with the arcade's piers. */
export const porticoColumns = once((): Vec2[] => {
  const columns: Vec2[] = [];
  for (const edge of porticoFrontEdges()) {
    for (let k = 1; k < edge.bays; k++) {
      const u = k * edge.bayLength;
      const depth = porticoDepth(edge, u);
      if (depth < 8) continue;
      for (const across of [0.36, 0.68]) {
        const x = edge.a.x + edge.dir.x * u + edge.outward.x * depth * across;
        const z = edge.a.z + edge.dir.z * u + edge.outward.z * depth * across;
        if (distanceToOutline(x, z, porticoRing()) < 2) continue;
        if (columns.some((c) => Math.hypot(c.x - x, c.z - z) < 2.6)) continue;
        columns.push({ x, z });
      }
    }
  }
  return columns;
});

/** The small domes on the portico roof: three rows, one dome per bay in each. */
export const porticoDomes = once((): { x: number; z: number; radius: number }[] => {
  const domes: { x: number; z: number; radius: number }[] = [];
  for (const edge of porticoFrontEdges()) {
    for (let k = 0; k < edge.bays; k++) {
      const u = (k + 0.5) * edge.bayLength;
      const depth = porticoDepth(edge, u);
      if (depth < 6) continue;
      const radius = Math.min(edge.bayLength, depth / 3) * 0.42;
      for (const across of [0.18, 0.52, 0.84]) {
        const x = edge.a.x + edge.dir.x * u + edge.outward.x * depth * across;
        const z = edge.a.z + edge.dir.z * u + edge.outward.z * depth * across;
        if (!pointInPolygon(x, z, porticoRing()) || distanceToOutline(x, z, porticoRing()) < radius) continue;
        if (domes.some((d) => Math.hypot(d.x - x, d.z - z) < d.radius + radius)) continue;
        domes.push({ x, z, radius });
      }
    }
  }
  return domes;
});

// ---- the halls ---------------------------------------------------------------------------------

/** The halls' courtyard-facing facade, around the courtyard and the portico. Outward: into the halls. */
export const hallFacadeEdges = once((): ArcadeEdge[] =>
  toArcade(
    edgesOf(MAIN_INNER, true, (x, z) => pointInPolygon(x, z, MAIN_INNER)),
    HALL.facadeBay
  )
);

export const hallFacadePiers = once((): Pier[] =>
  arcadePiers(hallFacadeEdges(), HALL.facadePier, HALL_FACADE_THICKNESS, HALL_FACADE_THICKNESS / 2, true)
);

export function minarets(): readonly { x: number; z: number; height: number }[] {
  return OSM_MINARETS;
}

function nearGate(x: number, z: number, clearance: number): boolean {
  return gateFrames().some((frame) => Math.hypot(x - frame.center.x, z - frame.center.z) < frame.gate.width / 2 + clearance);
}

/** The grid of columns in the covered halls. */
export const hallColumns = once((): Vec2[] => {
  const columns: Vec2[] = [];
  const s = HALL.columnSpacing;
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const p of MAIN_OUTER) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minZ = Math.min(minZ, p.z);
    maxZ = Math.max(maxZ, p.z);
  }
  for (let x = Math.ceil(minX / s) * s + s / 2; x < maxX; x += s) {
    for (let z = Math.ceil(minZ / s) * s + s / 2; z < maxZ; z += s) {
      if (!pointInPolygon(x, z, MAIN_OUTER) || pointInPolygon(x, z, MAIN_INNER)) continue;
      if (distanceToOutline(x, z, MAIN_INNER) < HALL_FACADE_THICKNESS + 3) continue;
      if (distanceToOutline(x, z, MAIN_OUTER) < 3.5) continue;
      if (nearGate(x, z, GATE_CLEARANCE)) continue;
      if (minarets().some((m) => Math.hypot(m.x - x, m.z - z) < 7)) continue;
      columns.push({ x, z });
    }
  }
  return columns;
});

// ---- the Mas'a and the outer walls ---------------------------------------------------------------

export type BuildingId = 'main' | 'masa' | 'abdullah';

interface Outline {
  id: BuildingId;
  points: readonly Vec2[];
  height: number;
  /** Whether its gates are open doorways (the expansions are shown from outside only). */
  open: boolean;
}

const OUTLINES: readonly Outline[] = [
  { id: 'main', points: MAIN_OUTER, height: BUILDING_HEIGHT, open: true },
  { id: 'masa', points: MASA_OUTLINE, height: MASA.height, open: true },
  { id: 'abdullah', points: ABDULLAH_OUTLINE, height: EXPANSIONS.abdullahHeight, open: false },
];

/** Whether an edge runs along another building's outline (the halls and the Mas'a meet). */
function shared(edge: Edge, other: readonly Vec2[]): boolean {
  const samples = [0.15, 0.5, 0.85];
  return samples.every((t) => {
    const x = edge.a.x + (edge.b.x - edge.a.x) * t;
    const z = edge.a.z + (edge.b.z - edge.a.z) * t;
    return distanceToOutline(x, z, other) < 2;
  });
}

interface OuterEdge extends Edge {
  building: Outline;
}

/** Every edge of the buildings' outlines that faces outside (not where the halls meet the Mas'a). */
const outerEdges = once((): OuterEdge[] => {
  const edges: OuterEdge[] = [];
  for (const outline of OUTLINES) {
    const others = OUTLINES.filter((o) => o !== outline && o.id !== 'abdullah' && outline.id !== 'abdullah');
    for (const edge of edgesOf(outline.points, true, (x, z) => pointInPolygon(x, z, outline.points))) {
      if (others.some((o) => shared(edge, o.points))) continue;
      edges.push({ ...edge, building: outline });
    }
  }
  return edges;
});

/** Where the halls open onto the Mas'a: the edges of the Mas'a they share. */
export const masaSharedEdges = once((): Edge[] =>
  edgesOf(MASA_OUTLINE, true, (x, z) => pointInPolygon(x, z, MASA_OUTLINE)).filter((e) => shared(e, MAIN_OUTER))
);

/** The open colonnade along those shared edges. */
export const masaColumns = once((): Vec2[] => {
  const columns: Vec2[] = [];
  for (const edge of masaSharedEdges()) {
    const count = Math.floor((edge.length - 4) / MASA.columnSpacing);
    for (let k = 0; k <= count; k++) {
      const u = 2 + k * MASA.columnSpacing + (edge.length - 4 - count * MASA.columnSpacing) / 2;
      columns.push({ x: edge.a.x + edge.dir.x * u, z: edge.a.z + edge.dir.z * u });
    }
  }
  return columns;
});

export interface GateFrame {
  gate: GateSpec;
  center: Vec2;
  /** Out of the building. */
  outward: Vec2;
  /** Along the wall. */
  tangent: Vec2;
  building: BuildingId;
  /** False for the expansions' gates, shown as closed portals. */
  open: boolean;
}

/** Each gate placed on the nearest outer wall, its opening kept within that wall. */
export const gateFrames = once((): GateFrame[] => {
  const frames: GateFrame[] = [];
  for (const gate of GATES) {
    let best: { edge: OuterEdge; distance: number; t: number } | null = null;
    for (const edge of outerEdges()) {
      const { distance, t } = segmentDistance(gate.at.x, gate.at.z, edge.a, edge.b);
      if (!best || distance < best.distance) best = { edge, distance, t };
    }
    if (!best || best.distance > 8) continue;
    const { edge } = best;
    // A doorway too wide for its wall is left out; otherwise it is slid fully onto the wall.
    const half = gate.width / 2 + 1;
    if (edge.length < half * 2) continue;
    const u = Math.min(edge.length - half, Math.max(half, best.t * edge.length));
    const center = { x: edge.a.x + edge.dir.x * u, z: edge.a.z + edge.dir.z * u };
    if (frames.some((f) => Math.hypot(f.center.x - center.x, f.center.z - center.z) < (f.gate.width + gate.width) / 2 + 2)) continue;
    frames.push({ gate, center, outward: edge.outward, tangent: edge.dir, building: edge.building.id, open: edge.building.open });
  }
  return frames;
});

export interface WallSegment {
  a: Vec2;
  b: Vec2;
  /** Unit vector pointing out of the building. */
  outward: Vec2;
  height: number;
  building: BuildingId;
}

/** The outer walls of the halls, the Mas'a and the King Abdullah expansion, with the doorways left open. */
export const exteriorWalls = once((): WallSegment[] => {
  const walls: WallSegment[] = [];
  const frames = gateFrames();
  for (const edge of outerEdges()) {
    const gaps = frames
      .filter((f) => f.open && segmentDistance(f.center.x, f.center.z, edge.a, edge.b).distance < 0.05)
      .map((f) => {
        const u = (f.center.x - edge.a.x) * edge.dir.x + (f.center.z - edge.a.z) * edge.dir.z;
        return [u - f.gate.width / 2, u + f.gate.width / 2] as const;
      })
      .sort((p, q) => p[0] - q[0]);
    let cursor = 0;
    const point = (u: number): Vec2 => ({ x: edge.a.x + edge.dir.x * u, z: edge.a.z + edge.dir.z * u });
    for (const [g0, g1] of gaps) {
      if (g0 > cursor + 0.05) walls.push({ a: point(cursor), b: point(g0), outward: edge.outward, height: edge.building.height, building: edge.building.id });
      cursor = Math.max(cursor, g1);
    }
    if (edge.length > cursor + 0.05) {
      walls.push({ a: point(cursor), b: edge.b, outward: edge.outward, height: edge.building.height, building: edge.building.id });
    }
  }
  return walls;
});

/** The northern building: outline and height (shown from outside only). */
export function northBlock(): { points: readonly Vec2[]; height: number } {
  return { points: NORTH_OUTLINE, height: EXPANSIONS.northHeight };
}
