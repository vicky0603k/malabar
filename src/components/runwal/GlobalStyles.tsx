import React from 'react';
import { C } from './tokens';

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@200;300;400&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html { font-size: 16px; scroll-behavior: smooth; }

      body {
        background: #F7F4EF;
        color: #2B2725;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* ── Font utilities ── */
      .f-display { font-family: 'Cormorant Garamond', serif; }
      .f-serif   { font-family: 'Cormorant', serif; }
      .f-sans    { font-family: 'Inter', sans-serif; }

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
        font-family: 'Inter', sans-serif;
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
      .lux-input::placeholder {
        color: #A89F94;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        opacity: 0.8;
      }
      .lux-input:focus { border-bottom-color: #C6A45A; }

      .lux-textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid #D8CEC0;
        padding: 16px 0 12px;
        font-family: 'Inter', sans-serif;
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
      .lux-textarea::placeholder {
        color: #A89F94;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        opacity: 0.8;
      }
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
        font-family: 'Inter', sans-serif;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.45s ease, color 0.45s ease;
        text-decoration: none;
        white-space: nowrap;
      }
      .btn-gold:hover { background: #C6A45A; color: #F7F4EF; }

      .btn-ghost-light {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 13px 0;
        background: transparent;
        color: rgba(247,244,239,0.45);
        font-family: 'Inter', sans-serif;
        font-size: 0.6rem;
        font-weight: 300;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.35s ease;
        border: none;
        text-decoration: none;
      }
      .btn-ghost-light:hover { color: #F7F4EF; }

      .btn-ghost-dark {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 13px 0;
        background: transparent;
        color: #A89F94;
        font-family: 'Inter', sans-serif;
        font-size: 0.6rem;
        font-weight: 300;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.35s ease;
        border: none;
        text-decoration: none;
      }
      .btn-ghost-dark:hover { color: #2B2725; }

      /* ── Ambient orb ── */
      @keyframes orb-drift {
        0%,100% { transform: translate(0,0) scale(1); }
        33%      { transform: translate(20px,-15px) scale(1.03); }
        66%      { transform: translate(-15px,10px) scale(0.98); }
      }
      .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        animation: orb-drift 16s ease-in-out infinite;
        pointer-events: none;
      }

      /* ── Monogram watermark ── */
      .monogram {
        position: absolute;
        font-family: 'Cormorant Garamond', serif;
        font-weight: 300;
        color: transparent;
        -webkit-text-stroke: 1px rgba(198,164,90,0.07);
        pointer-events: none;
        user-select: none;
        line-height: 1;
        letter-spacing: -0.04em;
      }

      /* ── Eyebrow label ── */
      .eyebrow {
        font-family: 'Inter', sans-serif;
        font-size: 0.56rem;
        font-weight: 400;
        letter-spacing: 0.34em;
        text-transform: uppercase;
        color: #C6A45A;
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
