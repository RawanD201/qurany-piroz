// Settings: graphics quality, walking speed, look sensitivity, label and text size, drag
// direction, markers, people praying and going round the Kaaba.

import { SETTINGS_RANGES } from '../config';
import type { QualityPreference, QualityTier } from '../engine/quality';
import { SUPPORTED_LOCALES, getLocale, type Locale } from '../i18n/locale';
import { t, type StringKey } from '../i18n/strings';
import type { UserSettings } from '../settings';
import { Dialog } from './dialog';
import { button, el } from './dom';

export interface SettingsActions {
  /** Called with just the setting(s) that changed. */
  onChange(change: Partial<UserSettings>): void;
  onResetPosition(): void;
  onToggleFullscreen?: () => void;
  /** The visitor chose another language (the explorer reloads in it). */
  onLanguage(locale: Locale): void;
}

const QUALITY_OPTIONS: QualityPreference[] = ['auto', 'high', 'medium', 'low'];

const times = (v: number) => `${v.toFixed(1)}×`;
const percent = (v: number) => `${Math.round(v * 100)}%`;

export class SettingsPanel {
  readonly dialog: Dialog;
  private readonly currentTier: HTMLParagraphElement;
  private fullscreenButton: HTMLButtonElement | null = null;

  constructor(
    parent: HTMLElement,
    background: () => HTMLElement[],
    settings: UserSettings,
    private readonly actions: SettingsActions,
    homeHref: string
  ) {
    this.dialog = new Dialog(parent, {
      id: 'settings-panel',
      title: t('settings.heading'),
      closeLabel: t('settings.close'),
      background,
    });
    const body = this.dialog.body;

    // Language: the explorer reloads in the chosen one (and the site remembers it).
    const select = el('select', { id: 'language', className: 'field__select' });
    for (const info of SUPPORTED_LOCALES) {
      const option = el('option', { text: info.label, attrs: { value: info.code, lang: info.tag, dir: info.dir } });
      option.selected = info.code === getLocale();
      select.append(option);
    }
    select.addEventListener('change', () => actions.onLanguage(select.value as Locale));
    body.append(
      el(
        'div',
        { className: 'field' },
        el('label', { text: t('settings.language'), attrs: { for: 'language' } }),
        select,
        el('p', { className: 'field__hint', text: t('settings.languageNote') })
      )
    );

    // Quality: a radio group.
    const fieldset = el('fieldset', { className: 'field field--radios' }, el('legend', { text: t('settings.quality') }));
    for (const option of QUALITY_OPTIONS) {
      const id = `quality-${option}`;
      const input = el('input', { id, attrs: { type: 'radio', name: 'quality', value: option } });
      input.checked = settings.quality === option;
      input.addEventListener('change', () => {
        if (input.checked) this.update({ quality: option });
      });
      fieldset.append(el('div', { className: 'radio' }, input, el('label', { text: t(`settings.quality.${option}` as StringKey), attrs: { for: id } })));
    }
    this.currentTier = el('p', { className: 'field__hint', attrs: { 'aria-live': 'polite' } });
    fieldset.append(this.currentTier, el('p', { className: 'field__hint', text: t('settings.qualityNote') }));
    body.append(fieldset);

    body.append(this.slider('speed', t('settings.speed'), SETTINGS_RANGES.speed, settings.speed, (speed) => this.update({ speed })));
    body.append(
      this.slider('sensitivity', t('settings.sensitivity'), SETTINGS_RANGES.sensitivity, settings.sensitivity, (sensitivity) =>
        this.update({ sensitivity })
      )
    );
    body.append(
      this.slider('label-size', t('settings.labelSize'), SETTINGS_RANGES.labelSize, settings.labelSize, (labelSize) => this.update({ labelSize }), percent)
    );
    body.append(
      this.slider('text-size', t('settings.textSize'), SETTINGS_RANGES.textSize, settings.textSize, (textSize) => this.update({ textSize }), percent)
    );
    body.append(this.checkbox('reverse-drag', t('settings.reverseDrag'), settings.reverseDrag, (reverseDrag) => this.update({ reverseDrag })));
    body.append(this.checkbox('show-markers', t('settings.showMarkers'), settings.showMarkers, (showMarkers) => this.update({ showMarkers })));
    body.append(this.checkbox('show-people', t('settings.showPeople'), settings.showPeople, (showPeople) => this.update({ showPeople })));
    body.append(this.checkbox('show-tawaf', t('settings.showTawaf'), settings.showTawaf, (showTawaf) => this.update({ showTawaf })));

    const actionsRow = el('div', { className: 'dialog__actions' });
    actionsRow.append(
      button(t('settings.resetPosition'), {
        className: 'pill-button',
        icon: 'reload',
        onClick: () => {
          this.dialog.close();
          this.actions.onResetPosition();
        },
      })
    );
    if (actions.onToggleFullscreen) {
      this.fullscreenButton = button(t('settings.fullscreen'), {
        className: 'pill-button',
        onClick: () => actions.onToggleFullscreen?.(),
      });
      actionsRow.append(this.fullscreenButton);
    }
    body.append(actionsRow);
    body.append(el('p', { className: 'dialog__footer' }, el('a', { text: t('brand.home'), attrs: { href: homeHref } })));
  }

  open(opener?: HTMLElement | null): void {
    this.dialog.show(opener);
  }

  /** Shows which tier "Automatic" (or a manual choice) is actually using. */
  setEffectiveTier(tier: QualityTier): void {
    this.currentTier.textContent = t('settings.qualityCurrent', { tier: t(`settings.quality.${tier}` as StringKey) });
  }

  setFullscreen(active: boolean): void {
    const label = this.fullscreenButton?.querySelector('.button__text');
    if (label) label.textContent = t(active ? 'settings.exitFullscreen' : 'settings.fullscreen');
  }

  private update(change: Partial<UserSettings>): void {
    this.actions.onChange(change);
  }

  private slider(
    id: string,
    label: string,
    range: { min: number; max: number; step: number },
    value: number,
    onInput: (value: number) => void,
    format: (value: number) => string = times
  ): HTMLElement {
    const output = el('output', { className: 'field__value', attrs: { for: id }, text: format(value) });
    const input = el('input', {
      id,
      attrs: { type: 'range', min: String(range.min), max: String(range.max), step: String(range.step), value: String(value) },
    });
    input.addEventListener('input', () => {
      const v = Number(input.value);
      output.textContent = format(v);
      onInput(v);
    });
    return el('div', { className: 'field' }, el('div', { className: 'field__row' }, el('label', { text: label, attrs: { for: id } }), output), input);
  }

  /** An on/off switch (a checkbox, announced as a switch). */
  private checkbox(id: string, label: string, checked: boolean, onChange: (checked: boolean) => void): HTMLElement {
    const input = el('input', { id, className: 'switch', attrs: { type: 'checkbox', role: 'switch' } });
    input.checked = checked;
    input.addEventListener('change', () => onChange(input.checked));
    return el('div', { className: 'field field--check' }, input, el('label', { text: label, attrs: { for: id } }));
  }
}
