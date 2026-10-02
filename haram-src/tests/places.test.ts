import { describe, expect, it } from 'vitest';
import { PLAYER, SPAWN, WORLD_BOUNDS } from '../src/data/layout';
import { PLACE_LOCATIONS } from '../src/data/place-locations';
import { CATEGORY_LABELS, CATEGORY_ORDER, PLACES } from '../src/data/places';
import { GUIDES } from '../src/data/rites';
import { SOURCES } from '../src/data/sources';
import { buildCollisionWorld } from '../src/physics/build-colliders';

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

describe('walkable layout', () => {
  const world = buildCollisionWorld();

  it('starts the visitor on free ground', () => {
    expect(world.isFree(SPAWN.x, SPAWN.z, PLAYER.radius)).toBe(true);
  });

  it('puts every "Go there" viewpoint on free ground', () => {
    for (const [id, location] of Object.entries(PLACE_LOCATIONS)) {
      expect(world.isFree(location.viewpoint.x, location.viewpoint.z, PLAYER.radius), `${id} viewpoint`).toBe(true);
    }
  });

  it('can walk from the starting point to every viewpoint', () => {
    // Flood-fill a 1 m grid of free positions outwards from the spawn point.
    const step = 1;
    const width = Math.floor((WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX) / step) + 1;
    const height = Math.floor((WORLD_BOUNDS.maxZ - WORLD_BOUNDS.minZ) / step) + 1;
    const visited = new Uint8Array(width * height);
    const toCell = (x: number, z: number) => [
      Math.round((x - WORLD_BOUNDS.minX) / step),
      Math.round((z - WORLD_BOUNDS.minZ) / step),
    ];
    const center = (i: number, j: number) => ({ x: WORLD_BOUNDS.minX + i * step, z: WORLD_BOUNDS.minZ + j * step });
    const free = (i: number, j: number) => {
      const p = center(i, j);
      return world.isFree(p.x, p.z, PLAYER.radius);
    };

    const [si, sj] = toCell(SPAWN.x, SPAWN.z);
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

    for (const [id, location] of Object.entries(PLACE_LOCATIONS)) {
      // The nearest grid cell, or one of its neighbours, must have been reached.
      const [ci, cj] = toCell(location.viewpoint.x, location.viewpoint.z);
      let reached = false;
      for (let di = -1; di <= 1 && !reached; di++) {
        for (let dj = -1; dj <= 1 && !reached; dj++) {
          if (visited[ci + di + (cj + dj) * width]) reached = true;
        }
      }
      expect(reached, `${id} viewpoint is reachable on foot`).toBe(true);
    }
  });
});
