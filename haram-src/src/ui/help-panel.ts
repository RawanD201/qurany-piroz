// Help: how to move, what the model is (and is not), and credits.

import { t, type StringKey } from '../i18n/strings';
import { Dialog } from './dialog';
import { button, el } from './dom';

export function controlHints(isTouch: boolean, hasFinePointer: boolean): string[] {
  const hints: string[] = [];
  if (isTouch) hints.push(t('controls.touchMove'), t('controls.touchLook'), t('controls.touchZoom'));
  if (hasFinePointer || !isTouch) {
    hints.push(t('controls.desktopMove'), t('controls.desktopLook'), t('controls.desktopWalk'), t('controls.desktopZoom'));
  }
  hints.push(isTouch && !hasFinePointer ? t('controls.places') : t('controls.placesDesktop'));
  return hints;
}

const CREDITS: { key: StringKey; url: string; license?: string }[] = [
  {
    key: 'credits.weave',
    url: 'https://commons.wikimedia.org/wiki/File:Kiswah_fragment,_Rarities_of_Muslim_culture_(2021-07-06)_01.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    key: 'credits.sitara',
    url: 'https://commons.wikimedia.org/wiki/File:Kiswah_of_the_Golden_Door_of_Kaaba_-_2016.jpg',
  },
  {
    key: 'credits.dedication',
    url: 'https://commons.wikimedia.org/wiki/File:Kiswah,_Kaaba_-_7_May_2016_(cropped-01).jpg',
  },
  {
    key: 'credits.khalili0039',
    url: 'https://commons.wikimedia.org/wiki/File:Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_txt_0039a.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/igo/',
  },
  {
    key: 'credits.khalili0251',
    url: 'https://commons.wikimedia.org/wiki/File:Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_txt_0251pan.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/igo/',
  },
  {
    key: 'credits.osm',
    url: 'https://www.openstreetmap.org/copyright',
    license: 'https://opendatacommons.org/licenses/odbl/',
  },
];

/** Photo credits, each linking to its source page (and licence where it requires it). */
function creditsList(): HTMLElement {
  const list = el('ul', { className: 'credits-list' });
  for (const credit of CREDITS) {
    const item = el('li', {}, el('a', { text: t(credit.key), attrs: { href: credit.url, target: '_blank', rel: 'noopener noreferrer' } }));
    if (credit.license) {
      item.append(' (', el('a', { text: t('credits.licence'), attrs: { href: credit.license, target: '_blank', rel: 'noopener noreferrer' } }), ')');
    }
    list.append(item);
  }
  return list;
}

export class HelpPanel {
  readonly dialog: Dialog;

  constructor(
    parent: HTMLElement,
    background: () => HTMLElement[],
    options: { isTouch: boolean; hasFinePointer: boolean; onTextVersion: () => void }
  ) {
    this.dialog = new Dialog(parent, {
      id: 'help-panel',
      title: t('help.heading'),
      closeLabel: t('help.close'),
      background,
    });
    const list = el('ul', { className: 'hint-list' });
    for (const hint of controlHints(options.isTouch, options.hasFinePointer)) list.append(el('li', { text: hint }));
    this.dialog.body.append(
      el('p', { text: t('help.about') }),
      el('p', { text: t('help.accuracy') }),
      el('p', { text: t('help.night') }),
      el('h3', { text: t('help.controls') }),
      list,
      el('h3', { text: t('help.credits') }),
      el('p', { text: t('help.creditsBody') }),
      creditsList(),
      el(
        'div',
        { className: 'dialog__actions' },
        button(t('help.textVersion'), {
          className: 'pill-button',
          onClick: () => {
            this.dialog.close();
            options.onTextVersion();
          },
        })
      )
    );
  }

  open(opener?: HTMLElement | null): void {
    this.dialog.show(opener);
  }
}
