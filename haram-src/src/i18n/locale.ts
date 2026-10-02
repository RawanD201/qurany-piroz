// Language handling for the explorer.
//
// Every piece of visible text is a LocalizedText record keyed by language code. English is
// written inline in the source; the other languages are loaded on demand from
// src/i18n/locales/<code>.json (see catalog.ts) and filled into the same records, so a visitor
// downloads only their own language. Anything a translation leaves out falls back to English.
//
// The languages are those of the Qurany Piroz app. The choice is shared with the rest of
// qurany-piroz.com: ?lang=<code> first, then the language the visitor picked on the site
// (localStorage "qp-lang"), then the browser's languages, then English.

export type Locale =
  | 'ckb'
  | 'kmr'
  | 'sdh'
  | 'ku'
  | 'en'
  | 'ar'
  | 'tr'
  | 'fa'
  | 'ur'
  | 'syr'
  | 'syc'
  | 'he'
  | 'de'
  | 'fr'
  | 'es'
  | 'sv'
  | 'ru'
  | 'hi'
  | 'bn'
  | 'ms'
  | 'zh-Hans'
  | 'ja';

/** Content may be written in any of the explorer's languages. */
export type ContentLocale = Locale;

export interface LocaleInfo {
  code: Locale;
  /** The language's own name for itself. */
  label: string;
  dir: 'ltr' | 'rtl';
  /** BCP 47 tag for the page's lang attribute (the app's codes are not all standard). */
  tag: string;
  /** The digits 0–9 as written in this language, when they are not the Western ones. */
  digits: string | null;
}

const ARABIC_INDIC = '٠١٢٣٤٥٦٧٨٩';
const PERSIAN = '۰۱۲۳۴۵۶۷۸۹';

export const DEFAULT_LOCALE: Locale = 'en';

/** In the app's own order: Kurdish and its dialects first, then the other families. */
export const SUPPORTED_LOCALES: readonly LocaleInfo[] = [
  { code: 'ckb', label: 'کوردیی ناوەندی (سۆرانی)', dir: 'rtl', tag: 'ckb', digits: ARABIC_INDIC },
  { code: 'kmr', label: 'کوردیی بادینانی', dir: 'rtl', tag: 'kmr-Arab', digits: ARABIC_INDIC },
  { code: 'sdh', label: 'کوردیی هەورامانی', dir: 'rtl', tag: 'sdh', digits: ARABIC_INDIC },
  { code: 'ku', label: 'Kurdî (Kurmancî)', dir: 'ltr', tag: 'kmr-Latn', digits: null },
  { code: 'en', label: 'English', dir: 'ltr', tag: 'en', digits: null },
  { code: 'ar', label: 'العربية', dir: 'rtl', tag: 'ar', digits: ARABIC_INDIC },
  { code: 'tr', label: 'Türkçe', dir: 'ltr', tag: 'tr', digits: null },
  { code: 'fa', label: 'فارسی', dir: 'rtl', tag: 'fa', digits: PERSIAN },
  { code: 'ur', label: 'اردو', dir: 'rtl', tag: 'ur', digits: PERSIAN },
  { code: 'syr', label: 'ܣܘܪܝܬ', dir: 'rtl', tag: 'syr', digits: null },
  { code: 'syc', label: 'ܟܬܒܢܝܐ', dir: 'rtl', tag: 'syc', digits: null },
  { code: 'he', label: 'עברית', dir: 'rtl', tag: 'he', digits: null },
  { code: 'de', label: 'Deutsch', dir: 'ltr', tag: 'de', digits: null },
  { code: 'fr', label: 'Français', dir: 'ltr', tag: 'fr', digits: null },
  { code: 'es', label: 'Español', dir: 'ltr', tag: 'es', digits: null },
  { code: 'sv', label: 'Svenska', dir: 'ltr', tag: 'sv', digits: null },
  { code: 'ru', label: 'Русский', dir: 'ltr', tag: 'ru', digits: null },
  { code: 'hi', label: 'हिन्दी', dir: 'ltr', tag: 'hi', digits: null },
  { code: 'bn', label: 'বাংলা', dir: 'ltr', tag: 'bn', digits: null },
  { code: 'ms', label: 'Bahasa Melayu', dir: 'ltr', tag: 'ms', digits: null },
  { code: 'zh-Hans', label: '简体中文', dir: 'ltr', tag: 'zh-Hans', digits: null },
  { code: 'ja', label: '日本語', dir: 'ltr', tag: 'ja', digits: null },
];

/** A piece of text in one or more languages. English is required; it is the fallback. */
export type LocalizedText = { en: string } & Partial<Record<Exclude<Locale, 'en'>, string>>;

/** The localStorage key qurany-piroz.com keeps the visitor's language under. */
export const LANGUAGE_STORAGE_KEY = 'qp-lang';

let currentLocale: Locale = DEFAULT_LOCALE;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && SUPPORTED_LOCALES.some((info) => info.code === value);
}

/** A browser language tag ("de-AT", "zh-CN", "ku") mapped to one of the explorer's languages. */
export function localeFromTag(tag: string): Locale | null {
  const lower = tag.toLowerCase();
  if (lower.startsWith('zh')) return lower.includes('hant') || /-(tw|hk|mo)\b/.test(lower) ? null : 'zh-Hans';
  const primary = lower.split('-')[0];
  const aliases: Record<string, Locale> = {
    ckb: 'ckb',
    sdh: 'sdh',
    ku: 'ku',
    kmr: 'ku',
    iw: 'he',
    arb: 'ar',
    fas: 'fa',
    prs: 'fa',
    pes: 'fa',
    urd: 'ur',
    tur: 'tr',
    zsm: 'ms',
  };
  if (aliases[primary]) return aliases[primary];
  return isLocale(primary) ? primary : null;
}

/** The language to show: ?lang=, then the site-wide choice, then the browser's, then English. */
export function detectLocale(): Locale {
  try {
    const asked = new URLSearchParams(window.location.search).get('lang');
    if (isLocale(asked)) return asked;
  } catch {
    // No usable URL: carry on.
  }
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage blocked: carry on.
  }
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language ?? ''];
  for (const tag of tags) {
    const locale = localeFromTag(String(tag));
    if (locale) return locale;
  }
  return DEFAULT_LOCALE;
}

/** Remembers the visitor's choice site-wide (the main pages read the same key). */
export function rememberLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  } catch {
    // Not remembered; the choice still applies after the reload that follows.
  }
}

export function getLocale(): Locale {
  return currentLocale;
}

export function getLocaleInfo(locale: Locale = currentLocale): LocaleInfo {
  return SUPPORTED_LOCALES.find((info) => info.code === locale) ?? SUPPORTED_LOCALES[4];
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

/** Picks the current language's text, falling back to English when it is missing. */
export function localize(text: LocalizedText, locale: ContentLocale = currentLocale): string {
  return (locale === 'en' ? undefined : text[locale]) ?? text.en;
}

/** Writes a number's digits as the current language does. */
export function localizeDigits(value: string | number, locale: Locale = currentLocale): string {
  const digits = getLocaleInfo(locale).digits;
  const text = String(value);
  return digits ? text.replace(/[0-9]/g, (d) => digits[Number(d)]) : text;
}
