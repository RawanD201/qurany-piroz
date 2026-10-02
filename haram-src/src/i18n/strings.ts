// Every piece of interface text in the explorer (buttons, labels, messages), keyed by id.
// Place names and descriptions live in src/data/places.ts instead.
//
// English is written here; the other languages come from src/i18n/locales/<code>.json (see
// catalog.ts), filled in under the key "ui.<key>". Missing entries fall back to English.
// `{name}`-style placeholders are filled in by `t()`.
//
// The loading screen's text also appears in index.html, so the page is readable before any
// script runs; keep the two in step when changing it.

import { localize, localizeDigits, type LocalizedText } from './locale';

const STRINGS = {
  'brand.name': { en: 'Qurany Piroz' },
  'brand.home': { en: 'Qurany Piroz home' },
  'app.title': { en: 'Masjid al-Haram 3D Explorer' },
  'app.tagline': { en: 'An educational, approximate 3D representation of the Sacred Mosque in Makkah.' },

  'loading.loading': { en: 'Loading…' },
  'loading.stalled': {
    en: 'This is taking longer than expected. The explorer needs a modern browser with JavaScript and WebGL 2 (for example a current version of Safari, Chrome, Firefox, Edge or Samsung Internet).',
  },
  'app.description': { en: 'Explore an interactive 3D representation of Masjid al-Haram in Makkah through your web browser.' },
  'loading.checking': { en: 'Checking your device…' },
  'loading.engine': { en: 'Loading 3D engine…' },
  'loading.textures': { en: 'Preparing materials…' },
  'loading.environment': { en: 'Building environment…' },
  'loading.lighting': { en: 'Setting up lighting…' },
  'loading.compiling': { en: 'Preparing explorer…' },
  'loading.ready': { en: 'Ready' },
  'loading.start': { en: 'Start exploring' },
  'loading.progressLabel': { en: 'Loading progress' },
  'loading.warning': { en: 'Some details could not be prepared ({detail}). The explorer will still work.' },

  'controls.heading': { en: 'How to explore' },
  'controls.desktopMove': { en: 'Move with W A S D or the arrow keys. Hold Shift to walk faster.' },
  'controls.desktopLook': { en: 'Click and drag to look around, or turn on mouse look.' },
  'controls.desktopWalk': { en: 'Double-click the ground to walk there.' },
  'controls.desktopZoom': { en: 'Zoom with the mouse wheel, a trackpad pinch, the + and − keys or the buttons.' },
  'controls.touchZoom': { en: 'Pinch with two fingers, or use the + and − buttons, to zoom.' },
  'controls.touchMove': { en: 'Use the joystick at the bottom left to walk.' },
  'controls.touchLook': { en: 'Drag anywhere else on the screen to look around.' },
  'controls.places': { en: 'Tap the ⓘ markers, the objects themselves, or open Places to learn about each place.' },
  'controls.placesDesktop': { en: 'Click the ⓘ markers, the objects themselves, or open Places to learn about each place.' },

  'hud.places': { en: 'Places' },
  'hud.settings': { en: 'Settings' },
  'hud.help': { en: 'Help' },
  'hud.compass': { en: 'Compass (approximate): facing {direction}' },
  'hud.mouseLook': { en: 'Mouse look' },
  'hud.mouseLookHint': { en: 'Mouse look is on — press Esc to release the pointer.' },
  'hud.mouseLookFailed': { en: 'Mouse look is not available here. Click and drag to look around instead.' },
  'hud.walkFaster': { en: 'Walk faster' },
  'hud.nightView': { en: 'Night view' },
  'hud.zoom': { en: 'Zoom' },
  'hud.zoomIn': { en: 'Zoom in' },
  'hud.zoomOut': { en: 'Zoom out' },
  'hud.backDown': { en: 'Back down' },
  // The top bar's way out to qurany-piroz.com; its accessible name is error.home, which must
  // contain this word in every language (what a voice-control user says is what they see).
  'hud.back': { en: 'Back' },
  'hud.zoomReset': { en: 'Zoom {level}× — reset to normal view' },
  'toast.night': { en: 'Night view' },
  'toast.day': { en: 'Day view' },
  'hud.desktopHint': { en: 'W A S D to move · drag to look · double-click to walk' },
  'hud.markerLabel': { en: '{name} — learn more' },
  'hud.view3d': { en: '3D view of Masjid al-Haram. Use the Places menu to explore every location by name.' },

  'directions.n': { en: 'north' },
  'directions.ne': { en: 'north-east' },
  'directions.e': { en: 'east' },
  'directions.se': { en: 'south-east' },
  'directions.s': { en: 'south' },
  'directions.sw': { en: 'south-west' },
  'directions.w': { en: 'west' },
  'directions.nw': { en: 'north-west' },

  'hud.guide': { en: 'Hajj & Umrah' },
  'guide.heading': { en: 'Hajj and Umrah guide' },
  'guide.closeChooser': { en: 'Close the guide' },
  'guide.chooserIntro': {
    en: 'Step-by-step guides to the rites. Steps inside Masjid al-Haram are shown in the 3D view; you can follow the tawaf and sa’i routes on foot.',
  },
  'guide.stepCount': { en: '{count} steps' },
  'guide.disclaimer': {
    en: 'This is a simplified overview for orientation, not a religious ruling. Details differ between the schools of Islamic law, and the authorities in Makkah set the practical arrangements each year. Follow the guidance of qualified scholars and the official instructions.',
  },
  'guide.close': { en: 'Close the guide' },
  'guide.stepOf': { en: 'Step {n} of {total}' },
  'guide.overview': { en: 'Overview' },
  'guide.outside': { en: 'This step takes place outside Masjid al-Haram, so it is not shown in the 3D view.' },
  'guide.showMe': { en: 'Show me' },
  'guide.walkTawaf': { en: 'Walk one circuit' },
  'guide.walkSai': { en: 'Walk the seven laps' },
  'guide.routeTawaf': {
    en: 'In the 3D view, the gold circle marks the tawaf route, the arrows its direction, and the green line the starting point in line with the Black Stone. These are guide markings, not part of the mosque.',
  },
  'guide.routeSai': {
    en: 'In the 3D view, the gold line marks the route between Safa and Marwah, the arrows the way there and back, and the green strip the section between the green markers. The walk goes there and back seven times, ending at Marwah, and hastens between the green markers as men do; any movement key or the joystick stops it. These are guide markings, not part of the mosque.',
  },
  'guide.navigation': { en: 'Guide steps' },
  'guide.collapse': { en: 'Show less' },
  'guide.expand': { en: 'Show the full step' },
  'guide.previous': { en: 'Previous' },
  'guide.next': { en: 'Next' },
  'guide.start': { en: 'Start' },
  'guide.finish': { en: 'Finish' },
  'toast.walkingRoute': { en: 'Following the route — move or press a movement key to stop.' },
  'toast.saiLap': { en: 'Lap {n} of {total}: towards {place}' },
  'toast.saiDone': { en: 'Sa’i complete: seven laps, ending at Marwah.' },
  'toast.balcony': { en: 'On the clock tower’s balcony, about 370 m up. Walk along it, zoom in, or choose “Back down”.' },
  'toast.balconyWalk': { en: 'Double-click walking works on the ground. Choose “Back down” to return.' },
  'places.heading': { en: 'Places' },
  'places.intro': { en: 'Choose a place to read about it and turn towards it.' },
  'places.close': { en: 'Close places' },

  'panel.close': { en: 'Close' },
  'panel.goThere': { en: 'Go there' },
  'panel.lookAt': { en: 'Look at it' },
  'panel.balcony': { en: 'View from the balcony' },
  'panel.modelNote': { en: 'About this 3D model' },
  'panel.sources': { en: 'Sources' },
  'panel.opensInNewTab': { en: '(opens in a new tab)' },

  'settings.heading': { en: 'Settings' },
  'settings.close': { en: 'Close settings' },
  'settings.quality': { en: 'Graphics quality' },
  'settings.quality.auto': { en: 'Automatic' },
  'settings.quality.high': { en: 'High' },
  'settings.quality.medium': { en: 'Medium' },
  'settings.quality.low': { en: 'Low' },
  'settings.qualityCurrent': { en: 'Currently using: {tier}' },
  'settings.qualityNote': { en: 'Texture detail and antialiasing are chosen when the explorer loads.' },
  'settings.speed': { en: 'Walking speed' },
  'settings.sensitivity': { en: 'Look sensitivity' },
  'settings.language': { en: 'Language' },
  'settings.languageNote': { en: 'The explorer reloads in the language you choose.' },
  'settings.labelSize': { en: 'Label size' },
  'settings.textSize': { en: 'Text size in panels' },
  'settings.reverseDrag': { en: 'Reverse drag direction' },
  'settings.showMarkers': { en: 'Show place markers' },
  'settings.resetPosition': { en: 'Return to the starting point' },
  'settings.fullscreen': { en: 'Full screen' },
  'settings.exitFullscreen': { en: 'Exit full screen' },

  'help.heading': { en: 'About this explorer' },
  'help.close': { en: 'Close help' },
  'help.about': {
    en: 'This is a simplified, approximate 3D representation of Masjid al-Haram made for learning. It is not an exact architectural model: the Kaaba and the features around it follow published approximate dimensions, while the wider mosque is schematic and compressed in size. Only the ground level can be explored.',
  },
  'help.night': {
    en: 'Night view is an artistic impression of the floodlit mosque, not an exact record of its lighting.',
  },
  'help.accuracy': {
    en: 'Descriptions are written from the sources listed with each place. Each panel also notes what is approximate in the model.',
  },
  'help.credits': { en: 'Credits' },
  'help.creditsBody': {
    en: 'The 3D model and most textures were generated in code for Qurany Piroz. The kiswah photographs are by the people and collections below, used under their licences (cropped, scaled and combined). Rendering uses three.js (MIT licence).',
  },
  'credits.weave': {
    en: 'Woven calligraphy of the kiswah: “Kiswah fragment, Rarities of Muslim culture (2021-07-06)”, Vyacheslav Kirillin — CC BY-SA 4.0 (cropped, one repeat extracted)',
  },
  'credits.sitara': { en: 'Door curtain: “Kiswah of the Golden Door of Kaaba – 2016”, Abdullah Shakoor — CC0 (public domain)' },
  'credits.dedication': { en: 'Band dedication panel: “Kiswah, Kaaba – 7 May 2016”, Abdullah Shakoor — CC0 (public domain)' },
  'credits.khalili0039': { en: 'Band panel: Khalili Collection TXT 0039a, © Khalili Collections — CC BY-SA 3.0 IGO' },
  'credits.licence': { en: 'licence' },
  'credits.osm': { en: 'Plan of the mosque and the buildings around it: map data © OpenStreetMap contributors — ODbL' },
  'credits.khalili0251': { en: 'Band panel: Khalili Collection TXT 0251, © Khalili Collections — CC BY-SA 3.0 IGO' },
  'help.controls': { en: 'Controls' },
  'help.textVersion': { en: 'Read about every place without 3D' },

  'toast.qualityLowered': { en: 'Graphics quality lowered to keep movement smooth.' },
  'toast.travelled': { en: 'You are now at: {name}' },
  'toast.cantWalk': { en: 'There is no way to walk there from here.' },

  'error.title': { en: 'The 3D explorer could not start' },
  'error.webgl': {
    en: 'Your browser or device cannot run the 3D explorer at the required graphics level. Please try a modern browser (Safari, Chrome, Firefox, Edge or Samsung Internet) or another device.',
  },
  'error.webglDisabled': {
    en: 'WebGL appears to be turned off or blocked in this browser. Enabling hardware acceleration or trying another browser may help.',
  },
  'error.network': {
    en: 'Part of the explorer could not be downloaded. Please check your internet connection and try again.',
  },
  'error.unexpected': { en: 'Something went wrong while preparing the 3D view ({detail}).' },
  'error.retry': { en: 'Try again' },
  'error.textVersion': { en: 'Read about the places without 3D' },
  'error.home': { en: 'Back to Qurany Piroz' },
  'error.contextLost': {
    en: 'The 3D view was interrupted by the device (this can happen when memory runs low). Reload to continue.',
  },
  'error.reload': { en: 'Reload' },
  'error.softwareRendering': {
    en: 'Your device is drawing 3D graphics without hardware acceleration, so the explorer is running at low quality.',
  },

  'text.heading': { en: 'Places in Masjid al-Haram' },
  'text.intro': {
    en: 'A text version of the explorer, with the same information about each place.',
  },
  'text.back3d': { en: 'Try the 3D explorer again' },
} satisfies Record<string, LocalizedText>;

export type StringKey = keyof typeof STRINGS;

/** Every interface string, for the translation catalog (catalog.ts). */
export const UI_STRINGS: Readonly<Record<StringKey, LocalizedText>> = STRINGS;

/**
 * Looks up an interface string in the current language and fills in `{placeholders}`; numbers
 * are written in the language's own digits.
 */
export function t(key: StringKey, params?: Record<string, string | number>): string {
  const text = localize(STRINGS[key]);
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (whole, name: string) => {
    if (!(name in params)) return whole;
    const value = params[name];
    return typeof value === 'number' ? localizeDigits(value) : value;
  });
}
