import { describe, expect, it } from 'vitest';
import { HIJR, KAABA, KAABA_HALF_D, KAABA_HALF_W, MAQAM, maqamPosition } from '../src/data/layout';
import { MATAF_CLEAR } from '../src/data/praying-people';
import { TAWAF_LANES, tawafCrowd } from '../src/data/tawaf-crowd';

describe('the people going round the Kaaba', () => {
  const walkers = tawafCrowd();

  it('walk anticlockwise in the Mataf, clear of the Kaaba, Hijr Ismail and Maqam Ibrahim', () => {
    expect(walkers.length).toBeGreaterThan(150);
    expect(walkers.length).toBeLessThan(800);
    const kaabaReach = Math.hypot(KAABA_HALF_W, KAABA_HALF_D) + KAABA.base.overhang;
    const hijrReach = KAABA_HALF_W + HIJR.reach + HIJR.thickness / 2;
    const maqamReach = Math.hypot(maqamPosition().x, maqamPosition().z) + MAQAM.base.radius;
    for (const w of walkers) {
      expect(w.speed).toBeGreaterThan(0); // anticlockwise seen from above
      expect(w.radius - 0.3).toBeGreaterThan(Math.max(kaabaReach, hijrReach, maqamReach));
      expect(w.radius + 0.3).toBeLessThan(MATAF_CLEAR);
      // About a metre a second.
      expect(w.speed * w.radius).toBeGreaterThan(0.7);
      expect(w.speed * w.radius).toBeLessThan(1.3);
    }
    for (const dress of ['ihram', 'abaya', 'kufi']) expect(walkers.some((w) => w.dress === dress), dress).toBe(true);
  });

  it('never walk through each other: everyone in a lane at its pace, well spaced', () => {
    const lanes = new Map<number, typeof walkers>();
    for (const w of walkers) {
      const lane = Math.round((w.radius - TAWAF_LANES.inner) / TAWAF_LANES.spacing);
      lanes.set(lane, [...(lanes.get(lane) ?? []), w]);
    }
    for (const lane of lanes.values()) {
      const speed = lane[0].speed;
      for (const w of lane) expect(w.speed * w.radius).toBeCloseTo(speed * lane[0].radius, 0);
      const starts = lane.map((w) => w.start).sort((a, b) => a - b);
      for (let i = 1; i < starts.length; i++) expect((starts[i] - starts[i - 1]) * lane[0].radius).toBeGreaterThan(0.9);
    }
  });

  it('keep a share of the crowd on slower devices', () => {
    const fewer = tawafCrowd(0.5).length;
    expect(fewer).toBeLessThan(walkers.length * 0.65);
    expect(fewer).toBeGreaterThan(walkers.length * 0.35);
  });
});
