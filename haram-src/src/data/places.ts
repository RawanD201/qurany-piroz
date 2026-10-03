// What the explorer says about each place: names, descriptions and the sources behind them.
//
// This file is the one to edit (or translate) when the wording changes. It holds text only;
// where each place is in the 3D world lives in place-locations.ts.
//
// Writing rules for these descriptions (see HARAM.md):
//   - Concise, factual, respectful. Paraphrase sources; do not quote long translations.
//   - Every paragraph must be supported by the entries listed in `sources` (see SOURCES.md).
//   - Do not add dates, measurements, traditions or claims that the sources do not support.
//   - Anything that is approximate in the 3D model goes in `modelNote`, not in the description.
//
// Translations: add e.g. `ckb: '…'` or `ar: '…'` next to each `en` (see src/i18n/locale.ts).
// Untranslated fields fall back to English.

import type { LocalizedText } from '../i18n/locale';
import type { SourceId } from './sources';

export type PlaceId =
  | 'kaaba'
  | 'kiswah'
  | 'kaabaDoor'
  | 'blackStone'
  | 'yemeniCorner'
  | 'hijrIsmail'
  | 'mizab'
  | 'maqamIbrahim'
  | 'mataf'
  | 'zamzam'
  | 'ottomanPortico'
  | 'masa'
  | 'safa'
  | 'marwah'
  | 'greenMarkers'
  | 'kingAbdulazizGate'
  | 'babAlSalam'
  | 'kingFahdGate'
  | 'babAlUmrah'
  | 'kingAbdullahGate'
  | 'clockTower'
  | 'kaabaInterior'
  | 'kaabaPillars'
  | 'babAlTawbah';

export type PlaceCategory = 'kaaba' | 'insideKaaba' | 'mataf' | 'sai' | 'gates' | 'surroundings';

export interface PlaceContent {
  id: PlaceId;
  category: PlaceCategory;
  name: LocalizedText;
  /** The place's name in Arabic script. A proper name, not a translation. */
  arabicName: string;
  /** One line shown in the Places list and under the panel title. */
  summary: LocalizedText;
  /** The main description, one entry per paragraph. */
  description: LocalizedText[];
  /** How this place is simplified or approximated in the 3D model, if it is. */
  modelNote?: LocalizedText;
  sources: SourceId[];
  /** Optional licensed image. None are used in version 1 (see ASSETS_LICENSES.md). */
  image?: { src: string; alt: LocalizedText; credit: string; license: string };
}

export const CATEGORY_LABELS: Record<PlaceCategory, LocalizedText> = {
  kaaba: { en: 'The Kaaba' },
  insideKaaba: { en: 'Inside the Kaaba' },
  mataf: { en: 'Around the Kaaba' },
  sai: { en: "Safa, Marwah and the Mas'a" },
  gates: { en: 'Gates' },
  surroundings: { en: 'Surroundings' },
};

export const CATEGORY_ORDER: readonly PlaceCategory[] = ['kaaba', 'insideKaaba', 'mataf', 'sai', 'gates', 'surroundings'];

export const PLACES: readonly PlaceContent[] = [
  {
    id: 'kaaba',
    category: 'kaaba',
    name: { en: 'Kaaba' },
    arabicName: 'الكعبة',
    summary: { en: 'The House at the centre of Masjid al-Haram, which Muslims face in prayer.' },
    description: [
      {
        en: 'The Kaaba is the cube-shaped building at the centre of Masjid al-Haram in Makkah and the most sacred site in Islam. Muslims everywhere face towards it in prayer; this direction is called the qibla (Quran 2:144).',
      },
      {
        en: 'The Quran describes it as the first House of worship established for mankind (Quran 3:96) and tells how Ibrahim (Abraham) and Ismail (Ishmael) raised its foundations (Quran 2:127).',
      },
      {
        en: 'During Hajj and Umrah, pilgrims perform tawaf around the Kaaba (Quran 22:29): seven circuits, walked anticlockwise so that the Kaaba stays on the left.',
      },
    ],
    modelNote: {
      en: 'Modelled with approximate published dimensions. Surface details are simplified.',
    },
    sources: ['quran-2-144', 'quran-3-96', 'quran-2-127', 'quran-22-29', 'muslim-1218', 'britannica-kaaba'],
  },
  {
    id: 'kiswah',
    category: 'kaaba',
    name: { en: 'Kiswah' },
    arabicName: 'كسوة الكعبة',
    summary: { en: 'The black, embroidered cloth that covers the Kaaba.' },
    description: [
      {
        en: 'The kiswah is the black silk cloth that covers the Kaaba. Inscriptions, including the Shahada, are woven into the silk itself, black on black. Verses of the Quran are embroidered on it in gold and silver thread, including a broad band that runs around the Kaaba about two-thirds of the way up.',
      },
      {
        en: 'The band is made of four embroidered pieces on each side. Below it, square panels with circular medallions mark the four corners, and the most elaborately decorated part, a curtain called the sitara, hangs over the door.',
      },
      { en: 'A new kiswah is made and placed on the Kaaba each year.' },
    ],
    modelNote: {
      en: 'The cloth, the door curtain and the band are shown with photographs of real kiswah: the woven calligraphy from a photograph of a kiswah fragment in a museum, the curtain from a 2016 photograph, and the band from photographs of two historical band panels (Khalili Collection) and the modern dedication panel. Because only three band panels are available, they repeat, and the verses do not appear in their true order. The corner panels are represented by abstract designs.',
    },
    sources: ['britannica-kiswah', 'wikipedia-kiswah', 'britannica-kaaba'],
  },
  {
    id: 'kaabaDoor',
    category: 'kaaba',
    name: { en: 'Door of the Kaaba' },
    arabicName: 'باب الكعبة',
    summary: { en: 'The raised door on the north-eastern wall, behind its embroidered curtain.' },
    description: [
      {
        en: 'The door of the Kaaba is on its north-eastern wall, close to the corner of the Black Stone, and is set about two metres above the ground.',
      },
      {
        en: 'A richly embroidered curtain, the sitara, hangs over the door. It is the most elaborately decorated part of the kiswah.',
      },
      {
        en: 'In a narration in Sahih al-Bukhari, Aisha asked why the door was set so high. The Prophet ﷺ explained that her people, the Quraysh, had built it that way so that they could let in or keep out whomever they wished (Sahih al-Bukhari 1584).',
      },
    ],
    modelNote: {
      en: 'The door is shown behind its curtain, using a 2016 photograph of the real curtain; the golden door shows through its opening as in the photograph.',
    },
    sources: ['wikipedia-kaaba', 'wikipedia-kiswah', 'bukhari-1584'],
  },
  {
    id: 'blackStone',
    category: 'kaaba',
    name: { en: 'Black Stone' },
    arabicName: 'الحجر الأسود',
    summary: { en: 'The stone set in the eastern corner of the Kaaba, where tawaf begins and ends.' },
    description: [
      {
        en: 'The Black Stone is set into the eastern corner of the Kaaba, about one and a half metres above the ground, and is held in a silver frame.',
      },
      {
        en: 'Each circuit of tawaf begins and ends at this corner. Pilgrims kiss or touch the stone when they are able to, following the practice of the Prophet ﷺ.',
      },
      {
        en: "Umar ibn al-Khattab is reported to have said, before kissing it, that he knew it was only a stone that could neither benefit nor harm, and that he kissed it only because he had seen the Prophet ﷺ do so (Sahih al-Bukhari 1597).",
      },
    ],
    sources: ['britannica-black-stone', 'wikipedia-black-stone', 'bukhari-1597', 'muslim-1218'],
  },
  {
    id: 'yemeniCorner',
    category: 'kaaba',
    name: { en: 'Yemeni Corner' },
    arabicName: 'الركن اليماني',
    summary: { en: 'The southern corner of the Kaaba, facing towards Yemen.' },
    description: [
      { en: 'The Yemeni Corner is the southern corner of the Kaaba, named for the direction it faces.' },
      {
        en: 'Abdullah ibn Umar reported that he saw the Prophet ﷺ touch only the two Yemeni corners — this one and the corner of the Black Stone (Sahih al-Bukhari 1609).',
      },
    ],
    sources: ['bukhari-1609', 'wikipedia-kaaba'],
  },
  {
    id: 'hijrIsmail',
    category: 'kaaba',
    name: { en: 'Hijr Ismail' },
    arabicName: 'حجر إسماعيل',
    summary: { en: 'The low semicircular wall beside the north-western side of the Kaaba.' },
    description: [
      {
        en: 'Hijr Ismail, also known as al-Hatim, is the area enclosed by the low, semicircular wall beside the north-western side of the Kaaba.',
      },
      {
        en: 'Aisha asked the Prophet ﷺ whether this area was part of the Kaaba, and he said that it was: it had been left outside the walls because the Quraysh did not have enough funds when they rebuilt the Kaaba (Sahih al-Bukhari 1584). Tawaf is therefore performed around the outside of the Hijr.',
      },
    ],
    modelNote: { en: 'The wall’s curve, height and thickness are approximate.' },
    sources: ['bukhari-1584', 'wikipedia-hijr'],
  },
  {
    id: 'mizab',
    category: 'kaaba',
    name: { en: 'Mizab al-Rahmah' },
    arabicName: 'ميزاب الرحمة',
    summary: { en: 'The golden rainwater spout on the roof of the Kaaba.' },
    description: [
      {
        en: 'The Mizab is the golden rainwater spout on the roof of the Kaaba. It projects from the north-western side, above Hijr Ismail, and carries rainwater off the roof into that area.',
      },
    ],
    modelNote: { en: 'Shown in simplified form.' },
    sources: ['wikipedia-kaaba', 'wikipedia-hijr'],
  },
  {
    id: 'maqamIbrahim',
    category: 'mataf',
    name: { en: 'Maqam Ibrahim' },
    arabicName: 'مقام إبراهيم',
    summary: { en: 'The Station of Ibrahim, a stone kept in an enclosure near the Kaaba.' },
    description: [
      {
        en: 'Maqam Ibrahim — the Station of Ibrahim — is a stone associated with the Prophet Ibrahim (Abraham). It is kept in a glass and metal enclosure on the north-eastern side of the Kaaba, facing its door. The stone bears impressions traditionally identified as his footprints.',
      },
      {
        en: 'According to a narration in Sahih al-Bukhari, Ibrahim stood on a stone while raising the walls of the House, as Ismail handed him the building stones (Sahih al-Bukhari 3364).',
      },
      {
        en: 'The Quran mentions the standing place of Ibrahim among the clear signs at the House (Quran 3:97) and tells the believers to take it as a place of prayer (Quran 2:125). After his tawaf, the Prophet ﷺ went to the Maqam, recited this verse and prayed two units of prayer (Sahih Muslim 1218); pilgrims follow this practice where space allows.',
      },
    ],
    modelNote: { en: 'The enclosure’s shape and its distance from the Kaaba are approximate.' },
    sources: ['quran-2-125', 'quran-3-96', 'muslim-1218', 'bukhari-3364', 'wikipedia-maqam'],
  },
  {
    id: 'mataf',
    category: 'mataf',
    name: { en: 'Mataf' },
    arabicName: 'المطاف',
    summary: { en: 'The open, marble-paved area around the Kaaba where tawaf is performed.' },
    description: [
      { en: 'The Mataf is the open, marble-paved area surrounding the Kaaba, where pilgrims perform tawaf.' },
      {
        en: 'Tawaf consists of seven circuits around the Kaaba, beginning and ending at the corner of the Black Stone, with the Kaaba kept on the left.',
      },
      { en: 'The Mataf has been enlarged in successive expansions of the mosque.' },
    ],
    modelNote: {
      en: 'Only the ground level is shown; the open area’s outline follows OpenStreetMap.',
    },
    sources: ['britannica-kaaba', 'muslim-1218', 'wikipedia-haram'],
  },
  {
    id: 'zamzam',
    category: 'mataf',
    name: { en: 'Zamzam Well' },
    arabicName: 'بئر زمزم',
    summary: { en: 'The well within the mosque, a short distance east of the Kaaba.' },
    description: [
      {
        en: 'The Zamzam well lies within Masjid al-Haram, a short distance east of the Kaaba. According to a narration in Sahih al-Bukhari, its water emerged for Hajar (Hagar) and her infant son Ismail after she had searched for water between Safa and Marwah (Sahih al-Bukhari 3364).',
      },
      {
        en: 'The well lies beneath the Mataf, about 21 metres east of the Kaaba on the side of Maqam Ibrahim, in line with the Multazam. It is not visible today: in the 1960s its opening was lowered into a basement beneath the Mataf, and in 2003 the basement entrances were closed and the marking on the floor above the well was removed. Zamzam water is provided for visitors throughout the mosque.',
      },
    ],
    modelNote: {
      en: 'The circle on the floor, lettered “بئر زمزم” (the Zamzam well), is drawn for this model to show the well’s approximate location. There is no such marking on the Mataf today, and nothing of the well itself is modelled.',
    },
    sources: ['bukhari-3364', 'saudipedia-zamzam', 'islamiclandmarks-zamzam', 'wikipedia-zamzam'],
  },
  {
    id: 'ottomanPortico',
    category: 'mataf',
    name: { en: 'Ottoman porticoes' },
    arabicName: 'الأروقة العثمانية',
    summary: { en: 'The domed arcades around the courtyard, among the oldest parts of the building.' },
    description: [
      {
        en: 'The arcades crowned with rows of small domes that surround the open courtyard are known as the Ottoman porticoes. They are among the oldest surviving parts of the mosque’s structure.',
      },
      {
        en: 'They date from the Ottoman period, beginning with a renovation of the mosque in the sixteenth century, and were preserved and restored during the modern expansions.',
      },
    ],
    modelNote: {
      en: 'Their plan follows OpenStreetMap: they run around the north, west and south sides of the courtyard, which on the east side reaches the halls. The arcades, columns and domes are simplified.',
    },
    sources: ['madain-haram', 'wikipedia-haram', 'osm-haram'],
  },
  {
    id: 'masa',
    category: 'sai',
    name: { en: "Mas'a" },
    arabicName: 'المسعى',
    summary: { en: "The gallery between Safa and Marwah, where pilgrims perform sa'i." },
    description: [
      {
        en: "The Mas'a is the long gallery between the hills of Safa and Marwah. Here pilgrims perform sa'i: walking between the two hills seven times, beginning at Safa and ending at Marwah.",
      },
      {
        en: "The rite recalls Hajar, who went back and forth between the two hills searching for water for her son Ismail; the Prophet ﷺ said that this is the origin of the people's sa'i between them (Sahih al-Bukhari 3364). The Quran names Safa and Marwah among the symbols of Allah (Quran 2:158).",
      },
    ],
    modelNote: {
      en: "Only the ground floor is shown. Its outline and the positions of Safa and Marwah follow OpenStreetMap; the interior is simplified.",
    },
    sources: ['haj-saai', 'bukhari-3364', 'quran-2-158', 'wikipedia-safa-marwa'],
  },
  {
    id: 'safa',
    category: 'sai',
    name: { en: 'Safa' },
    arabicName: 'الصفا',
    summary: { en: "The hill where sa'i begins." },
    description: [
      { en: "Safa is the small hill at the southern end of the Mas'a, where sa'i begins. Part of its rock remains visible within the building." },
      {
        en: 'The Quran mentions Safa and Marwah together among the symbols of Allah (Quran 2:158). The Prophet ﷺ began his sa\'i at Safa, reciting this verse (Sahih Muslim 1218).',
      },
    ],
    modelNote: { en: 'The rock and the dome above it are simplified.' },
    sources: ['quran-2-158', 'muslim-1218', 'haj-saai', 'wikipedia-safa-marwa'],
  },
  {
    id: 'marwah',
    category: 'sai',
    name: { en: 'Marwah' },
    arabicName: 'المروة',
    summary: { en: "The hill where sa'i ends." },
    description: [
      { en: "Marwah is the hill at the northern end of the Mas'a, where sa'i ends after the seventh lap." },
      {
        en: 'According to the narration in Sahih al-Bukhari, it was when Hajar reached Marwah on her last lap that she heard a voice and then found the water of Zamzam (Sahih al-Bukhari 3364).',
      },
    ],
    modelNote: { en: 'The rock and the dome above it are simplified.' },
    sources: ['quran-2-158', 'bukhari-3364', 'haj-saai', 'wikipedia-safa-marwa'],
  },
  {
    id: 'greenMarkers',
    category: 'sai',
    name: { en: 'Green markers' },
    arabicName: 'الميلان الأخضران',
    summary: { en: "Green lights marking a section of the Mas'a." },
    description: [
      {
        en: "Green lights mark a section of the Mas'a. Between the two green markers, men who are able are encouraged to move at a brisk pace, following the example of the Prophet ﷺ; others continue at a normal walk.",
      },
      {
        en: 'The narration in Sahih al-Bukhari describes Hajar running when she came down into the valley between the two hills (Sahih al-Bukhari 3364).',
      },
    ],
    modelNote: { en: 'The position and length of the green-lit section are approximate.' },
    sources: ['haj-saai', 'bukhari-3364'],
  },
  {
    id: 'kingAbdulazizGate',
    category: 'gates',
    name: { en: 'King Abdulaziz Gate' },
    arabicName: 'باب الملك عبد العزيز',
    summary: { en: 'Gate 1, a principal entrance on the southern side.' },
    description: [
      {
        en: 'King Abdulaziz Gate (Gate 1) is one of the principal entrances of Masjid al-Haram. It is on the southern side of the mosque, opposite Ajyad Street, near the Abraj Al-Bait complex.',
      },
    ],
    modelNote: { en: 'Its position is as mapped in OpenStreetMap; its architecture is simplified.' },
    sources: ['madain-gates', 'osm-haram'],
  },
  {
    id: 'kingFahdGate',
    category: 'gates',
    name: { en: 'King Fahd Gate' },
    arabicName: 'باب الملك فهد',
    summary: { en: 'Gate 79, the entrance to the King Fahd wing, on the western side.' },
    description: [
      {
        en: 'King Fahd Gate (Gate 79) is one of the principal gates of Masjid al-Haram. It leads into the wing added in the second Saudi expansion, under King Fahd, on the western side of the mosque. The gate has three portals and is flanked by two minarets.',
      },
    ],
    modelNote: { en: 'Its position is as mapped in OpenStreetMap; it is shown as a single arch and its architecture is simplified.' },
    sources: ['wikipedia-haram', 'madain-gates', 'osm-haram'],
  },
  {
    id: 'babAlSalam',
    category: 'gates',
    name: { en: 'Bab al-Salam' },
    arabicName: 'باب السلام',
    summary: { en: "The Gate of Peace, along the Mas'a near Marwah." },
    description: [
      {
        en: "Bab al-Salam — the Gate of Peace — is one of the historic gates of the mosque. It lies along the Mas'a, between Safa and Marwah but closer to Marwah, and gives access to the Mas'a.",
      },
    ],
    modelNote: { en: 'Its position is as mapped in OpenStreetMap; its architecture is simplified.' },
    sources: ['madain-gates', 'osm-haram'],
  },
  {
    id: 'babAlUmrah',
    category: 'gates',
    name: { en: 'Bab al-Umrah' },
    arabicName: 'باب العمرة',
    summary: { en: 'A gate on the north-western side, leading towards the Mataf.' },
    description: [
      {
        en: 'Bab al-Umrah is on the north-western side of the mosque and gives direct access towards the Mataf. It was renovated as part of the King Abdullah expansion.',
      },
    ],
    modelNote: { en: 'Its position is as mapped in OpenStreetMap; its architecture is simplified.' },
    sources: ['madain-gates', 'osm-haram'],
  },
  {
    id: 'kingAbdullahGate',
    category: 'gates',
    name: { en: 'King Abdullah Gate' },
    arabicName: 'باب الملك عبد الله',
    summary: { en: 'Gate 100, the central entrance of the King Abdullah expansion.' },
    description: [
      {
        en: 'King Abdullah Gate (Gate 100) is the central entrance to the King Abdullah expansion, on the northern side of the mosque. It is a triple-arched gate flanked by two minarets.',
      },
    ],
    modelNote: {
      en: 'Its position is as mapped in OpenStreetMap. The King Abdullah expansion is shown from outside only, and the gate as a single closed arch; its architecture is simplified.',
    },
    sources: ['madain-gates', 'osm-haram'],
  },
  {
    id: 'clockTower',
    category: 'surroundings',
    name: { en: 'Makkah Royal Clock Tower' },
    arabicName: 'برج ساعة مكة الملكي',
    summary: { en: 'The tall clock tower of the Abraj Al-Bait complex, outside the mosque.' },
    description: [
      {
        en: 'The Makkah Royal Clock Tower is part of the Abraj Al-Bait complex, which stands just south of Masjid al-Haram, outside the mosque. Completed in 2012, it is about 601 metres tall.',
      },
      {
        en: 'Each of its four clock faces is 43 metres across. By day the faces are white with black hands; at night they are lit green with white hands. The Saudi coat of arms is at the centre of each face, behind the hands. Above the faces, “Allahu akbar” (God is the greatest) is written on the north and south sides, and the Shahada (“There is no god but Allah; Muhammad is the Messenger of Allah”) on the east and west sides. The clock keeps Arabia Standard Time (UTC+3).',
      },
      {
        en: 'The top floors of the clock tower house the Clock Tower Museum, and there is an observation deck higher up, at about 484 metres, at the base of the spire. Visitors look out over Masjid al-Haram from far above.',
      },
    ],
    modelNote: {
      en: 'The tower stands where it is mapped (OpenStreetMap), as a simplified outline. Its clock faces show the current time in Makkah and follow the day and night colours; the dial’s markings, hands and emblem are a simplified drawing, not the real artwork. Zoom in to read them. “View from the balcony” takes you up to a viewing balcony beneath the north clock face, about 370 metres up; its position and size are approximate, and the mosque below is the same simplified model.',
    },
    sources: ['ctbuh-clock-tower', 'britannica-abraj', 'wikipedia-abraj-al-bait', 'wikipedia-clock-towers'],
  },

  // ---- inside the Kaaba ------------------------------------------------------------------------
  {
    id: 'kaabaInterior',
    category: 'insideKaaba',
    name: { en: 'Inside the Kaaba' },
    arabicName: 'داخل الكعبة',
    summary: { en: 'A single room, its floor about two metres above the Mataf, opened only on a few occasions.' },
    description: [
      {
        en: 'The door opens onto a single room whose floor is about two metres above the ground where tawaf is performed. The floor is of marble and limestone, and the walls are clad in pale marble halfway to the roof, with dark green marble along the floor and in bands.',
      },
      {
        en: 'Above the marble, the upper walls and the ceiling are covered with a green cloth. Old lamps of silver and gold hang close together from rods between the pillars. Plaques recording those who renovated the Kaaba are set in the walls: nine, all in thuluth script except one in kufic, and a tenth added in the time of King Fahd.',
      },
      {
        en: 'The Prophet ﷺ entered the Kaaba and prayed inside it. Bilal, who was with him, later told Ibn Umar where he had prayed: between the two pillars on the left as one enters (Sahih al-Bukhari 397).',
      },
      {
        en: 'The Kaaba is opened only on a few occasions, such as the ceremony of washing it, and its keys are held by the Banu Shaybah. The Prophet ﷺ told Aisha, who wished to pray inside, to pray in the Hijr, for it is part of the House (Sunan Abi Dawud 2028).',
      },
    ],
    modelNote: {
      en: 'Visitors cannot normally go inside; this view is for learning. It is drawn after published photographs of the room, but its measurements are not published, so it is fitted within the outer walls with an approximate ceiling height. The number and places of the lamps and plaques, the plaques’ carving and the cloth’s pattern are illustrative, not copies of the real ones.',
    },
    sources: ['wikipedia-kaaba', 'islamiclandmarks-kaaba', 'bukhari-397', 'abudawud-2028'],
  },
  {
    id: 'kaabaPillars',
    category: 'insideKaaba',
    name: { en: 'The pillars inside the Kaaba' },
    arabicName: 'أعمدة الكعبة',
    summary: { en: 'Three pillars that hold up the roof, first set there by Abdullah ibn al-Zubayr.' },
    description: [
      {
        en: 'Three pillars of wood, banded with gilded metal, stand inside the Kaaba and hold up its roof. Between one of them and the other two stands a small white cupboard where perfume is kept.',
      },
      {
        en: 'Abdullah ibn al-Zubayr set up the three pillars when he rebuilt the Kaaba. They were replaced during the renovation in the time of King Fahd.',
      },
      {
        en: 'In the Prophet’s time the roof stood on six pillars: when he prayed inside, he had one pillar on his left, one on his right and three behind him (Sahih al-Bukhari 505).',
      },
    ],
    modelNote: { en: 'The pillars are drawn as photographed, in a row; their spacing and the cupboard’s place are approximate.' },
    sources: ['wikipedia-kaaba', 'islamiclandmarks-kaaba', 'bukhari-505'],
  },
  {
    id: 'babAlTawbah',
    category: 'insideKaaba',
    name: { en: 'Bab al-Tawbah' },
    arabicName: 'باب التوبة',
    summary: { en: 'The golden door on the right as one enters, to the stairs up to the roof.' },
    description: [
      {
        en: 'Bab al-Tawbah, the Door of Repentance, is a golden door on the right as one enters. It opens onto an enclosed staircase leading to a hatch in the roof.',
      },
    ],
    modelNote: { en: 'The staircase is shown closed, as an enclosure in the corner. Its size, and the door’s decoration, drawn in the style of the Kaaba’s outer door, are approximate.' },
    sources: ['wikipedia-kaaba', 'islamiclandmarks-kaaba'],
  },
];

export function getPlaceContent(id: PlaceId): PlaceContent {
  const place = PLACES.find((p) => p.id === id);
  if (!place) throw new Error(`Unknown place: ${id}`);
  return place;
}
