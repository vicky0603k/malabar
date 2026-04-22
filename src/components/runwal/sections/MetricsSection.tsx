import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Colors as C } from '../types';
import { Reveal } from '../shared';

const METRICS = [
  { value: '690',  unit: 'FT.',  label: 'Above the city',    suffix: '' },
  { value: '270',  unit: '°',    label: 'Panoramic view',    suffix: '' },
  { value: '54',   unit: '+',    label: 'KM boundless horizon', suffix: '' },
];

function MetricItem({
  value,
  unit,
  label,
  delay,
}: {
  value: string;
  unit: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(40px, 5vw, 72px) clamp(20px, 3vw, 48px)',
        position: 'relative',
      }}
    >
      {/* Number */}
      <div
        className="rm-font-display"
        style={{
          fontSize: 'clamp(72px, 10vw, 140px)',
          fontWeight: 300,
          color: C.gold,
          lineHeight: 0.88,
          letterSpacing: '-0.03em',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {value}
        <span
          style={{
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            marginTop: '8px',
            marginLeft: '4px',
            color: C.goldDeep,
            opacity: 0.8,
          }}
        >
          {unit}
        </span>
      </div>

      {/* Thin rule */}
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: '32px' } : {}}
        transition={{ duration: 1, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '1px', background: C.gold, margin: '20px 0', opacity: 0.6 }}
      />

      {/* Label */}
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.62rem',
          letterSpacing: '0.24em',
          color: C.taupe,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section
      id="residences"
      className="rm-section"
      style={{
        background: C.charcoal,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Monogram watermark */}
      <div
        className="rm-monogram"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(200px, 35vw, 500px)',
          WebkitTextStroke: '1px rgba(184,149,76,0.04)',
          zIndex: 0,
        }}
      >
        RM
      </div>

      {/* Ambient orb */}
      <div
        className="rm-orb"
        style={{
          width: '500px',
          height: '500px',
          background: `radial-gradient(circle, rgba(184,149,76,0.06) 0%, transparent 70%)`,
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      />

      {/* Eyebrow */}
      <Reveal style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '16px' }}>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.32em',
            color: C.gold,
            textTransform: 'uppercase',
            opacity: 0.7,
          }}
        >
          The Altitude
        </span>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.1} style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '72px' }}>
        <h2
          className="rm-font-display"
          style={{
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.ivory,
            lineHeight: 1.2,
            maxWidth: '560px',
          }}
        >
          Where the city ends<br />and the sky begins.
        </h2>
      </Reveal>

      {/* Metrics grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          width: '100%',
          maxWidth: '960px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {METRICS.map((m, i) => (
          <React.Fragment key={m.value}>
            <MetricItem value={m.value} unit={m.unit} label={m.label} delay={0.2 + i * 0.15} />
            {i < METRICS.length - 1 && (
              <div
                className="rm-hide-mobile"
                style={{
                  width: '1px',
                  background: 'rgba(191,179,163,0.15)',
                  alignSelf: 'stretch',
                  margin: 'auto 0',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
