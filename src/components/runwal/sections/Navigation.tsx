import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { C, EASE } from '../tokens';

const LINKS = ['Legacy', 'Address', 'Panorama', 'Residences', 'Arrival', 'Enquire'];

export default function Navigation({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => scrollY.on('change', v => setScrolled(v > 80)), [scrollY]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          padding: `${scrolled ? 14 : 24}px clamp(20px,5vw,72px)`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(243,240,235,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(191,179,163,0.22)' : 'none',
          transition: 'padding .5s ease, background .5s ease, border .5s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: 10,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: scrolled ? C.charcoal : 'rgba(243,240,235,0.7)',
            transition: 'color .4s ease',
          }}>
            RUNWAL
          </div>
          <div style={{
            fontFamily: 'Cormorant, serif', fontSize: 18,
            fontWeight: 300, fontStyle: 'italic',
            color: C.gold, letterSpacing: '0.04em', marginTop: -2,
          }}>
            Malabar
          </div>
        </a>

        {/* Desktop links */}
        <nav className="desk-only" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.58rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: scrolled ? 'rgba(58,53,47,0.65)' : 'rgba(243,240,235,0.6)',
              textDecoration: 'none', transition: 'color .3s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'rgba(58,53,47,0.65)' : 'rgba(243,240,235,0.6)')}
            >
              {l}
            </a>
          ))}
          <a href="#enquire" className="btn-gold" style={{ padding: '9px 20px', fontSize: '0.56rem' }}>
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
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 899,
              background: C.ivory, padding: '28px clamp(20px,5vw,72px)',
              borderBottom: '1px solid rgba(191,179,163,0.22)',
              display: 'flex', flexDirection: 'column', gap: 22,
            }}
          >
            {LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.charcoal, textDecoration: 'none',
              }}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
