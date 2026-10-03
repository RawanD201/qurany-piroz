import type { Mesh } from 'three';
import { describe, expect, it } from 'vitest';
import { KAABA_ENTRY, KAABA_INTERIOR } from '../src/data/kaaba-interior';
import { DOORWAY, KAABA_STAIRS, nearStairs, sideOfDoorway, stairsHeight } from '../src/data/kaaba-stairs';
import { KAABA, KAABA_HALF_D, kaabaToWorld, kaabaToWorld3, worldToKaaba } from '../src/data/layout';
import { buildCollisionWorld, buildKaabaInteriorWorld } from '../src/physics/build-colliders';
import { NavGrid } from '../src/physics/navigation';
import { Player } from '../src/player/player';
import { buildKaabaDoor } from '../src/world/kaaba-door';
import { createMaterials } from '../src/world/materials';

const { centerX, bottom: sill } = KAABA.door;
const { left, right, landingEnd, foot } = KAABA_STAIRS;
/** A point on the door's centre line, `z` metres out from the Kaaba's centre (local). */
const onAxis = (z: number) => kaabaToWorld(centerX, z);
const localZ = (player: Player) => worldToKaaba(player.x, player.z).z;

describe("the stairs at the Kaaba's door", () => {
  const ground = buildCollisionWorld({ kaabaStairs: true, kaabaDoorway: true });
  const room = buildKaabaInteriorWorld({ doorOpen: true, exit: true });

  it('turn between the world and the Kaaba’s frame both ways', () => {
    const p = worldToKaaba(kaabaToWorld(-3.1, 7.4).x, kaabaToWorld(-3.1, 7.4).z);
    expect(p.x).toBeCloseTo(-3.1, 9);
    expect(p.z).toBeCloseTo(7.4, 9);
  });

  it('rise evenly from the floor to the sill, level with the room’s floor', () => {
    expect(KAABA_INTERIOR.floorY).toBe(sill);
    expect(stairsHeight(centerX, foot + 1)).toBe(0);
    expect(stairsHeight(centerX, landingEnd - 0.3)).toBe(sill);
    expect(stairsHeight(centerX, DOORWAY.enter)).toBe(sill);
    const middle = stairsHeight(centerX, (foot + landingEnd) / 2);
    expect(middle).toBeGreaterThan(0.8);
    expect(middle).toBeLessThan(1.6);
    // Only between the sides.
    expect(stairsHeight(left - 0.2, landingEnd + 1)).toBe(0);
    expect(stairsHeight(right + 0.2, landingEnd + 1)).toBe(0);
    const p = onAxis(landingEnd - 0.3);
    expect(ground.groundHeight(p.x, p.z)).toBe(sill);
    // Without the stairs the ground stays flat.
    expect(buildCollisionWorld().groundHeight(p.x, p.z)).toBe(0);
  });

  it('cannot be climbed over their sides', () => {
    const from = kaabaToWorld(left - 0.6, landingEnd + 1.5);
    const to = kaabaToWorld(left + 0.6, landingEnd + 1.5);
    const moved = ground.move(from.x, from.z, to.x - from.x, to.z - from.z, 0.3);
    expect(worldToKaaba(moved.x, moved.z).x).toBeLessThan(left - 0.3);
  });

  it('can be reached with a double-click: a route from the Mataf up to the landing', () => {
    const route = NavGrid.fromWorld(ground).findPath(kaabaToWorld(-12, KAABA_HALF_D + 9), onAxis(landingEnd - 0.5));
    expect(route).not.toBeNull();
    const end = route ? route[route.length - 1] : null;
    expect(end && ground.groundHeight(end.x, end.z)).toBe(sill);
  });

  it('lead only up to the door while it is shut, and only to the doorway’s edge inside without them', () => {
    const shut = buildCollisionWorld({ kaabaStairs: true });
    const landing = onAxis(landingEnd - 0.25);
    expect(shut.isFree(landing.x, landing.z, 0.3)).toBe(true);
    expect(shut.groundHeight(landing.x, landing.z)).toBe(sill);
    // Walking at the shut door goes nowhere.
    const into = onAxis(DOORWAY.inner);
    const blocked = shut.move(landing.x, landing.z, into.x - landing.x, into.z - landing.z, 0.3);
    expect(worldToKaaba(blocked.x, blocked.z).z).toBeGreaterThan(KAABA_HALF_D + 0.3);
    // Open, but with no stairs to step onto: inside, the doorway ends before the drop.
    const noExit = buildKaabaInteriorWorld({ doorOpen: true });
    const from = onAxis(DOORWAY.inner - 1);
    const out = onAxis(DOORWAY.roomEnd);
    const stopped = noExit.move(from.x, from.z, out.x - from.x, out.z - from.z, 0.3);
    expect(worldToKaaba(stopped.x, stopped.z).z).toBeLessThan(DOORWAY.leave);
  });

  it('switch the visitor between the ground and the room only in the doorway, a little apart', () => {
    expect(DOORWAY.enter).toBeLessThan(DOORWAY.leave);
    expect(DOORWAY.inner).toBeLessThan(DOORWAY.enter);
    expect(DOORWAY.leave).toBeLessThan(DOORWAY.outer);
    const inDoor = onAxis((DOORWAY.enter + DOORWAY.leave) / 2);
    expect(sideOfDoorway(inDoor.x, inDoor.z, 'ground')).toBe('ground');
    expect(sideOfDoorway(inDoor.x, inDoor.z, 'kaaba')).toBe('kaaba');
    const inside = onAxis(DOORWAY.enter - 0.1);
    expect(sideOfDoorway(inside.x, inside.z, 'ground')).toBe('kaaba');
    const outside = onAxis(DOORWAY.leave + 0.1);
    expect(sideOfDoorway(outside.x, outside.z, 'kaaba')).toBe('ground');
    // Behind the Kaaba, in line with the door, is not in the doorway.
    const behind = onAxis(-KAABA_HALF_D - 3);
    expect(sideOfDoorway(behind.x, behind.z, 'ground')).toBe('ground');
    expect(nearStairs(onAxis(landingEnd).x, onAxis(landingEnd).z)).toBe(true);
    expect(nearStairs(onAxis(foot + 2).x, onAxis(foot + 2).z)).toBe(false);
  });

  it('can be walked up, through the doorway into the room, and back down', () => {
    // From the floor in front of the stairs, facing the door.
    const player = new Player(ground, onAxis(foot + 2));
    player.teleport(onAxis(foot + 2), kaabaToWorld3(centerX, sill + 1.65, KAABA_HALF_D));
    let side: 'ground' | 'kaaba' = 'ground';
    const forward = { x: 0, y: 1, fast: false };
    const step = () => {
      player.update(1 / 60, forward);
      const next = sideOfDoorway(player.x, player.z, side);
      if (next !== side) {
        side = next;
        player.setWorld(side === 'kaaba' ? room : ground, true);
      }
    };
    let highest = 0;
    for (let frame = 0; frame < 60 * 8 && localZ(player) > entryZ(); frame++) {
      step();
      highest = Math.max(highest, player.y);
    }
    expect(side).toBe('kaaba');
    expect(localZ(player)).toBeLessThan(DOORWAY.inner - 0.5);
    expect(player.y).toBe(sill);
    expect(highest).toBe(sill);

    // Turn round and walk out and down: on the steps at every frame, never falling.
    player.yaw += Math.PI;
    for (let frame = 0; frame < 60 * 8 && localZ(player) < foot + 1.5; frame++) {
      step();
      expect(player.grounded).toBe(true);
    }
    expect(side).toBe('ground');
    expect(localZ(player)).toBeGreaterThan(foot + 1);
    expect(player.y).toBe(0);
  });
});

/** Just inside the door, where "Go inside the Kaaba" puts the visitor (local z). */
function entryZ(): number {
  return worldToKaaba(KAABA_ENTRY.position.x, KAABA_ENTRY.position.z).z;
}

describe("the Kaaba's door opening and closing", () => {
  const materials = createMaterials({ textures: {}, environmentMap: false, richMaterials: false });
  let leaves = 0;
  const door = buildKaabaDoor(materials, { setDoorOpening: (amount) => (leaves = amount) });
  const sheet = door.group.children[0] as Mesh;
  /** How high the curtain's lower edge is. */
  const curtainFoot = () => {
    const position = sheet.geometry.getAttribute('position');
    let lowest = Infinity;
    for (let i = 0; i < position.count; i++) lowest = Math.min(lowest, position.getY(i));
    return lowest;
  };
  const run = (seconds: number) => {
    for (let t = 0; t < seconds; t += 1 / 60) door.update(1 / 60);
  };

  it('rolls the curtain up gradually, then opens the leaves', () => {
    expect(door.shut).toBe(true);
    expect(curtainFoot()).toBeCloseTo(KAABA.sitara.bottom);
    door.setOpen(true);
    run(0.6);
    expect(curtainFoot()).toBeGreaterThan(KAABA.sitara.bottom + 0.05);
    expect(curtainFoot()).toBeLessThan(KAABA.door.bottom + KAABA.door.height);
    expect(leaves).toBe(0);
    run(4);
    expect(door.moving).toBe(false);
    expect(curtainFoot()).toBeGreaterThan(KAABA.door.bottom + KAABA.door.height);
    expect(leaves).toBe(1);
  });

  it('closes the other way round: the leaves first, then the curtain comes down', () => {
    door.setOpen(false);
    run(1);
    expect(leaves).toBeLessThan(1);
    expect(curtainFoot()).toBeGreaterThan(KAABA.door.bottom + KAABA.door.height);
    run(4);
    expect(door.shut).toBe(true);
    expect(leaves).toBe(0);
    expect(curtainFoot()).toBeCloseTo(KAABA.sitara.bottom);
    door.setOpen(true, true);
    expect(leaves).toBe(1);
    expect(door.moving).toBe(false);
  });
});
