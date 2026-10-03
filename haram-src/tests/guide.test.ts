import { describe, expect, it } from 'vitest';
import { MASA, PLAYER, masaPoint } from '../src/data/layout';
import { PLACE_LOCATIONS } from '../src/data/place-locations';
import { GUIDES, GUIDE_ORDER } from '../src/data/rites';
import { SOURCES } from '../src/data/sources';
import { buildCollisionWorld } from '../src/physics/build-colliders';
import { SAI_HASTEN_PACE, SAI_LAPS, saiLaps, saiPace, saiPath, tawafPath, tawafStart } from '../src/world/guide-overlays';

describe('Hajj and Umrah guides', () => {
  it('have complete English text and only known sources', () => {
    for (const id of GUIDE_ORDER) {
      const guide = GUIDES[id];
      expect(guide.title.en).toBeTruthy();
      expect(guide.intro.length).toBeGreaterThan(0);
      expect(guide.steps.length).toBeGreaterThan(3);
      const ids = new Set(guide.steps.map((s) => s.id));
      expect(ids.size).toBe(guide.steps.length);
      for (const step of guide.steps) {
        expect(step.title.en.trim(), `${id}/${step.id}`).not.toBe('');
        expect(step.summary.en.trim().length).toBeGreaterThan(20);
        expect(step.sources.length, `${id}/${step.id} cites a source`).toBeGreaterThan(0);
        for (const source of step.sources) expect(SOURCES[source], `${id}/${step.id} → ${source}`).toBeDefined();
        if (step.focus) expect(PLACE_LOCATIONS[step.focus]).toBeDefined();
        // Routes and 3D focus only make sense inside the mosque.
        if (step.route || step.focus) expect(step.inMosque).toBe(true);
      }
    }
  });

  it('cover the essential rites in order', () => {
    expect(GUIDES.umrah.steps.map((s) => s.id)).toEqual(['ihram', 'enter', 'tawaf', 'maqam', 'zamzam', 'sai', 'hair']);
    const hajj = GUIDES.hajj.steps.map((s) => s.id);
    for (const [a, b] of [
      ['tarwiyah', 'arafah'],
      ['arafah', 'muzdalifah'],
      ['muzdalifah', 'nahr'],
      ['nahr', 'tashreeq'],
      ['tashreeq', 'wada'],
    ]) {
      expect(hajj.indexOf(a)).toBeLessThan(hajj.indexOf(b));
    }
  });
});

describe('guide routes', () => {
  // With the people praying in the courtyard: the routes stay clear of them too.
  const world = buildCollisionWorld({ people: true });

  it('the tawaf circuit is walkable all the way round, anticlockwise from the Black Stone', () => {
    const points = [tawafStart().position, ...tawafPath()];
    for (const p of points) expect(world.isFree(p.x, p.z, PLAYER.radius)).toBe(true);
    // Anticlockwise seen from above: the signed area (in x, -z) is positive.
    let area = 0;
    for (let i = 0; i < points.length - 1; i++) {
      area += points[i].x * -points[i + 1].z - points[i + 1].x * -points[i].z;
    }
    expect(area).toBeGreaterThan(0);
    // The circuit starts east of the Kaaba, in line with the Black Stone corner.
    expect(tawafStart().position.x).toBeGreaterThan(15);
  });

  it("the sa'i route runs clear from Safa to Marwah", () => {
    const { start, end } = saiPath();
    expect(start.z).toBeGreaterThan(end.z); // Safa is south, Marwah north
    const steps = 300;
    for (let i = 0; i <= steps; i++) {
      const x = start.x + ((end.x - start.x) * i) / steps;
      const z = start.z + ((end.z - start.z) * i) / steps;
      expect(world.isFree(x, z, PLAYER.radius), `(${x.toFixed(1)}, ${z.toFixed(1)})`).toBe(true);
    }
  });

  it("the sa'i goes there and back seven times, ending at Marwah, hastening only between the green markers", () => {
    const { start, end } = saiPath();
    const laps = saiLaps();
    expect(SAI_LAPS).toBe(7);
    expect(laps).toHaveLength(7);
    laps.forEach((point, i) => expect(point).toEqual(i % 2 === 0 ? end : start));
    expect(laps[laps.length - 1]).toEqual(end);
    const at = (t: number) => masaPoint(t);
    const middle = at((MASA.greenFrom + MASA.greenTo) / 2);
    expect(saiPace(middle.x, middle.z)).toBe(SAI_HASTEN_PACE);
    const before = at(MASA.greenFrom - 0.01);
    const after = at(MASA.greenTo + 0.01);
    expect(saiPace(before.x, before.z)).toBe(1);
    expect(saiPace(after.x, after.z)).toBe(1);
    expect(saiPace(start.x, start.z)).toBe(1);
  });
});
