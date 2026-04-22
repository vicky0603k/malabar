import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal } from '../shared';

export default function RaritySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      className="rm-section"
      style={{
        background: C.charcoal,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(80px, 14vw, 180px) clamp(24px, 7vw, 112px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background */}
      <motion.div style={{ position: 'absolute', inset: 0, y: imgY, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&auto=format&fit=crop"
          alt="Mumbai skyline at dusk"
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 60%', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(58,53,47,0.88)',
          }}
        />
      </motion.div>

      {/* Ambient orb */}
      <div
        className="rm-orb"
        style={{
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, rgba(184,149,76,0.07) 0%, transparent 70%)`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />

      {/* Decorative frames */}
      <div className="rm-gold-frame" style={{ top: '60px', left: '60px', width: '120px', height: '120px', opacity: 0.2, zIndex: 1 }} />
      <div className="rm-gold-frame" style={{ bottom: '60px', right: '60px', width: '120px', height: '120px', opacity: 0.2, zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px' }}>
        {/* Gold rule */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <span style={{ display: 'block', width: '48px', height: '1px', background: C.gold, opacity: 0.7 }} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="rm-font-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.ivory,
              lineHeight: 1.15,
              marginBottom: '40px',
              letterSpacing: '-0.01em',
            }}
          >
            You, 10 others like you,<br />and absolutely no one else.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(243,240,235,0.65)',
              lineHeight: 1.95,
              letterSpacing: '0.04em',
              marginBottom: '14px',
              maxWidth: '520px',
              margin: '0 auto 14px',
            }}
          >
            Runwal Malabar is not simply a residence.
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 300,
              color: 'rgba(243,240,235,0.65)',
              lineHeight: 1.95,
              letterSpacing: '0.04em',
              maxWidth: '520px',
              margin: '0 auto 56px',
            }}
          >
            It is a private chapter in Mumbai's skyline — written for the very few.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#enquire" className="rm-btn-dark">
              Own Your Chapter
            </a>
          </div>
        </Reveal>

        {/* Bottom rule */}
        <Reveal delay={0.5}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <span style={{ display: 'block', width: '48px', height: '1px', background: C.gold, opacity: 0.3 }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
