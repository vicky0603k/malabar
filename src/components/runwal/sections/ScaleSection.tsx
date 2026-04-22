// SCALE — Dark. The number "7500" is the entire visual.
// Minimal text. Maximum breathing room. Typographic monument.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { FadeUp, Counter } from '../shared';

export default function ScaleSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const numY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh', background: C.dark,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'flex-start',
      }}
    >
      {/* Ambient orb */}
      <div className="orb" style={{
        width: 700, height: 700,
        background: `radial-gradient(circle, rgba(184,149,76,0.05) 0%, transparent 70%)`,
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      }} />

      {/* The number — structural, massive */}
      <motion.div
        style={{
          position: 'absolute',
          left: 'clamp(16px,3vw,48px)',
          top: '50%', transform: 'translateY(-50%)',
          y: numY,
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(140px,22vw,340px)',
          fontWeight: 300, lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(184,149,76,0.12)',
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.04em',
          zIndex: 0,
        }}
      >
        7500
      </motion.div>

      {/* Content — floats over the number */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        width: '100%',
      }}>
        {/* Headline — right side, offset */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'clamp(48px,6vw,80px)' }}>
          <div style={{ maxWidth: 520 }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
                letterSpacing: '0.34em', color: 'rgba(184,149,76,0.5)',
                textTransform: 'uppercase', marginBottom: 20,
              }}
            >
              The Scale
            </motion.div>

            <div style={{ overflow: 'hidden', marginBottom: 8 }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(28px,4vw,56px)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: C.ivory, lineHeight: 1.15,
                }}
              >
                7500+ sq. ft. of sea, city
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(28px,4vw,56px)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: C.gold, lineHeight: 1.15,
                }}
              >
                and endless skies.
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Bottom row — stats + CTA */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 32,
          borderTop: '1px solid rgba(191,179,163,0.08)',
          paddingTop: 40,
        }}>
          <FadeUp delay={0.35}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
              fontWeight: 300, color: 'rgba(243,240,235,0.45)',
              lineHeight: 1.9, maxWidth: 360, letterSpacing: '0.03em',
            }}>
              Expansive private living designed for collectors of space, light, and legacy.
            </p>
          </FadeUp>

          <FadeUp delay={0.5} style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {[
              { n: 7500, s: '+', l: 'Sq. Ft.' },
              { n: 5, s: '', l: 'Bedrooms' },
              { n: 1, s: '', l: 'Per Floor' },
            ].map(item => (
              <div key={item.l} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(32px,4vw,52px)',
                  fontWeight: 300, color: C.gold,
                  lineHeight: 1, letterSpacing: '-0.02em',
                }}>
                  <Counter to={item.n} suffix={item.s} />
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.54rem',
                  letterSpacing: '0.22em', color: 'rgba(191,179,163,0.4)',
                  textTransform: 'uppercase', marginTop: 8,
                }}>
                  {item.l}
                </div>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
