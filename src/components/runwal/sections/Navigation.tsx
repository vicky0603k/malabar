// Navigation — ultra-minimal, transparent to frosted ivory on scroll
import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { C, EASE } from '../tokens';

const LINKS = ['Legacy', 'Address', 'Panorama', 'Residences', 'Arrival', 'Enquire'];

export default function Navigation({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => scrollY.on('change', v => setScrolled(v > 60)), [scrollY]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          padding: `${scrolled ? 14 : 22}px clamp(20px,5vw,72px)`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(247,244,239,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.line}` : 'none',
          transition: 'all 0.5s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: scrolled ? C.taupe : 'rgba(247,244,239,0.65)',
            transition: 'color .4s ease',
          }}>
            RUNWAL
          </div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 19,
            fontWeight: 500,
            fontStyle: 'italic',
            color: C.gold,
            letterSpacing: '0.02em',
            marginTop: 1,
          }}>
            Malabar
          </div>
        </a>

        {/* Desktop links */}
        <nav className="desk-only" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 400,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: scrolled ? 'rgba(43,39,37,0.6)' : 'rgba(247,244,239,0.6)',
                textDecoration: 'none',
                transition: 'color .3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'rgba(43,39,37,0.55)' : 'rgba(247,244,239,0.6)')}
            >
              {l}
            </a>
          ))}
          <a href="#enquire" className="btn-gold" style={{ padding: '9px 20px', fontSize: '0.54rem' }}>
            Private Preview
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mob-show"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 20, height: 1,
              background: scrolled ? C.charcoal : C.ivory,
              transition: 'background .3s ease',
            }} />
          ))}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 56, left: 0, right: 0, zIndex: 899,
              background: C.ivory,
              padding: '24px clamp(20px,5vw,72px)',
              borderBottom: `1px solid ${C.line}`,
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.charcoal,
                  textDecoration: 'none',
                }}
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
