import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

export default function ArrivalSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="arrival"
      ref={ref}
      className="rm-section"
      style={{
        background: C.dark,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left — content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(60px, 8vw, 120px) clamp(32px, 5vw, 80px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Reveal>
          <Eyebrow label="The Arrival" />
        </Reveal>

        <Reveal delay={0.1}>
          <DisplayHeading light style={{ marginBottom: '32px' }}>
            Make a statement<br />before you step in.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy light style={{ marginBottom: '14px', maxWidth: '380px' }}>
            A grand porte-cochère arrival, sculpted landscape edges, and a double-height entrance designed to announce discretion, power, and refinement.
          </BodyCopy>
        </Reveal>

        {/* Arrival features */}
        <Reveal delay={0.35}>
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              'Grand porte-cochère',
              'Sculpted landscape arrival',
              'Double-height entrance',
              'Private drop-off forecourt',
            ].map((item, i) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '15px 0',
                  borderBottom: i < 3 ? `1px solid rgba(191,179,163,0.12)` : 'none',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '20px',
                    height: '1px',
                    background: C.gold,
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    color: 'rgba(243,240,235,0.7)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right — image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85&auto=format&fit=crop"
            alt="Grand arrival driveway"
            style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(28,24,20,0.2) 0%, rgba(28,24,20,0.5) 100%)',
            }}
          />
        </motion.div>

        {/* Vertical label */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            letterSpacing: '0.3em',
            color: 'rgba(243,240,235,0.3)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 2,
          }}
        >
          Arrival · Discretion · Power
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #arrival { grid-template-columns: 1fr !important; }
          #arrival > div:last-child { min-height: 60vw !important; }
        }
      `}</style>
    </section>
  );
}
