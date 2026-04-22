// HERO — Cinematic editorial. Apple-level composition.
// Three depth layers: background image, mid atmospheric, foreground typography.
// Text is NOT stacked — each word/phrase lives at its own position in the frame.
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax layers — each moves at a different rate
  const bgY       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const midY      = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const fgY       = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const globalFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const d = ready ? 0 : 99; // delay gate — only animate after preloader

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh',
        minHeight: 700,
        background: C.ink,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ═══════════════════════════════════════════
          LAYER 1 — Background: the building image
          Slowest parallax. Full bleed.
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: bgY,
          zIndex: 0,
        }}
      >
        <img
          src="https://static.wixstatic.com/media/cef78c_4a2273bbc2ef48d7a4ee0baf4a127ce9~mv2.png"
          alt=""
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />

        {/* Cinematic grade — heavy left, light center-right to reveal building */}
        <div style={{
          position: 'absolute', inset: 0,
          background: [
            'linear-gradient(100deg,',
            '  rgba(14,12,10,0.96) 0%,',
            '  rgba(14,12,10,0.72) 30%,',
            '  rgba(14,12,10,0.28) 58%,',
            '  rgba(14,12,10,0.52) 100%)',
          ].join(''),
        }} />

        {/* Bottom vignette — grounds the text */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(14,12,10,0.88) 0%, transparent 38%)',
        }} />

        {/* Top vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(14,12,10,0.55) 0%, transparent 22%)',
        }} />
      </motion.div>


      {/* ═══════════════════════════════════════════
          LAYER 2 — Mid: atmospheric gold haze
          Floats between image and text. Subtle.
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: midY,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* Warm horizon glow — sits at the building's skyline */}
        <div style={{
          position: 'absolute',
          bottom: '18%', left: '28%',
          width: '55%', height: '35%',
          background: `radial-gradient(ellipse, rgba(184,149,76,0.09) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }} />

        {/* Faint gold vertical accent — right of building */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={ready ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 2.2, delay: d + 1.0, ease: EASE }}
          style={{
            position: 'absolute',
            right: '28%', top: '12%',
            width: 1, height: '55%',
            background: `linear-gradient(to bottom, transparent, rgba(184,149,76,0.22), transparent)`,
            transformOrigin: 'top',
          }}
        />
      </motion.div>


      {/* ═══════════════════════════════════════════
          LAYER 3 — Foreground: all typography
          Each text element is independently positioned.
          Nothing is in a flex column or centered block.
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: fgY,
          opacity: globalFade,
          zIndex: 2,
        }}
      >

        {/* ── "RUNWAL" — top left, ultra small caps, barely visible ── */}
        <div style={{ overflow: 'hidden', position: 'absolute', top: 'clamp(88px,12vh,120px)', left: 'clamp(36px,5vw,80px)' }}>
          <motion.div
            initial={{ y: '110%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: d + 0.15, ease: EASE }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(9px, 0.75vw, 11px)',
              fontWeight: 400,
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: 'rgba(191,179,163,0.45)',
            }}
          >
            RUNWAL
          </motion.div>
        </div>

        {/* ── Thin gold horizontal rule — left, below RUNWAL ── */}
        <motion.div
          initial={{ width: 0 }}
          animate={ready ? { width: 'clamp(28px,3vw,44px)' } : {}}
          transition={{ duration: 1.2, delay: d + 0.4, ease: EASE }}
          style={{
            position: 'absolute',
            top: 'clamp(108px,14.5vh,142px)',
            left: 'clamp(36px,5vw,80px)',
            height: 1,
            background: C.gold,
            opacity: 0.6,
          }}
        />

        {/* ── "Malabar" — the dominant word. Bottom-left. Massive. ── */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(130px,20vh,190px)',
          left: 'clamp(28px,4vw,64px)',
          overflow: 'hidden',
        }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 1.3, delay: d + 0.3, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(80px, 13.5vw, 200px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.ivory,
              lineHeight: 0.86,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            Malabar
          </motion.h1>
        </div>

        {/* ── Location line — floats mid-left, offset from headline ── */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: d + 0.7, ease: EASE }}
          style={{
            position: 'absolute',
            bottom: 'clamp(100px,15vh,148px)',
            left: 'clamp(36px,5vw,80px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{
            display: 'block', width: 22, height: 1,
            background: C.gold, opacity: 0.65, flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(8px, 0.65vw, 10px)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(191,179,163,0.55)',
          }}>
            Next to the Governor's Estate · Malabar Hill
          </span>
        </motion.div>

        {/* ── Tagline — right side, mid-height. Isolated. ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: d + 0.85, ease: EASE }}
          style={{
            position: 'absolute',
            right: 'clamp(32px,5vw,80px)',
            top: '50%',
            transform: 'translateY(-50%)',
            maxWidth: 'clamp(200px, 24vw, 320px)',
            borderLeft: `1px solid rgba(184,149,76,0.28)`,
            paddingLeft: 20,
          }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(13px, 1.3vw, 18px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(243,240,235,0.65)',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}>
            A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
          </p>
        </motion.div>

        {/* ── "11" ghost number — top right, structural ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: d + 0.6 }}
          style={{
            position: 'absolute',
            top: 'clamp(60px,8vh,100px)',
            right: 'clamp(28px,4vw,64px)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(100px, 16vw, 240px)',
            fontWeight: 300,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(184,149,76,0.07)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          11
        </motion.div>

        {/* ── CTAs — bottom right. Text-based, not buttons. ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: d + 1.1 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(36px,5vh,60px)',
            right: 'clamp(32px,5vw,80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 16,
          }}
        >
          {/* Primary CTA — thin gold border, minimal */}
          <a
            href="#enquire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(8px, 0.65vw, 10px)',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: C.ivory,
              textDecoration: 'none',
              padding: '11px 22px',
              border: `1px solid rgba(184,149,76,0.5)`,
              transition: 'border-color 0.4s ease, background 0.4s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = C.gold;
              (e.currentTarget as HTMLElement).style.background = 'rgba(184,149,76,0.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,149,76,0.5)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            Book Private Preview
          </a>

          {/* Secondary CTA — pure text, line-based */}
          <a
            href="#enquire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(8px, 0.6vw, 10px)',
              fontWeight: 300,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'rgba(191,179,163,0.4)',
              textDecoration: 'none',
              transition: 'color 0.35s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(191,179,163,0.8)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(191,179,163,0.4)')}
          >
            Request Brochure
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'block', width: 18, height: 1, background: 'currentColor' }}
            />
          </a>
        </motion.div>

        {/* ── Scroll indicator — bottom left, vertical ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.5 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(36px,5vh,60px)',
            left: 'clamp(36px,5vw,80px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 28, height: 1,
              background: C.gold,
              transformOrigin: 'left',
              opacity: 0.5,
            }}
          />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(7px, 0.55vw, 9px)',
            letterSpacing: '0.32em',
            color: 'rgba(243,240,235,0.22)',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>

        {/* ── Vertical label — far right edge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: d + 1.3 }}
          style={{
            position: 'absolute',
            right: 18,
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(6px, 0.5vw, 8px)',
            letterSpacing: '0.3em',
            color: 'rgba(243,240,235,0.14)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Malabar Hill · Mumbai · 690 ft above the city
        </motion.div>

      </motion.div>
    </section>
  );
}
