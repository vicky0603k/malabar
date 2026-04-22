import React from 'react';
import { motion } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

// Architectural tower sketch SVG
function TowerSketch() {
  return (
    <svg
      width="260"
      height="380"
      viewBox="0 0 260 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Main tower body */}
      <rect x="55" y="30" width="150" height="340" stroke={C.gold} strokeWidth="0.7" />
      {/* Inner frame */}
      <rect x="65" y="40" width="130" height="320" stroke={C.gold} strokeWidth="0.3" strokeDasharray="3 6" opacity="0.5" />
      {/* Roof spire */}
      <polygon points="55,30 130,4 205,30" stroke={C.gold} strokeWidth="0.7" fill="none" />
      <line x1="130" y1="4" x2="130" y2="30" stroke={C.gold} strokeWidth="0.4" />
      {/* Floor lines */}
      {[80, 120, 160, 200, 240, 280, 320].map((y) => (
        <line key={y} x1="55" y1={y} x2="205" y2={y} stroke={C.gold} strokeWidth="0.3" opacity="0.4" />
      ))}
      {/* Windows left column */}
      {[48, 88, 128, 168, 208, 248, 288].map((y) => (
        <rect key={`wl-${y}`} x="72" y={y} width="44" height="26" stroke={C.gold} strokeWidth="0.4" fill="none" opacity="0.6" />
      ))}
      {/* Windows right column */}
      {[48, 88, 128, 168, 208, 248, 288].map((y) => (
        <rect key={`wr-${y}`} x="144" y={y} width="44" height="26" stroke={C.gold} strokeWidth="0.4" fill="none" opacity="0.6" />
      ))}
      {/* Center vertical */}
      <line x1="130" y1="30" x2="130" y2="370" stroke={C.gold} strokeWidth="0.25" strokeDasharray="2 5" opacity="0.3" />
      {/* Ground line */}
      <line x1="20" y1="370" x2="240" y2="370" stroke={C.gold} strokeWidth="0.7" />
      <line x1="0" y1="376" x2="260" y2="376" stroke={C.gold} strokeWidth="0.3" opacity="0.5" />
    </svg>
  );
}

export default function AddressSection() {
  return (
    <section
      id="address"
      className="rm-section"
      style={{
        background: C.beige,
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gold frames */}
      <div className="rm-gold-frame" style={{ top: '72px', right: '80px', width: '300px', height: '380px' }} />
      <div className="rm-gold-frame" style={{ top: '84px', right: '92px', width: '276px', height: '356px', opacity: 0.12 }} />

      {/* Architectural sketch — right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="rm-hide-mobile"
        style={{
          position: 'absolute',
          right: 'clamp(24px, 7vw, 112px)',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.18,
          zIndex: 0,
        }}
      >
        <TowerSketch />
      </motion.div>

      {/* Content */}
      <div style={{ maxWidth: '580px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <Eyebrow label="The Address" />
        </Reveal>

        <Reveal delay={0.1}>
          <DisplayHeading style={{ marginBottom: '40px' }}>
            An address for the<br />city's most powerful.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy style={{ marginBottom: '18px' }}>
            Once associated with nobility and influence, Malabar Hill remains Mumbai's most aristocratic address.
          </BodyCopy>
          <BodyCopy>
            Runwal Malabar places you beside one of the city's most iconic precincts, where prestige is not announced — it is understood.
          </BodyCopy>
        </Reveal>

        {/* Location callout */}
        <Reveal delay={0.35}>
          <div
            style={{
              marginTop: '52px',
              display: 'flex',
              alignItems: 'stretch',
              gap: '22px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '1px',
                background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
                flexShrink: 0,
                minHeight: '70px',
              }}
            />
            <div>
              <div
                className="rm-font-display"
                style={{
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: C.gold,
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                Next to
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  color: C.charcoal,
                  textTransform: 'uppercase',
                  marginBottom: '5px',
                }}
              >
                The Governor's Estate
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: C.taupe,
                }}
              >
                Malabar Hill, Mumbai — 400 006
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
