// HERO — Layered editorial cover. Floating typography. Non-centered composition.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const d = ready ? 0.1 : 99;

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh', minHeight: 700,
        background: C.ink,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* ── Background image layer ── */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY }}>
        <img
          src="https://static.wixstatic.com/media/cef78c_4a2273bbc2ef48d7a4ee0baf4a127ce9~mv2.png"
          alt=""
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }}
        />
        {/* Deep cinematic grade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.35) 50%, rgba(14,12,10,0.6) 100%)',
        }} />
        {/* Warm horizon glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 40% at 65% 60%, rgba(184,149,76,0.06) 0%, transparent 65%)',
        }} />
      </motion.div>

      {/* ── Oversized background number ── */}
      <div style={{
        position: 'absolute', right: '-2vw', bottom: '-4vh',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(200px, 32vw, 480px)',
        fontWeight: 300, lineHeight: 0.85,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(184,149,76,0.06)',
        userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.05em',
      }}>
        11
      </div>

      {/* ── Thin vertical gold line — left accent ── */}
      <motion.div
        initial={{ height: 0 }}
        animate={ready ? { height: '40vh' } : {}}
        transition={{ duration: 1.6, delay: d + 0.4, ease: EASE }}
        style={{
          position: 'absolute', left: 'clamp(20px,4vw,60px)', top: '20vh',
          width: 1, background: `linear-gradient(to bottom, transparent, ${C.gold}, transparent)`,
        }}
      />

      {/* ── Floating content ── */}
      <motion.div style={{ position: 'absolute', inset: 0, y: textY, opacity: fade }}>

        {/* Top-left: location tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: d + 0.2, ease: EASE }}
          style={{
            position: 'absolute',
            top: 'clamp(100px,14vh,140px)',
            left: 'clamp(40px,6vw,96px)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <span style={{ display: 'block', width: 28, height: 1, background: C.gold }} />
          <span className="eyebrow" style={{ color: C.gold }}>
            Next to the Governor's Estate · Malabar Hill
          </span>
        </motion.div>

        {/* Main headline — offset left, large */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(120px,22vh,200px)',
          left: 'clamp(40px,6vw,96px)',
          maxWidth: '72vw',
        }}>
          {/* RUNWAL — small caps above */}
          <div style={{ overflow: 'hidden', marginBottom: 4 }}>
            <motion.div
              initial={{ y: '100%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: d + 0.35, ease: EASE }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: 'clamp(10px,1vw,13px)',
                letterSpacing: '0.36em', textTransform: 'uppercase',
                color: 'rgba(191,179,163,0.55)',
              }}
            >
              RUNWAL
            </motion.div>
          </div>

          {/* MALABAR — giant italic */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 1.2, delay: d + 0.5, ease: EASE }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(72px,12vw,180px)',
                fontWeight: 300, fontStyle: 'italic',
                color: C.ivory, lineHeight: 0.88,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Malabar
            </motion.h1>
          </div>

          {/* Tagline — offset right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: d + 0.9, ease: EASE }}
            style={{
              marginTop: 28,
              paddingLeft: 'clamp(20px,4vw,60px)',
              borderLeft: `1px solid rgba(184,149,76,0.35)`,
              maxWidth: 420,
            }}
          >
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(15px,1.6vw,20px)',
              fontWeight: 300, fontStyle: 'italic',
              color: 'rgba(243,240,235,0.72)',
              lineHeight: 1.65, marginBottom: 8,
            }}>
              A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.68rem',
              fontWeight: 300, color: C.taupe,
              letterSpacing: '0.08em', lineHeight: 1.8,
            }}>
              Where legacy, altitude, horizon, and privacy converge.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: d + 1.15, ease: EASE }}
            style={{ marginTop: 44, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}
          >
            <a href="#enquire" className="btn-gold">Book a Private Preview</a>
            <a href="#enquire" className="btn-ghost-light">
              Request Brochure
              <span style={{ display: 'block', width: 20, height: 1, background: 'currentColor' }} />
            </a>
          </motion.div>
        </div>

        {/* Right side — floating vertical label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: d + 1.4 }}
          className="desk-only"
          style={{
            position: 'absolute',
            right: 'clamp(20px,3vw,48px)',
            top: '50%', transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
            letterSpacing: '0.3em', color: 'rgba(243,240,235,0.2)',
            textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}
        >
          Malabar Hill · Mumbai · 690 ft above the city
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: d + 1.6 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(28px,4vh,52px)',
            left: 'clamp(40px,6vw,96px)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 32, height: 1, background: C.gold }}
          />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
            letterSpacing: '0.28em', color: 'rgba(243,240,235,0.3)',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
