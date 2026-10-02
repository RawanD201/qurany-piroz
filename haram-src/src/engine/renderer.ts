// The WebGL renderer and the camera.

import { NeutralToneMapping, PCFShadowMap, PerspectiveCamera, SRGBColorSpace, WebGLRenderer } from 'three';
import type { DeviceProfile } from '../boot/support';
import { CAMERA } from '../config';
import type { Player } from '../player/player';
import type { QualitySettings } from './quality';

export function createRenderer(canvas: HTMLCanvasElement, quality: QualitySettings, profile: DeviceProfile): WebGLRenderer {
  const renderer = new WebGLRenderer({
    canvas,
    // Antialiasing is fixed when the context is created; the low tier goes without it.
    antialias: quality.tier !== 'low',
    alpha: false,
    stencil: false,
    depth: true,
    // Discrete GPU on desktops with two; the battery-friendly default on phones and tablets.
    powerPreference: profile.isMobile ? 'default' : 'high-performance',
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false,
  });
  renderer.outputColorSpace = SRGBColorSpace;
  // Neutral tone mapping keeps white marble white and gold gold, rather than filmic.
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.type = PCFShadowMap;
  return renderer;
}

/** The pixel ratio to render at: the screen's, capped by the quality tier and scaled down by
 *  the adaptive controller when frames are slow. */
export function renderPixelRatio(quality: QualitySettings, adaptiveScale: number): number {
  const device = window.devicePixelRatio || 1;
  return Math.max(0.5, Math.min(device, quality.maxPixelRatio) * adaptiveScale);
}

/** A first-person camera that follows the player. */
export class CameraRig {
  readonly camera = new PerspectiveCamera(CAMERA.fov, 1, CAMERA.near, CAMERA.far);

  constructor() {
    // Yaw first, then pitch: the usual first-person order, so looking up never rolls the view.
    this.camera.rotation.order = 'YXZ';
  }

  /** Keeps a comfortable horizontal field of view on narrow (portrait) screens. */
  setAspect(aspect: number): void {
    const toRad = Math.PI / 180;
    let fov = CAMERA.fov;
    const horizontal = 2 * Math.atan(Math.tan((fov * toRad) / 2) * aspect) / toRad;
    if (horizontal < CAMERA.minHorizontalFov) {
      fov = (2 * Math.atan(Math.tan((CAMERA.minHorizontalFov * toRad) / 2) / aspect)) / toRad;
    }
    this.camera.fov = Math.min(CAMERA.maxFov, fov);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /** Zoom factor: 1 = normal view; 4 = a quarter of the field of view (like binoculars). */
  get zoom(): number {
    return this.camera.zoom;
  }

  setZoom(zoom: number): void {
    const z = Math.min(CAMERA.maxZoom, Math.max(1, zoom));
    if (z === this.camera.zoom) return;
    this.camera.zoom = z;
    this.camera.updateProjectionMatrix();
  }

  /** The clipping planes (the balcony draws in two depth ranges). */
  setClip(near: number, far: number): void {
    if (this.camera.near === near && this.camera.far === far) return;
    this.camera.near = near;
    this.camera.far = far;
    this.camera.updateProjectionMatrix();
  }

  sync(player: Player): void {
    const eye = player.eye;
    this.camera.position.set(eye.x, eye.y, eye.z);
    this.camera.rotation.set(player.pitch, player.yaw, 0);
    this.camera.updateMatrixWorld();
  }
}
