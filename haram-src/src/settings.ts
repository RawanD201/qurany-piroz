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
  /** The stairs stand at the Kaaba's door (see data/kaaba-stairs.ts). */
  kaabaStairs: boolean;
  /** The Kaaba's door is open. */
  kaabaDoorOpen: boolean;
  /** People praying in the courtyard (see data/praying-people.ts). */
  showPeople: boolean;
  /** People going round the Kaaba (see data/tawaf-crowd.ts). */
  showTawaf: boolean;
}

const STORAGE_KEY = 'qp-haram-settings-v2';
/** Where settings were kept while labels were 85% by default (see migrateSettings). */
const OLD_STORAGE_KEY = 'qp-haram-settings-v1';
/** That old default label size. */
const OLD_LABEL_SIZE = 0.85;

export const DEFAULT_SETTINGS: UserSettings = {
  quality: 'auto',
  speed: 1,
  sensitivity: 1,
  reverseDrag: false,
  showMarkers: true,
  timeOfDay: 'day',
  labelSize: 0.6,
  textSize: 1,
  kaabaStairs: false,
  kaabaDoorOpen: false,
  showPeople: true,
  showTawaf: true,
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
    kaabaStairs: typeof input.kaabaStairs === 'boolean' ? input.kaabaStairs : DEFAULT_SETTINGS.kaabaStairs,
    // Saved before the door could be opened on its own, the stairs' setting opened it.
    kaabaDoorOpen: typeof input.kaabaDoorOpen === 'boolean' ? input.kaabaDoorOpen : input.kaabaStairs === true,
    showPeople: typeof input.showPeople === 'boolean' ? input.showPeople : DEFAULT_SETTINGS.showPeople,
    showTawaf: typeof input.showTawaf === 'boolean' ? input.showTawaf : DEFAULT_SETTINGS.showTawaf,
  };
}

/**
 * Settings kept before labels became smaller by default. Every setting is saved whenever any one
 * changes, so an 85% label size there is almost always the old default rather than a choice: it is
 * dropped, and the new default applies. A size chosen since is kept, under the new key.
 */
export function migrateSettings(raw: unknown): unknown {
  if (!raw || typeof raw !== 'object') return raw;
  const settings = { ...(raw as Record<string, unknown>) };
  if (settings.labelSize === OLD_LABEL_SIZE) delete settings.labelSize;
  return settings;
}

export function loadSettings(): UserSettings {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return sanitizeSettings(JSON.parse(stored));
    const old = window.localStorage.getItem(OLD_STORAGE_KEY);
    return sanitizeSettings(old ? migrateSettings(JSON.parse(old)) : null);
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
