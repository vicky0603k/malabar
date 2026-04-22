// LOBBY â€” Mist/ivory. Image bleeds from top, text below.
// Headline overlaps the image bottom edge. Layered depth.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp } from '../shared';

export default function LobbySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh', background: C.mist,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image â€” top 55%, parallax */}
      <div style={{ height: '55vh', minHeight: 300, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <motion.img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85&auto=format&fit=crop"
          alt=""
          style={{
            width: '100%', height: '120%',
            objectFit: 'cover', objectPosition: 'center 30%',
            display: 'block', position: 'absolute', top: '-10%',
            y: imgY,
          } as any}
        />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(236,232,226,1) 100%)',
        }} />
      </div>

      {/* Headline â€” overlaps image bottom */}
      <div style={{
        position: 'relative', zIndex: 2,
        marginTop: '-clamp(20px,3vw,40px)',
        padding: '0 clamp(24px,6vw,96px)',
      }}>
        <ClipReveal delay={0.1}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px,5.5vw,80px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.charcoal, lineHeight: 1.05,
          }}>
            A creation worthy
          </h2>
        </ClipReveal>
        <ClipReveal delay={0.2}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px,5.5vw,80px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.gold, lineHeight: 1.05,
          }}>
            of a signature.
          </h2>
        </ClipReveal>
      </div>

      {/* Content below */}
      <div style={{
        padding: 'clamp(32px,4vw,56px) clamp(24px,6vw,96px) clamp(60px,8vw,100px)',
        display: 'flex', gap: 'clamp(32px,5vw,80px)',
        flexWrap: 'wrap', alignItems: 'flex-start',
        flex: 1,
      }}>
        <FadeUp delay={0.3} style={{ maxWidth: 380 }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(43,39,37,0.62)',
            lineHeight: 1.95, letterSpacing: '0.03em',
          }}>
            A double-height lobby and sculptural lounge crafted with dramatic verticality, soft light, and gallery-like restraint.
          </p>
        </FadeUp>

        {/* Numbered feature list */}
        <FadeUp delay={0.45} style={{ flex: 1, minWidth: 260 }}>
          {[
            'Double-height entrance lounge',
            'Signature landscape arrival',
            'Dedicated drop-off and valet access',
            'Sculpted hospitality experience',
          ].map((f, i) => (
            <div key={f} style={{
              display: 'flex', gap: 20, alignItems: 'flex-start',
              padding: '16px 0',
              borderBottom: i < 3 ? '1px solid rgba(216,206,192,0.25)' : 'none',
            }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 11, color: C.gold, opacity: 0.7,
                flexShrink: 0, marginTop: 2, letterSpacing: '0.1em',
              }}>
                0{i + 1}
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
                fontWeight: 300, color: C.charcoal, letterSpacing: '0.04em',
                lineHeight: 1.6,
              }}>
                {f}
              </span>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
