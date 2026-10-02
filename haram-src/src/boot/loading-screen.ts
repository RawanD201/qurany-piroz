// Drives the loading screen that index.html already shows before any script runs.
//
// Progress only ever moves forwards. While a download is in flight (where the browser gives no
// byte count), the bar creeps slowly towards the next milestone so it never looks stuck.

import { t } from '../i18n/strings';

export class LoadingScreen {
  private readonly bar: HTMLElement | null;
  private readonly progress: HTMLElement | null;
  private readonly percent: HTMLElement | null;
  private readonly status: HTMLElement | null;
  private readonly ready: HTMLElement | null;
  private readonly warnings: HTMLElement | null;
  private value = 0;
  private creepTimer = 0;

  constructor(readonly element: HTMLElement) {
    this.bar = element.querySelector('.loading__bar');
    this.progress = element.querySelector('[role="progressbar"]');
    this.percent = element.querySelector('.loading__percent');
    this.status = element.querySelector('.loading__status');
    this.ready = element.querySelector('.loading__ready');
    this.warnings = element.querySelector('.loading__warnings');
  }

  /** Sets progress (0–1) and, optionally, the status line. */
  set(fraction: number, status?: string): void {
    this.stopCreep();
    this.apply(Math.max(this.value, Math.min(1, fraction)));
    if (status && this.status && this.status.textContent !== status) this.status.textContent = status;
  }

  /** Slowly approaches `target` over roughly `durationMs`, until the next `set`. */
  creep(target: number, durationMs: number): void {
    this.stopCreep();
    const start = this.value;
    const began = performance.now();
    const tick = () => {
      const elapsed = performance.now() - began;
      // Ease out and never quite arrive: the real milestone will arrive instead.
      const k = 1 - Math.exp(-elapsed / (durationMs / 2.5));
      this.apply(start + (target - start) * k * 0.97);
      this.creepTimer = window.setTimeout(tick, 120);
    };
    tick();
  }

  warn(message: string): void {
    if (!this.warnings) return;
    const p = document.createElement('p');
    p.textContent = message;
    this.warnings.append(p);
    this.warnings.hidden = false;
  }

  /** Shows the "Start exploring" step with the controls for this device. */
  showReady(hints: string[], onStart: () => void): void {
    this.set(1, t('loading.ready'));
    if (!this.ready) {
      onStart();
      return;
    }
    const list = this.ready.querySelector('.loading__hints');
    if (list) {
      list.replaceChildren(
        ...hints.map((hint) => {
          const li = document.createElement('li');
          li.textContent = hint;
          return li;
        })
      );
    }
    const start = this.ready.querySelector<HTMLButtonElement>('.loading__start');
    this.element.classList.add('is-ready');
    this.ready.hidden = false;
    if (start) {
      start.textContent = t('loading.start');
      start.addEventListener('click', onStart, { once: true });
      start.focus({ preventScroll: true });
    }
  }

  hide(): void {
    this.stopCreep();
    this.element.classList.add('is-hidden');
    window.setTimeout(() => {
      this.element.hidden = true;
    }, 400);
  }

  private apply(value: number): void {
    this.value = value;
    const pct = Math.round(value * 100);
    if (this.bar) this.bar.style.transform = `scaleX(${value.toFixed(3)})`;
    if (this.percent) this.percent.textContent = `${pct}%`;
    this.progress?.setAttribute('aria-valuenow', String(pct));
  }

  private stopCreep(): void {
    window.clearTimeout(this.creepTimer);
  }
}
