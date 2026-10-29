import React from 'react';
import SideLabel from './SideLabel';
import { Compass, Camera, Cpu, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Audit & Algorithmic Blueprint',
    desc: 'We conduct a comprehensive teardown of your target audience, existing conversion funnels, and local competitors to map out viral content themes and automated sales architecture.',
    icon: Compass,
    color: '#1ddca8',
  },
  {
    step: '02',
    title: '4K Cinema & Creative Production',
    desc: 'Our licensed DGCA drone pilots and master videographers capture cinematic property tours, commercial angles, and hook-optimized reels ready for high-retention social feeds.',
    icon: Camera,
    color: '#8dffe0',
  },
  {
    step: '03',
    title: 'AI Agent & Cloud Deployment',
    desc: 'We configure custom WhatsApp bots, CRM automations, and AI receptionists trained on your knowledge base to capture, qualify, and convert leads 24/7 with zero human delay.',
    icon: Cpu,
    color: '#38bdf8',
  },
  {
    step: '04',
    title: 'Hyper-Scale & Revenue Optimization',
    desc: 'With conversion funnels locked and inbound leads converting automatically, we dial in paid Meta & Google Ads and Local SEO to drive exponential revenue velocity.',
    icon: Rocket,
    color: '#6366f1',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="ps-section" style={{
      boxSizing: 'border-box',
      backgroundColor: '#05070a',
      padding: '100px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* SideLabel in Dark Theme */}
          <SideLabel text="GROWTH PROTOCOL" theme="dark" />

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Header */}
            <div style={{ marginBottom: '56px' }}>
              <div style={{
                color: '#1ddca8',
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
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}>
                Driving Growth <span style={{ color: '#1ddca8' }}>Through Strategy</span>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '640px', marginTop: '12px' }}>
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
                      background: 'rgba(12, 16, 24, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '30px 24px',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(29, 220, 168, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(29, 220, 168, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
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
                          fontSize: '2rem',
                          fontWeight: 900,
                          color: step.color,
                        }}>
                          {step.step}
                        </div>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}35`,
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
                        color: '#ffffff',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-display)',
                      }}>
                        {step.title}
                      </h3>

                      <p style={{
                        color: '#94a3b8',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                      }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div style={{
                      marginTop: '24px',
                      height: '3px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${(idx + 1) * 25}%`,
                        height: '100%',
                        background: step.color,
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
