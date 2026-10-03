import { describe, expect, it } from 'vitest';
import { SUN_EMBLEM_COLOR, sunEmblemOutline } from '../src/data/sun-emblem';

describe('the sun from the flag of Kurdistan', () => {
  it('has 21 rays round a disc, centred, in gold', () => {
    const outline = sunEmblemOutline();
    expect(outline).toHaveLength(42);
    const tips = outline.filter((_, i) => i % 2 === 0).map((p) => Math.hypot(p.x, p.y));
    const notches = outline.filter((_, i) => i % 2 === 1).map((p) => Math.hypot(p.x, p.y));
    for (const r of tips) expect(r).toBeGreaterThan(0.98);
    for (const r of tips) expect(r).toBeLessThan(1.02);
    for (const r of notches) expect(r).toBeLessThan(0.52);
    // The first ray points straight up.
    expect(outline[0]).toEqual({ x: 0, y: 1 });
    expect(SUN_EMBLEM_COLOR).toBe('#febd11');
  });
});
