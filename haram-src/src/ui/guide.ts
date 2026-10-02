// The Hajj and Umrah guide: a chooser, then a step-by-step panel.
//
// The panel sits where the information panel does (side panel on wide screens, bottom sheet on
// phones) and is not modal, so the visitor can keep looking around while reading. Steps inside
// Masjid al-Haram move the 3D view to the place and can draw and walk the route; steps in
// Mina, Arafat and Muzdalifah are marked as outside the model.

import { GUIDES, GUIDE_ORDER, type Guide, type GuideId, type GuideRoute, type RiteStep } from '../data/rites';
import { getSource } from '../data/sources';
import { getLocale, localize, type Locale } from '../i18n/locale';
import { t } from '../i18n/strings';
import { Dialog } from './dialog';
import { button, el, icon } from './dom';

/** Languages written in Arabic script. */
const ARABIC_SCRIPT: ReadonlySet<Locale> = new Set<Locale>(['ar', 'fa', 'ur', 'ckb', 'kmr', 'sdh']);

export interface GuideActions {
  /** A step is shown (index -1 is the guide's introduction). */
  onStep(guide: Guide, step: RiteStep | null): void;
  onWalk(route: GuideRoute): void;
  onShowPlace(step: RiteStep): void;
  onClose(): void;
}

export class GuideChooser {
  readonly dialog: Dialog;

  constructor(parent: HTMLElement, background: () => HTMLElement[], onChoose: (id: GuideId) => void) {
    this.dialog = new Dialog(parent, {
      id: 'guide-chooser',
      title: t('guide.heading'),
      closeLabel: t('guide.closeChooser'),
      background,
    });
    const body = this.dialog.body;
    body.append(el('p', { className: 'dialog__intro', text: t('guide.chooserIntro') }));
    const list = el('ul', { className: 'places-list' });
    for (const id of GUIDE_ORDER) {
      const guide = GUIDES[id];
      const item = el(
        'button',
        { className: 'places-list__item', attrs: { type: 'button' } },
        el('span', { className: 'places-list__name', text: localize(guide.title) }),
        el('span', { className: 'places-list__summary', text: localize(guide.summary) }),
        el('span', { className: 'places-list__summary', text: t('guide.stepCount', { count: guide.steps.length }) })
      );
      item.addEventListener('click', () => {
        this.dialog.close();
        onChoose(id);
      });
      list.append(el('li', {}, item));
    }
    body.append(list, el('p', { className: 'guide__disclaimer', text: t('guide.disclaimer') }));
  }

  open(opener?: HTMLElement | null): void {
    this.dialog.show(opener);
  }
}

export class GuidePanel {
  readonly element: HTMLElement;
  private readonly content: HTMLDivElement;
  private readonly scroller: HTMLDivElement;
  private guide: Guide | null = null;
  /** -1 is the introduction. */
  private index = -1;
  private readonly collapseButton: HTMLButtonElement;

  constructor(
    parent: HTMLElement,
    private readonly actions: GuideActions
  ) {
    this.content = el('div', { className: 'info-panel__content' });
    const close = button(null, {
      className: 'icon-button info-panel__close',
      icon: 'close',
      label: t('guide.close'),
      onClick: () => this.close(),
    });
    // Collapsing the sheet keeps only the title and the step buttons, so the view (and the
    // route drawn on the floor) can be seen on small screens.
    this.collapseButton = button(null, {
      className: 'icon-button guide-panel__collapse',
      icon: 'minus',
      label: t('guide.collapse'),
      attrs: { 'aria-expanded': 'true' },
      onClick: () => this.setCollapsed(!this.element.classList.contains('is-collapsed')),
    });
    this.scroller = el('div', { className: 'info-panel__scroll', attrs: { 'data-keys': 'scroll', tabindex: '-1' } }, this.content);
    this.element = el(
      'section',
      {
        className: 'info-panel guide-panel',
        hidden: true,
        attrs: { role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': 'guide-step-title' },
      },
      this.collapseButton,
      close,
      this.scroller
    );
    this.element.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        this.close();
      }
    });
    parent.appendChild(this.element);
  }

  get isOpen(): boolean {
    return this.guide !== null;
  }

  open(id: GuideId, index = -1): void {
    this.guide = GUIDES[id];
    this.index = index;
    this.element.hidden = false;
    document.body.classList.add('has-info-panel');
    this.render();
  }

  setCollapsed(collapsed: boolean): void {
    this.element.classList.toggle('is-collapsed', collapsed);
    this.collapseButton.setAttribute('aria-expanded', String(!collapsed));
    this.collapseButton.setAttribute('aria-label', t(collapsed ? 'guide.expand' : 'guide.collapse'));
    this.collapseButton.replaceChildren(icon(collapsed ? 'plus' : 'minus'));
  }

  close(): void {
    if (!this.guide) return;
    this.setCollapsed(false);
    this.guide = null;
    this.element.hidden = true;
    document.body.classList.remove('has-info-panel');
    this.actions.onClose();
  }

  private go(index: number): void {
    if (!this.guide) return;
    this.index = Math.max(-1, Math.min(this.guide.steps.length - 1, index));
    this.render();
  }

  private render(): void {
    const guide = this.guide;
    if (!guide) return;
    const step = this.index >= 0 ? guide.steps[this.index] : null;
    const nodes: Node[] = [];

    const counter = step ? t('guide.stepOf', { n: this.index + 1, total: guide.steps.length }) : t('guide.overview');
    nodes.push(
      el(
        'header',
        { className: 'place__header' },
        el('p', { className: 'place__category', text: `${localize(guide.title)} · ${counter}` }),
        el('h2', { className: 'place__title', id: 'guide-step-title', text: step ? localize(step.title) : localize(guide.title) })
      )
    );

    if (!step) {
      for (const paragraph of guide.intro) nodes.push(el('p', { text: localize(paragraph) }));
      const steps = el('ol', { className: 'guide__steps' });
      guide.steps.forEach((s, i) => {
        const item = el('button', { className: 'guide__step-link', text: localize(s.title), attrs: { type: 'button' } });
        item.addEventListener('click', () => this.go(i));
        steps.append(el('li', {}, item));
      });
      nodes.push(steps, el('p', { className: 'guide__disclaimer', text: t('guide.disclaimer') }));
      nodes.push(this.sourcesBlock(guide.sources));
    } else {
      const facts = el('p', { className: 'guide__facts' });
      if (step.when) facts.append(el('strong', { text: localize(step.when) }), ' · ');
      facts.append(localize(step.where));
      nodes.push(facts);
      if (!step.inMosque) nodes.push(el('p', { className: 'guide__badge', text: t('guide.outside') }));
      nodes.push(el('p', { className: 'place__summary', text: localize(step.summary) }));
      const points = el('ul', { className: 'guide__points' });
      for (const point of step.points) points.append(el('li', { text: localize(point) }));
      nodes.push(points);

      if (step.recitation) {
        const r = step.recitation;
        // Readers of Arabic script read the Arabic itself: no Latin transliteration for them,
        // and in Arabic no "meaning" either, only the source.
        const locale = getLocale();
        const arabicScript = ARABIC_SCRIPT.has(locale);
        nodes.push(
          el(
            'figure',
            { className: 'guide__recitation' },
            el('p', { className: 'guide__arabic', text: r.arabic, attrs: { lang: 'ar', dir: 'rtl' } }),
            ...(arabicScript ? [] : [el('p', { className: 'guide__translit', text: r.transliteration })]),
            el('figcaption', {
              text: locale === 'ar' ? `(${getSource(r.source).label})` : `${localize(r.meaning)} (${getSource(r.source).label})`,
            })
          )
        );
      }

      const actions = el('div', { className: 'info-panel__actions' });
      if (step.focus) {
        actions.append(
          button(t('guide.showMe'), {
            className: 'pill-button',
            icon: 'eye',
            onClick: () => {
              this.setCollapsed(true);
              this.actions.onShowPlace(step);
            },
          })
        );
      }
      if (step.route) {
        const label = step.route === 'tawaf' ? t('guide.walkTawaf') : t('guide.walkSai');
        const route = step.route;
        actions.append(
          button(label, {
            className: 'pill-button pill-button--primary',
            icon: 'walk',
            onClick: () => {
              this.setCollapsed(true);
              this.actions.onWalk(route);
            },
          })
        );
      }
      if (step.opensGuide) {
        const target = step.opensGuide;
        actions.append(
          button(localize(GUIDES[target].title), { className: 'pill-button', onClick: () => this.open(target, -1) })
        );
      }
      if (actions.childElementCount) nodes.push(actions);
      if (step.route) nodes.push(el('p', { className: 'field__hint', text: t(step.route === 'tawaf' ? 'guide.routeTawaf' : 'guide.routeSai') }));
      nodes.push(this.sourcesBlock(step.sources));
    }

    // Previous / next.
    const nav = el('nav', { className: 'guide__nav', attrs: { 'aria-label': t('guide.navigation') } });
    const previous = button(t('guide.previous'), { className: 'pill-button', onClick: () => this.go(this.index - 1) });
    previous.disabled = this.index < 0;
    const last = this.index >= guide.steps.length - 1;
    const next = button(this.index < 0 ? t('guide.start') : last ? t('guide.finish') : t('guide.next'), {
      className: 'pill-button pill-button--primary',
      onClick: () => (last ? this.close() : this.go(this.index + 1)),
    });
    nav.append(previous, next);
    nodes.push(nav);

    this.content.replaceChildren(...nodes);
    this.scroller.scrollTop = 0;
    const heading = this.element.querySelector<HTMLElement>('#guide-step-title');
    heading?.setAttribute('tabindex', '-1');
    heading?.focus({ preventScroll: true });
    this.actions.onStep(guide, step);
  }

  private sourcesBlock(ids: RiteStep['sources']): HTMLElement {
    const list = el('ul', { className: 'place__sources' });
    for (const id of ids) {
      const source = getSource(id);
      const link = el('a', { text: source.label, attrs: { href: source.url, target: '_blank', rel: 'noopener noreferrer' } });
      link.append(el('span', { className: 'visually-hidden', text: ` ${t('panel.opensInNewTab')}` }));
      list.append(el('li', {}, link));
    }
    return el('div', {}, el('h3', { className: 'place__sources-title', text: t('panel.sources') }), list);
  }
}
