// HERO — Clean split composition.
// LEFT: building image, fully visible, no text on top.
// RIGHT: all text — headline, tagline, CTAs — vertically centered.
// Clear section boundary. No overflow into next section.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const fade  = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const d = ready ? 0 : 99;

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh',
        minHeight: 700,
        maxHeight: '100vh',          // hard cap — never bleeds into next section
        background: C.ivory,
        position: 'relative',
        overflow: 'hidden',          // clips everything inside
        display: 'flex',
      }}
    >

      {/* ══════════════════════════════════════
          LEFT PANEL — Building image, 58% width
          No text. No overlay. Fully visible.
      ══════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        width: '58%',
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://static.wixstatic.com/media/cef78c_9dee5e376c7d4888a0b1dd9174b9e7ef~mv2.jpg"
            alt="Runwal Malabar"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Right edge — very soft fade into ivory panel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 70%, rgba(247,244,239,0.85) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Bottom edge — soft fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(247,244,239,0.5) 0%, transparent 18%)',
          pointerEvents: 'none',
        }} />
      </div>


      {/* ══════════════════════════════════════
          RIGHT PANEL — All text, 42% width
          Ivory background. Vertically centered.
          No image. No overlap.
      ══════════════════════════════════════ */}
      <motion.div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(80px,10vh,120px) clamp(32px,4vw,72px) clamp(80px,10vh,120px) clamp(24px,3vw,48px)',
          position: 'relative',
          zIndex: 2,
          opacity: fade,
          y: textY,
        }}
      >
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.2, ease: EASE }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(28px,3.5vh,44px)' }}
        >
          <span style={{ display: 'block', width: 22, height: 1, background: C.gold, opacity: 0.65, flexShrink: 0 }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(9px,0.65vw,11px)',
            fontWeight: 400,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: C.taupe,
          }}>
            Next to the Governor's Estate · Malabar Hill
          </span>
        </motion.div>

        {/* RUNWAL */}
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <motion.div
            initial={{ y: '110%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 0.9, delay: d + 0.3, ease: EASE }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(10px,0.75vw,12px)',
              fontWeight: 500,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color: C.taupe,
            }}
          >
            RUNWAL
          </motion.div>
        </div>

        {/* Malabar — large, clean, on ivory */}
        <div style={{ overflow: 'hidden', marginBottom: 'clamp(20px,2.5vh,32px)' }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 1.2, delay: d + 0.42, ease: EASE }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(52px,7vw,108px)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: C.charcoal,
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Malabar
          </motion.h1>
        </div>

        {/* Gold rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={ready ? { width: 'clamp(28px,2.5vw,44px)' } : {}}
          transition={{ duration: 1.1, delay: d + 0.68, ease: EASE }}
          style={{
            height: 1,
            background: C.gold,
            marginBottom: 'clamp(20px,2.5vh,32px)',
            opacity: 0.6,
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: d + 0.78, ease: EASE }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(14px,1.2vw,18px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(43,39,37,0.7)',
            lineHeight: 1.7,
            letterSpacing: '0em',
            maxWidth: 'clamp(220px,26vw,360px)',
            marginBottom: 'clamp(10px,1.2vh,16px)',
          }}
        >
          A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
        </motion.p>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.88, ease: EASE }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(11px,0.75vw,13px)',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: C.taupe,
            lineHeight: 1.8,
            marginBottom: 'clamp(28px,3.5vh,44px)',
          }}
        >
          Where legacy, altitude, horizon, and privacy converge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.98, ease: EASE }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}
        >
          {/* Primary */}
          <a
            href="#enquire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(10px,0.68vw,11px)',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: C.charcoal,
              textDecoration: 'none',
              padding: '12px 28px',
              border: `1px solid rgba(198,164,90,0.55)`,
              background: 'transparent',
              transition: 'background 0.4s ease, border-color 0.4s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = C.gold;
              el.style.color = C.ivory;
              el.style.borderColor = C.gold;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = C.charcoal;
              el.style.borderColor = 'rgba(198,164,90,0.55)';
            }}
          >
            Book Private Preview
          </a>

          {/* Secondary */}
          <a
            href="#enquire"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(10px,0.65vw,11px)',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.taupe,
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.charcoal)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = C.taupe)}
          >
            Request Brochure
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'block', width: 16, height: 1, background: 'currentColor' }}
            />
          </a>
        </motion.div>

        {/* Scroll cue — bottom of right panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.4 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(24px,3.5vh,40px)',
            left: 'clamp(32px,4vw,72px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.6, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 20, height: 1, background: C.gold, transformOrigin: 'left' }}
          />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(8px,0.55vw,10px)',
            letterSpacing: '0.24em',
            color: 'rgba(43,39,37,0.28)',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>

      </motion.div>


      {/* ══════════════════════════════════════
          MOBILE — stack vertically
      ══════════════════════════════════════ */}
      <style>{`
        @media (max-width: 860px) {
          #hero { flex-direction: column !important; height: auto !important; max-height: none !important; min-height: 100vh !important; }
          #hero > div:first-child { width: 100% !important; height: 52vw !important; min-height: 260px !important; flex-shrink: 0 !important; }
          #hero > div:first-child > div:last-child { background: linear-gradient(to top, rgba(247,244,239,0.7) 0%, transparent 30%) !important; }
        }
      `}</style>

    </section>
  );
}
