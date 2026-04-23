import React from 'react';

// ── Premium Typography System ───────────────────────────────────────────────
// Display Font : Playfair Display — high-contrast luxury serif for headings
// Body Font    : DM Sans          — clean, modern sans-serif for everything else
// No other fonts. No Cormorant. No Inter. No mixing.
export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { font-size: 16px; scroll-behavior: smooth; }

      body {
        background: #F7F4EF;
        color: #2B2725;
        font-family: 'DM Sans', sans-serif;
        font-weight: 300;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* ── Global heading defaults ── */
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        line-height: 1.15;
        letter-spacing: -0.01em;
      }

      /* ── Global paragraph defaults ── */
      p, li, span, label, input, textarea, select, button, a {
        font-family: 'DM Sans', sans-serif;
      }

      /* ── Scrollbar ── */
      ::-webkit-scrollbar { width: 2px; }
      ::-webkit-scrollbar-track { background: #F7F4EF; }
      ::-webkit-scrollbar-thumb { background: #D8CEC0; }

      /* ── Luxury inputs ── */
      .lux-input {
        background: transparent;
        border: none;
        border-bottom: 1px solid #D8CEC0;
        padding: 16px 0 12px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        color: #2B2725;
        width: 100%;
        outline: none;
        letter-spacing: 0.02em;
        transition: border-color 0.4s ease;
        border-radius: 0;
        -webkit-appearance: none;
      }
      .lux-input::placeholder { color: #A89F94; font-size: 0.8rem; letter-spacing: 0.06em; }
      .lux-input:focus { border-bottom-color: #C6A45A; }

      .lux-textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid #D8CEC0;
        padding: 16px 0 12px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        color: #2B2725;
        width: 100%;
        outline: none;
        letter-spacing: 0.02em;
        resize: none;
        transition: border-color 0.4s ease;
        border-radius: 0;
      }
      .lux-textarea::placeholder { color: #A89F94; font-size: 0.8rem; letter-spacing: 0.06em; }
      .lux-textarea:focus { border-bottom-color: #C6A45A; }

      /* ── Buttons ── */
      .btn-gold {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 13px 32px;
        border: 1px solid #C6A45A;
        background: transparent;
        color: #2B2725;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.4s ease, color 0.4s ease;
        text-decoration: none;
        white-space: nowrap;
      }
      .btn-gold:hover { background: #C6A45A; color: #F7F4EF; }

      .btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0;
        background: transparent;
        color: #A89F94;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.68rem;
        font-weight: 400;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.3s ease;
        border: none;
        text-decoration: none;
      }
      .btn-ghost:hover { color: #2B2725; }

      /* ── Eyebrow label ── */
      .eyebrow {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.62rem;
        font-weight: 500;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: #C6A45A;
      }

      /* ── Monogram watermark — kept as display font for decorative use only ── */
      .monogram {
        position: absolute;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        color: transparent;
        -webkit-text-stroke: 1px rgba(198,164,90,0.08);
        pointer-events: none;
        user-select: none;
        line-height: 1;
        letter-spacing: -0.02em;
      }

      /* ── Responsive ── */
      @media (max-width: 860px) {
        .desk-only { display: none !important; }
        .mob-show  { display: block !important; }
      }
      @media (min-width: 861px) {
        .mob-show  { display: none !important; }
      }
    `}</style>
  );
}
