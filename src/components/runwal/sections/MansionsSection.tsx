// MANSIONS â€” Ivory. Oversized "11" dominates. Image is masked, not a rectangle.
// Text floats in negative space. Diagonal tension between number and image.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function MansionsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const numY     = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section
      id="residences-detail"
      ref={ref}
      style={{
        minHeight: '100vh', background: C.ivory,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}
    >
      {/* Giant "11" â€” structural typographic element */}
      <motion.div
        style={{
          position: 'absolute',
          right: 'clamp(-20px,-2vw,0px)',
          top: '50%', transform: 'translateY(-50%)',
          y: numY,
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(260px,38vw,560px)',
          fontWeight: 300, lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(198,164,90,0.1)',
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.06em',
          zIndex: 0,
        }}
      >
        11
      </motion.div>

      {/* Masked image â€” irregular clip, not a rectangle */}
      <motion.div
        className="desk-only"
        style={{
          position: 'absolute',
          right: 'clamp(40px,6vw,96px)',
          top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(260px,32vw,420px)',
          height: 'clamp(360px,44vw,580px)',
          overflow: 'hidden',
          zIndex: 1,
          clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', scale: imgScale as any }}
        />
        {/* Gold frame overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          border: '1px solid rgba(198,164,90,0.2)',
          pointerEvents: 'none',
        }} />
      </motion.div>

      {/* Content â€” left, floating */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        maxWidth: 'clamp(320px,50vw,600px)',
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <LineReveal width={36} delay={0.1} />
            <span className="eyebrow">The Residences</span>
          </div>
        </FadeUp>

        <div style={{ marginBottom: 40 }}>
          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.charcoal, lineHeight: 1.05,
            }}>
              11 private sky mansions,
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.05,
            }}>
              crafted to reign.
            </h2>
          </ClipReveal>
        </div>

        <FadeUp delay={0.4}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(43,39,37,0.6)',
            lineHeight: 1.95, maxWidth: 380, marginBottom: 12,
          }}>
            A singular vertical estate for a select few.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(43,39,37,0.6)',
            lineHeight: 1.95, maxWidth: 380,
          }}>
            No crowd. No compromise. No second version.
          </p>
        </FadeUp>

        {/* Attributes â€” typographic list, no boxes */}
        <FadeUp delay={0.55} style={{ marginTop: 48 }}>
          {['One residence per floor', 'Private sky terrace', 'Unobstructed sea views', 'Bespoke interior finish'].map((item, i) => (
            <div key={item} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '13px 0',
              borderBottom: i < 3 ? '1px solid rgba(216,206,192,0.2)' : 'none',
            }}>
              <span style={{
                display: 'block', width: 4, height: 4, borderRadius: '50%',
                background: C.gold, flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.72rem',
                fontWeight: 300, color: C.charcoal, letterSpacing: '0.04em',
              }}>
                {item}
              </span>
            </div>
          ))}
        </FadeUp>

        <FadeUp delay={0.7} style={{ marginTop: 44 }}>
          <a href="#enquire" className="btn-primary">Enquire for Floor Plans</a>
        </FadeUp>
      </div>

      {/* Vertical label â€” far right */}
      <div className="desk-only" style={{
        position: 'absolute', left: 'clamp(16px,2vw,28px)', top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center',
        fontFamily: 'Inter, sans-serif', fontSize: '0.48rem',
        letterSpacing: '0.3em', color: 'rgba(43,39,37,0.2)',
        textTransform: 'uppercase', whiteSpace: 'nowrap',
        zIndex: 1,
      }}>
        Private Â· Rare Â· Limited
      </div>
    </section>
  );
}
