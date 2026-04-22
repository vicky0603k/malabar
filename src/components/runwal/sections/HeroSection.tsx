// HERO — Bright luxury editorial. Soft daylight. Premium architecture campaign feel.
// Light ivory atmosphere. Balanced composition. Art-directed typography.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fgY    = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const fade   = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const d = ready ? 0 : 99;

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh',
        minHeight: 700,
        background: C.ivory,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ═══════════════════════════════════════════
          BACKGROUND — Building image, centered composition
          Positioned center-right so tower reads clearly.
          Very light overlay — let the image breathe.
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: bgY,
          zIndex: 0,
        }}
      >
        <img
          src="https://static.wixstatic.com/media/cef78c_9dee5e376c7d4888a0b1dd9174b9e7ef~mv2.jpg"
          alt="Runwal Malabar"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: '60% top',
            display: 'block',
          }}
        />

        {/* Soft ivory wash — left side only, so text reads cleanly */}
        <div style={{
          position: 'absolute', inset: 0,
          background: [
            'linear-gradient(95deg,',
            `  ${C.ivory} 0%,`,
            '  rgba(243,240,235,0.92) 18%,',
            '  rgba(243,240,235,0.55) 38%,',
            '  rgba(243,240,235,0.08) 62%,',
            '  rgba(243,240,235,0.0) 100%)',
          ].join(''),
        }} />

        {/* Soft bottom fade — grounds the section */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, rgba(243,240,235,0.75) 0%, transparent 30%)`,
        }} />

        {/* Very soft top fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, rgba(243,240,235,0.45) 0%, transparent 18%)`,
        }} />
      </motion.div>


      {/* ═══════════════════════════════════════════
          ATMOSPHERIC LAYER — Warm soft glow
          Adds depth without darkness.
      ═══════════════════════════════════════════ */}
      <div
        style={{
          position: 'absolute', inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* Warm gold ambient — horizon area */}
        <div style={{
          position: 'absolute',
          bottom: '20%', left: '25%',
          width: '50%', height: '30%',
          background: `radial-gradient(ellipse, rgba(184,149,76,0.06) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }} />
      </div>


      {/* ═══════════════════════════════════════════
          FOREGROUND — All typography
          Left column: brand + headline + tagline
          Right column: refined copy + CTAs
          Nothing centered. Everything intentional.
      ═══════════════════════════════════════════ */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: fgY,
          opacity: fade,
          zIndex: 2,
        }}
      >

        {/* ── Top-left: location provenance ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.2, ease: EASE }}
          style={{
            position: 'absolute',
            top: 'clamp(96px,13vh,128px)',
            left: 'clamp(40px,5.5vw,88px)',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <span style={{
            display: 'block', width: 28, height: 1,
            background: C.gold, opacity: 0.7, flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(8px, 0.62vw, 10px)',
            fontWeight: 400,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: C.taupe,
          }}>
            Next to the Governor's Estate · Malabar Hill
          </span>
        </motion.div>


        {/* ── Main brand block — left, vertically centered ── */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(40px,5.5vw,88px)',
          transform: 'translateY(-54%)',
          maxWidth: 'clamp(280px, 38vw, 520px)',
        }}>

          {/* RUNWAL — small, refined */}
          <div style={{ overflow: 'hidden', marginBottom: 6 }}>
            <motion.div
              initial={{ y: '110%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 0.9, delay: d + 0.25, ease: EASE }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(10px, 0.8vw, 12px)',
                fontWeight: 400,
                letterSpacing: '0.44em',
                textTransform: 'uppercase',
                color: C.taupe,
              }}
            >
              RUNWAL
            </motion.div>
          </div>

          {/* Malabar — large italic serif, charcoal not white */}
          <div style={{ overflow: 'hidden', marginBottom: 0 }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 1.2, delay: d + 0.38, ease: EASE }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(56px, 8.5vw, 128px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: C.charcoal,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Malabar
            </motion.h1>
          </div>

          {/* Gold rule — breathing space */}
          <motion.div
            initial={{ width: 0 }}
            animate={ready ? { width: 'clamp(36px, 3.5vw, 52px)' } : {}}
            transition={{ duration: 1.1, delay: d + 0.65, ease: EASE }}
            style={{
              height: 1,
              background: C.gold,
              margin: 'clamp(18px,2.2vw,28px) 0',
              opacity: 0.75,
            }}
          />

          {/* Tagline — body weight, charcoal, generous line height */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: d + 0.75, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(14px, 1.4vw, 19px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(58,53,47,0.72)',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              maxWidth: 'clamp(240px, 30vw, 400px)',
              marginBottom: 0,
            }}
          >
            A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
          </motion.p>
        </div>


        {/* ── Right column — refined copy + CTAs ── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: d + 0.9, ease: EASE }}
          style={{
            position: 'absolute',
            right: 'clamp(36px,5.5vw,88px)',
            bottom: 'clamp(80px,13vh,140px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 'clamp(20px,2.5vw,32px)',
          }}
        >
          {/* Sub-copy */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(9px, 0.68vw, 11px)',
            fontWeight: 300,
            letterSpacing: '0.14em',
            color: C.taupe,
            lineHeight: 1.9,
            textAlign: 'right',
            maxWidth: 'clamp(160px, 18vw, 240px)',
          }}>
            Where legacy, altitude,<br />horizon, and privacy converge.
          </p>

          {/* Thin gold separator */}
          <div style={{
            width: 'clamp(28px, 2.5vw, 40px)',
            height: 1,
            background: C.gold,
            opacity: 0.4,
            alignSelf: 'flex-end',
          }} />

          {/* CTAs — stacked, text-forward */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>

            {/* Primary — thin border, premium */}
            <a
              href="#enquire"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(8px, 0.62vw, 10px)',
                fontWeight: 400,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: C.charcoal,
                textDecoration: 'none',
                padding: '12px 24px',
                border: `1px solid rgba(184,149,76,0.55)`,
                background: 'rgba(243,240,235,0.6)',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.4s ease, background 0.4s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.gold;
                el.style.background = 'rgba(184,149,76,0.08)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(184,149,76,0.55)';
                el.style.background = 'rgba(243,240,235,0.6)';
              }}
            >
              Book Private Preview
            </a>

            {/* Secondary — text only, animated line */}
            <a
              href="#enquire"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(8px, 0.58vw, 10px)',
                fontWeight: 300,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: C.taupe,
                textDecoration: 'none',
                transition: 'color 0.35s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = C.charcoal)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = C.taupe)}
            >
              Request Brochure
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'block', width: 18, height: 1, background: 'currentColor' }}
              />
            </a>
          </div>
        </motion.div>


        {/* ── Ghost "11" — top right, structural, very faint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 2.4, delay: d + 0.5 }}
          style={{
            position: 'absolute',
            top: 'clamp(48px,7vh,88px)',
            right: 'clamp(36px,5.5vw,88px)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(80px, 12vw, 180px)',
            fontWeight: 300,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: `1px rgba(184,149,76,0.12)`,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          11
        </motion.div>


        {/* ── Vertical right-edge label ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: d + 1.3 }}
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(6px, 0.48vw, 8px)',
            letterSpacing: '0.3em',
            color: 'rgba(58,53,47,0.18)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Malabar Hill · Mumbai · 690 ft above the city
        </motion.div>


        {/* ── Scroll cue — bottom left ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.5 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(28px,4vh,48px)',
            left: 'clamp(40px,5.5vw,88px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.7, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 24, height: 1,
              background: C.gold,
              transformOrigin: 'left',
            }}
          />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(7px, 0.52vw, 9px)',
            letterSpacing: '0.3em',
            color: 'rgba(58,53,47,0.3)',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
