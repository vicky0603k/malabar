import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3600);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: EASE }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: C.ink,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Ambient orb */}
      <div className="orb" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(198,164,90,0.06) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      }} />

      {/* Ghost monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(80px,14vw,160px)',
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(198,164,90,0.18)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          position: 'absolute',
          userSelect: 'none',
        }}
      >
        RM
      </motion.div>

      {/* Wordmark */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.58rem',
            letterSpacing: '0.38em',
            color: 'rgba(216,206,192,0.4)',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          Runwal Presents
        </motion.div>

        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,6vw,72px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.ivory,
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}
          >
            Malabar
          </motion.div>
        </div>

        {/* Expanding gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.6, ease: EASE }}
          style={{
            height: 1,
            background: C.gold,
            marginTop: 28,
            transformOrigin: 'left',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            letterSpacing: '0.3em',
            color: 'rgba(216,206,192,0.28)',
            textTransform: 'uppercase',
            marginTop: 18,
          }}
        >
          Malabar Hill · Mumbai
        </motion.div>
      </div>
    </motion.div>
  );
}
