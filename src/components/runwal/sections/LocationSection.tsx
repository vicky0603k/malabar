// LOCATION â€” Full-bleed editorial map. Custom SVG luxury cartography.
// Text floats over the map as editorial overlays, not in a sidebar.
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { C, EASE } from '../tokens';
import { FadeUp, ClipReveal } from '../shared';

const PLACES = [
  { id: 'rm',  label: 'Runwal Malabar',     sub: 'Your address',         x: 48, y: 46, primary: true },
  { id: 'gov', label: "Governor's Estate",  sub: 'Adjacent',             x: 50, y: 39, primary: false },
  { id: 'mc',  label: 'Marine Drive',       sub: '4 min',                x: 70, y: 58, primary: false },
  { id: 'hc',  label: 'High Court',         sub: '8 min',                x: 65, y: 70, primary: false },
  { id: 'sea', label: 'Arabian Sea',        sub: 'Unobstructed view',    x: 18, y: 48, primary: false },
  { id: 'bb',  label: 'Babulnath',          sub: '3 min',                x: 57, y: 54, primary: false },
  { id: 'jb',  label: 'Hanging Gardens',    sub: '5 min',                x: 38, y: 55, primary: false },
];

const PATHS = [
  [48,46, 50,39], [48,46, 70,58], [48,46, 65,70],
  [48,46, 57,54], [48,46, 38,55],
];

export default function LocationSection() {
  const mapRef = useRef(null);
  const inView = useInView(mapRef, { once: true, margin: '-80px' });

  return (
    <section
      id="panorama"
      style={{
        minHeight: '100vh', background: C.beige,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Headline â€” floats top, large, bleeds */}
      <div style={{
        padding: 'clamp(80px,10vw,130px) clamp(24px,6vw,96px) 0',
        position: 'relative', zIndex: 2,
      }}>
        <ClipReveal delay={0.05}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(44px,7vw,110px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.charcoal, lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}>
            Mumbai's most
          </h2>
        </ClipReveal>
        <ClipReveal delay={0.15}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(44px,7vw,110px)',
            fontWeight: 300, fontStyle: 'italic',
            color: C.gold, lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}>
            aristocratic address.
          </h2>
        </ClipReveal>
      </div>

      {/* Map â€” full width, editorial */}
      <div
        ref={mapRef}
        style={{
          flex: 1, position: 'relative',
          margin: 'clamp(32px,4vw,56px) clamp(24px,6vw,96px)',
          minHeight: 'clamp(320px,45vw,560px)',
          background: C.mist,
          overflow: 'hidden',
        }}
      >
        {/* Gold border frame */}
        <div style={{
          position: 'absolute', inset: 0,
          border: '1px solid rgba(198,164,90,0.2)',
          pointerEvents: 'none', zIndex: 3,
        }} />

        {/* SVG map */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          {/* Topographic rings */}
          {[28,20,13,7].map((r, i) => (
            <ellipse key={r} cx="48" cy="46" rx={r} ry={r * 0.75}
              stroke={C.taupe} strokeWidth="0.15" fill="none" opacity={0.3 - i * 0.05} />
          ))}

          {/* Sea fill */}
          <rect x="0" y="0" width="28" height="100" fill="rgba(198,164,90,0.03)" />
          <line x1="28" y1="0" x2="28" y2="100" stroke={C.taupe} strokeWidth="0.1" opacity="0.3" />

          {/* Grid */}
          {[20,40,60,80].map(v => (
            <React.Fragment key={v}>
              <line x1={v} y1="0" x2={v} y2="100" stroke={C.taupe} strokeWidth="0.08" opacity="0.2" />
              <line x1="0" y1={v} x2="100" y2={v} stroke={C.taupe} strokeWidth="0.08" opacity="0.2" />
            </React.Fragment>
          ))}

          {/* Connecting paths */}
          {PATHS.map(([x1,y1,x2,y2], i) => (
            <motion.line key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={C.gold} strokeWidth="0.18"
              strokeDasharray="0.8 1.6" opacity={0.4}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.12, ease: EASE }}
            />
          ))}

          {/* Dots */}
          {PLACES.map((p, i) => (
            <motion.g key={p.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: EASE }}
              style={{ transformOrigin: `${p.x}% ${p.y}%` }}
            >
              <circle cx={p.x} cy={p.y} r={p.primary ? 0.9 : 0.55}
                fill={p.primary ? C.gold : C.taupe} />
              {p.primary && (
                <circle cx={p.x} cy={p.y} r={1.8}
                  stroke={C.gold} strokeWidth="0.2" fill="none" opacity="0.35" />
              )}
            </motion.g>
          ))}
        </svg>

        {/* Floating labels */}
        {PLACES.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
            style={{
              position: 'absolute',
              left: `${p.x}%`, top: `${p.y}%`,
              transform: p.primary ? 'translate(-50%, -220%)' : 'translate(-50%, -180%)',
              textAlign: 'center', pointerEvents: 'none',
            }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: p.primary ? '0.58rem' : '0.5rem',
              letterSpacing: '0.14em',
              color: p.primary ? C.charcoal : C.taupe,
              textTransform: 'uppercase',
              fontWeight: p.primary ? 400 : 300,
              whiteSpace: 'nowrap',
            }}>
              {p.label}
            </div>
            {p.primary && (
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.62rem', fontStyle: 'italic',
                color: C.gold, marginTop: 2,
              }}>
                {p.sub}
              </div>
            )}
          </motion.div>
        ))}

        {/* Compass */}
        <div style={{
          position: 'absolute', bottom: 16, right: 20,
          opacity: 0.3,
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke={C.taupe} strokeWidth="0.5" />
            <polygon points="14,2 12.5,10 15.5,10" fill={C.gold} />
            <polygon points="14,26 12.5,18 15.5,18" fill={C.taupe} opacity="0.5" />
            <line x1="14" y1="2" x2="14" y2="26" stroke={C.taupe} strokeWidth="0.4" />
            <line x1="2" y1="14" x2="26" y2="14" stroke={C.taupe} strokeWidth="0.4" />
          </svg>
        </div>
      </div>

      {/* Bottom caption */}
      <FadeUp delay={0.4} style={{
        padding: '0 clamp(24px,6vw,96px) clamp(48px,6vw,80px)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', flexWrap: 'wrap', gap: 20,
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
          fontWeight: 300, color: 'rgba(43,39,37,0.6)',
          lineHeight: 1.9, maxWidth: 480, letterSpacing: '0.03em',
        }}>
          In the company of institutions, landmarks, heritage, culture, and the Arabian Sea â€” a location that belongs to few and is desired by many.
        </p>
        <a href="https://maps.google.com/?q=Malabar+Hill+Mumbai"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
            letterSpacing: '0.22em', color: C.taupe,
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 10,
            transition: 'color .3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
          onMouseLeave={e => (e.currentTarget.style.color = C.taupe)}
        >
          <span style={{ display: 'block', width: 18, height: 1, background: 'currentColor' }} />
          View on Map
        </a>
      </FadeUp>
    </section>
  );
}
