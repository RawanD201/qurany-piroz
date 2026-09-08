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
//      computer's location setting. Pakistan -> Urdu, the UK/US and the rest of the mainly
//      English-speaking countries -> English, Iraq/Iran/Syria/Turkey -> Kurdish.
//   4. The browser's own language list, for a location the map above doesn't name.
//   5. Kurdish.
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

  // Switcher order, left to right, and fixed regardless of which language is showing so the
  // buttons don't move under the reader's finger when they tap one.
  var ORDER = ['ckb', 'en', 'ur'];

  var LANGS = {
    // Endonyms — a language is always offered in its own name, so a reader who can't read the
    // current one can still find theirs.
    ckb: { label: 'کوردی', dir: 'rtl', digits: '٠١٢٣٤٥٦٧٨٩' },
    en:  { label: 'English', dir: 'ltr', digits: null },
    // Urdu writes its numerals with the extended Arabic-Indic set (۰۱۲…), not the ٠١٢… that
    // Kurdish and Arabic use — different code points for the same digits.
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
  // actually on Urdu — a Kurdish or English visitor never fetches it.
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

  // Only the countries whose answer we actually know. Everything else falls through to the
  // browser's language list, which is a better guess than any default we could pick here.
  var COUNTRY_LANG = {
    PK: 'ur',
    GB: 'en', US: 'en', IE: 'en', CA: 'en', AU: 'en', NZ: 'en', ZA: 'en',
    // Where Kurdish is spoken — the app's home audience, and already the site's default, but
    // named here so a Kurdish reader whose browser is set to English still lands on Kurdish.
    IQ: 'ckb', IR: 'ckb', SY: 'ckb', TR: 'ckb'
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
    'Europe/Istanbul': 'TR', 'Asia/Istanbul': 'TR'
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

  // "ur-PK" -> ur, "en-GB" -> en, "ckb-IQ"/"ku" -> ckb. Anything else is skipped rather than
  // guessed at, so a reader whose first language the site doesn't have still gets their second.
  function langFromNavigator() {
    var tags = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

    for (var i = 0; i < tags.length; i++) {
      var tag = String(tags[i]).toLowerCase();
      if (tag.indexOf('ur') === 0) return 'ur';
      if (tag.indexOf('en') === 0) return 'en';
      if (tag.indexOf('ckb') === 0 || tag.indexOf('ku') === 0) return 'ckb';
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
    if (country && COUNTRY_LANG[country]) return COUNTRY_LANG[country];

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
    'donations.howTitle': 'چۆن ببەخشیت؟',
    'donations.howBody': 'دەتوانیت بڕی پارەکە بنێریت بۆ ژمارەی دیاریکراو لە ڕێگەی FIB، Qi یان Fastpayـەوە. تکایە بڕی پارەکە و مەبەستی ناردنەکە بنووسە تاوەکو بتوانرێت وەک بەخشین تۆمار بکرێت.',
    'donations.donors': 'بەخشەران',
    'donations.spontaneous': 'بەخشینی خۆبەخشانە',
    'donations.spontaneousEmpty': 'هیچ بەخشینێکی خۆبەخشانە نییە بۆ ئەم مانگە',
    'donations.monthLabel': 'مانگ هەڵبژێرە',
    'donations.donorsTotals': 'بەخشەران (بە کۆی بەخشینەکانیشیانەوە)',
    'donations.noDonations': 'هیچ بەخشینێک نەدۆزرایەوە',
    'donations.total': 'کۆی گشتی',
    'donations.close': 'داخستن',
    'donations.expenses': 'خەرجییەکانی خەزێنە',
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
    'donations.howTitle': 'How to donate',
    'donations.howBody': 'You can send the amount to the number shown, through FIB, Qi or Fastpay. Please note the amount and the purpose of the transfer, so it can be recorded as a donation.',
    'donations.donors': 'Donors',
    'donations.spontaneous': 'Spontaneous donations',
    'donations.spontaneousEmpty': 'No spontaneous donations for this month',
    'donations.monthLabel': 'Choose a month',
    'donations.donorsTotals': 'Donors (with their totals)',
    'donations.noDonations': 'No donations found',
    'donations.total': 'Total',
    'donations.close': 'Close',
    'donations.expenses': 'Treasury expenses',
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
    'donations.howTitle': 'عطیہ کیسے دیں؟',
    'donations.howBody': 'آپ رقم دیے گئے نمبر پر FIB، Qi یا Fastpay کے ذریعے بھیج سکتے ہیں۔ براہِ کرم رقم اور بھیجنے کا مقصد بھی لکھیں تاکہ اسے عطیہ کے طور پر درج کیا جا سکے۔',
    'donations.donors': 'عطیہ دہندگان',
    'donations.spontaneous': 'رضاکارانہ عطیات',
    'donations.spontaneousEmpty': 'اس مہینے کوئی رضاکارانہ عطیہ نہیں',
    'donations.monthLabel': 'مہینہ منتخب کریں',
    'donations.donorsTotals': 'عطیہ دہندگان (کل رقم کے ساتھ)',
    'donations.noDonations': 'کوئی عطیہ نہیں ملا',
    'donations.total': 'کل رقم',
    'donations.close': 'بند کریں',
    'donations.expenses': 'خزانے کے اخراجات',
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
    '  display: inline-flex;',
    '  gap: 2px;',
    '  padding: 3px;',
    '  border-radius: 999px;',
    // Fixed left-to-right so the three buttons keep the same order in every language and none
    // of them moves under the finger of the reader who just tapped it.
    '  direction: ltr;',
    '  background: var(--surface, #FFFFFF);',
    '  border: 1px solid var(--border, rgba(29, 34, 49, 0.14));',
    '}',

    '.qp-lang-switch button {',
    '  -webkit-appearance: none;',
    '  appearance: none;',
    '  margin: 0;',
    '  border: 0;',
    '  padding: 6px 14px;',
    '  border-radius: 999px;',
    '  background: transparent;',
    '  color: var(--muted, #5B6272);',
    '  font-family: inherit;',
    '  font-size: 13px;',
    '  font-weight: 600;',
    '  line-height: 1.5;',
    '  cursor: pointer;',
    '  transition: background 0.15s ease, color 0.15s ease;',
    '}',

    '.qp-lang-switch button:hover { color: var(--text, #1D2231); }',
    '.qp-lang-switch button[aria-pressed="true"] {',
    '  background: var(--brand, #A97D19);',
    '  color: var(--on-brand, #FFFFFF);',
    '}',
    '.qp-lang-switch button:focus-visible {',
    '  outline: 2px solid var(--brand, #A97D19);',
    '  outline-offset: 2px;',
    '}',

    '@media (prefers-reduced-motion: reduce) {',
    '  .qp-lang-switch button { transition: none; }',
    '}'
  ].join('\n');

  function renderSwitchers(root) {
    var scope = root || document;
    var bars = scope.querySelectorAll('.qp-lang-bar');
    if (!bars.length) return;

    var buttons = ORDER.map(function (code) {
      return '<button type="button" data-qp-lang="' + code + '" lang="' + code + '" ' +
        'aria-pressed="' + (code === current) + '">' + LANGS[code].label + '</button>';
    }).join('');

    each(bars, function (bar) {
      bar.innerHTML = '<div class="qp-lang-switch" role="group" aria-label="' +
        t('common.langGroup') + '">' + buttons + '</div>';
    });
  }

  // One delegated listener rather than one per button: the switcher re-renders itself on every
  // language change, and listeners bound to the old buttons would go with them.
  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var button = target.closest('[data-qp-lang]');
    if (button) setLang(button.getAttribute('data-qp-lang'));
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
