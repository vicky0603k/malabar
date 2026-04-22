import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

// Luxury map landmarks
const LANDMARKS = [
  { id: 'rm',  label: 'Runwal Malabar',       x: 50,  y: 48, primary: true },
  { id: 'gov', label: "Governor's Estate",    x: 52,  y: 42, primary: false },
  { id: 'hc',  label: 'High Court',           x: 62,  y: 68, primary: false },
  { id: 'mc',  label: 'Marine Drive',         x: 72,  y: 60, primary: false },
  { id: 'jb',  label: 'Jijamata Udyan',       x: 40,  y: 55, primary: false },
  { id: 'sea', label: 'Arabian Sea',          x: 22,  y: 50, primary: false },
  { id: 'bk',  label: 'Babulnath Temple',     x: 58,  y: 56, primary: false },
];

// Connecting path lines between landmarks
const PATHS = [
  { x1: 50, y1: 48, x2: 52, y2: 42 },
  { x1: 50, y1: 48, x2: 62, y2: 68 },
  { x1: 50, y1: 48, x2: 72, y2: 60 },
  { x1: 50, y1: 48, x2: 40, y2: 55 },
  { x1: 50, y1: 48, x2: 58, y2: 56 },
];

function LuxuryMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        background: C.mist,
        overflow: 'hidden',
        maxHeight: '520px',
      }}
    >
      {/* Subtle grid lines */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => (
          <React.Fragment key={v}>
            <line x1={v} y1="0" x2={v} y2="100" stroke={C.taupe} strokeWidth="0.15" />
            <line x1="0" y1={v} x2="100" y2={v} stroke={C.taupe} strokeWidth="0.15" />
          </React.Fragment>
        ))}
      </svg>

      {/* Topographic contour lines */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <ellipse cx="50" cy="48" rx="28" ry="22" stroke={C.taupe} strokeWidth="0.3" fill="none" />
        <ellipse cx="50" cy="48" rx="20" ry="15" stroke={C.taupe} strokeWidth="0.3" fill="none" />
        <ellipse cx="50" cy="48" rx="12" ry="9"  stroke={C.taupe} strokeWidth="0.3" fill="none" />
        <ellipse cx="50" cy="48" rx="5"  ry="4"  stroke={C.gold}  strokeWidth="0.3" fill="none" opacity="0.5" />
      </svg>

      {/* Sea area */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '30%',
          height: '100%',
          background: `linear-gradient(to right, rgba(184,149,76,0.04), transparent)`,
        }}
      />

      {/* Connecting paths */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {PATHS.map((p, i) => (
          <motion.line
            key={i}
            x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2}
            stroke={C.gold}
            strokeWidth="0.2"
            strokeDasharray="1 2"
            opacity={0.45}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.45 } : {}}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>

      {/* Landmark dots */}
      {LANDMARKS.map((lm, i) => (
        <motion.div
          key={lm.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            left: `${lm.x}%`,
            top: `${lm.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          {/* Dot */}
          <div
            style={{
              position: 'relative',
              width: lm.primary ? '10px' : '6px',
              height: lm.primary ? '10px' : '6px',
              borderRadius: '50%',
              background: lm.primary ? C.gold : C.taupe,
              boxShadow: lm.primary ? `0 0 0 3px rgba(184,149,76,0.2)` : 'none',
            }}
          />
          {/* Label */}
          <div
            style={{
              position: 'absolute',
              top: lm.primary ? '-26px' : '-22px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              fontFamily: 'Inter, sans-serif',
              fontSize: lm.primary ? '0.6rem' : '0.52rem',
              letterSpacing: '0.12em',
              color: lm.primary ? C.charcoal : C.taupe,
              textTransform: 'uppercase',
              fontWeight: lm.primary ? 400 : 300,
            }}
          >
            {lm.label}
          </div>
        </motion.div>
      ))}

      {/* Compass rose */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '24px',
          opacity: 0.35,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke={C.taupe} strokeWidth="0.6" />
          <line x1="16" y1="2" x2="16" y2="30" stroke={C.taupe} strokeWidth="0.5" />
          <line x1="2" y1="16" x2="30" y2="16" stroke={C.taupe} strokeWidth="0.5" />
          <polygon points="16,2 14,10 18,10" fill={C.gold} opacity="0.8" />
          <text x="16" y="8" textAnchor="middle" fontSize="4" fill={C.charcoal} fontFamily="Inter">N</text>
        </svg>
      </div>

      {/* Scale bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.45,
        }}
      >
        <div style={{ width: '40px', height: '1px', background: C.taupe }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.15em', color: C.taupe }}>
          500 M
        </span>
      </div>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section
      id="panorama"
      className="rm-section"
      style={{
        background: C.ivory,
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 7vw, 112px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
          alignItems: 'end',
        }}
      >
        <div>
          <Reveal>
            <Eyebrow label="Location" />
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading>
              Mumbai's most<br />aristocratic address.
            </DisplayHeading>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <BodyCopy style={{ maxWidth: '400px' }}>
            In the company of institutions, landmarks, heritage, culture, and the Arabian Sea — this is a location that belongs to few and is desired by many.
          </BodyCopy>
        </Reveal>
      </div>

      {/* Map */}
      <Reveal delay={0.3}>
        <div style={{ position: 'relative' }}>
          <div className="rm-gold-frame" style={{ inset: '-8px', position: 'absolute' }} />
          <LuxuryMap />
        </div>
      </Reveal>

      {/* Map CTA */}
      <Reveal delay={0.4}>
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://maps.google.com/?q=Malabar+Hill+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: C.taupe,
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.taupe)}
          >
            <span style={{ display: 'block', width: '20px', height: '1px', background: 'currentColor' }} />
            View on Map
          </a>
          <span style={{ display: 'block', width: '1px', height: '16px', background: C.taupe, opacity: 0.4 }} />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              color: C.taupe,
            }}
          >
            Malabar Hill, Mumbai — 400 006
          </span>
        </div>
      </Reveal>
    </section>
  );
}
