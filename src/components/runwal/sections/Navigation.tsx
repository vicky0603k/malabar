import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Colors as C } from '../types';

const NAV_LINKS = ['Legacy', 'Address', 'Panorama', 'Residences', 'Arrival', 'Enquire'];

export default function Navigation({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 60));
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={ready ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px clamp(20px, 5vw, 72px)' : '26px clamp(20px, 5vw, 72px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(243,240,235,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(191,179,163,0.28)' : 'none',
        transition: 'padding 0.5s ease, background 0.5s ease, border 0.5s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', lineHeight: 1 }}>
        <div
          className="rm-font-display"
          style={{
            fontSize: '11px',
            fontWeight: 400,
            color: scrolled ? C.charcoal : C.ivory,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            transition: 'color 0.4s ease',
          }}
        >
          RUNWAL
        </div>
        <div
          className="rm-font-serif"
          style={{
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.gold,
            letterSpacing: '0.04em',
            marginTop: '-2px',
          }}
        >
          Malabar
        </div>
      </a>

      {/* Desktop links */}
      <div
        className="rm-hide-mobile"
        style={{ display: 'flex', alignItems: 'center', gap: '36px' }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6rem',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: scrolled ? C.charcoal : 'rgba(243,240,235,0.75)',
              textDecoration: 'none',
              transition: 'color 0.3s ease, opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = scrolled ? C.charcoal : 'rgba(243,240,235,0.75)')
            }
          >
            {link}
          </a>
        ))}
        <a href="#enquire" className="rm-btn" style={{ padding: '10px 22px', fontSize: '0.58rem' }}>
          Book Private Preview
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rm-show-mobile"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              background: scrolled ? C.charcoal : C.ivory,
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: C.ivory,
              padding: '28px clamp(20px, 5vw, 72px)',
              borderBottom: `1px solid rgba(191,179,163,0.28)`,
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C.charcoal,
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
            <a href="#enquire" className="rm-btn" style={{ alignSelf: 'flex-start', padding: '10px 22px', fontSize: '0.58rem' }}>
              Book Private Preview
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
