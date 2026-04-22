import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

export default function MansionsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="rm-section"
      style={{
        background: C.beige,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left — image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85&auto=format&fit=crop"
            alt="Private sky mansion interior"
            style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 60%, rgba(230,222,210,0.6) 100%)',
            }}
          />
        </motion.div>

        {/* Side label */}
        <div
          style={{
            position: 'absolute',
            left: '28px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            letterSpacing: '0.32em',
            color: 'rgba(243,240,235,0.5)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 2,
          }}
        >
          Private · Rare · Limited
        </div>
      </div>

      {/* Right — content */}
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
        {/* Monogram */}
        <div
          className="rm-monogram"
          style={{ right: '-60px', bottom: '-40px', fontSize: 'clamp(120px, 18vw, 240px)', opacity: 0.5 }}
        >
          11
        </div>

        <Reveal>
          <Eyebrow label="The Residences" />
        </Reveal>

        <Reveal delay={0.1}>
          <DisplayHeading style={{ marginBottom: '32px' }}>
            11 private sky mansions,<br />crafted to reign<br />over the city.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy style={{ marginBottom: '14px', maxWidth: '380px' }}>
            A singular vertical estate for a select few.
          </BodyCopy>
          <BodyCopy style={{ maxWidth: '380px' }}>
            No crowd. No compromise. No second version.
          </BodyCopy>
        </Reveal>

        {/* Attributes */}
        <Reveal delay={0.35}>
          <div style={{ marginTop: '52px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              'One residence per floor',
              'Private sky terrace',
              'Unobstructed sea views',
              'Bespoke interior finish',
            ].map((item, i) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 0',
                  borderBottom: i < 3 ? `1px solid rgba(191,179,163,0.25)` : 'none',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: C.gold,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    color: C.charcoal,
                    letterSpacing: '0.06em',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <a href="#enquire" className="rm-btn" style={{ marginTop: '48px', alignSelf: 'flex-start' }}>
            Enquire for Floor Plans
          </a>
        </Reveal>
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 900px) {
          #mansions-grid { grid-template-columns: 1fr !important; }
          #mansions-grid > div:first-child { min-height: 60vw !important; }
        }
      `}</style>
    </section>
  );
}
