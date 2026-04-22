// RARITY — Full-bleed cinematic. Centered statement. Minimal, powerful.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function RaritySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} style={{
      height: '100vh', minHeight: 700,
      background: C.charcoal,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center 50%', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(58,53,47,0.88)',
        }} />
      </motion.div>

      <div className="orb" style={{
        width: 600, height: 600,
        background: `radial-gradient(circle, rgba(184,149,76,0.06) 0%, transparent 70%)`,
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: 'clamp(60px,8vw,100px) clamp(24px,6vw,96px)',
        maxWidth: 720,
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
            <LineReveal width={40} delay={0.1} color="rgba(184,149,76,0.5)" />
          </div>
        </FadeUp>

        <ClipReveal delay={0.15}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px,5.5vw,80px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.ivory, lineHeight: 1.1,
            marginBottom: 12,
          }}>
            You, 10 others like you,
          </h2>
        </ClipReveal>
        <ClipReveal delay={0.25}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px,5.5vw,80px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.gold, lineHeight: 1.1,
          }}>
            and absolutely no one else.
          </h2>
        </ClipReveal>

        <FadeUp delay={0.4} style={{ marginTop: 40 }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(243,240,235,0.55)',
            lineHeight: 1.95, maxWidth: 480, margin: '0 auto 12px',
          }}>
            Runwal Malabar is not simply a residence.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            fontWeight: 300, color: 'rgba(243,240,235,0.55)',
            lineHeight: 1.95, maxWidth: 480, margin: '0 auto',
          }}>
            It is a private chapter in Mumbai's skyline — written for the very few.
          </p>
        </FadeUp>

        <FadeUp delay={0.55} style={{ marginTop: 52 }}>
          <a href="#enquire" className="btn-gold" style={{ borderColor: 'rgba(184,149,76,0.6)', color: C.ivory }}>
            Own Your Chapter
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
