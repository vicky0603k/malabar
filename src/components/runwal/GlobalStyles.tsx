import React from 'react';
import { Colors as C } from './types';

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }

      body {
        background: ${C.ivory};
        color: ${C.charcoal};
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        overflow-x: hidden;
      }

      .rm-font-display { font-family: 'Cormorant Garamond', serif; }
      .rm-font-serif   { font-family: 'Cormorant', serif; }
      .rm-font-sans    { font-family: 'Inter', sans-serif; }

      /* Section full-page */
      .rm-section {
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      /* Monogram watermark */
      .rm-monogram {
        position: absolute;
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(180px, 28vw, 380px);
        font-weight: 300;
        color: transparent;
        -webkit-text-stroke: 1px rgba(184,149,76,0.06);
        pointer-events: none;
        user-select: none;
        line-height: 1;
        letter-spacing: -0.04em;
        z-index: 0;
      }

      /* Gold frame */
      .rm-gold-frame {
        position: absolute;
        border: 1px solid rgba(184,149,76,0.28);
        pointer-events: none;
      }

      /* Sketch corners */
      .rm-sketch {
        position: relative;
      }
      .rm-sketch::before,
      .rm-sketch::after {
        content: '';
        position: absolute;
        border-color: rgba(184,149,76,0.35);
        border-style: solid;
        z-index: 3;
      }
      .rm-sketch::before {
        top: -10px; left: -10px;
        width: 44px; height: 44px;
        border-width: 1px 0 0 1px;
      }
      .rm-sketch::after {
        bottom: -10px; right: -10px;
        width: 44px; height: 44px;
        border-width: 0 1px 1px 0;
      }

      /* Luxury button */
      .rm-btn {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 15px 38px;
        border: 1px solid ${C.gold};
        background: transparent;
        color: ${C.charcoal};
        font-family: 'Inter', sans-serif;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.4s ease, color 0.4s ease;
        text-decoration: none;
        white-space: nowrap;
      }
      .rm-btn:hover { background: ${C.gold}; color: ${C.ivory}; }

      .rm-btn-dark {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 15px 38px;
        border: 1px solid rgba(184,149,76,0.55);
        background: transparent;
        color: ${C.ivory};
        font-family: 'Inter', sans-serif;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background 0.4s ease, border-color 0.4s ease;
        text-decoration: none;
        white-space: nowrap;
      }
      .rm-btn-dark:hover { background: rgba(184,149,76,0.12); border-color: ${C.gold}; }

      .rm-btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 15px 0;
        background: transparent;
        color: rgba(243,240,235,0.55);
        font-family: 'Inter', sans-serif;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.3s ease;
        border: none;
        text-decoration: none;
      }
      .rm-btn-ghost:hover { color: ${C.ivory}; }

      /* Luxury form inputs */
      .rm-input {
        background: transparent;
        border: none;
        border-bottom: 1px solid ${C.taupe};
        padding: 14px 0;
        font-family: 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        color: ${C.charcoal};
        width: 100%;
        outline: none;
        letter-spacing: 0.06em;
        transition: border-color 0.35s ease;
        border-radius: 0;
      }
      .rm-input::placeholder { color: ${C.taupe}; font-size: 0.75rem; letter-spacing: 0.1em; }
      .rm-input:focus { border-bottom-color: ${C.gold}; }

      .rm-textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid ${C.taupe};
        padding: 14px 0;
        font-family: 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        color: ${C.charcoal};
        width: 100%;
        outline: none;
        letter-spacing: 0.06em;
        resize: none;
        transition: border-color 0.35s ease;
        border-radius: 0;
      }
      .rm-textarea::placeholder { color: ${C.taupe}; font-size: 0.75rem; letter-spacing: 0.1em; }
      .rm-textarea:focus { border-bottom-color: ${C.gold}; }

      /* Thin gold divider */
      .rm-divider {
        display: block;
        width: 48px;
        height: 1px;
        background: ${C.gold};
      }

      /* Stat row */
      .rm-stat-row {
        display: flex;
        align-items: baseline;
        gap: 18px;
        padding: 22px 0;
        border-bottom: 1px solid rgba(191,179,163,0.25);
      }

      /* Metric number */
      .rm-metric {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 300;
        color: ${C.gold};
        line-height: 0.88;
        letter-spacing: -0.02em;
      }

      /* Ambient orb */
      @keyframes rm-ambient {
        0%,100% { transform: translate(0,0) scale(1); opacity: 0.35; }
        40%      { transform: translate(25px,-18px) scale(1.04); opacity: 0.55; }
        70%      { transform: translate(-18px,12px) scale(0.97); opacity: 0.28; }
      }
      .rm-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        animation: rm-ambient 14s ease-in-out infinite;
        pointer-events: none;
      }

      /* Scroll indicator */
      @keyframes rm-scroll-pulse {
        0%,100% { opacity: 1; transform: scaleY(1); }
        50%      { opacity: 0.3; transform: scaleY(0.6); }
      }

      /* Scrollbar */
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-track { background: ${C.ivory}; }
      ::-webkit-scrollbar-thumb { background: ${C.taupe}; }

      /* Responsive helpers */
      @media (max-width: 900px) {
        .rm-section { min-height: auto; }
        .rm-hide-mobile { display: none !important; }
        .rm-show-mobile { display: flex !important; }
      }
      @media (min-width: 901px) {
        .rm-show-mobile { display: none !important; }
      }
    `}</style>
  );
}
