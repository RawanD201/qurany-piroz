// The way back to the rest of qurany-piroz.com, on the loading screen and in the top bar.
//
// It is a link, so it works like one (middle-click, long-press, "open in new tab"). A plain
// click from a visitor who came here from one of the site's pages goes back in history
// instead, which returns them to that page as they left it (scroll position and all) rather
// than stacking a fresh copy on top. Anyone else — a shared link, a search result, a new tab —
// goes to the home page.

import { t } from '../i18n/strings';
import { el, icon } from './dom';

/** Makes a plain click on `link` go back to the site page the visitor came from, if any. */
export function wireBackLink(link: HTMLAnchorElement): void {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!cameFromSite() || window.history.length < 2) return;
    event.preventDefault();
    window.history.back();
  });
}

/** The top bar's Back button: an arrow and "Back", named in full ("Back to Qurany Piroz"). */
export function backLink(homeHref: string, className: string): HTMLAnchorElement {
  const link = el(
    'a',
    { className: `back-link ${className}`, attrs: { href: homeHref, 'aria-label': t('error.home'), title: t('error.home') } },
    icon('back'),
    el('span', { className: 'button__text', text: t('hud.back') })
  );
  wireBackLink(link);
  return link;
}

/** Whether the previous page was one of the site's own (not the explorer reloading itself). */
function cameFromSite(): boolean {
  try {
    const referrer = new URL(document.referrer);
    return referrer.origin === window.location.origin && !/^\/haram(\/|$)/.test(referrer.pathname);
  } catch {
    return false;
  }
}
