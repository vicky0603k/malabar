// LEGACY — Full-bleed dark panel. Oversized italic headline bleeds off-screen.
// Stats float as isolated typographic elements, not in boxes.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, Counter, LineReveal } from '../shared';

export default function LegacySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="legacy"
      ref={ref}
      style={{
        minHeight: '100vh', background: C.dark,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
    >
      {/* Parallax image — right half, masked */}
      <motion.div
        className="desk-only"
        style={{
          position: 'absolute', right: 0, top: 0,
          width: '48%', height: '100%', y: imgY,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        {/* Gradient mask — blends into dark bg */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(26,22,18,1) 0%, rgba(26,22,18,0.4) 40%, rgba(26,22,18,0.15) 100%)',
        }} />
      </motion.div>

      {/* Ambient orb */}
      <div className="orb" style={{
        width: 600, height: 600,
        background: `radial-gradient(circle, rgba(184,149,76,0.05) 0%, transparent 70%)`,
        top: '30%', left: '20%',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        maxWidth: 680,
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <LineReveal width={36} delay={0.1} />
            <span className="eyebrow">The Runwal Legacy</span>
          </div>
        </FadeUp>

        {/* Headline — large, italic, overflows intentionally */}
        <div style={{ marginBottom: 48 }}>
          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px,6vw,88px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.ivory, lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}>
              Built for
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px,6vw,88px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}>
              generations
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.35}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px,6vw,88px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.ivory, lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}>
              to come.
            </h2>
          </ClipReveal>
        </div>

        <FadeUp delay={0.45}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
            fontWeight: 300, color: 'rgba(243,240,235,0.55)',
            lineHeight: 1.95, letterSpacing: '0.03em',
            maxWidth: 400, marginBottom: 14,
          }}>
            For decades, Runwal Realty has shaped discerning lifestyles through residences of stature.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
            fontWeight: 300, color: 'rgba(243,240,235,0.55)',
            lineHeight: 1.95, letterSpacing: '0.03em',
            maxWidth: 400,
          }}>
            At Runwal Malabar, that legacy rises to its most exclusive expression yet.
          </p>
        </FadeUp>
      </div>

      {/* Stats — floating at bottom, typographic only */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '0 clamp(24px,6vw,96px) clamp(60px,8vw,100px)',
        display: 'flex', gap: 'clamp(32px,5vw,72px)',
        flexWrap: 'wrap', alignItems: 'flex-end',
        borderTop: '1px solid rgba(191,179,163,0.08)',
        marginTop: 'auto', paddingTop: 40,
      }}>
        {[
          { n: 4, s: '+', l: 'Decades of Legacy' },
          { n: 80, s: '+', l: 'Landmark Developments' },
          { n: 11, s: '', l: 'Curated Residences' },
        ].map((item, i) => (
          <FadeUp key={item.l} delay={0.5 + i * 0.12}>
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(44px,5.5vw,72px)',
                fontWeight: 300, color: C.gold,
                lineHeight: 0.9, letterSpacing: '-0.02em',
              }}>
                <Counter to={item.n} suffix={item.s} />
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
                letterSpacing: '0.2em', color: 'rgba(191,179,163,0.5)',
                textTransform: 'uppercase', marginTop: 10,
              }}>
                {item.l}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
