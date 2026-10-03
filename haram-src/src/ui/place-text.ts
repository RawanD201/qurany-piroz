// Renders a place's text (title, description, model note, sources). Shared by the information
// panel in the 3D view and the text-only version, so both always say the same thing.

import type { PlaceContent } from '../data/places';
import { CATEGORY_LABELS } from '../data/places';
import { appHref, withSuratNames } from '../data/quran';
import { getSource, type SourceId } from '../data/sources';
import { getLocale, localize, type LocalizedText } from '../i18n/locale';
import { t } from '../i18n/strings';
import { el } from './dom';

const ANDROID = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

/** A text in the visitor's language, with its Quran citations naming the surat (quran.ts). */
export function prose(text: LocalizedText): string {
  return withSuratNames(localize(text));
}

/** A source as a list item linking to it; a verse opens in the Qurany Piroz app. */
export function sourceItem(id: SourceId): HTMLLIElement {
  const source = getSource(id);
  const link = el('a', {
    text: source.label,
    attrs: { href: appHref(source.url, ANDROID), target: '_blank', rel: 'noopener noreferrer' },
  });
  link.append(el('span', { className: 'visually-hidden', text: ` ${t('panel.opensInNewTab')}` }));
  return el('li', {}, link);
}

export function placeHeading(place: PlaceContent, headingId: string, level: 'h2' | 'h3' = 'h2'): HTMLElement {
  const name = localize(place.name);
  const header = el(
    'header',
    { className: 'place__header' },
    el('p', { className: 'place__category', text: localize(CATEGORY_LABELS[place.category]) }),
    el(level, { className: 'place__title', id: headingId, text: name })
  );
  // The Arabic name under the title, unless the title already is it (in Arabic).
  const plain = (text: string) => text.replace(/[\u064B-\u0652\u0670]/g, '').trim();
  if (getLocale() !== 'ar' && plain(name) !== plain(place.arabicName)) {
    header.append(el('p', { className: 'place__arabic', text: place.arabicName, attrs: { lang: 'ar', dir: 'rtl' } }));
  }
  return header;
}

export function placeBody(place: PlaceContent): HTMLElement {
  const body = el('div', { className: 'place__body' });
  body.append(el('p', { className: 'place__summary', text: prose(place.summary) }));
  for (const paragraph of place.description) body.append(el('p', { text: prose(paragraph) }));

  if (place.modelNote) {
    body.append(
      el(
        'aside',
        { className: 'place__note' },
        el('h3', { className: 'place__note-title', text: t('panel.modelNote') }),
        el('p', { text: prose(place.modelNote) })
      )
    );
  }

  const list = el('ul', { className: 'place__sources' });
  for (const id of place.sources) list.append(sourceItem(id));
  body.append(el('h3', { className: 'place__sources-title', text: t('panel.sources') }), list);
  return body;
}
