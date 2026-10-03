// The Kaaba's door, closed or open: its curtain (the sitara) hanging over it or rolled up above it,
// and the staircase on wheels brought up to it (data/kaaba-stairs.ts). The visitor brings the stairs
// or takes them away from the Kaaba's panels, and can open or close the door on its own. The door
// opens in two steps — the curtain rolls up from its foot, then the leaves swing open into the room
// — and closes the other way round (its leaves are in kaaba-interior.ts, the doorway in kaaba.ts).
//
// Everything is built in the Kaaba's local frame, in a group turned with it.

import {
  BoxGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  FrontSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  Shape,
  type BufferGeometry,
  type Material,
} from 'three';
import { KAABA_INTERIOR } from '../data/kaaba-interior';
import { KAABA_STAIRS } from '../data/kaaba-stairs';
import { KAABA, KAABA_HALF_D } from '../data/layout';
import { StaticBatcher } from './geometry';
import type { KaabaInterior } from './kaaba-interior';
import type { MaterialLibrary } from './materials';

/** The curtain's lower edge when rolled up, a little above the door. */
const LIFTED = KAABA.door.bottom + KAABA.door.height + 0.3;
/** The curtain's thickness hanging, and as it winds onto the roll; the roll's bare core. */
const CLOTH = 0.06;
const WOUND = 0.012;
const CORE = 0.04;
/** How long the door takes to open or to close, seconds, and the curtain's share of that time. */
const OPENING_TIME = 3.2;
const CURTAIN_SHARE = 0.6;
/** How high the stairs' body stands off the floor, on its wheels. */
const CLEARANCE = 0.12;

/** Eases a step of the opening in and out (0 to 1, clamped). */
function ease(t: number): number {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

export interface KaabaDoor {
  group: Group;
  /** Shows the stairs at the door, or not. */
  setStairs(shown: boolean): void;
  /**
   * Opens the door — the curtain rolls up, then the leaves swing open — or closes it, the other way
   * round; at once if `instantly`.
   */
  setOpen(open: boolean, instantly?: boolean): void;
  /** Moves the opening or closing on by `dt` seconds; true if anything moved. */
  update(dt: number): boolean;
  /** Whether the door is opening or closing. */
  readonly moving: boolean;
  /** Whether it is shut with the curtain down, so nothing of the room can be seen from outside. */
  readonly shut: boolean;
  dispose(): void;
}

/**
 * The curtain, which rolls up from its foot: a sheet from the band down to wherever its lower edge
 * has got to, its photograph cropped to match (the rest is in the roll), and the roll itself, which
 * grows as it takes up the cloth and turns as it climbs. `setRolled` takes 0 (hanging down over the
 * door) to 1 (rolled up above it).
 */
function rollingCurtain(material: Material): { sheet: Mesh; roll: Mesh; setRolled(rolled: number): void } {
  const { sitara, hizam, door } = KAABA;
  const sheetGeometry = new BoxGeometry(sitara.width, 1, CLOTH).translate(door.centerX, 0.5, KAABA_HALF_D + CLOTH / 2);
  const position = sheetGeometry.getAttribute('position');
  const uv = sheetGeometry.getAttribute('uv');
  // Each corner's height up the sheet (0 at its foot, 1 at the band) and its own texture row.
  const ups = Float32Array.from({ length: position.count }, (_, i) => position.getY(i));
  const rows = Float32Array.from({ length: uv.count }, (_, i) => uv.getY(i));

  // A roll of radius 1 along X, scaled as it grows. The photograph's width runs along it and a band
  // near the curtain's embroidered foot round it; its ends show the middle of that band.
  const rollGeometry = new CylinderGeometry(1, 1, sitara.width, 24).rotateZ(Math.PI / 2);
  const rollPosition = rollGeometry.getAttribute('position');
  const rollNormal = rollGeometry.getAttribute('normal');
  const rollUV = rollGeometry.getAttribute('uv');
  for (let i = 0; i < rollUV.count; i++) {
    const y = rollPosition.getY(i);
    const z = rollPosition.getZ(i);
    const around = Math.atan2(y, z);
    if (Math.abs(rollNormal.getX(i)) > 0.5) rollUV.setXY(i, 0.5 + 0.08 * z, 0.06 + 0.04 * y);
    else rollUV.setXY(i, rollPosition.getX(i) / sitara.width + 0.5, 0.06 + 0.04 * Math.sin(around));
  }

  const sheet = new Mesh(sheetGeometry, material);
  const roll = new Mesh(rollGeometry, material);
  const drop = LIFTED - sitara.bottom;
  const setRolled = (rolled: number) => {
    const bottom = sitara.bottom + rolled * drop;
    const from = (bottom - sitara.bottom) / (hizam.bottom - sitara.bottom);
    for (let i = 0; i < position.count; i++) {
      position.setY(i, bottom + ups[i] * (hizam.bottom - bottom));
      uv.setY(i, from + rows[i] * (1 - from));
    }
    position.needsUpdate = true;
    uv.needsUpdate = true;
    // The cloth taken up so far, wound round the core.
    const wound = rolled * drop;
    const radius = Math.sqrt(CORE * CORE + (wound * WOUND) / Math.PI);
    roll.visible = rolled > 0;
    roll.position.set(door.centerX, bottom, KAABA_HALF_D + radius + 0.005);
    roll.scale.set(1, radius, radius);
    // Rolling up the wall without slipping turns it backwards about its axis.
    roll.rotation.x = -wound / radius;
  };
  setRolled(0);
  // Its bounds hanging down, the largest it gets.
  sheetGeometry.computeBoundingSphere();
  return { sheet, roll, setRolled };
}

/** An outline in the stairs' side view (z out from the wall, y up), extruded across x from `x0` to `x1`. */
function sideways(points: readonly [number, number][], x0: number, x1: number): BufferGeometry {
  const shape = new Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (const [z, y] of points.slice(1)) shape.lineTo(z, y);
  shape.closePath();
  // Drawn in (x, y) = (z, y) and extruded along +Z; a quarter turn puts the extrusion along −X.
  return new ExtrudeGeometry(shape, { depth: x1 - x0, bevelEnabled: false }).rotateY(-Math.PI / 2).translate(x1, 0, 0);
}

/**
 * The staircase, after photographs: steps as wide as the door between tall gilded sides with a
 * handrail along their tops, a landing at the sill, and wheels.
 */
function buildStairs(batch: StaticBatcher): void {
  const { left, right, landingEnd, risers, riser, tread, foot, rail, side } = KAABA_STAIRS;
  const sill = KAABA.door.bottom;
  const wall = KAABA_HALF_D;
  // The body under the steps, in profile: up the front of each step and back along its tread.
  const profile: [number, number][] = [[wall, CLEARANCE], [foot, CLEARANCE]];
  for (let k = 1; k < risers; k++) {
    const front = landingEnd + (risers - k) * tread;
    profile.push([front, k * riser], [front - tread, k * riser]);
  }
  profile.push([landingEnd, sill], [wall, sill]);
  batch.add(sideways(profile, left, right), 'gold', { uv: 'keep' });
  // The treads and the landing, covered, with a little nosing.
  for (let k = 1; k <= risers; k++) {
    const back = k === risers ? wall : landingEnd + (risers - 1 - k) * tread;
    const front = k === risers ? landingEnd : back + tread;
    const tread3 = new BoxGeometry(right - left, 0.03, front - back + 0.03).translate((left + right) / 2, k * riser + 0.005, (back + front + 0.03) / 2);
    batch.add(tread3, 'granite', { uv: 'keep' });
  }
  // The sides, from the floor to a rail above the steps' front edges, and the handrail on them.
  const sideOutline: [number, number][] = [
    [wall, CLEARANCE],
    [foot, CLEARANCE],
    [foot, riser + rail],
    [landingEnd, sill + rail],
    [wall, sill + rail],
  ];
  const slope = Math.atan2(sill - riser, foot - landingEnd);
  const along = Math.hypot(foot - landingEnd, sill - riser);
  for (const [x0, x1] of [
    [left - side, left],
    [right, right + side],
  ]) {
    batch.add(sideways(sideOutline, x0, x1), 'gold', { uv: 'keep' });
    const x = (x0 + x1) / 2;
    const handrail = new CylinderGeometry(0.035, 0.035, along, 12)
      .rotateX(slope - Math.PI / 2)
      .translate(x, (riser + sill) / 2 + rail + 0.035, (foot + landingEnd) / 2);
    const top = new CylinderGeometry(0.035, 0.035, landingEnd - wall, 12).rotateX(Math.PI / 2).translate(x, sill + rail + 0.035, (landingEnd + wall) / 2);
    batch.add(handrail, 'brass', { uv: 'keep' });
    batch.add(top, 'brass', { uv: 'keep' });
    // Wheels, outside the sides.
    const out = x0 < left ? x0 - 0.04 : x1 + 0.04;
    for (const z of [wall + 0.75, wall + 2.3, foot - 0.25]) {
      batch.add(new CylinderGeometry(0.1, 0.1, 0.06, 16).rotateZ(Math.PI / 2).translate(out, 0.1, z), 'stoneShadow', { uv: 'keep', castShadow: false });
    }
  }
}

/** `leaves`: the door's leaves, inside the room (kaaba-interior.ts), which swing open after the curtain. */
export function buildKaabaDoor(materials: MaterialLibrary, leaves: Pick<KaabaInterior, 'setDoorOpening'>): KaabaDoor {
  const group = new Group();
  group.name = 'kaaba-door';
  group.rotation.y = KAABA.rotationY;

  const curtain = rollingCurtain(materials.sitara);
  for (const mesh of [curtain.sheet, curtain.roll]) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  const stairs = new Group();
  const batch = new StaticBatcher();
  buildStairs(batch);
  for (const mesh of batch.build(materials)) stairs.add(mesh);
  group.add(stairs);

  // The Kaaba's walls cast its shadow from their faces turned away from the sun (three.js's way of
  // avoiding shadow acne), so through the open doorway the sun would shine in the shadow as if the
  // walls on the far side were not there. A box the size of the room, drawn only into the shadow
  // map, from its faces towards the sun, stands in for them; it is never seen.
  const { halfW, halfD, floorY, ceilingY } = KAABA_INTERIOR;
  const shadowMaterial = new MeshBasicMaterial({ colorWrite: false, depthWrite: false, shadowSide: FrontSide });
  const room = new Mesh(new BoxGeometry(halfW * 2, ceilingY - floorY, halfD * 2).translate(0, (floorY + ceilingY) / 2, 0), shadowMaterial);
  room.castShadow = true;
  group.add(room);

  // 0: shut, curtain down; up to CURTAIN_SHARE the curtain rolls up; then the leaves open, to 1.
  let progress = 0;
  let target = 0;
  const apply = () => {
    curtain.setRolled(ease(progress / CURTAIN_SHARE));
    leaves.setDoorOpening(ease((progress - CURTAIN_SHARE) / (1 - CURTAIN_SHARE)));
    room.visible = progress > 0;
  };
  stairs.visible = false;
  apply();

  return {
    group,
    setStairs(shown: boolean) {
      stairs.visible = shown;
    },
    setOpen(open: boolean, instantly = false) {
      target = open ? 1 : 0;
      if (instantly) {
        progress = target;
        apply();
      }
    },
    update(dt: number) {
      if (progress === target) return false;
      const step = Math.min(Math.max(dt, 0), 0.1) / OPENING_TIME;
      progress = target > progress ? Math.min(target, progress + step) : Math.max(target, progress - step);
      apply();
      return true;
    },
    get moving() {
      return progress !== target;
    },
    get shut() {
      return progress === 0;
    },
    dispose() {
      group.traverse((o) => {
        if (o instanceof Mesh) o.geometry.dispose();
      });
      shadowMaterial.dispose();
    },
  };
}
