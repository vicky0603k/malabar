import React from 'react';

// GT Ultra — local fonts only. No Google Fonts. No fallbacks to other typefaces.
export default function GlobalStyles() {
  return (
    <style>{`
      /* ══════════════════════════════════════════
         @font-face — GT Ultra Fine + Median
         All loaded from /fonts/ (public folder)
      ══════════════════════════════════════════ */

      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Thin-Trial.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Thin-Italic-Trial.otf') format('opentype');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Light-Trial.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Regular-Trial.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Regular-Italic-Trial.otf') format('opentype');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Fine';
        src: url('/fonts/GT-Ultra-Fine-Ultra-Trial.otf') format('opentype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'GT Ultra Median';
        src: url('/fonts/GT-Ultra-Median-Black-Italic-Trial.otf') format('opentype');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
      }

      /* ══════════════════════════════════════════
         Global Styles
      ══════════════════════════════════════════ */

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { font-size: 16px; scroll-behavior: smooth; }

      body {
        background: #F7F4EF;
        color: #2B2725;
        font-family: 'GT Ultra Fine', sans-serif;
        font-weight: 300;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
        font-family: 'GT Ultra Fine', sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        color: #2B2725;
        width: 100%;
        outline: none;
        letter-spacing: 0.05em;
        transition: border-color 0.4s ease;
        border-radius: 0;
        -webkit-appearance: none;
      }
      .lux-input::placeholder { color: #A89F94; font-size: 0.72rem; letter-spacing: 0.12em; }
      .lux-input:focus { border-bottom-color: #C6A45A; }

      .lux-textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid #D8CEC0;
        padding: 16px 0 12px;
        font-family: 'GT Ultra Fine', sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        color: #2B2725;
        width: 100%;
        outline: none;
        letter-spacing: 0.05em;
        resize: none;
        transition: border-color 0.4s ease;
        border-radius: 0;
      }
      .lux-textarea::placeholder { color: #A89F94; font-size: 0.72rem; letter-spacing: 0.12em; }
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
        font-family: 'GT Ultra Fine', sans-serif;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.24em;
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
        font-family: 'GT Ultra Fine', sans-serif;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.3s ease;
        border: none;
        text-decoration: none;
      }
      .btn-ghost:hover { color: #2B2725; }

      /* ── Eyebrow label ── */
      .eyebrow {
        font-family: 'GT Ultra Fine', sans-serif;
        font-size: 0.55rem;
        font-weight: 400;
        letter-spacing: 0.36em;
        text-transform: uppercase;
        color: #C6A45A;
      }

      /* ── Monogram watermark ── */
      .monogram {
        position: absolute;
        font-family: 'GT Ultra Fine', sans-serif;
        font-weight: 100;
        color: transparent;
        -webkit-text-stroke: 1px rgba(198,164,90,0.08);
        pointer-events: none;
        user-select: none;
        line-height: 1;
        letter-spacing: -0.04em;
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
