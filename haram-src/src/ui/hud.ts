// The controls laid over the 3D view: the top bar (Back, Places, Settings, Help), the compass, and
// the device-specific controls (joystick and "Walk faster" on touch screens, mouse look and a
// short hint on desktops). Deliberately sparse — this is a place to look around, not a game.

import type { DeviceProfile } from '../boot/support';
import { CAMERA } from '../config';
import { t, type StringKey } from '../i18n/strings';
import { backLink } from './back-link';
import type { Level } from '../data/levels';
import { button, el, icon } from './dom';

export interface HudActions {
  onPlaces(opener: HTMLElement): void;
  onGuide(opener: HTMLElement): void;
  onSettings(opener: HTMLElement): void;
  onHelp(opener: HTMLElement): void;
  onMouseLook(): void;
  onFastToggle(active: boolean): void;
  onNightToggle(night: boolean): void;
  /** Multiply the zoom by this factor; 0 resets it. */
  onZoom(factor: number): void;
  /** Leave the current level: down from the balcony, or out of the Kaaba. */
  onLevelBack(): void;
}

/** Makes room in the top bar, one step at a time, until it fits on one line. */
function fitOnOneLine(bar: HTMLElement): void {
  const steps: [HTMLElement, string][] = [
    [bar, 'fold-back'], // Back shows only its arrow
    [bar, 'fold-guide'], // "Hajj and Umrah" only its book
    [document.body, 'has-compass-below'], // the compass moves just under the bar
    [bar, 'fold-places'], // Places only its icon — the last resort, being the main button
  ];
  for (const [element, name] of steps) element.classList.remove(name);
  for (const [element, name] of steps) {
    if (bar.scrollWidth <= bar.clientWidth + 1) return;
    element.classList.add(name);
  }
}

const DIRECTIONS: StringKey[] = [
  'directions.n',
  'directions.ne',
  'directions.e',
  'directions.se',
  'directions.s',
  'directions.sw',
  'directions.w',
  'directions.nw',
];

export class Hud {
  readonly root: HTMLDivElement;
  readonly bottomLeft: HTMLDivElement;
  private readonly compass: HTMLDivElement;
  private readonly dial: HTMLDivElement;
  private readonly hint: HTMLDivElement | null = null;
  private readonly crosshair: HTMLDivElement;
  private readonly mouseLookButton: HTMLButtonElement | null = null;
  private readonly fastButton: HTMLButtonElement | null = null;
  private readonly nightButton: HTMLButtonElement;
  private readonly zoomLevel: HTMLButtonElement;
  private readonly zoomIn: HTMLButtonElement;
  private readonly zoomOut: HTMLButtonElement;
  private readonly levelButton: HTMLButtonElement;
  private lastDirection = -1;
  /** Last rotation drawn; starts out of range so the first update always draws. */
  private lastDialDegrees = Number.POSITIVE_INFINITY;
  private fast = false;

  constructor(parent: HTMLElement, profile: DeviceProfile, actions: HudActions, homeHref: string) {
    const back = backLink(homeHref, 'hud-button hud-button--back');
    const places = button(t('hud.places'), {
      className: 'hud-button hud-button--places',
      icon: 'places',
      // Kept as the accessible name when the bar is too narrow for the text (fitOnOneLine).
      label: t('hud.places'),
      onClick: () => actions.onPlaces(places),
    });
    const guide = button(t('hud.guide'), {
      className: 'hud-button hud-button--guide',
      icon: 'book',
      // Kept as the accessible name when the text is hidden on small screens.
      label: t('hud.guide'),
      onClick: () => actions.onGuide(guide),
    });
    const settings = button(null, {
      className: 'hud-button icon-button',
      icon: 'settings',
      label: t('hud.settings'),
      onClick: () => actions.onSettings(settings),
    });
    // A toggle button: its name stays "Night view" and aria-pressed says whether it is on.
    this.nightButton = button(null, {
      className: 'hud-button icon-button',
      icon: 'moon',
      label: t('hud.nightView'),
      attrs: { 'aria-pressed': 'false' },
      onClick: () => {
        const night = this.nightButton.getAttribute('aria-pressed') !== 'true';
        this.setNight(night);
        actions.onNightToggle(night);
      },
    });
    const help = button(null, {
      className: 'hud-button icon-button',
      icon: 'help',
      label: t('hud.help'),
      onClick: () => actions.onHelp(help),
    });

    this.dial = el(
      'div',
      { className: 'compass__dial' },
      el('span', { className: 'compass__letter compass__letter--n', text: 'N' }),
      el('span', { className: 'compass__letter compass__letter--e', text: 'E' }),
      el('span', { className: 'compass__letter compass__letter--s', text: 'S' }),
      el('span', { className: 'compass__letter compass__letter--w', text: 'W' })
    );
    this.compass = el('div', { className: 'compass', attrs: { role: 'img' } }, this.dial);

    const topBar = el(
      'div',
      { className: 'hud__top' },
      el('div', { className: 'hud__group' }, back, places, guide),
      this.compass,
      el('div', { className: 'hud__group' }, this.nightButton, settings, help)
    );

    this.bottomLeft = el('div', { className: 'hud__bottom-left' });
    const bottomRight = el('div', { className: 'hud__bottom-right' });

    // Shown off the Haram's ground: on the balcony and inside the Kaaba.
    this.levelButton = button(t('hud.backDown'), {
      className: 'hud-button hud-button--level',
      icon: 'down',
      onClick: () => actions.onLevelBack(),
    });
    this.levelButton.hidden = true;

    if (profile.isTouch) {
      this.fastButton = button(t('hud.walkFaster'), {
        className: 'hud-button hud-button--toggle',
        icon: 'walk',
        attrs: { 'aria-pressed': 'false' },
        onClick: () => {
          this.fast = !this.fast;
          this.fastButton?.setAttribute('aria-pressed', String(this.fast));
          actions.onFastToggle(this.fast);
        },
      });
      this.bottomLeft.append(this.fastButton);
    }

    if (profile.hasFinePointer) {
      this.hint = el('div', { className: 'hud__hint', text: t('hud.desktopHint') });
      if (profile.pointerLock) {
        this.mouseLookButton = button(t('hud.mouseLook'), {
          className: 'hud-button hud-button--small',
          icon: 'mouse',
          onClick: () => actions.onMouseLook(),
        });
        bottomRight.append(this.mouseLookButton);
      }
    }

    // Zoom: + / − and the current level, which resets to 1× when pressed.
    this.zoomIn = button(null, {
      className: 'hud-button icon-button',
      icon: 'plus',
      label: t('hud.zoomIn'),
      onClick: () => actions.onZoom(CAMERA.zoomStep),
    });
    this.zoomOut = button(null, {
      className: 'hud-button icon-button',
      icon: 'minus',
      label: t('hud.zoomOut'),
      onClick: () => actions.onZoom(1 / CAMERA.zoomStep),
    });
    this.zoomLevel = button('1×', {
      className: 'hud-button icon-button hud-zoom__level',
      label: t('hud.zoomReset', { level: '1' }),
      onClick: () => actions.onZoom(0),
    });
    this.zoomLevel.hidden = true;
    const zoom = el('div', { className: 'hud-zoom', attrs: { role: 'group', 'aria-label': t('hud.zoom') } }, this.zoomIn, this.zoomLevel, this.zoomOut);
    bottomRight.prepend(zoom);

    this.crosshair = el('div', { className: 'crosshair', hidden: true, attrs: { 'aria-hidden': 'true' } });
    this.root = el('div', { className: 'hud' }, topBar, this.levelButton, this.bottomLeft, bottomRight, this.crosshair);
    if (this.hint) this.root.append(this.hint);
    parent.appendChild(this.root);

    // The bar stays on one line: when it does not fit, labels fold to icons (their names are
    // still read out) and the compass moves under it (fitOnOneLine). How much room the labels
    // need depends on the language, so the bar is measured rather than given fixed
    // breakpoints: whenever it changes size, and once the page's fonts have arrived.
    const fit = () => fitOnOneLine(topBar);
    fit();
    if (typeof ResizeObserver === 'function') new ResizeObserver(fit).observe(topBar);
    void document.fonts?.ready.then(fit);
  }

  /** Rotates the compass to the current heading (yaw 0 = facing north). */
  updateHeading(yaw: number): void {
    const degrees = (yaw * 180) / Math.PI;
    // (A comparison written this way is also true for the first, infinite, value.)
    if (!(Math.abs(degrees - this.lastDialDegrees) <= 0.2)) {
      this.dial.style.transform = `rotate(${degrees.toFixed(1)}deg)`;
      this.lastDialDegrees = degrees;
    }
    // Bearing clockwise from north, in eighths, for the accessible label.
    const bearing = ((-degrees % 360) + 360) % 360;
    const direction = Math.round(bearing / 45) % 8;
    if (direction !== this.lastDirection) {
      this.lastDirection = direction;
      this.compass.setAttribute('aria-label', t('hud.compass', { direction: t(DIRECTIONS[direction]) }));
    }
  }

  /** Shows the current zoom level (hidden at 1×) and disables + / − at the limits. */
  setZoom(zoom: number): void {
    const level = zoom < 1.05 ? 1 : Math.round(zoom * 10) / 10;
    this.zoomLevel.hidden = level === 1;
    const label = `${level}×`;
    const text = this.zoomLevel.querySelector('.button__text');
    if (text && text.textContent !== label) text.textContent = label;
    this.zoomLevel.setAttribute('aria-label', t('hud.zoomReset', { level: String(level) }));
    this.zoomIn.disabled = zoom >= CAMERA.maxZoom - 0.01;
    this.zoomOut.disabled = zoom <= 1.01;
  }

  /** Shows the way back for the current level (none on the Haram's ground). */
  setLevel(level: Level): void {
    const off = level !== 'ground';
    this.levelButton.hidden = !off;
    if (off) {
      const label = t(level === 'balcony' ? 'hud.backDown' : 'hud.leaveKaaba');
      this.levelButton.replaceChildren(icon(level === 'balcony' ? 'down' : 'back'), el('span', { className: 'button__text', text: label }));
    }
    // Moves notices down, out of the button's way (see CSS).
    document.body.classList.toggle('has-level-button', off);
  }

  setNight(night: boolean): void {
    this.nightButton.setAttribute('aria-pressed', String(night));
  }

  setPointerLocked(locked: boolean): void {
    this.crosshair.hidden = !locked;
    this.mouseLookButton?.setAttribute('aria-pressed', String(locked));
  }

  /** The desktop hint disappears once the visitor has started moving. */
  dismissHint(): void {
    if (this.hint && !this.hint.classList.contains('is-hidden')) this.hint.classList.add('is-hidden');
  }
}
