// The shape of the explorer's world, in one place.
//
// Every number the 3D geometry, the collision world, the markers and the tests use comes from
// here, so the scene, what the visitor can walk into, and what the tests check can never drift
// apart.
//
// The plan follows the real mosque: the outlines of the courtyard, the Ottoman portico, the
// halls, the Mas'a, the expansions, the gates, the minarets and the buildings around come from
// OpenStreetMap (plan-data.ts, © OpenStreetMap contributors, ODbL), at their real positions
// and scale. The Kaaba and the features right around it use published approximate dimensions
// (see SOURCES.md, "Modelling references"). Heights, interiors and details are simplified;
// HARAM.md lists what is approximate. It is not a survey.
//
// Coordinates are metres. Origin: the centre of the Kaaba at floor level.
//   +X = east, -Z = north, +Y = up  (so a camera looking down -Z faces north).

import {
  CLOCK_TOWER_CENTER,
  KAABA_DOOR_BEARING,
  MARWAH_CENTER,
  OSM_GATES,
  SAFA_CENTER,
} from './plan-data';

export interface Vec2 {
  x: number;
  z: number;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/**
 * The Kaaba, built in its own local frame and then turned so its corners point roughly at the
 * four compass directions (the published description: Black Stone in the east corner, the door
 * on the north-eastern wall, Hijr Ismail on the north-western side).
 *
 * Local frame after rotation:  +Z = north-east (door wall), +X = north-west (Hijr wall),
 *                              -Z = south-west wall,         -X = south-east wall.
 */
export const KAABA = {
  /** Approximate published height, metres. */
  height: 13.1,
  /** Length of the north-east (door) and south-west walls — local X extent. */
  width: 12.86,
  /** Length of the north-west (Hijr) and south-east walls — local Z extent. */
  depth: 11.03,
  /**
   * Rotation about +Y that maps local +Z onto the direction the door wall faces: north-east,
   * about 56.5° from north as mapped (the walls are not exactly at 45° to the compass).
   */
  rotationY: Math.PI - (KAABA_DOOR_BEARING * Math.PI) / 180,
  /** The embroidered band (hizam) on the kiswah: two-thirds of the way up, about 95 cm wide,
   *  made of four pieces per side. */
  hizam: { bottom: 8.7, height: 0.95, piecesPerSide: 4 },
  /** The embroidered door curtain (sitara), about 7.75 m × 3.5 m: shown from just below the
   *  door up to the band (proportioned to match the photograph used for it). */
  sitara: { width: 3.5, bottom: 1.75 },
  /** The embroidered square panels below the band at each corner (kardashiyyat). Size
   *  approximate. */
  cornerPanel: { size: 1.15, gapBelowBand: 0.12 },
  /** The door, measured along the north-east wall from the wall's centre (local X). */
  door: { centerX: -3.6, bottom: 2.2, width: 1.9, height: 3.1 },
  /** Height of the Black Stone's centre above the floor. */
  blackStoneHeight: 1.5,
  /** The marble base (shadharwan) — simplified to a low plinth. */
  base: { height: 0.25, overhang: 0.35 },
  /**
   * One repeat of the calligraphy woven into the black silk: two chevrons span the 98 cm width
   * of a kiswah panel, so one is 49 cm wide; the repeat is 77 cm tall.
   */
  kiswahWeave: { tileWidth: 0.49, tileHeight: 0.77 },
} as const;

export const KAABA_HALF_W = KAABA.width / 2;
export const KAABA_HALF_D = KAABA.depth / 2;

/** Hijr Ismail: the low semicircular wall beside the north-western wall. Approximate. */
export const HIJR = {
  /** Distance of the wall's centre-line from the Kaaba wall, straight out (local +X). */
  reach: 8.6,
  /** Half-width of the arc's centre-line along the Kaaba wall (local Z). */
  halfSpan: 6.2,
  thickness: 1.5,
  height: 1.3,
  /** How far out from the Kaaba wall the two ends of the arc stop (the openings). */
  endGap: 2.3,
} as const;

/** Maqam Ibrahim, in Kaaba-local coordinates: in front of the north-east (door) wall, where it
 *  is mapped (plan-data.ts). */
export const MAQAM_LOCAL: Vec2 = { x: -0.9, z: 13.2 };

/**
 * Maqam Ibrahim's enclosure, metres. Published: the stone is about 40–50 cm square, with two
 * footprints about 27 × 14 cm and 9–10 cm deep; over it, a crystal cover 1.30 m high and 80 cm
 * across at its foot; round that, a cage of gold-plated brass with a gilded inner grille; the
 * base is Carrara marble trimmed with green granite (Wikipedia; Saudipedia). The cage's size and
 * the base's height are estimated from photographs: an eight-sided cage, one face towards the
 * Kaaba, about 1.45 m across, under a shallow eight-sided roof, a small dome and a crescent.
 */
export const MAQAM = {
  /** Green granite plinth and white marble base (round), and its height to the cage's foot. */
  base: { radius: 0.86, height: 0.7, plinth: 0.1 },
  /** The cage: side of the octagon, solid band at its foot, grille panels, frieze at the top. */
  cage: { side: 0.6, footBand: 0.18, panel: 1.45, frieze: 0.12 },
  /** The crystal cover over the stone. */
  crystal: { height: 1.3, radius: 0.4 },
  /** The stone's casing, and the two footprints on its top. */
  stone: { size: 0.5, height: 0.42, foot: { length: 0.27, width: 0.14 } },
  /** Roof (rise), collar, drum, dome and finial, from the cornice up. */
  roof: { rise: 0.29, collar: 0.09, collarApothem: 0.26, drum: 0.22, dome: 0.24, finial: 0.32 },
} as const;

/**
 * Approximate location of the Zamzam well, which is underground: about 21 m east of the Kaaba,
 * on the side towards Maqam Ibrahim, in line with the Multazam (see SOURCES.md).
 */
export const ZAMZAM_POSITION: Vec2 = { x: 20.2, z: -7.4 };

/** The Ottoman portico: an arcade ring with rows of small domes (outline in plan-data.ts). */
export const PORTICO = {
  height: 8.5,
  roofThickness: 0.6,
  bay: 4.6,
  pier: 1.2,
  springHeight: 4.6,
} as const;

export const WALL_THICKNESS = 1.6;
/** Roof height of the main building (the halls), as mapped. */
export const BUILDING_HEIGHT = 21;

/** The covered prayer halls between the courtyard and the exterior walls. */
export const HALL = {
  ceiling: 10.5,
  ceilingThickness: 0.6,
  columnSpacing: 10,
  columnRadius: 0.45,
  /** Openings in the hall's courtyard-facing facade: piers every `facadeBay` metres. */
  facadeBay: 9.2,
  facadePier: 1.8,
} as const;

/**
 * The Mas'a: the gallery from Safa to Marwah, along the east side of the mosque (outline and
 * the two hills' positions in plan-data.ts). Interior heights are simplified.
 */
export const MASA = {
  ceiling: 13,
  /** Roof height (the domes over Safa and Marwah sit on the roof). */
  height: 28,
  columnSpacing: 8,
  /** The green-lit section, as fractions of the way from Safa to Marwah (approximate). */
  greenFrom: 0.33,
  greenTo: 0.47,
  /** Radius of the domed spaces over Safa and Marwah. */
  domeRadius: 11,
} as const;

/** Safa to Marwah: the Mas'a's axis. */
export function masaAxis(): { start: Vec2; end: Vec2; dir: Vec2; length: number; angle: number } {
  const dx = MARWAH_CENTER.x - SAFA_CENTER.x;
  const dz = MARWAH_CENTER.z - SAFA_CENTER.z;
  const length = Math.hypot(dx, dz);
  return {
    start: SAFA_CENTER,
    end: MARWAH_CENTER,
    dir: { x: dx / length, z: dz / length },
    length,
    /** Rotation about +Y that turns +X onto the axis (Safa to Marwah). */
    angle: Math.atan2(-dz, dx),
  };
}

/** A point on the Mas'a's axis, `t` of the way from Safa (0) to Marwah (1). */
export function masaPoint(t: number, sideways = 0): Vec2 {
  const { start, dir, length } = masaAxis();
  return { x: start.x + dir.x * length * t - dir.z * sideways, z: start.z + dir.z * length * t + dir.x * sideways };
}

/** How far along the Mas'a (0 at Safa, 1 at Marwah) a point lies. */
export function masaFraction(x: number, z: number): number {
  const { start, dir, length } = masaAxis();
  return ((x - start.x) * dir.x + (z - start.z) * dir.z) / length;
}

/** The King Abdullah expansion and the northern building: shown from outside only. */
export const EXPANSIONS = {
  abdullahHeight: 35.5,
  northHeight: 21,
} as const;

/** The walkable world: the mosque, its plazas, and the edge where the city begins. */
export const WORLD_BOUNDS = {
  minX: -440,
  maxX: 235,
  minZ: -440,
  maxZ: 300,
} as const;

export type GateId = 'kingAbdulazizGate' | 'kingFahdGate' | 'babAlUmrah' | 'babAlFath' | 'babAlSalam' | 'kingAbdullahGate';

export interface GateSpec {
  /** The named gates described in the explorer; the others are plain doorways. */
  id: GateId | null;
  /** Where the entrance is mapped (plan-data.ts). */
  at: Vec2;
  ref: string;
  name: string;
  width: number;
  height: number;
}

/** The named gates, matched to their mapped entrances by name or number. */
const NAMED_GATES: { id: GateId; match: (g: { ref: string; name: string }) => boolean; width: number; height: number }[] = [
  { id: 'kingAbdulazizGate', match: (g) => g.ref === '1', width: 14, height: 15 },
  { id: 'kingFahdGate', match: (g) => g.ref === '79', width: 14, height: 15 },
  { id: 'babAlUmrah', match: (g) => g.ref === '40', width: 12, height: 13 },
  { id: 'babAlFath', match: (g) => /Fat/.test(g.name), width: 12, height: 13 },
  { id: 'babAlSalam', match: (g) => /Salam/.test(g.name), width: 9, height: 11 },
  { id: 'kingAbdullahGate', match: (g) => /King Abdullah Gate/.test(g.name), width: 14, height: 16 },
];

/**
 * Every mapped entrance on the outer walls, the named gates with their own size and the rest
 * as plain doorways. Entrances closer together than a doorway are merged.
 */
export const GATES: readonly GateSpec[] = (() => {
  const gates: GateSpec[] = [];
  const named = new Set<GateId>();
  for (const g of OSM_GATES) {
    const spec = NAMED_GATES.find((n) => !named.has(n.id) && n.match(g));
    if (spec) named.add(spec.id);
    const gate: GateSpec = {
      id: spec?.id ?? null,
      at: { x: g.x, z: g.z },
      ref: g.ref,
      name: g.name,
      width: spec?.width ?? 5,
      height: spec?.height ?? 6.5,
    };
    const clash = gates.findIndex((o) => Math.hypot(o.at.x - g.x, o.at.z - g.z) < (o.width + gate.width) / 2 + 2);
    if (clash >= 0) {
      // Keep the named gate if one of the two is.
      if (gate.id && !gates[clash].id) gates[clash] = gate;
      continue;
    }
    gates.push(gate);
  }
  return gates;
})();

export function namedGate(id: GateId): GateSpec {
  const gate = GATES.find((g) => g.id === id);
  if (!gate) throw new Error(`Gate ${id} is not in the map data`);
  return gate;
}

/** Makkah Royal Clock Tower, outside the mosque to the south, where it is mapped. */
export const CLOCK_TOWER = {
  x: CLOCK_TOWER_CENTER.x,
  z: CLOCK_TOWER_CENTER.z,
  /** The tower rises from the Abraj Al-Bait podium (drawn from the map data). */
  base: 80,
  shaftHalf: 26,
  /** The clock faces are about 400 m up. */
  clockCenterY: 400,
  /** The dials are 43 m across. */
  clockRadius: 21.5,
  /** The band of Arabic lettering above each dial. */
  inscription: { width: 46, height: 11.5, gap: 1.5 },
  height: 601,
} as const;

/**
 * A viewing balcony on the clock tower's north face, under the clock, overlooking the mosque.
 * The real tower has viewing areas in its top floors (the Clock Tower Museum); this balcony's
 * position and size are approximate.
 */
export const BALCONY = {
  /** Floor height, metres: a covered terrace a few metres below the clock block. */
  floorY: CLOCK_TOWER.clockCenterY - CLOCK_TOWER.clockRadius - 6 - 4.5,
  minX: CLOCK_TOWER.x - 16,
  maxX: CLOCK_TOWER.x + 16,
  /** The tower's north face, where the balcony starts... */
  innerZ: CLOCK_TOWER.z - CLOCK_TOWER.shaftHalf,
  /** ...and how far it projects northwards. */
  depth: 5,
  railHeight: 1.15,
  /** The visitor can stand this close to the glass (metres, beyond their radius). */
  inset: 0.05,
} as const;

/** Where a new visitor starts: in the courtyard, south-east of the Kaaba, facing it. */
export const SPAWN = { x: 22, z: 28 } as const;

export const PLAYER = {
  eyeHeight: 1.65,
  radius: 0.3,
} as const;

// ---- Kaaba frame helpers -----------------------------------------------------------------

const COS_R = Math.cos(KAABA.rotationY);
const SIN_R = Math.sin(KAABA.rotationY);

/** Converts a Kaaba-local horizontal position to world coordinates. */
export function kaabaToWorld(x: number, z: number): Vec2 {
  // Rotation about +Y: x' = x cos + z sin, z' = -x sin + z cos.
  return { x: x * COS_R + z * SIN_R, z: -x * SIN_R + z * COS_R };
}

/** Converts a world position to the Kaaba's local frame (the inverse of kaabaToWorld). */
export function worldToKaaba(x: number, z: number): Vec2 {
  return { x: x * COS_R - z * SIN_R, z: x * SIN_R + z * COS_R };
}

export function kaabaToWorld3(x: number, y: number, z: number): Vec3 {
  const p = kaabaToWorld(x, z);
  return { x: p.x, y, z: p.z };
}

/** The four corners of the Kaaba in world coordinates, named as they traditionally are. */
export function kaabaCorners(): Record<'east' | 'north' | 'west' | 'south', Vec2> {
  return {
    // Black Stone corner.
    east: kaabaToWorld(-KAABA_HALF_W, KAABA_HALF_D),
    // Iraqi corner.
    north: kaabaToWorld(KAABA_HALF_W, KAABA_HALF_D),
    // Shami (Syrian) corner.
    west: kaabaToWorld(KAABA_HALF_W, -KAABA_HALF_D),
    // Yemeni corner.
    south: kaabaToWorld(-KAABA_HALF_W, -KAABA_HALF_D),
  };
}

/** Maqam Ibrahim's world position. */
export function maqamPosition(): Vec2 {
  return kaabaToWorld(MAQAM_LOCAL.x, MAQAM_LOCAL.z);
}

/**
 * Points along Hijr Ismail's centre-line, in Kaaba-local coordinates, from one end of the arc to
 * the other. A half-ellipse whose two ends stop `endGap` metres out from the Kaaba wall.
 */
export function hijrCenterline(segments: number): Vec2[] {
  const startAngle = Math.asin(Math.min(1, HIJR.endGap / HIJR.reach));
  const points: Vec2[] = [];
  for (let i = 0; i <= segments; i++) {
    const angle = startAngle + ((Math.PI - 2 * startAngle) * i) / segments;
    points.push({
      x: KAABA_HALF_W + HIJR.reach * Math.sin(angle),
      z: HIJR.halfSpan * Math.cos(angle),
    });
  }
  return points;
}
