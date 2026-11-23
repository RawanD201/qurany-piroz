// Google's "Get it on Google Play" badge, in this page's language where Google makes one.
//
// The badge is Google's own artwork, used the way Google's badge page hands it out: hot-linked from
// play.google.com, unaltered, and linking to the app's Play listing. Google has a badge for most of
// this site's languages but none for Kurdish or Syriac, so those readers get the English one.
// Every <img class="play-badge"> on the page is kept in step with the language picker.

(function () {
  'use strict';

  var BASE = 'https://play.google.com/intl/en_us/badges/static/images/badges/';

  // This site's language code -> the code in Google's badge file names (Hebrew is still "iw" there).
  var BADGE = {
    ar: 'ar', fa: 'fa', tr: 'tr', ur: 'ur', he: 'iw',
    de: 'de', fr: 'fr', es: 'es', sv: 'sv', ru: 'ru',
    hi: 'hi', bn: 'bn', ms: 'ms', 'zh-Hans': 'zh-cn', ja: 'ja'
  };

  function update() {
    var lang = (window.QPI18n && window.QPI18n.lang) || 'ckb';
    var src = BASE + (BADGE[lang] || 'en') + '_badge_web_generic.png';
    var badges = document.querySelectorAll('img.play-badge');
    for (var i = 0; i < badges.length; i++) {
      if (badges[i].getAttribute('src') !== src) badges[i].setAttribute('src', src);
    }
  }

  update();
  if (window.QPI18n && window.QPI18n.onChange) window.QPI18n.onChange(update);
})();
