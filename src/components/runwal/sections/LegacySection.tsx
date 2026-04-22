// LEGACY — Luxury editorial spread.
// Full-bleed image top 62%. Headline breaks across image/ivory boundary.
// "generations" in gold. No panels. No columns. Open, airy, premium.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { FadeUp, Counter, LineReveal } from '../shared';

export default function LegacySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      id="legacy"
      ref={ref}
      style={{
        minHeight: '100vh',
        background: C.ivory,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* TOP — Full-bleed image */}
      <div style={{ position: 'relative', height: '62vh', minHeight: 360, overflow: 'hidden', flexShrink: 0 }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://static.wixstatic.com/media/cef78c_5e1e9c2d559b4763a014d51afdfca517~mv2.jpg"
            alt="Runwal Legacy"
            style={{ width: '100%', height: '130%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
          />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(247,244,239,0.3) 0%, transparent 14%, transparent 52%, rgba(247,244,239,0.88) 84%, rgba(247,244,239,1.0) 100%)', pointerEvents: 'none' }} />
        <FadeUp delay={0.1} style={{ position: 'absolute', top: 'clamp(28px,4.5vh,52px)', left: 'clamp(32px,5vw,80px)', display: 'flex', alignItems: 'center', gap: 14, zIndex: 2 }}>
          <LineReveal width={26} delay={0.2} color="rgba(247,244,239,0.7)" />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(8px,0.6vw,10px)', fontWeight: 400, letterSpacing: '0.36em', textTransform: 'uppercase' as const, color: 'rgba(247,244,239,0.65)' }}>The Runwal Legacy</span>
        </FadeUp>
        <FadeUp delay={0.4} style={{ position: 'absolute', top: 'clamp(24px,4vh,48px)', right: 'clamp(32px,5vw,80px)', textAlign: 'right' as const, zIndex: 2 }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,4.5vw,64px)', fontWeight: 300, color: 'rgba(247,244,239,0.15)', lineHeight: 1, letterSpacing: '-0.03em' }}>1978</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(7px,0.52vw,9px)', letterSpacing: '0.28em', color: 'rgba(247,244,239,0.25)', textTransform: 'uppercase' as const, marginTop: 4 }}>Est.</div>
        </FadeUp>
        <div style={{ position: 'absolute', bottom: 'clamp(52px,9vh,88px)', left: 'clamp(28px,4vw,72px)', zIndex: 2, overflow: 'hidden' }}>
          <motion.div initial={{ y: '105%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.15, ease: EASE }} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,6.5vw,100px)', fontWeight: 300, fontStyle: 'italic', color: C.ivory, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            Built for
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 'clamp(-12px,-1.8vh,-6px)', left: 'clamp(20px,3vw,56px)', zIndex: 3, overflow: 'hidden' }}>
          <motion.div initial={{ y: '105%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.28, ease: EASE }} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px,9vw,140px)', fontWeight: 300, fontStyle: 'italic', color: C.gold, lineHeight: 0.88, letterSpacing: '-0.025em' }}>
            generations
          </motion.div>
        </div>
      </div>

      {/* MIDDLE — "to come." on ivory */}
      <div style={{ padding: '0 clamp(20px,3vw,56px)', marginTop: 'clamp(2px,0.4vh,6px)', position: 'relative', zIndex: 1 }}>
        <div style={{ overflow: 'hidden' }}>
          <motion.div initial={{ y: '105%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.38, ease: EASE }} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,6.5vw,100px)', fontWeight: 300, fontStyle: 'italic', color: C.charcoal, lineHeight: 0.92, letterSpacing: '-0.02em' }}>
            to come.
          </motion.div>
        </div>
      </div>

      {/* BOTTOM — Body copy + stats */}
      <div style={{ padding: 'clamp(32px,4.5vw,60px) clamp(32px,5vw,80px) clamp(52px,7vw,88px)', display: 'flex', gap: 'clamp(28px,4vw,72px)', alignItems: 'flex-start', flexWrap: 'wrap' as const, position: 'relative', zIndex: 1 }}>
        <FadeUp delay={0.45} style={{ maxWidth: 'clamp(240px,30vw,400px)' }}>
          <div style={{ width: 32, height: 1, background: C.gold, opacity: 0.55, marginBottom: 18 }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px,0.88vw,14px)', fontWeight: 300, color: 'rgba(43,39,37,0.6)', lineHeight: 1.95, letterSpacing: '0.03em', marginBottom: 10 }}>
            For decades, Runwal Realty has shaped discerning lifestyles through residences of stature.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px,0.88vw,14px)', fontWeight: 300, color: 'rgba(43,39,37,0.6)', lineHeight: 1.95, letterSpacing: '0.03em' }}>
            At Runwal Malabar, that legacy rises to its most exclusive expression yet.
          </p>
        </FadeUp>
        <div style={{ display: 'flex', gap: 'clamp(24px,3.5vw,56px)', flexWrap: 'wrap' as const, alignItems: 'flex-end', marginLeft: 'auto' }}>
          {[
            { n: 4,  s: '+', l: 'Decades of Legacy' },
            { n: 80, s: '+', l: 'Landmark Developments' },
            { n: 11, s: '',  l: 'Curated Residences' },
          ].map((item, i) => (
            <FadeUp key={item.l} delay={0.5 + i * 0.1}>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(34px,4.2vw,58px)', fontWeight: 300, color: C.gold, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                  <Counter to={item.n} suffix={item.s} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(7px,0.52vw,9px)', letterSpacing: '0.22em', color: C.taupe, textTransform: 'uppercase' as const, marginTop: 8 }}>
                  {item.l}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
