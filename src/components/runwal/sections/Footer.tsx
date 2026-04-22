// Footer — light beige, minimal, clean. No dark background.
import React from 'react';
import { C } from '../tokens';

export default function Footer() {
  return (
    <footer style={{
      background: C.beige,
      padding: 'clamp(40px,5vw,64px) clamp(24px,6vw,96px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ width: '100%', height: 1, background: C.line, marginBottom: 40 }} />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 32,
        marginBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: C.taupe,
            marginBottom: 2,
          }}>
            RUNWAL
          </div>
          <div style={{
            fontFamily: 'Cormorant, serif',
            fontSize: 20,
            fontWeight: 300,
            fontStyle: 'italic',
            color: C.gold,
            letterSpacing: '0.04em',
          }}>
            Malabar
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: C.taupe,
            lineHeight: 1.8,
            marginTop: 12,
          }}>
            Next to the Governor's Estate<br />
            Malabar Hill, Mumbai — 400 006
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          <a href="#enquire" className="btn-gold" style={{ padding: '10px 22px', fontSize: '0.54rem' }}>
            Book a Private Preview
          </a>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.54rem',
            letterSpacing: '0.12em',
            color: C.taupe,
          }}>
            By appointment only
          </span>
        </div>
      </div>

      <div style={{ width: '100%', height: 1, background: C.line, opacity: 0.5, marginBottom: 20 }} />

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.5rem',
        fontWeight: 300,
        color: C.taupe,
        letterSpacing: '0.05em',
        lineHeight: 1.7,
        maxWidth: 680,
        opacity: 0.7,
      }}>
        This communication is for information purposes only and does not constitute an offer or agreement. All images, renders, and specifications are indicative and subject to change. RERA registration details to be updated. Runwal Realty Pvt. Ltd. reserves all rights. © 2025 Runwal Malabar.
      </p>
    </footer>
  );
}
