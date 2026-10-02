import { describe, expect, it } from 'vitest';
import { PLAYER, SPAWN, masaAxis, masaPoint } from '../src/data/layout';
import { buildCollisionWorld } from '../src/physics/build-colliders';
import { CollisionWorld } from '../src/physics/collision';
import { NavGrid } from '../src/physics/navigation';
import { Player } from '../src/player/player';

function walledWorld(): CollisionWorld {
  const world = new CollisionWorld({ minX: -30, maxX: 30, minZ: -30, maxZ: 30 });
  // A wall across the middle with a gap at its east end.
  world.addSegment(-30, 0, 20, 0, 0.5);
  return world;
}

const STILL = { x: 0, y: 0, fast: false };

function walk(player: Player, seconds: number): void {
  for (let t = 0; t < seconds; t += 1 / 60) player.update(1 / 60, STILL);
}

describe('route finding', () => {
  it('walks straight across open ground', () => {
    const nav = NavGrid.fromWorld(walledWorld());
    expect(nav.findPath({ x: -10, z: 10 }, { x: 10, z: 12 })).toEqual([{ x: 10, z: 12 }]);
  });

  it('goes round a wall through the gap, never through it', () => {
    const world = walledWorld();
    const nav = NavGrid.fromWorld(world);
    const route = nav.findPath({ x: -10, z: 10 }, { x: -10, z: -10 });
    expect(route).not.toBeNull();
    // It must pass east of the wall's end (x = 20).
    expect(route!.some((p) => p.x > 20)).toBe(true);
    // Every leg is walkable.
    let from = { x: -10, z: 10 };
    for (const p of route!) {
      expect(nav.lineClear(from, p)).toBe(true);
      from = p;
    }
    // Straightened: a handful of corners, not a staircase of grid cells.
    expect(route!.length).toBeLessThan(6);
  });

  it('moves a destination just inside an obstacle to the nearest free spot', () => {
    const world = new CollisionWorld({ minX: -30, maxX: 30, minZ: -30, maxZ: 30 });
    world.addCircle(10, 0, 2);
    const route = NavGrid.fromWorld(world).findPath({ x: -10, z: 0 }, { x: 8.3, z: 0 });
    expect(route).not.toBeNull();
    const end = route![route!.length - 1];
    expect(world.isFree(end.x, end.z, PLAYER.radius)).toBe(true);
  });

  it('reports unreachable places', () => {
    const world = new CollisionWorld({ minX: -30, maxX: 30, minZ: -30, maxZ: 30 });
    world.addPolyline(
      [
        { x: -5, z: -5 },
        { x: 5, z: -5 },
        { x: 5, z: 5 },
        { x: -5, z: 5 },
        { x: -5, z: -5 },
      ],
      0.5
    );
    expect(NavGrid.fromWorld(world).findPath({ x: -20, z: 0 }, { x: 0, z: 0 })).toBeNull();
  });

  it('finds a walkable route across the mosque, from the courtyard to Safa', () => {
    const world = buildCollisionWorld();
    const nav = NavGrid.fromWorld(world);
    const route = nav.findPath(SPAWN, masaPoint(18 / masaAxis().length));
    expect(route).not.toBeNull();
  });
});

describe('automatic walking', () => {
  it('follows a route to its end and stops there', () => {
    const world = walledWorld();
    const route = NavGrid.fromWorld(world).findPath({ x: -10, z: 10 }, { x: -10, z: -10 })!;
    const player = new Player(world, { x: -10, z: 10 });
    player.walkPath(route);
    walk(player, 40);
    expect(player.isWalkingPath).toBe(false);
    expect(Math.hypot(player.x + 10, player.z + 10)).toBeLessThan(0.4);
    expect(player.speed).toBe(0);
  });

  it('turns to face the way it walks, and gives the view back when the visitor looks', () => {
    const world = new CollisionWorld({ minX: -50, maxX: 50, minZ: -50, maxZ: 50 });
    const player = new Player(world, { x: 0, z: 0 });
    player.walkPath([{ x: 20, z: 0 }]); // due east; starts facing north
    walk(player, 1.5);
    expect(player.yaw).toBeCloseTo(-Math.PI / 2, 1);
    player.addLook(1, 0);
    const yaw = player.yaw;
    walk(player, 0.5);
    expect(player.yaw).toBe(yaw);
    expect(player.isWalkingPath).toBe(true);
  });

  it('stops when the visitor moves by hand', () => {
    const world = new CollisionWorld({ minX: -50, maxX: 50, minZ: -50, maxZ: 50 });
    const player = new Player(world, { x: 0, z: 0 });
    player.walkPath([{ x: 20, z: 0 }]);
    walk(player, 0.5);
    player.update(1 / 60, { x: 0, y: -1, fast: false });
    expect(player.isWalkingPath).toBe(false);
  });

  it('gives up when something blocks the way', () => {
    const world = new CollisionWorld({ minX: -50, maxX: 50, minZ: -50, maxZ: 50 });
    world.addSegment(5, -10, 5, 10, 0.5);
    const player = new Player(world, { x: 0, z: 0 });
    player.walkPath([{ x: 20, z: 0 }]); // straight into the wall
    walk(player, 6);
    expect(player.isWalkingPath).toBe(false);
    expect(player.x).toBeLessThan(5);
  });
});
