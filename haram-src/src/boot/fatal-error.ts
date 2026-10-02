// What the visitor sees when the explorer cannot start: a clear explanation, a retry, the
// text-only version of the content, and a way back to the main site — never a blank page.

import { t } from '../i18n/strings';

export type FatalKind = 'webgl' | 'webglBlocked' | 'network' | 'unexpected';

function message(kind: FatalKind, detail?: string): string {
  switch (kind) {
    case 'webgl':
      return t('error.webgl');
    case 'webglBlocked':
      return `${t('error.webgl')} ${t('error.webglDisabled')}`;
    case 'network':
      return t('error.network');
    case 'unexpected':
      return t('error.unexpected', { detail: detail || 'unknown error' });
  }
}

export function showFatalError(container: HTMLElement, kind: FatalKind, homeHref: string, detail?: string): void {
  const card = container.querySelector('.loading__card') ?? container;
  container.classList.add('is-error');
  container.hidden = false;
  container.classList.remove('is-hidden');

  const box = document.createElement('div');
  box.className = 'loading__error';
  box.setAttribute('role', 'alert');
  const title = document.createElement('h2');
  title.textContent = t('error.title');
  const text = document.createElement('p');
  text.textContent = message(kind, detail);
  box.append(title, text);

  const actions = document.createElement('div');
  actions.className = 'loading__actions';
  // Retrying makes sense for anything but a device that simply lacks WebGL 2.
  if (kind !== 'webgl') {
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'pill-button pill-button--primary';
    retry.textContent = t('error.retry');
    retry.addEventListener('click', () => window.location.reload());
    actions.append(retry);
  }
  const textVersion = document.createElement('button');
  textVersion.type = 'button';
  textVersion.className = 'pill-button';
  textVersion.textContent = t('error.textVersion');
  textVersion.addEventListener('click', async () => {
    textVersion.disabled = true;
    try {
      const { showTextMode } = await import('../ui/text-mode');
      showTextMode(document.getElementById('app') ?? document.body, {
        notice: message(kind, detail),
        offer3D: kind !== 'webgl',
        homeHref,
      });
    } catch {
      // Even the text version could not be fetched (offline): say so where the button was.
      textVersion.textContent = t('error.network');
    }
  });
  actions.append(textVersion);
  const home = document.createElement('a');
  home.className = 'pill-button';
  home.href = homeHref;
  home.textContent = t('error.home');
  actions.append(home);
  box.append(actions);

  // Replace the progress UI with the message.
  card.querySelectorAll('.loading__progress, .loading__meta, .loading__ready, .loading__error').forEach((n) => n.remove());
  card.append(box);
  (actions.querySelector('button, a') as HTMLElement | null)?.focus({ preventScroll: true });
}
