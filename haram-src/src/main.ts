// Entry point. Kept deliberately small: it checks the device, drives the loading screen that
// is already on the page, and only then downloads the 3D engine and the explorer as a separate
// chunk. A visitor whose device cannot run 3D finds out immediately, without the large download.

import './styles/main.css';
import { showFatalError } from './boot/fatal-error';
import { LoadingScreen } from './boot/loading-screen';
import { detectDevice } from './boot/support';
import { loadTranslation } from './i18n/catalog';
import { DEFAULT_LOCALE, detectLocale, getLocaleInfo, setLocale } from './i18n/locale';
import { t, type StringKey } from './i18n/strings';
import { wireBackLink } from './ui/back-link';

const HOME_HREF = '/';

// Development-only fault injection, for testing the error screens: ?simulate=no-webgl,
// webgl-blocked, network or texture. `import.meta.env.DEV` is false in production builds, so
// this is removed from the shipped code entirely.
const SIMULATE = import.meta.env.DEV ? new URLSearchParams(window.location.search).get('simulate') : null;

/**
 * Picks and loads the visitor's language before any text is shown, then translates the
 * loading screen that is already on the page. If the translation cannot be loaded, the
 * explorer stays in English (and left to right) rather than mixing the two.
 */
async function applyLanguage(): Promise<void> {
  const wanted = detectLocale();
  const loaded = await loadTranslation(wanted);
  setLocale(loaded ? wanted : DEFAULT_LOCALE);
  const info = getLocaleInfo();
  document.documentElement.lang = info.tag;
  document.documentElement.dir = info.dir;
  if (info.code === DEFAULT_LOCALE) return;
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n]')) {
    element.textContent = t(element.dataset.i18n as StringKey);
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n-label]')) {
    element.setAttribute('aria-label', t(element.dataset.i18nLabel as StringKey));
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n-title]')) {
    element.setAttribute('title', t(element.dataset.i18nTitle as StringKey));
  }
  document.title = `${t('app.title')} — ${t('brand.name')}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('app.description'));
}

async function boot(): Promise<void> {
  // Tells the CSS that scripts are running, which cancels the "this is taking a while" notice.
  document.documentElement.classList.add('js-booted');
  await applyLanguage();
  const back = document.querySelector<HTMLAnchorElement>('.loading__back');
  if (back) wireBackLink(back);

  const root = document.getElementById('app');
  const loadingElement = document.getElementById('loading');
  if (!root || !loadingElement) return;
  const loading = new LoadingScreen(loadingElement);

  let started = false;
  const fail = (kind: Parameters<typeof showFatalError>[1], detail?: string) => {
    if (started) return;
    started = true;
    showFatalError(loadingElement, kind, HOME_HREF, detail);
  };

  // Anything that escapes during start-up still ends in a readable message.
  const onEarlyError = (event: ErrorEvent | PromiseRejectionEvent) => {
    const reason = 'reason' in event ? event.reason : event.error;
    console.error(reason);
    fail('unexpected', reason instanceof Error ? reason.message : undefined);
  };
  window.addEventListener('error', onEarlyError);
  window.addEventListener('unhandledrejection', onEarlyError);

  loading.set(0.02, t('loading.checking'));
  const profile = detectDevice();
  if (SIMULATE === 'no-webgl') profile.webgl2 = false;
  if (SIMULATE === 'webgl-blocked') Object.assign(profile, { webgl2: false, webglBlocked: true });
  if (!profile.webgl2) {
    fail(profile.webglBlocked ? 'webglBlocked' : 'webgl');
    return;
  }

  loading.set(0.06, t('loading.engine'));
  loading.creep(0.28, 9000);
  let explorer: typeof import('./app/explorer');
  try {
    if (SIMULATE === 'network') throw new TypeError('Failed to fetch dynamically imported module (simulated)');
    explorer = await import('./app/explorer');
  } catch (error) {
    console.error(error);
    fail('network');
    return;
  }

  try {
    loading.set(0.3);
    await explorer.startExplorer({ root, loading, profile, homeHref: HOME_HREF });
    started = true;
    window.removeEventListener('error', onEarlyError);
    window.removeEventListener('unhandledrejection', onEarlyError);
  } catch (error) {
    console.error(error);
    if (error instanceof explorer.WebGLStartError) fail('webglBlocked');
    else fail('unexpected', error instanceof Error ? error.message : String(error));
  }
}

void boot();
