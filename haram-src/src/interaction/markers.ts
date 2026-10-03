// The "ⓘ Place name" markers floating over important places.
//
// Markers are ordinary HTML <button>s laid over the canvas, not 3D objects: they stay sharp,
// are at least 44×44 CSS px, work with touch, mouse and keyboard, and are announced properly
// by screen readers. Each frame (only when the view changed) every marker is projected onto the
// screen; it is hidden when it is behind the camera, too far away, behind a wall, or would
// overlap a nearer marker.

import { Vector3, type PerspectiveCamera } from 'three';
import type { Level } from '../data/levels';
import type { PlaceLocation } from '../data/place-locations';
import type { PlaceContent, PlaceId } from '../data/places';
import { localize } from '../i18n/locale';
import { t } from '../i18n/strings';
import type { CollisionWorld } from '../physics/collision';

interface Marker {
  id: PlaceId;
  /** The level the place is on: its marker shows only there. */
  level: Level;
  button: HTMLButtonElement;
  anchor: Vector3;
  range: number;
  alwaysVisible: boolean;
  sightClearance: number;
  priority: number;
  labelWidth: number;
  /** Cached line-of-sight result and where it was computed from. */
  sight: boolean;
  sightFrom: { x: number; z: number } | null;
  shown: boolean;
  near: boolean;
}

const MARKER_HEIGHT = 44;
const EDGE_MARGIN = 8;
/** Markers are kept out of the strip occupied by the top bar (Places, compass, Settings). */
const TOP_BAR_CLEARANCE = 76;
/** Beyond this fraction of its range, a marker shows only its ⓘ icon (less clutter). */
const LABEL_FRACTION = 0.85;

export class MarkerLayer {
  private readonly markers: Marker[] = [];
  private enabled = true;
  private elevated = false;
  /** Size of the labels, as a fraction of full size (the visitor's setting). */
  private scale = 1;
  private activeId: PlaceId | null = null;
  private readonly projected = new Vector3();
  private readonly viewSpace = new Vector3();
  private sightCursor = 0;
  private level: Level = 'ground';

  constructor(
    private readonly container: HTMLElement,
    places: readonly PlaceContent[],
    locations: Readonly<Record<PlaceId, PlaceLocation>>,
    private collision: CollisionWorld,
    onSelect: (id: PlaceId, button: HTMLButtonElement) => void
  ) {
    for (const place of places) {
      const location = locations[place.id];
      const name = localize(place.name);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'marker';
      button.hidden = true;
      button.setAttribute('aria-label', t('hud.markerLabel', { name }));
      const icon = document.createElement('span');
      icon.className = 'marker__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = 'i';
      const label = document.createElement('span');
      label.className = 'marker__label';
      label.setAttribute('aria-hidden', 'true');
      label.textContent = name;
      button.append(icon, label);
      button.addEventListener('click', () => onSelect(place.id, button));
      container.appendChild(button);
      this.markers.push({
        id: place.id,
        level: location.level ?? 'ground',
        button,
        anchor: new Vector3(location.anchor.x, location.anchor.y, location.anchor.z),
        range: location.markerRange,
        alwaysVisible: location.alwaysVisible ?? false,
        sightClearance: location.sightClearance ?? 1.5,
        priority: location.priority ?? 0,
        // Rough width for overlap tests, refined after the first layout.
        labelWidth: 44 + name.length * 7.5,
        sight: true,
        sightFrom: null,
        shown: false,
        near: true,
      });
    }
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    this.container.hidden = !enabled;
  }

  setActive(id: PlaceId | null): void {
    this.activeId = id;
    for (const m of this.markers) m.button.classList.toggle('is-active', m.id === id);
  }

  buttonFor(id: PlaceId): HTMLButtonElement | null {
    return this.markers.find((m) => m.id === id)?.button ?? null;
  }

  /**
   * High up (the clock-tower balcony), the view clears every wall: line of sight is not
   * tested, and the main places (priority 1 and up) are labelled at any distance.
   */
  setElevated(elevated: boolean): void {
    this.elevated = elevated;
  }

  /**
   * Shows only the markers of the level the visitor is on (from the balcony, the ground's), and
   * tests line of sight against that level's collision world.
   */
  setLevel(level: Level, collision: CollisionWorld): void {
    this.level = level;
    this.collision = collision;
    this.elevated = level === 'balcony';
    for (const m of this.markers) m.sightFrom = null;
  }

  private onThisLevel(m: Marker): boolean {
    return m.level === this.level || (this.level === 'balcony' && m.level === 'ground');
  }

  /** Sets the labels' size (1 = full size); takes effect on the next update. */
  setScale(scale: number): void {
    this.scale = scale;
  }

  /** Repositions every marker for the current camera. */
  update(camera: PerspectiveCamera, width: number, height: number): void {
    if (!this.enabled) return;
    const eye = camera.position;

    // Line of sight is the expensive part: refresh a few markers per frame, round-robin, and
    // any marker whose cached answer was computed from somewhere else.
    for (let n = 0; n < 4; n++) {
      const m = this.markers[this.sightCursor];
      this.sightCursor = (this.sightCursor + 1) % this.markers.length;
      this.refreshSight(m, eye.x, eye.z);
    }

    const candidates: { m: Marker; x: number; y: number; distance: number; width: number }[] = [];
    for (const m of this.markers) {
      if (!this.onThisLevel(m)) {
        this.hide(m);
        continue;
      }
      const distance = eye.distanceTo(m.anchor);
      const range = this.elevated && m.priority >= 1 ? Infinity : m.range;
      let visible = distance <= range;
      if (visible) {
        this.viewSpace.copy(m.anchor).applyMatrix4(camera.matrixWorldInverse);
        visible = this.viewSpace.z < -0.5; // in front of the camera
      }
      if (visible) {
        if (this.elevated) {
          // Only what lies below: the clock tower's own marker is overhead.
          visible = m.anchor.y < eye.y - 20;
        } else {
          if (m.sightFrom === null || Math.hypot(m.sightFrom.x - eye.x, m.sightFrom.z - eye.z) > 3) {
            this.refreshSight(m, eye.x, eye.z);
          }
          visible = m.sight;
        }
      }
      if (!visible) {
        this.hide(m);
        continue;
      }
      this.projected.copy(m.anchor).project(camera);
      const x = (this.projected.x * 0.5 + 0.5) * width;
      const y = (-this.projected.y * 0.5 + 0.5) * height;
      if (x < -EDGE_MARGIN || x > width + EDGE_MARGIN || y < TOP_BAR_CLEARANCE || y > height + EDGE_MARGIN) {
        this.hide(m);
        continue;
      }
      const near = distance <= range * LABEL_FRACTION || m.id === this.activeId;
      candidates.push({ m, x, y, distance, width: (near ? m.labelWidth : MARKER_HEIGHT) * this.scale });
      m.near = near;
    }

    // The selected place always wins, then the more important place, then the nearer one.
    candidates.sort((a, b) => {
      if (a.m.id === this.activeId) return -1;
      if (b.m.id === this.activeId) return 1;
      if (a.m.priority !== b.m.priority) return b.m.priority - a.m.priority;
      return a.distance - b.distance;
    });
    const placed: { left: number; right: number; top: number; bottom: number }[] = [];
    for (const c of candidates) {
      // Where markers crowd together (the Kaaba's corners, door and band), a marker that
      // would cover another is nudged just below or above it; it is hidden only if neither
      // spot is free.
      let shown = false;
      const size = MARKER_HEIGHT * this.scale;
      for (const dy of [0, size + 6, -(size + 6)]) {
        const y = c.y + dy;
        if (y < TOP_BAR_CLEARANCE || y > height - size / 2) continue;
        const rect = { left: c.x - size / 2, right: c.x - size / 2 + c.width, top: y - size / 2, bottom: y + size / 2 };
        const overlaps = placed.some((p) => rect.left < p.right && rect.right > p.left && rect.top < p.bottom && rect.bottom > p.top);
        if (overlaps) continue;
        placed.push(rect);
        this.show(c.m, c.x, y);
        shown = true;
        break;
      }
      if (!shown) this.hide(c.m);
    }
  }

  private refreshSight(m: Marker, x: number, z: number): void {
    m.sight = m.alwaysVisible || this.collision.lineOfSight(x, z, m.anchor.x, m.anchor.z, m.sightClearance);
    m.sightFrom = { x, z };
  }

  private show(m: Marker, x: number, y: number): void {
    // Anchored on the ⓘ circle's centre; whole pixels keep the text crisp.
    // Scaled about its top-left corner, so the ⓘ circle's centre stays on the anchor.
    const size = MARKER_HEIGHT * this.scale;
    m.button.style.transform = `translate3d(${Math.round(x - size / 2)}px, ${Math.round(y - size / 2)}px, 0) scale(${this.scale})`;
    m.button.classList.toggle('is-far', !m.near);
    if (!m.shown) {
      m.button.hidden = false;
      m.shown = true;
      // Measure the real width once it is laid out, for better overlap tests.
      const width = m.button.offsetWidth;
      if (width > 0 && m.near) m.labelWidth = width;
    }
  }

  private hide(m: Marker): void {
    if (!m.shown) return;
    // Do not yank a marker away from under the keyboard focus.
    if (document.activeElement === m.button) return;
    m.button.hidden = true;
    m.shown = false;
  }
}
