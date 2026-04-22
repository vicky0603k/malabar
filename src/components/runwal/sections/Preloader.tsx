import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Colors as C } from '../types';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 3400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        background: C.ivory,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        <div
          className="rm-font-display"
          style={{
            fontSize: 'clamp(22px, 3vw, 38px)',
            fontWeight: 400,
            color: C.charcoal,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          RUNWAL
        </div>
        <div
          className="rm-font-serif"
          style={{
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.gold,
            letterSpacing: '0.04em',
            marginTop: '-6px',
            lineHeight: 1,
          }}
        >
          Malabar
        </div>
      </motion.div>

      {/* Expanding gold line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100px' }}
        transition={{ duration: 2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '1px', background: C.gold, marginTop: '36px' }}
      />

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.8 }}
        style={{
          marginTop: '22px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.32em',
          color: C.taupe,
          textTransform: 'uppercase',
        }}
      >
        Malabar Hill · Mumbai
      </motion.div>
    </motion.div>
  );
}
