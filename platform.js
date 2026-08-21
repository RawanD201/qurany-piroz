// Which platform is reading the page — the single source of truth for it across the site.
//
// It exists because the answer decides what the download area shows: only the App Store button on
// an iPhone or iPad, only the APK button on Android, and neither anywhere else, since those are
// the only two platforms the app is built for. Getting that wrong is visible on the front page,
// so the detection lives in one file rather than being copied into each page that needs it.

(function () {
  'use strict';

  var isAndroid = /android/i.test(navigator.userAgent);

  // The second half of this catches iPadOS 13+, which reports itself as a Mac and can only be
  // told apart from a real one by its touch points. That test also matches a desktop browser
  // emulating a phone, so an explicit Android user agent wins over it — otherwise an Android
  // reader is treated as both, and both buttons get hidden.
  var isIOS = !isAndroid && (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );

  window.QPPlatform = {
    isAndroid: isAndroid,
    isIOS: isIOS,

    /// True on the two platforms the app actually ships for. Anything else — a desktop, a
    /// console, some other phone OS — has nothing to download.
    isSupported: isAndroid || isIOS,

    /// Shows the one download button that belongs to this reader's platform and hides the other.
    /// On anything else both go, and `unsupportedNoteId` (if the page has one) takes their place
    /// saying why. Every id is optional, so a page can opt into whichever parts it has.
    applyDownloadVisibility: function (ids) {
      ids = ids || {};

      var show = function (id, visible) {
        if (!id) return;
        var element = document.getElementById(id);
        if (element) element.hidden = !visible;
      };

      show(ids.iosButtonId, isIOS);
      show(ids.androidButtonId, isAndroid);
      // "Allow installing from unknown sources" only means anything to somebody about to
      // install an APK.
      show(ids.androidNoteId, isAndroid);
      show(ids.unsupportedNoteId, !isAndroid && !isIOS);
    }
  };
})();
