// ARRIVAL — Beige. Vertical composition. Image is tall and narrow, not wide.
// Text wraps around the image asymmetrically. Cinematic, not informational.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function ArrivalSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="arrival"
      ref={ref}
      style={{
        minHeight: '100vh', background: C.beige,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'stretch',
      }}
    >
      {/* Tall narrow image — left, not full width */}
      <div style={{
        width: 'clamp(180px,28vw,380px)',
        flexShrink: 0, position: 'relative', overflow: 'hidden',
      }}>
        <motion.img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop"
          alt=""
          style={{
            width: '100%', height: '120%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block', position: 'absolute', top: '-10%',
            y: imgY,
          } as any}
        />
        {/* Right edge gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, rgba(230,222,210,1) 100%)',
        }} />
        {/* Gold frame */}
        <div style={{
          position: 'absolute', inset: 12,
          border: '1px solid rgba(184,149,76,0.18)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content — right, generous padding */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(60px,8vw,120px) clamp(32px,5vw,80px)',
        position: 'relative', zIndex: 1,
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <LineReveal width={36} delay={0.1} />
            <span className="eyebrow">The Arrival</span>
          </div>
        </FadeUp>

        <div style={{ marginBottom: 40 }}>
          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px,4.5vw,68px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.charcoal, lineHeight: 1.1,
            }}>
              Make a statement
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px,4.5vw,68px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.1,
            }}>
              before you step in.
            </h2>
          </ClipReveal>
        </div>

        <FadeUp delay={0.4}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(58,53,47,0.62)',
            lineHeight: 1.95, maxWidth: 400, letterSpacing: '0.03em',
          }}>
            A grand porte-cochère arrival, sculpted landscape edges, and a double-height entrance designed to announce discretion, power, and refinement.
          </p>
        </FadeUp>

        {/* Feature list — typographic, no boxes */}
        <FadeUp delay={0.55} style={{ marginTop: 48 }}>
          {[
            'Grand porte-cochère',
            'Sculpted landscape arrival',
            'Double-height entrance',
            'Private drop-off forecourt',
          ].map((item, i) => (
            <div key={item} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '14px 0',
              borderBottom: i < 3 ? '1px solid rgba(191,179,163,0.25)' : 'none',
            }}>
              <span style={{
                display: 'block', width: 18, height: 1,
                background: C.gold, flexShrink: 0, opacity: 0.7,
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
      </div>
    </section>
  );
}
