import React from 'react';
import { Link } from 'react-router-dom';
import SideLabel from './SideLabel';
import { Camera, Bot, TrendingUp, Code2, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'drone-shooting',
    number: '01',
    title: '4K FPV Drone Cinematography',
    tag: 'PRODUCTION',
    desc: 'Breathtaking 4K aerial shots and high-speed FPV flythroughs by licensed DGCA pilots for real estate, luxury resorts, hospitality, and viral brand commercials.',
    icon: Camera,
    color: '#1ddca8',
    link: '/services/drone-shooting',
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'Autonomous AI Agents & Bots',
    tag: 'AUTOMATION',
    desc: 'Self-operating multi-agent workflows, 24/7 WhatsApp customer acquisition bots, AI voice receptionists, and seamless CRM synchronization.',
    icon: Bot,
    color: '#8dffe0',
    link: '/solutions',
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Performance Marketing & Viral Reels',
    tag: 'GROWTH',
    desc: 'High-converting Meta & Google ad funnels paired with algorithmically engineered short-form video reels that produce predictable, high-ROAS returns.',
    icon: TrendingUp,
    color: '#38bdf8',
    link: '/services/social-media',
  },
  {
    id: 'software-dev',
    number: '04',
    title: 'Full-Stack Software, SaaS & Apps',
    tag: 'ENGINEERING',
    desc: 'Ultra-fast web platforms, custom CRM/ERP systems, and native iOS & Android applications built with modern React, Flutter, Python, and cloud microservices.',
    icon: Code2,
    color: '#6366f1',
    link: '/services/software-dev',
  },
  {
    id: 'local-seo',
    number: '05',
    title: 'Hyper-Local SEO & Map Dominance',
    tag: 'VISIBILITY',
    desc: 'Place your physical business or regional service in the top 3 of Google Local Map Packs, outranking competitors and driving high-intent inbound calls.',
    icon: MapPin,
    color: '#facc15',
    link: '/services/local-seo',
  },
  {
    id: 'branding-creative',
    number: '06',
    title: 'Brand Identity & Visual Ecosystems',
    tag: 'CREATIVE',
    desc: 'Iconic brand identity systems, high-end motion design, and UI/UX design systems that command immediate authority and premium market pricing.',
    icon: Sparkles,
    color: '#ec4899',
    link: '/services/branding-creative',
  },
];

export default function CoreCapabilitiesGrid({ onSelectService }) {
  return (
    <section className="tlc-section" style={{
      boxSizing: 'border-box',
      backgroundColor: '#05070a',
      position: 'relative',
      padding: '100px 0',
      overflow: 'hidden',
    }}>
      {/* Falling Meteors */}
      <div className="tlc-meteors" aria-hidden="true" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div className="tlc-m1" style={{ position: 'absolute', width: '2px', height: '140px', background: 'linear-gradient(to bottom, transparent, #1ddca8)', animation: 'tlcFall 9s linear infinite', top: '-100px', left: '15%' }} />
        <div className="tlc-m2" style={{ position: 'absolute', width: '2px', height: '180px', background: 'linear-gradient(to bottom, transparent, #38bdf8)', animation: 'tlcFall 12s linear infinite 3s', top: '-120px', left: '45%' }} />
        <div className="tlc-m3" style={{ position: 'absolute', width: '1.5px', height: '120px', background: 'linear-gradient(to bottom, transparent, #8dffe0)', animation: 'tlcFall 8s linear infinite 6s', top: '-80px', left: '75%' }} />
        <div className="tlc-m4" style={{ position: 'absolute', width: '2px', height: '160px', background: 'linear-gradient(to bottom, transparent, #6366f1)', animation: 'tlcFall 14s linear infinite 1.5s', top: '-140px', left: '30%' }} />
        <div className="tlc-m5" style={{ position: 'absolute', width: '1.5px', height: '130px', background: 'linear-gradient(to bottom, transparent, #1ddca8)', animation: 'tlcFall 11s linear infinite 4.5s', top: '-90px', left: '90%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* SideLabel in Dark Theme */}
          <SideLabel text="CORE EXPERTISE" theme="dark" />

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Header */}
            <div style={{ marginBottom: '56px' }}>
              <div style={{
                display: 'inline-block',
                color: '#1ddca8',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                [ REVERSE-ENGINEERED FOR SCALE ]
              </div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}>
                Our Flagship <span style={{ color: '#1ddca8' }}>Growth Capabilities</span>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '680px', marginTop: '12px' }}>
                Every capability is built to perform in synergy: cinematic visuals capture viral attention, while autonomous AI agents and cloud platforms convert that attention into compounding revenue.
              </p>
            </div>

            {/* Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}>
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.id}
                    style={{
                      background: 'rgba(12, 16, 24, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '32px',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      backdropFilter: 'blur(12px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = 'rgba(29, 220, 168, 0.45)';
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(29, 220, 168, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div>
                      {/* Top Row: Number & Tag */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.8rem',
                          fontWeight: 800,
                          color: 'rgba(255, 255, 255, 0.25)',
                        }}>
                          {cap.number}
                        </span>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: cap.color,
                          background: `${cap.color}18`,
                          border: `1px solid ${cap.color}40`,
                          padding: '3px 10px',
                          borderRadius: '999px',
                        }}>
                          {cap.tag}
                        </span>
                      </div>

                      {/* Icon */}
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        color: cap.color,
                      }}>
                        <Icon size={24} />
                      </div>

                      {/* Title & Desc */}
                      <h3 style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-display)',
                      }}>
                        {cap.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px' }}>
                        {cap.desc}
                      </p>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <Link
                        to={cap.link}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#f8fafc',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = cap.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#f8fafc')}
                      >
                        <span>Deep Dive</span>
                        <ArrowRight size={15} />
                      </Link>

                      <button
                        onClick={() => onSelectService && onSelectService({ id: cap.id, title: cap.title })}
                        style={{
                          background: 'rgba(29, 220, 168, 0.12)',
                          border: '1px solid rgba(29, 220, 168, 0.3)',
                          color: '#1ddca8',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1ddca8';
                          e.currentTarget.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(29, 220, 168, 0.12)';
                          e.currentTarget.style.color = '#1ddca8';
                        }}
                      >
                        Book Capability
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
