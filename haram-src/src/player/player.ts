// The visitor: where they stand, which way they face, and how they move.
//
// Deliberately free of three.js — the camera simply copies this state each frame
// (see camera-rig.ts) — so movement, collision and turning can be unit-tested in Node.
//
// Angles: yaw 0 faces north (-Z) and increases turning left (anticlockwise seen from above),
// matching three.js's rotation.y. Pitch is positive looking up.

import { CAMERA, MOVEMENT } from '../config';
import { PLAYER, type Vec2, type Vec3 } from '../data/layout';
import type { CollisionWorld } from '../physics/collision';

export interface MoveIntent {
  /** Strafe, -1 (left) to 1 (right). */
  x: number;
  /** Forward, -1 (back) to 1 (forward). */
  y: number;
  /** Walk faster (Shift on a keyboard, the "Walk faster" toggle on touch screens). */
  fast: boolean;
}

/** How an automatic walk is paced (see walkPath). */
export interface WalkOptions {
  /**
   * The pace at a position, as a multiple of walking speed; the visitor moves at least this
   * fast there (the sa'i hastens between the green lights this way).
   */
  paceAt?: (x: number, z: number) => number;
  /** Seconds to stand at each waypoint before the last, turning to face the next leg. */
  pause?: number;
  /** Called on reaching each waypoint, with its index (the last one included). */
  onWaypoint?: (index: number) => void;
}

/** A route being walked automatically ("double-click to walk there", the guide's routes). */
interface WalkPath {
  points: Vec2[];
  index: number;
  options: WalkOptions;
  /** Seconds left standing at a waypoint. */
  wait: number;
  /** Turn to face the way of travel, until the visitor looks around themselves. */
  autoTurn: boolean;
  /** Closest distance reached to the current waypoint, and time since it last improved. */
  best: number;
  stalled: number;
}

interface Turn {
  fromYaw: number;
  fromPitch: number;
  toYaw: number;
  toPitch: number;
  elapsed: number;
  duration: number;
}

const TWO_PI = Math.PI * 2;

function wrapAngle(angle: number): number {
  let a = (angle + Math.PI) % TWO_PI;
  if (a < 0) a += TWO_PI;
  return a - Math.PI;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/** The yaw and pitch that look from `from` (at eye height) towards `target`. */
export function lookAngles(from: Vec3, target: Vec3): { yaw: number; pitch: number } {
  const dx = target.x - from.x;
  const dz = target.z - from.z;
  const dy = target.y - from.y;
  return {
    yaw: Math.atan2(-dx, -dz),
    pitch: Math.max(-CAMERA.maxPitch, Math.min(CAMERA.maxPitch, Math.atan2(dy, Math.hypot(dx, dz)))),
  };
}

export class Player {
  x: number;
  z: number;
  /** Feet height. */
  y = 0;
  yaw = 0;
  pitch = 0;
  vx = 0;
  vz = 0;
  vy = 0;
  grounded = true;
  /** The visitor's walking-speed setting (multiplier). */
  speedMultiplier = 1;

  private turn: Turn | null = null;
  private path: WalkPath | null = null;

  constructor(
    private world: CollisionWorld,
    private readonly spawn: Vec2
  ) {
    this.x = spawn.x;
    this.z = spawn.z;
  }

  get eye(): Vec3 {
    return { x: this.x, y: this.y + PLAYER.eyeHeight, z: this.z };
  }

  get isTurning(): boolean {
    return this.turn !== null;
  }

  get speed(): number {
    return Math.hypot(this.vx, this.vz);
  }

  /** True while walking a route automatically. */
  get isWalkingPath(): boolean {
    return this.path !== null;
  }

  /** Where the current automatic walk ends, if any. */
  get walkDestination(): Vec2 | null {
    return this.path ? this.path.points[this.path.points.length - 1] : null;
  }

  /**
   * Walks a route (waypoints, excluding the start) at walking speed, turning to face the way.
   * Any movement input takes over and ends it; it also ends if the visitor gets stuck.
   */
  walkPath(points: Vec2[], options: WalkOptions = {}): void {
    if (points.length === 0) return;
    this.turn = null;
    this.path = { points, index: 0, options, wait: 0, autoTurn: true, best: Infinity, stalled: 0 };
  }

  cancelWalk(): void {
    this.path = null;
  }

  /** Applies a look delta in radians (from mouse, touch or pointer lock). */
  addLook(deltaYaw: number, deltaPitch: number): void {
    if (deltaYaw === 0 && deltaPitch === 0) return;
    // Taking the controls back cancels any automatic turn (an automatic walk carries on, but
    // stops turning the view, so the visitor can look around while walking).
    this.turn = null;
    if (this.path) this.path.autoTurn = false;
    this.yaw = wrapAngle(this.yaw + deltaYaw);
    this.pitch = Math.max(-CAMERA.maxPitch, Math.min(CAMERA.maxPitch, this.pitch + deltaPitch));
  }

  /** Smoothly turns to face a point; instantly if `duration` is 0 (reduced motion). */
  turnTowards(target: Vec3, duration: number): void {
    if (this.path) this.path.autoTurn = false;
    const { yaw, pitch } = lookAngles(this.eye, target);
    if (duration <= 0) {
      this.turn = null;
      this.yaw = yaw;
      this.pitch = pitch;
      return;
    }
    this.turn = { fromYaw: this.yaw, fromPitch: this.pitch, toYaw: yaw, toPitch: pitch, elapsed: 0, duration };
  }

  /** Moves the visitor to a spot (already known to be free), facing `lookAt` if given. */
  teleport(position: Vec2, lookAt?: Vec3): void {
    const resolved = this.world.resolve(position.x, position.z, PLAYER.radius);
    this.x = resolved.x;
    this.z = resolved.z;
    this.y = this.world.groundHeight(this.x, this.z);
    this.vx = this.vz = this.vy = 0;
    this.turn = null;
    this.path = null;
    if (!lookAt) return;
    const { yaw, pitch } = lookAngles(this.eye, lookAt);
    this.yaw = yaw;
    this.pitch = pitch;
  }

  /**
   * Moves the visitor into another collision world (the clock-tower balcony and back). Call
   * teleport() straight after, to put them somewhere in it.
   */
  setWorld(world: CollisionWorld): void {
    this.world = world;
    this.path = null;
  }

  resetToSpawn(lookAt: Vec3): void {
    this.teleport(this.spawn, lookAt);
  }

  /**
   * Advances one frame. Returns true if anything the camera shows changed, so the renderer
   * can skip drawing identical frames.
   */
  update(dt: number, intent: MoveIntent): boolean {
    const step = Math.min(Math.max(dt, 0), MOVEMENT.maxFrameTime);
    const before = { x: this.x, y: this.y, z: this.z, yaw: this.yaw, pitch: this.pitch };

    this.updateTurn(step);

    // Desired velocity from the input, relative to where the visitor is facing.
    let ix = intent.x;
    let iy = intent.y;
    const magnitude = Math.hypot(ix, iy);
    if (magnitude > 1) {
      ix /= magnitude;
      iy /= magnitude;
    }
    const speed = (intent.fast ? MOVEMENT.fastSpeed : MOVEMENT.walkSpeed) * this.speedMultiplier;
    const manual = magnitude > 0.01;
    // Moving by hand takes over from an automatic walk.
    if (manual) this.path = null;
    let targetVx: number;
    let targetVz: number;
    let accelerating = manual;
    const auto = this.path ? this.followPath(step, speed) : null;
    if (auto) {
      targetVx = auto.vx;
      targetVz = auto.vz;
      accelerating = true;
    } else {
      const sin = Math.sin(this.yaw);
      const cos = Math.cos(this.yaw);
      // forward = (-sin, -cos), right = (cos, -sin)
      targetVx = (-sin * iy + cos * ix) * speed;
      targetVz = (-cos * iy - sin * ix) * speed;
    }
    const rate = accelerating ? MOVEMENT.acceleration : MOVEMENT.deceleration;
    const blend = 1 - Math.exp(-rate * step);
    this.vx += (targetVx - this.vx) * blend;
    this.vz += (targetVz - this.vz) * blend;
    if (!accelerating && Math.hypot(this.vx, this.vz) < 0.02) {
      this.vx = 0;
      this.vz = 0;
    }

    if (this.vx !== 0 || this.vz !== 0) {
      const dx = this.vx * step;
      const dz = this.vz * step;
      const moved = this.world.move(this.x, this.z, dx, dz, PLAYER.radius);
      if (step > 0) {
        // When a wall shortens the step, carry on with the velocity that actually happened, so
        // the visitor slides along walls instead of pressing into them.
        const actualVx = (moved.x - this.x) / step;
        const actualVz = (moved.z - this.z) / step;
        if (Math.hypot(actualVx, actualVz) < Math.hypot(this.vx, this.vz) - 0.05) {
          this.vx = actualVx;
          this.vz = actualVz;
        }
      }
      this.x = moved.x;
      this.z = moved.z;
    }

    // Gravity and ground contact. The floor is level, but this keeps the visitor on it after a
    // teleport and never lets them fall through it.
    const ground = this.world.groundHeight(this.x, this.z);
    if (this.y > ground || this.vy > 0) {
      this.vy -= MOVEMENT.gravity * step;
      this.y += this.vy * step;
    }
    if (this.y <= ground) {
      this.y = ground;
      this.vy = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    if (!Number.isFinite(this.x) || !Number.isFinite(this.z) || !Number.isFinite(this.y)) {
      // Should never happen; if it does, put the visitor somewhere sensible rather than lose them.
      this.x = this.spawn.x;
      this.z = this.spawn.z;
      this.y = 0;
      this.vx = this.vz = this.vy = 0;
    }

    return (
      Math.abs(this.x - before.x) > 1e-5 ||
      Math.abs(this.z - before.z) > 1e-5 ||
      Math.abs(this.y - before.y) > 1e-5 ||
      this.yaw !== before.yaw ||
      this.pitch !== before.pitch
    );
  }

  /** Desired velocity along the automatic route, or null when it has ended. */
  private followPath(step: number, speed: number): { vx: number; vz: number } | null {
    const path = this.path;
    if (!path) return null;
    const pause = path.options.pause ?? 0;
    let target = path.points[path.index];
    let dx = target.x - this.x;
    let dz = target.z - this.z;
    let distance = Math.hypot(dx, dz);
    if (path.wait > 0) {
      // Standing at a waypoint, turning to face the way on.
      path.wait -= step;
      if (path.autoTurn && distance > 0.3) this.faceTowards(dx, dz, step);
      return { vx: 0, vz: 0 };
    }
    // Pass intermediate waypoints a little early, so corners are rounded off (or stop at them,
    // when the route pauses there).
    while (path.index < path.points.length - 1 && distance < (pause > 0 ? 0.35 : 0.7)) {
      path.options.onWaypoint?.(path.index);
      path.index++;
      path.best = Infinity;
      path.stalled = 0;
      target = path.points[path.index];
      dx = target.x - this.x;
      dz = target.z - this.z;
      distance = Math.hypot(dx, dz);
      if (pause > 0) {
        // A stop is a turning point (the end of a sa'i lap): face the next leg again, even if
        // the visitor looked around on the way.
        path.wait = pause;
        path.autoTurn = true;
        return { vx: 0, vz: 0 };
      }
    }
    const last = path.index === path.points.length - 1;
    if (last && distance < 0.25) {
      const { onWaypoint } = path.options;
      this.path = null;
      onWaypoint?.(path.index);
      return null;
    }
    // Give up if no progress is made for a while (something unexpected in the way).
    if (distance < path.best - 0.05) {
      path.best = distance;
      path.stalled = 0;
    } else if ((path.stalled += step) > 1.2) {
      this.path = null;
      return null;
    }
    if (path.autoTurn && distance > 0.3) this.faceTowards(dx, dz, step);
    const pace = path.options.paceAt?.(this.x, this.z) ?? 1;
    const cruise = Math.max(speed, MOVEMENT.walkSpeed * pace * this.speedMultiplier);
    // Slow down for the last couple of metres, and before a stop.
    const v = last || pause > 0 ? Math.min(cruise, Math.max(0.5, distance * 2.2)) : cruise;
    return { vx: (dx / distance) * v, vz: (dz / distance) * v };
  }

  /** Turns smoothly towards a horizontal direction. */
  private faceTowards(dx: number, dz: number, step: number): void {
    const desired = Math.atan2(-dx, -dz);
    this.yaw = wrapAngle(this.yaw + wrapAngle(desired - this.yaw) * (1 - Math.exp(-4.5 * step)));
  }

  private updateTurn(step: number): void {
    const turn = this.turn;
    if (!turn) return;
    turn.elapsed += step;
    const t = Math.min(1, turn.elapsed / turn.duration);
    const k = easeInOut(t);
    this.yaw = wrapAngle(turn.fromYaw + wrapAngle(turn.toYaw - turn.fromYaw) * k);
    this.pitch = turn.fromPitch + (turn.toPitch - turn.fromPitch) * k;
    if (t >= 1) this.turn = null;
  }
}
