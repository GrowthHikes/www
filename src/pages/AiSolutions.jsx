import React from 'react';
import { Link } from 'react-router-dom';
import AiAgentsDemo from '../components/AiAgentsDemo';
import { Sparkles, Bot, PhoneCall, MessageSquare, Cpu, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function AiSolutions({ onOpenBooking }) {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#a5b4fc',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>ENTERPRISE AI ARCHITECTURE</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Autonomous AI Agents &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 50%, #00c896 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Conversational Workflows
            </span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '740px',
            margin: '0 auto 36px auto',
          }}>
            Eliminate repetitive customer service overhead and accelerate conversions. We engineer custom Retrieval-Augmented Generation (RAG) concierges, real-time voice calling agents, and WhatsApp Cloud API bots.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.35)',
              }}
            >
              <span>Deploy Custom AI Agent</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars of GrowthHikes AI */}
      <section style={{ padding: '60px 0 40px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {/* Pillar 1 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '30px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(0, 200, 150, 0.15)',
                color: '#00c896',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <MessageSquare size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                WhatsApp Cloud API Bots
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Turn WhatsApp into your primary conversion engine. Official Meta Business verification, dynamic product catalog syncing, instant UPI/card payment checkout links, and order tracking.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#00c896" />
                  <span>Meta Official Cloud API Verified</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#00c896" />
                  <span>Sub-second webhook response time</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '30px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.15)',
                color: '#818cf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <PhoneCall size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                Autonomous Voice Calling Agents
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Near-zero latency voice models integrated with Twilio telephony. Conducts automated inbound customer support, outbound abandoned cart follow-ups, and booking confirmation calls in natural human tones.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#818cf8" />
                  <span>&lt;600ms latency voice pipeline</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#818cf8" />
                  <span>Supports English, Hindi & regional accents</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '30px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Bot size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                RAG Knowledge Support Concierge
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Connects directly to your internal Notion, Zendesk, PDF documentation, or ERP database using Pinecone/PostgreSQL vector stores. Resolves complex multi-step queries without human intervention.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#38bdf8" />
                  <span>Zero hallucination guardrails</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#38bdf8" />
                  <span>Escalates seamlessly to human agents</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '30px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(234, 179, 8, 0.15)',
                color: '#facc15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                Multi-Agent Workflow Swarms
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Autonomous agents collaborating across specialized tasks: one scrapes lead data, another drafts personalized outreach, and a third schedules calendar invites directly into your CRM.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#facc15" />
                  <span>Full LangGraph & AutoGen frameworks</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#facc15" />
                  <span>Complete audit log & compliance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Sandbox */}
      <AiAgentsDemo />

      {/* Security & Deployment Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{
            background: 'rgba(18, 20, 30, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '40px',
          }}>
            <ShieldCheck size={36} color="#00c896" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>
              Enterprise Grade Security & Data Privacy
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Your company data is never used to train public models. We deploy isolated dedicated instances on AWS/GCP with TLS 1.3 encryption, SOC2 compliance, and zero data-at-rest leakage.
            </p>
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
              className="btn-primary"
            >
              <span>Schedule Technical Architecture Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
