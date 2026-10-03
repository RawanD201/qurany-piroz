// Tunable numbers for how the explorer feels. Change them here rather than in the modules
// that use them. (World dimensions are in src/data/layout.ts; quality presets in
// src/engine/quality.ts.)

export const MOVEMENT = {
  /** Normal walking speed, metres per second (before the user's speed setting). */
  walkSpeed: 3.2,
  /** Speed while Shift / "Walk faster" is held. */
  fastSpeed: 7,
  /** How quickly the visitor reaches the target speed (per second, exponential). */
  acceleration: 9,
  /** How quickly the visitor slows to a stop when input is released. */
  deceleration: 11,
  gravity: 9.81,
  /** The largest distance moved per collision sub-step, metres (prevents tunnelling). */
  maxSubstep: 0.2,
  /**
   * How far the ground may drop under a walking visitor (going down the Kaaba's stairs) and be
   * stepped down onto rather than fallen to, metres.
   */
  stepDown: 0.45,
  /** Frame times longer than this are clamped (seconds), e.g. after a tab switch. */
  maxFrameTime: 0.1,
} as const;

export const CAMERA = {
  /** Vertical field of view on landscape screens, degrees. */
  fov: 68,
  /** Minimum horizontal field of view on portrait screens, degrees. */
  minHorizontalFov: 62,
  /** Upper limit for the vertical field of view on very tall screens. */
  maxFov: 92,
  near: 0.15,
  far: 3200,
  /** How far up/down the visitor can look, radians from level. */
  maxPitch: (80 * Math.PI) / 180,
  /** Radians of turn per CSS pixel of drag (before the user's sensitivity setting). */
  mouseDragSensitivity: 0.0042,
  pointerLockSensitivity: 0.0022,
  touchSensitivity: 0.0068,
  /** Duration of the smooth turn towards a selected place, seconds. */
  turnDuration: 0.9,
  /** Largest zoom factor (field of view divided by this). */
  maxZoom: 4,
  /** Each zoom button press / key press multiplies or divides the zoom by this. */
  zoomStep: 1.4,
  /**
   * On the clock-tower balcony the view is drawn in two depth ranges (see explorer.ts): the
   * mosque, ~470 m away, with a far-off near plane, so layers a couple of centimetres apart
   * (the kiswah's belt) do not flicker; then the balcony itself, close up.
   */
  balconyFarNear: 2,
  balconyNearPass: { near: 0.05, far: 80 },
} as const;

export const INTERACTION = {
  /** A press that moves less than this (CSS px) and is shorter than tapMaxMs counts as a tap. */
  tapMaxMove: 8,
  tapMaxMs: 450,
  /** Joystick dead zone, as a fraction of its radius. */
  joystickDeadZone: 0.12,
} as const;

/** Ranges offered by the settings sliders. */
export const SETTINGS_RANGES = {
  speed: { min: 0.5, max: 1.6, step: 0.1 },
  sensitivity: { min: 0.4, max: 2.2, step: 0.1 },
  /** Size of the place labels (markers), as a fraction of their full size. */
  labelSize: { min: 0.6, max: 1.3, step: 0.05 },
  /** Size of the text in the information panel, the guide and the dialogs. */
  textSize: { min: 0.8, max: 1.5, step: 0.05 },
} as const;
