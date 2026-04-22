// PANORAMA â€” Cinematic full-bleed. Text is minimal, floats over image.
// Horizontal scroll-linked text drift. Immersive, not informational.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp } from '../shared';

export default function PanoramaSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const imgY    = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const textX   = useTransform(scrollYProgress, [0, 1], ['0%', '-4%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <section
      ref={ref}
      style={{
        height: '100vh', minHeight: 600,
        background: C.dark, position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Full-bleed parallax image */}
      <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(14,12,10,0.3) 0%, rgba(14,12,10,0.1) 40%, rgba(14,12,10,0.7) 100%)',
        }} />
        {/* Warm horizon glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 100% 30% at 50% 45%, rgba(198,164,90,0.08) 0%, transparent 60%)',
        }} />
      </motion.div>

      {/* Floating text â€” bottom, drifts on scroll */}
      <motion.div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: 'clamp(40px,6vw,80px) clamp(24px,6vw,96px)',
          x: textX, opacity,
          zIndex: 1,
        }}
      >
        <ClipReveal delay={0.1}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(22px,3.2vw,48px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.ivory, lineHeight: 1.3,
            maxWidth: 680, letterSpacing: '-0.01em',
          }}>
            So rare, you'll be the first to greet the city's sunrise and last to bid farewell to its sunset.
          </p>
        </ClipReveal>

        <FadeUp delay={0.3} style={{ marginTop: 24, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { l: 'Arabian Sea', s: 'Unobstructed' },
            { l: 'City Skyline', s: '270Â° sweep' },
            { l: 'Sunrise & Sunset', s: 'Both visible' },
          ].map(item => (
            <div key={item.l}>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
                letterSpacing: '0.22em', color: C.gold,
                textTransform: 'uppercase', marginBottom: 4,
              }}>
                {item.l}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.62rem',
                color: 'rgba(247,244,239,0.4)', letterSpacing: '0.06em',
              }}>
                {item.s}
              </div>
            </div>
          ))}
        </FadeUp>
      </motion.div>

      {/* Top-right: section label */}
      <div style={{
        position: 'absolute', top: 'clamp(80px,10vh,120px)', right: 'clamp(24px,6vw,96px)',
        zIndex: 1,
      }}>
        <FadeUp delay={0.05}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.52rem',
            letterSpacing: '0.3em', color: 'rgba(247,244,239,0.3)',
            textTransform: 'uppercase',
          }}>
            The Panorama
          </span>
        </FadeUp>
      </div>
    </section>
  );
}
