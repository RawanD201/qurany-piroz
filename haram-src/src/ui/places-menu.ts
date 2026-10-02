// The Places menu: every place, grouped, reachable from anywhere — no need to be near it.
// Choosing one opens its information and turns the view towards it.

import { CATEGORY_LABELS, CATEGORY_ORDER, PLACES, type PlaceId } from '../data/places';
import { localize } from '../i18n/locale';
import { t } from '../i18n/strings';
import { Dialog } from './dialog';
import { el } from './dom';

export class PlacesMenu {
  readonly dialog: Dialog;

  constructor(parent: HTMLElement, background: () => HTMLElement[], onSelect: (id: PlaceId) => void) {
    this.dialog = new Dialog(parent, {
      id: 'places-menu',
      title: t('places.heading'),
      closeLabel: t('places.close'),
      background,
      className: 'dialog--places',
    });
    const body = this.dialog.body;
    body.append(el('p', { className: 'dialog__intro', text: t('places.intro') }));
    for (const category of CATEGORY_ORDER) {
      const places = PLACES.filter((p) => p.category === category);
      if (places.length === 0) continue;
      const headingId = `places-cat-${category}`;
      const list = el('ul', { className: 'places-list', attrs: { 'aria-labelledby': headingId } });
      for (const place of places) {
        const item = el(
          'button',
          { className: 'places-list__item', attrs: { type: 'button' } },
          el('span', { className: 'places-list__name', text: localize(place.name) }),
          el('span', { className: 'places-list__summary', text: localize(place.summary) })
        );
        item.addEventListener('click', () => {
          this.dialog.close();
          onSelect(place.id);
        });
        list.append(el('li', {}, item));
      }
      body.append(el('h3', { className: 'places-list__heading', id: headingId, text: localize(CATEGORY_LABELS[category]) }), list);
    }
  }

  open(opener?: HTMLElement | null): void {
    this.dialog.show(opener);
  }
}
