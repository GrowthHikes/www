import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, DollarSign, RefreshCw } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function QuotationCalculator({ onBookWithQuote }) {
  const [selectedServices, setSelectedServices] = useState(['drone-shooting', 'instagram-meta-management']);
  const [droneSessions, setDroneSessions] = useState(1);
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [urgency, setUrgency] = useState('standard');

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Comprehensive base pricing for all 14 services (in USD and INR)
  const servicePriceMap = {
    'drone-shooting': { usd: 350, inr: 14999 },
    'hyperlocal-seo': { usd: 250, inr: 9999 },
    'instagram-meta-management': { usd: 450, inr: 17999 },
    'paid-ads': { usd: 500, inr: 19999 },
    'ugc-creators': { usd: 300, inr: 12999 },
    'email-marketing': { usd: 300, inr: 11999 },
    'web-development': { usd: 600, inr: 24999 },
    'mobile-app-development': { usd: 1100, inr: 44999 },
    'whatsapp-bots': { usd: 350, inr: 14999 },
    'ai-support-agents': { usd: 500, inr: 19999 },
    'ai-calling-agents': { usd: 600, inr: 22999 },
    'ecommerce-mentorship': { usd: 600, inr: 25000 },
    'brand-ui-ux-design': { usd: 450, inr: 18999 },
    'analytics-attribution': { usd: 400, inr: 16999 },
  };

  // Calculate Subtotals
  let totalUSD = selectedServices.reduce((sum, id) => sum + (servicePriceMap[id]?.usd || 350), 0);
  let totalINR = selectedServices.reduce((sum, id) => sum + (servicePriceMap[id]?.inr || 14999), 0);

  // Extra drone sessions
  if (selectedServices.includes('drone-shooting') && droneSessions > 1) {
    totalUSD += (droneSessions - 1) * 200;
    totalINR += (droneSessions - 1) * 8000;
  }

  // Multi-service discount (>= 3 services gets 12% off)
  const isMultiService = selectedServices.length >= 3;
  if (isMultiService) {
    totalUSD = Math.round(totalUSD * 0.88);
    totalINR = Math.round(totalINR * 0.88);
  }

  // Urgency multiplier
  if (urgency === 'rush') {
    totalUSD = Math.round(totalUSD * 1.25);
    totalINR = Math.round(totalINR * 1.25);
  }

  return (
    <section id="calculator" style={{ padding: '90px 0', background: 'rgba(15, 17, 26, 0.7)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Calculator size={14} />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
            Transparent <span className="gradient-text">Project Quotation</span> Calculator
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Select any combination of marketing verticals, 4K drone shoots, and custom software. Toggle between INR (₹) and USD ($) for instant budget forecasting.
          </p>

          {/* Currency Toggle */}
          <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '10px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setCurrency('INR')}
              style={{
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                background: currency === 'INR' ? '#00c896' : 'transparent',
                color: currency === 'INR' ? '#fff' : '#94a3b8',
                cursor: 'pointer',
              }}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '6px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                background: currency === 'USD' ? '#00c896' : 'transparent',
                color: currency === 'USD' ? '#fff' : '#94a3b8',
                cursor: 'pointer',
              }}
            >
              🇺🇸 USD ($)
            </button>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Left Column: 14 Service Module Chips */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                1. Select Service Modules
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#00c896', fontWeight: 700, background: 'rgba(0, 200, 150, 0.1)', padding: '2px 10px', borderRadius: '12px' }}>
                {selectedServices.length} Selected
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', maxHeight: '520px', overflowY: 'auto', paddingRight: '4px' }}>
              {SERVICES.map(service => {
                const isSelected = selectedServices.includes(service.id);
                const priceData = servicePriceMap[service.id] || { usd: 350, inr: 14999 };
                const displayPrice = currency === 'INR' ? `₹${priceData.inr.toLocaleString()}` : `$${priceData.usd}`;

                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: isSelected ? 'rgba(0, 200, 150, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid #00c896' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        background: isSelected ? '#00c896' : 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {isSelected && <Check size={14} color="#ffffff" />}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#fff' : '#cbd5e1' }}>
                        {service.title}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.85rem', color: isSelected ? '#00c896' : '#64748b', fontWeight: 700, flexShrink: 0, marginLeft: '8px' }}>
                      {displayPrice}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Drone Sessions Slider (if drone selected) */}
            {selectedServices.includes('drone-shooting') && (
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(0, 200, 150, 0.06)', borderRadius: '12px', border: '1px solid rgba(0, 200, 150, 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>
                    Drone Flight Sessions / Locations:
                  </label>
                  <strong style={{ color: '#00c896', fontSize: '0.95rem' }}>{droneSessions} {droneSessions === 1 ? 'Day' : 'Days'}</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={droneSessions}
                  onChange={(e) => setDroneSessions(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#00c896', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
                  Includes 4K 60fps raw files, indoor CineWhoop flights, and licensed commercial pilot insurance.
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Live Estimate Card */}
          <div className="glass-card" style={{ padding: '32px', position: 'sticky', top: '90px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="badge">Scope Estimate</span>
              {isMultiService && (
                <span style={{ fontSize: '0.78rem', color: '#00c896', fontWeight: 700, background: 'rgba(0, 200, 150, 0.15)', padding: '3px 8px', borderRadius: '6px' }}>
                  ✨ 12% Multi-Module Discount
                </span>
              )}
            </div>

            <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Estimated Investment:</span>
              <div style={{ fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
                {currency === 'INR' ? `₹${totalINR.toLocaleString()}` : `$${totalUSD.toLocaleString()}`}
              </div>
              <div style={{ fontSize: '0.95rem', color: '#00c896', fontWeight: 600, marginTop: '6px' }}>
                {currency === 'INR' ? `Approx. $${totalUSD.toLocaleString()} USD` : `Approx. ₹${totalINR.toLocaleString()} INR`}
              </div>
            </div>

            {/* Urgency Selector */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Project Turnaround Timeline:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  style={{
                    flex: 1,
                    padding: '10px 8px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: urgency === 'standard' ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: urgency === 'standard' ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: urgency === 'standard' ? '#00c896' : '#94a3b8',
                  }}
                >
                  Standard Sprint (2-3 Weeks)
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('rush')}
                  style={{
                    flex: 1,
                    padding: '10px 8px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: urgency === 'rush' ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: urgency === 'rush' ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: urgency === 'rush' ? '#00c896' : '#94a3b8',
                  }}
                >
                  Priority Fast-Track (&lt;10 Days)
                </button>
              </div>
            </div>

            {/* Inclusions */}
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px',
              fontSize: '0.82rem',
              color: '#cbd5e1',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#00c896" />
                <span>Dedicated Technical Project Director</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#00c896" />
                <span>DGCA pilot permissions & liability insurance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#00c896" />
                <span>Weekly sprint reviews & automated analytics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#00c896" />
                <span>Full IP transfer & NDA protection</span>
              </div>
            </div>

            <button
              onClick={() => onBookWithQuote({
                selectedServices,
                totalUSD,
                totalINR,
                currency,
                urgency,
                droneSessions
              })}
              className="btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
            >
              <span>Lock In This Quotation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
