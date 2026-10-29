import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, MessageSquare, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { PUBLIC_API_URL } from '../config';
import { CONTACT_PHONE_IN, SERVICES } from '../data/servicesData';

export default function LeadBookingModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'drone-shooting',
    budget: '₹50,000 - ₹1.5 Lakhs ($600 - $1,800)',
    timeline: 'Standard (2-3 Weeks)',
    notes: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sync state whenever modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      setSubmittedData(null);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceCategory: initialData?.selectedServices?.[0] || initialData?.serviceCategory || 'drone-shooting',
        budget: initialData?.totalUSD ? `$${initialData.totalUSD} / ₹${initialData.totalINR}` : (initialData?.budget || '₹50,000 - ₹1.5 Lakhs ($600 - $1,800)'),
        timeline: initialData?.urgency === 'rush' ? 'Priority Rush (<10 Days)' : (initialData?.timeline || 'Standard (2-3 Weeks)'),
        notes: initialData?.totalUSD
          ? `Locked in quote: $${initialData.totalUSD} (${initialData.totalINR} INR) for ${initialData.selectedServices?.join(', ')}`
          : (initialData?.notes || ''),
      });

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, initialData, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Calculate simulated qualification score based on inputs
    let score = 75;
    if (formData.phone) score += 10;
    if (formData.company) score += 5;
    if (formData.budget.includes('Lakhs') || formData.budget.includes('$1,800') || formData.budget.includes('5000')) score += 10;
    const tier = score >= 90 ? 'VIP Platinum' : score >= 80 ? 'High Priority' : 'Standard Priority';

    const submissionPayload = {
      ...formData,
      timestamp: new Date().toISOString(),
      qualification: { score, tier }
    };

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('growthhikes_leads') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('growthhikes_leads', JSON.stringify(existing));
    } catch {}

    // Dispatch to API if configured
    if (PUBLIC_API_URL) {
      try {
        await fetch(`${PUBLIC_API_URL}/api/leads`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload),
        });
      } catch (err) {
        console.warn('API sync deferred; lead saved locally', err);
      }
    }

    setTimeout(() => {
      setLoading(false);
      setSubmittedData(submissionPayload);
    }, 400);
  };

  const generateWhatsAppLink = () => {
    const rawNumber = CONTACT_PHONE_IN.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Hello GrowthHikes Team! 🚀\n\n` +
      `I've submitted a project proposal inquiry:\n` +
      `• Name: ${formData.name}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Service: ${formData.serviceCategory}\n` +
      `• Budget: ${formData.budget}\n` +
      `• Timeline: ${formData.timeline}\n` +
      (formData.notes ? `• Details: ${formData.notes}\n` : '') +
      `\nPlease review my scope and let me know when we can connect.`
    );
    return `https://wa.me/${rawNumber}?text=${text}`;
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000,
      background: 'rgba(5, 5, 10, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div className="glass-card" style={{
        maxWidth: '560px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative',
        background: '#12141e',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75)',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#cbd5e1',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {submittedData ? (
          /* Confirmation Success State */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
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

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(0, 200, 150, 0.1)',
              color: '#00c896',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}>
              <Sparkles size={12} />
              <span>{submittedData.qualification.tier} Assigned</span>
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
              Inquiry Confirmed!
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Thank you, <strong>{formData.name}</strong>. Your project scope has been dispatched to our engineering and flight directors. A representative will contact you via WhatsApp or phone within 4 business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={18} />
                <span>Continue on WhatsApp (+91 97080 01001)</span>
              </a>

              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ width: '100%', padding: '12px', borderRadius: '12px' }}
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Lead Booking Form */
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(0, 200, 150, 0.1)',
                color: '#00c896',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '10px',
              }}>
                <Sparkles size={12} />
                <span>DIRECT STRATEGY BOOKING</span>
              </div>
              <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                Schedule Growth Consultation
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Lock in project capacity with our certified drone pilots and senior software engineers.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="e.g. Sahil Rathee"
                    value={formData.name}
                    onChange={handleChange}
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="you@brand.com"
                    value={formData.email}
                    onChange={handleChange}
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="+91 97080 01001"
                    value={formData.phone}
                    onChange={handleChange}
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Apex Living"
                    value={formData.company}
                    onChange={handleChange}
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

              {/* Primary Service Vertical */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                  Primary Service Vertical
                </label>
                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: '#1a1d2e',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                  }}
                >
                  {SERVICES.map(svc => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} ({svc.startingPrice || svc.priceStarts})
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget & Timeline */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Target Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
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

              {/* Project Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
                  Project Scope & Goals
                </label>
                <textarea
                  rows={3}
                  name="notes"
                  placeholder="Tell us what you want to achieve, existing links, or shoot location details..."
                  value={formData.notes}
                  onChange={handleChange}
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
                  padding: '15px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginTop: '8px',
                }}
              >
                <Send size={18} />
                <span>{loading ? 'Submitting Proposal...' : 'Lock In Growth Consultation'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
