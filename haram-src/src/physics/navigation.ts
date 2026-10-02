// Route finding for "double-click to walk there".
//
// The collision world is stamped onto a 0.5 m grid of blocked cells (with the visitor's radius
// plus a margin as clearance), and A* finds a route across it. The route is then straightened:
// any corner the visitor could cut in a straight line is removed, so they walk natural lines
// rather than a staircase of grid steps. Pure logic, no three.js — unit-tested in Node.

import { PLAYER, type Vec2 } from '../data/layout';
import type { BlockedGrid, CollisionWorld } from './collision';

const SQRT2 = Math.SQRT2;
/** Upper bound on cells explored per search, so a hopeless search cannot hang the page. */
const MAX_EXPANSIONS = 400_000;

export class NavGrid {
  private readonly g: Float32Array;
  private readonly parent: Int32Array;
  private readonly closed: Uint8Array;

  constructor(private readonly grid: BlockedGrid) {
    const n = grid.width * grid.height;
    this.g = new Float32Array(n);
    this.parent = new Int32Array(n);
    this.closed = new Uint8Array(n);
  }

  static fromWorld(world: CollisionWorld, cellSize = 0.5, clearance = PLAYER.radius + 0.12): NavGrid {
    return new NavGrid(world.rasterize(cellSize, clearance));
  }

  /** Whether the visitor could stand at this point. */
  isWalkable(p: Vec2): boolean {
    const k = this.cellIndex(p);
    return k >= 0 && this.grid.blocked[k] === 0;
  }

  /**
   * A route from `from` to `to` as waypoints (excluding the start), or null if there is none.
   * A destination just inside an obstacle is moved to the nearest spot the visitor can reach
   * (within `snapRadius` metres).
   */
  findPath(from: Vec2, to: Vec2, snapRadius = 3): Vec2[] | null {
    const { blocked, cellSize } = this.grid;
    let goal = this.cellIndex(to);
    if (goal < 0) return null;
    let goalPoint: Vec2 = to;
    if (blocked[goal]) {
      goal = this.nearestFree(goal, Math.ceil(snapRadius / cellSize));
      if (goal < 0) return null;
      goalPoint = this.centre(goal);
    }
    let start = this.cellIndex(from);
    if (start < 0) return null;
    // Standing right beside a wall can put the start cell inside the clearance band.
    if (blocked[start]) start = this.nearestFree(start, 4);
    if (start < 0) return null;

    // Open ground between here and there: walk straight.
    if (this.lineClear(from, goalPoint)) return [goalPoint];

    const cells = this.search(start, goal);
    if (!cells) return null;
    const points = cells.map((k) => this.centre(k));
    points[points.length - 1] = goalPoint;
    return this.straighten(from, points);
  }

  /** True when a straight walk between the points crosses no blocked cell. */
  lineClear(a: Vec2, b: Vec2): boolean {
    const step = this.grid.cellSize * 0.4;
    const length = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.max(1, Math.ceil(length / step));
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const k = this.cellIndex({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
      if (k < 0 || this.grid.blocked[k]) return false;
    }
    return true;
  }

  // ---- internals --------------------------------------------------------------------------

  private cellIndex(p: Vec2): number {
    const { minX, minZ, cellSize, width, height } = this.grid;
    const i = Math.floor((p.x - minX) / cellSize);
    const j = Math.floor((p.z - minZ) / cellSize);
    if (i < 0 || j < 0 || i >= width || j >= height) return -1;
    return j * width + i;
  }

  private centre(k: number): Vec2 {
    const { minX, minZ, cellSize, width } = this.grid;
    const i = k % width;
    const j = (k - i) / width;
    return { x: minX + (i + 0.5) * cellSize, z: minZ + (j + 0.5) * cellSize };
  }

  /** The nearest free cell within `radius` cells, searching outwards in rings; -1 if none. */
  private nearestFree(k: number, radius: number): number {
    const { width, height, blocked } = this.grid;
    const i0 = k % width;
    const j0 = (k - i0) / width;
    let best = -1;
    let bestDistance = Infinity;
    for (let r = 1; r <= radius && best < 0; r++) {
      for (let dj = -r; dj <= r; dj++) {
        for (let di = -r; di <= r; di++) {
          if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue;
          const i = i0 + di;
          const j = j0 + dj;
          if (i < 0 || j < 0 || i >= width || j >= height) continue;
          const n = j * width + i;
          const d = di * di + dj * dj;
          if (!blocked[n] && d < bestDistance) {
            best = n;
            bestDistance = d;
          }
        }
      }
    }
    return best;
  }

  /** A* over the grid with 8-way moves (no cutting past blocked corners). */
  private search(start: number, goal: number): number[] | null {
    const { width, height, blocked } = this.grid;
    const { g, parent, closed } = this;
    g.fill(Infinity);
    closed.fill(0);
    const gi = goal % width;
    const gj = (goal - gi) / width;
    const heuristic = (k: number) => {
      const i = k % width;
      const dx = Math.abs(i - gi);
      const dz = Math.abs((k - i) / width - gj);
      return Math.max(dx, dz) + (SQRT2 - 1) * Math.min(dx, dz);
    };
    const heap = new MinHeap();
    g[start] = 0;
    parent[start] = -1;
    heap.push(start, heuristic(start));
    let expansions = 0;

    while (heap.size > 0) {
      const current = heap.pop();
      if (closed[current]) continue;
      if (current === goal) return this.unwind(goal);
      closed[current] = 1;
      if (++expansions > MAX_EXPANSIONS) return null;
      const ci = current % width;
      const cj = (current - ci) / width;
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (di === 0 && dj === 0) continue;
          const ni = ci + di;
          const nj = cj + dj;
          if (ni < 0 || nj < 0 || ni >= width || nj >= height) continue;
          const n = nj * width + ni;
          if (blocked[n] || closed[n]) continue;
          // A diagonal step needs both neighbouring straight cells free.
          if (di !== 0 && dj !== 0 && (blocked[cj * width + ni] || blocked[nj * width + ci])) continue;
          const cost = g[current] + (di !== 0 && dj !== 0 ? SQRT2 : 1);
          if (cost < g[n]) {
            g[n] = cost;
            parent[n] = current;
            heap.push(n, cost + heuristic(n));
          }
        }
      }
    }
    return null;
  }

  private unwind(goal: number): number[] {
    const cells: number[] = [];
    for (let k = goal; k !== -1; k = this.parent[k]) cells.push(k);
    cells.reverse();
    return cells.slice(1); // the start cell is where the visitor already is
  }

  /** Keeps only the corners that cannot be cut in a straight line. */
  private straighten(from: Vec2, points: Vec2[]): Vec2[] {
    const result: Vec2[] = [];
    let anchor = from;
    let i = 0;
    while (i < points.length) {
      // Advance while the straight line from the anchor stays clear.
      let j = i;
      while (j + 1 < points.length && this.lineClear(anchor, points[j + 1])) j++;
      result.push(points[j]);
      anchor = points[j];
      i = j + 1;
    }
    return result;
  }
}

/** A small binary heap of (cell, priority) pairs, lowest priority first. */
class MinHeap {
  private readonly items: number[] = [];
  private readonly priorities: number[] = [];

  get size(): number {
    return this.items.length;
  }

  push(item: number, priority: number): void {
    const items = this.items;
    const priorities = this.priorities;
    let i = items.length;
    items.push(item);
    priorities.push(priority);
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (priorities[p] <= priority) break;
      items[i] = items[p];
      priorities[i] = priorities[p];
      i = p;
    }
    items[i] = item;
    priorities[i] = priority;
  }

  pop(): number {
    const items = this.items;
    const priorities = this.priorities;
    const top = items[0];
    const lastItem = items.pop() as number;
    const lastPriority = priorities.pop() as number;
    const n = items.length;
    if (n > 0) {
      let i = 0;
      for (;;) {
        const l = 2 * i + 1;
        const r = l + 1;
        let m = i;
        let mp = lastPriority;
        if (l < n && priorities[l] < mp) {
          m = l;
          mp = priorities[l];
        }
        if (r < n && priorities[r] < mp) m = r;
        if (m === i) break;
        items[i] = items[m];
        priorities[i] = priorities[m];
        i = m;
      }
      items[i] = lastItem;
      priorities[i] = lastPriority;
    }
    return top;
  }
}
