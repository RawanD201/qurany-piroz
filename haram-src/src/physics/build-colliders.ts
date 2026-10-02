// Builds the collision world from the same layout data the 3D geometry is built from.

import {
  BALCONY,
  HIJR,
  KAABA,
  KAABA_HALF_D,
  KAABA_HALF_W,
  WALL_THICKNESS,
  WORLD_BOUNDS,
  hijrCenterline,
  kaabaToWorld,
  maqamPosition,
  type Vec2,
} from '../data/layout';
import { LANDMARKS, MARWAH_CENTER, SAFA_CENTER } from '../data/plan-data';
import { pairs } from '../data/polygon';
import {
  HALL_FACADE_THICKNESS,
  MINARET_BASE_HALF,
  exteriorWalls,
  gateFrames,
  hallColumns,
  hallFacadePiers,
  masaColumns,
  minarets,
  northBlock,
  porticoColumns,
  porticoPiers,
} from '../data/structure';
import { CollisionWorld } from './collision';

export const ROCK_RADIUS = 7;
export const PORTAL_DEPTH = 2.6;

/**
 * The clock-tower balcony: a world of its own, high up, whose bounds are its railings and the
 * tower wall (kept a little way off, so the camera's near plane never clips the glass).
 */
export function buildBalconyWorld(): CollisionWorld {
  const { minX, maxX, innerZ, depth, inset, floorY } = BALCONY;
  return new CollisionWorld({ minX: minX + inset, maxX: maxX - inset, minZ: innerZ - depth + inset, maxZ: innerZ - inset }, 8, floorY);
}

function nearBounds(p: Vec2, margin: number): boolean {
  return (
    p.x > WORLD_BOUNDS.minX - margin &&
    p.x < WORLD_BOUNDS.maxX + margin &&
    p.z > WORLD_BOUNDS.minZ - margin &&
    p.z < WORLD_BOUNDS.maxZ + margin
  );
}

export function buildCollisionWorld(): CollisionWorld {
  const world = new CollisionWorld(WORLD_BOUNDS, 8);

  // The Kaaba, including its marble base. Tall: it hides markers on its far side.
  world.addBox(
    0,
    0,
    KAABA_HALF_W + KAABA.base.overhang,
    KAABA_HALF_D + KAABA.base.overhang,
    KAABA.rotationY,
    { tall: true }
  );

  // Hijr Ismail's low wall: blocks walking, not sight.
  world.addPolyline(
    hijrCenterline(24).map((p) => kaabaToWorld(p.x, p.z)),
    HIJR.thickness / 2
  );

  const maqam = maqamPosition();
  world.addCircle(maqam.x, maqam.z, 1.25);

  for (const pier of porticoPiers()) {
    world.addBox(pier.x, pier.z, pier.halfAlong, pier.halfAcross, pier.angle);
  }
  for (const column of porticoColumns()) world.addCircle(column.x, column.z, 0.4);
  for (const pier of hallFacadePiers()) {
    world.addBox(pier.x, pier.z, pier.halfAlong, Math.max(pier.halfAcross, HALL_FACADE_THICKNESS / 2), pier.angle);
  }

  for (const column of hallColumns()) world.addCircle(column.x, column.z, 0.5);
  for (const column of masaColumns()) world.addCircle(column.x, column.z, 0.5);

  // Safa and Marwah: the visible rock is fenced off.
  world.addCircle(SAFA_CENTER.x, SAFA_CENTER.z, ROCK_RADIUS);
  world.addCircle(MARWAH_CENTER.x, MARWAH_CENTER.z, ROCK_RADIUS);

  // Outer walls (tall) with the doorways left clear; the expansions' walls have none.
  for (const wall of exteriorWalls()) {
    world.addSegment(wall.a.x, wall.a.z, wall.b.x, wall.b.z, WALL_THICKNESS / 2, { tall: true });
  }
  const north = [...northBlock().points];
  world.addPolyline([...north, north[0]], WALL_THICKNESS / 2, { tall: true });

  // Gate portals project outwards from the wall; their sides are solid.
  for (const frame of gateFrames()) {
    if (!frame.open || frame.gate.id === null) continue;
    const { center, outward, tangent, gate } = frame;
    for (const sign of [-1, 1]) {
      const sideX = center.x + tangent.x * sign * (gate.width / 2 + 1.5);
      const sideZ = center.z + tangent.z * sign * (gate.width / 2 + 1.5);
      world.addSegment(sideX, sideZ, sideX + outward.x * PORTAL_DEPTH, sideZ + outward.z * PORTAL_DEPTH, 1.5);
    }
  }

  for (const m of minarets()) world.addCircle(m.x, m.z, MINARET_BASE_HALF * 1.2 * (m.height / 104));

  // The buildings around the plazas (those standing on the ground).
  for (const landmark of LANDMARKS) {
    if (landmark.y0 > 2) continue;
    const outline = pairs(landmark.outline);
    if (!outline.some((p) => nearBounds(p, 20))) continue;
    world.addPolyline([...outline, outline[0]], 0.4, { tall: landmark.y1 > 6 });
  }

  // The edge of the walkable world, where the city begins.
  const { minX, maxX, minZ, maxZ } = WORLD_BOUNDS;
  world.addPolyline(
    [
      { x: minX, z: minZ },
      { x: maxX, z: minZ },
      { x: maxX, z: maxZ },
      { x: minX, z: maxZ },
      { x: minX, z: minZ },
    ],
    0.5
  );

  return world;
}
