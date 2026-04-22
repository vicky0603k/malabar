// RARITY — Light ivory. Large centered statement. No dark overlay, no image.
// Power through restraint and whitespace, not through darkness.
// Thin gold frame. Ghost monogram. Clean and calm.
import React from 'react';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp } from '../shared';

export default function RaritySection() {
  return (
    <section style={{
      minHeight: '100vh',
      background: C.ivory,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Ghost monogram */}
      <div className="monogram" style={{
        fontSize: 'clamp(220px,32vw,440px)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        WebkitTextStroke: '1px rgba(198,164,90,0.07)',
      }}>
        RM
      </div>

      {/* Thin gold frame — inset */}
      <div style={{
        position: 'absolute',
        inset: 'clamp(24px,4vw,56px)',
        border: `1px solid rgba(198,164,90,0.14)`,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        padding: 'clamp(60px,8vw,100px) clamp(32px,6vw,96px)',
        maxWidth: 760,
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <span style={{ display: 'block', width: 36, height: 1, background: C.gold, opacity: 0.45 }} />
          </div>
        </FadeUp>

        <ClipReveal delay={0.15}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px,5vw,72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.charcoal,
            lineHeight: 1.1,
            marginBottom: 10,
          }}>
            You, 10 others like you,
          </h2>
        </ClipReveal>
        <ClipReveal delay={0.25}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px,5vw,72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.gold,
            lineHeight: 1.1,
          }}>
            and absolutely no one else.
          </h2>
        </ClipReveal>

        <FadeUp delay={0.4} style={{ marginTop: 44 }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 300,
            color: C.mid,
            lineHeight: 1.95,
            maxWidth: 460,
            margin: '0 auto 10px',
          }}>
            Runwal Malabar is not simply a residence.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 300,
            color: C.mid,
            lineHeight: 1.95,
            maxWidth: 460,
            margin: '0 auto',
          }}>
            It is a private chapter in Mumbai's skyline — written for the very few.
          </p>
        </FadeUp>

        <FadeUp delay={0.55} style={{ marginTop: 52 }}>
          <a href="#enquire" className="btn-gold">Own Your Chapter</a>
        </FadeUp>
      </div>
    </section>
  );
}
