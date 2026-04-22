// HERO — Sharp, clean, premium. Building fully visible.
// No white wash. No overexposure. Balanced cinematic depth.
// Text reads clearly via a targeted soft shadow, not a blanket overlay.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY  = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const fgY  = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const d = ready ? 0 : 99;

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh',
        minHeight: 700,
        background: '#1a1a1a',          // fallback while image loads
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ── LAYER 1: Building image — full bleed, sharp, no wash ── */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY, zIndex: 0 }}>
        <img
          src="https://static.wixstatic.com/media/cef78c_9dee5e376c7d4888a0b1dd9174b9e7ef~mv2.jpg"
          alt="Runwal Malabar"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: '55% top',   // tower centered, not pushed left
            display: 'block',
          }}
        />

        {/* ── Overlay strategy: targeted, not blanket ──
            Left strip only — just enough for text legibility.
            Right side stays completely clean so building is sharp.
            No white. No cream. No fog. ── */}

        {/* Left text zone — soft dark scrim, narrow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(20,18,16,0.62) 0%, rgba(20,18,16,0.38) 28%, rgba(20,18,16,0.08) 52%, transparent 68%)',
        }} />

        {/* Bottom strip — grounds the scroll cue */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(20,18,16,0.45) 0%, transparent 22%)',
        }} />

        {/* Top strip — softens nav area */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,18,16,0.3) 0%, transparent 14%)',
        }} />
      </motion.div>


      {/* ── LAYER 2: Subtle warm depth — not a color wash ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 35% at 30% 55%, rgba(198,164,90,0.04) 0%, transparent 70%)',
      }} />


      {/* ── LAYER 3: Typography — all text on left, building free on right ── */}
      <motion.div style={{ position: 'absolute', inset: 0, y: fgY, opacity: fade, zIndex: 2 }}>

        {/* Location tag — top left */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.2, ease: EASE }}
          style={{
            position: 'absolute',
            top: 'clamp(96px,13vh,124px)',
            left: 'clamp(40px,5.5vw,88px)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <span style={{ display: 'block', width: 24, height: 1, background: C.gold, opacity: 0.75, flexShrink: 0 }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(8px,0.6vw,10px)',
            fontWeight: 400,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'rgba(247,244,239,0.7)',
          }}>
            Next to the Governor's Estate · Malabar Hill
          </span>
        </motion.div>

        {/* Brand block — left, vertically centered */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(40px,5.5vw,88px)',
          transform: 'translateY(-52%)',
          maxWidth: 'clamp(280px,36vw,500px)',
        }}>
          {/* RUNWAL */}
          <div style={{ overflow: 'hidden', marginBottom: 4 }}>
            <motion.div
              initial={{ y: '110%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 0.9, delay: d + 0.28, ease: EASE }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(9px,0.72vw,11px)',
                fontWeight: 400,
                letterSpacing: '0.44em',
                textTransform: 'uppercase',
                color: 'rgba(247,244,239,0.55)',
              }}
            >
              RUNWAL
            </motion.div>
          </div>

          {/* Malabar — large italic, ivory on dark scrim */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 1.2, delay: d + 0.4, ease: EASE }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(56px,8.5vw,128px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#F7F4EF',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Malabar
            </motion.h1>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ width: 0 }}
            animate={ready ? { width: 'clamp(32px,3vw,48px)' } : {}}
            transition={{ duration: 1.1, delay: d + 0.65, ease: EASE }}
            style={{ height: 1, background: C.gold, margin: 'clamp(16px,2vw,24px) 0', opacity: 0.7 }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: d + 0.75, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(13px,1.3vw,18px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(247,244,239,0.75)',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              maxWidth: 'clamp(220px,28vw,380px)',
            }}
          >
            A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
          </motion.p>
        </div>

        {/* Right column — sub-copy + CTAs, bottom right */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: d + 0.92, ease: EASE }}
          style={{
            position: 'absolute',
            right: 'clamp(36px,5.5vw,88px)',
            bottom: 'clamp(80px,13vh,140px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 'clamp(14px,1.8vw,22px)',
          }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(9px,0.65vw,11px)',
            fontWeight: 300,
            letterSpacing: '0.14em',
            color: 'rgba(247,244,239,0.5)',
            lineHeight: 1.9,
            textAlign: 'right',
            maxWidth: 'clamp(150px,16vw,220px)',
          }}>
            Where legacy, altitude,<br />horizon, and privacy converge.
          </p>

          <div style={{ width: 28, height: 1, background: 'rgba(198,164,90,0.45)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
            {/* Primary CTA */}
            <a
              href="#enquire"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(8px,0.6vw,10px)',
                fontWeight: 400,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#F7F4EF',
                textDecoration: 'none',
                padding: '12px 24px',
                border: '1px solid rgba(198,164,90,0.55)',
                background: 'rgba(20,18,16,0.25)',
                backdropFilter: 'blur(6px)',
                transition: 'border-color 0.4s ease, background 0.4s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.gold;
                el.style.background = 'rgba(198,164,90,0.15)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(198,164,90,0.55)';
                el.style.background = 'rgba(20,18,16,0.25)';
              }}
            >
              Book Private Preview
            </a>

            {/* Secondary CTA */}
            <a
              href="#enquire"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(8px,0.58vw,10px)',
                fontWeight: 300,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(247,244,239,0.45)',
                textDecoration: 'none',
                transition: 'color 0.35s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(247,244,239,0.85)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(247,244,239,0.45)')}
            >
              Request Brochure
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'block', width: 16, height: 1, background: 'currentColor' }}
              />
            </a>
          </div>
        </motion.div>

        {/* Ghost "11" — top right, very faint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 2.4, delay: d + 0.5 }}
          style={{
            position: 'absolute',
            top: 'clamp(48px,7vh,88px)',
            right: 'clamp(36px,5.5vw,88px)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(72px,11vw,160px)',
            fontWeight: 300,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(247,244,239,0.08)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          11
        </motion.div>

        {/* Vertical edge label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: d + 1.3 }}
          style={{
            position: 'absolute',
            right: 16, top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(6px,0.48vw,8px)',
            letterSpacing: '0.3em',
            color: 'rgba(247,244,239,0.18)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Malabar Hill · Mumbai · 690 ft above the city
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.5 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(28px,4vh,44px)',
            left: 'clamp(40px,5.5vw,88px)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.6, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 22, height: 1, background: C.gold, transformOrigin: 'left' }}
          />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(7px,0.5vw,9px)',
            letterSpacing: '0.3em',
            color: 'rgba(247,244,239,0.28)',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
