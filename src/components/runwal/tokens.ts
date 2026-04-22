// Runwal Malabar — All-light luxury palette
// Bright, clean, calm, expensive. No dark sections anywhere.
export const C = {
  // ── Backgrounds ──────────────────────────────
  ivory:    '#F7F4EF',   // primary — soft ivory
  beige:    '#ECE7DF',   // secondary — warm light beige
  mist:     '#E4DDD4',   // tertiary — deeper warm beige
  stone:    '#EDE8E1',   // alternate — between ivory and beige

  // ── Text ─────────────────────────────────────
  charcoal: '#2B2725',   // primary text
  mid:      '#6B6460',   // mid-tone text
  taupe:    '#A89F94',   // secondary / labels
  line:     '#D8CEC0',   // dividers

  // ── Accent ───────────────────────────────────
  gold:     '#C6A45A',   // muted premium gold — use sparingly
  goldDeep: '#A8883E',   // deeper gold for hover

} as const;

export const EASE = [0.22, 1, 0.36, 1] as const;
