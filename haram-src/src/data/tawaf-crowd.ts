// The people going round the Kaaba, the tawaf: anticlockwise seen from above, the Kaaba on their
// left, round the outside of Hijr Ismail. They walk in lanes, circles round the Kaaba's centre,
// each lane at its own pace and everyone in it at that pace, so nobody walks through anybody;
// more of them close to the Kaaba, fewer further out. Men in ihram, women in abayas and
// headscarves, and some men in thobes. How many there are and how they are spread is illustrative.
//
// Only the lanes are laid out here; the walking itself is worked out on the graphics card from the
// time (world/tawaf-crowd.ts), so a crowd of hundreds costs nothing to move. They are figures to
// look at, not obstacles: the visitor can walk among them.

import { HIJR, KAABA_HALF_W, MAQAM, maqamPosition } from './layout';
import { MATAF_CLEAR } from './praying-people';

export type WalkerDress = 'ihram' | 'abaya' | 'kufi';

export interface TawafWalker {
  /** Distance from the Kaaba's centre (metres), where on the circle they start (radians, anticlockwise from east), and their pace round it (radians a second). */
  radius: number;
  start: number;
  speed: number;
  /** Where in their stride they are at the start (radians). */
  stride: number;
  dress: WalkerDress;
  /** Clothes' shade and skin tone, 0–1; height as a fraction of the figure's. */
  shade: number;
  skin: number;
  stature: number;
}

/** The lanes: from just outside Hijr Ismail and Maqam Ibrahim out to where the people praying begin. */
export const TAWAF_LANES = {
  inner: Math.max(KAABA_HALF_W + HIJR.reach + HIJR.thickness / 2, Math.hypot(maqamPosition().x, maqamPosition().z) + MAQAM.base.radius) + 0.8,
  outer: MATAF_CLEAR - 1.5,
  spacing: 0.75,
} as const;

const DRESSES: readonly [WalkerDress, number][] = [
  ['ihram', 0.55],
  ['abaya', 0.3],
  ['kufi', 0.15],
];

function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** The walkers; `share` (0–1) keeps that fraction of them (fewer on slower devices). */
export function tawafCrowd(share = 1): TawafWalker[] {
  const rand = seeded(786);
  const walkers: TawafWalker[] = [];
  const { inner, outer, spacing } = TAWAF_LANES;
  for (let radius = inner; radius <= outer; radius += spacing) {
    // Closer to the Kaaba the crowd is thicker: about 3 m apart there, 9.5 m at the edge.
    const out = (radius - inner) / (outer - inner);
    const gap = 3 + 6.5 * out;
    // Each lane its own pace, about a metre a second.
    const pace = 0.8 + rand() * 0.35;
    const circumference = 2 * Math.PI * radius;
    let along = rand() * gap;
    while (along < circumference - 1) {
      const keep = rand() < share;
      const dressPick = rand();
      const walker: TawafWalker = {
        radius: radius + (rand() - 0.5) * 0.15,
        start: (along / circumference) * Math.PI * 2,
        speed: pace / radius,
        stride: rand() * Math.PI * 2,
        dress: DRESSES.find((_, i) => dressPick < DRESSES.slice(0, i + 1).reduce((sum, [, s]) => sum + s, 0))?.[0] ?? 'ihram',
        shade: rand(),
        skin: rand(),
        stature: 0.94 + rand() * 0.1,
      };
      if (walker.dress === 'abaya') walker.stature *= 0.93;
      if (keep) walkers.push(walker);
      along += gap * (0.55 + rand() * 0.9);
    }
  }
  return walkers;
}
