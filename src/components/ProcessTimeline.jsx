import React from 'react';
import SideLabel from './SideLabel';
import { Compass, Camera, Cpu, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Audit & Algorithmic Blueprint',
    desc: 'We conduct a comprehensive teardown of your target audience, existing conversion funnels, and local competitors to map out viral content themes and automated sales architecture.',
    icon: Compass,
    color: '#059669',
  },
  {
    step: '02',
    title: '4K Cinema & Creative Production',
    desc: 'Our licensed DGCA drone pilots and master videographers capture cinematic property tours, commercial angles, and hook-optimized reels ready for high-retention social feeds.',
    icon: Camera,
    color: '#0284c7',
  },
  {
    step: '03',
    title: 'AI Agent & Cloud Deployment',
    desc: 'We configure custom WhatsApp bots, CRM automations, and AI receptionists trained on your knowledge base to capture, qualify, and convert leads 24/7 with zero human delay.',
    icon: Cpu,
    color: '#4f46e5',
  },
  {
    step: '04',
    title: 'Hyper-Scale & Revenue Optimization',
    desc: 'With conversion funnels locked and inbound leads converting automatically, we dial in paid Meta & Google Ads and Local SEO to drive exponential revenue velocity.',
    icon: Rocket,
    color: '#09090b',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="ps-section" style={{
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      padding: '100px 0',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* SideLabel in Light Theme (Black Line & Text) */}
          <SideLabel text="GROWTH PROTOCOL" theme="light" />

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Header */}
            <div style={{ marginBottom: '56px' }}>
              <div style={{
                color: '#059669',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                [ PROVEN EXECUTION METHODOLOGY ]
              </div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: '#09090b',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}>
                Driving Scalable Growth <span style={{ color: '#059669' }}>Through Strategy</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', marginTop: '12px', lineHeight: 1.6 }}>
                A disciplined four-phase trajectory transforming raw digital presence into predictable client acquisition.
              </p>
            </div>

            {/* Timeline Steps Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              position: 'relative',
            }}>
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '20px',
                      padding: '32px 26px',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#10b981';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(16, 185, 129, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    <div>
                      {/* Top Step Number Badge */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                      }}>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '2.2rem',
                          fontWeight: 900,
                          color: step.color,
                        }}>
                          {step.step}
                        </div>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: `${step.color}12`,
                          border: `1px solid ${step.color}25`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: step.color,
                        }}>
                          <Icon size={20} />
                        </div>
                      </div>

                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#09090b',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-display)',
                      }}>
                        {step.title}
                      </h3>

                      <p style={{
                        color: '#475569',
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                      }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div style={{
                      marginTop: '28px',
                      height: '4px',
                      borderRadius: '999px',
                      background: '#e2e8f0',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${(idx + 1) * 25}%`,
                        height: '100%',
                        background: step.color,
                        borderRadius: '999px',
                      }} />
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
