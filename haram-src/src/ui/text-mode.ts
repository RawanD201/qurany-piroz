// The text-only version: every place and its description as a plain, scrollable page.
//
// Shown when the 3D view cannot run (no WebGL, too little memory…) and available from Help.
// It needs no WebGL and none of three.js, so it is a small separate download.

import { CATEGORY_LABELS, CATEGORY_ORDER, PLACES } from '../data/places';
import { getLocaleInfo, localize } from '../i18n/locale';
import { t } from '../i18n/strings';
import { el } from './dom';
import { placeBody, placeHeading } from './place-text';

export function showTextMode(root: HTMLElement, options: { notice?: string; offer3D: boolean; homeHref: string }): void {
  const locale = getLocaleInfo();
  document.body.classList.add('is-text-mode');
  const main = el('main', { className: 'text-mode', attrs: { lang: locale.code, dir: locale.dir } });
  main.append(
    el('p', { className: 'text-mode__brand' }, el('a', { text: t('brand.name'), attrs: { href: options.homeHref } })),
    el('h1', { text: t('text.heading') }),
    el('p', { className: 'text-mode__intro', text: t('text.intro') })
  );
  if (options.notice) main.append(el('p', { className: 'text-mode__notice', attrs: { role: 'note' }, text: options.notice }));
  main.append(el('p', { className: 'text-mode__about', text: t('help.about') }));

  const nav = el('nav', { attrs: { 'aria-label': t('places.heading') } });
  const toc = el('ul', { className: 'text-mode__toc' });
  for (const place of PLACES) {
    toc.append(el('li', {}, el('a', { text: localize(place.name), attrs: { href: `#place-${place.id}` } })));
  }
  nav.append(toc);
  main.append(nav);

  for (const category of CATEGORY_ORDER) {
    const places = PLACES.filter((p) => p.category === category);
    if (!places.length) continue;
    main.append(el('h2', { className: 'text-mode__category', text: localize(CATEGORY_LABELS[category]) }));
    for (const place of places) {
      main.append(
        el('article', { className: 'text-mode__place', id: `place-${place.id}` }, placeHeading(place, `title-${place.id}`, 'h3'), placeBody(place))
      );
    }
  }

  const footer = el('p', { className: 'text-mode__footer' });
  if (options.offer3D) {
    const retry = el('button', { className: 'pill-button', text: t('text.back3d'), attrs: { type: 'button' } });
    retry.addEventListener('click', () => window.location.reload());
    footer.append(retry, ' ');
  }
  footer.append(el('a', { text: t('error.home'), attrs: { href: options.homeHref } }));
  main.append(footer);

  root.replaceChildren(main);
  main.setAttribute('tabindex', '-1');
  main.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}
