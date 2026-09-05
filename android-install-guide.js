// The dialog that holds the APK download back for a moment on Android.
//
// The gap between tapping "دابارکردن" and having the app running is where this site loses
// people, and for two reasons the web page can't see and Android explains badly:
//
//   * an older build of the app is still installed, and because both builds carry the same
//     package name Android refuses the new APK as a package conflict — a bare "App not
//     installed" on most phones, with the fix (uninstall the old one first) nowhere in it, and
//   * Play Protect blocks the install outright, because the APK is signed by us and handed
//     over by a browser rather than by the Play Store. Its wording ("Unsafe app blocked")
//     reads like an accusation, so a reader who gets it usually just stops.
//
// So the tap opens a sheet that says both things in Kurdish first, and holds the download
// behind two deliberate taps inside it: "I understand", and then an answer to a plain question
// about whether the instructions were actually read. It is a dialog rather than a page of its
// own because the reader is one tap away from the thing they came for, and navigating them
// somewhere else to read instructions loses more of them than the instructions save.
//
// Android only, on every page that offers the APK — index.html and the two deep-link landing
// pages all use the same #android-btn, so they all get it from this one file. Loaded after
// platform.js, which is what knows whether this reader is on Android at all.

(function () {
  'use strict';

  // iOS goes to the App Store and desktops see no download button, so neither has anything to
  // be warned about. The button itself is already hidden there — this is about not building
  // the sheet at all.
  if (!window.QPPlatform || !QPPlatform.isAndroid) return;

  var trigger = document.getElementById('android-btn');
  if (!trigger) return;

  // Where the android_guide/ screenshots live, worked out from this script's own URL rather
  // than written down. A fixed path can't satisfy every page that loads this file: ayat.html
  // is served from /ayat/2/255, so "android_guide/…" would be looked for under /ayat/2/, while
  // "/android_guide/…" breaks index_test.html, which is opened straight from Finder on a
  // file:// URL where a leading slash means the root of the disk. The script's own src is
  // already correct in both places, so the folder next to it is too.
  var ASSET_BASE = (function () {
    var self = document.currentScript;
    if (!self || !self.src) return '/';
    return self.src.replace(/[^/]*$/, '');
  })();

  // One screenshot of a phone screen, either inside a numbered step or beside the text that
  // introduces them. Filenames are fixed — see android_guide/README.md for which screen each
  // one is. A missing file removes its own figure once the page loads (see below), so the
  // written steps stand on their own until the images are added.
  function shot(file, alt) {
    return '<img class="qp-ig-shot" src="' + ASSET_BASE + 'android_guide/' + file +
      '" alt="' + alt + '" loading="lazy">';
  }

  // Both pages that carry a download button define the same theme tokens on :root, so the
  // sheet inherits the site's light/dark palette by naming them. The fallbacks are the light
  // values, for the case where this script ever lands on a page that defines none of them.
  var CSS = [
    '.qp-ig-backdrop {',
    '  position: fixed;',
    '  inset: 0;',
    '  z-index: 9999;',
    '  display: flex;',
    '  align-items: flex-end;',
    '  justify-content: center;',
    '  background: rgba(9, 11, 17, 0.6);',
    '  opacity: 0;',
    '  transition: opacity 0.2s ease;',
    '}',
    '.qp-ig-backdrop[hidden] { display: none !important; }',
    '.qp-ig-backdrop.is-open { opacity: 1; }',

    '.qp-ig-sheet {',
    '  width: 100%;',
    '  max-width: 460px;',
    '  max-height: 90vh;',
    '  overflow-y: auto;',
    '  -webkit-overflow-scrolling: touch;',
    '  background: var(--surface, #FFFFFF);',
    '  color: var(--text, #1D2231);',
    '  border: 1px solid var(--border, rgba(29, 34, 49, 0.14));',
    '  border-bottom: none;',
    '  border-radius: 24px 24px 0 0;',
    '  padding: 12px 20px 22px;',
    '  box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.3);',
    '  text-align: right;',
    '  line-height: 1.85;',
    '  transform: translateY(100%);',
    '  transition: transform 0.24s ease;',
    '}',
    '.qp-ig-backdrop.is-open .qp-ig-sheet { transform: translateY(0); }',

    '.qp-ig-grabber {',
    '  display: block;',
    '  width: 42px;',
    '  height: 4px;',
    '  margin: 0 auto 14px;',
    '  border-radius: 4px;',
    '  background: var(--border, rgba(29, 34, 49, 0.14));',
    '}',

    /* The title and its one-line summary sit in a tinted band, so the first thing a reader
       sees on the sheet is the instruction to read it — not the download button below. The
       plain rgba line before each color-mix is the same brand tint for browsers that don't
       support color-mix, which would otherwise drop the declaration and leave the band
       invisible. */
    '.qp-ig-head {',
    '  background: rgba(169, 125, 25, 0.1);',
    '  background: color-mix(in srgb, var(--brand, #A97D19) 12%, transparent);',
    '  border: 1px solid rgba(169, 125, 25, 0.28);',
    '  border: 1px solid color-mix(in srgb, var(--brand, #A97D19) 28%, transparent);',
    '  border-radius: 16px;',
    '  padding: 13px 15px 14px;',
    '  margin: 0 0 18px;',
    '}',

    '.qp-ig-title {',
    '  display: flex;',
    '  align-items: center;',
    '  gap: 8px;',
    '  font-size: 20px;',
    '  font-weight: 800;',
    '  line-height: 1.55;',
    '  margin: 0 0 4px;',
    '}',
    /* In an RTL sheet the flex start edge is the right one, so the mark leads the title. */
    '.qp-ig-title::before {',
    '  content: "⚠";',
    '  flex: none;',
    '  font-size: 18px;',
    '  color: var(--brand, #A97D19);',
    '}',
    /* The sheet moves focus here when it opens (see open()); that is for screen readers and
       to keep the sheet scrolled to its top, and shouldn't draw a focus ring. */
    '.qp-ig-title:focus { outline: none; }',

    '.qp-ig-lead {',
    '  color: var(--muted, #5B6272);',
    '  font-size: 14px;',
    '  margin: 0;',
    '}',

    '.qp-ig-step {',
    '  display: flex;',
    '  gap: 12px;',
    '  margin-bottom: 16px;',
    '}',

    /* The step number sits in its own column so the wrapped Kurdish text lines up under
       itself instead of under the digit. */
    '.qp-ig-num {',
    '  flex: none;',
    '  width: 28px;',
    '  height: 28px;',
    '  margin-top: 3px;',
    '  border-radius: 50%;',
    '  background: var(--brand, #A97D19);',
    '  color: var(--on-brand, #FFFFFF);',
    '  font-size: 14px;',
    '  font-weight: 700;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '}',

    '.qp-ig-step h3 {',
    '  font-size: 15px;',
    '  font-weight: 700;',
    '  margin: 0 0 2px;',
    '}',

    '.qp-ig-step p {',
    '  font-size: 14px;',
    '  color: var(--muted, #5B6272);',
    '  margin: 0;',
    '}',

    '.qp-ig-warn {',
    '  margin-top: 6px !important;',
    '  padding: 8px 10px;',
    '  border-radius: 10px;',
    '  background: color-mix(in srgb, var(--brand, #A97D19) 12%, transparent);',
    '  color: var(--text, #1D2231) !important;',
    '  font-size: 13px !important;',
    '}',

    '.qp-ig-details {',
    '  border: 1px solid var(--border, rgba(29, 34, 49, 0.14));',
    '  border-radius: 14px;',
    '  padding: 10px 14px;',
    '  margin: 4px 0 18px;',
    '}',

    '.qp-ig-details summary {',
    '  cursor: pointer;',
    '  font-size: 14px;',
    '  font-weight: 600;',
    '  list-style: none;',
    '}',
    '.qp-ig-details summary::-webkit-details-marker { display: none; }',
    /* An explicit caret, because the native marker sits on the wrong side in an RTL page. */
    '.qp-ig-details summary::after {',
    '  content: "▾";',
    '  float: left;',
    '  color: var(--muted, #5B6272);',
    '}',
    '.qp-ig-details[open] summary::after { content: "▴"; }',

    '.qp-ig-details ol {',
    /* ١ ٢ ٣ rather than 1 2 3, the same digits the app and the rest of the site show a
       reader, and the same ones the numbered badges above this list use. */
    '  list-style-type: arabic-indic;',
    '  margin: 10px 0 4px;',
    '  padding-inline-start: 22px;',
    '  font-size: 14px;',
    '  color: var(--muted, #5B6272);',
    '}',
    '.qp-ig-details li { margin-bottom: 6px; }',

    /* Tall phone screenshots, held to a width that keeps the written step readable beside
       them rather than pushing it off the sheet. */
    '.qp-ig-shot {',
    '  display: block;',
    '  width: 100%;',
    '  max-width: 200px;',
    '  height: auto;',
    '  margin: 8px 0 12px;',
    '  border-radius: 10px;',
    '  border: 1px solid var(--border, rgba(29, 34, 49, 0.14));',
    '}',
    '.qp-ig-details p {',
    '  font-size: 13px;',
    '  color: var(--muted, #5B6272);',
    '  margin: 10px 0 0;',
    '}',

    /* Latin UI labels quoted from the phone's own screens, inside an RTL sentence: without
       their own direction the trailing words and punctuation get reordered. */
    '.qp-ig-ui {',
    '  display: inline-block;',
    '  direction: ltr;',
    '  unicode-bidi: isolate;',
    '  font-weight: 600;',
    '  color: var(--text, #1D2231);',
    '}',

    '.qp-ig-go, .qp-ig-cancel {',
    '  display: block;',
    '  width: 100%;',
    '  padding: 14px 16px;',
    '  border-radius: 14px;',
    '  border: 1px solid transparent;',
    '  font-family: inherit;',
    '  font-size: 15px;',
    '  font-weight: 700;',
    '  text-align: center;',
    '  text-decoration: none;',
    '  cursor: pointer;',
    '}',

    '.qp-ig-go {',
    '  background: var(--brand, #A97D19);',
    '  color: var(--on-brand, #FFFFFF);',
    '}',

    '.qp-ig-cancel {',
    '  background: transparent;',
    '  color: var(--muted, #5B6272);',
    '  font-weight: 600;',
    '  margin-top: 6px;',
    '}',

    /* The question asked between "I understand" and the download itself. */
    '.qp-ig-ask {',
    '  font-size: 15px;',
    '  font-weight: 700;',
    '  text-align: center;',
    '  margin: 0 0 12px;',
    '  padding: 11px 13px;',
    '  border-radius: 14px;',
    '  background: rgba(169, 125, 25, 0.1);',
    '  background: color-mix(in srgb, var(--brand, #A97D19) 12%, transparent);',
    '}',

    '@media (prefers-reduced-motion: reduce) {',
    '  .qp-ig-backdrop, .qp-ig-sheet { transition: none; }',
    '}'
  ].join('\n');

  var MARKUP =
    '<div class="qp-ig-sheet" role="dialog" aria-modal="true" aria-labelledby="qp-ig-title">' +
      '<span class="qp-ig-grabber" aria-hidden="true"></span>' +

      '<div class="qp-ig-head">' +
        '<h2 class="qp-ig-title" id="qp-ig-title" tabindex="-1">پێش دابەزاندن ئەمە بخوێنەوە</h2>' +
        '<p class="qp-ig-lead">دوو هەنگاوی کورت هەن؛ بەبێ ئەوان دامەزراندنی ئەپەکە سەرکەوتوو نابێت.</p>' +
      '</div>' +

      '<div class="qp-ig-step">' +
        '<span class="qp-ig-num">١</span>' +
        '<div>' +
          '<h3>سەرەتا وەشانی کۆنی ئەپەکە بسڕەوە</h3>' +
          '<p>ئەگەر ئەپی «قورئانی پیرۆز» لەسەر شاشەی مۆبایلەکەتدا هەیە، پێش هەموو شتێک بیسڕەوە: ' +
            'دەست بخە سەر ئایکۆنەکەی و دایبگرە، پاشان <span class="qp-ig-ui">Uninstall</span> ' +
            '(سڕینەوە) هەڵبژێرە.</p>' +
          '<p class="qp-ig-warn">هەردوو وەشانەکە هەمان ناوی پاکێجیان هەیە، بۆیە ئەگەر کۆنەکە نەسڕیتەوە ' +
            'ململانێی پاکێج <span class="qp-ig-ui">(package conflict)</span> ڕوودەدات و ئەندرۆید ' +
            'دامەزراندنەکە ڕادەگرێت — زۆرجار تەنیا بە پەیامی ' +
            '<span class="qp-ig-ui">App not installed</span>.</p>' +
        '</div>' +
      '</div>' +

      '<div class="qp-ig-step">' +
        '<span class="qp-ig-num">٢</span>' +
        '<div>' +
          '<h3>ڕێگە بە دامەزراندن لە سەرچاوەی نەناسراو بدە</h3>' +
          '<p>دوای تەواوبوونی دابەزاندن، فایلەکە بکەرەوە. ئەگەر ئەندرۆید ڕێگری کرد، ' +
            '<span class="qp-ig-ui">Settings</span> لێبدە و ڕێگە بەو وێبگەڕەی پێی دابەزاندووی بدە کە ' +
            'ئەپ دامەزرێنێت، پاشان بگەڕێوە و <span class="qp-ig-ui">Install</span> (دامەزراندن) لێبدە.</p>' +
        '</div>' +
      '</div>' +

      '<details class="qp-ig-details">' +
        '<summary>ئەگەر «Play Protect» ڕێگری لە دامەزراندنەکە کرد</summary>' +
        '<p>پەیامی <span class="qp-ig-ui">Unsafe app blocked</span>، ' +
          '<span class="qp-ig-ui">Blocked by Play Protect</span> یان ' +
          '<span class="qp-ig-ui">App blocked to protect your device</span> واتای ئەوە نییە کە ' +
          'ئەپەکە زیانبەخشە — Play Protect هەموو ئەو ئەپانە بە «نەناسراو» دەژمێرێت کە لە ' +
          'Google Play دانەبەزێنراون.</p>' +
        shot('app-blocked-to-protect-your-device.jpg',
          'دیالۆگی Google Play Protect کە دامەزراندنی ئەپەکە ڕاگرتووە') +
        '<p>بەم هەنگاوانە ڕێگەی پێ دەدەیت:</p>' +
        '<ol>' +
          '<li><span class="qp-ig-ui">Settings</span> (ڕێکخستنەکان) بکەرەوە و لە خانەی گەڕاندا ' +
            'بنووسە <span class="qp-ig-ui">Play Protect</span>.' +
            shot('01-settings-search.jpg', 'ئەنجامی گەڕان بۆ Play Protect لە ڕێکخستنەکاندا') + '</li>' +
          '<li>لە ئەنجامەکاندا <span class="qp-ig-ui">Security and privacy</span> ← ' +
            '<span class="qp-ig-ui">App security</span> هەڵبژێرە.' +
            shot('02-app-security.jpg', 'لاپەڕەی App security و شوێنی Google Play Protect') + '</li>' +
          '<li>کرتە لە <span class="qp-ig-ui">Google Play Protect</span> بکە.</li>' +
          '<li>لە سەرەوەی لاپەڕەکەوە، ئایکۆنی ڕێکخستنەکان (⚙) لێبدە.' +
            shot('03-play-protect-gear.jpg', 'لاپەڕەی Play Protect و ئایکۆنی ڕێکخستنەکان لە سەرەوە') + '</li>' +
          '<li>هەردوو کلیلەکە بکوژێنەوە: <span class="qp-ig-ui">Scan apps with Play Protect</span> و ' +
            '<span class="qp-ig-ui">Improve harmful app detection</span>.' +
            shot('04-play-protect-settings.jpg', 'هەردوو کلیلی ڕێکخستنەکانی Play Protect') + '</li>' +
          '<li>بگەڕێوە بۆ فایلە دابەزێنراوەکە و دامەزراندنەکە دووبارە تاقیبکەرەوە.</li>' +
          '<li>دوای تەواوبوونی دامەزراندن، هەردوو کلیلەکە دووبارە هەڵبکەوە، بۆ ئەوەی پارێزگاریی ' +
            'مۆبایلەکەت بمێنێتەوە.</li>' +
        '</ol>' +
      '</details>' +

      // Two footers, one shown at a time. "I understand" no longer starts the download
      // itself; it asks the question below first, because a reader who taps it two seconds
      // after the sheet appears hasn't read anything, and they are the reader this whole
      // sheet exists for.
      '<div id="qp-ig-ack-stage">' +
        '<button type="button" class="qp-ig-go" id="qp-ig-ack">تێگەیشتم — دەستپێکردنی دابەزاندن</button>' +
        '<button type="button" class="qp-ig-cancel" id="qp-ig-cancel">پاشگەزبوونەوە</button>' +
      '</div>' +

      '<div id="qp-ig-confirm-stage" hidden>' +
        '<p class="qp-ig-ask" id="qp-ig-ask">ڕێنمایییەکانی پێش دابەزاندت خوێندەوە؟</p>' +
        '<a class="qp-ig-go" id="qp-ig-go" href="#" aria-describedby="qp-ig-ask">بەڵێ، دەستی پێبکە</a>' +
        '<button type="button" class="qp-ig-cancel" id="qp-ig-back">نەخێر، دەیخوێنمەوە</button>' +
      '</div>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var backdrop = document.createElement('div');
  backdrop.className = 'qp-ig-backdrop';
  backdrop.hidden = true;
  backdrop.innerHTML = MARKUP;
  document.body.appendChild(backdrop);

  // A screenshot that isn't there yet must not leave a broken-image icon in the middle of a
  // numbered step. Each one removes itself instead, so the guide reads correctly with no
  // images at all and starts showing them the moment the files are added.
  Array.prototype.forEach.call(backdrop.querySelectorAll('.qp-ig-shot'), function (image) {
    image.addEventListener('error', function () {
      image.remove();
    });
  });

  var sheet = backdrop.querySelector('.qp-ig-sheet');
  var title = backdrop.querySelector('#qp-ig-title');
  var ackStage = backdrop.querySelector('#qp-ig-ack-stage');
  var confirmStage = backdrop.querySelector('#qp-ig-confirm-stage');
  var ackButton = backdrop.querySelector('#qp-ig-ack');
  var backButton = backdrop.querySelector('#qp-ig-back');
  var goButton = backdrop.querySelector('#qp-ig-go');
  var cancelButton = backdrop.querySelector('#qp-ig-cancel');

  // The download is started by a real tap on a real link inside the sheet, carrying the same
  // href and download attribute as the button that was intercepted. Re-dispatching a click on
  // the original button instead would be a synthetic navigation, which some Android browsers
  // treat as a pop-up and block. That is also why the confirmation is a second stage of the
  // sheet rather than a window.confirm(): the reader's last tap has to land on this link.
  goButton.href = trigger.href;
  goButton.setAttribute('download', trigger.getAttribute('download') || '');

  // Back to the "I understand" footer — on the way out, so a reader who reopens the sheet is
  // asked again rather than finding the download a single tap away.
  function resetStages() {
    confirmStage.hidden = true;
    ackStage.hidden = false;
  }

  var lastFocused = null;
  var previousOverflow = '';

  function open() {
    lastFocused = document.activeElement;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    backdrop.hidden = false;
    // Reading a layout property between the two commits the off-screen starting position, so
    // the sheet slides up instead of arriving already in place. An animation frame would do
    // the same, except a browser that is withholding frames — a backgrounded tab gets none —
    // never runs the callback, and the sheet would sit invisible behind a visible backdrop
    // until the reader came back to the page.
    void backdrop.offsetHeight;
    backdrop.classList.add('is-open');
    // The title, not a button: it is what the reader has to take in, a screen reader
    // announces the sheet by it, and on a short screen focusing anything further down would
    // scroll the sheet past it.
    title.focus();

    document.addEventListener('keydown', onKeyDown);
  }

  function close() {
    backdrop.classList.remove('is-open');
    document.removeEventListener('keydown', onKeyDown);
    document.body.style.overflow = previousOverflow;

    // Kept in the DOM until the slide-out finishes; hiding it immediately would cut the
    // animation off half way. The footer goes back to its first stage at the same moment, so
    // the swap happens behind the closed sheet rather than in front of the reader.
    window.setTimeout(function () {
      backdrop.hidden = true;
      resetStages();
    }, 240);

    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      close();
      return;
    }

    if (event.key !== 'Tab') return;

    // Keeps Tab inside the sheet while it is up — with the page behind it still focusable, a
    // keyboard or screen-reader user tabs straight out of a dialog they haven't answered.
    // Whichever footer stage is hidden is dropped from the ring: an offsetParent of null is
    // how a `hidden` ancestor shows up here, and Tab must not reach a stage the reader can't
    // see. (The title carries tabindex="-1" and so is already out of the selector.)
    var focusable = Array.prototype.filter.call(
      sheet.querySelectorAll('a[href], button, summary, [tabindex]:not([tabindex="-1"])'),
      function (element) { return element.offsetParent !== null; }
    );
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    open();
  });

  // "I understand" only swaps the footer for the question.
  ackButton.addEventListener('click', function () {
    ackStage.hidden = true;
    confirmStage.hidden = false;
    goButton.focus();
  });

  // "No, let me read it" puts the footer back and returns the reader to the top of the sheet,
  // where the two steps are.
  backButton.addEventListener('click', function () {
    resetStages();
    sheet.scrollTop = 0;
    title.focus();
  });

  // Not preventDefault'd: the tap has to follow the link, which is what actually downloads the
  // APK. Closing on the way out just leaves the page tidy behind the download.
  goButton.addEventListener('click', function () {
    close();
  });

  cancelButton.addEventListener('click', close);

  // A tap on the dimmed area around the sheet, the usual way out of a bottom sheet on Android.
  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) close();
  });
})();
