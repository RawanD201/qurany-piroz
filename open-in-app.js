// Shared behaviour for the two landing pages that a shared link falls back to.
//
// A reader only ever sees these pages when the app did NOT take the link:
//
//   * they don't have the app installed (the common case — this is the page that tells them
//     where to get it, and what the link was pointing at so it wasn't wasted),
//   * they are on a desktop,
//   * or the link was opened somewhere Universal Links / App Links don't fire: an in-app
//     browser inside a chat app, a link the user long-pressed and chose "open in browser"
//     for, or the first tap after installing but before iOS has fetched the association.
//
// That last group DOES have the app, so every page offers one button that hands the same
// destination to the app through the quranipiroz:// custom scheme, which needs no
// association and always works when the app is there.
//
// Nothing here redirects on its own. On iOS a custom-scheme navigation to an app that isn't
// installed puts up a "cannot open the page" alert, and the overwhelmingly likely reason
// somebody is reading this page at all is that they don't have the app — so the attempt is
// left to a deliberate tap. Android is the exception: an intent:// URL with a
// browser_fallback_url can't fail visibly, Chrome just stays on the page.

(function () {
  'use strict';

  var ANDROID_PACKAGE = 'com.alandkawaali.qurani_piroz_partuki_xwda';
  var SCHEME = 'quranipiroz';

  var isAndroid = /android/i.test(navigator.userAgent);
  // The iPadOS 13+ half of this ("reports itself as a Mac, but has touch points") also
  // matches a desktop browser emulating a phone, so an explicit Android UA wins over it —
  // otherwise both download buttons get hidden and the reader is offered nothing.
  var isIOS = !isAndroid && (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );

  // "٢٥٥" rather than "255": every number the app itself shows a reader is in Arabic-Indic
  // digits, and this page is the same text in a different place.
  function toArabicDigits(value) {
    return String(value).replace(/[0-9]/g, function (d) {
      return '٠١٢٣٤٥٦٧٨٩'[Number(d)];
    });
  }

  // The path is the whole payload — /ayat/2/255, /quiz/K7F2 — so a link survives being
  // copied, pasted and re-shared without a query string anything might strip.
  function pathSegments() {
    return window.location.pathname.split('/').filter(function (part) {
      return part.length > 0;
    }).map(decodeURIComponent);
  }

  // Android's intent: syntax, which falls back to the browser URL instead of erroring when
  // the app is absent. Everywhere else the plain custom scheme.
  function appUrl(schemeUrl) {
    if (!isAndroid) return schemeUrl;
    var withoutScheme = schemeUrl.slice(SCHEME.length + 3); // strip "quranipiroz://"
    return 'intent://' + withoutScheme +
      '#Intent;scheme=' + SCHEME +
      ';package=' + ANDROID_PACKAGE +
      ';S.browser_fallback_url=' + encodeURIComponent(window.location.href) +
      ';end';
  }

  // Only the platform's own store/download button is worth showing: an iPhone reader has no
  // use for an APK, and an Android reader has none for an App Store page. Desktop readers
  // get both, since we have no idea which phone they'll install it on.
  function showRelevantDownload() {
    var ios = document.getElementById('ios-btn');
    var android = document.getElementById('android-btn');
    if (isIOS && android) android.hidden = true;
    if (isAndroid && ios) ios.hidden = true;
  }

  window.QPDeepLink = {
    isAndroid: isAndroid,
    isIOS: isIOS,
    toArabicDigits: toArabicDigits,
    pathSegments: pathSegments,

    // Wires the "open in the app" button to a quranipiroz:// destination.
    //
    // Hidden outside iOS and Android along with its hint: there is no app to hand the link to
    // on a desktop, and a button that visibly does nothing is worse than no button. What a
    // desktop reader wants is the reference itself and the download links, which stay.
    wireOpenButton: function (schemeUrl) {
      var button = document.getElementById('open-btn');
      if (!button) return;

      if (!isIOS && !isAndroid) {
        button.hidden = true;
        var hint = document.getElementById('open-hint');
        if (hint) hint.hidden = true;
        return;
      }

      button.href = appUrl(schemeUrl);
    },

    // Replaces the whole card with a plain explanation when the link itself is unusable —
    // a truncated URL, a surat that doesn't exist, a verse number past the end of its surat.
    showBroken: function (message) {
      var card = document.getElementById('target-card');
      if (card) {
        card.innerHTML = '<p class="target-label">بەستەرەکە کارا نییە</p>' +
          '<p class="target-value error"></p>';
        card.querySelector('.target-value').textContent = message;
      }
      var open = document.getElementById('open-btn');
      if (open) open.hidden = true;
      var hint = document.getElementById('open-hint');
      if (hint) hint.hidden = true;
    },

    init: function () {
      showRelevantDownload();
      var year = document.getElementById('year');
      if (year) year.textContent = new Date().getFullYear();
    }
  };
})();
