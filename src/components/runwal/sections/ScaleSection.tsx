import React from 'react';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

export default function ScaleSection() {
  return (
    <section
      className="rm-section"
      style={{
        background: C.ivory,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Monogram */}
      <div
        className="rm-monogram"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(180px, 30vw, 420px)',
          WebkitTextStroke: '1px rgba(184,149,76,0.05)',
        }}
      >
        M
      </div>

      {/* Decorative frames */}
      <div className="rm-gold-frame" style={{ top: '60px', left: '60px', width: '180px', height: '180px', opacity: 0.2 }} />
      <div className="rm-gold-frame" style={{ bottom: '60px', right: '60px', width: '180px', height: '180px', opacity: 0.2 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
        <Reveal>
          <Eyebrow label="The Scale" />
        </Reveal>

        <Reveal delay={0.1}>
          <DisplayHeading style={{ marginBottom: '36px' }}>
            7500+ sq. ft. of sea, city<br />and endless skies.<br />Uniquely yours.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy style={{ maxWidth: '460px', margin: '0 auto 52px' }}>
            Expansive private living designed for collectors of space, light, and legacy.
          </BodyCopy>
        </Reveal>

        {/* Dimensions grid */}
        <Reveal delay={0.3}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '32px',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {[
              { num: '7500+', label: 'Sq. Ft.' },
              { num: '4-5', label: 'Bedrooms' },
              { num: '1', label: 'Per Floor' },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="rm-font-display"
                  style={{
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    fontWeight: 300,
                    color: C.gold,
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            style={{
              marginTop: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <a href="#enquire" className="rm-btn">
              Request Floor Plans
            </a>
            <span style={{ display: 'block', width: '1px', height: '20px', background: C.taupe, opacity: 0.3 }} />
            <a
              href="#enquire"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: C.taupe,
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.taupe)}
            >
              Schedule a Private Tour
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
