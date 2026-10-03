import { describe, expect, it } from 'vitest';
import { KAABA_ENTRY, KAABA_EXIT } from '../src/data/kaaba-interior';
import { PLAYER, SPAWN, WORLD_BOUNDS, type Vec2 } from '../src/data/layout';
import type { Level } from '../src/data/levels';
import { PLACE_LOCATIONS, type PlaceLocation } from '../src/data/place-locations';
import { CATEGORY_LABELS, CATEGORY_ORDER, PLACES } from '../src/data/places';
import { GUIDES } from '../src/data/rites';
import { SOURCES } from '../src/data/sources';
import { buildCollisionWorld, buildKaabaInteriorWorld } from '../src/physics/build-colliders';
import type { CollisionWorld } from '../src/physics/collision';

describe('place content', () => {
  it('has unique ids and complete English text', () => {
    const ids = new Set(PLACES.map((p) => p.id));
    expect(ids.size).toBe(PLACES.length);
    for (const place of PLACES) {
      expect(place.name.en.trim()).not.toBe('');
      expect(place.summary.en.trim()).not.toBe('');
      expect(place.arabicName.trim()).not.toBe('');
      expect(place.description.length).toBeGreaterThan(0);
      for (const paragraph of place.description) expect(paragraph.en.trim().length).toBeGreaterThan(20);
      expect(CATEGORY_ORDER).toContain(place.category);
      expect(CATEGORY_LABELS[place.category].en).toBeTruthy();
    }
  });

  it('cites at least one known source for every place', () => {
    for (const place of PLACES) {
      expect(place.sources.length).toBeGreaterThan(0);
      for (const id of place.sources) expect(SOURCES[id], `${place.id} cites ${id}`).toBeDefined();
    }
  });

  it('every source is https and cited somewhere', () => {
    const cited = new Set<string>([
      ...PLACES.flatMap((p) => p.sources),
      ...Object.values(GUIDES).flatMap((g) => [...g.sources, ...g.steps.flatMap((s) => s.sources), ...g.steps.flatMap((s) => (s.recitation ? [s.recitation.source] : []))]),
    ]);
    for (const [id, source] of Object.entries(SOURCES)) {
      expect(source.url.startsWith('https://')).toBe(true);
      expect(cited.has(id), `${id} is never cited`).toBe(true);
    }
  });

  it('has a location for every place and no orphan locations', () => {
    const ids = PLACES.map((p) => p.id).sort();
    expect(Object.keys(PLACE_LOCATIONS).sort()).toEqual(ids);
  });
});

/** Flood-fills a grid of free positions from `start`; says which targets were reached. */
function reachable(
  world: CollisionWorld,
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number },
  start: Vec2,
  targets: Record<string, Vec2>,
  step: number
): Record<string, boolean> {
  const width = Math.floor((bounds.maxX - bounds.minX) / step) + 1;
  const height = Math.floor((bounds.maxZ - bounds.minZ) / step) + 1;
  const visited = new Uint8Array(width * height);
  const toCell = (x: number, z: number) => [Math.round((x - bounds.minX) / step), Math.round((z - bounds.minZ) / step)];
  const center = (i: number, j: number) => ({ x: bounds.minX + i * step, z: bounds.minZ + j * step });
  const free = (i: number, j: number) => {
    const p = center(i, j);
    return world.isFree(p.x, p.z, PLAYER.radius);
  };

  const [si, sj] = toCell(start.x, start.z);
  expect(free(si, sj)).toBe(true);
  const queue = [si + sj * width];
  visited[queue[0]] = 1;
  while (queue.length) {
    const index = queue.pop() as number;
    const i = index % width;
    const j = (index - i) / width;
    for (const [di, dj] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      if (ni < 0 || nj < 0 || ni >= width || nj >= height) continue;
      const n = ni + nj * width;
      if (visited[n]) continue;
      // Check the cell and the midpoint between, so a thin wall between two free cells counts.
      const a = center(i, j);
      const b = center(ni, nj);
      if (!free(ni, nj) || !world.isFree((a.x + b.x) / 2, (a.z + b.z) / 2, PLAYER.radius)) continue;
      visited[n] = 1;
      queue.push(n);
    }
  }

  const result: Record<string, boolean> = {};
  for (const [id, target] of Object.entries(targets)) {
    // The nearest grid cell, or one of its neighbours, must have been reached.
    const [ci, cj] = toCell(target.x, target.z);
    let reached = false;
    for (let di = -1; di <= 1 && !reached; di++) {
      for (let dj = -1; dj <= 1 && !reached; dj++) {
        if (visited[ci + di + (cj + dj) * width]) reached = true;
      }
    }
    result[id] = reached;
  }
  return result;
}

const onLevel = (level: Level) =>
  Object.fromEntries(
    Object.entries(PLACE_LOCATIONS)
      .filter(([, location]: [string, PlaceLocation]) => (location.level ?? 'ground') === level)
      .map(([id, location]) => [id, location.viewpoint])
  );

describe('walkable layout', () => {
  const world = buildCollisionWorld();
  const interior = buildKaabaInteriorWorld();
  const worlds: Partial<Record<Level, CollisionWorld>> = { ground: world, kaaba: interior };

  it('starts the visitor on free ground', () => {
    expect(world.isFree(SPAWN.x, SPAWN.z, PLAYER.radius)).toBe(true);
  });

  it('puts every "Go there" viewpoint on free ground, on its own level', () => {
    for (const [id, location] of Object.entries(PLACE_LOCATIONS)) {
      const here = worlds[location.level ?? 'ground'];
      expect(here, `${id} level`).toBeDefined();
      expect(here?.isFree(location.viewpoint.x, location.viewpoint.z, PLAYER.radius), `${id} viewpoint`).toBe(true);
    }
  });

  it('can walk from the starting point to every viewpoint on the ground', () => {
    const reached = reachable(world, WORLD_BOUNDS, SPAWN, onLevel('ground'), 1);
    for (const [id, ok] of Object.entries(reached)) expect(ok, `${id} viewpoint is reachable on foot`).toBe(true);
  });

  it('can walk from just inside the door to every viewpoint inside the Kaaba', () => {
    const targets = onLevel('kaaba');
    expect(Object.keys(targets).length).toBeGreaterThan(0);
    const reached = reachable(interior, interior.bounds, KAABA_ENTRY.position, targets, 0.2);
    for (const [id, ok] of Object.entries(reached)) expect(ok, `${id} viewpoint is reachable inside the Kaaba`).toBe(true);
  });
});

describe('walkable layout with the people praying in the courtyard', () => {
  for (const kaabaStairs of [false, true]) {
    const world = buildCollisionWorld({ people: true, kaabaStairs, kaabaDoorway: kaabaStairs });

    it(`keeps every viewpoint free and in reach on foot${kaabaStairs ? ', with the stairs at the door' : ''}`, () => {
      expect(world.isFree(SPAWN.x, SPAWN.z, PLAYER.radius)).toBe(true);
      expect(world.isFree(KAABA_EXIT.position.x, KAABA_EXIT.position.z, PLAYER.radius)).toBe(true);
      const targets = onLevel('ground');
      for (const [id, p] of Object.entries(targets)) expect(world.isFree(p.x, p.z, PLAYER.radius), `${id} viewpoint`).toBe(true);
      const reached = reachable(world, WORLD_BOUNDS, SPAWN, targets, 1);
      for (const [id, ok] of Object.entries(reached)) expect(ok, `${id} viewpoint is reachable on foot`).toBe(true);
    });
  }
});

describe('walkable layout with the stairs at the Kaaba\'s door', () => {
  const world = buildCollisionWorld({ kaabaStairs: true, kaabaDoorway: true });
  const interior = buildKaabaInteriorWorld({ doorOpen: true, exit: true });

  it('keeps every viewpoint, the way out of the Kaaba and the way in free', () => {
    for (const [id, location] of Object.entries(PLACE_LOCATIONS)) {
      const here = (location.level ?? 'ground') === 'kaaba' ? interior : world;
      expect(here.isFree(location.viewpoint.x, location.viewpoint.z, PLAYER.radius), `${id} viewpoint`).toBe(true);
    }
    expect(world.isFree(KAABA_EXIT.position.x, KAABA_EXIT.position.z, PLAYER.radius)).toBe(true);
    expect(interior.isFree(KAABA_ENTRY.position.x, KAABA_ENTRY.position.z, PLAYER.radius)).toBe(true);
  });

  it('can still walk from the starting point to every viewpoint on the ground', () => {
    const reached = reachable(world, WORLD_BOUNDS, SPAWN, onLevel('ground'), 1);
    for (const [id, ok] of Object.entries(reached)) expect(ok, `${id} viewpoint is reachable on foot`).toBe(true);
  });

  it('can walk from just inside the open door to every viewpoint inside the Kaaba', () => {
    const reached = reachable(interior, interior.bounds, KAABA_ENTRY.position, onLevel('kaaba'), 0.2);
    for (const [id, ok] of Object.entries(reached)) expect(ok, `${id} viewpoint is reachable inside the Kaaba`).toBe(true);
  });
});
