// Quran references, written the way the Qurany Piroz app writes them — the surat's name, its
// number, then the verse: "Al-Baqarah (2): 125" — and linked to the verse in the app.
//
// The texts (places.ts, rites.ts and their translations) cite verses plainly, "(Quran 2:125)";
// withSuratNames() rewrites those citations when a text is shown, so translators never have to
// spell surat names out themselves.
//
// The links are the app's own deep links (see DEEPLINKS.md at the repository root):
// https://www.qurany-piroz.com/ayat/<surat>/<ayat> opens the verse in the installed app, or, where
// the app does not take the link, a page that names the verse and offers to open it in the app or
// download it.

import { getLocale, localize, type LocalizedText, type Locale } from '../i18n/locale';

/**
 * The names of the surats the explorer cites. The Kurdish, Arabic, English and Turkish names are
 * the app's own (its Quran.db, as in /surats.js at the repository root); the other languages use
 * their usual names for these surats.
 */
export const SURAT_NAMES: Readonly<Record<number, LocalizedText>> = {
  2: {
    en: 'Al-Baqarah',
    ckb: 'مانگاکە',
    kmr: 'مانگاکە',
    sdh: 'مانگاکە',
    ku: 'Beqere',
    ar: 'البقرة',
    tr: 'Bakara',
    fa: 'بقره',
    ur: 'البقرہ',
    syr: 'ܐܠܒܩܪܗ',
    syc: 'ܐܠܒܩܪܗ',
    he: 'אל-בקרה',
    de: 'Al-Baqara',
    fr: 'Al-Baqara',
    es: 'Al-Baqara',
    sv: 'Al-Baqara',
    ru: 'Аль-Бакара',
    hi: 'अल-बक़रा',
    bn: 'আল-বাকারা',
    ms: 'Al-Baqarah',
    'zh-Hans': '黄牛章',
    ja: '雌牛章',
  },
  3: {
    en: "Ali 'Imran",
    ckb: 'عیمڕانییەکان',
    kmr: 'عیمڕانییەکان',
    sdh: 'عیمڕانییەکان',
    ku: 'Al-i Imran',
    ar: 'آل عمران',
    tr: 'Âl-i İmrân',
    fa: 'آل عمران',
    ur: 'آل عمران',
    syr: 'ܐܠ ܥܡܪܐܢ',
    syc: 'ܐܠ ܥܡܪܐܢ',
    he: 'אאל עמראן',
    de: 'Al Imran',
    fr: 'Al Imran',
    es: 'Al Imran',
    sv: 'Al Imran',
    ru: 'Аль Имран',
    hi: 'आल-ए-इमरान',
    bn: 'আলে ইমরান',
    ms: "Ali 'Imran",
    'zh-Hans': '仪姆兰的家属章',
    ja: 'イムラーン家章',
  },
  5: {
    en: "Al-Ma'idah",
    ckb: 'خوانەکە',
    kmr: 'خوانەکە',
    sdh: 'خوانەکە',
    ku: 'Maîde',
    ar: 'المائدة',
    tr: 'Mâide',
    fa: 'مائده',
    ur: 'المائدہ',
    syr: 'ܐܠܡܐܝܕܗ',
    syc: 'ܐܠܡܐܝܕܗ',
    he: 'אל-מאאידה',
    de: "Al-Ma'ida",
    fr: "Al-Ma'ida",
    es: "Al-Ma'ida",
    sv: "Al-Ma'ida",
    ru: 'Аль-Маида',
    hi: 'अल-माइदा',
    bn: 'আল-মায়িদা',
    ms: "Al-Ma'idah",
    'zh-Hans': '筵席章',
    ja: '食卓章',
  },
  22: {
    en: 'Al-Hajj',
    ckb: 'حەج',
    kmr: 'حەج',
    sdh: 'حەج',
    ku: 'Hec',
    ar: 'الحج',
    tr: 'Hac',
    fa: 'حج',
    ur: 'الحج',
    syr: 'ܐܠܚܓ',
    syc: 'ܐܠܚܓ',
    he: "אל-חג'",
    de: 'Al-Haddsch',
    fr: 'Al-Hajj',
    es: 'Al-Hach',
    sv: 'Al-Hajj',
    ru: 'Аль-Хадж',
    hi: 'अल-हज',
    bn: 'আল-হজ্জ',
    ms: 'Al-Hajj',
    'zh-Hans': '朝觐章',
    ja: '巡礼章',
  },
  48: {
    en: 'Al-Fath',
    ckb: 'دەرووکرانەوە',
    kmr: 'دەرووکرانەوە',
    sdh: 'دەرووکرانەوە',
    ku: 'Fetih',
    ar: 'الفتح',
    tr: 'Fetih',
    fa: 'فتح',
    ur: 'الفتح',
    syr: 'ܐܠܦܬܚ',
    syc: 'ܐܠܦܬܚ',
    he: 'אל-פתח',
    de: 'Al-Fath',
    fr: 'Al-Fath',
    es: 'Al-Fath',
    sv: 'Al-Fath',
    ru: 'Аль-Фатх',
    hi: 'अल-फ़तह',
    bn: 'আল-ফাতহ',
    ms: 'Al-Fath',
    'zh-Hans': '胜利章',
    ja: '勝利章',
  },
};

/** "Al-Baqarah (2): 125" in the current language; `verses` may be a range ("96–97"). */
export function quranReference(surat: number, verses: string, locale: Locale = getLocale()): string {
  const name = SURAT_NAMES[surat];
  return name ? `${localize(name, locale)} (${surat}): ${verses}` : `(${surat}): ${verses}`;
}

/** The app's deep link to a verse (the first one, for a range). */
export function ayatUrl(surat: number, verses: string): string {
  return `https://www.qurany-piroz.com/ayat/${surat}/${parseInt(verses, 10)}`;
}

const APP_PACKAGE = 'com.alandkawaali.qurani_piroz_partuki_xwda';
const APP_SCHEME = 'quranipiroz';
const AYAT_LINK = /^https:\/\/www\.qurany-piroz\.com\/(ayat\/\d+\/\d+)$/;

/**
 * Where a link to a verse should point on this device. The explorer is on the same site as the
 * deep link, and browsers keep a site's links to itself in the browser rather than handing them to
 * its app. On Android the verse is therefore handed to the app directly, falling back to the deep
 * link's page when the app is not installed, as the site's own pages do (open-in-app.js). Elsewhere
 * the deep link is used as it is: its page offers to open the verse in the app. (On iOS a direct
 * attempt would put up an error when the app is missing, so it is left to that page's button.)
 */
export function appHref(url: string, android: boolean): string {
  const match = AYAT_LINK.exec(url);
  if (!android || !match) return url;
  return `intent://${match[1]}#Intent;scheme=${APP_SCHEME};package=${APP_PACKAGE};S.browser_fallback_url=${encodeURIComponent(url)};end`;
}

/**
 * The word each language uses for the Quran in a citation ("Quran 2:125"), as the translations
 * write it. Longer forms first, so "al-Quran" and "Koranen" are not cut short.
 */
const QURAN_WORDS = [
  'al-Quran',
  'Koranen',
  'Quran',
  "Kur'an",
  'Koran',
  'Coran',
  'Corán',
  'Коран',
  'القرآن',
  'قرآن',
  'قورئان',
  'ܩܘܪܐܢ',
  'קוראן',
  'क़ुरआन',
  'কুরআন',
  'クルアーン',
  '《古兰经》',
];

const escape = (word: string) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const CITATION = new RegExp(`(?:${QURAN_WORDS.map(escape).join('|')})\\s?(\\d+):(\\d+(?:[–-]\\d+)?)`, 'g');

/** Rewrites every "Quran 2:125" in a text as "Al-Baqarah (2): 125". */
export function withSuratNames(text: string, locale: Locale = getLocale()): string {
  return text.replace(CITATION, (_whole, surat: string, verses: string) => quranReference(Number(surat), verses, locale));
}
