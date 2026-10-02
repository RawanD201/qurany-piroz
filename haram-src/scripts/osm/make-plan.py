#!/usr/bin/env python3
"""Turns OpenStreetMap data for Masjid al-Haram into src/data/plan-data.ts.

Map data © OpenStreetMap contributors, available under the Open Database Licence (ODbL).

Usage (from haram-src/):
    curl -sS -H "User-Agent: QuranyPiroz-HaramExplorer/1.0" -H "Accept: application/json" \\
         --data-urlencode "data@scripts/osm/haram.overpass" \\
         https://overpass-api.de/api/interpreter -o /tmp/haram-osm.json
    python3 scripts/osm/make-plan.py /tmp/haram-osm.json > src/data/plan-data.ts

Coordinates are metres from the centre of the Kaaba: +x east, +z south (the explorer's frame).
Outlines are simplified (Douglas-Peucker) and rounded; they follow the real plan closely but
are not survey-grade.
"""
import json, math, sys

data = json.load(open(sys.argv[1]))
els = data['elements']
byid = {(e['type'], e['id']): e for e in els}
STAMP = data.get('osm3s', {}).get('timestamp_osm_base', '')

KAABA_WAY = 103914569
kaaba = byid[('way', KAABA_WAY)]
ring = kaaba['geometry'][:-1]
LAT0 = sum(p['lat'] for p in ring) / len(ring)
LON0 = sum(p['lon'] for p in ring) / len(ring)
KX = 111320 * math.cos(math.radians(LAT0))
KZ = 110574


def xz(p):
    return ((p['lon'] - LON0) * KX, -(p['lat'] - LAT0) * KZ)


def area(pts):
    a = 0
    for i in range(len(pts)):
        x1, z1 = pts[i]
        x2, z2 = pts[(i + 1) % len(pts)]
        a += x1 * z2 - x2 * z1
    return a / 2


def open_ring(pts):
    return pts[:-1] if len(pts) > 2 and math.dist(pts[0], pts[-1]) < 0.05 else pts


def member_ways(rel, role):
    return [[xz(p) for p in m['geometry']] for m in rel.get('members', []) if m['type'] == 'way' and m.get('geometry') and m.get('role') == role]


def join(ways, tol=0.05):
    ways = [list(w) for w in ways]
    rings = []
    while ways:
        r = ways.pop(0)
        changed = True
        while changed and not (len(r) > 2 and math.dist(r[0], r[-1]) < tol):
            changed = False
            for i, w in enumerate(ways):
                if math.dist(r[-1], w[0]) < tol: r += w[1:]
                elif math.dist(r[-1], w[-1]) < tol: r += w[::-1][1:]
                elif math.dist(r[0], w[-1]) < tol: r = w[:-1] + r
                elif math.dist(r[0], w[0]) < tol: r = w[::-1][:-1] + r
                else: continue
                ways.pop(i); changed = True; break
        rings.append(open_ring(r))
    return rings


def rel_rings(rid, role='outer'):
    return join(member_ways(byid[('relation', rid)], role))


def way_ring(wid):
    return open_ring([xz(p) for p in byid[('way', wid)]['geometry']])


def dp(points, tol):
    """Douglas-Peucker on an open polyline."""
    if len(points) < 3:
        return points
    (x1, z1), (x2, z2) = points[0], points[-1]
    dx, dz = x2 - x1, z2 - z1
    length = math.hypot(dx, dz) or 1e-9
    best, index = 0, 0
    for i in range(1, len(points) - 1):
        x, z = points[i]
        d = abs(dz * x - dx * z + x2 * z1 - z2 * x1) / length if math.hypot(dx, dz) > 1e-9 else math.dist(points[i], points[0])
        if d > best:
            best, index = d, i
    if best <= tol:
        return [points[0], points[-1]]
    return dp(points[: index + 1], tol)[:-1] + dp(points[index:], tol)


def simplify_ring(pts, tol):
    # Split at the point farthest from the first, simplify both halves.
    far = max(range(len(pts)), key=lambda i: math.dist(pts[i], pts[0]))
    a = dp(pts[: far + 1], tol)
    b = dp(pts[far:] + [pts[0]], tol)
    return a[:-1] + b[:-1]


def ccw(pts):
    # Counter-clockwise seen from above in (x east, z south) means negative signed area here;
    # store every outline the same way round: clockwise on a north-up map.
    return pts if area(pts) > 0 else pts[::-1]


def inside(pt, poly):
    x, z = pt
    c = False
    for i in range(len(poly)):
        x1, z1 = poly[i]
        x2, z2 = poly[(i + 1) % len(poly)]
        if (z1 > z) != (z2 > z) and x < (x2 - x1) * (z - z1) / (z2 - z1) + x1:
            c = not c
    return c


def fmt(pts, digits=1):
    return '[' + ', '.join(f'{{ x: {round(x, digits)}, z: {round(z, digits)} }}' for x, z in pts) + ']'


def flat(pts, digits=1):
    return '[' + ','.join(f'{round(x, digits)},{round(z, digits)}' for x, z in pts) + ']'


def num(v):
    try:
        return float(str(v).split()[0].replace(',', '.'))
    except (ValueError, IndexError):
        return None


# ---- the mosque -----------------------------------------------------------------------------
MAIN_OUTER = simplify_ring(rel_rings(12795517, 'outer')[0], 0.6)
MAIN_INNER = simplify_ring(rel_rings(12795517, 'inner')[0], 0.3)
MASA = simplify_ring(rel_rings(12790673, 'outer')[0], 0.5)
ABDULLAH = simplify_ring(rel_rings(13020659, 'outer')[0], 1.0)
mosque_outers = rel_rings(1472531, 'outer')
NORTH = simplify_ring(max(mosque_outers, key=lambda r: min(z for _, z in r) * -1 if abs(area(r)) > 100000 and min(z for _, z in r) < -600 else -1e9), 1.0)

portico = way_ring(925367096)
# The Ottoman portico is mapped as one closed way tracing a C-shaped ring: the courtyard side
# from its north-east end round to its south-east end (points 0-14), then back along the outside.
PORTICO_INNER = portico[0:15]
PORTICO_OUTER = portico[15:]

SAFA = byid[('way', 136524020)]
MARWAH = byid[('way', 136524024)]


def centre(e):
    pts = open_ring([xz(p) for p in e['geometry']])
    return (sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts)), max(math.dist(p, (sum(q[0] for q in pts) / len(pts), sum(q[1] for q in pts) / len(pts))) for p in pts)


(safa_c, safa_r), (marwah_c, marwah_r) = centre(SAFA), centre(MARWAH)

# Kaaba orientation: mean wall bearing modulo 90 degrees (the door wall faces this bearing).
bearings = []
for i in range(len(ring)):
    a, b = xz(ring[i]), xz(ring[(i + 1) % len(ring)])
    if math.dist(a, b) < 5:
        continue
    bearing = math.degrees(math.atan2(b[0] - a[0], -(b[1] - a[1]))) % 90
    bearings.append(bearing)
door_bearing = sum(bearings) / len(bearings)

# ---- gates and minarets -----------------------------------------------------------------------
outlines = [MAIN_OUTER, MASA, ABDULLAH]


def dist_to_outline(p):
    best = 1e9
    for poly in outlines:
        for i in range(len(poly)):
            (x1, z1), (x2, z2) = poly[i], poly[(i + 1) % len(poly)]
            dx, dz = x2 - x1, z2 - z1
            t = max(0, min(1, ((p[0] - x1) * dx + (p[1] - z1) * dz) / (dx * dx + dz * dz or 1e-9)))
            best = min(best, math.dist(p, (x1 + dx * t, z1 + dz * t)))
    return best


gates = []
for e in els:
    t = e.get('tags', {})
    if e['type'] != 'node' or 'entrance' not in t:
        continue
    p = xz(e)
    if math.hypot(*p) > 700 or dist_to_outline(p) > 6:
        continue
    ref = t.get('ref', '').strip()
    name = t.get('name:en') or t.get('name') or ''
    if 'Kaaba' in name:
        continue
    gates.append((round(p[0], 1), round(p[1], 1), ref, name.replace("'", '’')))
gates.sort(key=lambda g: (g[2].isdigit() and int(g[2]) or 999, g[0]))

minarets = []
for e in els:
    t = e.get('tags', {})
    if t.get('tower:type') != 'minaret' or e['type'] != 'way':
        continue
    pts = open_ring([xz(p) for p in e['geometry']])
    c = (sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts))
    minarets.append((round(c[0], 1), round(c[1], 1), num(t.get('height')) or 89))
minarets.sort()

# ---- the clock tower and the city around -------------------------------------------------------
clock = byid[('way', 958867174)]
clock_pts = open_ring([xz(p) for p in clock['geometry']])
clock_c = (sum(p[0] for p in clock_pts) / len(clock_pts), sum(p[1] for p in clock_pts) / len(clock_pts))
CLOCK_BOX = (clock_c[0] - 44, clock_c[1] - 34, clock_c[0] + 44, clock_c[1] + 34)

skip_ways = {KAABA_WAY, 925367096, 136524020, 136524024, 315911894, 473301379}
skip_rels = {1472531, 11321727, 12790673, 12792656, 12795517, 12802369, 13020659, 18852997, 12896421}
mosque_polys = [MAIN_OUTER, MASA, ABDULLAH, NORTH] + [simplify_ring(r, 1) for r in mosque_outers]

candidates = []
for e in els:
    t = e.get('tags', {})
    if not ('building' in t or 'building:part' in t):
        continue
    if e['type'] == 'way':
        if e['id'] in skip_ways or 'geometry' not in e:
            continue
        rings_ = [open_ring([xz(p) for p in e['geometry']])]
    elif e['type'] == 'relation':
        if e['id'] in skip_rels:
            continue
        rings_ = join(member_ways(e, 'outer'))
    else:
        continue
    for pts in rings_:
        if len(pts) < 3:
            continue
        a = abs(area(pts))
        c = (sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts))
        if a < 150 or math.hypot(*c) > 950:
            continue
        if t.get('tower:type') == 'minaret' or any(inside(c, poly) for poly in mosque_polys):
            continue
        if CLOCK_BOX[0] < c[0] < CLOCK_BOX[2] and CLOCK_BOX[1] < c[1] < CLOCK_BOX[3]:
            continue
        part = 'building:part' in t
        top = num(t.get('height'))
        if top is None and t.get('building:levels'):
            top = (num(t.get('building:levels')) or 8) * 3.6
        if top is None:
            if part:
                continue
            top = 30
        bottom = num(t.get('min_height')) or 0
        if top - bottom < 1:
            continue
        candidates.append({'part': part, 'pts': pts, 'c': c, 'y0': bottom, 'y1': top, 'name': t.get('name:en') or ''})

parts = [c for c in candidates if c['part']]
landmarks = []
for c in candidates:
    # An outline that has mapped parts is drawn by its parts.
    if not c['part'] and any(inside(p['c'], c['pts']) for p in parts):
        continue
    pts = ccw(simplify_ring(c['pts'], 0.8))
    if len(pts) < 3:
        continue
    landmarks.append((round(c['y0'], 1), round(c['y1'], 1), c['name'].replace("'", '’'), pts))
landmarks.sort(key=lambda l: (round(math.hypot(*l[3][0])), l[0]))

# ---- write -----------------------------------------------------------------------------------
out = []
w = out.append
w('// GENERATED by scripts/osm/make-plan.py — do not edit by hand.')
w('//')
w('// The real plan of Masjid al-Haram and the buildings around it, from OpenStreetMap.')
w('// Map data © OpenStreetMap contributors, available under the Open Database Licence (ODbL):')
w('// https://www.openstreetmap.org/copyright')
w(f'// Data as of {STAMP}. Outlines simplified (to within about a metre) and rounded.')
w('//')
w('// Metres from the centre of the Kaaba: +x east, +z south.')
w('')
w("import type { Vec2 } from './layout';")
w('')
w(f"export const OSM_DATA_DATE = '{STAMP[:10]}';")
w('')
w('/** Bearing (degrees from north) that the Kaaba\'s door wall faces, from its mapped outline. */')
w(f'export const KAABA_DOOR_BEARING = {round(door_bearing, 2)};')
w('')
w('/** The halls: the outer outline of the main building (the first Saudi and King Fahd expansions). */')
w(f'export const MAIN_OUTER: readonly Vec2[] = {fmt(ccw(MAIN_OUTER))};')
w('')
w('/** The halls\' inner face: the open courtyard plus the Ottoman portico. */')
w(f'export const MAIN_INNER: readonly Vec2[] = {fmt(ccw(MAIN_INNER))};')
w('')
w('/** The Ottoman portico, a C-shaped ring open to the east: its courtyard side (north-east end to')
w(' *  south-east end) and its outer side (south-east end back to north-east end). */')
w(f'export const PORTICO_INNER: readonly Vec2[] = {fmt(PORTICO_INNER)};')
w(f'export const PORTICO_OUTER: readonly Vec2[] = {fmt(PORTICO_OUTER)};')
w('')
w('/** The Mas\'a, the gallery between Safa and Marwah. */')
w(f'export const MASA_OUTLINE: readonly Vec2[] = {fmt(ccw(MASA))};')
w(f'export const SAFA_CENTER: Vec2 = {{ x: {round(safa_c[0], 1)}, z: {round(safa_c[1], 1)} }};')
w(f'export const MARWAH_CENTER: Vec2 = {{ x: {round(marwah_c[0], 1)}, z: {round(marwah_c[1], 1)} }};')
w('')
w('/** The King Abdullah expansion (north-west) and the outer northern building. */')
w(f'export const ABDULLAH_OUTLINE: readonly Vec2[] = {fmt(ccw(ABDULLAH))};')
w(f'export const NORTH_OUTLINE: readonly Vec2[] = {fmt(ccw(NORTH))};')
w('')
w('/** Mapped entrances on the outer walls: position, gate number, name. */')
w('export const OSM_GATES: readonly { x: number; z: number; ref: string; name: string }[] = [')
for g in gates:
    w(f"  {{ x: {g[0]}, z: {g[1]}, ref: '{g[2]}', name: '{g[3]}' }},")
w('];')
w('')
w('/** The thirteen minarets: position and height. */')
w('export const OSM_MINARETS: readonly { x: number; z: number; height: number }[] = [')
for m in minarets:
    w(f'  {{ x: {m[0]}, z: {m[1]}, height: {m[2]} }},')
w('];')
w('')
w('/** The centre of the Makkah Royal Clock Tower. */')
w(f'export const CLOCK_TOWER_CENTER: Vec2 = {{ x: {round(clock_c[0], 1)}, z: {round(clock_c[1], 1)} }};')
w('')
w('/** Buildings around the mosque: from y0 to y1 metres, outline as flat x,z pairs. */')
w('export const LANDMARKS: readonly { y0: number; y1: number; name: string; outline: readonly number[] }[] = [')
for y0, y1, name, pts in landmarks:
    w(f"  {{ y0: {y0}, y1: {y1}, name: '{name}', outline: {flat(pts)} }},")
w('];')
print('\n'.join(out))
print(f'// {len(gates)} gates, {len(minarets)} minarets, {len(landmarks)} landmark outlines', file=sys.stderr)
