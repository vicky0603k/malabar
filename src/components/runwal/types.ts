// Shared types and constants for Runwal Malabar

export const Colors = {
  ivory: '#F3F0EB',
  beige: '#E6DED2',
  gold: '#B8954C',
  goldDeep: '#9D7B37',
  charcoal: '#3A352F',
  taupe: '#BFB3A3',
  mist: '#ECE8E2',
  dark: '#1C1814',
} as const;

export type ColorKey = keyof typeof Colors;
