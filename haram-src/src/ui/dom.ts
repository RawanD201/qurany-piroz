// Small helpers for building interface elements.
//
// Elements are created with the DOM API rather than innerHTML: text is always inserted as
// text (never parsed as markup), and nothing needs inline styles or scripts, which keeps the
// page compatible with a strict Content Security Policy.

type Child = Node | string | null | undefined | false;

export interface ElementProps {
  className?: string;
  id?: string;
  text?: string;
  hidden?: boolean;
  attrs?: Record<string, string>;
  on?: Partial<{ [K in keyof HTMLElementEventMap]: (event: HTMLElementEventMap[K]) => void }>;
}

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: ElementProps = {},
  ...children: Child[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  if (props.className) element.className = props.className;
  if (props.id) element.id = props.id;
  if (props.text !== undefined) element.textContent = props.text;
  if (props.hidden) element.hidden = true;
  if (props.attrs) for (const [name, value] of Object.entries(props.attrs)) element.setAttribute(name, value);
  if (props.on) {
    for (const [type, handler] of Object.entries(props.on)) {
      element.addEventListener(type, handler as EventListener);
    }
  }
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    element.append(child);
  }
  return element;
}

/** A semantic button. `label` is its accessible name when it only shows an icon. */
export function button(
  text: string | null,
  options: { className?: string; label?: string; icon?: IconName; onClick: (event: MouseEvent) => void; attrs?: Record<string, string> }
): HTMLButtonElement {
  const b = el('button', { className: options.className, attrs: { type: 'button', ...(options.attrs ?? {}) } });
  if (options.icon) b.append(icon(options.icon));
  if (text) b.append(el('span', { className: 'button__text', text }));
  if (options.label) b.setAttribute('aria-label', options.label);
  b.addEventListener('click', options.onClick);
  return b;
}

// ---- icons ---------------------------------------------------------------------------------

export type IconName =
  | 'places'
  | 'settings'
  | 'help'
  | 'close'
  | 'walk'
  | 'mouse'
  | 'pin'
  | 'eye'
  | 'home'
  | 'reload'
  | 'moon'
  | 'plus'
  | 'minus'
  | 'book'
  | 'up'
  | 'down'
  | 'back'
  | 'stairs'
  | 'door';

const ICON_PATHS: Record<IconName, string[]> = {
  places: ['M4 6h16', 'M4 12h16', 'M4 18h10'],
  settings: [
    'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
    'M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  ],
  help: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3', 'M12 17h.01'],
  close: ['M18 6 6 18', 'M6 6l12 12'],
  walk: ['M13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', 'M9 21l2-6 3 3v3', 'M7 11l3-4 3 1 2 3 3 1', 'M10 7l1 5'],
  mouse: ['M12 3a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z', 'M12 7v4'],
  pin: ['M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
  eye: ['M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  home: ['M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5'],
  reload: ['M21 12a9 9 0 1 1-2.6-6.4', 'M21 3v6h-6'],
  moon: ['M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z'],
  plus: ['M12 5v14', 'M5 12h14'],
  minus: ['M5 12h14'],
  up: ['M12 19V5', 'M5 12l7-7 7 7'],
  down: ['M12 5v14', 'M19 12l-7 7-7-7'],
  // Points left; mirrored for right-to-left languages (main.css).
  back: ['M19 12H5', 'M12 19l-7-7 7-7'],
  book: ['M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z', 'M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5', 'M8 7h8'],
  stairs: ['M3 20h5v-5h5v-5h5V5h3'],
  door: ['M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17', 'M3 21h18', 'M12 3v18', 'M9.5 12h.01', 'M14.5 12h.01'],
};

const SVG_NS = 'http://www.w3.org/2000/svg';

export function icon(name: IconName): SVGSVGElement {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('class', 'icon');
  for (const d of ICON_PATHS[name]) {
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  }
  return svg;
}

/** Elements that can take keyboard focus inside `root`, in tab order. */
export function focusables(root: HTMLElement): HTMLElement[] {
  const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(root.querySelectorAll<HTMLElement>(selector)).filter((e) => !e.hidden && e.offsetParent !== null);
}
