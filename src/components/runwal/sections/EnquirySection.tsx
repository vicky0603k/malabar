// ENQUIRY — Ivory. Editorial form layout. Fields are typographic, not boxed.
// Headline is large and asymmetric. Form feels designed, not generated.
import React, { useState } from 'react';
import { C } from '../tokens';
import { ClipReveal, FadeUp, LineReveal } from '../shared';

const OPTIONS = ['Sky Mansion — Full Floor', 'Penthouse Collection', 'Duplex Sky Suite', 'Prefer to Discuss'];

export default function EnquirySection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' });
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="enquire" style={{
      minHeight: '100vh', background: C.ivory,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      <div className="monogram" style={{
        fontSize: 'clamp(160px,22vw,300px)',
        right: '-40px', bottom: '-40px',
        WebkitTextStroke: '1px rgba(184,149,76,0.045)',
      }}>RM</div>

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%',
        padding: 'clamp(80px,12vw,160px) clamp(24px,6vw,96px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(48px,7vw,100px)',
        alignItems: 'start',
      }}>
        {/* Left — headline */}
        <div>
          <FadeUp delay={0.05}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
              <LineReveal width={36} delay={0.1} />
              <span className="eyebrow">Private Enquiry</span>
            </div>
          </FadeUp>

          <ClipReveal delay={0.15}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.charcoal, lineHeight: 1.1, marginBottom: 8,
            }}>
              Own a horizon
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.25}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 300, fontStyle: 'italic',
              color: C.gold, lineHeight: 1.1,
            }}>
              few will ever know.
            </h2>
          </ClipReveal>

          <FadeUp delay={0.4} style={{ marginTop: 36 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
              fontWeight: 300, color: 'rgba(58,53,47,0.55)',
              lineHeight: 1.9, maxWidth: 340, letterSpacing: '0.03em',
            }}>
              Private previews by appointment only. Enquire for floor plans, brochure access, and a confidential consultation.
            </p>
          </FadeUp>

          {/* Contact CTAs */}
          <FadeUp delay={0.55} style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
                letterSpacing: '0.2em', color: C.taupe,
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'color .3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = C.taupe)}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href="tel:+919999999999"
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                fontFamily: 'Inter, sans-serif', fontSize: '0.6rem',
                letterSpacing: '0.2em', color: C.taupe,
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'color .3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = C.taupe)}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Us
            </a>
          </FadeUp>
        </div>

        {/* Right — form */}
        <FadeUp delay={0.3}>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { name: 'name',  label: 'Full Name',  type: 'text',  placeholder: 'Your full name' },
              { name: 'phone', label: 'Phone',       type: 'tel',   placeholder: '+91 00000 00000' },
              { name: 'email', label: 'Email',       type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.name} style={{ marginBottom: 32 }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.52rem',
                  letterSpacing: '0.28em', color: C.taupe,
                  textTransform: 'uppercase', marginBottom: 8,
                }}>
                  {f.label}
                </label>
                <input
                  className="lux-input"
                  type={f.type} name={f.name}
                  placeholder={f.placeholder}
                  value={(form as any)[f.name]}
                  onChange={set}
                />
              </div>
            ))}

            <div style={{ marginBottom: 32 }}>
              <label style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif', fontSize: '0.52rem',
                letterSpacing: '0.28em', color: C.taupe,
                textTransform: 'uppercase', marginBottom: 8,
              }}>
                Preferred Residence
              </label>
              <select className="lux-input" name="interest" value={form.interest} onChange={set}
                style={{ cursor: 'pointer', appearance: 'none' as any }}>
                <option value="" disabled>Select interest</option>
                {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 48 }}>
              <label style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif', fontSize: '0.52rem',
                letterSpacing: '0.28em', color: C.taupe,
                textTransform: 'uppercase', marginBottom: 8,
              }}>
                Message
              </label>
              <textarea
                className="lux-textarea"
                name="message" rows={3}
                placeholder="Your enquiry or preferred time for a consultation..."
                value={form.message} onChange={set}
              />
            </div>

            <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start' }}>
              Schedule a Private Consultation
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
