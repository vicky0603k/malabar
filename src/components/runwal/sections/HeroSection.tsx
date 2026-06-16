// HERO — Pure image banner. No text. No CTAs. No overlays.
// Full-screen clean luxury visual only.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// tokens not needed — pure image section

export default function HeroSection({ ready: _ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        height: '100vh',
        minHeight: 600,
        maxHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#1a1712',
      }}
    >

      <motion.div style={{ position: 'absolute', inset: 0, y: imgY }}>
        <img
          src="https://static.wixstatic.com/media/cef78c_bafafa24a91d40a99cf1a0495d2470f7~mv2.jpg"
          alt="Runwal Malabar"
          style={{
            width: '100%',
            height: '115%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        />
      </motion.div>
    </section>
  );
}