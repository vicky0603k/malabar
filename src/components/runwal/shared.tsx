// Shared utility components used across all sections
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Reveal on scroll ──────────────────────────────────────────────────────
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.3, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated counter ──────────────────────────────────────────────────────
export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

// ─── Section eyebrow label ─────────────────────────────────────────────────
export function Eyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
      <span className="rm-divider" />
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.58rem',
          letterSpacing: '0.32em',
          color: '#B8954C',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Section heading (display serif italic) ────────────────────────────────
export function DisplayHeading({
  children,
  light = false,
  style = {},
}: {
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      className="rm-font-display"
      style={{
        fontSize: 'clamp(30px, 4.2vw, 60px)',
        fontWeight: 300,
        fontStyle: 'italic',
        color: light ? '#F3F0EB' : '#3A352F',
        lineHeight: 1.18,
        letterSpacing: '-0.01em',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

// ─── Body copy ─────────────────────────────────────────────────────────────
export function BodyCopy({
  children,
  light = false,
  style = {},
}: {
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 300,
        color: light ? 'rgba(243,240,235,0.72)' : 'rgba(58,53,47,0.72)',
        lineHeight: 1.95,
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ─── Thin horizontal rule ──────────────────────────────────────────────────
export function GoldRule({ width = 60, style = {} }: { width?: number; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        display: 'block',
        width,
        height: '1px',
        background: '#B8954C',
        ...style,
      }}
    />
  );
}
