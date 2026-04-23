// METRICS — Light beige. Monumental numbers on a clean, airy surface.
// Alternating alignment. No dark background. Gold on beige = premium, not heavy.
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { C, EASE } from '../tokens';
import { Counter, FadeUp } from '../shared';

function MetricRow({ value, unit, label, delay, align }: {
  value: number; unit: string; label: string; delay: number; align: 'left' | 'right';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === 'left' ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.4, delay, ease: EASE }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'left' ? 'flex-start' : 'flex-end',
        padding: 'clamp(28px,3.5vw,48px) 0',
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.6rem',
        fontWeight: 500,
        letterSpacing: '0.28em',
        color: C.taupe,
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 'clamp(72px,12vw,180px)',
        fontWeight: 300,
        color: C.gold,
        lineHeight: 0.85,
        letterSpacing: '-0.02em',
        display: 'flex',
        alignItems: 'flex-start',
      }}>
        <Counter to={value} />
        <span style={{
          fontSize: 'clamp(22px,3vw,48px)',
          fontWeight: 400,
          marginTop: 'clamp(8px,1.2vw,18px)',
          marginLeft: 6,
          color: C.goldDeep,
          opacity: 0.8,
        }}>
          {unit}
        </span>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section id="residences" style={{
      minHeight: '100vh',
      background: C.beige,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Ghost monogram — very faint on light bg */}
      <div className="monogram" style={{
        fontSize: 'clamp(260px,40vw,520px)',
        left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        WebkitTextStroke: '1px rgba(198,164,90,0.07)',
        zIndex: 0,
      }}>
        RM
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,96px)',
      }}>
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(28px,3.5vw,48px)' }}>
            <span style={{ display: 'block', width: 24, height: 1, background: C.gold, opacity: 0.5 }} />
            <span className="eyebrow">The Altitude</span>
          </div>
        </FadeUp>

        <MetricRow value={690}  unit="FT."  label="Above the city"    delay={0.1} align="left" />
        <MetricRow value={270}  unit="°"    label="Panoramic view"    delay={0.2} align="right" />
        <MetricRow value={54}   unit="+ KM" label="Boundless horizon" delay={0.3} align="left" />
      </div>
    </section>
  );
}
