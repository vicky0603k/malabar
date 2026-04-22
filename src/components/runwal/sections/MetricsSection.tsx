// METRICS — Monumental. Numbers dominate the entire viewport.
// Each metric is a full-width typographic statement, stacked vertically.
// No columns. No boxes. Pure typographic architecture.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { C, EASE } from '../tokens';
import { Counter } from '../shared';

function MetricRow({
  value, unit, label, delay, align,
}: {
  value: number; unit: string; label: string; delay: number; align: 'left' | 'right';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === 'left' ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.4, delay, ease: EASE }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'left' ? 'flex-start' : 'flex-end',
        padding: 'clamp(28px,3.5vw,48px) 0',
        borderBottom: '1px solid rgba(191,179,163,0.08)',
      }}
    >
      {/* Label — small, above */}
      <div style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
        letterSpacing: '0.3em', color: 'rgba(191,179,163,0.4)',
        textTransform: 'uppercase', marginBottom: 8,
      }}>
        {label}
      </div>

      {/* Number — monumental */}
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(80px,13vw,200px)',
        fontWeight: 300, color: C.gold,
        lineHeight: 0.85, letterSpacing: '-0.03em',
        display: 'flex', alignItems: 'flex-start',
      }}>
        <Counter to={value} />
        <span style={{
          fontSize: 'clamp(28px,4vw,64px)',
          marginTop: 'clamp(10px,1.5vw,22px)',
          marginLeft: 4,
          color: C.goldDeep, opacity: 0.75,
        }}>
          {unit}
        </span>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      id="residences"
      ref={ref}
      style={{
        minHeight: '100vh', background: C.charcoal,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
    >
      {/* Subtle bg texture */}
      <motion.div style={{ position: 'absolute', inset: 0, y: bgY, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,149,76,0.04) 0%, transparent 70%)`,
        }} />
      </motion.div>

      {/* Monogram — enormous, faint */}
      <div className="monogram" style={{
        fontSize: 'clamp(300px,45vw,600px)',
        left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        WebkitTextStroke: '1px rgba(184,149,76,0.03)',
        zIndex: 0,
      }}>
        RM
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,96px)',
      }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
            letterSpacing: '0.34em', color: 'rgba(184,149,76,0.5)',
            textTransform: 'uppercase', marginBottom: 'clamp(32px,4vw,56px)',
          }}
        >
          The Altitude
        </motion.div>

        {/* Three metrics — alternating alignment */}
        <MetricRow value={690}  unit="FT."  label="Above the city"       delay={0.1} align="left" />
        <MetricRow value={270}  unit="°"    label="Panoramic view"       delay={0.2} align="right" />
        <MetricRow value={54}   unit="+ KM" label="Boundless horizon"    delay={0.3} align="left" />
      </div>
    </section>
  );
}
