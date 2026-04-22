import React from 'react';
import { Colors as C } from '../types';

export default function Footer() {
  return (
    <footer
      style={{
        background: C.charcoal,
        padding: 'clamp(40px, 6vw, 72px) clamp(24px, 7vw, 112px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top rule */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(191,179,163,0.15)', marginBottom: '48px' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '48px',
        }}
      >
        {/* Brand */}
        <div>
          <div
            className="rm-font-display"
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: C.ivory,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}
          >
            RUNWAL
          </div>
          <div
            className="rm-font-serif"
            style={{
              fontSize: '22px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: C.gold,
              letterSpacing: '0.04em',
              marginTop: '-2px',
            }}
          >
            Malabar
          </div>
          <div
            style={{
              marginTop: '16px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              color: 'rgba(191,179,163,0.55)',
              lineHeight: 1.8,
            }}
          >
            Next to the Governor's Estate<br />
            Malabar Hill, Mumbai — 400 006
          </div>
        </div>

        {/* Location */}
        <div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.28em',
              color: C.gold,
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: 0.7,
            }}
          >
            Location
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 300,
              color: 'rgba(243,240,235,0.55)',
              lineHeight: 1.9,
              letterSpacing: '0.04em',
            }}
          >
            Malabar Hill<br />
            Mumbai, Maharashtra<br />
            India — 400 006
          </div>
        </div>

        {/* Enquiry */}
        <div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.28em',
              color: C.gold,
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: 0.7,
            }}
          >
            Private Enquiry
          </div>
          <a
            href="#enquire"
            className="rm-btn-dark"
            style={{ padding: '10px 22px', fontSize: '0.58rem', display: 'inline-flex' }}
          >
            Book a Preview
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(191,179,163,0.1)', marginBottom: '24px' }} />

      {/* Legal */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            fontWeight: 300,
            color: 'rgba(191,179,163,0.35)',
            letterSpacing: '0.06em',
            lineHeight: 1.7,
            maxWidth: '680px',
          }}
        >
          This communication is for information purposes only and does not constitute an offer or agreement. All images, renders, and specifications are indicative and subject to change. RERA registration details to be updated. Runwal Realty Pvt. Ltd. reserves all rights.
        </p>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.52rem',
            color: 'rgba(191,179,163,0.25)',
            letterSpacing: '0.08em',
          }}
        >
          © 2025 Runwal Malabar
        </span>
      </div>
    </footer>
  );
}
