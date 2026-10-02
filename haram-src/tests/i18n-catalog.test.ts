import { describe, expect, it } from 'vitest';
import { englishCatalog } from '../src/i18n/catalog';
import { SUPPORTED_LOCALES } from '../src/i18n/locale';

// The catalog files, read through Vite (no Node APIs needed in the type-checked code).
const FILES = import.meta.glob<Record<string, string>>('../src/i18n/locales/*.json', { eager: true, import: 'default' });
const byLocale = new Map(Object.entries(FILES).map(([path, table]) => [path.replace(/^.*\/(.+)\.json$/, '$1'), table]));

const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

describe('translation catalog', () => {
  it('en.json is the English catalog (run `npm run i18n:export` after changing English text)', async () => {
    const catalog = englishCatalog();
    const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};
    if (env.UPDATE_CATALOG) {
      const sorted = Object.fromEntries(Object.keys(catalog).sort().map((key) => [key, catalog[key]]));
      const fs = (await import(/* @vite-ignore */ `node:${'fs'}`)) as { writeFileSync(path: URL, data: string): void };
      fs.writeFileSync(new URL('../src/i18n/locales/en.json', import.meta.url), `${JSON.stringify(sorted, null, 2)}\n`);
      return;
    }
    expect(byLocale.get('en')).toEqual(catalog);
  });

  it('every translation is for a supported language and covers every text, placeholders intact', () => {
    const english = englishCatalog();
    for (const [locale, table] of byLocale) {
      if (locale === 'en') continue;
      expect(SUPPORTED_LOCALES.some((info) => info.code === locale), `${locale} is supported`).toBe(true);
      expect(Object.keys(table).sort(), `${locale}: keys`).toEqual(Object.keys(english).sort());
      for (const [key, text] of Object.entries(english)) {
        const value = table[key];
        expect(typeof value === 'string' && value.trim().length > 0, `${locale}: ${key} is empty`).toBe(true);
        expect(placeholders(value), `${locale}: ${key} placeholders`).toEqual(placeholders(text));
      }
    }
  });
});
