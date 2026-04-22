export const C = {
  // ── Backgrounds ──────────────────────────────
  ivory:    '#F7F4EF',   // primary bg — soft ivory, clean luxury base
  beige:    '#ECE7DF',   // secondary bg — warm light beige for layering
  mist:     '#E8E2D9',   // tertiary — slightly deeper beige for subtle contrast

  // ── Text ─────────────────────────────────────
  charcoal: '#2B2725',   // primary text — rich charcoal, not pure black
  taupe:    '#A89F94',   // secondary text / labels
  line:     '#D8CEC0',   // dividers / thin rules

  // ── Accent ───────────────────────────────────
  gold:     '#C6A45A',   // muted premium gold — use sparingly
  goldDeep: '#A8883E',   // deeper gold for hover / emphasis — very minimal

  // ── Deep contrast ────────────────────────────
  ink:      '#1E2A38',   // navy/ink — only for dark sections (metrics, rarity, parking)
  dark:     '#232018',   // near-black warm — preloader, hero overlay base

} as const;

export const EASE = [0.22, 1, 0.36, 1] as const;
