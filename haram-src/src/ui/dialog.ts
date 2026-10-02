// An accessible modal dialog: focus moves into it and is kept there, Escape or the close
// button closes it, focus returns to whatever opened it, and the content behind is hidden from
// screen readers while it is open.
//
// Built from plain elements with ARIA rather than <dialog>, which older iOS Safari versions
// (before 15.4) do not support.

import { button, el, focusables } from './dom';

let openDialogs = 0;

/** Whether any modal dialog is open (movement keys are ignored while one is). */
export function isModalOpen(): boolean {
  return openDialogs > 0;
}

export interface DialogOptions {
  id: string;
  title: string;
  closeLabel: string;
  /** Elements to hide from assistive technology while the dialog is open. */
  background: () => HTMLElement[];
  onClose?: () => void;
  className?: string;
}

export class Dialog {
  readonly backdrop: HTMLDivElement;
  readonly panel: HTMLDivElement;
  readonly body: HTMLDivElement;
  private opener: HTMLElement | null = null;
  private open = false;

  constructor(
    parent: HTMLElement,
    private readonly options: DialogOptions
  ) {
    const titleId = `${options.id}-title`;
    const heading = el('h2', { id: titleId, className: 'dialog__title', text: options.title });
    const close = button(null, {
      className: 'icon-button dialog__close',
      icon: 'close',
      label: options.closeLabel,
      onClick: () => this.close(),
    });
    this.body = el('div', { className: 'dialog__body' });
    this.panel = el(
      'div',
      {
        className: `dialog ${options.className ?? ''}`.trim(),
        id: options.id,
        attrs: { role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId, tabindex: '-1' },
      },
      el('div', { className: 'dialog__header' }, heading, close),
      this.body
    );
    this.backdrop = el('div', { className: 'dialog-backdrop', hidden: true }, this.panel);
    // A press on the dimmed area outside the panel closes it.
    this.backdrop.addEventListener('pointerdown', (event) => {
      if (event.target === this.backdrop) this.close();
    });
    this.panel.addEventListener('keydown', (event) => this.onKeyDown(event));
    parent.appendChild(this.backdrop);
  }

  get isOpen(): boolean {
    return this.open;
  }

  show(opener?: HTMLElement | null): void {
    if (this.open) return;
    this.open = true;
    openDialogs++;
    this.opener = opener ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    this.backdrop.hidden = false;
    for (const element of this.options.background()) element.setAttribute('aria-hidden', 'true');
    // Focus the first control, or the panel itself.
    const first = focusables(this.body)[0];
    (first ?? this.panel).focus({ preventScroll: true });
  }

  close(): void {
    if (!this.open) return;
    this.open = false;
    openDialogs = Math.max(0, openDialogs - 1);
    this.backdrop.hidden = true;
    if (openDialogs === 0) {
      for (const element of this.options.background()) element.removeAttribute('aria-hidden');
    }
    const opener = this.opener;
    this.opener = null;
    if (opener && document.contains(opener) && !opener.hidden) opener.focus({ preventScroll: true });
    this.options.onClose?.();
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.stopPropagation();
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables(this.panel);
    if (items.length === 0) {
      event.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === this.panel)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
