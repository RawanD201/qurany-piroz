import { describe, expect, it } from 'vitest';
import { CAMERA, MOVEMENT } from '../src/config';
import { BALCONY, CLOCK_TOWER, PLAYER, SPAWN } from '../src/data/layout';
import { buildBalconyWorld, buildCollisionWorld } from '../src/physics/build-colliders';
import { CollisionWorld } from '../src/physics/collision';
import { Player, lookAngles } from '../src/player/player';

function openWorld(): CollisionWorld {
  return new CollisionWorld({ minX: -500, maxX: 500, minZ: -500, maxZ: 500 });
}

function run(player: Player, seconds: number, intent = { x: 0, y: 1, fast: false }): void {
  for (let t = 0; t < seconds; t += 1 / 60) player.update(1 / 60, intent);
}

describe('Player', () => {
  it('accelerates smoothly to walking speed and walks north at yaw 0', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    player.update(1 / 60, { x: 0, y: 1, fast: false });
    expect(player.speed).toBeGreaterThan(0);
    expect(player.speed).toBeLessThan(MOVEMENT.walkSpeed * 0.5); // not an instant jump
    run(player, 2);
    expect(player.speed).toBeCloseTo(MOVEMENT.walkSpeed, 1);
    expect(player.z).toBeLessThan(-4);
    expect(Math.abs(player.x)).toBeLessThan(1e-6);
  });

  it('decelerates to a stop when input is released', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    run(player, 1);
    run(player, 1.5, { x: 0, y: 0, fast: false });
    expect(player.speed).toBe(0);
  });

  it('moves faster when fast is held, scaled by the speed setting', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    player.speedMultiplier = 0.5;
    run(player, 2, { x: 0, y: 1, fast: true });
    expect(player.speed).toBeCloseTo(MOVEMENT.fastSpeed * 0.5, 1);
  });

  it('strafes right towards east at yaw 0', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    run(player, 1, { x: 1, y: 0, fast: false });
    expect(player.x).toBeGreaterThan(1);
  });

  it('falls back to the floor and stays on it', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    player.y = 3;
    run(player, 2, { x: 0, y: 0, fast: false });
    expect(player.y).toBe(0);
    expect(player.grounded).toBe(true);
  });

  it('clamps pitch and wraps yaw', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    player.addLook(10, 10);
    expect(player.pitch).toBeLessThan(Math.PI / 2);
    expect(Math.abs(player.yaw)).toBeLessThanOrEqual(Math.PI);
  });

  it('turns smoothly towards a target, and instantly for reduced motion', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    const target = { x: 10, y: 1.65, z: 0 }; // due east
    player.turnTowards(target, 1);
    player.update(0.1, { x: 0, y: 0, fast: false });
    expect(player.isTurning).toBe(true);
    run(player, 1.2, { x: 0, y: 0, fast: false });
    expect(player.yaw).toBeCloseTo(-Math.PI / 2, 5);
    const other = new Player(openWorld(), { x: 0, z: 0 });
    other.turnTowards(target, 0);
    expect(other.yaw).toBeCloseTo(lookAngles(other.eye, target).yaw, 9);
  });

  it('walks a route there and back, pausing at each end and hastening where paced', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    const reached: number[] = [];
    let fastest = 0;
    player.walkPath(
      [
        { x: 0, z: -30 },
        { x: 0, z: 0 },
        { x: 0, z: -30 },
      ],
      {
        // Hasten between z = -10 and z = -20.
        paceAt: (_x, z) => (z <= -10 && z >= -20 ? 1.75 : 1),
        pause: 1,
        onWaypoint: (index) => reached.push(index),
      }
    );
    // Looking around stops the view turning with the route, until the next stop.
    player.addLook(0.5, 0);
    let pausedAtEnd = false;
    let facedBack = false;
    for (let t = 0; t < 60 && player.isWalkingPath; t += 1 / 60) {
      player.update(1 / 60, { x: 0, y: 0, fast: false });
      fastest = Math.max(fastest, player.speed);
      if (reached.length === 1 && player.speed < 0.05) pausedAtEnd = true;
      // Heading back south (towards +Z) means a yaw of ±π.
      if (reached.length === 1 && player.speed > 2 && Math.abs(Math.abs(player.yaw) - Math.PI) < 0.05) facedBack = true;
    }
    expect(facedBack).toBe(true);
    expect(player.isWalkingPath).toBe(false);
    expect(reached).toEqual([0, 1, 2]);
    expect(pausedAtEnd).toBe(true);
    expect(player.z).toBeCloseTo(-30, 0);
    expect(fastest).toBeGreaterThan(MOVEMENT.walkSpeed * 1.5);
    expect(fastest).toBeLessThan(MOVEMENT.walkSpeed * 1.8);
  });

  it('ends an automatic walk as soon as the visitor moves by hand', () => {
    const player = new Player(openWorld(), { x: 0, z: 0 });
    player.walkPath([{ x: 0, z: -30 }], { pause: 1 });
    run(player, 0.5, { x: 0, y: 0, fast: false });
    expect(player.isWalkingPath).toBe(true);
    player.update(1 / 60, { x: 1, y: 0, fast: false });
    expect(player.isWalkingPath).toBe(false);
  });

  it('stands on the clock-tower balcony, cannot step off it, and comes back down to the ground', () => {
    const ground = buildCollisionWorld();
    const balcony = buildBalconyWorld();
    const player = new Player(ground, SPAWN);
    player.setWorld(balcony);
    player.teleport({ x: CLOCK_TOWER.x, z: BALCONY.innerZ - BALCONY.depth / 2 }, { x: 0, y: 0, z: 0 });
    expect(player.y).toBe(BALCONY.floorY);
    expect(player.pitch).toBeLessThan(-0.5); // looking down at the Kaaba, about 490 m away
    // Walk north (towards the railing and the drop) and along it for a while.
    player.yaw = 0;
    run(player, 6);
    run(player, 12, { x: 1, y: 0, fast: true });
    expect(player.y).toBe(BALCONY.floorY);
    const clear = BALCONY.inset + PLAYER.radius - 1e-6;
    expect(player.z).toBeGreaterThanOrEqual(BALCONY.innerZ - BALCONY.depth + clear);
    expect(player.x).toBeLessThanOrEqual(BALCONY.maxX - clear);
    // The visitor can stand right at the railing (to look down at the mosque), and nothing on
    // the balcony comes nearer the eye than the balcony pass's near plane.
    expect(player.z).toBeLessThan(BALCONY.innerZ - BALCONY.depth + 0.5);
    expect(BALCONY.inset + PLAYER.radius).toBeGreaterThan(CAMERA.balconyNearPass.near);

    player.setWorld(ground);
    player.teleport(SPAWN);
    expect(player.y).toBe(0);
    expect(ground.isFree(player.x, player.z, PLAYER.radius)).toBe(true);
  });
});
