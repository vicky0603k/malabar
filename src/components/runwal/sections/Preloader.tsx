// Preloader — light ivory, minimal, premium
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { C, EASE } from '../tokens';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: EASE }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: C.ivory,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ghost monogram */}
      <div style={{
        position: 'absolute',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(120px,18vw,220px)',
        fontWeight: 300,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(198,164,90,0.1)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        userSelect: 'none',
      }}>
        RM
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.54rem',
            letterSpacing: '0.4em',
            color: C.taupe,
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
            transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px,6vw,72px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.charcoal,
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            Malabar
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
          style={{
            height: 1,
            background: C.gold,
            marginTop: 22,
            transformOrigin: 'left',
            opacity: 0.55,
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.5rem',
            letterSpacing: '0.3em',
            color: C.taupe,
            textTransform: 'uppercase',
            marginTop: 14,
            opacity: 0.6,
          }}
        >
          Malabar Hill · Mumbai
        </motion.div>
      </div>
    </motion.div>
  );
}
