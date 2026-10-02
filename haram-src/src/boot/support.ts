// What the device can do, found by feature detection rather than by browser name.
//
// This module is part of the small first download (no three.js), so the explorer can tell a
// visitor straight away when their device cannot run it, instead of downloading the 3D engine
// first and failing afterwards.

export interface DeviceProfile {
  webgl2: boolean;
  /** WebGL works but the browser warns it will be slow (e.g. software rendering). */
  majorPerformanceCaveat: boolean;
  /** WebGL exists in the browser but could not be started (often disabled or blocklisted). */
  webglBlocked: boolean;
  maxTextureSize: number;
  isTouch: boolean;
  /** A precise pointer (mouse/trackpad) is available. */
  hasFinePointer: boolean;
  isMobile: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  deviceMemory?: number;
  hardwareConcurrency?: number;
  pointerLock: boolean;
  fullscreen: boolean;
  prefersReducedMotion: boolean;
}

function media(query: string): boolean {
  try {
    return typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
  } catch {
    return false;
  }
}

interface WebGLProbe {
  ok: boolean;
  caveat: boolean;
  blocked: boolean;
  maxTextureSize: number;
}

function probeWebGL2(): WebGLProbe {
  const result: WebGLProbe = { ok: false, caveat: false, blocked: false, maxTextureSize: 0 };
  if (typeof WebGL2RenderingContext === 'undefined') return result;

  const tryContext = (failIfMajorPerformanceCaveat: boolean): WebGL2RenderingContext | null => {
    try {
      const canvas = document.createElement('canvas');
      return canvas.getContext('webgl2', { failIfMajorPerformanceCaveat }) as WebGL2RenderingContext | null;
    } catch {
      return null;
    }
  };

  let gl = tryContext(true);
  if (!gl) {
    gl = tryContext(false);
    if (gl) result.caveat = true;
  }
  if (!gl) {
    // The API exists but no context could be made: usually disabled or blocklisted.
    result.blocked = true;
    return result;
  }
  result.ok = true;
  result.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
  // Release the probe context immediately: browsers (iOS Safari especially) allow only a few
  // live WebGL contexts, and the real one is created a moment later.
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return result;
}

export function detectDevice(): DeviceProfile {
  const ua = navigator.userAgent;
  const isAndroid = /android/i.test(ua);
  // iPadOS 13+ reports itself as a Mac; its touch points give it away.
  const isIOS = !isAndroid && (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1));
  const isTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const hasFinePointer = media('(any-pointer: fine)') || (!isTouch && !media('(pointer: coarse)'));
  const isMobile = isIOS || isAndroid || /Mobi|Tablet|Silk|Kindle/i.test(ua) || (isTouch && !hasFinePointer);
  const nav = navigator as Navigator & { deviceMemory?: number };
  const doc = document as Document & { webkitFullscreenEnabled?: boolean };
  const probe = probeWebGL2();

  return {
    webgl2: probe.ok,
    majorPerformanceCaveat: probe.caveat,
    webglBlocked: probe.blocked,
    maxTextureSize: probe.maxTextureSize,
    isTouch,
    hasFinePointer,
    isMobile,
    isIOS,
    isAndroid,
    deviceMemory: typeof nav.deviceMemory === 'number' ? nav.deviceMemory : undefined,
    hardwareConcurrency: typeof navigator.hardwareConcurrency === 'number' ? navigator.hardwareConcurrency : undefined,
    pointerLock: 'requestPointerLock' in HTMLElement.prototype || 'requestPointerLock' in Element.prototype,
    fullscreen: Boolean(document.fullscreenEnabled || doc.webkitFullscreenEnabled),
    prefersReducedMotion: media('(prefers-reduced-motion: reduce)'),
  };
}
