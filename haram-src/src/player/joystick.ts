// The on-screen joystick for touch screens.
//
// A fixed circle at the bottom left: put a thumb on it and push in the direction to walk.
// It uses Pointer Events with pointer capture, so it works alongside a second finger dragging
// the view, and touch-action: none (set in CSS) so the browser never scrolls or zooms instead.

import { INTERACTION } from '../config';

export class VirtualJoystick {
  readonly element: HTMLDivElement;
  /** -1 (left) to 1 (right). */
  x = 0;
  /** -1 (back) to 1 (forward). */
  y = 0;

  private readonly knob: HTMLDivElement;
  private pointerId: number | null = null;
  private center = { x: 0, y: 0 };
  private radius = 1;
  private readonly controller = new AbortController();

  constructor(
    parent: HTMLElement,
    private readonly onActivity: () => void
  ) {
    this.element = document.createElement('div');
    this.element.className = 'joystick';
    // A drag control, not a button: screen-reader users move between places with the Places
    // menu instead, so the joystick is hidden from assistive technology.
    this.element.setAttribute('aria-hidden', 'true');
    this.knob = document.createElement('div');
    this.knob.className = 'joystick__knob';
    this.element.appendChild(this.knob);
    parent.appendChild(this.element);
  }

  get active(): boolean {
    return this.pointerId !== null;
  }

  attach(): void {
    const el = this.element;
    const signal = this.controller.signal;
    el.addEventListener(
      'pointerdown',
      (e) => {
        if (this.pointerId !== null) return;
        this.pointerId = e.pointerId;
        const rect = el.getBoundingClientRect();
        this.center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        this.radius = rect.width / 2;
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          // Fine without capture; moves outside the circle are still delivered while held.
        }
        el.classList.add('is-active');
        this.update(e.clientX, e.clientY);
        e.preventDefault();
      },
      { signal }
    );
    el.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerId === this.pointerId) this.update(e.clientX, e.clientY);
      },
      { signal }
    );
    const end = (e: PointerEvent) => {
      if (e.pointerId !== this.pointerId) return;
      this.release();
    };
    el.addEventListener('pointerup', end, { signal });
    el.addEventListener('pointercancel', end, { signal });
    el.addEventListener('lostpointercapture', end, { signal });
    el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false, signal });
    el.addEventListener('contextmenu', (e) => e.preventDefault(), { signal });
  }

  release(): void {
    this.pointerId = null;
    this.x = 0;
    this.y = 0;
    this.knob.style.transform = '';
    this.element.classList.remove('is-active');
  }

  setVisible(visible: boolean): void {
    this.element.hidden = !visible;
    if (!visible) this.release();
  }

  detach(): void {
    this.controller.abort();
    this.element.remove();
  }

  private update(clientX: number, clientY: number): void {
    let dx = clientX - this.center.x;
    let dy = clientY - this.center.y;
    const distance = Math.hypot(dx, dy);
    const max = this.radius * 0.72;
    if (distance > max) {
      dx = (dx / distance) * max;
      dy = (dy / distance) * max;
    }
    this.knob.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    let nx = dx / max;
    let ny = -dy / max;
    const magnitude = Math.hypot(nx, ny);
    if (magnitude < INTERACTION.joystickDeadZone) {
      nx = 0;
      ny = 0;
    } else {
      // Rescale so movement starts smoothly from the edge of the dead zone.
      const scaled = (magnitude - INTERACTION.joystickDeadZone) / (1 - INTERACTION.joystickDeadZone);
      nx = (nx / magnitude) * scaled;
      ny = (ny / magnitude) * scaled;
    }
    this.x = nx;
    this.y = ny;
    this.onActivity();
  }
}
