// Which of the site's three languages a reader gets, and every string in each of them.
//
// The site was written in Kurdish (Sorani) and still is: every page carries its Kurdish text
// in the HTML itself, so a reader with no JavaScript — or one whose language is Kurdish
// anyway — sees a complete page with nothing swapped. English and Urdu are applied over that
// markup, keyed by the data-i18n attributes below.
//
// The language is decided in this order, first answer wins:
//
//   1. ?lang=en on the URL — for testing, and so a link can be shared in a chosen language.
//   2. A choice the reader made with the switcher before (localStorage).
//   3. Where the reader is: the device's own IANA time zone, which follows the phone or
//      computer's location setting. Pakistan -> Urdu, the mainly English-speaking countries ->
//      English, the Arab states -> Arabic, Afghanistan -> Persian.
//   4. For the four countries where more than one of these languages is genuinely spoken —
//      Iraq, Iran, Turkey, Syria — the browser's language list picks between that country's
//      own candidates, and only decides nothing if it names none of them.
//   5. The browser's language list on its own, for a location the map doesn't name.
//   6. Kurdish.
//
// Time zone rather than an IP lookup on purpose: it needs no network round trip (so nothing
// flashes in the wrong language while a request is in flight), it works on file:// and behind
// any host, and it sends the reader's address to nobody. It is also the more honest signal of
// the two — a VPN moves the IP but not the clock.

(function () {
  'use strict';

  var STORAGE_KEY = 'qp-lang';

  // The language every page is authored in. Anything the tables below leave out falls back to
  // this one rather than showing a bare key.
  var DEFAULT_LANG = 'ckb';

  // Menu order: the site's own language, then the one that reaches furthest, then the
  // neighbours, working outwards from the app's audience.
  var ORDER = ['ckb', 'en', 'ar', 'fa', 'tr', 'ur'];

  var LANGS = {
    // Endonyms — a language is always offered in its own name, so a reader who can't read the
    // current one can still find theirs.
    //
    // Two sets of Arabic-Indic numerals are in play: ٠١٢… (U+0660) for Kurdish and Arabic, and
    // ۰۱۲… (U+06F0) for Urdu and Persian. Same digits to look at, different code points, and a
    // language shown the wrong set looks foreign in a way a reader notices.
    ckb: { label: 'کوردیی ناوەندی', dir: 'rtl', digits: '٠١٢٣٤٥٦٧٨٩' },
    en:  { label: 'English', dir: 'ltr', digits: null },
    ar:  { label: 'العربية', dir: 'rtl', digits: '٠١٢٣٤٥٦٧٨٩' },
    fa:  { label: 'فارسی', dir: 'rtl', digits: '۰۱۲۳۴۵۶۷۸۹' },
    tr:  { label: 'Türkçe', dir: 'ltr', digits: null },
    ur:  { label: 'اردو', dir: 'rtl', digits: '۰۱۲۳۴۵۶۷۸۹' }
  };

  // ---- Urdu's own font ------------------------------------------------------------------------
  //
  // Left to the system stack, macOS and iOS hand Urdu to Noto Nastaliq Urdu — the traditional
  // calligraphic script, where a word descends steeply from right to left and each line needs
  // roughly twice the height this site gives a paragraph. At the site's 16px/1.7 the lines
  // collide and it is genuinely hard to read, which is not a thing to leave a reader fighting
  // with on a page about the Quran.
  //
  // A Naskh face sits on a flat baseline the way the Kurdish text already does, so it fits the
  // layout as it stands and stays clear at body sizes. It is loaded only for the reader who is
  // actually on Urdu — nobody else fetches it.
  //
  // Arabic and Persian need none of this. They are Arabic script too, but no system routes them
  // to a calligraphic face: they get the same flat-baseline Naskh the Kurdish text is already
  // rendered in, and read correctly in the stack the pages define.
  var URDU_FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap';

  var URDU_FONT_CSS = [
    // Buttons and inputs do not inherit font-family on their own, so they are named as well —
    // the download buttons, the switcher, and the donations page's month picker.
    'html[lang="ur"] body,',
    'html[lang="ur"] button,',
    'html[lang="ur"] input,',
    'html[lang="ur"] select,',
    'html[lang="ur"] textarea {',
    '  font-family: "Noto Naskh Arabic", "Segoe UI", Tahoma, sans-serif;',
    '}',
    // Naskh carries more of its weight above and below the baseline than the Latin and Kurdish
    // faces this line-height was set for, so Urdu paragraphs get a little more room.
    'html[lang="ur"] body { line-height: 1.95; }'
  ].join('\n');

  function loadUrduFont() {
    if (document.getElementById('qp-urdu-font')) return;

    var preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.gstatic.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    var link = document.createElement('link');
    link.id = 'qp-urdu-font';
    link.rel = 'stylesheet';
    link.href = URDU_FONT_HREF;
    document.head.appendChild(link);
  }

  // ---- Where the reader is ------------------------------------------------------------------

  // Countries with one clear answer. Everything else falls through to the browser's language
  // list, which is a better guess than any default we could pick here.
  var COUNTRY_LANG = {
    PK: 'ur',
    GB: 'en', US: 'en', IE: 'en', CA: 'en', AU: 'en', NZ: 'en', ZA: 'en',
    SA: 'ar', AE: 'ar', EG: 'ar', JO: 'ar', KW: 'ar', QA: 'ar', BH: 'ar', OM: 'ar',
    LB: 'ar', YE: 'ar', LY: 'ar', DZ: 'ar', MA: 'ar', TN: 'ar', SD: 'ar', PS: 'ar',
    AF: 'fa'
  };

  // The four countries where more than one of the site's languages is genuinely somebody's own.
  // Picking a national language outright would hand Kurdish to every Iraqi Arab and Turkish to
  // every Kurd in Turkey, so here the browser's language list decides — but only between that
  // country's own candidates, so a phone set to English in Erbil still gets Kurdish rather than
  // English. `fallback` is for a browser that names none of them.
  //
  // Iraq falls back to Kurdish rather than Arabic: it is where the app comes from and where most
  // of its readers are, and an Iraqi Arab reader's browser almost always says so.
  var MIXED_COUNTRIES = {
    IQ: { candidates: ['ckb', 'ar'], fallback: 'ckb' },
    IR: { candidates: ['fa', 'ckb'], fallback: 'fa' },
    TR: { candidates: ['tr', 'ckb'], fallback: 'tr' },
    SY: { candidates: ['ar', 'ckb'], fallback: 'ar' }
  };

  // IANA zone -> country, for the countries above. Zones are listed rather than pattern-matched
  // because "America/*" also covers Canada, Mexico and South America, and "Asia/*" covers most
  // of the world — a prefix would put whole continents in the wrong language.
  var ZONE_COUNTRY = {
    'Asia/Karachi': 'PK',

    'Europe/London': 'GB', 'Europe/Belfast': 'GB', 'Europe/Jersey': 'GB',
    'Europe/Guernsey': 'GB', 'Europe/Isle_of_Man': 'GB', 'GB': 'GB', 'GB-Eire': 'GB',

    'America/New_York': 'US', 'America/Detroit': 'US', 'America/Chicago': 'US',
    'America/Denver': 'US', 'America/Boise': 'US', 'America/Phoenix': 'US',
    'America/Los_Angeles': 'US', 'America/Anchorage': 'US', 'America/Juneau': 'US',
    'America/Sitka': 'US', 'America/Metlakatla': 'US', 'America/Yakutat': 'US',
    'America/Nome': 'US', 'America/Adak': 'US', 'America/Menominee': 'US',
    'Pacific/Honolulu': 'US',

    'Europe/Dublin': 'IE',

    'America/Toronto': 'CA', 'America/Vancouver': 'CA', 'America/Edmonton': 'CA',
    'America/Winnipeg': 'CA', 'America/Halifax': 'CA', 'America/St_Johns': 'CA',
    'America/Regina': 'CA',

    'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU',
    'Australia/Perth': 'AU', 'Australia/Adelaide': 'AU', 'Australia/Hobart': 'AU',
    'Australia/Darwin': 'AU',

    'Pacific/Auckland': 'NZ',
    'Africa/Johannesburg': 'ZA',

    'Asia/Baghdad': 'IQ', 'Asia/Erbil': 'IQ',
    'Asia/Tehran': 'IR',
    'Asia/Damascus': 'SY',
    'Europe/Istanbul': 'TR', 'Asia/Istanbul': 'TR',

    'Asia/Riyadh': 'SA', 'Asia/Dubai': 'AE', 'Africa/Cairo': 'EG', 'Asia/Amman': 'JO',
    'Asia/Kuwait': 'KW', 'Asia/Qatar': 'QA', 'Asia/Bahrain': 'BH', 'Asia/Muscat': 'OM',
    'Asia/Beirut': 'LB', 'Asia/Aden': 'YE', 'Africa/Tripoli': 'LY', 'Africa/Algiers': 'DZ',
    'Africa/Casablanca': 'MA', 'Africa/El_Aaiun': 'MA', 'Africa/Tunis': 'TN',
    'Africa/Khartoum': 'SD', 'Asia/Gaza': 'PS', 'Asia/Hebron': 'PS',

    'Asia/Kabul': 'AF'
  };

  // The three US zone families that live one level deeper, plus the legacy "US/Eastern" names
  // some systems still report. Both are unambiguous prefixes, unlike "America/" itself.
  var US_ZONE_PREFIXES = ['America/Indiana/', 'America/Kentucky/', 'America/North_Dakota/', 'US/'];

  function countryFromTimeZone() {
    var zone;
    try {
      zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (err) {
      return null;
    }
    if (!zone) return null;

    if (ZONE_COUNTRY[zone]) return ZONE_COUNTRY[zone];

    for (var i = 0; i < US_ZONE_PREFIXES.length; i++) {
      if (zone.indexOf(US_ZONE_PREFIXES[i]) === 0) return 'US';
    }
    return null;
  }

  // A language tag's primary subtag ("en-GB" -> "en") mapped to one of the site's six. Matched
  // whole rather than by prefix: "ar" as a prefix also swallows "arn", which is Mapudungun.
  var NAV_LANG = {
    ckb: 'ckb', ku: 'ckb', kmr: 'ckb', sdh: 'ckb',
    en: 'en',
    ar: 'ar', arb: 'ar', arz: 'ar', ary: 'ar',
    fa: 'fa', fas: 'fa', per: 'fa', prs: 'fa',
    tr: 'tr', tur: 'tr',
    ur: 'ur', urd: 'ur'
  };

  // The reader's languages, in their own order of preference, narrowed to the ones this site
  // has and with duplicates dropped. A language the site doesn't have is skipped rather than
  // guessed at, so a reader whose first choice is missing still gets their second.
  function navigatorLangs() {
    var tags = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

    var found = [];
    for (var i = 0; i < tags.length; i++) {
      var lang = NAV_LANG[String(tags[i]).toLowerCase().split('-')[0]];
      if (lang && found.indexOf(lang) < 0) found.push(lang);
    }
    return found;
  }

  function langFromNavigator() {
    return navigatorLangs()[0] || null;
  }

  // The same list, but answering only with one of `candidates` — what a mixed country asks, so
  // that a browser set to some unrelated language does not override where the reader is.
  function langFromNavigatorAmong(candidates) {
    var listed = navigatorLangs();
    for (var i = 0; i < listed.length; i++) {
      if (candidates.indexOf(listed[i]) >= 0) return listed[i];
    }
    return null;
  }

  function storedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return LANGS[saved] ? saved : null;
    } catch (err) {
      // Private mode in some browsers throws on access rather than returning null.
      return null;
    }
  }

  function queryLang() {
    var match = /[?&]lang=([^&]+)/.exec(window.location.search);
    if (!match) return null;
    var asked = decodeURIComponent(match[1]);
    return LANGS[asked] ? asked : null;
  }

  function detect() {
    var chosen = queryLang() || storedLang();
    if (chosen) return chosen;

    var country = countryFromTimeZone();
    if (country) {
      var mixed = MIXED_COUNTRIES[country];
      if (mixed) return langFromNavigatorAmong(mixed.candidates) || mixed.fallback;
      if (COUNTRY_LANG[country]) return COUNTRY_LANG[country];
    }

    return langFromNavigator() || DEFAULT_LANG;
  }

  var STRINGS = {};

  // ---- Kurdish (Sorani) ---------------------------------------------------------------------
  //
  // The site's own text, lifted out of the pages verbatim so the tables below have something to
  // be translations *of*. The same words are still in the HTML as the no-JavaScript fallback,
  // which is why nothing here should be reworded without changing the markup to match.

  STRINGS.ckb = {
    'common.langGroup': 'زمان',
    'common.appName': 'قورئانی پیرۆز — پەڕتووکی خودا',
    'common.appShort': 'قورئانی پیرۆز',
    'common.logoAlt': 'لۆگۆی ئەپی قورئانی پیرۆز',
    'common.download': 'دابارکردن (Download)',
    'common.unsupported': 'ئەم بەرنامەیە تەنیا بۆ ئەندرۆید و ئایئۆئێس بەردەستە.',
    'common.footer': '© {year} قورئانی پیرۆز — پەڕتووکی خودا. هەموو مافەکان پارێزراوە.',
    'common.footerLinked': '© {year} <a href="/">قورئانی پیرۆز — پەڕتووکی خودا</a>',

    'index.pageTitle': 'قورئانی پیرۆز — پەڕتووکی خودا',
    'index.metaDescription': 'بەرنامەی مۆبایلیی "قورئانی پیرۆز — پەڕتووکی خودا" بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی (هەرسێ زار و شێوەزاری کوردیی ناوەندی و بادینانی و هەورامانی) بەسیازدە تەفسیری کوردی و فەرهەنگێکی ڕیشەییی وشەکانی قورئانەوە.',
    'index.metaKeywords': 'قورئان, قورئانی پیرۆز, کوردی, تەفسیر, پەڕتووکی خودا, Quran, Kurdish',
    'index.ogDescription': 'بەرنامەی مۆبایلیی بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی',
    'index.description': 'بەرنامەی مۆبایلیی «قورئانی پیرۆز — پەڕتووکی خودا» بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی (هەرسێ زار و شێوەزاری کوردیی ناوەندی و بادینانی و هەورامانی) بەسیازدە تەفسیری کوردی و فەرهەنگێکی ڕیشەییی وشەکانی قورئانەوە.',
    'index.androidNote': 'بۆ ئەندرۆید: دوای دابارکردن، ڕێگە بە دامەزراندنی ئەپ لە سەرچاوەی نەناسراو بدە.',
    'index.donations': '🤍 بەخشین',

    'link.openHint': 'ئەگەر بەرنامەکەت دامەزراندبێت، بەشێوەی ئاسایی بەستەرەکە خۆی بەرنامەکە دەکاتەوە. ئەگەر ئەوە ڕووی نەدا، دوگمەی سەرەوە دابگرە.',
    'link.brokenLabel': 'بەستەرەکە کارا نییە',

    'ayat.pageTitle': 'ئایەتێک — قورئانی پیرۆز',
    'ayat.metaDescription': 'ئەم بەستەرە ڕاستەوخۆ ئەم ئایەتە لە بەرنامەی «قورئانی پیرۆز — پەڕتووکی خودا» دەکاتەوە.',
    'ayat.heading': 'ئایەتێکت بۆ هاتووە',
    'ayat.subtitle': 'ئەم بەستەرە ڕاستەوخۆ ئەم ئایەتە لە بەرنامەکەدا دەکاتەوە.',
    'ayat.targetLabel': 'سوورەت و ئایەت',
    'ayat.openButton': 'کردنەوە لە بەرنامەکەدا',
    'ayat.appNote': 'بەرنامەی «قورئانی پیرۆز — پەڕتووکی خودا» — قورئان بە زمانی کوردی، بە سیازدە تەفسیرەوە.',
    'ayat.suratLabel': 'سوورەتی {ku} ({ar})',
    'ayat.ayatLabel': 'ئایەتی {n}',
    'ayat.docTitle': '{surat} {ayat} — قورئانی پیرۆز',
    'ayat.broken': 'ئەم ئایەتە نەدۆزرایەوە. ڕەنگە بەستەرەکە بەتەواوی کۆپی نەکرابێت.',

    'quiz.pageTitle': 'بانگهێشتی تاقیکردنەوە — قورئانی پیرۆز',
    'quiz.metaDescription': 'بانگهێشتێک بۆ تاقیکردنەوەی سەرهێڵی قورئان لە بەرنامەی «قورئانی پیرۆز — پەڕتووکی خودا».',
    'quiz.heading': 'بانگهێشتی تاقیکردنەوەی قورئان',
    'quiz.subtitle': 'هاوڕێیەکت بانگهێشتی کردوویت بۆ تاقیکردنەوەیەکی سەرهێڵ. ئەم بەستەرە ڕاستەوخۆ دەتباتە نێو تاقیکردنەوەکە — پێویست ناکات کۆدەکە بنووسیت.',
    'quiz.codeLabel': 'کۆدی تاقیکردنەوە',
    'quiz.openButton': 'چوونە نێو تاقیکردنەوە',
    'quiz.note': 'تێبینی: تاقیکردنەوەکە تەنیا پێش دەستپێکردنی دەکرێت بەشداری تێدا بکەیت. ئەگەر خانەخوێکە پێشتر دەستی پێکردبێت، داوای کۆدێکی نوێی لێ بکە.',
    'quiz.docTitle': 'بانگهێشتی تاقیکردنەوە {code} — قورئانی پیرۆز',
    'quiz.broken': 'کۆدی تاقیکردنەوە نەخوێندرایەوە. ڕەنگە بەستەرەکە بەتەواوی کۆپی نەکرابێت.',

    'donations.pageTitle': 'بەخشین — قورئانی پیرۆز',
    'donations.metaDescription': 'بەشی بەخشین بۆ ئەپی «قورئانی پیرۆز — پەڕتووکی خودا»: خەزێنە، داواکارییە چالاکەکان، بەخشەران و خەرجییەکان — بە ڕاستەقینە کاتی و نوێبوونەوەی خۆکار.',
    'donations.logoAlt': 'لۆگۆی قورئانی پیرۆز',
    'donations.back': 'گەڕانەوە ›',
    'donations.heading': 'بەخشین',
    'donations.loading': 'بارکردن...',
    'donations.currency': 'د.ع',
    'donations.treasuryLabel': 'خەزێنەی ئێستای بەرنامە',
    'donations.description': 'ڕوونکردنەوە',
    'donations.remaining': 'ماوە: {amount}',
    'donations.target': 'ئامانج: {amount}',
    'donations.fromTreasury': 'لە خەزێنەوە دراوە: {amount}',
    'donations.howTitle': 'چۆن ببەخشیت؟',
    'donations.howBody': 'دەتوانیت بڕی پارەکە بنێریت بۆ ژمارەی دیاریکراو لە ڕێگەی FIB، Qi، Fastpay یان AsiaPayـەوە. تکایە بڕی پارەکە و مەبەستی ناردنەکە بنووسە تاوەکو بتوانرێت وەک بەخشین تۆمار بکرێت.',
    'donations.donors': 'بەخشەران',
    'donations.spontaneous': 'بەخشینی خۆبەخشانە',
    'donations.spontaneousEmpty': 'هیچ بەخشینێکی خۆبەخشانە نییە بۆ ئەم مانگە',
    'donations.monthLabel': 'مانگ هەڵبژێرە',
    'donations.donorsTotals': 'بەخشەران (بە کۆی بەخشینەکانیشیانەوە)',
    'donations.noDonations': 'هیچ بەخشینێک نەدۆزرایەوە',
    'donations.total': 'کۆی گشتی',
    'donations.close': 'داخستن',
    'donations.expenses': 'خەرجییەکانی خەزێنە',
    'donations.campaigns': 'داواکارییەکان',
    'donations.status.active': 'چالاکە',
    'donations.status.fulfilled': 'تەواوبووە',
    'donations.status.ended': 'کۆتایی هاتووە',
    'donations.status.inactive': 'ناچالاکە',
    'donations.status.upcoming': 'داهاتوو',
    'donations.copied': 'ژمارەکە لەبەرگیرایەوە.',
    'donations.months': [
      'کانوونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران',
      'تەمووز', 'ئاب', 'ئەیلوول', 'تشرینی یەکەم', 'تشرینی دووەم', 'کانوونی یەکەم'
    ],

    'guide.title': 'پێش دابەزاندن ئەمە بخوێنەوە',
    'guide.lead': 'دوو هەنگاوی کورت هەن؛ بەبێ ئەوان دامەزراندنی ئەپەکە سەرکەوتوو نابێت.',
    'guide.num1': '١',
    'guide.num2': '٢',
    'guide.step1Title': 'سەرەتا وەشانی کۆنی ئەپەکە بسڕەوە',
    'guide.step1Body': 'ئەگەر ئەپی «قورئانی پیرۆز» لەسەر شاشەی مۆبایلەکەتدا هەیە، پێش هەموو شتێک بیسڕەوە: دەست بخە سەر ئایکۆنەکەی و دایبگرە، پاشان <span class="qp-ig-ui">Uninstall</span> (سڕینەوە) هەڵبژێرە.',
    'guide.step1Warn': 'هەردوو وەشانەکە هەمان ناوی پاکێجیان هەیە، بۆیە ئەگەر کۆنەکە نەسڕیتەوە ململانێی پاکێج <span class="qp-ig-ui">(package conflict)</span> ڕوودەدات و ئەندرۆید دامەزراندنەکە ڕادەگرێت — زۆرجار تەنیا بە پەیامی <span class="qp-ig-ui">App not installed</span>.',
    'guide.step2Title': 'ڕێگە بە دامەزراندن لە سەرچاوەی نەناسراو بدە',
    'guide.step2Body': 'دوای تەواوبوونی دابەزاندن، فایلەکە بکەرەوە. ئەگەر ئەندرۆید ڕێگری کرد، <span class="qp-ig-ui">Settings</span> لێبدە و ڕێگە بەو وێبگەڕەی پێی دابەزاندووی بدە کە ئەپ دامەزرێنێت، پاشان بگەڕێوە و <span class="qp-ig-ui">Install</span> (دامەزراندن) لێبدە.',
    'guide.ppSummary': 'ئەگەر «Play Protect» ڕێگری لە دامەزراندنەکە کرد',
    'guide.ppIntro': 'پەیامی <span class="qp-ig-ui">Unsafe app blocked</span>، <span class="qp-ig-ui">Blocked by Play Protect</span> یان <span class="qp-ig-ui">App blocked to protect your device</span> واتای ئەوە نییە کە ئەپەکە زیانبەخشە — Play Protect هەموو ئەو ئەپانە بە «نەناسراو» دەژمێرێت کە لە Google Play دانەبەزێنراون.',
    'guide.ppLead': 'بەم هەنگاوانە ڕێگەی پێ دەدەیت:',
    'guide.pp1': '<span class="qp-ig-ui">Settings</span> (ڕێکخستنەکان) بکەرەوە و لە خانەی گەڕاندا بنووسە <span class="qp-ig-ui">Play Protect</span>.',
    'guide.pp2': 'لە ئەنجامەکاندا <span class="qp-ig-ui">Security and privacy</span> ← <span class="qp-ig-ui">App security</span> هەڵبژێرە.',
    'guide.pp3': 'کرتە لە <span class="qp-ig-ui">Google Play Protect</span> بکە.',
    'guide.pp4': 'لە سەرەوەی لاپەڕەکەوە، ئایکۆنی ڕێکخستنەکان (⚙) لێبدە.',
    'guide.pp5': 'هەردوو کلیلەکە بکوژێنەوە: <span class="qp-ig-ui">Scan apps with Play Protect</span> و <span class="qp-ig-ui">Improve harmful app detection</span>.',
    'guide.pp6': 'بگەڕێوە بۆ فایلە دابەزێنراوەکە و دامەزراندنەکە دووبارە تاقیبکەرەوە.',
    'guide.pp7': 'دوای تەواوبوونی دامەزراندن، هەردوو کلیلەکە دووبارە هەڵبکەوە، بۆ ئەوەی پارێزگاریی مۆبایلەکەت بمێنێتەوە.',
    'guide.altBlocked': 'دیالۆگی Google Play Protect کە دامەزراندنی ئەپەکە ڕاگرتووە',
    'guide.alt01': 'ئەنجامی گەڕان بۆ Play Protect لە ڕێکخستنەکاندا',
    'guide.alt02': 'لاپەڕەی App security و شوێنی Google Play Protect',
    'guide.alt03': 'لاپەڕەی Play Protect و ئایکۆنی ڕێکخستنەکان لە سەرەوە',
    'guide.alt04': 'هەردوو کلیلی ڕێکخستنەکانی Play Protect',
    'guide.ack': 'تێگەیشتم — دەستپێکردنی دابەزاندن',
    'guide.cancel': 'پاشگەزبوونەوە',
    'guide.ask': 'ڕێنمایییەکانی پێش دابەزاندت خوێندەوە؟',
    'guide.go': 'بەڵێ، دەستی پێبکە',
    'guide.back': 'نەخێر، دەیخوێنمەوە',

    'test.pageTitle': 'تاقیکردنەوەی ڕێنمایی ئەندرۆید — قورئانی پیرۆز',
    'test.banner': '⚠️ لاپەڕەی تاقیکردنەوەیە، نەک لاپەڕەی ڕاستەقینە — دۆخی ئەندرۆید بەزۆر هەڵکراوە تاکو ڕێنمایی دامەزراندن لەسەر کۆمپیوتەر ببینرێت. لاپەڕەی ڕاستەقینە <code>/index.html</code>ە.'
  };

  // ---- English ------------------------------------------------------------------------------
  //
  // "Qurany Piroz" is kept as the app's name rather than translated away — it is what the app
  // is called in both stores, and a reader who searches for it has to find the same words.
  // Only the subtitle ("پەڕتووکی خودا" — the Book of God) is carried over in meaning.

  STRINGS.en = {
    'common.langGroup': 'Language',
    'common.appName': 'Qurany Piroz — The Book of God',
    'common.appShort': 'Qurany Piroz',
    'common.logoAlt': 'Qurany Piroz app logo',
    'common.download': 'Download',
    'common.unsupported': 'This app is available for Android and iOS only.',
    'common.footer': '© {year} Qurany Piroz — The Book of God. All rights reserved.',
    'common.footerLinked': '© {year} <a href="/">Qurany Piroz — The Book of God</a>',

    'index.pageTitle': 'Qurany Piroz — The Book of God',
    'index.metaDescription': 'The "Qurany Piroz — The Book of God" mobile app: a journey of understanding through the verses of the Quran in Kurdish — all three dialects, Sorani, Badini and Hawrami — with thirteen Kurdish tafsirs and a root dictionary of Quranic words.',
    'index.metaKeywords': 'Quran, Qurany Piroz, Kurdish Quran, tafsir, Book of God, Sorani, Badini, Hawrami',
    'index.ogDescription': 'A mobile app for a journey of understanding through the verses of the Quran in Kurdish',
    'index.description': 'The “Qurany Piroz — The Book of God” mobile app takes you on a journey of understanding through the verses of the Quran in Kurdish — all three dialects: Sorani, Badini and Hawrami — with thirteen Kurdish tafsirs and a root dictionary of Quranic words.',
    'index.androidNote': 'On Android: after downloading, allow the app to be installed from an unknown source.',
    'index.donations': '🤍 Donate',

    'link.openHint': 'If you already have the app, the link normally opens it by itself. If that did not happen, tap the button above.',
    'link.brokenLabel': 'This link does not work',

    'ayat.pageTitle': 'A verse — Qurany Piroz',
    'ayat.metaDescription': 'This link opens this verse directly in the “Qurany Piroz — The Book of God” app.',
    'ayat.heading': 'A verse was shared with you',
    'ayat.subtitle': 'This link opens the verse directly in the app.',
    'ayat.targetLabel': 'Surah and verse',
    'ayat.openButton': 'Open in the app',
    'ayat.appNote': 'The “Qurany Piroz — The Book of God” app — the Quran in Kurdish, with thirteen tafsirs.',
    'ayat.suratLabel': 'Surah {en} ({ar})',
    'ayat.ayatLabel': 'verse {n}',
    'ayat.docTitle': '{surat} {ayat} — Qurany Piroz',
    'ayat.broken': 'This verse could not be found. The link may not have been copied in full.',

    'quiz.pageTitle': 'Quiz invitation — Qurany Piroz',
    'quiz.metaDescription': 'An invitation to an online Quran quiz in the “Qurany Piroz — The Book of God” app.',
    'quiz.heading': 'Quran quiz invitation',
    'quiz.subtitle': 'A friend has invited you to an online quiz. This link takes you straight into it — you do not need to type the code.',
    'quiz.codeLabel': 'Quiz code',
    'quiz.openButton': 'Join the quiz',
    'quiz.note': 'Note: you can only join a quiz before it starts. If the host has already started it, ask them for a new code.',
    'quiz.docTitle': 'Quiz invitation {code} — Qurany Piroz',
    'quiz.broken': 'The quiz code could not be read. The link may not have been copied in full.',

    'donations.pageTitle': 'Donations — Qurany Piroz',
    'donations.metaDescription': 'The donations section of the “Qurany Piroz — The Book of God” app: the treasury, active campaigns, donors and expenses — live, and updated automatically.',
    'donations.logoAlt': 'Qurany Piroz logo',
    'donations.back': '‹ Back',
    'donations.heading': 'Donations',
    'donations.loading': 'Loading…',
    'donations.currency': 'IQD',
    'donations.treasuryLabel': 'The app’s current treasury',
    'donations.description': 'Details',
    'donations.remaining': 'Remaining: {amount}',
    'donations.target': 'Goal: {amount}',
    'donations.fromTreasury': 'Covered from the treasury: {amount}',
    'donations.howTitle': 'How to donate',
    'donations.howBody': 'You can send the amount to the number shown, through FIB, Qi, Fastpay or AsiaPay. Please note the amount and the purpose of the transfer, so it can be recorded as a donation.',
    'donations.donors': 'Donors',
    'donations.spontaneous': 'Spontaneous donations',
    'donations.spontaneousEmpty': 'No spontaneous donations for this month',
    'donations.monthLabel': 'Choose a month',
    'donations.donorsTotals': 'Donors (with their totals)',
    'donations.noDonations': 'No donations found',
    'donations.total': 'Total',
    'donations.close': 'Close',
    'donations.expenses': 'Treasury expenses',
    'donations.campaigns': 'Campaigns',
    'donations.status.active': 'Active',
    'donations.status.fulfilled': 'Completed',
    'donations.status.ended': 'Ended',
    'donations.status.inactive': 'Inactive',
    'donations.status.upcoming': 'Upcoming',
    'donations.copied': 'The number has been copied.',
    'donations.months': [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],

    'guide.title': 'Read this before downloading',
    'guide.lead': 'There are two short steps; without them the install will not succeed.',
    'guide.num1': '1',
    'guide.num2': '2',
    'guide.step1Title': 'First uninstall the old version of the app',
    'guide.step1Body': 'If “Qurany Piroz” is already on your phone, remove it before anything else: press and hold its icon, then choose <span class="qp-ig-ui">Uninstall</span>.',
    'guide.step1Warn': 'Both versions carry the same package name, so if you do not remove the old one Android hits a <span class="qp-ig-ui">package conflict</span> and stops the install — usually with nothing more than <span class="qp-ig-ui">App not installed</span>.',
    'guide.step2Title': 'Allow installing from an unknown source',
    'guide.step2Body': 'When the download finishes, open the file. If Android blocks it, tap <span class="qp-ig-ui">Settings</span> and allow the browser you downloaded with to install apps, then go back and tap <span class="qp-ig-ui">Install</span>.',
    'guide.ppSummary': 'If Play Protect blocks the install',
    'guide.ppIntro': '<span class="qp-ig-ui">Unsafe app blocked</span>, <span class="qp-ig-ui">Blocked by Play Protect</span> or <span class="qp-ig-ui">App blocked to protect your device</span> does not mean the app is harmful — Play Protect counts every app that was not downloaded from Google Play as "unknown".',
    'guide.ppLead': 'These steps allow it:',
    'guide.pp1': 'Open <span class="qp-ig-ui">Settings</span> and type <span class="qp-ig-ui">Play Protect</span> into the search box.',
    'guide.pp2': 'In the results choose <span class="qp-ig-ui">Security and privacy</span> → <span class="qp-ig-ui">App security</span>.',
    'guide.pp3': 'Tap <span class="qp-ig-ui">Google Play Protect</span>.',
    'guide.pp4': 'At the top of the page, tap the settings icon (⚙).',
    'guide.pp5': 'Turn both switches off: <span class="qp-ig-ui">Scan apps with Play Protect</span> and <span class="qp-ig-ui">Improve harmful app detection</span>.',
    'guide.pp6': 'Go back to the downloaded file and try the install again.',
    'guide.pp7': 'Once the install has finished, turn both switches back on, so your phone stays protected.',
    'guide.altBlocked': 'The Google Play Protect dialog that has stopped the install',
    'guide.alt01': 'Search results for Play Protect in Settings',
    'guide.alt02': 'The App security page and where Google Play Protect sits on it',
    'guide.alt03': 'The Play Protect page and the settings icon at the top of it',
    'guide.alt04': 'Both Play Protect settings switches',
    'guide.ack': 'I understand — start the download',
    'guide.cancel': 'Cancel',
    'guide.ask': 'Did you read the instructions above?',
    'guide.go': 'Yes, start it',
    'guide.back': 'No, let me read them',

    'test.pageTitle': 'Android guide test — Qurany Piroz',
    'test.banner': '⚠️ This is a test page, not the real one — Android mode is forced on so the install guide can be seen on a computer. The real page is <code>/index.html</code>.'
  };

  // ---- Urdu (Pakistan) ------------------------------------------------------------------------
  //
  // Right-to-left like Kurdish, and written in the same Arabic script, so the pages need no
  // layout changes for it — only the numerals differ (see LANGS.ur.digits above). Surah names
  // are the Arabic ones an Urdu reader already knows, so the /ayat/ page uses those directly
  // rather than a transliteration.

  STRINGS.ur = {
    'common.langGroup': 'زبان',
    'common.appName': 'قرآنِ پیروز — اللہ کی کتاب',
    'common.appShort': 'قرآنِ پیروز',
    'common.logoAlt': 'قرآنِ پیروز ایپ کا لوگو',
    'common.download': 'ڈاؤن لوڈ',
    'common.unsupported': 'یہ ایپ صرف اینڈرائیڈ اور iOS کے لیے دستیاب ہے۔',
    'common.footer': '© {year} قرآنِ پیروز — اللہ کی کتاب۔ جملہ حقوق محفوظ ہیں۔',
    'common.footerLinked': '© {year} <a href="/">قرآنِ پیروز — اللہ کی کتاب</a>',

    'index.pageTitle': 'قرآنِ پیروز — اللہ کی کتاب',
    'index.metaDescription': 'موبائل ایپ «قرآنِ پیروز — اللہ کی کتاب»: کُردی زبان میں قرآن کی آیات کے ذریعے فہم و بصیرت کا سفر — تینوں لہجوں (سورانی، بادینی اور ہورامی) میں، تیرہ کُردی تفاسیر اور قرآنی الفاظ کی لغت کے ساتھ۔',
    'index.metaKeywords': 'قرآن, قرآنِ پیروز, کُردی قرآن, تفسیر, اللہ کی کتاب, Quran, Kurdish',
    'index.ogDescription': 'کُردی زبان میں قرآن کی آیات کے ذریعے فہم و بصیرت کے سفر کے لیے ایک موبائل ایپ',
    'index.description': 'موبائل ایپ «قرآنِ پیروز — اللہ کی کتاب» آپ کو کُردی زبان میں قرآن کی آیات کے ذریعے فہم و بصیرت کے سفر پر لے جاتی ہے — تینوں لہجوں میں: سورانی، بادینی اور ہورامی — تیرہ کُردی تفاسیر اور قرآنی الفاظ کی لغت کے ساتھ۔',
    'index.androidNote': 'اینڈرائیڈ پر: ڈاؤن لوڈ کے بعد نامعلوم ذریعے سے ایپ انسٹال کرنے کی اجازت دیں۔',
    'index.donations': '🤍 عطیہ',

    'link.openHint': 'اگر ایپ پہلے سے موجود ہے تو لنک عام طور پر خود ہی ایپ کھول دیتا ہے۔ اگر ایسا نہ ہو تو اوپر والا بٹن دبائیں۔',
    'link.brokenLabel': 'یہ لنک کام نہیں کرتا',

    'ayat.pageTitle': 'ایک آیت — قرآنِ پیروز',
    'ayat.metaDescription': 'یہ لنک اس آیت کو براہِ راست «قرآنِ پیروز — اللہ کی کتاب» ایپ میں کھولتا ہے۔',
    'ayat.heading': 'کسی نے آپ کے ساتھ ایک آیت شیئر کی ہے',
    'ayat.subtitle': 'یہ لنک اس آیت کو براہِ راست ایپ میں کھولتا ہے۔',
    'ayat.targetLabel': 'سورت اور آیت',
    'ayat.openButton': 'ایپ میں کھولیں',
    'ayat.appNote': '«قرآنِ پیروز — اللہ کی کتاب» ایپ — کُردی زبان میں قرآن، تیرہ تفاسیر کے ساتھ۔',
    'ayat.suratLabel': 'سورۃ {ar}',
    'ayat.ayatLabel': 'آیت {n}',
    'ayat.docTitle': '{surat} {ayat} — قرآنِ پیروز',
    'ayat.broken': 'یہ آیت نہیں ملی۔ ممکن ہے لنک پورا کاپی نہ ہوا ہو۔',

    'quiz.pageTitle': 'کوئز کی دعوت — قرآنِ پیروز',
    'quiz.metaDescription': '«قرآنِ پیروز — اللہ کی کتاب» ایپ میں آن لائن قرآن کوئز کی دعوت۔',
    'quiz.heading': 'قرآن کوئز کی دعوت',
    'quiz.subtitle': 'ایک دوست نے آپ کو آن لائن کوئز میں مدعو کیا ہے۔ یہ لنک آپ کو سیدھا کوئز میں لے جاتا ہے — کوڈ لکھنے کی ضرورت نہیں۔',
    'quiz.codeLabel': 'کوئز کوڈ',
    'quiz.openButton': 'کوئز میں شامل ہوں',
    'quiz.note': 'نوٹ: کوئز میں صرف اس کے شروع ہونے سے پہلے شامل ہوا جا سکتا ہے۔ اگر میزبان پہلے ہی شروع کر چکا ہو تو ان سے نیا کوڈ طلب کریں۔',
    'quiz.docTitle': 'کوئز کی دعوت {code} — قرآنِ پیروز',
    'quiz.broken': 'کوئز کوڈ پڑھا نہیں جا سکا۔ ممکن ہے لنک پورا کاپی نہ ہوا ہو۔',

    'donations.pageTitle': 'عطیات — قرآنِ پیروز',
    'donations.metaDescription': '«قرآنِ پیروز — اللہ کی کتاب» ایپ کا عطیات کا حصہ: خزانہ، جاری مہمات، عطیہ دہندگان اور اخراجات — براہِ راست اور خودکار طور پر تازہ۔',
    'donations.logoAlt': 'قرآنِ پیروز کا لوگو',
    'donations.back': 'واپس ›',
    'donations.heading': 'عطیات',
    'donations.loading': 'لوڈ ہو رہا ہے…',
    'donations.currency': 'IQD',
    'donations.treasuryLabel': 'ایپ کا موجودہ خزانہ',
    'donations.description': 'تفصیل',
    'donations.remaining': 'باقی: {amount}',
    'donations.target': 'ہدف: {amount}',
    'donations.fromTreasury': 'خزانے سے ادا شدہ: {amount}',
    'donations.howTitle': 'عطیہ کیسے دیں؟',
    'donations.howBody': 'آپ رقم دیے گئے نمبر پر FIB، Qi، Fastpay یا AsiaPay کے ذریعے بھیج سکتے ہیں۔ براہِ کرم رقم اور بھیجنے کا مقصد بھی لکھیں تاکہ اسے عطیہ کے طور پر درج کیا جا سکے۔',
    'donations.donors': 'عطیہ دہندگان',
    'donations.spontaneous': 'رضاکارانہ عطیات',
    'donations.spontaneousEmpty': 'اس مہینے کوئی رضاکارانہ عطیہ نہیں',
    'donations.monthLabel': 'مہینہ منتخب کریں',
    'donations.donorsTotals': 'عطیہ دہندگان (کل رقم کے ساتھ)',
    'donations.noDonations': 'کوئی عطیہ نہیں ملا',
    'donations.total': 'کل رقم',
    'donations.close': 'بند کریں',
    'donations.expenses': 'خزانے کے اخراجات',
    'donations.campaigns': 'مہمات',
    'donations.status.active': 'فعال',
    'donations.status.fulfilled': 'مکمل',
    'donations.status.ended': 'ختم ہو گئی',
    'donations.status.inactive': 'غیر فعال',
    'donations.status.upcoming': 'آنے والی',
    'donations.copied': 'نمبر کاپی ہو گیا۔',
    'donations.months': [
      'جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون',
      'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'
    ],

    'guide.title': 'ڈاؤن لوڈ سے پہلے یہ پڑھیں',
    'guide.lead': 'دو مختصر مراحل ہیں؛ ان کے بغیر ایپ کی انسٹالیشن کامیاب نہیں ہوگی۔',
    'guide.num1': '۱',
    'guide.num2': '۲',
    'guide.step1Title': 'پہلے ایپ کا پرانا ورژن ان انسٹال کریں',
    'guide.step1Body': 'اگر «قرآنِ پیروز» ایپ پہلے سے آپ کے فون پر موجود ہے تو سب سے پہلے اسے ہٹا دیں: اس کے آئیکن کو دبا کر رکھیں، پھر <span class="qp-ig-ui">Uninstall</span> منتخب کریں۔',
    'guide.step1Warn': 'دونوں ورژن کا پیکیج نام ایک ہی ہے، اس لیے اگر آپ نے پرانا ورژن نہ ہٹایا تو پیکیج کا تصادم <span class="qp-ig-ui">(package conflict)</span> پیش آتا ہے اور اینڈرائیڈ انسٹالیشن روک دیتا ہے — اکثر صرف <span class="qp-ig-ui">App not installed</span> کے پیغام کے ساتھ۔',
    'guide.step2Title': 'نامعلوم ذریعے سے انسٹال کرنے کی اجازت دیں',
    'guide.step2Body': 'ڈاؤن لوڈ مکمل ہونے کے بعد فائل کھولیں۔ اگر اینڈرائیڈ روک دے تو <span class="qp-ig-ui">Settings</span> پر جائیں اور جس براؤزر سے ڈاؤن لوڈ کیا ہے اسے ایپ انسٹال کرنے کی اجازت دیں، پھر واپس آ کر <span class="qp-ig-ui">Install</span> دبائیں۔',
    'guide.ppSummary': 'اگر «Play Protect» انسٹالیشن روک دے',
    'guide.ppIntro': '<span class="qp-ig-ui">Unsafe app blocked</span>، <span class="qp-ig-ui">Blocked by Play Protect</span> یا <span class="qp-ig-ui">App blocked to protect your device</span> کا مطلب یہ نہیں کہ ایپ نقصان دہ ہے — Play Protect ہر اُس ایپ کو "نامعلوم" شمار کرتا ہے جو Google Play سے ڈاؤن لوڈ نہ کی گئی ہو۔',
    'guide.ppLead': 'ان مراحل سے آپ اجازت دے سکتے ہیں:',
    'guide.pp1': '<span class="qp-ig-ui">Settings</span> کھولیں اور تلاش کے خانے میں <span class="qp-ig-ui">Play Protect</span> لکھیں۔',
    'guide.pp2': 'نتائج میں <span class="qp-ig-ui">Security and privacy</span> ← <span class="qp-ig-ui">App security</span> منتخب کریں۔',
    'guide.pp3': '<span class="qp-ig-ui">Google Play Protect</span> پر ٹیپ کریں۔',
    'guide.pp4': 'صفحے کے اوپر سیٹنگز کا آئیکن (⚙) دبائیں۔',
    'guide.pp5': 'دونوں سوئچ بند کر دیں: <span class="qp-ig-ui">Scan apps with Play Protect</span> اور <span class="qp-ig-ui">Improve harmful app detection</span>۔',
    'guide.pp6': 'ڈاؤن لوڈ کی گئی فائل پر واپس جائیں اور انسٹالیشن دوبارہ آزمائیں۔',
    'guide.pp7': 'انسٹالیشن مکمل ہونے کے بعد دونوں سوئچ دوبارہ آن کر دیں، تاکہ آپ کا فون محفوظ رہے۔',
    'guide.altBlocked': 'Google Play Protect کا ڈائیلاگ جس نے انسٹالیشن روک دی ہے',
    'guide.alt01': 'سیٹنگز میں Play Protect کی تلاش کے نتائج',
    'guide.alt02': 'App security کا صفحہ اور اس پر Google Play Protect کی جگہ',
    'guide.alt03': 'Play Protect کا صفحہ اور اوپر سیٹنگز کا آئیکن',
    'guide.alt04': 'Play Protect کے دونوں سیٹنگز سوئچ',
    'guide.ack': 'سمجھ گیا — ڈاؤن لوڈ شروع کریں',
    'guide.cancel': 'منسوخ کریں',
    'guide.ask': 'کیا آپ نے اوپر دی گئی ہدایات پڑھ لی ہیں؟',
    'guide.go': 'جی ہاں، شروع کریں',
    'guide.back': 'نہیں، پہلے پڑھوں گا',

    'test.pageTitle': 'اینڈرائیڈ گائیڈ کا ٹیسٹ — قرآنِ پیروز',
    'test.banner': '⚠️ یہ ٹیسٹ صفحہ ہے، اصل نہیں — اینڈرائیڈ موڈ زبردستی آن کیا گیا ہے تاکہ انسٹالیشن گائیڈ کمپیوٹر پر دیکھی جا سکے۔ اصل صفحہ <code>/index.html</code> ہے۔'
  };

  // ---- Arabic -------------------------------------------------------------------------------
  //
  // The month names are the Levantine/Iraqi set (كانون الثاني، شباط، آذار…) rather than the
  // Egyptian one, to match the Kurdish months this page already shows and the country the
  // donations themselves are counted in.

  STRINGS.ar = {
    'common.langGroup': 'اللغة',
    'common.appName': 'قرآني بيروز — كتاب الله',
    'common.appShort': 'قرآني بيروز',
    'common.logoAlt': 'شعار تطبيق قرآني بيروز',
    'common.download': 'تنزيل',
    'common.unsupported': 'هذا التطبيق متاح لنظامَي أندرويد و iOS فقط.',
    'common.footer': '© {year} قرآني بيروز — كتاب الله. جميع الحقوق محفوظة.',
    'common.footerLinked': '© {year} <a href="/">قرآني بيروز — كتاب الله</a>',

    'index.pageTitle': 'قرآني بيروز — كتاب الله',
    'index.metaDescription': 'تطبيق «قرآني بيروز — كتاب الله» للهواتف: رحلة فهم بين آيات القرآن باللغة الكردية — باللهجات الثلاث جميعها (السورانية والبادينية والهورامية)، مع ثلاثة عشر تفسيرًا كرديًا ومعجم لجذور ألفاظ القرآن.',
    'index.metaKeywords': 'القرآن, قرآني بيروز, القرآن بالكردية, تفسير, كتاب الله, سوراني, باديني, هورامي',
    'index.ogDescription': 'تطبيق للهواتف لرحلة فهم بين آيات القرآن باللغة الكردية',
    'index.description': 'يأخذك تطبيق «قرآني بيروز — كتاب الله» للهواتف في رحلة فهم بين آيات القرآن باللغة الكردية — باللهجات الثلاث جميعها: السورانية والبادينية والهورامية — مع ثلاثة عشر تفسيرًا كرديًا ومعجم لجذور ألفاظ القرآن.',
    'index.androidNote': 'على أندرويد: بعد التنزيل، اسمح بتثبيت التطبيق من مصدر غير معروف.',
    'index.donations': '🤍 تبرّع',

    'link.openHint': 'إذا كان التطبيق مثبتًا لديك، فالرابط يفتحه عادةً من تلقاء نفسه. وإن لم يحدث ذلك، فاضغط الزر أعلاه.',
    'link.brokenLabel': 'هذا الرابط لا يعمل',

    'ayat.pageTitle': 'آية — قرآني بيروز',
    'ayat.metaDescription': 'يفتح هذا الرابط هذه الآية مباشرةً في تطبيق «قرآني بيروز — كتاب الله».',
    'ayat.heading': 'شارَكك أحدهم آية',
    'ayat.subtitle': 'يفتح هذا الرابط الآية مباشرةً في التطبيق.',
    'ayat.targetLabel': 'السورة والآية',
    'ayat.openButton': 'افتح في التطبيق',
    'ayat.appNote': 'تطبيق «قرآني بيروز — كتاب الله» — القرآن باللغة الكردية، مع ثلاثة عشر تفسيرًا.',
    'ayat.suratLabel': 'سورة {ar}',
    'ayat.ayatLabel': 'الآية {n}',
    'ayat.docTitle': '{surat} {ayat} — قرآني بيروز',
    'ayat.broken': 'لم يُعثر على هذه الآية. ربما لم يُنسخ الرابط كاملًا.',

    'quiz.pageTitle': 'دعوة إلى مسابقة — قرآني بيروز',
    'quiz.metaDescription': 'دعوة إلى مسابقة قرآنية على الإنترنت في تطبيق «قرآني بيروز — كتاب الله».',
    'quiz.heading': 'دعوة إلى مسابقة قرآنية',
    'quiz.subtitle': 'دعاك صديق إلى مسابقة على الإنترنت. يأخذك هذا الرابط إليها مباشرةً — لا حاجة إلى كتابة الرمز.',
    'quiz.codeLabel': 'رمز المسابقة',
    'quiz.openButton': 'انضم إلى المسابقة',
    'quiz.note': 'ملاحظة: لا يمكن الانضمام إلى المسابقة إلا قبل بدئها. فإذا كان المضيف قد بدأها، فاطلب منه رمزًا جديدًا.',
    'quiz.docTitle': 'دعوة إلى مسابقة {code} — قرآني بيروز',
    'quiz.broken': 'تعذّرت قراءة رمز المسابقة. ربما لم يُنسخ الرابط كاملًا.',

    'donations.pageTitle': 'التبرعات — قرآني بيروز',
    'donations.metaDescription': 'قسم التبرعات في تطبيق «قرآني بيروز — كتاب الله»: الخزينة والحملات النشطة والمتبرعون والمصروفات — مباشرةً ومحدَّثة تلقائيًا.',
    'donations.logoAlt': 'شعار قرآني بيروز',
    'donations.back': 'رجوع ›',
    'donations.heading': 'التبرعات',
    'donations.loading': 'جارٍ التحميل…',
    'donations.currency': 'د.ع',
    'donations.treasuryLabel': 'خزينة التطبيق الحالية',
    'donations.description': 'التفاصيل',
    'donations.remaining': 'المتبقي: {amount}',
    'donations.target': 'الهدف: {amount}',
    'donations.fromTreasury': 'مغطّى من الخزينة: {amount}',
    'donations.howTitle': 'كيف تتبرّع؟',
    'donations.howBody': 'يمكنك إرسال المبلغ إلى الرقم المذكور عبر FIB أو Qi أو Fastpay أو AsiaPay. يُرجى كتابة المبلغ والغرض من الإرسال حتى يمكن تسجيله كتبرّع.',
    'donations.donors': 'المتبرعون',
    'donations.spontaneous': 'تبرعات تطوعية',
    'donations.spontaneousEmpty': 'لا توجد تبرعات تطوعية لهذا الشهر',
    'donations.monthLabel': 'اختر شهرًا',
    'donations.donorsTotals': 'المتبرعون (مع مجموع تبرعاتهم)',
    'donations.noDonations': 'لم يُعثر على أي تبرّع',
    'donations.total': 'المجموع',
    'donations.close': 'إغلاق',
    'donations.expenses': 'مصروفات الخزينة',
    'donations.campaigns': 'الحملات',
    'donations.status.active': 'نشطة',
    'donations.status.fulfilled': 'مكتملة',
    'donations.status.ended': 'انتهت',
    'donations.status.inactive': 'غير نشطة',
    'donations.status.upcoming': 'قادمة',
    'donations.copied': 'تم نسخ الرقم.',
    'donations.months': [
      'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران',
      'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'
    ],

    'guide.title': 'اقرأ هذا قبل التنزيل',
    'guide.lead': 'هناك خطوتان قصيرتان؛ وبدونهما لن ينجح تثبيت التطبيق.',
    'guide.num1': '١',
    'guide.num2': '٢',
    'guide.step1Title': 'احذف أولًا النسخة القديمة من التطبيق',
    'guide.step1Body': 'إذا كان تطبيق «قرآني بيروز» موجودًا على هاتفك، فاحذفه قبل كل شيء: اضغط مطوّلًا على أيقونته، ثم اختر <span class="qp-ig-ui">Uninstall</span> (إلغاء التثبيت).',
    'guide.step1Warn': 'تحمل النسختان اسم الحزمة نفسه، فإن لم تحذف القديمة واجه أندرويد تعارضًا في الحزمة <span class="qp-ig-ui">(package conflict)</span> وأوقف التثبيت — غالبًا برسالة <span class="qp-ig-ui">App not installed</span> وحدها.',
    'guide.step2Title': 'اسمح بالتثبيت من مصدر غير معروف',
    'guide.step2Body': 'بعد انتهاء التنزيل، افتح الملف. فإذا منعه أندرويد، فاضغط <span class="qp-ig-ui">Settings</span> واسمح للمتصفح الذي نزّلت به بتثبيت التطبيقات، ثم ارجع واضغط <span class="qp-ig-ui">Install</span>.',
    'guide.ppSummary': 'إذا منع «Play Protect» التثبيت',
    'guide.ppIntro': 'رسالة <span class="qp-ig-ui">Unsafe app blocked</span> أو <span class="qp-ig-ui">Blocked by Play Protect</span> أو <span class="qp-ig-ui">App blocked to protect your device</span> لا تعني أن التطبيق ضار — فـ Play Protect يَعُدّ كل تطبيق لم يُنزَّل من Google Play «غير معروف».',
    'guide.ppLead': 'تسمح بذلك بهذه الخطوات:',
    'guide.pp1': 'افتح <span class="qp-ig-ui">Settings</span> (الإعدادات) واكتب في خانة البحث <span class="qp-ig-ui">Play Protect</span>.',
    'guide.pp2': 'ومن النتائج اختر <span class="qp-ig-ui">Security and privacy</span> ← <span class="qp-ig-ui">App security</span>.',
    'guide.pp3': 'اضغط <span class="qp-ig-ui">Google Play Protect</span>.',
    'guide.pp4': 'في أعلى الصفحة، اضغط أيقونة الإعدادات (⚙).',
    'guide.pp5': 'أطفئ المفتاحين كليهما: <span class="qp-ig-ui">Scan apps with Play Protect</span> و<span class="qp-ig-ui">Improve harmful app detection</span>.',
    'guide.pp6': 'ارجع إلى الملف المنزَّل وأعد محاولة التثبيت.',
    'guide.pp7': 'وبعد انتهاء التثبيت، أعد تشغيل المفتاحين كليهما لتبقى حماية هاتفك.',
    'guide.altBlocked': 'مربع حوار Google Play Protect الذي أوقف التثبيت',
    'guide.alt01': 'نتائج البحث عن Play Protect في الإعدادات',
    'guide.alt02': 'صفحة App security وموضع Google Play Protect فيها',
    'guide.alt03': 'صفحة Play Protect وأيقونة الإعدادات في أعلاها',
    'guide.alt04': 'مفتاحا إعدادات Play Protect كلاهما',
    'guide.ack': 'فهمت — ابدأ التنزيل',
    'guide.cancel': 'إلغاء',
    'guide.ask': 'هل قرأت الإرشادات أعلاه؟',
    'guide.go': 'نعم، ابدأ',
    'guide.back': 'لا، سأقرأها',

    'test.pageTitle': 'اختبار دليل أندرويد — قرآني بيروز',
    'test.banner': '⚠️ هذه صفحة اختبار وليست الصفحة الحقيقية — فُرِض وضع أندرويد كي يمكن رؤية دليل التثبيت على الحاسوب. الصفحة الحقيقية هي <code>/index.html</code>.'
  };

  // ---- Persian ------------------------------------------------------------------------------
  //
  // Persian names the surats with their Arabic names, as Urdu does, so it needs no name table of
  // its own — QP_SURATS already carries them. The months are the Gregorian ones in Persian,
  // because the dates being labelled come out of the database as Gregorian.

  STRINGS.fa = {
    'common.langGroup': 'زبان',
    'common.appName': 'قرآنی پیروز — کتاب خدا',
    'common.appShort': 'قرآنی پیروز',
    'common.logoAlt': 'نشان برنامهٔ قرآنی پیروز',
    'common.download': 'دانلود',
    'common.unsupported': 'این برنامه تنها برای اندروید و iOS در دسترس است.',
    'common.footer': '© {year} قرآنی پیروز — کتاب خدا. همهٔ حقوق محفوظ است.',
    'common.footerLinked': '© {year} <a href="/">قرآنی پیروز — کتاب خدا</a>',

    'index.pageTitle': 'قرآنی پیروز — کتاب خدا',
    'index.metaDescription': 'برنامهٔ موبایل «قرآنی پیروز — کتاب خدا»: سفری برای فهم آیات قرآن به زبان کُردی — در هر سه گویش (سورانی، بادینی و هورامی)، همراه با سیزده تفسیر کُردی و فرهنگ ریشه‌های واژه‌های قرآنی.',
    'index.metaKeywords': 'قرآن, قرآنی پیروز, قرآن کُردی, تفسیر, کتاب خدا, سورانی, بادینی, هورامی',
    'index.ogDescription': 'برنامه‌ای موبایلی برای سفری در فهم آیات قرآن به زبان کُردی',
    'index.description': 'برنامهٔ موبایل «قرآنی پیروز — کتاب خدا» شما را به سفری برای فهم آیات قرآن به زبان کُردی می‌برد — در هر سه گویش: سورانی، بادینی و هورامی — همراه با سیزده تفسیر کُردی و فرهنگ ریشه‌های واژه‌های قرآنی.',
    'index.androidNote': 'در اندروید: پس از دانلود، اجازهٔ نصب برنامه از منبع ناشناس را بدهید.',
    'index.donations': '🤍 کمک مالی',

    'link.openHint': 'اگر برنامه را نصب کرده باشید، پیوند معمولاً خودش آن را باز می‌کند. اگر چنین نشد، دکمهٔ بالا را بزنید.',
    'link.brokenLabel': 'این پیوند کار نمی‌کند',

    'ayat.pageTitle': 'یک آیه — قرآنی پیروز',
    'ayat.metaDescription': 'این پیوند این آیه را مستقیم در برنامهٔ «قرآنی پیروز — کتاب خدا» باز می‌کند.',
    'ayat.heading': 'کسی آیه‌ای را با شما به اشتراک گذاشته است',
    'ayat.subtitle': 'این پیوند آیه را مستقیم در برنامه باز می‌کند.',
    'ayat.targetLabel': 'سوره و آیه',
    'ayat.openButton': 'باز کردن در برنامه',
    'ayat.appNote': 'برنامهٔ «قرآنی پیروز — کتاب خدا» — قرآن به زبان کُردی، با سیزده تفسیر.',
    'ayat.suratLabel': 'سورهٔ {ar}',
    'ayat.ayatLabel': 'آیهٔ {n}',
    'ayat.docTitle': '{surat} {ayat} — قرآنی پیروز',
    'ayat.broken': 'این آیه پیدا نشد. شاید پیوند به‌طور کامل کپی نشده باشد.',

    'quiz.pageTitle': 'دعوت به آزمون — قرآنی پیروز',
    'quiz.metaDescription': 'دعوت به آزمون آنلاین قرآن در برنامهٔ «قرآنی پیروز — کتاب خدا».',
    'quiz.heading': 'دعوت به آزمون قرآن',
    'quiz.subtitle': 'دوستی شما را به یک آزمون آنلاین دعوت کرده است. این پیوند شما را مستقیم به آزمون می‌برد — نیازی به نوشتن کد نیست.',
    'quiz.codeLabel': 'کد آزمون',
    'quiz.openButton': 'ورود به آزمون',
    'quiz.note': 'توجه: تنها پیش از آغاز آزمون می‌توان در آن شرکت کرد. اگر میزبان آن را آغاز کرده باشد، از او کد تازه‌ای بخواهید.',
    'quiz.docTitle': 'دعوت به آزمون {code} — قرآنی پیروز',
    'quiz.broken': 'کد آزمون خوانده نشد. شاید پیوند به‌طور کامل کپی نشده باشد.',

    'donations.pageTitle': 'کمک‌های مالی — قرآنی پیروز',
    'donations.metaDescription': 'بخش کمک‌های مالی برنامهٔ «قرآنی پیروز — کتاب خدا»: خزانه، کارزارهای فعال، یاری‌رسانان و هزینه‌ها — زنده و با به‌روزرسانی خودکار.',
    'donations.logoAlt': 'نشان قرآنی پیروز',
    'donations.back': 'بازگشت ›',
    'donations.heading': 'کمک‌های مالی',
    'donations.loading': 'در حال بارگذاری…',
    'donations.currency': 'IQD',
    'donations.treasuryLabel': 'خزانهٔ کنونی برنامه',
    'donations.description': 'توضیح',
    'donations.remaining': 'مانده: {amount}',
    'donations.target': 'هدف: {amount}',
    'donations.fromTreasury': 'پرداخت‌شده از خزانه: {amount}',
    'donations.howTitle': 'چگونه کمک کنیم؟',
    'donations.howBody': 'می‌توانید مبلغ را از راه FIB، Qi، Fastpay یا AsiaPay به شمارهٔ نشان‌داده‌شده بفرستید. لطفاً مبلغ و هدف از فرستادن را هم بنویسید تا بتوان آن را به‌عنوان کمک ثبت کرد.',
    'donations.donors': 'یاری‌رسانان',
    'donations.spontaneous': 'کمک‌های داوطلبانه',
    'donations.spontaneousEmpty': 'برای این ماه کمک داوطلبانه‌ای نیست',
    'donations.monthLabel': 'ماهی را برگزینید',
    'donations.donorsTotals': 'یاری‌رسانان (همراه با مجموع کمک‌هایشان)',
    'donations.noDonations': 'هیچ کمکی پیدا نشد',
    'donations.total': 'مجموع',
    'donations.close': 'بستن',
    'donations.expenses': 'هزینه‌های خزانه',
    'donations.campaigns': 'کارزارها',
    'donations.status.active': 'فعال',
    'donations.status.fulfilled': 'تکمیل‌شده',
    'donations.status.ended': 'پایان‌یافته',
    'donations.status.inactive': 'غیرفعال',
    'donations.status.upcoming': 'پیشِ رو',
    'donations.copied': 'شماره کپی شد.',
    'donations.months': [
      'ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن',
      'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'
    ],

    'guide.title': 'پیش از دانلود این را بخوانید',
    'guide.lead': 'دو گام کوتاه هست؛ بدون آن‌ها نصب برنامه موفق نمی‌شود.',
    'guide.num1': '۱',
    'guide.num2': '۲',
    'guide.step1Title': 'نخست نسخهٔ قدیمی برنامه را حذف کنید',
    'guide.step1Body': 'اگر برنامهٔ «قرآنی پیروز» از پیش روی گوشی شماست، پیش از هر کار آن را حذف کنید: انگشت را روی نماد آن نگه دارید، سپس <span class="qp-ig-ui">Uninstall</span> (حذف) را برگزینید.',
    'guide.step1Warn': 'هر دو نسخه نام بستهٔ یکسانی دارند، پس اگر نسخهٔ قدیمی را حذف نکنید اندروید با ناسازگاری بسته <span class="qp-ig-ui">(package conflict)</span> روبه‌رو می‌شود و نصب را متوقف می‌کند — بیشتر وقت‌ها تنها با پیام <span class="qp-ig-ui">App not installed</span>.',
    'guide.step2Title': 'اجازهٔ نصب از منبع ناشناس را بدهید',
    'guide.step2Body': 'پس از پایان دانلود، فایل را باز کنید. اگر اندروید جلوی آن را گرفت، <span class="qp-ig-ui">Settings</span> را بزنید و به مرورگری که با آن دانلود کرده‌اید اجازهٔ نصب برنامه بدهید، سپس بازگردید و <span class="qp-ig-ui">Install</span> را بزنید.',
    'guide.ppSummary': 'اگر «Play Protect» جلوی نصب را گرفت',
    'guide.ppIntro': 'پیام <span class="qp-ig-ui">Unsafe app blocked</span>، <span class="qp-ig-ui">Blocked by Play Protect</span> یا <span class="qp-ig-ui">App blocked to protect your device</span> به این معنا نیست که برنامه زیان‌بار است — Play Protect هر برنامه‌ای را که از Google Play دانلود نشده باشد «ناشناس» می‌شمارد.',
    'guide.ppLead': 'با این گام‌ها اجازه می‌دهید:',
    'guide.pp1': '<span class="qp-ig-ui">Settings</span> (تنظیمات) را باز کنید و در کادر جست‌وجو بنویسید <span class="qp-ig-ui">Play Protect</span>.',
    'guide.pp2': 'از میان نتیجه‌ها <span class="qp-ig-ui">Security and privacy</span> ← <span class="qp-ig-ui">App security</span> را برگزینید.',
    'guide.pp3': 'روی <span class="qp-ig-ui">Google Play Protect</span> بزنید.',
    'guide.pp4': 'در بالای صفحه، نماد تنظیمات (⚙) را بزنید.',
    'guide.pp5': 'هر دو کلید را خاموش کنید: <span class="qp-ig-ui">Scan apps with Play Protect</span> و <span class="qp-ig-ui">Improve harmful app detection</span>.',
    'guide.pp6': 'به فایل دانلودشده بازگردید و نصب را دوباره بیازمایید.',
    'guide.pp7': 'پس از پایان نصب، هر دو کلید را دوباره روشن کنید تا گوشی شما در امان بماند.',
    'guide.altBlocked': 'کادر گفت‌وگوی Google Play Protect که نصب را متوقف کرده است',
    'guide.alt01': 'نتیجه‌های جست‌وجوی Play Protect در تنظیمات',
    'guide.alt02': 'صفحهٔ App security و جای Google Play Protect در آن',
    'guide.alt03': 'صفحهٔ Play Protect و نماد تنظیمات در بالای آن',
    'guide.alt04': 'هر دو کلید تنظیمات Play Protect',
    'guide.ack': 'فهمیدم — دانلود را آغاز کن',
    'guide.cancel': 'انصراف',
    'guide.ask': 'آیا راهنمای بالا را خواندید؟',
    'guide.go': 'بله، آغاز کن',
    'guide.back': 'نه، می‌خوانمش',

    'test.pageTitle': 'آزمون راهنمای اندروید — قرآنی پیروز',
    'test.banner': '⚠️ این صفحهٔ آزمایشی است، نه صفحهٔ اصلی — حالت اندروید به‌زور روشن شده تا راهنمای نصب روی رایانه دیده شود. صفحهٔ اصلی <code>/index.html</code> است.'
  };

  // ---- Turkish ------------------------------------------------------------------------------
  //
  // Left to right, like English. Surat names follow the Turkish convention ("Bakara sûresi"),
  // which is a naming tradition of its own rather than a transliteration of the Arabic — see
  // QP_SURAT_NAMES_TR in surats.js.

  STRINGS.tr = {
    'common.langGroup': 'Dil',
    'common.appName': 'Qurany Piroz — Allah\'ın Kitabı',
    'common.appShort': 'Qurany Piroz',
    'common.logoAlt': 'Qurany Piroz uygulama logosu',
    'common.download': 'İndir',
    'common.unsupported': 'Bu uygulama yalnızca Android ve iOS için mevcuttur.',
    'common.footer': '© {year} Qurany Piroz — Allah\'ın Kitabı. Tüm hakları saklıdır.',
    'common.footerLinked': '© {year} <a href="/">Qurany Piroz — Allah\'ın Kitabı</a>',

    'index.pageTitle': 'Qurany Piroz — Allah\'ın Kitabı',
    'index.metaDescription': '“Qurany Piroz — Allah\'ın Kitabı” mobil uygulaması: Kürtçe Kur\'an âyetleri arasında bir anlama yolculuğu — üç lehçenin hepsinde (Sorani, Badini ve Hawrami), on üç Kürtçe tefsir ve Kur\'an kelimelerinin kök sözlüğü ile.',
    'index.metaKeywords': 'Kuran, Qurany Piroz, Kürtçe Kuran, tefsir, Allah\'ın Kitabı, Sorani, Badini, Hawrami',
    'index.ogDescription': 'Kürtçe Kur\'an âyetleri arasında bir anlama yolculuğu için mobil uygulama',
    'index.description': '“Qurany Piroz — Allah\'ın Kitabı” mobil uygulaması sizi Kürtçe Kur\'an âyetleri arasında bir anlama yolculuğuna çıkarır — üç lehçenin hepsinde: Sorani, Badini ve Hawrami — on üç Kürtçe tefsir ve Kur\'an kelimelerinin kök sözlüğü ile.',
    'index.androidNote': 'Android\'de: indirdikten sonra uygulamanın bilinmeyen kaynaktan yüklenmesine izin verin.',
    'index.donations': '🤍 Bağış',

    'link.openHint': 'Uygulama zaten kuruluysa bağlantı normalde onu kendisi açar. Bu olmadıysa yukarıdaki düğmeye dokunun.',
    'link.brokenLabel': 'Bu bağlantı çalışmıyor',

    'ayat.pageTitle': 'Bir âyet — Qurany Piroz',
    'ayat.metaDescription': 'Bu bağlantı bu âyeti doğrudan “Qurany Piroz — Allah\'ın Kitabı” uygulamasında açar.',
    'ayat.heading': 'Sizinle bir âyet paylaşıldı',
    'ayat.subtitle': 'Bu bağlantı âyeti doğrudan uygulamada açar.',
    'ayat.targetLabel': 'Sûre ve âyet',
    'ayat.openButton': 'Uygulamada aç',
    'ayat.appNote': '“Qurany Piroz — Allah\'ın Kitabı” uygulaması — on üç tefsirle birlikte Kürtçe Kur\'an.',
    'ayat.suratLabel': '{tr} sûresi ({ar})',
    'ayat.ayatLabel': '{n}. âyet',
    'ayat.docTitle': '{surat} {ayat} — Qurany Piroz',
    'ayat.broken': 'Bu âyet bulunamadı. Bağlantı tam olarak kopyalanmamış olabilir.',

    'quiz.pageTitle': 'Sınav daveti — Qurany Piroz',
    'quiz.metaDescription': '“Qurany Piroz — Allah\'ın Kitabı” uygulamasındaki çevrim içi Kur\'an sınavına davet.',
    'quiz.heading': 'Kur\'an sınavı daveti',
    'quiz.subtitle': 'Bir arkadaşınız sizi çevrim içi bir sınava davet etti. Bu bağlantı sizi doğrudan sınava götürür — kodu yazmanıza gerek yok.',
    'quiz.codeLabel': 'Sınav kodu',
    'quiz.openButton': 'Sınava katıl',
    'quiz.note': 'Not: Bir sınava yalnızca başlamadan önce katılabilirsiniz. Düzenleyen kişi sınavı çoktan başlattıysa ondan yeni bir kod isteyin.',
    'quiz.docTitle': 'Sınav daveti {code} — Qurany Piroz',
    'quiz.broken': 'Sınav kodu okunamadı. Bağlantı tam olarak kopyalanmamış olabilir.',

    'donations.pageTitle': 'Bağışlar — Qurany Piroz',
    'donations.metaDescription': '“Qurany Piroz — Allah\'ın Kitabı” uygulamasının bağış bölümü: kasa, etkin kampanyalar, bağışçılar ve giderler — canlı ve otomatik güncellenir.',
    'donations.logoAlt': 'Qurany Piroz logosu',
    'donations.back': '‹ Geri',
    'donations.heading': 'Bağışlar',
    'donations.loading': 'Yükleniyor…',
    'donations.currency': 'IQD',
    'donations.treasuryLabel': 'Uygulamanın mevcut kasası',
    'donations.description': 'Ayrıntılar',
    'donations.remaining': 'Kalan: {amount}',
    'donations.target': 'Hedef: {amount}',
    'donations.fromTreasury': 'Kasadan karşılanan: {amount}',
    'donations.howTitle': 'Nasıl bağış yapılır?',
    'donations.howBody': 'Tutarı, gösterilen numaraya FIB, Qi, Fastpay veya AsiaPay üzerinden gönderebilirsiniz. Bağış olarak kaydedilebilmesi için lütfen tutarı ve gönderme amacını da yazın.',
    'donations.donors': 'Bağışçılar',
    'donations.spontaneous': 'Gönüllü bağışlar',
    'donations.spontaneousEmpty': 'Bu ay için gönüllü bağış yok',
    'donations.monthLabel': 'Bir ay seçin',
    'donations.donorsTotals': 'Bağışçılar (toplamlarıyla birlikte)',
    'donations.noDonations': 'Bağış bulunamadı',
    'donations.total': 'Toplam',
    'donations.close': 'Kapat',
    'donations.expenses': 'Kasa giderleri',
    'donations.campaigns': 'Kampanyalar',
    'donations.status.active': 'Aktif',
    'donations.status.fulfilled': 'Tamamlandı',
    'donations.status.ended': 'Sona erdi',
    'donations.status.inactive': 'Pasif',
    'donations.status.upcoming': 'Yaklaşan',
    'donations.copied': 'Numara kopyalandı.',
    'donations.months': [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ],

    'guide.title': 'İndirmeden önce bunu okuyun',
    'guide.lead': 'İki kısa adım var; bunlar olmadan kurulum başarılı olmaz.',
    'guide.num1': '1',
    'guide.num2': '2',
    'guide.step1Title': 'Önce uygulamanın eski sürümünü kaldırın',
    'guide.step1Body': '“Qurany Piroz” telefonunuzda zaten varsa her şeyden önce onu kaldırın: simgesine basılı tutun, sonra <span class="qp-ig-ui">Uninstall</span> (Kaldır) seçeneğini seçin.',
    'guide.step1Warn': 'Her iki sürüm de aynı paket adını taşır; eskisini kaldırmazsanız Android bir <span class="qp-ig-ui">package conflict</span> ile karşılaşır ve kurulumu durdurur — çoğu zaman yalnızca <span class="qp-ig-ui">App not installed</span> mesajıyla.',
    'guide.step2Title': 'Bilinmeyen kaynaktan kuruluma izin verin',
    'guide.step2Body': 'İndirme bittiğinde dosyayı açın. Android engellerse <span class="qp-ig-ui">Settings</span> düğmesine dokunun ve indirme yaptığınız tarayıcıya uygulama kurma izni verin, sonra geri dönüp <span class="qp-ig-ui">Install</span> düğmesine dokunun.',
    'guide.ppSummary': 'Play Protect kurulumu engellerse',
    'guide.ppIntro': '<span class="qp-ig-ui">Unsafe app blocked</span>, <span class="qp-ig-ui">Blocked by Play Protect</span> veya <span class="qp-ig-ui">App blocked to protect your device</span> mesajı uygulamanın zararlı olduğu anlamına gelmez — Play Protect, Google Play\'den indirilmemiş her uygulamayı “bilinmeyen” sayar.',
    'guide.ppLead': 'Şu adımlarla izin verirsiniz:',
    'guide.pp1': '<span class="qp-ig-ui">Settings</span> (Ayarlar) uygulamasını açın ve arama kutusuna <span class="qp-ig-ui">Play Protect</span> yazın.',
    'guide.pp2': 'Sonuçlardan <span class="qp-ig-ui">Security and privacy</span> → <span class="qp-ig-ui">App security</span> seçin.',
    'guide.pp3': '<span class="qp-ig-ui">Google Play Protect</span> öğesine dokunun.',
    'guide.pp4': 'Sayfanın üstünde ayarlar simgesine (⚙) dokunun.',
    'guide.pp5': 'Her iki anahtarı da kapatın: <span class="qp-ig-ui">Scan apps with Play Protect</span> ve <span class="qp-ig-ui">Improve harmful app detection</span>.',
    'guide.pp6': 'İndirilen dosyaya geri dönüp kurulumu yeniden deneyin.',
    'guide.pp7': 'Kurulum bittikten sonra, telefonunuz korunmaya devam etsin diye her iki anahtarı da yeniden açın.',
    'guide.altBlocked': 'Kurulumu durduran Google Play Protect iletişim kutusu',
    'guide.alt01': 'Ayarlarda Play Protect arama sonuçları',
    'guide.alt02': 'App security sayfası ve Google Play Protect\'in oradaki yeri',
    'guide.alt03': 'Play Protect sayfası ve üstündeki ayarlar simgesi',
    'guide.alt04': 'Play Protect ayarlarının her iki anahtarı',
    'guide.ack': 'Anladım — indirmeyi başlat',
    'guide.cancel': 'Vazgeç',
    'guide.ask': 'Yukarıdaki yönergeleri okudunuz mu?',
    'guide.go': 'Evet, başlat',
    'guide.back': 'Hayır, okuyayım',

    'test.pageTitle': 'Android kılavuz testi — Qurany Piroz',
    'test.banner': '⚠️ Bu bir test sayfasıdır, gerçek sayfa değil — kurulum kılavuzu bilgisayarda görülebilsin diye Android modu zorlanmıştır. Gerçek sayfa <code>/index.html</code>.'
  };

  // ---- Lookup -------------------------------------------------------------------------------

  var current = detect();

  // {year} is filled in everywhere without a caller having to pass it — every footer on the site
  // wants it and nothing else ever wants a different one. Any other placeholder that has no
  // matching parameter is left as written rather than blanked, so a missing one is visible in
  // testing instead of silently swallowed.
  function t(key, params) {
    var value = STRINGS[current][key];
    if (value === undefined) value = STRINGS[DEFAULT_LANG][key];
    if (value === undefined) return key;
    if (typeof value !== 'string') return value;

    return value.replace(/\{(\w+)\}/g, function (whole, name) {
      if (params && params[name] !== undefined) return params[name];
      if (name === 'year') return new Date().getFullYear();
      return whole;
    });
  }

  // "٢٥٥" in Kurdish, "۲۵۵" in Urdu, "255" in English — the app itself writes numbers in the
  // reader's own numerals, and these pages are the same text in a different place.
  function digits(value) {
    var set = LANGS[current].digits;
    if (!set) return String(value);
    return String(value).replace(/[0-9]/g, function (d) { return set[Number(d)]; });
  }

  // ---- Applying it to a page ------------------------------------------------------------------
  //
  // Three attributes, so a page says what it wants translated without any of the strings above
  // having to know about the page:
  //
  //   data-i18n="key"                    replaces the element's text
  //   data-i18n-html="key"               replaces its markup, for strings with inline tags
  //   data-i18n-attr="alt:key;title:key" writes attributes — meta content, alt text, aria labels
  //
  // The Kurdish original stays in the markup underneath all three, so the page is complete
  // before this ever runs.

  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  function apply(root) {
    var scope = root || document;

    each(scope.querySelectorAll('[data-i18n]'), function (element) {
      element.textContent = t(element.getAttribute('data-i18n'));
    });

    each(scope.querySelectorAll('[data-i18n-html]'), function (element) {
      element.innerHTML = t(element.getAttribute('data-i18n-html'));
    });

    each(scope.querySelectorAll('[data-i18n-attr]'), function (element) {
      element.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var colon = pair.indexOf(':');
        if (colon < 1) return;
        element.setAttribute(pair.slice(0, colon).trim(), t(pair.slice(colon + 1).trim()));
      });
    });

    renderSwitchers(scope);
    uncloak();
  }

  function applyDocumentLanguage() {
    var root = document.documentElement;
    root.setAttribute('lang', current);
    root.setAttribute('dir', LANGS[current].dir);
  }

  // ---- The switcher ---------------------------------------------------------------------------
  //
  // Rendered into any <div class="qp-lang-bar"> a page puts on itself, so placement stays each
  // page's own business — under the header on the donations page, above the logo everywhere
  // else — while the control itself is defined once.

  var SWITCHER_CSS = [
    '.qp-lang-bar { display: flex; justify-content: center; padding: 16px 20px 0; }',
    '.qp-lang-bar:empty { display: none; }',

    '.qp-lang-switch {',
    '  position: relative;',
    '  display: inline-flex;',
    '  align-items: center;',
    '  border-radius: 999px;',
    '  background: var(--surface, #FFFFFF);',
    '  border: 1px solid var(--border, rgba(29, 34, 49, 0.14));',
    '}',

    // A globe at the leading edge and a chevron at the trailing one, both drawn rather than
    // fetched, and both transparent to the pointer so the whole pill is the select's own
    // hit area. Logical inset properties, so they swap ends by themselves in English and
    // Turkish without a second rule.
    '.qp-lang-switch::before {',
    '  content: "🌐";',
    '  position: absolute;',
    '  inset-inline-start: 12px;',
    '  top: 50%;',
    '  transform: translateY(-50%);',
    '  font-size: 12px;',
    '  line-height: 1;',
    '  opacity: 0.75;',
    '  pointer-events: none;',
    '}',

    '.qp-lang-switch::after {',
    '  content: "";',
    '  position: absolute;',
    '  inset-inline-end: 14px;',
    '  top: 50%;',
    '  width: 6px;',
    '  height: 6px;',
    '  margin-top: -5px;',
    '  border-right: 2px solid var(--muted, #5B6272);',
    '  border-bottom: 2px solid var(--muted, #5B6272);',
    '  transform: rotate(45deg);',
    '  pointer-events: none;',
    '}',

    // A real <select>, not a custom popover: six languages is where a row of pills stops
    // fitting a phone, and the native control brings its own keyboard handling, its own
    // dismissal, and the system picker on iOS and Android — none of which a hand-built menu
    // gets right for free.
    '.qp-lang-select {',
    '  -webkit-appearance: none;',
    '  appearance: none;',
    '  margin: 0;',
    '  border: 0;',
    '  border-radius: 999px;',
    '  background: transparent;',
    '  color: var(--text, #1D2231);',
    '  font-family: inherit;',
    '  font-size: 13px;',
    '  font-weight: 600;',
    '  line-height: 1.5;',
    '  padding-block: 7px;',
    '  padding-inline-start: 32px;',
    '  padding-inline-end: 30px;',
    '  cursor: pointer;',
    '}',

    // Chrome and Firefox on Linux and Windows draw the open list on the page's own canvas,
    // which in dark mode is otherwise black text on black.
    '.qp-lang-select option {',
    '  background: var(--surface, #FFFFFF);',
    '  color: var(--text, #1D2231);',
    '}',

    '.qp-lang-select:focus-visible {',
    '  outline: 2px solid var(--brand, #A97D19);',
    '  outline-offset: 2px;',
    '}'
  ].join('\n');

  // Built once and then kept in step, rather than replaced on every language change: replacing
  // it would destroy the very <select> whose change event is being handled, and take the
  // reader's focus with it.
  var SWITCHER_OPTIONS = ORDER.map(function (code) {
    // lang= on each option so the system picker renders every name in a font that suits it.
    return '<option value="' + code + '" lang="' + code + '">' + LANGS[code].label + '</option>';
  }).join('');

  function renderSwitchers(root) {
    var scope = root || document;

    each(scope.querySelectorAll('.qp-lang-bar'), function (bar) {
      var select = bar.querySelector('.qp-lang-select');
      if (!select) {
        bar.innerHTML = '<div class="qp-lang-switch">' +
          '<select class="qp-lang-select">' + SWITCHER_OPTIONS + '</select></div>';
        select = bar.querySelector('.qp-lang-select');
      }
      select.value = current;
      select.setAttribute('aria-label', t('common.langGroup'));
    });
  }

  // Delegated, so a bar that appears later — or is re-rendered by its page — is still wired.
  document.addEventListener('change', function (event) {
    var target = event.target;
    if (target && target.classList && target.classList.contains('qp-lang-select')) {
      setLang(target.value);
    }
  });

  function setLang(lang) {
    if (!LANGS[lang]) return;
    current = lang;
    QPI18n.lang = lang;
    QPI18n.dir = LANGS[lang].dir;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      // Private browsing: the choice holds for this page, it just won't be remembered.
    }

    applyDocumentLanguage();
    if (lang === 'ur') loadUrduFont();
    apply();

    // Everything that draws its own text from t() rather than from a data-i18n attribute — the
    // donations page's cards, the deep-link pages' verse reference — redraws on this.
    document.dispatchEvent(new CustomEvent('qp:langchange', { detail: { lang: lang } }));
  }

  // ---- Start ------------------------------------------------------------------------------------

  var head = document.head || document.documentElement;

  var style = document.createElement('style');
  style.textContent = SWITCHER_CSS + '\n' + URDU_FONT_CSS;
  head.appendChild(style);

  applyDocumentLanguage();
  if (current === 'ur') loadUrduFont();

  // Every page is authored in Kurdish, so a Kurdish reader is already looking at the finished
  // page and nothing needs hiding. Anyone else would otherwise see a frame or two of Kurdish
  // before apply() runs, which reads as a glitch — so the body is held back until then, with a
  // timer as the way out if the script somehow never gets that far.
  var cloak = null;
  if (current !== DEFAULT_LANG) {
    cloak = document.createElement('style');
    cloak.textContent = 'body { visibility: hidden; }';
    head.appendChild(cloak);
    window.setTimeout(uncloak, 2000);
  }

  function uncloak() {
    if (!cloak) return;
    if (cloak.parentNode) cloak.parentNode.removeChild(cloak);
    cloak = null;
  }

  var QPI18n = window.QPI18n = {
    lang: current,
    dir: LANGS[current].dir,
    languages: ORDER,
    t: t,
    digits: digits,
    apply: apply,
    set: setLang,

    /// Month names for the donations page's month picker, in the current language.
    months: function () {
      return t('donations.months');
    },

    /// Registers `fn` to run on every language change — what a page uses when its own content
    /// is built in JavaScript rather than marked up with data-i18n attributes. It fires after
    /// the data-i18n pass, so a page can overwrite something that pass just wrote.
    onChange: function (fn) {
      document.addEventListener('qp:langchange', fn);
      return fn;
    }
  };

  // The pages load this from <head>, so the body they translate does not exist yet. Scripts at
  // the end of a page run before this fires, which is what lets the Android install sheet be
  // built out of data-i18n markup and picked up here along with everything else.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(); });
  } else {
    apply();
  }
})();
