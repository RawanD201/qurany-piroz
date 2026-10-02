import { describe, expect, it } from 'vitest';
import type { DeviceProfile } from '../src/boot/support';
import { AdaptiveQuality, detectInitialTier, resolveTier } from '../src/engine/quality';

function profile(overrides: Partial<DeviceProfile> = {}): DeviceProfile {
  return {
    webgl2: true,
    majorPerformanceCaveat: false,
    webglBlocked: false,
    maxTextureSize: 16384,
    isTouch: false,
    hasFinePointer: true,
    isMobile: false,
    isIOS: false,
    isAndroid: false,
    pointerLock: true,
    fullscreen: true,
    prefersReducedMotion: false,
    ...overrides,
  };
}

describe('initial quality tier', () => {
  it('uses high on desktops, medium on phones and tablets', () => {
    expect(detectInitialTier(profile())).toBe('high');
    expect(detectInitialTier(profile({ isMobile: true, isIOS: true, isTouch: true }))).toBe('medium');
  });

  it('uses low for software rendering and small-memory devices', () => {
    expect(detectInitialTier(profile({ majorPerformanceCaveat: true }))).toBe('low');
    expect(detectInitialTier(profile({ deviceMemory: 2 }))).toBe('low');
    expect(detectInitialTier(profile({ isMobile: true, isAndroid: true, deviceMemory: 3 }))).toBe('low');
  });

  it('respects a manual choice', () => {
    expect(resolveTier('low', profile())).toBe('low');
    expect(resolveTier('auto', profile())).toBe('high');
  });
});

describe('adaptive quality', () => {
  const feed = (adaptive: AdaptiveQuality, frameMs: number, frames: number, start: number) => {
    for (let i = 0; i < frames; i++) adaptive.sample(frameMs, start + i * frameMs);
  };

  it('does nothing while frames are fast, or capped at 30 fps', () => {
    const steps: string[] = [];
    const adaptive = new AdaptiveQuality((step) => (steps.push(step), true));
    feed(adaptive, 16.7, 400, 0);
    feed(adaptive, 33.4, 400, 10_000); // e.g. iOS Low Power Mode
    expect(steps).toEqual([]);
  });

  it('lowers resolution first, then the tier, and never steps back up', () => {
    const steps: string[] = [];
    const adaptive = new AdaptiveQuality((step) => (steps.push(step), true));
    let t = 0;
    for (let round = 0; round < 6; round++) {
      feed(adaptive, 60, 100, t);
      t += 100 * 60 + 3000; // past the cool-down
    }
    expect(steps.slice(0, 2)).toEqual(['resolution', 'resolution']);
    expect(steps).toContain('tier');
    expect(adaptive.scale).toBeLessThanOrEqual(1);
  });

  it('ignores bogus frame times (tab switches)', () => {
    const steps: string[] = [];
    const adaptive = new AdaptiveQuality((step) => (steps.push(step), true));
    feed(adaptive, 2000, 200, 0);
    expect(steps).toEqual([]);
  });
});
