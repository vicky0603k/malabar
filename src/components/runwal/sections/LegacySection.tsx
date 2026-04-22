// LEGACY — Image-led editorial spread.
// Full-bleed image top band (~65vh). Sharp, no white fade.
// Below: clean ivory content band — headline, body, stats in one cohesive row.
// "generations" in gold. Stats inline with text, not floating right.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { C, EASE } from '../tokens';
import { FadeUp, Counter } from '../shared';

export default function LegacySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="legacy"
      ref={ref}
      style={{
        background: C.ivory,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ══════════════════════════════════════════
          IMAGE BAND — 65vh, full bleed, sharp
          Parallax drift. No white overlay.
          Only a very soft bottom scrim for the
          headline that bleeds across the boundary.
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative',
        height: 'clamp(380px, 65vh, 680px)',
        overflow: 'hidden',
      }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
          <img
            src="https://static.wixstatic.com/media/cef78c_5e1e9c2d559b4763a014d51afdfca517~mv2.jpg"
            alt="Runwal Legacy"
            style={{
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Bottom scrim — ONLY for the headline overlap zone.
            Narrow, dark, not ivory. Keeps image rich. */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 55%, rgba(16,14,12,0.55) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Top soft fade — nav clearance only */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(16,14,12,0.18) 0%, transparent 12%)',
          pointerEvents: 'none',
        }} />

        {/* ── Eyebrow — top left, over image ── */}
        <FadeUp delay={0.1} style={{
          position: 'absolute',
          top: 'clamp(28px,4vh,48px)',
          left: 'clamp(32px,5vw,80px)',
          display: 'flex', alignItems: 'center', gap: 14,
          zIndex: 2,
        }}>
          <span style={{ display: 'block', width: 22, height: 1, background: 'rgba(247,244,239,0.55)', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(8px,0.58vw,10px)',
            fontWeight: 400,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'rgba(247,244,239,0.55)',
          }}>
            The Runwal Legacy
          </span>
        </FadeUp>

        {/* ── Est. year — top right, ghost ── */}
        <FadeUp delay={0.35} style={{
          position: 'absolute',
          top: 'clamp(24px,3.5vh,44px)',
          right: 'clamp(32px,5vw,80px)',
          textAlign: 'right',
          zIndex: 2,
        }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px,4vw,56px)',
            fontWeight: 300,
            color: 'rgba(247,244,239,0.1)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}>
            1978
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(7px,0.5vw,9px)',
            letterSpacing: '0.28em',
            color: 'rgba(247,244,239,0.2)',
            textTransform: 'uppercase',
            marginTop: 3,
          }}>
            Est.
          </div>
        </FadeUp>

        {/* ── "Built for" — bottom left, over image, on dark scrim ── */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(44px,7vh,72px)',
          left: 'clamp(28px,4vw,72px)',
          zIndex: 2,
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5.8vw,88px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#F7F4EF',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            Built for
          </motion.div>
        </div>

        {/* ── "generations" — gold, bleeds across image/ivory boundary ── */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(-14px,-2vh,-6px)',
          left: 'clamp(20px,3vw,56px)',
          zIndex: 4,
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.28, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(48px,8.5vw,132px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.gold,
              lineHeight: 0.88,
              letterSpacing: '-0.025em',
            }}
          >
            generations
          </motion.div>
        </div>
      </div>


      {/* ══════════════════════════════════════════
          CONTENT BAND — ivory, clean
          "to come." continues the headline.
          Body copy + stats in one horizontal row.
      ══════════════════════════════════════════ */}
      <div style={{
        padding: '0 clamp(20px,3.5vw,64px)',
        paddingBottom: 'clamp(56px,7vw,96px)',
        position: 'relative',
        zIndex: 3,
      }}>

        {/* "to come." — continues headline on ivory */}
        <div style={{ overflow: 'hidden', marginTop: 'clamp(4px,0.6vh,10px)', marginBottom: 'clamp(36px,4.5vw,60px)' }}>
          <motion.div
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.38, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5.8vw,88px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.charcoal,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
            }}
          >
            to come.
          </motion.div>
        </div>

        {/* ── Body + Stats row ── */}
        <div style={{
          display: 'flex',
          gap: 'clamp(32px,5vw,80px)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>

          {/* Body copy */}
          <FadeUp delay={0.45} style={{ maxWidth: 'clamp(240px,32vw,420px)', flexShrink: 0 }}>
            <div style={{ width: 28, height: 1, background: C.gold, opacity: 0.5, marginBottom: 20 }} />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(12px,0.88vw,14px)',
              fontWeight: 300,
              color: C.mid,
              lineHeight: 2.0,
              letterSpacing: '0.03em',
              marginBottom: 10,
            }}>
              For decades, Runwal Realty has shaped discerning lifestyles through residences of stature.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(12px,0.88vw,14px)',
              fontWeight: 300,
              color: C.mid,
              lineHeight: 2.0,
              letterSpacing: '0.03em',
            }}>
              At Runwal Malabar, that legacy rises to its most exclusive expression yet.
            </p>
          </FadeUp>

          {/* Stats — inline, generous spacing, no boxes */}
          <div style={{
            display: 'flex',
            gap: 'clamp(32px,4.5vw,72px)',
            alignItems: 'flex-start',
            paddingTop: 'clamp(4px,0.5vw,8px)',
            flexWrap: 'wrap',
          }}>
            {[
              { n: 4,  s: '+', l: 'Decades of Legacy' },
              { n: 80, s: '+', l: 'Landmark Developments' },
              { n: 11, s: '',  l: 'Curated Residences' },
            ].map((item, i) => (
              <FadeUp key={item.l} delay={0.5 + i * 0.1}>
                <div>
                  {/* Number */}
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(36px,4.5vw,60px)',
                    fontWeight: 300,
                    color: C.gold,
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    marginBottom: 10,
                  }}>
                    <Counter to={item.n} suffix={item.s} />
                  </div>
                  {/* Label */}
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(7px,0.52vw,9px)',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    lineHeight: 1.5,
                  }}>
                    {item.l}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
