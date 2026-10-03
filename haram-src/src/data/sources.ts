// References behind the place descriptions. Each description in places.ts cites these by id,
// and the information panel lists them under the text so a reader can check every statement.
// SOURCES.md at the repository root mirrors this list with notes on what each one supports.
//
// Quran references open the verse in the Qurany Piroz app and are named the way the app names
// them (see quran.ts); hadith references use the Sunnah.com numbering. Descriptions paraphrase
// these sources rather than quoting translations at length.

import { ayatUrl, quranReference } from './quran';

export interface SourceRef {
  id: string;
  label: string;
  url: string;
}

interface SourceEntry {
  /** The label in English (Quran references are named in the visitor's language when shown). */
  label: string;
  url: string;
  quran?: { surat: number; verses: string };
}

/** A Quran reference: `verses` is one verse or a range ("96–97"). */
function quran(surat: number, verses: string): SourceEntry {
  return { label: `Quran ${surat}:${verses}`, url: ayatUrl(surat, verses), quran: { surat, verses } };
}

export const SOURCES = {
  'quran-2-125': quran(2, '125'),
  'quran-2-127': quran(2, '127'),
  'quran-2-144': quran(2, '144'),
  'quran-2-158': quran(2, '158'),
  'quran-3-96': quran(3, '96–97'),
  'quran-22-29': quran(22, '29'),
  'quran-2-196': quran(2, '196'),
  'quran-2-197': quran(2, '197'),
  'quran-2-198': quran(2, '198'),
  'quran-2-203': quran(2, '203'),
  'quran-3-97': quran(3, '97'),
  'quran-5-95': quran(5, '95'),
  'quran-48-27': quran(48, '27'),
  'bukhari-1542': { label: 'Sahih al-Bukhari 1542', url: 'https://sunnah.com/bukhari:1542' },
  'bukhari-1549': { label: 'Sahih al-Bukhari 1549', url: 'https://sunnah.com/bukhari:1549' },
  'bukhari-1612': { label: 'Sahih al-Bukhari 1612', url: 'https://sunnah.com/bukhari:1612' },
  'bukhari-1751': { label: 'Sahih al-Bukhari 1751', url: 'https://sunnah.com/bukhari:1751' },
  'bukhari-1755': { label: 'Sahih al-Bukhari 1755', url: 'https://sunnah.com/bukhari:1755' },
  'bukhari-1838': { label: 'Sahih al-Bukhari 1838', url: 'https://sunnah.com/bukhari:1838' },
  'abudawud-1984': { label: 'Sunan Abi Dawud 1984', url: 'https://sunnah.com/abudawud:1984' },
  'haj-hajj': { label: 'Ministry of Hajj and Umrah — Hajj', url: 'https://haj.gov.sa/en/Hajj' },
  'haj-miqat': {
    label: 'Ministry of Hajj and Umrah — Miqaats and types of rituals',
    url: 'https://haj.gov.sa/en/Hajj/Miqaats-Types-of-Rituals',
  },
  'haj-arafah': { label: 'Ministry of Hajj and Umrah — Arafah', url: 'https://haj.gov.sa/en/Hajj/Arafah' },
  'haj-mina': { label: 'Ministry of Hajj and Umrah — Mina', url: 'https://haj.gov.sa/en/Hajj/Mina' },
  'wikipedia-hajj': { label: 'Wikipedia — Hajj', url: 'https://en.wikipedia.org/wiki/Hajj' },
  'wikipedia-umrah': { label: 'Wikipedia — Umrah', url: 'https://en.wikipedia.org/wiki/Umrah' },
  'bukhari-1584': { label: 'Sahih al-Bukhari 1584', url: 'https://sunnah.com/bukhari:1584' },
  'bukhari-1597': { label: 'Sahih al-Bukhari 1597', url: 'https://sunnah.com/bukhari:1597' },
  'bukhari-1609': { label: 'Sahih al-Bukhari 1609', url: 'https://sunnah.com/bukhari:1609' },
  'bukhari-3364': { label: 'Sahih al-Bukhari 3364', url: 'https://sunnah.com/bukhari:3364' },
  'muslim-1218': { label: 'Sahih Muslim 1218', url: 'https://sunnah.com/muslim:1218a' },
  'britannica-kaaba': {
    label: 'Encyclopaedia Britannica — Kaaba',
    url: 'https://www.britannica.com/topic/Kaaba-shrine-Mecca-Saudi-Arabia',
  },
  'britannica-black-stone': {
    label: 'Encyclopaedia Britannica — Black Stone of Mecca',
    url: 'https://www.britannica.com/topic/Black-Stone-of-Mecca',
  },
  'britannica-kiswah': { label: 'Encyclopaedia Britannica — Kiswah', url: 'https://www.britannica.com/topic/kiswah' },
  'britannica-abraj': {
    label: 'Encyclopaedia Britannica — Abraj al-Bayt',
    url: 'https://www.britannica.com/topic/Abraj-al-Bayt',
  },
  'haj-saai': { label: "Ministry of Hajj and Umrah — Sa'i", url: 'https://haj.gov.sa/en/Hajj/saai' },
  'madain-gates': {
    label: 'Madain Project — Gates of Masjid al-Haram',
    url: 'https://madainproject.com/gates_of_masjid_al_haram',
  },
  'madain-haram': {
    label: 'Madain Project — Masjid al-Haram',
    url: 'https://madainproject.com/masjid_al_haram',
  },
  'ctbuh-clock-tower': {
    label: 'CTBUH Skyscraper Center — Makkah Royal Clock Tower',
    url: 'https://www.skyscrapercenter.com/building/makkah-royal-clock-tower/84',
  },
  'wikipedia-kaaba': { label: 'Wikipedia — Kaaba', url: 'https://en.wikipedia.org/wiki/Kaaba' },
  'wikipedia-kiswah': { label: 'Wikipedia — Kiswah', url: 'https://en.wikipedia.org/wiki/Kiswah' },
  'wikipedia-black-stone': { label: 'Wikipedia — Black Stone', url: 'https://en.wikipedia.org/wiki/Black_Stone' },
  'wikipedia-hijr': { label: 'Wikipedia — Hijr Ismail', url: 'https://en.wikipedia.org/wiki/Hijr_Ismail' },
  'wikipedia-maqam': { label: 'Wikipedia — Maqam Ibrahim', url: 'https://en.wikipedia.org/wiki/Maqam_Ibrahim' },
  'osm-haram': {
    label: 'OpenStreetMap — Masjid al-Haram (map data © OpenStreetMap contributors, ODbL)',
    url: 'https://www.openstreetmap.org/relation/1472531',
  },
  'wikipedia-zamzam': { label: 'Wikipedia — Zamzam Well', url: 'https://en.wikipedia.org/wiki/Zamzam_Well' },
  'saudipedia-zamzam': {
    label: 'Saudipedia — Where is Zamzam Well located?',
    url: 'https://saudipedia.com/en/article/3725/religion/the-grand-mosque/where-is-zamzam-well-located',
  },
  'islamiclandmarks-zamzam': {
    label: 'IslamicLandmarks.com — Zamzam Well',
    url: 'https://www.islamiclandmarks.com/makkah-haram-sharief/zamzam-well',
  },
  'wikipedia-abraj-al-bait': { label: 'Wikipedia — Abraj Al Bait', url: 'https://en.wikipedia.org/wiki/Abraj_Al_Bait' },
  'wikipedia-clock-towers': { label: 'Wikipedia — The Clock Towers', url: 'https://en.wikipedia.org/wiki/The_Clock_Towers' },
  'wikipedia-safa-marwa': {
    label: 'Wikipedia — Safa and Marwa',
    url: 'https://en.wikipedia.org/wiki/Safa_and_Marwa',
  },
  'wikipedia-haram': {
    label: 'Wikipedia — Masjid al-Haram',
    url: 'https://en.wikipedia.org/wiki/Masjid_al-Haram',
  },
  // Inside the Kaaba
  'islamiclandmarks-kaaba': {
    label: "IslamicLandmarks.com — Inside the Ka'bah",
    url: 'https://www.islamiclandmarks.com/makkah-haram-sharief/inside-the-kabah',
  },
  'bukhari-397': { label: 'Sahih al-Bukhari 397', url: 'https://sunnah.com/bukhari:397' },
  'bukhari-505': { label: 'Sahih al-Bukhari 505', url: 'https://sunnah.com/bukhari:505' },
  'abudawud-2028': { label: 'Sunan Abi Dawud 2028', url: 'https://sunnah.com/abudawud:2028' },
} as const satisfies Record<string, SourceEntry>;

export type SourceId = keyof typeof SOURCES;

export function getSource(id: SourceId): SourceRef {
  const entry: SourceEntry = SOURCES[id];
  const label = entry.quran ? quranReference(entry.quran.surat, entry.quran.verses) : entry.label;
  return { id, label, url: entry.url };
}
