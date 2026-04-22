import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, BodyCopy } from '../shared';

export default function PanoramaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const lightX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={ref}
      className="rm-section"
      style={{
        background: C.dark,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Full-bleed parallax image */}
      <motion.div
        style={{ position: 'absolute', inset: 0, y: imgY, zIndex: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
          alt="Panoramic sea horizon at sunrise"
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(28,24,20,0.82) 0%, rgba(28,24,20,0.3) 55%, rgba(28,24,20,0.55) 100%)',
          }}
        />
        {/* Subtle warm light sweep */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 60% 40% at 70% 50%, rgba(184,149,76,0.06) 0%, transparent 70%)`,
            x: lightX,
          }}
        />
      </motion.div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
          maxWidth: '680px',
        }}
      >
        <Reveal>
          <Eyebrow label="The Panorama" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="rm-font-display"
            style={{
              fontSize: 'clamp(28px, 4vw, 58px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.ivory,
              lineHeight: 1.2,
              marginBottom: '36px',
              maxWidth: '580px',
            }}
          >
            So rare, you'll be the first to greet the city's sunrise and last to bid farewell to its sunset.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy light style={{ maxWidth: '420px', marginBottom: '48px' }}>
            An iconic hillside address with panoramic sea and skyline views that stretch beyond the horizon — a living canvas that changes with every hour of the day.
          </BodyCopy>
        </Reveal>

        {/* Horizon stats */}
        <Reveal delay={0.3}>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { label: 'Arabian Sea', sub: 'Unobstructed' },
              { label: 'City Skyline', sub: '270° sweep' },
              { label: 'Sunrise & Sunset', sub: 'Both visible' },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: C.gold,
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    color: 'rgba(243,240,235,0.5)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right edge — vertical text */}
      <div
        className="rm-hide-mobile"
        style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.52rem',
          letterSpacing: '0.3em',
          color: 'rgba(243,240,235,0.25)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          zIndex: 1,
        }}
      >
        Arabian Sea · Malabar Hill · Mumbai
      </div>
    </section>
  );
}
