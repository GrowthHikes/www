import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function QuotationCalculator({ onBookWithQuote }) {
  const [selectedServices, setSelectedServices] = useState(['drone-shooting', 'instagram-meta-management']);
  const [droneSessions, setDroneSessions] = useState(1);
  const [includeVoiceBot, setIncludeVoiceBot] = useState(true);
  const [urgency, setUrgency] = useState('standard');

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Base pricing logic
  const servicePriceMap = {
    'drone-shooting': 350,
    'local-marketing': 400,
    'instagram-meta-management': 600,
    'chatbots': 300,
    'whatsapp-bots': 350,
    'website-development': 500,
    'mobile-app-development': 1500,
    'ai-support-agents': 250,
    'ai-calling-agents': 450,
    'modern-growth-services': 800,
  };

  let totalUSD = selectedServices.reduce((sum, id) => sum + (servicePriceMap[id] || 300), 0);
  if (selectedServices.includes('drone-shooting') && droneSessions > 1) {
    totalUSD += (droneSessions - 1) * 250;
  }
  if (includeVoiceBot && !selectedServices.includes('ai-calling-agents')) {
    totalUSD += 450;
  }
  if (urgency === 'rush') {
    totalUSD = Math.round(totalUSD * 1.25);
  }

  const totalINR = totalUSD * 83;

  return (
    <section id="calculator" style={{ padding: '80px 0', background: 'rgba(18, 20, 30, 0.6)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Calculator size={14} />
            <span>Instant Estimator</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Transparent <span className="gradient-text">Project Quotation</span> Calculator
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Mix and match marketing verticals and software modules. Get real-time cost estimates in USD and INR.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Left: Service Selection Chips */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>1. Choose Service Modules</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({selectedServices.length} selected)</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {SERVICES.map(service => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid #6366f1' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        background: isSelected ? '#6366f1' : 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {isSelected && <Check size={14} color="#ffffff" />}
                      </div>
                      <span style={{ fontSize: '0.92rem', fontWeight: isSelected ? 600 : 400 }}>
                        {service.title}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: isSelected ? '#818cf8' : 'var(--text-muted)', fontWeight: 600 }}>
                      ~${servicePriceMap[service.id]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Drone options if drone selected */}
            {selectedServices.includes('drone-shooting') && (
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  Drone Shoot Sessions / Locations: <strong>{droneSessions}</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={droneSessions}
                  onChange={(e) => setDroneSessions(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#6366f1' }}
                />
              </div>
            )}
          </div>

          {/* Right: Summary & Action */}
          <div className="glass-card" style={{ padding: '32px', position: 'sticky', top: '90px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="badge">Summary Breakdown</span>
              {selectedServices.length >= 3 && (
                <span style={{ fontSize: '0.78rem', color: '#4ade80', fontWeight: 600 }}>
                  ✨ 15% Multi-service discount applied
                </span>
              )}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Investment:</div>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1 }}>
                ${totalUSD.toLocaleString()}
              </div>
              <div style={{ fontSize: '1.1rem', color: '#22d3ee', fontWeight: 600 }}>
                ₹{totalINR.toLocaleString()} INR
              </div>
            </div>

            {/* Urgency selection */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                Project Timeline:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: urgency === 'standard' ? '#6366f1' : 'rgba(255,255,255,0.05)',
                    color: '#fff',
                  }}
                >
                  Standard (2-4 Weeks)
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('rush')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: urgency === 'rush' ? '#6366f1' : 'rgba(255,255,255,0.05)',
                    color: '#fff',
                  }}
                >
                  Priority Rush (&lt;10 Days)
                </button>
              </div>
            </div>

            {/* Inclusions summary */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '10px',
              padding: '16px',
              marginBottom: '24px',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <div>✓ Dedicated GrowthHikes project manager</div>
              <div>✓ DGCA certified drone pilot insurance (if drone selected)</div>
              <div>✓ Continuous monitoring & performance analytics</div>
              <div>✓ Sibling synergy with Infortts & NaiBooking platforms</div>
            </div>

            <button
              onClick={() => onBookWithQuote({ selectedServices, totalUSD, totalINR, urgency, droneSessions })}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
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
