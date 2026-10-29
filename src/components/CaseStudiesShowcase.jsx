import React, { useState } from 'react';
import SideLabel from './SideLabel';
import { ArrowRight, CheckCircle2, TrendingUp, Star } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/servicesData';

const CASE_STUDIES = [
  {
    id: 1,
    client: 'AeroVue Luxury Estates',
    industry: 'Real Estate & Hospitality',
    tag: '4K FPV Drone Cinematography & Reels',
    year: '2025 – 2026',
    desc: 'Produced an ultra-high-definition 4K FPV indoor-outdoor flythrough showcase for ultra-luxury villas in North Goa. Cut into 15 episodic viral Instagram reels that garnered 1.8M organic views and directly facilitated 3 villa sales within 45 days.',
    metric: '1.8M+',
    metricLabel: 'Organic Views',
    submetric: '3 Villas Sold',
    quote: '"GrowthHikes brought movie-quality cinematography into our property listings. The drone precision and rapid edits drove buyers from Mumbai and Dubai directly into our WhatsApp inbox."',
    author: 'Kabir Singhania, Managing Director',
  },
  {
    id: 2,
    client: 'FinVertex Technologies',
    industry: 'Fintech & B2B SaaS',
    tag: 'Autonomous AI Agents & Funnel Automation',
    year: '2025',
    desc: 'Deployed an autonomous multi-agent WhatsApp & Web lead triage system connected to HubSpot. The AI answers regulatory questions, verifies business PAN/GST credentials in real time, and books calendar meetings without human rep intervention.',
    metric: '68%',
    metricLabel: 'Reduction in Response Time',
    submetric: '3.4x Pipeline Increase',
    quote: '"We used to lose 40% of evening inbound leads. GrowthHikes’ AI agent qualifies and sets up demos 24/7 with zero lag. Our sales team only hops on qualified calls."',
    author: 'Neha Roy, Head of Growth',
  },
  {
    id: 3,
    client: 'DentalWorks Prime Clinics',
    industry: 'Multi-Location Healthcare',
    tag: 'Hyper-Local SEO & Google Maps Dominance',
    year: '2025',
    desc: 'Architected local citation network, schema structure, and automated review collection pipelines across 8 clinic branches in Delhi NCR. Placed all 8 locations in top 3 Google Local 3-Pack rankings for high-intent cosmetic dentistry queries.',
    metric: '#1 - #3',
    metricLabel: 'Google Maps 3-Pack',
    submetric: '280+ High-Ticket Bookings/Mo',
    quote: '"Our appointment books are completely full. GrowthHikes transformed our organic Google search into our single highest ROI acquisition channel."',
    author: 'Dr. Sameer Kapoor, Clinical Director',
  },
  {
    id: 4,
    client: 'Apex Athletics Apparel',
    industry: 'D2C E-Commerce & Retail',
    tag: 'High-ROAS Meta Ads & Performance Creative',
    year: '2025',
    desc: 'Combined fast-paced UGC reels with dynamic retargeting catalogs and automated abandoned cart WhatsApp recovery bots, boosting blended ad spend returns from 1.6x to 4.2x ROAS.',
    metric: '4.2x',
    metricLabel: 'Blended Ad ROAS',
    submetric: '14,000+ Units Sold',
    quote: '"From script to ad shoot and automated recovery workflows, GrowthHikes operates like a powerhouse growth department embedded in our team."',
    author: 'Vikram Sethi, Co-Founder',
  },
];

export default function CaseStudiesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = CASE_STUDIES[activeIdx];

  return (
    <section id="case-studies" className="case-section" style={{
      boxSizing: 'border-box',
      backgroundColor: '#030407',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '100px 0',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* SideLabel in Dark Theme */}
          <SideLabel text="CASE STUDIES" theme="dark" />

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Top Bar: Headline & Talk to Experts Link */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '48px',
            }}>
              <div>
                <div style={{
                  color: '#1ddca8',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  [ VALIDATED PERFORMANCE ]
                </div>
                <h2 style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}>
                  Proof in <span style={{ color: '#1ddca8' }}>Performance</span>
                </h2>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  background: 'rgba(29, 220, 168, 0.1)',
                  border: '1px solid rgba(29, 220, 168, 0.4)',
                  color: '#1ddca8',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1ddca8';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(29, 220, 168, 0.1)';
                  e.currentTarget.style.color = '#1ddca8';
                }}
              >
                <span>Talk to Our Growth Specialists</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Selector Tabs */}
            <div style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '16px',
              marginBottom: '32px',
            }}>
              {CASE_STUDIES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '12px',
                    background: idx === activeIdx ? 'rgba(29, 220, 168, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${idx === activeIdx ? 'rgba(29, 220, 168, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                    color: idx === activeIdx ? '#1ddca8' : '#94a3b8',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {item.client}
                </button>
              ))}
            </div>

            {/* Active Case Study Spotlight Card */}
            <div style={{
              background: 'radial-gradient(circle at 10% 20%, rgba(29, 220, 168, 0.08) 0%, rgba(12, 16, 24, 0.9) 80%)',
              border: '1px solid rgba(29, 220, 168, 0.25)',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 48px)',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}>
                {/* Left Column: Details */}
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#8dffe0',
                    background: 'rgba(29, 220, 168, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '16px',
                  }}>
                    <span>{current.industry}</span>
                    <span>•</span>
                    <span>{current.year}</span>
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '16px',
                  }}>
                    {current.client}
                  </h3>

                  <p style={{
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}>
                    {current.desc}
                  </p>

                  <div style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '3px solid #1ddca8',
                    marginBottom: '20px',
                  }}>
                    <p style={{ fontStyle: 'italic', color: '#e2e8f0', fontSize: '0.92rem', marginBottom: '8px' }}>
                      {current.quote}
                    </p>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1ddca8' }}>
                      — {current.author}
                    </span>
                  </div>
                </div>

                {/* Right Column: Key Metric Callout */}
                <div style={{
                  background: 'rgba(5, 8, 12, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '36px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                    fontWeight: 900,
                    color: '#1ddca8',
                    fontFamily: 'var(--font-display)',
                    lineHeight: 1,
                    marginBottom: '10px',
                  }}>
                    {current.metric}
                  </div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {current.metricLabel}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#38bdf8',
                    fontWeight: 600,
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: 'rgba(56, 189, 248, 0.1)',
                  }}>
                    {current.submetric}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
