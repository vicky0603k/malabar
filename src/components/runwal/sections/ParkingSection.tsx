// PARKING — Dark. Diagonal split: text top-left, features bottom-right.
import React from 'react';
import { C } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function ParkingSection() {
  return (
    <section style={{
      minHeight: '100vh', background: C.ink,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      <div className="orb" style={{
        width: 500, height: 500,
        background: `radial-gradient(circle, rgba(184,149,76,0.04) 0%, transparent 70%)`,
        bottom: '20%', right: '15%',
      }} />

      <div className="monogram" style={{
        fontSize: 'clamp(180px,26vw,340px)',
        right: '-40px', top: '50%', transform: 'translateY(-50%)',
        WebkitTextStroke: '1px rgba(184,149,76,0.035)',
      }}>V</div>

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(40px,6vw,96px)',
        alignItems: 'center',
      }}>
        <div>
          <FadeUp delay={0.05}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
              <LineReveal width={36} delay={0.1} color="rgba(184,149,76,0.6)" />
              <span className="eyebrow" style={{ color: 'rgba(184,149,76,0.6)' }}>The Vault</span>
            </div>
          </FadeUp>

          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px,4.5vw,68px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.ivory, lineHeight: 1.1, marginBottom: 8,
            }}>
              For the ones who reign,
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px,4.5vw,68px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.1,
            }}>
              a vault for your fleet.
            </h2>
          </ClipReveal>

          <FadeUp delay={0.4} style={{ marginTop: 32 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
              fontWeight: 300, color: 'rgba(243,240,235,0.5)',
              lineHeight: 1.95, maxWidth: 360,
            }}>
              Private parking infrastructure and curated service planning designed to protect convenience, discretion, and lifestyle.
            </p>
          </FadeUp>
        </div>

        <div>
          {[
            { l: 'Dedicated parking levels', d: 'Reserved exclusively for residents' },
            { l: 'Service basement', d: 'Discreet service infrastructure' },
            { l: 'Mechanical parking', d: 'Precision-engineered systems' },
            { l: 'Private parking lift', d: 'Direct access to your residence' },
          ].map((f, i) => (
            <FadeUp key={f.l} delay={0.3 + i * 0.1}>
              <div style={{
                padding: '20px 0',
                borderBottom: i < 3 ? '1px solid rgba(191,179,163,0.08)' : 'none',
                display: 'flex', gap: 18, alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 11, color: C.gold, opacity: 0.5,
                  flexShrink: 0, marginTop: 2,
                }}>
                  0{i + 1}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
                    fontWeight: 400, color: 'rgba(243,240,235,0.75)',
                    letterSpacing: '0.04em', marginBottom: 4,
                  }}>
                    {f.l}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                    fontWeight: 300, color: 'rgba(191,179,163,0.45)',
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
