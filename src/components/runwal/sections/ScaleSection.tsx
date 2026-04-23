// SCALE — Light mist/stone. Ghost "7500" on a warm light surface.
// Clean, airy, typographic. No dark background whatsoever.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { FadeUp, Counter } from '../shared';

export default function ScaleSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const numY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      background: C.mist,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Ghost "7500" — structural, on light bg */}
      <motion.div style={{
        position: 'absolute',
        left: 'clamp(8px,1.5vw,32px)',
        top: '50%',
        transform: 'translateY(-50%)',
        y: numY,
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(120px,20vw,300px)',
        fontWeight: 400,
        lineHeight: 0.85,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(198,164,90,0.15)',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.02em',
        zIndex: 0,
      }}>
        7500
      </motion.div>

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        width: '100%',
      }}>
        {/* Headline — right side, offset */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'clamp(44px,5.5vw,72px)' }}>
          <div style={{ maxWidth: 500 }}>
            <FadeUp delay={0.1}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>The Scale</span>
            </FadeUp>

            <div style={{ overflow: 'hidden', marginBottom: 6 }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(26px,3.8vw,52px)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: C.charcoal,
                  lineHeight: 1.15,
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
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(26px,3.8vw,52px)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: C.gold,
                  lineHeight: 1.15,
                }}
              >
                and endless skies.
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Bottom row — body + stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 32,
          borderTop: `1px solid ${C.line}`,
          paddingTop: 36,
        }}>
          <FadeUp delay={0.35}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.88rem',
              fontWeight: 300,
              color: C.mid,
              lineHeight: 1.85,
              maxWidth: 340,
              letterSpacing: '0.01em',
            }}>
              Expansive private living designed for collectors of space, light, and legacy.
            </p>
          </FadeUp>

          <FadeUp delay={0.5} style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {[
              { n: 7500, s: '+', l: 'Sq. Ft.' },
              { n: 5,    s: '',  l: 'Bedrooms' },
              { n: 1,    s: '',  l: 'Per Floor' },
            ].map(item => (
              <div key={item.l} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(28px,3.6vw,48px)',
                  fontWeight: 400,
                  color: C.gold,
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                }}>
                  <Counter to={item.n} suffix={item.s} />
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: C.taupe,
                  textTransform: 'uppercase',
                  marginTop: 8,
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
