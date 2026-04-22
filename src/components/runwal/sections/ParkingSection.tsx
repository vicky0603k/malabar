import React from 'react';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

const PARKING_FEATURES = [
  { label: 'Dedicated parking levels', desc: 'Reserved exclusively for residents' },
  { label: 'Service basement',         desc: 'Discreet service infrastructure' },
  { label: 'Mechanical parking',       desc: 'Precision-engineered systems' },
  { label: 'Private parking lift',     desc: 'Direct access to your residence' },
];

export default function ParkingSection() {
  return (
    <section
      className="rm-section"
      style={{
        background: C.dark,
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Monogram */}
      <div
        className="rm-monogram"
        style={{
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          WebkitTextStroke: '1px rgba(184,149,76,0.04)',
          fontSize: 'clamp(160px, 22vw, 320px)',
        }}
      >
        V
      </div>

      {/* Decorative gold frame */}
      <div className="rm-gold-frame" style={{ top: '60px', right: '80px', width: '240px', height: '300px', opacity: 0.12 }} />

      {/* Ambient orb */}
      <div
        className="rm-orb"
        style={{
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, rgba(184,149,76,0.05) 0%, transparent 70%)`,
          bottom: '10%',
          left: '30%',
        }}
      />

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
        {/* Left — headline */}
        <div>
          <Reveal>
            <Eyebrow label="The Vault" />
          </Reveal>

          <Reveal delay={0.1}>
            <DisplayHeading light style={{ marginBottom: '32px' }}>
              For the ones who reign,<br />a vault for your fleet.
            </DisplayHeading>
          </Reveal>

          <Reveal delay={0.2}>
            <BodyCopy light style={{ maxWidth: '380px', marginBottom: '48px' }}>
              Private parking infrastructure and curated service planning designed to protect convenience, discretion, and lifestyle.
            </BodyCopy>
          </Reveal>

          <Reveal delay={0.3}>
            <a href="#enquire" className="rm-btn-dark">
              Enquire for Details
            </a>
          </Reveal>
        </div>

        {/* Right — feature list */}
        <div>
          {PARKING_FEATURES.map((f, i) => (
            <Reveal key={f.label} delay={0.2 + i * 0.1}>
              <div
                style={{
                  padding: '24px 0',
                  borderBottom: i < PARKING_FEATURES.length - 1 ? '1px solid rgba(191,179,163,0.1)' : 'none',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Index */}
                <span
                  className="rm-font-display"
                  style={{
                    fontSize: '11px',
                    color: C.gold,
                    opacity: 0.6,
                    flexShrink: 0,
                    marginTop: '3px',
                    letterSpacing: '0.1em',
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 400,
                      color: 'rgba(243,240,235,0.85)',
                      letterSpacing: '0.06em',
                      marginBottom: '5px',
                    }}
                  >
                    {f.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 300,
                      color: 'rgba(191,179,163,0.6)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
