import { describe, expect, it } from 'vitest';
import { SPAWN } from '../src/data/layout';
import { PLACE_LOCATIONS } from '../src/data/place-locations';
import { MAIN_INNER } from '../src/data/plan-data';
import { pointInPolygon } from '../src/data/polygon';
import { MATAF_CLEAR, footprint, placePrayingPeople } from '../src/data/praying-people';
import { buildCollisionWorld, prayingPeople } from '../src/physics/build-colliders';

describe('the people praying', () => {
  const people = prayingPeople();
  const mosque = buildCollisionWorld();

  it('are laid out the same way every time, a crowd but not a throng', () => {
    expect(placePrayingPeople((x, z) => mosque.isFree(x, z, 0.9))).toEqual(people);
    expect(people.length).toBeGreaterThan(500);
    expect(people.length).toBeLessThan(2500);
    for (const posture of ['standing', 'bowing', 'prostrating', 'sitting']) {
      expect(people.some((p) => p.posture === posture), posture).toBe(true);
    }
  });

  it('pray in the courtyard and the portico, facing the Kaaba, leaving the Mataf to the tawaf', () => {
    for (const person of people) {
      const r = Math.hypot(person.x, person.z);
      expect(r).toBeGreaterThan(MATAF_CLEAR);
      expect(pointInPolygon(person.x, person.z, MAIN_INNER)).toBe(true);
      // Their footprint runs from behind them towards the Kaaba.
      const { from, to } = footprint(person);
      if (person.posture !== 'standing') expect(Math.hypot(to.x, to.z)).toBeLessThan(Math.hypot(from.x, from.z));
      expect(-Math.sin(person.facing) * -person.x + -Math.cos(person.facing) * -person.z).toBeCloseTo(r, 6);
    }
  });

  it('keep clear of every viewpoint and of the mosque’s columns and walls', () => {
    const viewpoints = [SPAWN, ...Object.values(PLACE_LOCATIONS).filter((l) => (l.level ?? 'ground') === 'ground').map((l) => l.viewpoint)];
    for (const person of people) {
      for (const v of viewpoints) expect(Math.hypot(person.x - v.x, person.z - v.z)).toBeGreaterThan(3);
      const { from, to, halfWidth } = footprint(person);
      expect(mosque.isFree(from.x, from.z, halfWidth)).toBe(true);
      expect(mosque.isFree(to.x, to.z, halfWidth)).toBe(true);
    }
  });
});
