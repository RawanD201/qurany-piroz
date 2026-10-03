// People praying in the courtyard and under the Ottoman portico: where each one is, which posture
// of the prayer they are in, and the room they take up on the floor. Shared by the 3D figures
// (world/praying-people.ts) and the collision world (physics/build-colliders.ts), so the visitor
// walks round them. Settings can hide them (UserSettings.showPeople).
//
// They stand in rows round the Kaaba, as the rows of prayer do, each facing it, each at a different
// moment of their own prayer, as between the congregational prayers: some standing, some bowing,
// some in prostration, some sitting. The Mataf, where people go round the Kaaba, is left to the
// tawaf, and a lane is kept clear from it to every place's viewpoint (and round each viewpoint), so
// every place stays in view and in reach. How many there are and where is illustrative.

import { KAABA_EXIT } from './kaaba-interior';
import { SPAWN, type Vec2 } from './layout';
import { PLACE_LOCATIONS } from './place-locations';
import { MAIN_INNER } from './plan-data';
import { pointInPolygon, segmentDistance } from './polygon';

export type PrayerPosture = 'standing' | 'bowing' | 'prostrating' | 'sitting';
/** A thobe with a white cap or with a head cloth, or the two white sheets of ihram. */
export type PrayerDress = 'kufi' | 'ghutra' | 'ihram';

export interface PrayingPerson {
  x: number;
  z: number;
  /** Which way they face, as three.js rotation.y (0 faces −Z): towards the Kaaba. */
  facing: number;
  posture: PrayerPosture;
  dress: PrayerDress;
  /** Their clothes' shade, 0–1 (white to darker), for variety (ihram is always white). */
  shade: number;
  /** Their skin tone, 0–1 (lighter to darker). */
  skin: number;
}

/**
 * The floor each posture takes up, along the way the person faces from where they stood (metres
 * behind and in front) and to either side: lying in prostration, a person reaches about a metre
 * forward.
 */
export const POSTURE_FOOTPRINT: Readonly<Record<PrayerPosture, { back: number; front: number; halfWidth: number }>> = {
  standing: { back: 0, front: 0, halfWidth: 0.24 },
  bowing: { back: 0.05, front: 0.7, halfWidth: 0.2 },
  prostrating: { back: 0.3, front: 0.8, halfWidth: 0.22 },
  sitting: { back: 0.25, front: 0.3, halfWidth: 0.22 },
};

/** Inside this radius round the Kaaba is the Mataf, kept for the tawaf. */
export const MATAF_CLEAR = 30;
/** Rows of prayer: their spacing, and the room each person has along one. */
const ROW = 1.3;
const PLACE = 0.8;
/** How far out from the Kaaba rows are laid (the courtyard's outline cuts them off). */
const OUTERMOST = 110;
/** A lane this wide is kept clear from the Mataf to each viewpoint, and this much room round it. */
const LANE = 2.6;
const AROUND = 3.5;

/** A seeded random, so the rows are the same on every visit (and in the tests). */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Smooth noise (0–1) over the floor: where people gather more thickly and where fewer. */
function gathering(x: number, z: number): number {
  const hash = (i: number, j: number) => {
    const h = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return h - Math.floor(h);
  };
  const cell = 14;
  const gx = x / cell;
  const gz = z / cell;
  const i = Math.floor(gx);
  const j = Math.floor(gz);
  const fx = gx - i;
  const fz = gz - j;
  const sx = fx * fx * (3 - 2 * fx);
  const sz = fz * fz * (3 - 2 * fz);
  const top = hash(i, j) + (hash(i + 1, j) - hash(i, j)) * sx;
  const bottom = hash(i, j + 1) + (hash(i + 1, j + 1) - hash(i, j + 1)) * sx;
  return top + (bottom - top) * sz;
}

const DRESSES: readonly [PrayerDress, number][] = [
  ['kufi', 0.4],
  ['ghutra', 0.25],
  ['ihram', 0.35],
];

/** Picks from shares that add up to 1. */
function pick<T>(shares: readonly [T, number][], value: number): T {
  let rest = value;
  for (const [item, share] of shares) {
    if ((rest -= share) < 0) return item;
  }
  return shares[shares.length - 1][0];
}

const POSTURES: readonly [PrayerPosture, number][] = [
  ['standing', 0.42],
  ['bowing', 0.14],
  ['prostrating', 0.28],
  ['sitting', 0.16],
];

/**
 * Lays out the people praying. `isClear` says whether a spot is clear of the mosque's own columns,
 * piers and walls (with room to spare).
 */
export function placePrayingPeople(isClear: (x: number, z: number) => boolean): PrayingPerson[] {
  const rand = seeded(1447);
  // Every viewpoint on the ground, where "Go there" and the guide put the visitor.
  const keep: Vec2[] = [
    SPAWN,
    KAABA_EXIT.position,
    ...Object.values(PLACE_LOCATIONS)
      .filter((location) => (location.level ?? 'ground') === 'ground')
      .map((location) => location.viewpoint),
  ];
  const lanes = keep.filter((p) => Math.hypot(p.x, p.z) > MATAF_CLEAR).map((p) => {
    const r = Math.hypot(p.x, p.z);
    return { from: p, to: { x: (p.x / r) * MATAF_CLEAR, z: (p.z / r) * MATAF_CLEAR } };
  });
  const free = (x: number, z: number) =>
    keep.every((p) => Math.hypot(p.x - x, p.z - z) > AROUND) && lanes.every((lane) => segmentDistance(x, z, lane.from, lane.to).distance > LANE / 2);

  const people: PrayingPerson[] = [];
  for (let r = MATAF_CLEAR + ROW / 2; r < OUTERMOST; r += ROW) {
    const count = Math.floor((2 * Math.PI * r) / PLACE);
    const offset = rand() * Math.PI * 2;
    for (let k = 0; k < count; k++) {
      // People do not stand exactly in line, nor exactly a place apart.
      const angle = offset + ((k + (rand() - 0.5) * 0.25) / count) * Math.PI * 2;
      const radius = r + (rand() - 0.5) * 0.1;
      const x = Math.cos(angle) * radius;
      const z = -Math.sin(angle) * radius;
      if (rand() > 0.025 + 0.17 * Math.pow(gathering(x, z), 2.5)) continue;
      if (!pointInPolygon(x, z, MAIN_INNER) || !isClear(x, z) || !free(x, z)) continue;
      const posture = pick(POSTURES, rand());
      const dress = pick(DRESSES, rand());
      // Facing the Kaaba, at the centre of the plan.
      people.push({ x, z, facing: Math.atan2(x, z), posture, dress, shade: rand(), skin: rand() });
    }
  }
  return people;
}

/** Where a person's footprint runs, from behind them to in front of them (world coordinates). */
export function footprint(person: PrayingPerson): { from: Vec2; to: Vec2; halfWidth: number } {
  const { back, front, halfWidth } = POSTURE_FOOTPRINT[person.posture];
  // Facing (−sin, −cos) of the rotation, as the visitor's yaw.
  const fx = -Math.sin(person.facing);
  const fz = -Math.cos(person.facing);
  return {
    from: { x: person.x - fx * back, z: person.z - fz * back },
    to: { x: person.x + fx * front, z: person.z + fz * front },
    halfWidth,
  };
}
