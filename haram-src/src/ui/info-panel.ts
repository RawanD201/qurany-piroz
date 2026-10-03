// The information panel for a selected place.
//
// Not modal: on larger screens it sits at the side and the visitor can keep walking and
// looking while reading. On phones it is a bottom sheet that scrolls on its own; the joystick
// steps aside while it is open (see CSS), and the close button is always in reach.

import { PLACE_LOCATIONS } from '../data/place-locations';
import { getPlaceContent, type PlaceId } from '../data/places';
import { t } from '../i18n/strings';
import { button, el } from './dom';
import { placeBody, placeHeading } from './place-text';

export interface InfoPanelActions {
  onGoThere(id: PlaceId): void;
  onLookAt(id: PlaceId): void;
  /** Goes up to the clock tower's balcony (offered where the place's location allows it). */
  onBalcony?(id: PlaceId): void;
  /** Goes inside the Kaaba (offered on the Kaaba's and its door's panels). */
  onEnterKaaba?(id: PlaceId): void;
  /** Brings the stairs to the Kaaba's door, or takes them away (offered with "Go inside"). */
  onToggleStairs?(): void;
  /** Opens or closes the Kaaba's door. */
  onToggleDoor?(): void;
  onClose(id: PlaceId): void;
}

export class InfoPanel {
  readonly element: HTMLElement;
  private readonly content: HTMLDivElement;
  private readonly scroller: HTMLDivElement;
  private current: PlaceId | null = null;
  private returnFocus: HTMLElement | null = null;
  private stairs = false;
  private stairsButton: HTMLButtonElement | null = null;
  private doorOpen = false;
  private doorButton: HTMLButtonElement | null = null;

  constructor(
    parent: HTMLElement,
    private readonly actions: InfoPanelActions
  ) {
    this.content = el('div', { className: 'info-panel__content' });
    const close = button(null, {
      className: 'icon-button info-panel__close',
      icon: 'close',
      label: t('panel.close'),
      onClick: () => this.close(),
    });
    // Arrow keys scroll this region instead of moving the visitor (see keyboard handling).
    this.scroller = el('div', { className: 'info-panel__scroll', attrs: { 'data-keys': 'scroll', tabindex: '-1' } }, this.content);
    this.element = el(
      'section',
      {
        className: 'info-panel',
        hidden: true,
        attrs: { role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': 'info-panel-title' },
      },
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

  get openPlace(): PlaceId | null {
    return this.current;
  }

  /** Whether the stairs stand at the Kaaba's door (their button then offers to take them away). */
  setStairs(shown: boolean): void {
    this.stairs = shown;
    const text = this.stairsButton?.querySelector('.button__text');
    if (text) text.textContent = this.stairsLabel();
  }

  private stairsLabel(): string {
    return t(this.stairs ? 'panel.removeStairs' : 'panel.bringStairs');
  }

  /** Whether the Kaaba's door is open (its button then offers to close it). */
  setDoor(open: boolean): void {
    this.doorOpen = open;
    const text = this.doorButton?.querySelector('.button__text');
    if (text) text.textContent = this.doorLabel();
  }

  private doorLabel(): string {
    return t(this.doorOpen ? 'panel.closeDoor' : 'panel.openDoor');
  }

  show(id: PlaceId, returnFocus?: HTMLElement | null, moveFocus = true): void {
    const place = getPlaceContent(id);
    this.current = id;
    this.returnFocus = returnFocus ?? null;
    const inside = PLACE_LOCATIONS[id].inside ?? false;
    this.stairsButton =
      inside && this.actions.onToggleStairs
        ? button(this.stairsLabel(), { className: 'pill-button', icon: 'stairs', onClick: () => this.actions.onToggleStairs?.() })
        : null;
    this.doorButton =
      PLACE_LOCATIONS[id].door && this.actions.onToggleDoor
        ? button(this.doorLabel(), { className: 'pill-button', icon: 'door', onClick: () => this.actions.onToggleDoor?.() })
        : null;
    this.content.replaceChildren(
      placeHeading(place, 'info-panel-title'),
      el(
        'div',
        { className: 'info-panel__actions' },
        button(t('panel.goThere'), { className: 'pill-button pill-button--primary', icon: 'pin', onClick: () => this.actions.onGoThere(id) }),
        button(t('panel.lookAt'), { className: 'pill-button', icon: 'eye', onClick: () => this.actions.onLookAt(id) }),
        ...(PLACE_LOCATIONS[id].balcony && this.actions.onBalcony
          ? [button(t('panel.balcony'), { className: 'pill-button', icon: 'up', onClick: () => this.actions.onBalcony?.(id) })]
          : []),
        ...(inside && this.actions.onEnterKaaba
          ? [button(t('panel.enterKaaba'), { className: 'pill-button', icon: 'home', onClick: () => this.actions.onEnterKaaba?.(id) })]
          : []),
        this.stairsButton,
        this.doorButton
      ),
      placeBody(place)
    );
    this.element.hidden = false;
    this.scroller.scrollTop = 0;
    document.body.classList.add('has-info-panel');
    if (moveFocus) {
      const heading = this.element.querySelector<HTMLElement>('#info-panel-title');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }
  }

  close(): void {
    if (!this.current) return;
    const id = this.current;
    this.current = null;
    this.element.hidden = true;
    document.body.classList.remove('has-info-panel');
    const target = this.returnFocus;
    this.returnFocus = null;
    if (target && document.contains(target) && !target.hidden && target.offsetParent !== null) {
      target.focus({ preventScroll: true });
    }
    this.actions.onClose(id);
  }
}
