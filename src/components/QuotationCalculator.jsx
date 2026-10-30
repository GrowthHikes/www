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

  // Base pricing for all 14 services (in USD and INR)
  const servicePriceMap = {
    'drone-shooting': { usd: 350, inr: 14999 },
    'hyperlocal-seo': { usd: 250, inr: 9999 },
    'instagram-meta-management': { usd: 450, inr: 17999 },
    'paid-ads': { usd: 500, inr: 19999 },
    'ugc-creators': { usd: 300, inr: 12999 },
    'email-marketing': { usd: 300, inr: 11999 },
    'web-development': { usd: 600, inr: 24999 },
    'mobile-apps': { usd: 900, inr: 34999 },
    'ai-support-agents': { usd: 400, inr: 16999 },
    'ai-calling-agents': { usd: 550, inr: 22999 },
    'custom-software': { usd: 800, inr: 32999 },
    'chatbots': { usd: 350, inr: 14999 },
    'whatsapp-api-bots': { usd: 400, inr: 16999 },
    'ecommerce-coaching': { usd: 450, inr: 18999 },
  };

  // Calculate Subtotals
  let totalUSD = selectedServices.reduce((acc, id) => {
    return acc + (servicePriceMap[id]?.usd || 350);
  }, 0);

  let totalINR = selectedServices.reduce((acc, id) => {
    return acc + (servicePriceMap[id]?.inr || 14999);
  }, 0);

  // Drone session multiplier
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
    <section id="calculator" style={{
      padding: '96px 0',
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#059669',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}>
            <Calculator size={14} />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800,
            color: '#09090b',
            marginBottom: '14px',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em',
          }}>
            Transparent <span style={{ color: '#059669' }}>Project Quotation</span> Calculator
          </h2>
          <p style={{
            color: '#475569',
            maxWidth: '640px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}>
            Select any combination of marketing verticals, 4K drone shoots, and custom software. Toggle between INR (₹) and USD ($) for instant budget forecasting.
          </p>

          {/* Currency Toggle */}
          <div style={{
            display: 'inline-flex',
            background: '#f1f5f9',
            padding: '4px',
            borderRadius: '12px',
            marginTop: '22px',
            border: '1px solid #e2e8f0',
          }}>
            <button
              onClick={() => setCurrency('INR')}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                background: currency === 'INR' ? '#09090b' : 'transparent',
                color: currency === 'INR' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                background: currency === 'USD' ? '#09090b' : 'transparent',
                color: currency === 'USD' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
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
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#09090b', fontFamily: 'var(--font-display)' }}>
                1. Select Service Modules
              </h3>
              <span style={{
                fontSize: '0.82rem',
                color: '#059669',
                fontWeight: 700,
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '3px 12px',
                borderRadius: '9999px',
              }}>
                {selectedServices.length} Selected
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', maxHeight: '520px', overflowY: 'auto', paddingRight: '4px' }}>
              {SERVICES.map(service => {
                const isSelected = selectedServices.includes(service.id);
                const priceData = servicePriceMap[service.id] || { usd: 350, inr: 14999 };
                const displayPrice = currency === 'INR' ? `₹${priceData.inr.toLocaleString()}` : `$${priceData.usd}`;

                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: '13px 18px',
                      borderRadius: '12px',
                      background: isSelected ? '#ecfdf5' : '#ffffff',
                      border: isSelected ? '1px solid #10b981' : '1px solid #e2e8f0',
                      boxShadow: isSelected ? '0 4px 12px rgba(16, 185, 129, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.02)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '6px',
                        background: isSelected ? '#10b981' : '#f1f5f9',
                        border: isSelected ? 'none' : '1px solid #cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {isSelected && <Check size={14} color="#ffffff" />}
                      </div>
                      <span style={{
                        fontSize: '0.92rem',
                        fontWeight: isSelected ? 700 : 600,
                        color: isSelected ? '#065f46' : '#1e293b',
                      }}>
                        {service.title}
                      </span>
                    </div>

                    <span style={{
                      fontSize: '0.88rem',
                      color: isSelected ? '#059669' : '#64748b',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}>
                      {displayPrice}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Drone Sessions Slider (if drone selected) */}
            {selectedServices.includes('drone-shooting') && (
              <div style={{
                marginTop: '22px',
                padding: '18px',
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 700 }}>
                    Drone Flight Sessions / Locations:
                  </label>
                  <strong style={{ color: '#059669', fontSize: '1rem', fontWeight: 800 }}>
                    {droneSessions} {droneSessions === 1 ? 'Day' : 'Days'}
                  </strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={droneSessions}
                  onChange={(e) => setDroneSessions(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', marginTop: '6px' }}>
                  Includes 4K 60fps raw files, indoor CineWhoop flights, and licensed commercial pilot insurance.
                </span>
              </div>
            )}
          </div>

          {/* Right Column: High-Impact Solid Black Summary Card */}
          <div style={{
            background: '#09090b',
            border: '1px solid #27272a',
            borderRadius: '20px',
            padding: '34px',
            position: 'sticky',
            top: '90px',
            boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.35)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#f8fafc',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                Scope Estimate
              </span>
              {isMultiService && (
                <span style={{
                  fontSize: '0.8rem',
                  color: '#10b981',
                  fontWeight: 700,
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                }}>
                  ✨ 12% Multi-Module Discount
                </span>
              )}
            </div>

            <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                Estimated Investment:
              </span>
              <div style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
              }}>
                {currency === 'INR' ? `₹${totalINR.toLocaleString()}` : `$${totalUSD.toLocaleString()}`}
              </div>
              <div style={{ fontSize: '0.95rem', color: '#10b981', fontWeight: 600, marginTop: '6px' }}>
                {currency === 'INR' ? `Approx. $${totalUSD.toLocaleString()} USD` : `Approx. ₹${totalINR.toLocaleString()} INR`}
              </div>
            </div>

            {/* Urgency Selector */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.84rem', color: '#e2e8f0', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
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
                    background: urgency === 'standard' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: urgency === 'standard' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.12)',
                    color: urgency === 'standard' ? '#10b981' : '#cbd5e1',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Standard Sprint (2-3 Wks)
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
                    background: urgency === 'rush' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: urgency === 'rush' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.12)',
                    color: urgency === 'rush' ? '#10b981' : '#cbd5e1',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Priority (&lt;10 Days)
                </button>
              </div>
            </div>

            {/* Inclusions */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '18px',
              marginBottom: '26px',
              fontSize: '0.82rem',
              color: '#cbd5e1',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#10b981" />
                <span>Dedicated Technical Project Director</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#10b981" />
                <span>DGCA pilot permissions & liability insurance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#10b981" />
                <span>Weekly sprint reviews & automated analytics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#10b981" />
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
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '1rem',
                fontWeight: 700,
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px rgba(16, 185, 129, 0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#059669';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#10b981';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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
