import React from 'react';
import { motion } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, AnimatedNumber, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

const STATS = [
  { value: 4,  suffix: '+', label: 'Decades of Legacy' },
  { value: 80, suffix: '+', label: 'Landmark Developments' },
  { value: 11, suffix: '',  label: 'Curated Residences' },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      className="rm-section"
      style={{
        background: C.ivory,
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
      }}
    >
      {/* Monogram */}
      <div className="rm-monogram" style={{ left: '-100px', top: '50%', transform: 'translateY(-50%)' }}>
        R
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left — image */}
        <Reveal>
          <div
            className="rm-sketch"
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', maxWidth: '480px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop"
              alt="Runwal legacy architecture"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(58,53,47,0.28) 0%, transparent 55%)',
              }}
            />
            {/* Year badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '28px',
                left: '28px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
              }}
            >
              <span
                className="rm-font-display"
                style={{ fontSize: '48px', fontWeight: 300, color: C.ivory, lineHeight: 1, opacity: 0.9 }}
              >
                1978
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: C.taupe,
                  textTransform: 'uppercase',
                }}
              >
                Est.
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right — content */}
        <div>
          <Reveal>
            <Eyebrow label="The Runwal Legacy" />
          </Reveal>

          <Reveal delay={0.1}>
            <DisplayHeading style={{ marginBottom: '32px' }}>
              Built for generations<br />to come.
            </DisplayHeading>
          </Reveal>

          <Reveal delay={0.2}>
            <BodyCopy style={{ marginBottom: '14px', maxWidth: '420px' }}>
              For decades, Runwal Realty has shaped discerning lifestyles through residences of stature.
            </BodyCopy>
            <BodyCopy style={{ maxWidth: '420px' }}>
              At Runwal Malabar, that legacy rises to its most exclusive expression yet.
            </BodyCopy>
          </Reveal>

          {/* Stats */}
          <div style={{ marginTop: '52px' }}>
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.3 + i * 0.1}>
                <div className="rm-stat-row">
                  <span
                    className="rm-metric"
                    style={{ fontSize: 'clamp(38px, 4.5vw, 56px)' }}
                  >
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      color: C.taupe,
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
