import { describe, expect, it } from 'vitest';
import { CollisionWorld } from '../src/physics/collision';

const BOUNDS = { minX: -50, maxX: 50, minZ: -50, maxZ: 50 };

describe('CollisionWorld', () => {
  it('pushes a circle out of a column', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addCircle(0, 0, 1);
    const p = world.resolve(0.5, 0, 0.3);
    expect(Math.hypot(p.x, p.z)).toBeCloseTo(1.3, 5);
  });

  it('stops movement at a wall and slides along it', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addSegment(-10, 0, 10, 0, 0.5);
    // Walking diagonally into the wall from z = 2.
    const p = world.move(0, 2, 3, -5, 0.3);
    expect(p.z).toBeGreaterThanOrEqual(0.8 - 1e-6);
    expect(p.x).toBeGreaterThan(2.5); // kept the sideways part of the move
  });

  it('never tunnels through a thin wall, even with a very long step', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addSegment(-10, 0, 10, 0, 0.02);
    const p = world.move(0, 1, 0, -20, 0.3);
    expect(p.z).toBeGreaterThan(0);
  });

  it('solid boxes block from every side', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addBox(0, 0, 2, 1, Math.PI / 4);
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
      const start = { x: Math.cos(angle) * 6, z: Math.sin(angle) * 6 };
      const p = world.move(start.x, start.z, -start.x, -start.z, 0.3);
      expect(Math.hypot(p.x, p.z)).toBeGreaterThan(0.9);
    }
  });

  it('keeps the circle inside the world bounds', () => {
    const world = new CollisionWorld(BOUNDS);
    const p = world.move(0, 0, 200, -200, 0.3);
    expect(p.x).toBeLessThanOrEqual(50 - 0.3 + 1e-9);
    expect(p.z).toBeGreaterThanOrEqual(-50 + 0.3 - 1e-9);
  });

  it('only tall shapes block line of sight', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addSegment(-5, 0, 5, 0, 0.5, { tall: false });
    expect(world.lineOfSight(0, 10, 0, -10)).toBe(true);
    world.addSegment(-5, 2, 5, 2, 0.5, { tall: true });
    expect(world.lineOfSight(0, 10, 0, -10)).toBe(false);
    // A target sitting on the tall wall itself is still visible.
    expect(world.lineOfSight(0, 10, 0, 2, 1)).toBe(true);
  });

  it('reports free and blocked spots', () => {
    const world = new CollisionWorld(BOUNDS);
    world.addCircle(10, 10, 2);
    expect(world.isFree(10, 10, 0.3)).toBe(false);
    expect(world.isFree(13, 10, 0.3)).toBe(true);
    expect(world.isFree(49.9, 0, 0.3)).toBe(false);
  });
});
