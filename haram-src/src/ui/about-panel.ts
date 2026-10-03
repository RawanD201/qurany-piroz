// "Made in Kurdistan": who built the explorer, and why its sun is golden, under the flag of
// Kurdistan. Opened by tapping or clicking the sun in the sky, which is the sun from the flag
// (world/sun-emblem.ts).
//
// The flag is the public-domain "Flag of Kurdistan.svg" from Wikimedia Commons, drawn to the
// flag's specification (see ASSETS_LICENSES.md).

import flagUrl from '../assets/flag-of-kurdistan.svg?url';
import { t } from '../i18n/strings';
import { Dialog } from './dialog';
import { el } from './dom';

export class AboutPanel {
  readonly dialog: Dialog;

  constructor(parent: HTMLElement, background: () => HTMLElement[]) {
    this.dialog = new Dialog(parent, {
      id: 'about-panel',
      title: t('about.heading'),
      closeLabel: t('panel.close'),
      background,
    });
    this.dialog.body.append(
      // Decorative: the text says what it is.
      el('img', { className: 'about__flag', attrs: { src: flagUrl, alt: '', width: '180', height: '120' } }),
      el('p', { text: t('about.builtBy', { name: t('about.name') }) }),
      el('p', { text: t('about.sun') })
    );
  }

  open(opener?: HTMLElement | null): void {
    this.dialog.show(opener);
  }
}
