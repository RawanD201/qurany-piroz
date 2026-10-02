// Keyboard movement: W A S D (by physical key position, so it works on any layout) and the
// arrow keys, with Shift to walk faster.

type Direction = 'forward' | 'back' | 'left' | 'right';

const KEY_DIRECTIONS: Record<string, Direction> = {
  KeyW: 'forward',
  ArrowUp: 'forward',
  KeyS: 'back',
  ArrowDown: 'back',
  KeyA: 'left',
  ArrowLeft: 'left',
  KeyD: 'right',
  ArrowRight: 'right',
};

const ARROWS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);

/** Whether a key press should be left to the page (typing, sliders, scrolling a panel…). */
export type KeyBlocker = (event: KeyboardEvent) => boolean;

export function isTextEntry(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

export class KeyboardInput {
  private readonly pressed = new Set<string>();
  private shift = false;
  private readonly controller = new AbortController();

  constructor(
    private readonly isBlocked: KeyBlocker,
    private readonly onActivity: () => void
  ) {}

  attach(): void {
    const signal = this.controller.signal;
    window.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Shift') this.shift = true;
        if (event.ctrlKey || event.metaKey || event.altKey) return;
        const direction = KEY_DIRECTIONS[event.code] ?? KEY_DIRECTIONS[event.key];
        if (!direction || this.isBlocked(event)) return;
        this.pressed.add(KEY_DIRECTIONS[event.code] ? event.code : event.key);
        if (ARROWS.has(event.key)) event.preventDefault();
        this.onActivity();
      },
      { signal }
    );
    window.addEventListener(
      'keyup',
      (event) => {
        if (event.key === 'Shift') this.shift = false;
        // Always honour key-ups, even when blocked, so no key can get stuck down.
        this.pressed.delete(event.code);
        this.pressed.delete(event.key);
      },
      { signal }
    );
    // Releasing everything when the window loses focus prevents "stuck" movement after
    // switching apps mid-step.
    const releaseAll = () => {
      this.pressed.clear();
      this.shift = false;
    };
    window.addEventListener('blur', releaseAll, { signal });
    document.addEventListener('visibilitychange', releaseAll, { signal });
  }

  /** Clears held keys (e.g. when a dialog opens over the view). */
  reset(): void {
    this.pressed.clear();
  }

  get active(): boolean {
    return this.pressed.size > 0;
  }

  intent(): { x: number; y: number; fast: boolean } {
    let x = 0;
    let y = 0;
    for (const key of this.pressed) {
      switch (KEY_DIRECTIONS[key]) {
        case 'forward':
          y += 1;
          break;
        case 'back':
          y -= 1;
          break;
        case 'left':
          x -= 1;
          break;
        case 'right':
          x += 1;
          break;
      }
    }
    return { x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)), fast: this.shift };
  }

  detach(): void {
    this.controller.abort();
  }
}

export function isArrowKey(event: KeyboardEvent): boolean {
  return ARROWS.has(event.key);
}
