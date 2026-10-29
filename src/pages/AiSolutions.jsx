import React from 'react';
import { Link } from 'react-router-dom';
import AiAgentsDemo from '../components/AiAgentsDemo';
import SideLabel from '../components/SideLabel';
import { Sparkles, Bot, PhoneCall, MessageSquare, Cpu, ShieldCheck, ArrowRight, Zap, CheckCircle2, Play } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/servicesData';

export default function AiSolutions({ onOpenBooking }) {
  return (
    <div style={{ background: '#050505', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Cyber AI Hero Section */}
      <section className="aihero" style={{ minHeight: '85vh', padding: '120px 0 60px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div className="aihero-bg-layer" />
        <div className="aihero-glow" />

        {/* Data Streams Falling */}
        <div className="data-streams" aria-hidden="true">
          <div className="stream stream-1" />
          <div className="stream stream-2" />
          <div className="stream stream-3" />
          <div className="stream stream-4" />
          <div className="stream stream-5" />
          <div className="stream stream-6" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Eyebrow badge */}
          <div className="aihero-badge" style={{ marginBottom: '24px' }}>
            <span>AUTONOMOUS NEURAL ARCHITECTURE</span>
          </div>

          <h1 className="aihero-title" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            AI-POWERED SYSTEMS FOR <br />
            <span style={{ color: '#3fe0c2' }}>EXPONENTIAL BUSINESS GROWTH</span>
          </h1>

          <p className="aihero-subtitle" style={{
            maxWidth: '720px',
            margin: '0 auto 36px auto',
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.7,
          }}>
            Automate customer engagement, scale outbound acquisition, and eliminate human latency. We build custom multi-agent workflows, 24/7 WhatsApp AI bots, and voice concierges that integrate directly with your databases.
          </p>

          <div className="aihero-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
              className="aihero-btn primary"
              style={{
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'rgba(44, 194, 149, 0.2)',
                border: '1px solid rgba(44, 194, 149, 0.7)',
                boxShadow: '0 0 25px rgba(44, 194, 149, 0.3)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Deploy Autonomous AI Agent
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="aihero-btn ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 26px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <MessageSquare size={18} color="#3fe0c2" />
              <span>Test Live Agent on WhatsApp</span>
            </a>
          </div>

          {/* 3 Interactive Solution Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            textAlign: 'left',
          }}>
            {/* Card 1 */}
            <div style={{
              background: 'rgba(16, 22, 30, 0.8)',
              border: '1px solid rgba(63, 224, 194, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(63, 224, 194, 0.12)',
                border: '1px solid rgba(63, 224, 194, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3fe0c2',
                marginBottom: '20px',
              }}>
                <Bot size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#fff', fontFamily: 'var(--font-display)' }}>
                WhatsApp AI Agents
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Instant qualification, automated catalogue browsing, instant checkout, and CRM syncing over official WhatsApp Cloud APIs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#3fe0c2" />
                  <span>Sub-second natural responses</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#3fe0c2" />
                  <span>Automated PDF brochure & quote dispatch</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'rgba(16, 22, 30, 0.8)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
                marginBottom: '20px',
              }}>
                <PhoneCall size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#fff', fontFamily: 'var(--font-display)' }}>
                Ultra-Low Latency Voice Bots
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Real-time human-sounding voice agents for appointment reminders, inbound reception, and customer follow-up calls in English & Hindi.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#818cf8" />
                  <span>&lt;450ms voice latency</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#818cf8" />
                  <span>Direct calendar booking integration</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div style={{
              background: 'rgba(16, 22, 30, 0.8)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
                marginBottom: '20px',
              }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#fff', fontFamily: 'var(--font-display)' }}>
                Enterprise RAG & Internal Ops
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Knowledge graphs and vector-indexed engines that query your internal Notion, Google Drive, PDFs, and SQL databases securely.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>100% private & SOC2/GDPR compliant</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>Multi-modal vision and document OCR</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive AI Multi-Agent Simulator */}
      <AiAgentsDemo />

      {/* 3. Bottom Consultation Callout */}
      <section style={{
        padding: '90px 0',
        background: '#040608',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Ready to Automate Your Business Operations?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Book a 30-minute AI architectural session with our lead engineers. We will analyze your workflows and demonstrate custom agent prototypes live.
          </p>
          <button
            onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
            style={{
              padding: '16px 38px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
              color: '#000000',
              fontWeight: 800,
              fontSize: '1.05rem',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 8px 30px rgba(29, 220, 168, 0.4)',
            }}
          >
            Schedule AI Architecture Call
          </button>
        </div>
      </section>
    </div>
  );
}
