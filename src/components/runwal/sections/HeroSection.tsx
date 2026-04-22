import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';

export default function HeroSection({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const baseDelay = ready ? 0.1 : 99; // only animate after preloader

  return (
    <section
      id="hero"
      ref={ref}
      className="rm-section"
      style={{ background: C.dark, display: 'flex', alignItems: 'stretch' }}
    >
      {/* Parallax background image */}
      <motion.div style={{ position: 'absolute', inset: 0, y: imgY, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&auto=format&fit=crop"
          alt="Mumbai skyline aerial view"
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
        />
        {/* Cinematic overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(108deg, rgba(28,24,20,0.88) 0%, rgba(28,24,20,0.45) 48%, rgba(28,24,20,0.65) 100%)',
          }}
        />
      </motion.div>

      {/* Ambient gold orb */}
      <div
        className="rm-orb"
        style={{
          width: '700px',
          height: '700px',
          background: `radial-gradient(circle, rgba(184,149,76,0.07) 0%, transparent 68%)`,
          top: '5%',
          right: '5%',
          zIndex: 1,
        }}
      />

      {/* Monogram watermark */}
      <div
        className="rm-monogram"
        style={{ right: '-60px', bottom: '-80px', zIndex: 1, opacity: 0.7 }}
      >
        RM
      </div>

      {/* Decorative gold frames */}
      <div className="rm-gold-frame" style={{ top: '88px', right: '72px', width: '220px', height: '220px', zIndex: 1 }} />
      <div className="rm-gold-frame" style={{ top: '100px', right: '84px', width: '196px', height: '196px', opacity: 0.14, zIndex: 1 }} />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          y: textY,
          opacity,
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 96px) clamp(60px, 8vw, 100px)',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: baseDelay + 0.1, ease }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}
          >
            <span style={{ display: 'block', width: '36px', height: '1px', background: C.gold }} />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.58rem',
                letterSpacing: '0.32em',
                color: C.gold,
                textTransform: 'uppercase',
              }}
            >
              Next to the Governor's Estate · Malabar Hill
            </span>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, delay: baseDelay + 0.25, ease }}
          >
            <div
              className="rm-font-display"
              style={{
                fontSize: 'clamp(12px, 1.4vw, 17px)',
                fontWeight: 400,
                color: C.taupe,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}
            >
              Runwal
            </div>
            <div
              className="rm-font-serif"
              style={{
                fontSize: 'clamp(60px, 9vw, 130px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: C.ivory,
                lineHeight: 0.88,
                letterSpacing: '-0.01em',
              }}
            >
              Malabar
            </div>
          </motion.div>

          {/* Gold rule */}
          <motion.div
            initial={{ width: 0 }}
            animate={ready ? { width: '72px' } : {}}
            transition={{ duration: 1.3, delay: baseDelay + 0.55, ease }}
            style={{ height: '1px', background: C.gold, margin: '36px 0' }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: baseDelay + 0.7, ease }}
            className="rm-font-display"
            style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(243,240,235,0.82)',
              lineHeight: 1.6,
              marginBottom: '14px',
              maxWidth: '540px',
            }}
          >
            A rare collection of 11 private sky mansions rising above Mumbai's most powerful address.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: baseDelay + 0.85, ease }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 300,
              color: C.taupe,
              letterSpacing: '0.1em',
              lineHeight: 1.85,
              marginBottom: '52px',
              maxWidth: '440px',
            }}
          >
            Where legacy, altitude, horizon, and privacy converge.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: baseDelay + 1.0, ease }}
            style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#enquire" className="rm-btn-dark">
              Book a Private Preview
            </a>
            <a href="#enquire" className="rm-btn-ghost">
              Request the Brochure
              <span
                style={{
                  display: 'inline-block',
                  width: '22px',
                  height: '1px',
                  background: 'currentColor',
                  verticalAlign: 'middle',
                }}
              />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: baseDelay + 1.4 }}
          style={{
            position: 'absolute',
            bottom: 'clamp(36px, 5vw, 72px)',
            right: 'clamp(24px, 6vw, 96px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.52rem',
              letterSpacing: '0.3em',
              color: C.taupe,
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '44px',
              background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
              transformOrigin: 'top',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
