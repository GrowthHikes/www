import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Instagram, ShieldCheck, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { CONTACT_PHONE_IN, CONTACT_PHONE_US, INSTAGRAM_URL, INSTAGRAM_HANDLE, SERVICES_CATALOG } from '../data/servicesData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$1,000 - $3,000 / ₹75k - ₹2.5L',
    services: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const budgetTiers = [
    '< ₹50,000 / $600 (Quick Sprint / Single Shoot)',
    '₹50,000 - ₹1.5 Lakhs / $600 - $1,800',
    '₹1.5 Lakhs - ₹5 Lakhs / $1,800 - $6,000',
    '₹5 Lakhs+ / $6,000+ (Full Studio Retainer)',
  ];

  const handleToggleService = (serviceId) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceId);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceId)
          : [...prev.services, serviceId],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission or connect to webhook
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(0, 200, 150, 0.1) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 200, 150, 0.1)',
            border: '1px solid rgba(0, 200, 150, 0.3)',
            color: '#00c896',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>LET’S CONNECT</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}>
            Speak Directly with Our Growth Directors
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto',
          }}>
            Whether you need a shoot scheduled next week, a full Next.js rebuild, or an autonomous AI telephony agent deployed—we respond within 4 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Hotlines + Contact Form */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}>
            {/* Direct Hotlines & Location Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* India Hotline */}
              <div style={{
                background: 'rgba(18, 20, 30, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 200, 150, 0.15)',
                    color: '#00c896',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>India Operations & Production</span>
                    <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800 }}>{CONTACT_PHONE_IN}</h3>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Direct line to our flight planning desk, drone logistics, local SEO teams, and domestic client managers.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={`tel:${CONTACT_PHONE_IN.replace(/\s+/g, '')}`}
                    className="btn-primary"
                    style={{ padding: '8px 18px', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_PHONE_IN.replace(/\D/g, '')}?text=Hi%20GrowthHikes%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '8px 18px', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* USA Hotline */}
              <div style={{
                background: 'rgba(18, 20, 30, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#818cf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>North America Desk</span>
                    <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800 }}>{CONTACT_PHONE_US}</h3>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Direct coordination for US-based clients, Meta CAPI setups, Next.js contract engineering, and USD invoicing.
                </p>
                <a
                  href={`tel:${CONTACT_PHONE_US.replace(/\D/g, '')}`}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-block' }}
                >
                  Call US Desk
                </a>
              </div>

              {/* Email & Studio Info */}
              <div style={{
                background: 'rgba(18, 20, 30, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={18} color="#00c896" />
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block' }}>Email Inquiries</span>
                      <strong style={{ color: '#fff', fontSize: '0.95rem' }}>contact@growthhikes.com</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Instagram size={18} color="#fb7185" />
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block' }}>Official Instagram</span>
                      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#fb7185', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                        {INSTAGRAM_HANDLE}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Clock size={18} color="#facc15" />
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block' }}>Operating Hours</span>
                      <span style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>24/7 Asynchronous Lab • Phone lines 9am - 9pm IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Consultation Request Form */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(0, 200, 150, 0.15)',
                    color: '#00c896',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>
                    Consultation Request Received!
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. A GrowthHikes technical director will review your project scope and contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                      Request a Project Proposal
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                      Fill in your specifications and we will prepare a milestone roadmap.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sahil Rathee"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#fff',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#fff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97080 01001"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#fff',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>Company / Brand</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Living"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#fff',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Target Services multi-select tags */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '8px' }}>
                      Select Interested Verticals
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {SERVICES_CATALOG.slice(0, 8).map((svc) => {
                        const selected = formData.services.includes(svc.id);
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => handleToggleService(svc.id)}
                            style={{
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border: selected ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.1)',
                              background: selected ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                              color: selected ? '#00c896' : '#94a3b8',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {svc.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: '#181b29',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fff',
                        outline: 'none',
                      }}
                    >
                      {budgetTiers.map((b, idx) => (
                        <option key={idx} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>Project Summary & Goals</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you want to achieve, timelines, or links to existing pages/code..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fff',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      marginTop: '8px',
                    }}
                  >
                    <Send size={18} />
                    <span>{loading ? 'Submitting...' : 'Send Consultation Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
