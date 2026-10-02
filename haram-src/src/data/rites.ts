// "How to perform Umrah" and "How to perform Hajj": the step-by-step guides.
//
// Same rules as places.ts: concise, factual, respectful, every statement supported by the
// step's listed sources (see SOURCES.md, "Hajj and Umrah guide"), and translatable — add
// `ckb: '…'`, `ar: '…'` beside each `en`. The guides are an overview for orientation, not a
// legal ruling: rulings differ between the schools of Islamic law, and every guide says so.
//
// Steps that take place in Masjid al-Haram are shown in the 3D view (`focus`, `route`); steps
// in Mina, Arafat and Muzdalifah are outside the model and are explained in text only.

import type { LocalizedText } from '../i18n/locale';
import type { PlaceId } from './places';
import type { SourceId } from './sources';

export type GuideId = 'umrah' | 'hajj';

/** Route drawn in the 3D view for a step, which the visitor can also walk automatically. */
export type GuideRoute = 'tawaf' | 'sai';

export interface RiteStep {
  id: string;
  title: LocalizedText;
  /** When it happens (for Hajj, the day of Dhu al-Hijjah). */
  when?: LocalizedText;
  where: LocalizedText;
  /** True when the step takes place in Masjid al-Haram, so it can be shown in the 3D view. */
  inMosque: boolean;
  summary: LocalizedText;
  points: LocalizedText[];
  /** An Arabic text to show with the step (e.g. the talbiyah), with its transliteration. */
  recitation?: { arabic: string; transliteration: string; meaning: LocalizedText; source: SourceId };
  sources: SourceId[];
  /** The place the 3D view moves to for this step. */
  focus?: PlaceId;
  route?: GuideRoute;
  /** Offers to open the other guide (e.g. the Umrah that begins Hajj tamattu'). */
  opensGuide?: GuideId;
}

export interface Guide {
  id: GuideId;
  title: LocalizedText;
  summary: LocalizedText;
  intro: LocalizedText[];
  steps: RiteStep[];
  sources: SourceId[];
}

const TALBIYAH = {
  arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
  transliteration:
    'Labbayka Allāhumma labbayk, labbayka lā sharīka laka labbayk, inna al-ḥamda wa al-niʿmata laka wa al-mulk, lā sharīka lak',
  meaning: {
    en: 'Here I am, O Allah, here I am. Here I am; You have no partner; here I am. All praise and blessings are Yours, and all sovereignty. You have no partner.',
  },
  source: 'bukhari-1549',
} as const;

const TAWAF_POINTS: LocalizedText[] = [
  {
    en: 'Start in line with the corner of the Black Stone, with the Kaaba on your left, and walk anticlockwise around it. Each circuit ends back at that corner; seven circuits make one tawaf.',
  },
  {
    en: 'At the Black Stone, touch or kiss it if you can reach it. If the crowd does not allow it, face it and point towards it, as the Prophet ﷺ did when he performed tawaf riding a camel (Sahih al-Bukhari 1612).',
  },
  { en: 'Touch the Yemeni Corner if you can (Sahih al-Bukhari 1609).' },
  { en: 'Walk around the outside of Hijr Ismail, which is part of the House (Sahih al-Bukhari 1584).' },
  { en: 'Spend the circuits in remembrance of Allah, recitation and supplication.' },
];

const UMRAH: Guide = {
  id: 'umrah',
  title: { en: 'How to perform Umrah' },
  summary: { en: 'Ihram, tawaf, prayer at Maqam Ibrahim, sa’i, and shaving or shortening the hair.' },
  intro: [
    {
      en: 'Umrah, the “lesser pilgrimage”, can be performed at any time of the year. Its rites are entering ihram, tawaf around the Kaaba, sa’i between Safa and Marwah, and shaving or shortening the hair.',
    },
  ],
  sources: ['wikipedia-umrah', 'haj-miqat'],
  steps: [
    {
      id: 'ihram',
      title: { en: 'Enter ihram' },
      where: { en: 'At the miqat, before reaching Makkah' },
      inMosque: false,
      summary: {
        en: 'Before passing the miqat — the stations around Makkah set by the Prophet ﷺ — enter the state of ihram.',
      },
      points: [
        {
          en: 'Bathe before entering ihram: the Prophet ﷺ told even a woman who had just given birth to do so (Sahih Muslim 1218).',
        },
        {
          en: 'Men wear two white, unsewn cloths. They do not wear shirts, turbans, trousers, hooded cloaks, or footwear that covers the ankles (Sahih al-Bukhari 1542).',
        },
        {
          en: 'Women wear their ordinary modest clothing, but do not cover the face with a niqab or wear gloves (Sahih al-Bukhari 1838).',
        },
        { en: 'Make the intention for Umrah and begin reciting the talbiyah.' },
        {
          en: 'While in ihram, avoid perfume (Sahih al-Bukhari 1542), cutting the hair (Quran 2:196), hunting (Quran 5:95) and marital relations (Quran 2:197).',
        },
      ],
      recitation: TALBIYAH,
      sources: ['haj-miqat', 'muslim-1218', 'bukhari-1542', 'bukhari-1838', 'bukhari-1549', 'quran-2-196', 'quran-5-95', 'quran-2-197', 'wikipedia-hajj'],
    },
    {
      id: 'enter',
      title: { en: 'Enter Masjid al-Haram' },
      where: { en: 'Masjid al-Haram' },
      inMosque: true,
      summary: { en: 'Enter the mosque through any of its gates and make your way to the Mataf around the Kaaba.' },
      points: [{ en: 'The Mataf is the open, marble-paved area around the Kaaba where tawaf is performed.' }],
      sources: ['madain-gates', 'wikipedia-haram'],
      focus: 'kingAbdulazizGate',
    },
    {
      id: 'tawaf',
      title: { en: 'Tawaf' },
      where: { en: 'The Mataf, around the Kaaba' },
      inMosque: true,
      summary: { en: 'Walk around the Kaaba seven times, anticlockwise, beginning and ending at the corner of the Black Stone.' },
      points: [
        ...TAWAF_POINTS,
        { en: 'In the tawaf on arrival, men walk briskly in the first three circuits and normally in the other four (Sahih Muslim 1218).' },
      ],
      sources: ['muslim-1218', 'bukhari-1612', 'bukhari-1609', 'bukhari-1584', 'quran-22-29', 'britannica-kaaba'],
      focus: 'blackStone',
      route: 'tawaf',
    },
    {
      id: 'maqam',
      title: { en: 'Pray two units behind Maqam Ibrahim' },
      where: { en: 'Maqam Ibrahim' },
      inMosque: true,
      summary: { en: 'After tawaf, pray two units of prayer (rak’ahs) behind Maqam Ibrahim where space allows.' },
      points: [
        {
          en: 'The Quran tells the believers to take the standing place of Ibrahim as a place of prayer (Quran 2:125). After his tawaf the Prophet ﷺ went to it, recited this verse and prayed two units (Sahih Muslim 1218).',
        },
      ],
      sources: ['quran-2-125', 'muslim-1218'],
      focus: 'maqamIbrahim',
    },
    {
      id: 'zamzam',
      title: { en: 'Drink Zamzam water' },
      where: { en: 'Throughout the mosque' },
      inMosque: true,
      summary: { en: 'Zamzam water is provided throughout the mosque.' },
      points: [{ en: 'The Prophet ﷺ drank Zamzam water during his Hajj (Sahih Muslim 1218).' }],
      sources: ['muslim-1218', 'wikipedia-zamzam'],
      focus: 'zamzam',
    },
    {
      id: 'sai',
      title: { en: 'Sa’i between Safa and Marwah' },
      where: { en: 'The Mas’a' },
      inMosque: true,
      summary: {
        en: 'Walk between Safa and Marwah seven times, starting at Safa and ending at Marwah. Going from Safa to Marwah is one lap, and coming back is another.',
      },
      points: [
        {
          en: 'On reaching Safa, the Prophet ﷺ recited “Indeed, Safa and Marwah are among the symbols of Allah” (Quran 2:158), climbed it until he could see the Kaaba, faced it, and declared the oneness and greatness of Allah. He did the same on Marwah (Sahih Muslim 1218).',
        },
        { en: 'Between the two green markers, men who are able walk at a brisk pace (Ministry of Hajj and Umrah).' },
      ],
      sources: ['haj-saai', 'quran-2-158', 'muslim-1218'],
      focus: 'safa',
      route: 'sai',
    },
    {
      id: 'hair',
      title: { en: 'Shave or shorten the hair' },
      where: { en: 'After sa’i' },
      inMosque: false,
      summary: { en: 'Men shave their heads or shorten their hair; women shorten theirs slightly. This completes Umrah.' },
      points: [
        { en: 'The Quran mentions pilgrims with “heads shaved and hair shortened” (Quran 48:27).' },
        { en: 'Women do not shave; they only shorten the hair (Sunan Abi Dawud 1984).' },
        { en: 'With this, Umrah is complete and the restrictions of ihram end.' },
      ],
      sources: ['quran-48-27', 'abudawud-1984', 'wikipedia-umrah'],
    },
  ],
};

const HAJJ: Guide = {
  id: 'hajj',
  title: { en: 'How to perform Hajj' },
  summary: { en: 'The days of Hajj, from the 8th to the 13th of Dhu al-Hijjah, step by step.' },
  intro: [
    {
      en: 'Hajj, the major pilgrimage, is an obligation once in a lifetime for every Muslim who is able to make the journey (Quran 3:97). It takes place in the month of Dhu al-Hijjah, and most of its rites are outside Masjid al-Haram — in Mina, Arafat and Muzdalifah.',
    },
    { en: 'Its pillars are ihram, standing at Arafat, Tawaf al-Ifadah, and sa’i (Ministry of Hajj and Umrah).' },
    {
      en: 'There are three ways of performing Hajj — tamattu’, qiran and ifrad — which differ slightly (Ministry of Hajj and Umrah). This guide follows tamattu’: Umrah first, during the months of Hajj, then Hajj itself, with a sacrifice (Quran 2:196).',
    },
  ],
  sources: ['quran-3-97', 'haj-hajj', 'haj-miqat', 'quran-2-196', 'wikipedia-hajj'],
  steps: [
    {
      id: 'umrah-first',
      title: { en: 'Perform Umrah' },
      when: { en: 'Before the 8th of Dhu al-Hijjah' },
      where: { en: 'Masjid al-Haram' },
      inMosque: true,
      summary: {
        en: 'In Hajj tamattu’, the pilgrim first performs Umrah and then leaves ihram until the days of Hajj (Quran 2:196).',
      },
      points: [{ en: 'The Umrah guide explains each of its steps.' }],
      sources: ['quran-2-196'],
      focus: 'kaaba',
      opensGuide: 'umrah',
    },
    {
      id: 'tarwiyah',
      title: { en: 'The Day of Tarwiyah: to Mina' },
      when: { en: '8th of Dhu al-Hijjah' },
      where: { en: 'Mina (outside the mosque)' },
      inMosque: false,
      summary: { en: 'Enter ihram for Hajj from where you are staying in Makkah, and go to Mina.' },
      points: [
        { en: 'On the 8th, pilgrims put on ihram again and confirm their intention for Hajj.' },
        {
          en: 'The Prophet ﷺ went to Mina on this day and prayed Dhuhr, Asr, Maghrib and Isha there, and Fajr the next morning (Sahih Muslim 1218).',
        },
      ],
      recitation: TALBIYAH,
      sources: ['muslim-1218', 'haj-mina', 'wikipedia-hajj', 'bukhari-1549'],
    },
    {
      id: 'arafah',
      title: { en: 'The Day of Arafah' },
      when: { en: '9th of Dhu al-Hijjah' },
      where: { en: 'Arafat (outside the mosque)' },
      inMosque: false,
      summary: {
        en: 'Go to Arafat and stand there in remembrance and supplication until sunset. Standing at Arafat is a pillar of Hajj; the Prophet ﷺ said, “Hajj is Arafah.”',
      },
      points: [
        { en: 'Pilgrims pray Dhuhr and Asr together at the time of Dhuhr (Sahih Muslim 1218).' },
        { en: 'The Prophet ﷺ remained standing at Arafat until the sun had set (Sahih Muslim 1218).' },
        { en: 'The Day of Arafah is known for supplication; the best supplication is that of this day (Ministry of Hajj and Umrah).' },
      ],
      sources: ['haj-arafah', 'muslim-1218', 'wikipedia-hajj', 'quran-2-198'],
    },
    {
      id: 'muzdalifah',
      title: { en: 'The night at Muzdalifah' },
      when: { en: 'Night before the 10th' },
      where: { en: 'Muzdalifah (outside the mosque)' },
      inMosque: false,
      summary: { en: 'After sunset, go to Muzdalifah, pray Maghrib and Isha together, and spend the night there.' },
      points: [
        {
          en: 'After praying Fajr, remember Allah at al-Mash’ar al-Haram until it is light (Quran 2:198; Sahih Muslim 1218).',
        },
        { en: 'Pilgrims gather pebbles here for the stoning.' },
      ],
      sources: ['quran-2-198', 'muslim-1218', 'wikipedia-hajj'],
    },
    {
      id: 'nahr',
      title: { en: 'The Day of Sacrifice' },
      when: { en: '10th of Dhu al-Hijjah (Eid al-Adha)' },
      where: { en: 'Mina (outside the mosque)' },
      inMosque: false,
      summary: { en: 'Stone Jamrat al-Aqaba, offer the sacrifice, and shave or shorten the hair.' },
      points: [
        { en: 'Throw seven pebbles at Jamrat al-Aqaba, saying “Allahu akbar” with each (Sahih Muslim 1218).' },
        { en: 'Offer the sacrifice required of a pilgrim performing tamattu’ (Quran 2:196).' },
        { en: 'Men shave their heads or shorten their hair; women shorten theirs (Sunan Abi Dawud 1984).' },
      ],
      sources: ['muslim-1218', 'quran-2-196', 'abudawud-1984', 'wikipedia-hajj'],
    },
    {
      id: 'ifadah',
      title: { en: 'Tawaf al-Ifadah and sa’i' },
      when: { en: 'From the 10th of Dhu al-Hijjah' },
      where: { en: 'Masjid al-Haram' },
      inMosque: true,
      summary: {
        en: 'Return to Masjid al-Haram for Tawaf al-Ifadah, a pillar of Hajj, then perform sa’i between Safa and Marwah.',
      },
      points: [
        { en: '“…and let them perform tawaf around the ancient House” (Quran 22:29).' },
        ...TAWAF_POINTS.slice(0, 2),
        { en: 'The Prophet ﷺ performed this tawaf on the Day of Sacrifice, and then drank Zamzam water (Sahih Muslim 1218).' },
      ],
      sources: ['haj-hajj', 'quran-22-29', 'muslim-1218', 'bukhari-1612'],
      focus: 'blackStone',
      route: 'tawaf',
    },
    {
      id: 'tashreeq',
      title: { en: 'The Days of Tashreeq: stoning in Mina' },
      when: { en: '11th to 13th of Dhu al-Hijjah' },
      where: { en: 'Mina (outside the mosque)' },
      inMosque: false,
      summary: {
        en: 'Spend the nights in Mina, and each day after midday throw seven pebbles at each of the three jamarat.',
      },
      points: [
        {
          en: 'Begin with the small jamrah, then the middle one, then Jamrat al-Aqaba, saying “Allahu akbar” with each pebble, and pausing to supplicate after the first two (Sahih al-Bukhari 1751).',
        },
        { en: 'Pilgrims may leave Mina on the 12th, before sunset, or stay for the 13th (Quran 2:203).' },
      ],
      sources: ['bukhari-1751', 'quran-2-203', 'haj-mina', 'wikipedia-hajj'],
    },
    {
      id: 'wada',
      title: { en: 'The farewell tawaf' },
      when: { en: 'Before leaving Makkah' },
      where: { en: 'Masjid al-Haram' },
      inMosque: true,
      summary: {
        en: 'Before leaving Makkah, perform the farewell tawaf (Tawaf al-Wada’), so that the last act is at the House. Women who are menstruating are excused (Sahih al-Bukhari 1755).',
      },
      points: TAWAF_POINTS.slice(0, 2),
      sources: ['bukhari-1755', 'bukhari-1612'],
      focus: 'blackStone',
      route: 'tawaf',
    },
  ],
};

export const GUIDES: Readonly<Record<GuideId, Guide>> = { umrah: UMRAH, hajj: HAJJ };
export const GUIDE_ORDER: readonly GuideId[] = ['umrah', 'hajj'];
