// The translation catalog: every piece of text in the explorer under a stable key.
//
//   ui.<key>                                   interface strings (strings.ts)
//   category.<id>                              place categories
//   place.<id>.name | .summary | .description.<n> | .modelNote
//   guide.<id>.title | .summary | .intro.<n>
//   guide.<id>.step.<step>.title | .when | .where | .summary | .points.<n> | .recitation
//
// src/i18n/locales/en.json is the English catalog, written by `npm run i18n:export` and kept in
// step by a test; each translation is src/i18n/locales/<code>.json with the same keys. A
// translation is loaded on demand and filled into the same LocalizedText records the explorer
// reads, so nothing else needs to know about it.

import { CATEGORY_LABELS, PLACES } from '../data/places';
import { GUIDES, GUIDE_ORDER } from '../data/rites';
import type { Locale, LocalizedText } from './locale';
import { UI_STRINGS } from './strings';

/** Every translatable text, by catalog key. */
export function catalogEntries(): Map<string, LocalizedText> {
  const entries = new Map<string, LocalizedText>();
  for (const [key, text] of Object.entries(UI_STRINGS)) entries.set(`ui.${key}`, text);
  for (const [id, text] of Object.entries(CATEGORY_LABELS)) entries.set(`category.${id}`, text);
  for (const place of PLACES) {
    const base = `place.${place.id}`;
    entries.set(`${base}.name`, place.name);
    entries.set(`${base}.summary`, place.summary);
    place.description.forEach((text, n) => entries.set(`${base}.description.${n}`, text));
    if (place.modelNote) entries.set(`${base}.modelNote`, place.modelNote);
  }
  for (const id of GUIDE_ORDER) {
    const guide = GUIDES[id];
    const base = `guide.${id}`;
    entries.set(`${base}.title`, guide.title);
    entries.set(`${base}.summary`, guide.summary);
    guide.intro.forEach((text, n) => entries.set(`${base}.intro.${n}`, text));
    for (const step of guide.steps) {
      const s = `${base}.step.${step.id}`;
      entries.set(`${s}.title`, step.title);
      if (step.when) entries.set(`${s}.when`, step.when);
      entries.set(`${s}.where`, step.where);
      entries.set(`${s}.summary`, step.summary);
      step.points.forEach((text, n) => entries.set(`${s}.points.${n}`, text));
      if (step.recitation) entries.set(`${s}.recitation`, step.recitation.meaning);
    }
  }
  return entries;
}

/** The English catalog, as written to locales/en.json. */
export function englishCatalog(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, text] of catalogEntries()) out[key] = text.en;
  return out;
}

const LOADERS = import.meta.glob<{ default: Record<string, string> }>(['./locales/*.json', '!./locales/en.json']);

/** Languages with a translation file. */
export function translatedLocales(): string[] {
  return Object.keys(LOADERS).map((path) => path.replace(/^.*\/(.+)\.json$/, '$1'));
}

/**
 * Loads a translation and fills it into the explorer's texts. Resolves false (leaving English
 * in place) when there is no file for the language or it cannot be loaded.
 */
export async function loadTranslation(locale: Locale): Promise<boolean> {
  if (locale === 'en') return true;
  const loader = LOADERS[`./locales/${locale}.json`];
  if (!loader) return false;
  try {
    const { default: table } = await loader();
    for (const [key, text] of catalogEntries()) {
      const value = table[key];
      if (typeof value === 'string' && value.trim()) (text as Record<string, string>)[locale] = value;
    }
    return true;
  } catch (error) {
    console.warn(`Translation "${locale}" unavailable; showing English`, error);
    return false;
  }
}
