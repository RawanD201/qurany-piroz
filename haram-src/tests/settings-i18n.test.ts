import { describe, expect, it } from 'vitest';
import { localize } from '../src/i18n/locale';
import { t } from '../src/i18n/strings';
import { DEFAULT_SETTINGS, sanitizeSettings } from '../src/settings';

describe('settings', () => {
  it('falls back to defaults for missing or corrupted values', () => {
    expect(sanitizeSettings(null)).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings('nonsense')).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings({ quality: 'ultra', speed: 'fast', showMarkers: 1 })).toEqual(DEFAULT_SETTINGS);
  });

  it('accepts only day or night for the time of day', () => {
    expect(sanitizeSettings({ timeOfDay: 'night' }).timeOfDay).toBe('night');
    expect(sanitizeSettings({ timeOfDay: 'dusk' }).timeOfDay).toBe('day');
    expect(DEFAULT_SETTINGS.timeOfDay).toBe('day');
  });

  it('leaves the Kaaba\'s stairs away (and its door closed) unless the visitor brought them', () => {
    expect(DEFAULT_SETTINGS.kaabaStairs).toBe(false);
    expect(sanitizeSettings({ kaabaStairs: true }).kaabaStairs).toBe(true);
    expect(sanitizeSettings({ kaabaStairs: 'yes' }).kaabaStairs).toBe(false);
    // The door: shut by default, open with the stairs in settings saved before it opened on its own.
    expect(DEFAULT_SETTINGS.kaabaDoorOpen).toBe(false);
    expect(sanitizeSettings({ kaabaStairs: true }).kaabaDoorOpen).toBe(true);
    expect(sanitizeSettings({ kaabaStairs: true, kaabaDoorOpen: false }).kaabaDoorOpen).toBe(false);
  });

  it('shows the people praying unless the visitor hides them', () => {
    expect(DEFAULT_SETTINGS.showPeople).toBe(true);
    expect(sanitizeSettings({ showPeople: false }).showPeople).toBe(false);
    expect(sanitizeSettings({ showPeople: 0 }).showPeople).toBe(true);
    expect(DEFAULT_SETTINGS.showTawaf).toBe(true);
    expect(sanitizeSettings({ showTawaf: false }).showTawaf).toBe(false);
  });

  it('clamps numeric settings to their ranges', () => {
    const s = sanitizeSettings({ quality: 'low', speed: 99, sensitivity: -4, reverseDrag: true });
    expect(s.quality).toBe('low');
    expect(s.speed).toBeLessThanOrEqual(1.6);
    expect(s.sensitivity).toBeGreaterThanOrEqual(0.4);
    expect(s.reverseDrag).toBe(true);
  });
});

describe('localisation', () => {
  it('falls back to English when a translation is missing', () => {
    expect(localize({ en: 'Kaaba' }, 'ckb')).toBe('Kaaba');
    expect(localize({ en: 'Kaaba', ar: 'الكعبة' }, 'ar')).toBe('الكعبة');
  });

  it('fills placeholders and leaves unknown ones intact', () => {
    expect(t('toast.travelled', { name: 'Safa' })).toBe('You are now at: Safa');
    expect(t('hud.compass')).toContain('{direction}');
  });
});

describe('label and text size settings', () => {
  it('keeps the sizes within their ranges, with sensible defaults', async () => {
    const { sanitizeSettings, DEFAULT_SETTINGS } = await import('../src/settings');
    const { SETTINGS_RANGES } = await import('../src/config');
    expect(sanitizeSettings({}).labelSize).toBe(DEFAULT_SETTINGS.labelSize);
    expect(sanitizeSettings({}).textSize).toBe(1);
    expect(sanitizeSettings({ labelSize: 9, textSize: 0.1 })).toMatchObject({
      labelSize: SETTINGS_RANGES.labelSize.max,
      textSize: SETTINGS_RANGES.textSize.min,
    });
    expect(sanitizeSettings({ labelSize: 'big' }).labelSize).toBe(DEFAULT_SETTINGS.labelSize);
  });

  it('shows labels at 60% by default, also to visitors who kept the old 85% default', async () => {
    const { sanitizeSettings, migrateSettings, DEFAULT_SETTINGS } = await import('../src/settings');
    expect(DEFAULT_SETTINGS.labelSize).toBe(0.6);
    expect(sanitizeSettings(migrateSettings({ labelSize: 0.85, timeOfDay: 'night' }))).toMatchObject({ labelSize: 0.6, timeOfDay: 'night' });
    expect(sanitizeSettings(migrateSettings({ labelSize: 1.1 })).labelSize).toBe(1.1);
  });
});
