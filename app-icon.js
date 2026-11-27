// «ئایکۆنی ئەپ» — the app icon Hevi Edit picks for the season or an occasion is the site's icon
// too: the browser tab's favicon, the home-screen icon on iPhone, and the logo on the page.
//
// Hevi Edit writes one row, app_icon (migration 0047_app_icon.sql in the Flutter repo). This reads
// it with the same public anon key donations.html uses, which can only select. The last key is
// kept in localStorage so the next page opens with the right icon before the request returns.
// Each themed icon lives in /app-icons/<key>/; "original" is the files at the site's root. A key
// with no folder here (an icon added to the apps later) leaves the original in place.
(function () {
  'use strict';
  var THEMES = ['spring', 'summer', 'autumn', 'winter', 'rain', 'flood', 'ramadan', 'qadr',
    'eid-fitr', 'eid-adha', 'hajj', 'friday', 'isra', 'kurdistan', 'kurdistan-sun', 'newroz', 'dark'];
  var URL = 'https://ugfipcwtkwmuukipmgst.supabase.co/rest/v1/app_icon?id=eq.1&select=icon_key';
  var ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZmlwY3d0a3dtdXVraXBtZ3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MTIzODQsImV4cCI6MjA0NzI4ODM4NH0.oRKqjlM2mXTAsunBjSLRzcGjjWD12Wp8WZYony10en0';
  var STORE = 'qp-app-icon';

  function themed(key) { return THEMES.indexOf(key) !== -1; }

  function swap(el, attr, url) {
    if (!el.hasAttribute('data-original-' + attr)) el.setAttribute('data-original-' + attr, el.getAttribute(attr) || '');
    var next = url || el.getAttribute('data-original-' + attr);
    if (el.getAttribute(attr) !== next) el.setAttribute(attr, next);
  }

  function applyHead(key) {
    var dir = themed(key) ? '/app-icons/' + key + '/' : null;
    document.querySelectorAll('link[rel="icon"]').forEach(function (link) {
      var small = link.getAttribute('sizes') === '16x16';
      swap(link, 'href', dir && dir + (small ? 'favicon-16x16.png' : 'favicon-32x32.png'));
      swap(link, 'type', dir && 'image/png');
    });
    document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(function (link) {
      swap(link, 'href', dir && dir + 'apple-touch-icon.png');
    });
  }

  function applyLogos(key) {
    var dir = themed(key) ? '/app-icons/' + key + '/' : null;
    document.querySelectorAll('img.logo').forEach(function (img) {
      swap(img, 'src', dir && dir + 'logo.png');
    });
  }

  function apply(key) {
    applyHead(key);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyLogos(key); }, { once: true });
    } else {
      applyLogos(key);
    }
  }

  var cached = null;
  try { cached = localStorage.getItem(STORE); } catch (e) {}
  if (cached) apply(cached);

  fetch(URL, { headers: { apikey: ANON, Authorization: 'Bearer ' + ANON } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rows) {
      var key = rows && rows[0] && rows[0].icon_key;
      if (typeof key !== 'string') return;
      try { localStorage.setItem(STORE, key); } catch (e) {}
      if (key !== cached) apply(key);
    })
    .catch(function () {});
})();
