// PARKING — Light stone/beige. No dark background.
// Clean, minimal, premium. Features as elegant typographic list on light surface.
import React from 'react';
import { C } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function ParkingSection() {
  return (
    <section style={{
      minHeight: '100vh',
      background: C.stone,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Ghost monogram — very faint on light bg */}
      <div className="monogram" style={{
        fontSize: 'clamp(160px,24vw,320px)',
        right: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        WebkitTextStroke: '1px rgba(198,164,90,0.08)',
      }}>
        V
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(40px,6vw,96px)',
        alignItems: 'center',
      }}>
        {/* Left — headline */}
        <div>
          <FadeUp delay={0.05}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
              <LineReveal width={28} delay={0.1} />
              <span className="eyebrow">The Vault</span>
            </div>
          </FadeUp>

          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px,4.2vw,64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.charcoal,
              lineHeight: 1.1,
              marginBottom: 6,
            }}>
              For the ones who reign,
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px,4.2vw,64px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.gold,
              lineHeight: 1.1,
            }}>
              a vault for your fleet.
            </h2>
          </ClipReveal>

          <FadeUp delay={0.4} style={{ marginTop: 28 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 300,
              color: C.mid,
              lineHeight: 1.95,
              maxWidth: 340,
            }}>
              Private parking infrastructure and curated service planning designed to protect convenience, discretion, and lifestyle.
            </p>
          </FadeUp>
        </div>

        {/* Right — feature list */}
        <div>
          {[
            { l: 'Dedicated parking levels', d: 'Reserved exclusively for residents' },
            { l: 'Service basement',         d: 'Discreet service infrastructure' },
            { l: 'Mechanical parking',       d: 'Precision-engineered systems' },
            { l: 'Private parking lift',     d: 'Direct access to your residence' },
          ].map((f, i) => (
            <FadeUp key={f.l} delay={0.3 + i * 0.1}>
              <div style={{
                padding: '20px 0',
                borderBottom: i < 3 ? `1px solid ${C.line}` : 'none',
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 11,
                  color: C.gold,
                  opacity: 0.65,
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  0{i + 1}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: C.charcoal,
                    letterSpacing: '0.04em',
                    marginBottom: 4,
                  }}>
                    {f.l}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    color: C.taupe,
                    letterSpacing: '0.04em',
                  }}>
                    {f.d}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
