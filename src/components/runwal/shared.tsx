import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE } from './tokens';

/* ── Clip-reveal: text slides up from behind a mask ── */
export function ClipReveal({
  children,
  delay = 0,
  style = {},
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className}>
      <motion.div
        initial={{ y: '105%' }}
        animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Fade + drift reveal ── */
export function FadeUp({
  children,
  delay = 0,
  y = 30,
  style = {},
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.3, delay, ease: EASE }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated counter ── */
export function Counter({
  to,
  suffix = '',
  prefix = '',
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let t0 = 0;
    const dur = 2400;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ── Horizontal line reveal ── */
export function LineReveal({
  delay = 0,
  width = 48,
  color = '#B8954C',
  style = {},
}: {
  delay?: number;
  width?: number | string;
  color?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.span
      ref={ref}
      initial={{ width: 0 }}
      animate={inView ? { width } : {}}
      transition={{ duration: 1.2, delay, ease: EASE }}
      style={{ display: 'block', height: '1px', background: color, ...style }}
    />
  );
}
