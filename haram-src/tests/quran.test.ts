import { describe, expect, it } from 'vitest';
import { englishCatalog } from '../src/i18n/catalog';
import { SUPPORTED_LOCALES, type Locale } from '../src/i18n/locale';
import { SURAT_NAMES, appHref, ayatUrl, quranReference, withSuratNames } from '../src/data/quran';
import { SOURCES, getSource } from '../src/data/sources';

const FILES = import.meta.glob<Record<string, string>>('../src/i18n/locales/*.json', { eager: true, import: 'default' });
const byLocale = new Map(Object.entries(FILES).map(([path, table]) => [path.replace(/^.*\/(.+)\.json$/, '$1') as Locale, table]));

describe('Quran references', () => {
  it('are written as the app writes them', () => {
    expect(quranReference(2, '125', 'en')).toBe('Al-Baqarah (2): 125');
    expect(quranReference(3, '96–97', 'en')).toBe("Ali 'Imran (3): 96–97");
    expect(quranReference(2, '125', 'ckb')).toBe('مانگاکە (2): 125');
    expect(withSuratNames('a place of prayer (Quran 2:125; Sahih Muslim 1218).', 'en')).toBe(
      'a place of prayer (Al-Baqarah (2): 125; Sahih Muslim 1218).'
    );
    expect(getSource('quran-2-125').label).toBe('Al-Baqarah (2): 125');
  });

  it('name every cited surat in every language', () => {
    const cited = Object.values(SOURCES).flatMap((s) => ('quran' in s && s.quran ? [s.quran.surat] : []));
    for (const surat of cited) {
      for (const { code } of SUPPORTED_LOCALES) expect(SURAT_NAMES[surat]?.[code], `${surat} in ${code}`).toBeTruthy();
    }
  });

  it('leave no plain "Quran 2:125" citation in any language', () => {
    const tables: [Locale, Record<string, string>][] = [['en', englishCatalog()], ...[...byLocale].filter(([code]) => code !== 'en')];
    for (const [locale, table] of tables) {
      for (const [key, text] of Object.entries(table)) {
        expect(withSuratNames(text, locale), `${locale}: ${key}`).not.toMatch(/\d+:\d+/);
      }
    }
  });

  it('link to the verse in the Qurany Piroz app, never to another site', () => {
    expect(ayatUrl(3, '96–97')).toBe('https://www.qurany-piroz.com/ayat/3/96');
    for (const [id, source] of Object.entries(SOURCES)) {
      if (id.startsWith('quran-')) expect(source.url).toMatch(/^https:\/\/www\.qurany-piroz\.com\/ayat\/\d+\/\d+$/);
      expect(source.url).not.toContain('quran.com');
    }
    const url = ayatUrl(2, '125');
    expect(appHref(url, false)).toBe(url);
    expect(appHref(url, true)).toBe(
      'intent://ayat/2/125#Intent;scheme=quranipiroz;package=com.alandkawaali.qurani_piroz_partuki_xwda;S.browser_fallback_url=https%3A%2F%2Fwww.qurany-piroz.com%2Fayat%2F2%2F125;end'
    );
    expect(appHref('https://sunnah.com/muslim:1218a', true)).toBe('https://sunnah.com/muslim:1218a');
  });
});
