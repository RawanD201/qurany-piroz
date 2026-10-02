// گۆی زەوی — the Earth as a lit globe, with the reader on it, مەککە on it, and a line drawn
// from the reader along the way the phone is pointing. Turn the phone and the line sweeps the
// globe; when it runs over مەککە it glows — the qibla, seen from above rather than on a dial.
//
// Built on the تیشکگرتنی خۆر و مانگ web app (zriwe/eclipse): the same three.js r128 and
// OrbitControls, the same Earth (MeshStandardMaterial with the day map, normal map and
// roughness map, clouds on a second sphere), the same sphere-UV convention and the same Sun —
// where it really is, from declination and the equation of time — so the night side is dark
// where it is night. What is new is the qibla: the two markers, the heading line and the glow.
//
// THE LINE is the whole great circle through the reader along the heading: bright ahead of
// the reader, dim behind, so the way the phone points is never in doubt, and running right
// round the far side of the globe. Every great circle through a point passes through that
// point's antipode, so the reader's own دژپێ is always on the line — and when the line runs
// over مەککە it runs over the Kaaba's دژپێ as well, on the far side. Both antipodes are marked.
//
// HOST CONTRACT. The page draws nothing but the globe — no backdrop: the canvas is
// transparent and the host's own background shows around the globe, light or dark as the
// phone is set. Every word around it is the host's, and so are the three words ON it — the
// labels of مەککە and the two antipodes, passed in the reader's dialect. The host calls
//     qiblaGlobe.update({ lat, lon, heading, qibla, facing, dark, labels: { mecca, me, kaaba } })
// whenever anything changes — `heading` null when the phone has no compass, in which case
// the line lies along `qibla` itself so the reader still sees where مەککە is. Calls made
// before the page is ready are kept and applied once it is. The page tells the host it is
// ready through window.webkit.messageHandlers.qiblaGlobe (iOS) or window.QiblaGlobe (the
// webview_flutter channel), whichever exists; neither is required.
//
// CONVENTIONS. Right-handed, Y up. THREE.SphereGeometry maps the texture's u to the
// direction (−cos 2πu, ·, sin 2πu), and an equirectangular map has longitude L at
// u = 0.5 + L/360 — so L lands on (cos L, ·, −sin L): east is toward −Z, and a point at
// (lat, lon) is (cos lat · cos lon, sin lat, −cos lat · sin lon). Same as the eclipse app's
// setMarkerLatLon; get either half wrong and the continents come out mirrored.

(function () {
  "use strict";

  const EARTH_R = 1;
  const LINE_R = EARTH_R + 0.006;
  const ACCENT = 0x1eada6;          // the app's teal
  const GLOW = 0xffd54a;            // gold, when the line runs over مەککە
  const KAABA_LAT = 21.422487;
  const KAABA_LON = 39.826206;
  const CAMERA_DISTANCE = 3.1;

  const wrap = document.getElementById("globe-wrap");
  const canvas = document.getElementById("globe-canvas");
  const loading = document.getElementById("globe-loading");

  // ── Renderer, scene, camera ──
  // Transparent: the host's background is the sky. `dark` (from the host) only restyles
  // the haze at the limb, which is drawn one way over black and another over white.
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 50);
  camera.position.set(CAMERA_DISTANCE, 0, 0);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.rotateSpeed = 0.55;
  controls.minDistance = 1.5;
  controls.maxDistance = 6;

  function resize() {
    const w = wrap.clientWidth || window.innerWidth;
    const h = wrap.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // A phone held upright is much taller than wide: open the field of view enough that the
    // globe still fits across the narrow side.
    camera.fov = camera.aspect < 1 ? 40 / Math.min(1, camera.aspect * 1.15) : 40;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  // ── Textures ──
  const textureLoader = new THREE.TextureLoader();
  let pending = 0;
  function loadTexture(uri, srgb) {
    pending += 1;
    const tex = textureLoader.load(uri, () => {
      pending -= 1;
      if (pending === 0) loading.classList.add("hidden");
    });
    if (srgb) tex.encoding = THREE.sRGBEncoding;
    tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    return tex;
  }
  const dayTexture = loadTexture(QIBLA_TEXTURES.earthDay, true);
  const normalTexture = loadTexture(QIBLA_TEXTURES.earthNormal, false);
  const roughnessTexture = loadTexture(QIBLA_TEXTURES.earthRoughness, false);
  const cloudsTexture = loadTexture(QIBLA_TEXTURES.earthClouds, true);

  // ── The Earth ──
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_R, 96, 96),
    new THREE.MeshStandardMaterial({
      map: dayTexture,
      normalMap: normalTexture,
      normalScale: new THREE.Vector2(0.7, 0.7),
      roughnessMap: roughnessTexture,
      roughness: 1,
      metalness: 0.1,
    })
  );
  scene.add(earth);

  // ── The clouds, a hair above it, drifting ──
  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_R * 1.012, 96, 96),
    new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      alphaMap: cloudsTexture,
      transparent: true,
      depthWrite: false,
      roughness: 1,
      opacity: 0.9,
    })
  );
  scene.add(clouds);

  // ── A thin sky, so the limb is not a hard edge against the backdrop ──
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_R * 1.035, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x5aa0ff,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  scene.add(atmosphere);
  let dark = true;
  function setDark(next) {
    dark = !!next;
    // Additive light reads as a glow over black and as nothing over white; over a light
    // backdrop the haze is an ordinary translucent blue instead.
    atmosphere.material.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
    atmosphere.material.color.setHex(dark ? 0x5aa0ff : 0x7fb0ea);
    atmosphere.material.opacity = dark ? 0.16 : 0.3;
    atmosphere.material.needsUpdate = true;
  }

  // ── The Sun, where it is, and a little ambient so the night side is not lost ──
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.7);
  scene.add(sun);
  scene.add(sun.target);
  scene.add(new THREE.AmbientLight(0x2a3650, 1.1));

  function dayOfYearFraction(date) {
    const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1);
    return (date.getTime() - startOfYear) / 86400000;
  }
  function declinationDeg(date) {
    return 23.44 * Math.sin((2 * Math.PI / 365.25) * (dayOfYearFraction(date) - 81));
  }
  function equationOfTimeMinutes(date) {
    const B = (2 * Math.PI * (dayOfYearFraction(date) - 81)) / 364;
    return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
  }
  // Where the Sun is overhead: declination for the latitude, the hour angle from UTC and
  // the equation of time for the longitude.
  function subsolarPoint(date) {
    const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
    let lon = -15 * (utcHours - 12 + equationOfTimeMinutes(date) / 60);
    while (lon < -180) lon += 360;
    while (lon > 180) lon -= 360;
    return { lat: declinationDeg(date), lon };
  }
  function updateSun() {
    const p = subsolarPoint(new Date());
    sun.position.copy(surfacePoint(p.lat, p.lon, 10));
    sun.target.position.set(0, 0, 0);
  }
  updateSun();
  setInterval(updateSun, 60000);

  // ── Geometry helpers ──
  function surfacePoint(latDeg, lonDeg, r) {
    const lat = THREE.MathUtils.degToRad(latDeg);
    const lon = THREE.MathUtils.degToRad(lonDeg);
    return new THREE.Vector3(
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      -Math.cos(lat) * Math.sin(lon)
    ).multiplyScalar(r);
  }
  // The local frame at (lat, lon): X east, Y up (out of the ground), Z south — so −Z is north.
  function localFrame(latDeg, lonDeg) {
    const lat = THREE.MathUtils.degToRad(latDeg);
    const lon = THREE.MathUtils.degToRad(lonDeg);
    const up = new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon));
    const north = new THREE.Vector3(-Math.sin(lat) * Math.cos(lon), Math.cos(lat), Math.sin(lat) * Math.sin(lon));
    const east = new THREE.Vector3(-Math.sin(lon), 0, -Math.cos(lon));
    return new THREE.Matrix4().makeBasis(east, up, north.clone().negate());
  }

  // ── The reader ──
  const userMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.014, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xff3b3b })
  );
  const userRing = new THREE.Mesh(
    new THREE.RingGeometry(0.02, 0.028, 48),
    new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false })
  );
  userRing.rotation.x = -Math.PI / 2;
  userMarker.visible = false;
  scene.add(userMarker);

  // ── مەککە ──
  const meccaGroup = new THREE.Group();
  const kaaba = new THREE.Mesh(
    new THREE.BoxGeometry(0.038, 0.038, 0.038),
    new THREE.MeshBasicMaterial({ color: 0x141414 })
  );
  kaaba.position.y = 0.019;
  const band = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.007, 0.04),
    new THREE.MeshBasicMaterial({ color: 0xd9ad3f })
  );
  band.position.y = 0.03;
  const meccaRing = new THREE.Mesh(
    new THREE.RingGeometry(0.045, 0.056, 64),
    new THREE.MeshBasicMaterial({ color: GLOW, transparent: true, opacity: 0.0, side: THREE.DoubleSide, depthWrite: false })
  );
  meccaRing.rotation.x = -Math.PI / 2;
  meccaRing.position.y = 0.002;
  meccaGroup.add(kaaba, band, meccaRing);
  meccaGroup.matrixAutoUpdate = false;
  meccaGroup.matrix.copy(localFrame(KAABA_LAT, KAABA_LON)).setPosition(surfacePoint(KAABA_LAT, KAABA_LON, EARTH_R));
  scene.add(meccaGroup);

  // ── Names, as sprites that always face the reader ──
  // The words come from the host in the reader's dialect (see `labels` in update); these
  // are only what shows until it speaks. Redrawn once Rabar has loaded.
  const labels = { mecca: "مەککە", me: "دژپێی من", kaaba: "دژپێی کەعبە" };
  function makeLabel(width) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, depthTest: false }));
    sprite.scale.set(width, width / 2, 1);
    sprite.userData.width = width;
    return sprite;
  }
  function drawLabel(sprite, text, color) {
    const c = document.createElement("canvas");
    c.width = 768;
    c.height = 384;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "88px Rabar, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = "rtl";
    ctx.lineWidth = 12;
    ctx.strokeStyle = "rgba(0,0,0,0.85)";
    ctx.strokeText(text, 384, 192);
    ctx.fillStyle = color;
    ctx.fillText(text, 384, 192);
    const tex = new THREE.CanvasTexture(c);
    tex.encoding = THREE.sRGBEncoding;
    if (sprite.material.map) sprite.material.map.dispose();
    sprite.material.map = tex;
    sprite.material.needsUpdate = true;
  }
  const meccaLabel = makeLabel(0.3);
  // A little south of the Kaaba and above the ground, so it does not sit on the marker.
  meccaLabel.position.copy(surfacePoint(KAABA_LAT - 4.5, KAABA_LON, EARTH_R + 0.06));
  meccaLabel.userData.placed = true;
  scene.add(meccaLabel);

  // ── The antipodes: the reader's, and the Kaaba's ──
  // Straight through the Earth from each. The Kaaba's is fixed — in the Pacific, south-east
  // of Tahiti; the reader's moves with the reader.
  const KAABA_ANTI_LAT = -KAABA_LAT;
  const KAABA_ANTI_LON = KAABA_LON - 180;
  function makeAntipodeMarker(color) {
    const group = new THREE.Group();
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.012, 20, 20),
      new THREE.MeshBasicMaterial({ color })
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.03, 0.038, 48),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.002;
    group.add(dot, ring);
    group.matrixAutoUpdate = false;
    return group;
  }
  function placeOnSurface(group, lat, lon) {
    group.matrix.copy(localFrame(lat, lon)).setPosition(surfacePoint(lat, lon, EARTH_R));
  }
  const kaabaAntipode = makeAntipodeMarker(0xd9ad3f);
  placeOnSurface(kaabaAntipode, KAABA_ANTI_LAT, KAABA_ANTI_LON);
  scene.add(kaabaAntipode);
  const kaabaAntipodeLabel = makeLabel(0.4);
  kaabaAntipodeLabel.position.copy(surfacePoint(KAABA_ANTI_LAT - 5, KAABA_ANTI_LON, EARTH_R + 0.06));
  kaabaAntipodeLabel.userData.placed = true;
  scene.add(kaabaAntipodeLabel);

  const myAntipode = makeAntipodeMarker(0xff3b3b);
  myAntipode.visible = false;
  scene.add(myAntipode);
  const myAntipodeLabel = makeLabel(0.36);
  myAntipodeLabel.visible = false;
  scene.add(myAntipodeLabel);

  // Sprites ignore depth (so a name is never cut by the ground under it), which means a
  // name on the far side would show through the globe: hide any whose spot faces away.
  const allLabels = [meccaLabel, kaabaAntipodeLabel, myAntipodeLabel];
  const _spot = new THREE.Vector3();
  const _eye = new THREE.Vector3();
  function cullLabels() {
    _eye.copy(camera.position).normalize();
    for (const sprite of allLabels) {
      if (!sprite.userData.placed) continue;
      _spot.copy(sprite.position).normalize();
      sprite.visible = _spot.dot(_eye) > 0.12;
    }
  }

  function drawLabels() {
    drawLabel(meccaLabel, labels.mecca, "#ffffff");
    drawLabel(kaabaAntipodeLabel, labels.kaaba, "#ffe08a");
    drawLabel(myAntipodeLabel, labels.me, "#ffb3b3");
  }
  drawLabels();
  if (document.fonts && document.fonts.load) {
    document.fonts.load('88px "Rabar"').then(drawLabels).catch(() => {});
  }

  // ── The line, and the halo it grows when it reaches مەککە ──
  // Built once, pointing north in the reader's local frame; the heading turns the pivot.
  // Two halves of one great circle: the half ahead of the reader, bright, and the half
  // behind — from the reader's antipode back round to the reader — dim and thinner.
  class SurfaceArc extends THREE.Curve {
    constructor(radius, fromRad, toRad) {
      super();
      this.radius = radius;
      this.fromRad = fromRad;
      this.toRad = toRad;
    }
    getPoint(t, target = new THREE.Vector3()) {
      const a = this.fromRad + t * (this.toRad - this.fromRad);
      return target.set(0, this.radius * Math.cos(a), -this.radius * Math.sin(a));
    }
  }
  const aheadArc = new SurfaceArc(LINE_R, 0, Math.PI);
  const behindArc = new SurfaceArc(LINE_R, Math.PI, 2 * Math.PI);
  const lineMaterial = new THREE.MeshBasicMaterial({ color: ACCENT });
  const behindMaterial = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.45 });
  const line = new THREE.Mesh(new THREE.TubeGeometry(aheadArc, 160, 0.0055, 8, false), lineMaterial);
  const lineBehind = new THREE.Mesh(new THREE.TubeGeometry(behindArc, 160, 0.0035, 8, false), behindMaterial);
  const haloMaterial = new THREE.MeshBasicMaterial({
    color: GLOW, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const halo = new THREE.Mesh(new THREE.TubeGeometry(aheadArc, 160, 0.02, 8, false), haloMaterial);
  const haloBehind = new THREE.Mesh(new THREE.TubeGeometry(behindArc, 160, 0.012, 8, false), haloMaterial);

  const headingPivot = new THREE.Group();
  headingPivot.add(line, lineBehind, halo, haloBehind);
  const lineFrame = new THREE.Group();
  lineFrame.matrixAutoUpdate = false;
  lineFrame.add(headingPivot, userRing);
  lineFrame.visible = false;
  scene.add(lineFrame);

  // ── State ──
  const state = { lat: null, lon: null, heading: null, qibla: null, facing: false };
  let framed = false;
  let targetHeading = 0;
  let shownHeading = 0;
  let glowPhase = 0;

  function applyLocation(lat, lon) {
    userMarker.position.copy(surfacePoint(lat, lon, EARTH_R + 0.006));
    userMarker.visible = true;
    lineFrame.matrix.copy(localFrame(lat, lon));
    lineFrame.visible = true;
    const antiLat = -lat;
    const antiLon = lon >= 0 ? lon - 180 : lon + 180;
    placeOnSurface(myAntipode, antiLat, antiLon);
    myAntipode.visible = true;
    myAntipodeLabel.position.copy(surfacePoint(antiLat - 5, antiLon, EARTH_R + 0.06));
    myAntipodeLabel.userData.placed = true;
    if (!framed) {
      // The reader's own spot dead centre, the north pole up the screen.
      camera.position.copy(surfacePoint(lat, lon, CAMERA_DISTANCE));
      camera.up.set(0, 1, 0);
      controls.target.set(0, 0, 0);
      controls.update();
      framed = true;
    }
  }

  function update(next) {
    if (!next) return;
    if ("dark" in next && !!next.dark !== dark) setDark(next.dark);
    if (next.labels) {
      let changed = false;
      for (const key of ["mecca", "me", "kaaba"]) {
        if (typeof next.labels[key] === "string" && next.labels[key] && next.labels[key] !== labels[key]) {
          labels[key] = next.labels[key];
          changed = true;
        }
      }
      if (changed) drawLabels();
    }
    if (typeof next.lat === "number" && typeof next.lon === "number") {
      if (next.lat !== state.lat || next.lon !== state.lon) applyLocation(next.lat, next.lon);
      state.lat = next.lat;
      state.lon = next.lon;
    }
    if ("qibla" in next) state.qibla = typeof next.qibla === "number" ? next.qibla : null;
    if ("heading" in next) state.heading = typeof next.heading === "number" ? next.heading : null;
    state.facing = !!next.facing;
    const bearing = state.heading !== null ? state.heading : (state.qibla !== null ? state.qibla : 0);
    // The shortest way round, so 359° → 1° does not swing the line the long way.
    let delta = ((bearing - targetHeading) % 360 + 540) % 360 - 180;
    targetHeading += delta;
    lineMaterial.color.setHex(state.facing ? GLOW : ACCENT);
    behindMaterial.color.setHex(state.facing ? GLOW : ACCENT);
  }

  // ── Frames ──
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.1);
    clouds.rotation.y += dt * 0.004;
    // Ease toward the heading; the compass reports in steps, the line should not.
    shownHeading += (targetHeading - shownHeading) * Math.min(1, dt * 9);
    headingPivot.rotation.y = -THREE.MathUtils.degToRad(shownHeading);
    if (state.facing) {
      glowPhase += dt * 4;
      const pulse = 0.5 + 0.5 * Math.sin(glowPhase);
      haloMaterial.opacity = 0.25 + 0.4 * pulse;
      meccaRing.material.opacity = 0.45 + 0.5 * pulse;
      meccaRing.scale.setScalar(1 + 0.25 * pulse);
      // The far side lights up with it: the line now runs over the Kaaba's antipode too.
      kaabaAntipode.children[1].material.opacity = 0.5 + 0.5 * pulse;
      kaabaAntipode.children[1].scale.setScalar(1 + 0.25 * pulse);
    } else {
      haloMaterial.opacity = Math.max(0, haloMaterial.opacity - dt * 2);
      meccaRing.material.opacity = Math.max(0, meccaRing.material.opacity - dt * 2);
      kaabaAntipode.children[1].material.opacity = 0.6;
      kaabaAntipode.children[1].scale.setScalar(1);
    }
    controls.update();
    cullLabels();
    renderer.render(scene, camera);
  }
  animate();

  // ── The host ──
  window.qiblaGlobe = {
    update,
    reframe() { framed = false; if (state.lat !== null) applyLocation(state.lat, state.lon); },
    subsolarPoint,
  };
  if (window.__qiblaGlobePending) {
    update(window.__qiblaGlobePending);
    window.__qiblaGlobePending = null;
  }
  try {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.qiblaGlobe) {
      window.webkit.messageHandlers.qiblaGlobe.postMessage("ready");
    } else if (window.QiblaGlobe && window.QiblaGlobe.postMessage) {
      window.QiblaGlobe.postMessage("ready");
    }
  } catch (e) { /* no host — the page stands alone */ }

  // Standing alone (a browser, for a look): ?lat=36.19&lon=44.01&heading=195&qibla=195
  const params = new URLSearchParams(window.location.search);
  if (params.has("lat")) {
    const lat = parseFloat(params.get("lat"));
    const lon = parseFloat(params.get("lon"));
    const qibla = params.has("qibla") ? parseFloat(params.get("qibla")) : null;
    const heading = params.has("heading") ? parseFloat(params.get("heading")) : null;
    const facing = qibla !== null && heading !== null &&
      Math.abs(((heading - qibla) % 360 + 540) % 360 - 180) <= 3;
    const light = params.get("theme") === "light";
    if (light) document.body.style.background = "#f2f3f5";
    update({ lat, lon, heading, qibla, facing, dark: !light });
    if (params.get("cam") === "far") {
      // Look at the far side — the antipodes.
      camera.position.copy(surfacePoint(-lat, lon >= 0 ? lon - 180 : lon + 180, CAMERA_DISTANCE));
      controls.update();
    }
  }
})();
