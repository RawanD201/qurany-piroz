// Graphics quality: three presets, a first guess for the device, and an automatic step-down
// when frames are too slow.
//
// Priorities, in order: smooth movement and a responsive camera first, visual detail last.
// On phones and tablets the biggest single cost is the number of pixels drawn, so the first
// lever is the render resolution (pixel ratio), then shadows, then texture size.

import type { DeviceProfile } from '../boot/support';

export type QualityTier = 'high' | 'medium' | 'low';
export type QualityPreference = 'auto' | QualityTier;

export interface QualitySettings {
  tier: QualityTier;
  /** Upper limit on devicePixelRatio used for rendering. */
  maxPixelRatio: number;
  shadows: boolean;
  shadowMapSize: number;
  /** Procedural texture resolution (fixed when the explorer loads). */
  textureSize: 512 | 1024;
  /** Normal / roughness / metalness maps for relief and polish (fixed when the explorer loads). */
  detailMaps: boolean;
  /** Silk sheen on the kiswah (fixed when the explorer loads). */
  richMaterials: boolean;
  anisotropy: number;
  /** Image-based reflections for marble and gold. */
  environmentMap: boolean;
  /** The surrounding city blocks (purely scenery). */
  cityDetail: 'full' | 'reduced';
  fogFar: number;
}

export const QUALITY_PRESETS: Record<QualityTier, QualitySettings> = {
  high: {
    tier: 'high',
    maxPixelRatio: 2,
    shadows: true,
    shadowMapSize: 4096,
    textureSize: 1024,
    detailMaps: true,
    richMaterials: true,
    anisotropy: 8,
    environmentMap: true,
    cityDetail: 'full',
    fogFar: 2600,
  },
  medium: {
    tier: 'medium',
    maxPixelRatio: 1.5,
    shadows: true,
    shadowMapSize: 2048,
    textureSize: 1024,
    detailMaps: true,
    richMaterials: true,
    anisotropy: 4,
    environmentMap: true,
    cityDetail: 'full',
    fogFar: 2200,
  },
  low: {
    tier: 'low',
    maxPixelRatio: 1,
    shadows: false,
    shadowMapSize: 1024,
    textureSize: 512,
    detailMaps: false,
    richMaterials: false,
    anisotropy: 1,
    environmentMap: false,
    cityDetail: 'reduced',
    fogFar: 1600,
  },
};

export const TIER_ORDER: readonly QualityTier[] = ['high', 'medium', 'low'];

/** A first guess at the right tier, before any frames have been measured. */
export function detectInitialTier(profile: DeviceProfile): QualityTier {
  if (profile.majorPerformanceCaveat) return 'low';
  if (profile.deviceMemory !== undefined && profile.deviceMemory <= 2) return 'low';
  if (profile.hardwareConcurrency !== undefined && profile.hardwareConcurrency <= 2) return 'low';
  if (profile.isMobile) {
    // Phones and tablets: medium by default. Old or small-memory Android devices go low.
    if (profile.isAndroid && profile.deviceMemory !== undefined && profile.deviceMemory <= 3) return 'low';
    return 'medium';
  }
  return 'high';
}

export function resolveTier(preference: QualityPreference, profile: DeviceProfile): QualityTier {
  return preference === 'auto' ? detectInitialTier(profile) : preference;
}

/**
 * Watches frame times while the view is moving and asks for a lower setting when the device
 * cannot keep up. It only ever steps down, and waits between steps, so it cannot oscillate.
 * Frames are only sampled while rendering continuously — a still view draws nothing.
 */
export class AdaptiveQuality {
  private samples: number[] = [];
  private cooldownUntil = 0;
  private resolutionScale = 1;

  constructor(private readonly onDegrade: (step: 'resolution' | 'tier') => boolean) {}

  /** Current multiplier on the pixel ratio (1 = the tier's full resolution). */
  get scale(): number {
    return this.resolutionScale;
  }

  reset(): void {
    this.samples = [];
    this.resolutionScale = 1;
  }

  /** Records one rendered frame's duration (ms) at time `now` (ms). */
  sample(frameMs: number, now: number): void {
    if (now < this.cooldownUntil) return;
    // Ignore obviously bogus values (tab switches, debugger pauses).
    if (frameMs <= 0 || frameMs > 250) return;
    this.samples.push(frameMs);
    if (this.samples.length < 90) return;

    const sorted = this.samples.slice().sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    this.samples = [];

    // ~24 fps or worse. iOS Low Power Mode caps at 30 fps (33 ms), which is fine and is not
    // mistaken for a slow device.
    if (median > 42) {
      if (this.resolutionScale > 0.7) {
        this.resolutionScale = Math.max(0.7, this.resolutionScale - 0.15);
        this.onDegrade('resolution');
      } else if (this.onDegrade('tier')) {
        this.resolutionScale = 1;
      }
      this.cooldownUntil = now + 2500;
    }
  }
}
