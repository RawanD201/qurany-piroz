// Brief status messages (announced to screen readers) and the fade used when travelling.

import { el } from './dom';

export class Toast {
  private readonly element: HTMLDivElement;
  private timer = 0;

  constructor(parent: HTMLElement) {
    this.element = el('div', { className: 'toast', attrs: { role: 'status', 'aria-live': 'polite' } });
    parent.appendChild(this.element);
  }

  show(message: string, durationMs = 3200): void {
    window.clearTimeout(this.timer);
    this.element.textContent = message;
    this.element.classList.add('is-visible');
    this.timer = window.setTimeout(() => this.element.classList.remove('is-visible'), durationMs);
  }
}

/**
 * Travelling to a place is a short fade-out / fade-in rather than a flight through the
 * buildings: comfortable (no motion sickness) and it never passes through walls.
 */
export class Fade {
  private readonly element: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.element = el('div', { className: 'fade', attrs: { 'aria-hidden': 'true' } });
    parent.appendChild(this.element);
  }

  async run(midpoint: () => void, reducedMotion: boolean): Promise<void> {
    const duration = reducedMotion ? 120 : 260;
    this.element.style.transitionDuration = `${duration}ms`;
    this.element.classList.add('is-active');
    await new Promise((resolve) => window.setTimeout(resolve, duration));
    midpoint();
    // Give the new view one frame to render before revealing it.
    await new Promise((resolve) => requestAnimationFrame(() => resolve(undefined)));
    this.element.classList.remove('is-active');
  }
}
