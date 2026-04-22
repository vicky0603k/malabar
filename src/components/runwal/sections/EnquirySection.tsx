import React, { useState } from 'react';
import { Colors as C } from '../types';
import { Reveal, Eyebrow, DisplayHeading } from '../shared';

const RESIDENCE_OPTIONS = [
  'Sky Mansion — Full Floor',
  'Penthouse Collection',
  'Duplex Sky Suite',
  'Prefer to Discuss',
];

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler
  };

  return (
    <section
      id="enquire"
      className="rm-section"
      style={{
        background: C.ivory,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 7vw, 112px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Monogram */}
      <div
        className="rm-monogram"
        style={{
          right: '-60px',
          bottom: '-60px',
          WebkitTextStroke: '1px rgba(184,149,76,0.05)',
          fontSize: 'clamp(160px, 22vw, 300px)',
        }}
      >
        RM
      </div>

      {/* Decorative frames */}
      <div className="rm-gold-frame" style={{ top: '60px', left: '60px', width: '160px', height: '160px', opacity: 0.18 }} />
      <div className="rm-gold-frame" style={{ top: '72px', left: '72px', width: '136px', height: '136px', opacity: 0.08 }} />

      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Reveal>
            <Eyebrow label="Private Enquiry" />
          </Reveal>

          <Reveal delay={0.1}>
            <DisplayHeading style={{ marginBottom: '20px' }}>
              Own a horizon few<br />will ever know.
            </DisplayHeading>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: C.taupe,
                letterSpacing: '0.1em',
                lineHeight: 1.8,
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              Private previews by appointment only.<br />
              Enquire for floor plans, brochure access, and a confidential consultation.
            </p>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.3}>
          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0 48px',
                marginBottom: '8px',
              }}
            >
              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.28em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Full Name
                </label>
                <input
                  className="rm-input"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.28em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Phone
                </label>
                <input
                  className="rm-input"
                  type="tel"
                  name="phone"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0 48px',
                marginBottom: '8px',
              }}
            >
              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.28em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </label>
                <input
                  className="rm-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.28em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Preferred Residence
                </label>
                <select
                  className="rm-input"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  style={{ cursor: 'pointer', appearance: 'none' }}
                >
                  <option value="" disabled>Select interest</option>
                  {RESIDENCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '48px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.55rem',
                  letterSpacing: '0.28em',
                  color: C.taupe,
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Message
              </label>
              <textarea
                className="rm-textarea"
                name="message"
                placeholder="Your enquiry or preferred time for a consultation..."
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* Primary CTA */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '28px',
              }}
            >
              <button type="submit" className="rm-btn" style={{ minWidth: '280px', justifyContent: 'center' }}>
                Schedule a Private Consultation
              </button>

              {/* Secondary CTAs */}
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.taupe)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                <span style={{ display: 'block', width: '1px', height: '14px', background: C.taupe, opacity: 0.3 }} />

                <a
                  href="tel:+919999999999"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: C.taupe,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.taupe)}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
