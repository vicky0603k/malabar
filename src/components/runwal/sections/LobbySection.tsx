import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading, BodyCopy } from '../shared';

const LOBBY_FEATURES = [
  'Double-height entrance lounge',
  'Signature landscape arrival',
  'Dedicated drop-off and valet access',
  'Sculpted hospitality experience',
];

export default function LobbySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="rm-section"
      style={{
        background: C.mist,
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background image — full bleed, right side */}
      <motion.div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '55%',
          height: '100%',
          y: imgY,
          zIndex: 0,
        }}
        className="rm-hide-mobile"
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=85&auto=format&fit=crop"
          alt="Double-height lobby"
          style={{ width: '100%', height: '120%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(236,232,226,1) 0%, rgba(236,232,226,0.3) 40%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Reveal>
          <Eyebrow label="The Lobby" />
        </Reveal>

        <Reveal delay={0.1}>
          <DisplayHeading style={{ marginBottom: '32px' }}>
            A creation worthy<br />of a signature.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyCopy style={{ marginBottom: '52px', maxWidth: '400px' }}>
            A double-height lobby and sculptural lounge crafted with dramatic verticality, soft light, and gallery-like restraint.
          </BodyCopy>
        </Reveal>

        {/* Feature list */}
        <div>
          {LOBBY_FEATURES.map((feature, i) => (
            <Reveal key={feature} delay={0.3 + i * 0.08}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '18px 0',
                  borderBottom: i < LOBBY_FEATURES.length - 1 ? `1px solid rgba(191,179,163,0.3)` : 'none',
                }}
              >
                {/* Number */}
                <span
                  className="rm-font-display"
                  style={{
                    fontSize: '11px',
                    fontWeight: 400,
                    color: C.gold,
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    marginTop: '2px',
                    opacity: 0.8,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: C.charcoal,
                    letterSpacing: '0.04em',
                    lineHeight: 1.6,
                  }}
                >
                  {feature}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile image */}
      <div
        className="rm-show-mobile"
        style={{ width: '100%', height: '60vw', overflow: 'hidden', position: 'relative' }}
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format&fit=crop"
          alt="Double-height lobby"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  );
}
