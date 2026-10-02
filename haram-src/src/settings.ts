// The visitor's preferences, remembered between visits in localStorage.
//
// Storage can be unavailable (private browsing in older Safari, storage disabled, quota), so
// every access is guarded and the explorer simply runs with the defaults when it fails.

import { SETTINGS_RANGES } from './config';
import type { QualityPreference } from './engine/quality';
import type { TimeOfDay } from './world/materials';

export interface UserSettings {
  quality: QualityPreference;
  /** Multiplier on walking speed. */
  speed: number;
  /** Multiplier on look sensitivity. */
  sensitivity: number;
  reverseDrag: boolean;
  showMarkers: boolean;
  timeOfDay: TimeOfDay;
  /** Place labels' size (1 = full size). */
  labelSize: number;
  /** Text size in panels and dialogs (1 = normal). */
  textSize: number;
}

const STORAGE_KEY = 'qp-haram-settings-v1';

export const DEFAULT_SETTINGS: UserSettings = {
  quality: 'auto',
  speed: 1,
  sensitivity: 1,
  reverseDrag: false,
  showMarkers: true,
  timeOfDay: 'day',
  labelSize: 0.85,
  textSize: 1,
};

function clamp(value: unknown, min: number, max: number, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

/** Validates whatever was stored, so a corrupted or outdated entry cannot break the explorer. */
export function sanitizeSettings(raw: unknown): UserSettings {
  const input = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const quality = input.quality;
  return {
    quality: quality === 'high' || quality === 'medium' || quality === 'low' || quality === 'auto' ? quality : 'auto',
    speed: clamp(input.speed, SETTINGS_RANGES.speed.min, SETTINGS_RANGES.speed.max, DEFAULT_SETTINGS.speed),
    sensitivity: clamp(
      input.sensitivity,
      SETTINGS_RANGES.sensitivity.min,
      SETTINGS_RANGES.sensitivity.max,
      DEFAULT_SETTINGS.sensitivity
    ),
    reverseDrag: typeof input.reverseDrag === 'boolean' ? input.reverseDrag : DEFAULT_SETTINGS.reverseDrag,
    showMarkers: typeof input.showMarkers === 'boolean' ? input.showMarkers : DEFAULT_SETTINGS.showMarkers,
    timeOfDay: input.timeOfDay === 'night' ? 'night' : 'day',
    labelSize: clamp(input.labelSize, SETTINGS_RANGES.labelSize.min, SETTINGS_RANGES.labelSize.max, DEFAULT_SETTINGS.labelSize),
    textSize: clamp(input.textSize, SETTINGS_RANGES.textSize.min, SETTINGS_RANGES.textSize.max, DEFAULT_SETTINGS.textSize),
  };
}

export function loadSettings(): UserSettings {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return sanitizeSettings(stored ? JSON.parse(stored) : null);
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings: UserSettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Not being able to remember a preference is not worth interrupting the visitor for.
  }
}
