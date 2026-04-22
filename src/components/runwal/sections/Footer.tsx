import React from 'react';
import { C } from '../tokens';

export default function Footer() {
  return (
    <footer style={{
      background: C.ink,
      padding: 'clamp(40px,5vw,64px) clamp(24px,6vw,96px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ width: '100%', height: 1, background: 'rgba(191,179,163,0.1)', marginBottom: 40 }} />

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: 32,
        marginBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: 10,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(243,240,235,0.5)', marginBottom: 2,
          }}>
            RUNWAL
          </div>
          <div style={{
            fontFamily: 'Cormorant, serif', fontSize: 20,
            fontWeight: 300, fontStyle: 'italic',
            color: C.gold, letterSpacing: '0.04em',
          }}>
            Malabar
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
            letterSpacing: '0.1em', color: 'rgba(191,179,163,0.4)',
            lineHeight: 1.8, marginTop: 12,
          }}>
            Next to the Governor's Estate<br />
            Malabar Hill, Mumbai — 400 006
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          <a href="#enquire" className="btn-gold" style={{
            borderColor: 'rgba(184,149,76,0.4)', color: C.ivory,
            padding: '10px 22px', fontSize: '0.56rem',
          }}>
            Book a Private Preview
          </a>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.56rem',
            letterSpacing: '0.12em', color: 'rgba(191,179,163,0.3)',
          }}>
            By appointment only
          </span>
        </div>
      </div>

      <div style={{ width: '100%', height: 1, background: 'rgba(191,179,163,0.07)', marginBottom: 20 }} />

      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.5rem',
        fontWeight: 300, color: 'rgba(191,179,163,0.25)',
        letterSpacing: '0.05em', lineHeight: 1.7, maxWidth: 680,
      }}>
        This communication is for information purposes only and does not constitute an offer or agreement. All images, renders, and specifications are indicative and subject to change. RERA registration details to be updated. Runwal Realty Pvt. Ltd. reserves all rights. © 2025 Runwal Malabar.
      </p>
    </footer>
  );
}
