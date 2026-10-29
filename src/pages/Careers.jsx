import React, { useState } from 'react';
import { Sparkles, Briefcase, MapPin, DollarSign, Clock, ArrowRight, CheckCircle2, Heart, Laptop, Zap } from 'lucide-react';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', note: '' });

  const roles = [
    {
      id: 'drone-fpv-lead',
      title: 'Commercial Drone Pilot & FPV Cinema Specialist',
      department: 'Creative & Production',
      location: 'Patna / Field Operations',
      type: 'Full-time',
      compensation: '₹6.5L - ₹11L / year + Flight Bonuses',
      description: 'Lead 4K and 60fps cinematic shoots for luxury real estate, commercial resorts, and high-energy music/brand reels. Responsible for DGCA flight compliance, battery logistics, and gyro-stabilized color grading.',
      requirements: [
        'DGCA Certified Remote Pilot License (RPL)',
        'Extensive experience flying DJI Mavic 3 Cine and custom 5" FPV racing quads',
        'Expertise in DaVinci Resolve color grading (Log/RAW workflows)',
        'Ability to shoot dynamic chase footage and indoor fly-throughs',
      ],
    },
    {
      id: 'fullstack-engineer',
      title: 'Senior Full-Stack Engineer (Next.js & React Native)',
      department: 'Software Engineering',
      location: 'Remote (India/Global)',
      type: 'Full-time',
      compensation: '₹14L - ₹24L / year + Equity Options',
      description: 'Build production web apps on Next.js 15 (App Router, Server Actions) and cross-platform mobile apps on React Native. Integrate payment gateways, GraphQL/REST backends, and serverless microservices.',
      requirements: [
        '3+ years building high-traffic web applications with Next.js/React and TypeScript',
        'Demonstrated experience shipping cross-platform apps to iOS App Store & Google Play',
        'Familiarity with PostgreSQL, Redis, TailwindCSS, and Cloudflare Workers',
        'Passion for sub-100ms API response times and lighthouse 95+ scores',
      ],
    },
    {
      id: 'ai-architect',
      title: 'AI Automation & Workflow Architect',
      department: 'AI & Data Lab',
      location: 'Remote (India/Global)',
      type: 'Full-time',
      compensation: '₹15L - ₹26L / year + Project Bonuses',
      description: 'Design and deploy production-grade autonomous voice calling agents, WhatsApp Cloud API bots, and Retrieval-Augmented Generation (RAG) knowledge systems for enterprise clients.',
      requirements: [
        'Strong Python proficiency with LangChain/LangGraph, LlamaIndex, or AutoGen',
        'Hands-on experience with Twilio voice telephony and WebSockets',
        'Deep understanding of vector databases (pgvector, Pinecone, Qdrant) and prompt evaluation',
        'Experience building serverless webhooks on AWS Lambda or Cloudflare Workers',
      ],
    },
    {
      id: 'media-buyer-lead',
      title: 'Performance Media Buyer & Meta CAPI Lead',
      department: 'Growth & Performance',
      location: 'Remote (India/Global)',
      type: 'Full-time',
      compensation: '₹9L - ₹16L / year + ROAS Profit Share',
      description: 'Manage $100K+/month ad spend across Meta Ads Manager, Google Performance Max, and YouTube. Oversee server-side Conversions API (CAPI) calibration, creative fatigue testing, and funnel optimization.',
      requirements: [
        '2+ years managing high-spend performance campaigns with proven 3x+ ROAS',
        'Deep mastery of Meta Events Manager, Google Tag Manager server-side, and GA4',
        'Strong creative brief writing skills for UGC and drone video assets',
        'Analytical rigor with Google Sheets / BigQuery attribution modeling',
      ],
    },
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
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
            <span>JOIN THE GROWTHHIKES CREW</span>
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
            Build the Future of Media & Autonomous Software
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 36px auto',
          }}>
            We are looking for ambitious creators, systems engineers, and growth hackers who despise bureaucratic bloat and love shipping real-world impact.
          </p>
        </div>
      </section>

      {/* Perks & Benefits (Talencee Style) */}
      <section style={{ padding: '30px 0 60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <Laptop size={24} color="#00c896" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Top-Tier Gear Stipend</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Apple M-series Silicon, pro camera gear, drone hardware, or cloud GPU credits provided on day one.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <Zap size={24} color="#6366f1" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Zero Bureaucracy</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                No pointless status meetings. Asynchronous updates, high ownership, and direct communication with leadership.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <DollarSign size={24} color="#38bdf8" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Performance Bonuses</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                We share the upside. High ROAS campaigns and software milestones trigger direct quarterly bonus distributions.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <Heart size={24} color="#fb7185" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Flexible Work</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Work remotely from anywhere in India/global, or collaborate at our studio facilities with travel covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Listing */}
      <section>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '30px',
            fontFamily: 'var(--font-display)',
          }}>
            Open Positions ({roles.length})
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {roles.map((role) => (
              <div
                key={role.id}
                style={{
                  background: 'rgba(18, 20, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div style={{ maxWidth: '620px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: 'rgba(0, 200, 150, 0.12)',
                      color: '#00c896',
                    }}>
                      {role.department}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '0.82rem' }}>
                      <MapPin size={12} />
                      <span>{role.location}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '0.82rem' }}>
                      <Clock size={12} />
                      <span>{role.type}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                    {role.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '12px' }}>
                    {role.description}
                  </p>

                  <div style={{ color: '#00c896', fontWeight: 700, fontSize: '0.95rem' }}>
                    {role.compensation}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setSubmitted(false);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span>View & Apply</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details & Apply Modal */}
      {selectedRole && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 10, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}>
          <div style={{
            background: '#12141e',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
            position: 'relative',
          }}>
            <button
              onClick={() => setSelectedRole(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00c896', textTransform: 'uppercase', marginBottom: '8px', display: 'inline-block' }}>
              {selectedRole.department}
            </span>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              {selectedRole.title}
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedRole.description}
            </p>

            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
              Core Requirements:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              {selectedRole.requirements.map((req, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={16} color="#00c896" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            {submitted ? (
              <div style={{
                background: 'rgba(0, 200, 150, 0.1)',
                border: '1px solid rgba(0, 200, 150, 0.3)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}>
                <CheckCircle2 size={32} color="#00c896" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>Application Received!</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Our hiring team will review your portfolio and get back within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />

                <input
                  type="url"
                  required
                  placeholder="GitHub / Portfolio / Reel Link (URL)"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />

                <textarea
                  rows={3}
                  placeholder="Tell us about the coolest project you have built or filmed..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '14px', borderRadius: '10px', marginTop: '6px' }}
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
