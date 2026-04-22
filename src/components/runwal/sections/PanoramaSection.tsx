// PANORAMA — Full-bleed image with LIGHT treatment.
// Soft ivory fade at bottom. Text in charcoal on ivory, not white on dark.
// Feels like a bright editorial spread — airy, not cinematic-dark.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp } from '../shared';

export default function PanoramaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY  = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textX = useTransform(scrollYProgress, [0, 1], ['0%', '-2%']);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      background: C.ivory,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Image — top 62vh, parallax */}
      <div style={{
        position: 'relative',
        height: '62vh',
        minHeight: 360,
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
            alt="Panoramic sea view"
            style={{
              width: '100%', height: '130%',
              objectFit: 'cover', objectPosition: 'center 40%',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Soft ivory fade — bottom blends into section */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom,
            rgba(247,244,239,0.2) 0%,
            transparent 18%,
            transparent 52%,
            rgba(247,244,239,0.9) 84%,
            #F7F4EF 100%)`,
          pointerEvents: 'none',
        }} />

        {/* Section label — top right */}
        <FadeUp delay={0.05} style={{
          position: 'absolute',
          top: 'clamp(28px,4.5vh,52px)',
          right: 'clamp(32px,5vw,80px)',
          zIndex: 2,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            letterSpacing: '0.3em',
            color: 'rgba(247,244,239,0.55)',
            textTransform: 'uppercase',
          }}>
            The Panorama
          </span>
        </FadeUp>
      </div>

      {/* Text — on ivory below image */}
      <motion.div style={{ x: textX }}>
        <div style={{
          padding: 'clamp(36px,4.5vw,60px) clamp(32px,5vw,80px) clamp(56px,7vw,88px)',
        }}>
          <ClipReveal delay={0.1}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(22px,3vw,44px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.charcoal,
              lineHeight: 1.3,
              maxWidth: 700,
              letterSpacing: '-0.01em',
              marginBottom: 36,
            }}>
              So rare, you'll be the first to greet the city's sunrise and last to bid farewell to its sunset.
            </p>
          </ClipReveal>

          <FadeUp delay={0.3} style={{ display: 'flex', gap: 'clamp(28px,4vw,56px)', flexWrap: 'wrap' }}>
            {[
              { l: 'Arabian Sea',      s: 'Unobstructed' },
              { l: 'City Skyline',     s: '270° sweep' },
              { l: 'Sunrise & Sunset', s: 'Both visible' },
            ].map(item => (
              <div key={item.l}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.54rem',
                  letterSpacing: '0.22em',
                  color: C.gold,
                  textTransform: 'uppercase',
                  marginBottom: 5,
                }}>
                  {item.l}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  color: C.taupe,
                  letterSpacing: '0.06em',
                }}>
                  {item.s}
                </div>
              </div>
            ))}
          </FadeUp>
        </div>
      </motion.div>
    </section>
  );
}
