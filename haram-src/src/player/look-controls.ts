// Looking around: drag with a mouse, finger or pen on the 3D view, or (optionally, on
// desktops) mouse look with Pointer Lock.
//
// Dragging is the default everywhere because it needs nothing special from the browser.
// Pointer Lock is an opt-in extra; if the browser refuses it, dragging keeps working.
// A short press without movement is a tap/click, used to select the object under it.

import { CAMERA, INTERACTION } from '../config';

export interface LookCallbacks {
  /** A tap or click at client coordinates. In mouse-look mode, the centre of the view. */
  onTap(clientX: number, clientY: number): void;
  /** A double-click with a mouse (or pen). In mouse-look mode, the centre of the view. */
  onDoubleClick(clientX: number, clientY: number): void;
  /** Mouse hovering (not dragging) — used to show a pointer cursor over clickable objects. */
  onHover(clientX: number, clientY: number): void;
  onPointerLockChange(locked: boolean): void;
  onActivity(): void;
  /** Multiply the zoom by this factor (> 1 zooms in). */
  onZoom(factor: number): void;
}

const DOUBLE_CLICK_MS = 450;
const DOUBLE_CLICK_DISTANCE = 12;

interface Drag {
  pointerId: number;
  pointerType: string;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  startTime: number;
  moved: boolean;
}

export class LookControls {
  /** The visitor's sensitivity setting (multiplier). */
  sensitivity = 1;
  /** Reverse ("grab the world") drag direction instead of "turn the head". */
  reverse = false;

  private drag: Drag | null = null;
  /** Two fingers on the view: pinch to zoom. */
  private pinch: { a: number; b: number; distance: number } | null = null;
  private readonly touches = new Map<number, { x: number; y: number }>();
  private gestureScale = 1;
  /** The previous click, for spotting double-clicks. */
  private lastClick = { time: -Infinity, x: 0, y: 0 };
  private pendingYaw = 0;
  private pendingPitch = 0;
  private locked = false;
  private readonly controller = new AbortController();

  constructor(
    private readonly element: HTMLElement,
    private readonly callbacks: LookCallbacks
  ) {}

  get isPointerLocked(): boolean {
    return this.locked;
  }

  get isDragging(): boolean {
    return this.drag !== null && this.drag.moved;
  }

  attach(): void {
    const el = this.element;
    const signal = this.controller.signal;

    el.addEventListener('pointerdown', (e) => this.onPointerDown(e), { signal });
    el.addEventListener('pointermove', (e) => this.onPointerMove(e), { signal });
    el.addEventListener('pointerup', (e) => this.onPointerUp(e, true), { signal });
    el.addEventListener('pointercancel', (e) => this.onPointerUp(e, false), { signal });
    el.addEventListener('lostpointercapture', (e) => this.onPointerUp(e, false), { signal });
    // Right-drag is allowed for looking, so the context menu has no use over the 3D view.
    el.addEventListener('contextmenu', (e) => e.preventDefault(), { signal });
    // Belt and braces for older iOS: stop the page from scrolling or bouncing under a drag.
    el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false, signal });
    // Mouse wheel and trackpad pinch (which browsers report as a wheel with Ctrl held) zoom
    // the view instead of scrolling or zooming the page.
    el.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const unit = e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? 800 : 1;
        const rate = e.ctrlKey ? 0.01 : 0.0015;
        this.callbacks.onZoom(Math.exp(-e.deltaY * unit * rate));
      },
      { passive: false, signal }
    );
    // Safari's own pinch gesture (trackpad on a Mac) would zoom the whole page: use it to zoom
    // the view. On touch screens the pinch is handled with pointer events below instead.
    el.addEventListener(
      'gesturestart',
      (e) => {
        e.preventDefault();
        this.gestureScale = 1;
      },
      { signal } as AddEventListenerOptions
    );
    el.addEventListener(
      'gesturechange',
      (e) => {
        e.preventDefault();
        const scale = (e as Event & { scale?: number }).scale ?? 1;
        if (this.touches.size === 0 && scale > 0) this.callbacks.onZoom(scale / this.gestureScale);
        this.gestureScale = scale;
      },
      { signal } as AddEventListenerOptions
    );

    document.addEventListener(
      'pointerlockchange',
      () => {
        this.locked = document.pointerLockElement === el;
        this.callbacks.onPointerLockChange(this.locked);
      },
      { signal }
    );
    document.addEventListener('mousemove', (e) => this.onLockedMove(e), { signal });
  }

  /** Returns and clears the look rotation gathered since the last frame (radians). */
  consume(): { yaw: number; pitch: number } {
    const result = { yaw: this.pendingYaw, pitch: this.pendingPitch };
    this.pendingYaw = 0;
    this.pendingPitch = 0;
    return result;
  }

  /** Asks for mouse look. Resolves false if the browser refuses (it is never required). */
  async requestPointerLock(): Promise<boolean> {
    const el = this.element as HTMLElement & { requestPointerLock?: () => Promise<void> | void };
    if (typeof el.requestPointerLock !== 'function') return false;
    try {
      const result = el.requestPointerLock();
      if (result && typeof (result as Promise<void>).then === 'function') await result;
      return true;
    } catch {
      return false;
    }
  }

  exitPointerLock(): void {
    if (document.pointerLockElement === this.element) document.exitPointerLock?.();
  }

  detach(): void {
    this.exitPointerLock();
    this.controller.abort();
  }

  // ---- internals --------------------------------------------------------------------------

  private onPointerDown(e: PointerEvent): void {
    if (this.locked) {
      // In mouse-look mode a click selects whatever is in the centre of the view.
      if (e.button === 0) {
        const rect = this.element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        this.callbacks.onTap(x, y);
        this.registerClick(x, y);
      }
      return;
    }
    if (e.pointerType === 'touch') this.touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.drag) {
      // A second finger on the view: switch from looking to pinch-zooming.
      if (e.pointerType === 'touch' && this.drag.pointerType === 'touch' && !this.pinch) {
        const first = this.touches.get(this.drag.pointerId);
        if (first) {
          this.pinch = { a: this.drag.pointerId, b: e.pointerId, distance: Math.hypot(e.clientX - first.x, e.clientY - first.y) };
          this.drag.moved = true; // never a tap
          try {
            this.element.setPointerCapture(e.pointerId);
          } catch {
            // Fine without capture.
          }
        }
      }
      return;
    }
    if (e.pointerType === 'mouse' && e.button !== 0 && e.button !== 2) return;
    this.drag = {
      pointerId: e.pointerId,
      pointerType: e.pointerType,
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      lastY: e.clientY,
      startTime: performance.now(),
      moved: false,
    };
    try {
      this.element.setPointerCapture(e.pointerId);
    } catch {
      // Capture is a convenience (keeps the drag going outside the canvas); fine without it.
    }
    if (e.pointerType === 'mouse') e.preventDefault();
  }

  private onPointerMove(e: PointerEvent): void {
    if (this.locked) return;
    if (e.pointerType === 'touch' && this.touches.has(e.pointerId)) this.touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pinch = this.pinch;
    if (pinch) {
      const a = this.touches.get(pinch.a);
      const b = this.touches.get(pinch.b);
      if (a && b) {
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch.distance > 0 && distance > 0) this.callbacks.onZoom(distance / pinch.distance);
        pinch.distance = distance;
        this.callbacks.onActivity();
      }
      return;
    }
    const drag = this.drag;
    if (!drag || e.pointerId !== drag.pointerId) {
      if (!drag && e.pointerType === 'mouse') this.callbacks.onHover(e.clientX, e.clientY);
      return;
    }
    const dx = e.clientX - drag.lastX;
    const dy = e.clientY - drag.lastY;
    drag.lastX = e.clientX;
    drag.lastY = e.clientY;
    if (!drag.moved && Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) > INTERACTION.tapMaxMove) {
      drag.moved = true;
    }
    if (!drag.moved) return;
    const base = drag.pointerType === 'mouse' ? CAMERA.mouseDragSensitivity : CAMERA.touchSensitivity;
    const k = base * this.sensitivity * (this.reverse ? -1 : 1);
    // Drag right → turn right (yaw decreases); drag up → look up.
    this.pendingYaw -= dx * k;
    this.pendingPitch -= dy * k;
    this.callbacks.onActivity();
  }

  private onPointerUp(e: PointerEvent, allowTap: boolean): void {
    this.touches.delete(e.pointerId);
    if (this.pinch && (e.pointerId === this.pinch.a || e.pointerId === this.pinch.b)) {
      // Ending a pinch ends the gesture; the remaining finger must lift before looking again,
      // so the view does not jump.
      this.pinch = null;
      this.drag = null;
      return;
    }
    const drag = this.drag;
    if (!drag || e.pointerId !== drag.pointerId) return;
    this.drag = null;
    try {
      if (this.element.hasPointerCapture(e.pointerId)) this.element.releasePointerCapture(e.pointerId);
    } catch {
      // Already released.
    }
    if (allowTap && e.type === 'pointerup' && !drag.moved && performance.now() - drag.startTime < INTERACTION.tapMaxMs) {
      if (drag.pointerType !== 'mouse' || e.button === 0) {
        this.callbacks.onTap(e.clientX, e.clientY);
        // Double-click to walk is for mice and pens; touch screens have the joystick.
        if (drag.pointerType !== 'touch') this.registerClick(e.clientX, e.clientY);
      }
    }
  }

  private registerClick(x: number, y: number): void {
    const now = performance.now();
    const last = this.lastClick;
    if (now - last.time < DOUBLE_CLICK_MS && Math.hypot(x - last.x, y - last.y) < DOUBLE_CLICK_DISTANCE) {
      this.lastClick = { time: -Infinity, x: 0, y: 0 };
      this.callbacks.onDoubleClick(x, y);
    } else {
      this.lastClick = { time: now, x, y };
    }
  }

  private onLockedMove(e: MouseEvent): void {
    if (!this.locked) return;
    const k = CAMERA.pointerLockSensitivity * this.sensitivity;
    // Ignore the occasional huge jump some browsers report when the lock engages.
    if (Math.abs(e.movementX) > 300 || Math.abs(e.movementY) > 300) return;
    this.pendingYaw -= e.movementX * k;
    this.pendingPitch -= e.movementY * k;
    this.callbacks.onActivity();
  }
}
