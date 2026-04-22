// ADDRESS â€” Ivory panel. Oversized architectural SVG bleeds behind text.
// Asymmetric: headline top-right, body bottom-left. Diagonal visual tension.
import React from 'react';
import { motion } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

function ArchSketch() {
  return (
    <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      {/* Tower outline */}
      <rect x="80" y="40" width="160" height="420" stroke={C.gold} strokeWidth="0.6" />
      {/* Spire */}
      <polygon points="80,40 160,8 240,40" stroke={C.gold} strokeWidth="0.6" fill="none" />
      <line x1="160" y1="8" x2="160" y2="40" stroke={C.gold} strokeWidth="0.4" />
      {/* Floor plates */}
      {[80,120,160,200,240,280,320,360,400].map(y => (
        <line key={y} x1="80" y1={y} x2="240" y2={y} stroke={C.gold} strokeWidth="0.25" opacity="0.35" />
      ))}
      {/* Window grid left */}
      {[50,90,130,170,210,250,290,330,370].map(y => (
        <rect key={`l${y}`} x="96" y={y} width="48" height="24" stroke={C.gold} strokeWidth="0.35" fill="none" opacity="0.5" />
      ))}
      {/* Window grid right */}
      {[50,90,130,170,210,250,290,330,370].map(y => (
        <rect key={`r${y}`} x="176" y={y} width="48" height="24" stroke={C.gold} strokeWidth="0.35" fill="none" opacity="0.5" />
      ))}
      {/* Ground */}
      <line x1="40" y1="460" x2="280" y2="460" stroke={C.gold} strokeWidth="0.6" />
      <line x1="0" y1="468" x2="320" y2="468" stroke={C.gold} strokeWidth="0.25" opacity="0.4" />
      {/* Center axis */}
      <line x1="160" y1="40" x2="160" y2="460" stroke={C.gold} strokeWidth="0.2" strokeDasharray="3 6" opacity="0.25" />
    </svg>
  );
}

export default function AddressSection() {
  return (
    <section
      id="address"
      style={{
        minHeight: '100vh', background: C.ivory,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}
    >
      {/* Sketch â€” large, faded, bleeds right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE }}
        style={{
          position: 'absolute', right: '-4%', top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(260px,32vw,420px)',
          height: 'auto', opacity: 0.12,
          pointerEvents: 'none',
        }}
      >
        <ArchSketch />
      </motion.div>

      {/* Monogram â€” very faint */}
      <div className="monogram" style={{
        fontSize: 'clamp(200px,28vw,380px)',
        left: '-60px', bottom: '-40px',
      }}>
        M
      </div>

      {/* Content â€” asymmetric layout */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%',
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
      }}>
        {/* Eyebrow â€” top right */}
        <FadeUp style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'clamp(40px,6vw,80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="eyebrow">The Address</span>
            <LineReveal width={36} delay={0.1} />
          </div>
        </FadeUp>

        {/* Headline â€” right-aligned, massive */}
        <div style={{ textAlign: 'right', marginBottom: 'clamp(48px,7vw,96px)' }}>
          <ClipReveal delay={0.1}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5.5vw,80px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.charcoal, lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              An address for the
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.2}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5.5vw,80px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              city's most powerful.
            </h2>
          </ClipReveal>
        </div>

        {/* Body â€” bottom left, offset */}
        <div style={{
          display: 'flex', gap: 'clamp(32px,5vw,72px)',
          alignItems: 'flex-start', flexWrap: 'wrap',
        }}>
          <FadeUp delay={0.3} style={{ maxWidth: 420 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
              fontWeight: 300, color: 'rgba(43,39,37,0.65)',
              lineHeight: 1.95, letterSpacing: '0.03em', marginBottom: 16,
            }}>
              Once associated with nobility and influence, Malabar Hill remains Mumbai's most aristocratic address.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
              fontWeight: 300, color: 'rgba(43,39,37,0.65)',
              lineHeight: 1.95, letterSpacing: '0.03em',
            }}>
              Runwal Malabar places you beside one of the city's most iconic precincts, where prestige is not announced â€” it is understood.
            </p>
          </FadeUp>

          {/* Location callout â€” isolated typographic block */}
          <FadeUp delay={0.45}>
            <div style={{ paddingLeft: 24, borderLeft: `1px solid rgba(198,164,90,0.3)` }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.75rem', fontStyle: 'italic',
                color: C.gold, marginBottom: 8, letterSpacing: '0.04em',
              }}>
                Next to
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
                letterSpacing: '0.18em', color: C.charcoal,
                textTransform: 'uppercase', marginBottom: 6,
              }}>
                The Governor's Estate
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.62rem',
                letterSpacing: '0.1em', color: C.taupe,
              }}>
                Malabar Hill, Mumbai
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
