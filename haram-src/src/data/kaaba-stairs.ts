// The staircase on wheels that is brought up to the Kaaba's door when the Kaaba is opened, and the
// open doorway, in the Kaaba's local frame (layout.ts: +Z is the door wall). The visitor can bring
// the stairs to the door or take them away (the Kaaba's panels). While they stand there the door is
// open: the visitor can walk up them, through the doorway into the room, and back out. Shared by
// the 3D model (world/kaaba-door.ts), the collision worlds (physics/build-colliders.ts) and the
// explorer, which moves the visitor between the Haram's ground and the room as they pass through
// the doorway.
//
// The real staircase's measurements are not published. It is drawn as wide as the door between
// gilded sides, with a landing at the sill and steps of an easy rise; all of that is approximate.

import { KAABA_INTERIOR, DOOR_LEAVES } from './kaaba-interior';
import { KAABA, KAABA_HALF_D, PLAYER, kaabaToWorld, kaabaToWorld3, worldToKaaba } from './layout';

const { door } = KAABA;
const RISERS = 12;
const TREAD = 0.3;
const LANDING = 1.0;

export const KAABA_STAIRS = {
  /** Its sides stand at the door's jambs, so the steps are as wide as the door. */
  left: door.centerX - door.width / 2,
  right: door.centerX + door.width / 2,
  /** The landing, level with the sill, reaches this far out from the wall. */
  landingEnd: KAABA_HALF_D + LANDING,
  risers: RISERS,
  riser: door.bottom / RISERS,
  tread: TREAD,
  /** Where the bottom step stands on the floor (the front of its tread). */
  foot: KAABA_HALF_D + LANDING + (RISERS - 1) * TREAD,
  /** How high the sides rise above the steps, and their thickness. */
  rail: 1.0,
  side: 0.08,
} as const;

/**
 * The doorway through the wall (local z). The visitor crosses from the Haram's ground into the
 * room past `enter`, and back out past `leave`, in the middle of the wall; the two lines are a
 * little apart so that standing on one does not switch to and fro. Each side's collision world
 * runs on past its line: the ground's into the room (to `groundEnd`), the room's out of the
 * doorway (to `roomEnd`), so neither ends before the visitor has crossed.
 */
export const DOORWAY = {
  inner: KAABA_HALF_D - KAABA_INTERIOR.wall,
  outer: KAABA_HALF_D,
  enter: KAABA_HALF_D - KAABA_INTERIOR.wall / 2 - 0.05,
  leave: KAABA_HALF_D - KAABA_INTERIOR.wall / 2 + 0.05,
  groundEnd: KAABA_HALF_D - KAABA_INTERIOR.wall - 0.9,
  roomEnd: KAABA_HALF_D + 0.6,
} as const;

/**
 * How high the visitor walks on the stairs at a local point, or 0 off them. The steps are walked
 * as an even slope along their front edges, from the floor a tread in front of the bottom step
 * up to the landing; the landing and the doorway are level with the sill.
 */
export function stairsHeight(x: number, z: number): number {
  const { left, right, landingEnd, foot, tread } = KAABA_STAIRS;
  const start = foot + tread;
  if (x <= left || x >= right || z >= start || z < DOORWAY.groundEnd) return 0;
  if (z <= landingEnd) return door.bottom;
  return (door.bottom * (start - z)) / (start - landingEnd);
}

/** On the landing in front of the door, facing it (where a visitor in the doorway steps back to when it closes). */
export const KAABA_LANDING = {
  position: kaabaToWorld(door.centerX, KAABA_STAIRS.landingEnd - 0.25),
  lookAt: kaabaToWorld3(door.centerX, door.bottom + door.height / 2, KAABA_HALF_D),
};

/** Whether a visitor on the ground (world coordinates) stands in the doorway, where the door would shut them out. */
export function inDoorway(x: number, z: number): boolean {
  const p = worldToKaaba(x, z);
  return Math.abs(p.x - door.centerX) < door.width / 2 + PLAYER.radius && p.z > DOORWAY.groundEnd - 0.5 && p.z < KAABA_HALF_D + KAABA.base.overhang + PLAYER.radius + 0.05;
}

/** Whether a point (world coordinates) is on the stairs or in the doorway, or within `margin` of them. */
export function nearStairs(x: number, z: number, margin = 0): boolean {
  const p = worldToKaaba(x, z);
  const { left, right, foot, tread } = KAABA_STAIRS;
  return p.x > left - margin && p.x < right + margin && p.z > DOORWAY.inner - margin && p.z < foot + tread + margin;
}

/** Whether a visitor inside (world coordinates) stands in the doorway or where the door's leaves swing. */
export function inDoorSwing(x: number, z: number): boolean {
  const p = worldToKaaba(x, z);
  const reach = PLAYER.radius + 0.1;
  return (
    Math.abs(p.x - door.centerX) < door.width / 2 + reach &&
    p.z > DOOR_LEAVES.hingeZ - DOOR_LEAVES.width - reach
  );
}

/**
 * Which side of the doorway a visitor at (x, z), world coordinates, is now on — the Haram's
 * ground or the room — given the side they were on. Only the doorway itself counts.
 */
export function sideOfDoorway(x: number, z: number, was: 'ground' | 'kaaba'): 'ground' | 'kaaba' {
  const p = worldToKaaba(x, z);
  if (Math.abs(p.x - door.centerX) >= door.width / 2 || p.z < DOORWAY.groundEnd || p.z > DOORWAY.roomEnd) return was;
  if (was === 'ground' && p.z < DOORWAY.enter) return 'kaaba';
  if (was === 'kaaba' && p.z > DOORWAY.leave) return 'ground';
  return was;
}
