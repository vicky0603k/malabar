// ADDRESS — Clean split. Text left, aerial image right.
// No line-art. No abstract graphics. Real location visual.
// Communicates prestige, context, and location value clearly.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

export default function AddressSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="address"
      ref={ref}
      style={{
        minHeight: '100vh',
        background: C.ivory,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}
    >

      {/* ══════════════════════════════════════
          LEFT — Text panel, 48% width
          Vertically centered, generous padding.
      ══════════════════════════════════════ */}
      <div style={{
        width: '48%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(80px,10vw,140px) clamp(32px,5vw,80px) clamp(80px,10vw,140px) clamp(32px,5.5vw,88px)',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Eyebrow */}
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <LineReveal width={24} delay={0.1} />
            <span className="eyebrow">The Address</span>
          </div>
        </FadeUp>

        {/* Headline */}
        <div style={{ marginBottom: 36 }}>
          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(30px,4vw,58px)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: C.charcoal,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
            }}>
              An address for the
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(30px,4vw,58px)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: C.gold,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
            }}>
              city's most powerful.
            </h2>
          </ClipReveal>
        </div>

        {/* Body */}
        <FadeUp delay={0.35}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(13px,0.95vw,15px)',
            fontWeight: 300,
            color: C.mid,
            lineHeight: 1.9,
            letterSpacing: '0.01em',
            maxWidth: 400,
            marginBottom: 14,
          }}>
            Once associated with nobility and influence, Malabar Hill remains Mumbai's most aristocratic address.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(13px,0.95vw,15px)',
            fontWeight: 300,
            color: C.mid,
            lineHeight: 1.9,
            letterSpacing: '0.01em',
            maxWidth: 400,
          }}>
            Runwal Malabar places you beside one of the city's most iconic precincts, where prestige is not announced — it is understood.
          </p>
        </FadeUp>

        {/* Location callout — premium detail */}
        <FadeUp delay={0.5}>
          <div style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: `1px solid ${C.line}`,
          }}>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(8px,0.58vw,10px)',
              fontWeight: 500,
              letterSpacing: '0.26em',
              color: C.taupe,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
              Next to
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(15px,1.4vw,20px)',
              fontWeight: 500,
              color: C.charcoal,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}>
              The Governor's Estate
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(11px,0.78vw,13px)',
              fontWeight: 300,
              color: C.taupe,
              letterSpacing: '0.1em',
            }}>
              Malabar Hill, Mumbai — 400 006
            </div>
          </div>
        </FadeUp>

      </div>


      {/* ══════════════════════════════════════
          RIGHT — Aerial image, 52% width
          Malabar Hill coastline / Mumbai aerial.
          Communicates location, prestige, context.
          No text on top. Clean and sharp.
      ══════════════════════════════════════ */}
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=85&auto=format&fit=crop"
            alt="Mumbai coastline aerial view"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
            }}
          />
          {/* Very soft left edge — blends into ivory panel */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(247,244,239,0.55) 0%, transparent 22%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        {/* Subtle gold frame inset */}
        <div style={{
          position: 'absolute',
          inset: 'clamp(16px,2vw,28px)',
          border: '1px solid rgba(198,164,90,0.15)',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        {/* Location badge — bottom right of image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          style={{
            position: 'absolute',
            bottom: 'clamp(24px,3vw,40px)',
            right: 'clamp(24px,3vw,40px)',
            zIndex: 3,
            background: 'rgba(247,244,239,0.88)',
            backdropFilter: 'blur(8px)',
            padding: '14px 20px',
            borderLeft: `2px solid ${C.gold}`,
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.58rem',
            fontWeight: 500,
            letterSpacing: '0.24em',
            color: C.taupe,
            textTransform: 'uppercase',
            marginBottom: 4,
          }}>
            Location
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(14px,1.1vw,17px)',
            fontWeight: 500,
            color: C.charcoal,
            letterSpacing: '0.02em',
          }}>
            Malabar Hill
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.68rem',
            fontWeight: 300,
            color: C.taupe,
            letterSpacing: '0.08em',
            marginTop: 2,
          }}>
            Mumbai, India
          </div>
        </motion.div>
      </div>


      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 860px) {
          #address { flex-direction: column !important; }
          #address > div:first-child { width: 100% !important; }
          #address > div:last-child { height: 56vw !important; min-height: 280px !important; }
        }
      `}</style>

    </section>
  );
}
