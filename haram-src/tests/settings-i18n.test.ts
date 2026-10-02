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
});
