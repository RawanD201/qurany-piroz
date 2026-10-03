// The explorer itself: creates the renderer and the world, wires input, markers and panels
// together, and runs the frame loop.
//
// This module and everything it imports (three.js included) is downloaded only after the
// loading screen is up, as a separate chunk (see main.ts).
//
// The loop renders on demand: a frame is drawn only when something visible changed (the
// visitor moved or turned, a panel changed what is highlighted, the window resized…). A still
// view costs almost nothing, which saves battery and keeps phones cool.

import { Mesh, MeshBasicMaterial, RingGeometry, type WebGLRenderer } from 'three';
import type { DeviceProfile } from '../boot/support';
import type { LoadingScreen } from '../boot/loading-screen';
import { CAMERA } from '../config';
import { BALCONY, CLOCK_TOWER, SPAWN, type Vec2, type Vec3 } from '../data/layout';
import { KAABA_ENTRY, KAABA_EXIT } from '../data/kaaba-interior';
import type { Level } from '../data/levels';
import { PLACE_LOCATIONS } from '../data/place-locations';
import { PLACES, getPlaceContent, type PlaceId } from '../data/places';
import { AdaptiveQuality, QUALITY_PRESETS, TIER_ORDER, resolveTier, type QualitySettings, type QualityTier } from '../engine/quality';
import { CameraRig, createRenderer, renderPixelRatio } from '../engine/renderer';
import { localize, rememberLocale } from '../i18n/locale';
import { t } from '../i18n/strings';
import { MarkerLayer } from '../interaction/markers';
import { Picker } from '../interaction/picking';
import { buildBalconyWorld, buildCollisionWorld, buildKaabaInteriorWorld } from '../physics/build-colliders';
import type { CollisionWorld } from '../physics/collision';
import { NavGrid } from '../physics/navigation';
import { VirtualJoystick } from '../player/joystick';
import { KeyboardInput, isArrowKey, isTextEntry } from '../player/keyboard';
import { LookControls } from '../player/look-controls';
import { Player, type MoveIntent } from '../player/player';
import { loadSettings, saveSettings, type UserSettings } from '../settings';
import { isModalOpen } from '../ui/dialog';
import { el, button } from '../ui/dom';
import { Fade, Toast } from '../ui/feedback';
import { HelpPanel, controlHints } from '../ui/help-panel';
import { Hud } from '../ui/hud';
import { InfoPanel } from '../ui/info-panel';
import { PlacesMenu } from '../ui/places-menu';
import { SettingsPanel } from '../ui/settings-panel';
import { BALCONY_LAYER, buildWorld } from '../world/build-world';
import { GuideOverlays, SAI_LAPS, saiLaps, saiPace, saiPath, tawafOverview, tawafPath, tawafStart } from '../world/guide-overlays';
import { GuideChooser, GuidePanel } from '../ui/guide';
import type { GuideRoute, RiteStep } from '../data/rites';
import type { TimeOfDay } from '../world/materials';

export interface StartOptions {
  root: HTMLElement;
  loading: LoadingScreen;
  profile: DeviceProfile;
  homeHref: string;
}

/** Thrown when WebGL itself fails, so main.ts can show the right message. */
export class WebGLStartError extends Error {}

const KAABA_VIEW = PLACE_LOCATIONS.kaaba.lookAt;

function isPlaceId(value: string | null): value is PlaceId {
  return value !== null && PLACES.some((p) => p.id === value);
}

export async function startExplorer({ root, loading, profile, homeHref }: StartOptions): Promise<void> {
  let settings: UserSettings = loadSettings();
  let tier: QualityTier = resolveTier(settings.quality, profile);
  // GPUs that cannot hold the larger textures, or that render in software, start low.
  if ((profile.maxTextureSize > 0 && profile.maxTextureSize < 4096) || profile.majorPerformanceCaveat) tier = 'low';
  let quality: QualitySettings = QUALITY_PRESETS[tier];
  const reducedMotion = profile.prefersReducedMotion;
  // ?time=night (or day) opens in that light, e.g. for a shared link; otherwise the last choice.
  const requestedTime = new URLSearchParams(window.location.search).get('time');
  let timeOfDay: TimeOfDay = requestedTime === 'night' || requestedTime === 'day' ? requestedTime : settings.timeOfDay;

  // ---- page structure ------------------------------------------------------------------
  const canvas = el('canvas', { className: 'stage__canvas', attrs: { role: 'img', 'aria-label': t('hud.view3d') } });
  const stage = el('div', { className: 'stage', attrs: { tabindex: '-1' } }, canvas);
  const markerLayer = el('div', { className: 'markers', attrs: { role: 'group', 'aria-label': t('places.heading') } });
  const ui = el('div', { className: 'ui' });
  root.prepend(stage, markerLayer, ui);
  // The app fills the screen and must never scroll. Browsers without `overflow: clip` can still
  // scroll an overflow:hidden box to reveal a focused element; undo that immediately.
  for (const box of [root, ui]) {
    box.addEventListener('scroll', () => {
      if (box.scrollTop !== 0 || box.scrollLeft !== 0) box.scrollTo(0, 0);
    });
  }

  // ---- renderer ------------------------------------------------------------------------
  let renderer: WebGLRenderer;
  try {
    renderer = createRenderer(canvas, quality, profile);
  } catch (error) {
    stage.remove();
    markerLayer.remove();
    ui.remove();
    throw new WebGLStartError(error instanceof Error ? error.message : String(error));
  }

  const rig = new CameraRig();
  const collision = buildCollisionWorld();
  const player = new Player(collision, SPAWN);
  player.speedMultiplier = settings.speed;
  // Levels (data/levels.ts): the clock-tower balcony and the inside of the Kaaba are small worlds
  // of their own.
  const balconyWorld = buildBalconyWorld();
  const kaabaWorld = buildKaabaInteriorWorld();
  let level: Level = 'ground';
  /** Where the visitor stood on the Haram's ground before leaving it, to bring them back there. */
  let beforeLeaving: { x: number; z: number; yaw: number; pitch: number } | null = null;

  // Optional deep links: /haram?place=safa starts at that place with its panel open, and
  // ?view=balcony or ?view=kaaba (inside it) on that level.
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('place');
  const startPlace: PlaceId | null = isPlaceId(requested) ? requested : null;
  const startView = params.get('view');
  const startLevel: Level = startPlace
    ? (PLACE_LOCATIONS[startPlace].level ?? 'ground')
    : startView === 'balcony' || startView === 'kaaba'
      ? startView
      : 'ground';
  if (startPlace && startLevel === 'ground') player.teleport(PLACE_LOCATIONS[startPlace].viewpoint, PLACE_LOCATIONS[startPlace].lookAt);
  else player.teleport(SPAWN, KAABA_VIEW);

  // ---- world ---------------------------------------------------------------------------
  const world = await buildWorld(renderer, quality, timeOfDay, (stageName, fraction) => {
    if (stageName === 'textures') loading.set(0.3 + fraction * 0.22, t('loading.textures'));
    else if (stageName === 'environment') loading.set(0.52 + fraction * 0.26, t('loading.environment'));
    else loading.set(0.8, t('loading.lighting'));
  });
  if (world.warnings.length) loading.warn(t('loading.warning', { detail: world.warnings.join(', ') }));
  if (profile.majorPerformanceCaveat) loading.warn(t('error.softwareRendering'));
  const scene = world.scene;
  const camera = rig.camera;

  // ---- sizing --------------------------------------------------------------------------
  let needsRender = true;
  const invalidate = () => {
    needsRender = true;
  };
  let viewWidth = 1;
  let viewHeight = 1;

  const adaptive = new AdaptiveQuality((step) => {
    // A visitor's explicit choice is respected; only "Automatic" adapts.
    if (settings.quality !== 'auto') return false;
    if (step === 'resolution') {
      resize();
      return true;
    }
    const next = TIER_ORDER[TIER_ORDER.indexOf(quality.tier) + 1];
    if (!next) return false;
    applyTier(next);
    toast.show(t('toast.qualityLowered'));
    return true;
  });

  function resize(): void {
    viewWidth = Math.max(1, stage.clientWidth);
    viewHeight = Math.max(1, stage.clientHeight);
    renderer.setPixelRatio(renderPixelRatio(quality, adaptive.scale));
    renderer.setSize(viewWidth, viewHeight, false);
    rig.setAspect(viewWidth / viewHeight);
    invalidate();
  }

  function applyTier(next: QualityTier): void {
    quality = QUALITY_PRESETS[next];
    world.setShadows(quality.shadows, quality.shadowMapSize);
    world.environment.setFogDistance(quality.fogFar);
    resize();
    settingsPanel.setEffectiveTier(next);
  }

  resize();
  if (typeof ResizeObserver === 'function') new ResizeObserver(() => resize()).observe(stage);
  window.addEventListener('resize', resize);
  // Older iOS reports the new size a moment after rotating.
  window.addEventListener('orientationchange', () => window.setTimeout(resize, 250));

  // ---- prepare shaders (avoids a stutter on the first frames) -------------------------
  loading.set(0.84, t('loading.compiling'));
  rig.sync(player);
  try {
    await renderer.compileAsync(scene, camera);
  } catch {
    // Optional optimisation; shaders will simply compile on first use.
  }
  renderer.render(scene, camera); // also draws the static shadow map once
  loading.set(0.97);

  // ---- interface -----------------------------------------------------------------------
  const toast = new Toast(ui);
  const fade = new Fade(ui);
  const picker = new Picker(camera, world.pickables, world.occluders, world.walkables);

  // Double-click to walk: the route grid is built the first time it is needed.
  let navGrid: NavGrid | null = null;
  const destinationRing = new Mesh(
    new RingGeometry(0.32, 0.48, 40).rotateX(-Math.PI / 2),
    new MeshBasicMaterial({ color: '#f0cf55', transparent: true, opacity: 0.9, depthWrite: false })
  );
  destinationRing.visible = false;
  destinationRing.renderOrder = 1;
  scene.add(destinationRing);

  function walkTo(x: number, y: number): void {
    if (level === 'balcony') {
      toast.show(t('toast.balconyWalk'));
      return;
    }
    const target = picker.pickGround(x, y, canvas);
    if (!target) return; // a wall, an object or the sky — nothing to walk to
    let route: Vec2[] | null;
    if (level === 'ground') {
      navGrid ??= NavGrid.fromWorld(collision);
      route = navGrid.findPath({ x: player.x, z: player.z }, target);
    } else {
      // Inside the Kaaba: straight there, sliding round anything in the way.
      route = levelWorld(level).isFree(target.x, target.z, 0.3) ? [target] : null;
    }
    if (!route) {
      toast.show(t('toast.cantWalk'));
      return;
    }
    const destination = route[route.length - 1];
    if (reducedMotion) {
      // No camera motion: arrive with a short fade, facing the same way.
      void fade.run(() => {
        player.teleport(destination);
        invalidate();
      }, true);
      return;
    }
    player.walkPath(route);
    destinationRing.position.set(destination.x, levelWorld(level).groundHeight(destination.x, destination.z) + 0.03, destination.z);
    destinationRing.visible = true;
    hud.dismissHint();
    invalidate();
  }

  const background = () => [stage, markerLayer, hud.root, infoPanel.element, guidePanel.element];

  const markers = new MarkerLayer(markerLayer, PLACES, PLACE_LOCATIONS, collision, (id, opener) =>
    selectPlace(id, { opener, turn: false })
  );
  markers.setEnabled(settings.showMarkers);
  applySizes(settings);

  const infoPanel: InfoPanel = new InfoPanel(ui, {
    onGoThere: (id) => void travelTo(id),
    onBalcony: () => void goUpToBalcony(),
    onEnterKaaba: () => void enterKaaba(),
    onLookAt: (id) => {
      player.turnTowards(PLACE_LOCATIONS[id].lookAt, reducedMotion ? 0 : CAMERA.turnDuration);
      invalidate();
    },
    onClose: () => {
      markers.setActive(null);
      invalidate();
    },
  });

  // ---- Hajj and Umrah guide ---------------------------------------------------------------
  const overlays = new GuideOverlays();
  scene.add(overlays.group);

  /** Moves to a place's viewpoint (with a fade) unless already close by; then faces it. */
  function moveTo(position: Vec2, lookAt: Vec3, target: Level = 'ground'): void {
    if (level === target && target !== 'balcony' && Math.hypot(player.x - position.x, player.z - position.z) < 4) {
      player.turnTowards(lookAt, reducedMotion ? 0 : CAMERA.turnDuration);
      invalidate();
      return;
    }
    rememberDeparture(target);
    void fade.run(() => {
      placeOnLevel(target, position, lookAt);
      invalidate();
    }, reducedMotion);
  }

  /** The visitor's label and text sizes: markers are scaled; panel text follows --text-scale. */
  function applySizes(next: UserSettings): void {
    markers.setScale(next.labelSize);
    document.documentElement.style.setProperty('--text-scale', String(next.textSize));
    invalidate();
  }

  // ---- levels: the Haram's ground, the balcony, inside the Kaaba ------------------------------
  function levelWorld(which: Level): CollisionWorld {
    if (which === 'balcony') return balconyWorld;
    if (which === 'kaaba') return kaabaWorld;
    return collision;
  }

  function setLevel(next: Level): void {
    if (next === level) return;
    level = next;
    const nextWorld = levelWorld(next);
    player.setWorld(nextWorld);
    rig.setClip(next === 'balcony' ? CAMERA.balconyFarNear : CAMERA.near, CAMERA.far);
    markers.setLevel(next, nextWorld);
    hud.setLevel(next);
    world.interior.group.visible = next === 'kaaba';
    destinationRing.visible = false;
  }

  /**
   * Draws the view. On the balcony it takes two passes: the far scene with a near plane 2 m
   * out (enough depth precision for the mosque ~470 m below), then, over it, the balcony
   * itself (its own layer) with a close near plane, so the railing and glass are never clipped.
   */
  function renderView(): void {
    if (level !== 'balcony') {
      renderer.render(scene, camera);
      return;
    }
    camera.layers.set(0);
    renderer.render(scene, camera);
    // A colour background makes three.js clear the frame on every render, even with
    // autoClear off, so it is lifted for the second pass.
    const autoClear = renderer.autoClear;
    const background = scene.background;
    renderer.autoClear = false;
    scene.background = null;
    renderer.clearDepth();
    camera.layers.set(BALCONY_LAYER);
    rig.setClip(CAMERA.balconyNearPass.near, CAMERA.balconyNearPass.far);
    renderer.render(scene, camera);
    scene.background = background;
    renderer.autoClear = autoClear;
    camera.layers.set(0);
    rig.setClip(CAMERA.balconyFarNear, CAMERA.far);
  }

  /** Remembers where the visitor stands on the Haram's ground, when they are about to leave it. */
  function rememberDeparture(target: Level): void {
    if (level === 'ground' && target !== 'ground') beforeLeaving = { x: player.x, z: player.z, yaw: player.yaw, pitch: player.pitch };
  }

  /** Puts the visitor on a level — its world and markers — at a spot; says where on arrival. */
  function placeOnLevel(next: Level, position: Vec2, lookAt?: Vec3, quiet = false): void {
    const was = level;
    setLevel(next);
    player.teleport(position, lookAt);
    if (quiet || was === next) return;
    if (next === 'kaaba') toast.show(t('toast.insideKaaba'), 6500);
  }

  /** Puts the visitor somewhere on the Haram's ground (bringing them back from another level). */
  function placeOnGround(position: Vec2, lookAt?: Vec3): void {
    placeOnLevel('ground', position, lookAt);
  }

  function placeOnBalcony(): void {
    setLevel('balcony');
    // Midway along the balcony, at the railing, looking down at the Kaaba.
    player.teleport({ x: CLOCK_TOWER.x, z: BALCONY.innerZ - BALCONY.depth }, KAABA_VIEW);
  }

  async function goUpToBalcony(): Promise<void> {
    rememberDeparture('balcony');
    infoPanel.close();
    // Closing the panel hands focus back to the marker that opened it; a focused marker is never
    // hidden, and the clock tower's would then hang overhead. The view takes the focus instead.
    stage.focus({ preventScroll: true });
    await fade.run(() => {
      placeOnBalcony();
      invalidate();
    }, reducedMotion);
    toast.show(t('toast.balcony'), 6500);
  }

  async function enterKaaba(): Promise<void> {
    rememberDeparture('kaaba');
    infoPanel.close();
    stage.focus({ preventScroll: true });
    await fade.run(() => {
      placeOnLevel('kaaba', KAABA_ENTRY.position, KAABA_ENTRY.lookAt);
      invalidate();
    }, reducedMotion);
  }

  /** The button at the top: down from the balcony, or out of the Kaaba. */
  async function leaveLevel(): Promise<void> {
    if (level === 'kaaba') {
      // Out through the door, in front of it.
      await fade.run(() => {
        placeOnGround(KAABA_EXIT.position, KAABA_EXIT.lookAt);
        invalidate();
      }, reducedMotion);
      return;
    }
    const back = beforeLeaving;
    beforeLeaving = null;
    await fade.run(() => {
      if (back) {
        placeOnGround({ x: back.x, z: back.z });
        player.yaw = back.yaw;
        player.pitch = back.pitch;
      } else {
        placeOnGround(PLACE_LOCATIONS.kingAbdulazizGate.viewpoint, KAABA_VIEW);
      }
      invalidate();
    }, reducedMotion);
  }

  function showStepPlace(step: RiteStep): void {
    if (step.route === 'tawaf') {
      const view = tawafOverview();
      moveTo(view.position, view.lookAt);
    } else if (step.focus) {
      const location = PLACE_LOCATIONS[step.focus];
      moveTo(location.viewpoint, location.lookAt, location.level ?? 'ground');
    }
  }

  function walkRoute(route: GuideRoute): void {
    const eyeY = 1.65;
    if (route === 'tawaf') {
      const start = tawafStart();
      void fade.run(() => {
        placeOnGround(start.position, { x: start.facing.x, y: eyeY, z: start.facing.z });
        player.walkPath(tawafPath());
        invalidate();
      }, reducedMotion);
    } else {
      // All seven laps, hastening between the green lights and standing a moment on each hill.
      const { start, end } = saiPath();
      const placeName = (lap: number) => localize(getPlaceContent(lap % 2 === 1 ? 'marwah' : 'safa').name);
      void fade.run(() => {
        placeOnGround(start, { x: end.x, y: eyeY, z: end.z });
        player.walkPath(saiLaps(), {
          paceAt: saiPace,
          pause: 1.6,
          onWaypoint: (index) => {
            const lap = index + 2;
            if (lap <= SAI_LAPS) toast.show(t('toast.saiLap', { n: lap, total: SAI_LAPS, place: placeName(lap) }), 4000);
            else toast.show(t('toast.saiDone'), 5000);
          },
        });
        invalidate();
      }, reducedMotion);
    }
    toast.show(t('toast.walkingRoute'), 4500);
  }

  const guidePanel: GuidePanel = new GuidePanel(ui, {
    onStep: (_guide, step) => {
      overlays.show(step?.route ?? null);
      markers.setActive(step?.focus ?? null);
      if (step?.inMosque && (step.focus || step.route)) showStepPlace(step);
      invalidate();
    },
    onShowPlace: (step) => showStepPlace(step),
    onWalk: (route) => walkRoute(route),
    onClose: () => {
      overlays.show(null);
      markers.setActive(null);
      invalidate();
    },
  });

  const guideChooser = new GuideChooser(ui, background, (id) => {
    infoPanel.close();
    guidePanel.open(id);
  });

  const placesMenu = new PlacesMenu(ui, background, (id) => selectPlace(id, { turn: true, opener: hud.root.querySelector('.hud-button--places') }));

  const settingsPanel = new SettingsPanel(
    ui,
    background,
    settings,
    {
      onChange: (change) => {
        const next: UserSettings = { ...settings, ...change };
        const qualityChanged = next.quality !== settings.quality;
        settings = next;
        saveSettings(next);
        player.speedMultiplier = next.speed;
        look.sensitivity = next.sensitivity;
        look.reverse = next.reverseDrag;
        markers.setEnabled(next.showMarkers);
        applySizes(next);
        if (qualityChanged) {
          adaptive.reset();
          applyTier(resolveTier(next.quality, profile));
        }
        invalidate();
      },
      onResetPosition: () => void fade.run(() => {
        setLevel('ground');
        player.resetToSpawn(KAABA_VIEW);
        invalidate();
      }, reducedMotion),
      onToggleFullscreen: profile.fullscreen ? toggleFullscreen : undefined,
      onLanguage: (locale) => {
        rememberLocale(locale);
        // An explicit ?lang= would override the new choice, so it is dropped.
        const url = new URL(window.location.href);
        url.searchParams.delete('lang');
        window.location.replace(url.toString());
      },
    },
    homeHref
  );
  settingsPanel.setEffectiveTier(quality.tier);

  const helpPanel = new HelpPanel(ui, background, {
    isTouch: profile.isTouch,
    hasFinePointer: profile.hasFinePointer,
    onTextVersion: () => void openTextVersion(),
  });

  const hud = new Hud(ui, profile, {
    onPlaces: (opener) => {
      keyboard.reset();
      placesMenu.open(opener);
    },
    onGuide: (opener) => {
      keyboard.reset();
      guideChooser.open(opener);
    },
    onSettings: (opener) => {
      keyboard.reset();
      settingsPanel.open(opener);
    },
    onHelp: (opener) => {
      keyboard.reset();
      helpPanel.open(opener);
    },
    onMouseLook: () => {
      void look.requestPointerLock().then((ok) => {
        if (!ok) toast.show(t('hud.mouseLookFailed'));
      });
    },
    onFastToggle: (active) => {
      fastToggle = active;
    },
    onNightToggle: (night) => void setTimeOfDay(night ? 'night' : 'day'),
    onZoom: (factor) => zoomBy(factor),
    onLevelBack: () => void leaveLevel(),
  }, homeHref);
  hud.setNight(timeOfDay === 'night');

  // ---- input ---------------------------------------------------------------------------
  let fastToggle = false;
  const onActivity = () => {
    invalidate();
  };
  const keyboard = new KeyboardInput(
    (event) =>
      isModalOpen() ||
      isTextEntry(event.target) ||
      (isArrowKey(event) && event.target instanceof Element && event.target.closest('[data-keys="scroll"]') !== null),
    () => {
      hud.dismissHint();
      onActivity();
    }
  );
  keyboard.attach();

  const joystick = profile.isTouch ? new VirtualJoystick(hud.bottomLeft, onActivity) : null;
  joystick?.attach();

  let lastHover = 0;
  const look = new LookControls(canvas, {
    onTap: (x, y) => {
      const id = picker.pick(x, y, canvas);
      if (id) selectPlace(id, { opener: null, turn: false });
    },
    onDoubleClick: (x, y) => walkTo(x, y),
    onZoom: (factor) => zoomBy(factor),
    onHover: (x, y) => {
      const now = performance.now();
      if (now - lastHover < 120) return;
      lastHover = now;
      canvas.classList.toggle('is-pickable', picker.pick(x, y, canvas) !== null);
    },
    onPointerLockChange: (locked) => {
      hud.setPointerLocked(locked);
      if (locked) toast.show(t('hud.mouseLookHint'));
    },
    onActivity: () => {
      hud.dismissHint();
      onActivity();
    },
  });
  look.sensitivity = settings.sensitivity;
  look.reverse = settings.reverseDrag;
  look.attach();
  document.addEventListener('pointerlockerror', () => toast.show(t('hud.mouseLookFailed')));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !isModalOpen() && infoPanel.openPlace) infoPanel.close();
    if (event.key === 'Escape' && !isModalOpen() && guidePanel.isOpen) guidePanel.close();
    // + / − zoom (without Ctrl/⌘, which stay the browser's own page zoom).
    if (event.ctrlKey || event.metaKey || event.altKey || isModalOpen() || isTextEntry(event.target)) return;
    if (event.key === '+' || event.key === '=') {
      zoomBy(CAMERA.zoomStep);
      event.preventDefault();
    } else if (event.key === '-' || event.key === '_') {
      zoomBy(1 / CAMERA.zoomStep);
      event.preventDefault();
    }
  });

  // ---- zoom ------------------------------------------------------------------------------
  // The camera's field of view narrows (up to CAMERA.maxZoom); the visitor does not move, so
  // zooming can never carry them through a wall. Changes ease in over a few frames.
  let zoomTarget = 1;
  function zoomBy(factor: number): void {
    zoomTarget = factor === 0 ? 1 : Math.min(CAMERA.maxZoom, Math.max(1, zoomTarget * factor));
    if (zoomTarget > 1) hud.dismissHint();
    invalidate();
  }
  function updateZoom(dt: number): boolean {
    const current = rig.zoom;
    if (Math.abs(current - zoomTarget) < 0.001) return false;
    const next = reducedMotion || Math.abs(current - zoomTarget) < 0.005 ? zoomTarget : current + (zoomTarget - current) * (1 - Math.exp(-14 * dt));
    rig.setZoom(next);
    hud.setZoom(next);
    return true;
  }

  function currentIntent(): MoveIntent {
    if (isModalOpen()) return { x: 0, y: 0, fast: false };
    const k = keyboard.intent();
    const jx = joystick?.x ?? 0;
    const jy = joystick?.y ?? 0;
    return {
      x: Math.max(-1, Math.min(1, k.x + jx)),
      y: Math.max(-1, Math.min(1, k.y + jy)),
      fast: k.fast || fastToggle,
    };
  }

  // ---- actions ---------------------------------------------------------------------------
  function selectPlace(id: PlaceId, options: { opener: HTMLElement | null; turn: boolean }): void {
    const target = PLACE_LOCATIONS[id].level ?? 'ground';
    // From the balcony, the ground's places are in view below.
    const here: Level = level === 'balcony' ? 'ground' : level;
    if (target !== here) {
      // A place on another level (inside the Kaaba, or back on the Haram's ground): go there.
      void travelTo(id).then((arrived) => {
        if (arrived) openPlace(id, null, false);
      });
      return;
    }
    openPlace(id, options.opener, options.turn);
  }

  function openPlace(id: PlaceId, opener: HTMLElement | null, turn: boolean): void {
    // Both panels use the same space; reading about a place leaves the guide.
    if (guidePanel.isOpen) guidePanel.close();
    infoPanel.show(id, opener ?? markers.buttonFor(id), true);
    markers.setActive(id);
    if (turn) player.turnTowards(PLACE_LOCATIONS[id].lookAt, reducedMotion ? 0 : CAMERA.turnDuration);
    invalidate();
  }

  /** "Go there": to the place's viewpoint, on whichever level it is. */
  async function travelTo(id: PlaceId): Promise<boolean> {
    const location = PLACE_LOCATIONS[id];
    const target = location.level ?? 'ground';
    const was = level;
    rememberDeparture(target);
    await fade.run(() => {
      placeOnLevel(target, location.viewpoint, location.lookAt);
      invalidate();
    }, reducedMotion);
    // Arriving on another level has its own notice.
    if (was === target || (was === 'balcony' && target === 'ground')) {
      toast.show(t('toast.travelled', { name: localize(getPlaceContent(id).name) }));
    }
    return true;
  }

  async function setTimeOfDay(next: TimeOfDay): Promise<void> {
    if (next === timeOfDay) return;
    timeOfDay = next;
    settings = { ...settings, timeOfDay: next };
    saveSettings(settings);
    hud.setNight(next === 'night');
    // The switch (new reflections, redrawn shadows) happens behind a short fade.
    await fade.run(() => {
      world.setTimeOfDay(next);
      invalidate();
    }, reducedMotion);
    toast.show(t(next === 'night' ? 'toast.night' : 'toast.day'));
  }

  function toggleFullscreen(): void {
    const doc = document as Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => void };
    const target = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
    try {
      if (document.fullscreenElement || doc.webkitFullscreenElement) {
        if (document.exitFullscreen) void document.exitFullscreen();
        else doc.webkitExitFullscreen?.();
      } else if (target.requestFullscreen) {
        void target.requestFullscreen().catch(() => undefined);
      } else {
        target.webkitRequestFullscreen?.();
      }
    } catch {
      // Full screen is optional; ignore refusals.
    }
  }
  const onFullscreenChange = () => {
    const doc = document as Document & { webkitFullscreenElement?: Element };
    settingsPanel.setFullscreen(Boolean(document.fullscreenElement || doc.webkitFullscreenElement));
  };
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);

  async function openTextVersion(): Promise<void> {
    stopLoop();
    look.detach();
    keyboard.detach();
    const { showTextMode } = await import('../ui/text-mode');
    world.dispose();
    renderer.dispose();
    showTextMode(root, { offer3D: true, homeHref });
  }

  // ---- frame loop ------------------------------------------------------------------------
  let rafId = 0;
  let running = false;
  let lastTime = 0;
  let lastRenderTime = 0;
  let renderedPreviousFrame = false;

  const overlay = el('div', { className: 'overlay-message', hidden: true, attrs: { role: 'alert' } });
  ui.append(overlay);
  function showOverlay(text: string): void {
    overlay.replaceChildren(
      el('p', { text }),
      button(t('error.reload'), { className: 'pill-button pill-button--primary', icon: 'reload', onClick: () => window.location.reload() })
    );
    overlay.hidden = false;
  }

  function frame(now: number): void {
    if (!running) return;
    rafId = requestAnimationFrame(frame);
    const dt = lastTime ? (now - lastTime) / 1000 : 0;
    lastTime = now;
    try {
      const turn = look.consume();
      // Zoomed in, the same drag turns the view less, so aiming stays steady.
      player.addLook(turn.yaw / rig.zoom, turn.pitch / rig.zoom);
      if (updateZoom(dt)) needsRender = true;
      // The clock tower keeps Makkah time; its hands move once a minute.
      if (world.updateClock()) needsRender = true;
      // A dialog over the view stops any automatic walk.
      if (isModalOpen() && player.isWalkingPath) player.cancelWalk();
      if (player.update(dt, currentIntent())) needsRender = true;
      if (destinationRing.visible && !player.isWalkingPath) {
        destinationRing.visible = false;
        needsRender = true;
      }

      if (needsRender) {
        needsRender = false;
        rig.sync(player);
        renderView();
        markers.update(camera, viewWidth, viewHeight);
        hud.updateHeading(player.yaw);
        if (renderedPreviousFrame) adaptive.sample(now - lastRenderTime, now);
        renderedPreviousFrame = true;
        lastRenderTime = now;
      } else {
        renderedPreviousFrame = false;
      }
    } catch (error) {
      console.error(error);
      stopLoop();
      showOverlay(t('error.unexpected', { detail: error instanceof Error ? error.message : String(error) }));
    }
  }

  function startLoop(): void {
    if (running) return;
    running = true;
    lastTime = 0;
    renderedPreviousFrame = false;
    invalidate();
    rafId = requestAnimationFrame(frame);
  }

  function stopLoop(): void {
    running = false;
    cancelAnimationFrame(rafId);
  }

  // Nothing to draw while the tab is hidden.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopLoop();
    else if (!contextLost && loadingDone) startLoop();
  });

  // The browser (iOS Safari especially) may take the GPU away under memory pressure.
  let contextLost = false;
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault(); // allow the context to be restored
    contextLost = true;
    stopLoop();
    showOverlay(t('error.contextLost'));
  });
  canvas.addEventListener('webglcontextrestored', () => {
    contextLost = false;
    try {
      world.environment.restore();
      overlay.hidden = true;
      resize();
      startLoop();
    } catch {
      // The overlay's Reload button remains.
    }
  });

  // ---- go --------------------------------------------------------------------------------
  // /haram?view=balcony opens on the clock tower's balcony.
  if (startLevel === 'balcony') placeOnBalcony();
  else if (startLevel === 'kaaba') {
    const spot = startPlace ? PLACE_LOCATIONS[startPlace] : null;
    placeOnLevel('kaaba', spot?.viewpoint ?? KAABA_ENTRY.position, spot?.lookAt ?? KAABA_ENTRY.lookAt, true);
  }

  let loadingDone = false;
  loading.showReady(controlHints(profile.isTouch, profile.hasFinePointer), () => {
    loadingDone = true;
    loading.hide();
    document.body.classList.add('is-exploring');
    stage.focus({ preventScroll: true });
    startLoop();
    if (startPlace) selectPlace(startPlace, { opener: null, turn: false });
    // The kiswah photographs are fetched only now, so they never delay the first view.
    void world.loadKiswahPhotos().then((shown) => {
      if (shown) invalidate();
    });
  });

  if (import.meta.env.DEV) {
    // Development-only inspection hook (removed from production builds).
    (window as unknown as Record<string, unknown>).__haram = { renderer, scene, camera, player, world, collision, invalidate };
  }
}
