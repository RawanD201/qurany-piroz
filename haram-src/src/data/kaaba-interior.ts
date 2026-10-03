// The inside of the Kaaba, in its local frame (layout.ts: +Z is the door wall, facing north-east;
// +X the Hijr wall, north-west). Shared by the 3D model (world/kaaba-interior.ts), its collision
// world and the place markers.
//
// What the sources describe (see places.ts and SOURCES.md), and photographs of the room show: a
// single room whose floor is about 2 m above the Mataf; cream-white marble underfoot and on the
// walls halfway to the roof, with dark green marble skirting and bands; a green silk cloth, with
// a woven pattern, over the upper walls and the ceiling; three pillars of polished wood with
// gilded bands; antique lamps of silver and gold hanging close together from brass rods strung
// between the pillars; a small white cupboard with a green marble top, where perfume is kept;
// carved stone plaques set into the marble; and Bab al-Tawbah, a golden door on the right as one
// enters, opening onto an enclosed staircase to the roof. What they do not give — the walls'
// thickness, the ceiling's height, the pillars' spacing, the number and places of the lamps —
// is approximate, and said so in the panels.

import type { Vec2, Vec3 } from './layout';
import { KAABA, KAABA_HALF_D, KAABA_HALF_W, kaabaToWorld, kaabaToWorld3 } from './layout';

const FLOOR = KAABA.door.bottom;
const CEILING = 11.7;
const WALL = 0.8;

export const KAABA_INTERIOR = {
  /** The floor, level with the door's sill: about 2 m above the Mataf. */
  floorY: FLOOR,
  /** The inner ceiling (approximate: the roof is double, and its thickness is not published). */
  ceilingY: CEILING,
  /** Wall thickness (approximate). */
  wall: WALL,
  /** Half the room's length (local X) and depth (local Z). */
  halfW: KAABA_HALF_W - WALL,
  halfD: KAABA_HALF_D - WALL,
  /** White marble "halfway to the roof"; the green cloth above it. */
  marbleTop: FLOOR + (CEILING - FLOOR) / 2,
  /** Three pillars in a row along the room (spacing approximate), about 44 cm across. */
  pillars: { xs: [-3.7, 0, 3.7] as readonly number[], z: 0, radius: 0.22 },
  /** Each pillar's square base (half its side, and its height). */
  pillarBase: { half: 0.36, height: 0.55 },
  /** The small white cupboard between one pillar and the other two, where perfume is kept. */
  cupboard: { x: -1.85, z: 0, width: 1.2, depth: 0.7, height: 0.92 },
  /** The enclosed staircase in the north corner, with Bab al-Tawbah facing into the room. */
  stair: { size: 1.9, doorWidth: 1.0, doorHeight: 2.4 },
  /** The brass rod the lamps hang from, along the row of pillars from wall to wall (height). */
  lampRodY: FLOOR + 6.2,
  /** Dark green marble on the walls: the skirting, a band, and the cornice under the cloth. */
  bands: { skirting: 0.45, band: FLOOR + 3.3, bandHeight: 0.14, cornice: 0.24 },
};

const { halfW, halfD, stair } = KAABA_INTERIOR;

/** The engraved marble plaques set in the walls: ten (positions illustrative). */
/** `nx, nz`: the wall's inward normal in the local frame. */
export const KAABA_PLAQUES: readonly { x: number; z: number; nx: number; nz: number }[] = [
  // back (south-west) wall, facing in (+Z)
  { x: -3.5, z: -halfD, nx: 0, nz: 1 },
  { x: 0, z: -halfD, nx: 0, nz: 1 },
  { x: 3.5, z: -halfD, nx: 0, nz: 1 },
  // south-east wall (-X), facing in (+X)
  { x: -halfW, z: -2.5, nx: 1, nz: 0 },
  { x: -halfW, z: 0, nx: 1, nz: 0 },
  { x: -halfW, z: 2.5, nx: 1, nz: 0 },
  // Hijr (north-west) wall (+X), facing in (-X), short of the staircase in the corner
  { x: halfW, z: -2.5, nx: -1, nz: 0 },
  { x: halfW, z: 0, nx: -1, nz: 0 },
  // door wall (+Z), facing in (-Z), between the door and the staircase
  { x: 0.2, z: halfD, nx: 0, nz: -1 },
  { x: 2.5, z: halfD, nx: 0, nz: -1 },
];

/**
 * The door's two leaves, seen from inside: each hangs on a hinge at a jamb, just inside the wall,
 * and opens into the room (while the stairs stand at the door; see kaaba-stairs.ts).
 */
export const DOOR_LEAVES = {
  hingeZ: halfD - 0.06,
  width: KAABA.door.width / 2,
  thickness: 0.05,
  /** How far they turn open, radians: a little past square to the wall. */
  open: (95 * Math.PI) / 180,
};

/**
 * Each leaf, local: its hinge, which way its free edge points when closed (`toward`, along X), the
 * angle it turns open about its hinge (three.js rotation.y), and where its free edge then is.
 */
export function doorLeaves(): { hinge: Vec2; toward: 1 | -1; turn: number; openEdge: Vec2 }[] {
  const { hingeZ, width, open } = DOOR_LEAVES;
  const { centerX } = KAABA.door;
  return ([1, -1] as const).map((toward) => ({
    hinge: { x: centerX - toward * width, z: hingeZ },
    toward,
    turn: toward * open,
    openEdge: { x: centerX - toward * width + toward * width * Math.cos(open), z: hingeZ - width * Math.sin(open) },
  }));
}

/** Bab al-Tawbah's centre (local), on the staircase's face towards the room. */
const TAWBAH_LOCAL = { x: halfW - stair.size, z: halfD - stair.size / 2 };

const local3 = (x: number, y: number, z: number): Vec3 => kaabaToWorld3(x, y, z);

/** Where a visitor stands just inside the door, and what they first see (in world coordinates). */
export const KAABA_ENTRY = {
  position: kaabaToWorld(KAABA.door.centerX, halfD - 1.1),
  lookAt: local3(KAABA.door.centerX + 1.2, FLOOR + 2.2, -halfD),
};

/** Back outside: in front of the door, facing it. */
export const KAABA_EXIT = {
  position: kaabaToWorld(KAABA.door.centerX, KAABA_HALF_D + 6),
  lookAt: local3(KAABA.door.centerX, KAABA.door.bottom + KAABA.door.height / 2, KAABA_HALF_D),
};

export const KAABA_INTERIOR_ANCHORS = {
  room: local3(0, FLOOR + 5.2, -halfD + 0.6),
  pillars: local3(0, FLOOR + 3.6, 0.4),
  tawbah: local3(TAWBAH_LOCAL.x - 0.15, FLOOR + stair.doorHeight + 0.5, TAWBAH_LOCAL.z),
};

export const KAABA_INTERIOR_VIEWS = {
  room: { position: KAABA_ENTRY.position, lookAt: local3(0, FLOOR + 3, -halfD) },
  pillars: { position: kaabaToWorld(1.6, 2.9), lookAt: local3(0, FLOOR + 3.4, 0) },
  tawbah: { position: kaabaToWorld(-0.6, 2.2), lookAt: local3(TAWBAH_LOCAL.x, FLOOR + 1.3, TAWBAH_LOCAL.z) },
};

export { TAWBAH_LOCAL };
