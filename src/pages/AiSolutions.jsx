import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AiAgentsDemo from '../components/AiAgentsDemo';
import SideLabel from '../components/SideLabel';
import { 
  Sparkles, 
  Bot, 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Play, 
  Database, 
  Eye, 
  Target, 
  Brain, 
  Server, 
  Star,
  Activity,
  Layers,
  Clock,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { WHATSAPP_LINK } from '../data/servicesData';

// 8 Peripheral Neural Nodes for GrowthHikes AI Ecosystem
const MOTHERBOARD_NODES = [
  { id: 'whatsapp', label: 'WhatsApp Agent', tag: 'FUNNEL', x: 50, y: 15, delay: 0, Icon: MessageSquare, desc: 'Sub-second lead qualification, catalog checkout & instant CRM sync' },
  { id: 'voice', label: 'Voice Concierge', tag: 'VOICE', x: 82, y: 22, delay: 0.1, Icon: PhoneCall, desc: '<450ms human-sounding inbound receptionist & outbound reminders' },
  { id: 'rag', label: 'Vector Memory', tag: 'RAG', x: 92, y: 50, delay: 0.2, Icon: Database, desc: 'Private internal document indexing (Notion, Drive, SQL, PDFs)' },
  { id: 'vision', label: '4K Vision AI', tag: 'VISION', x: 82, y: 78, delay: 0.3, Icon: Eye, desc: 'Automated video hook extraction, scene detection & asset tagging' },
  { id: 'meta', label: 'Meta Ads ROAS', tag: 'ROAS', x: 50, y: 85, delay: 0.4, Icon: Target, desc: 'Dynamic ad iteration, budget re-allocation & webhook ingestion' },
  { id: 'claude', label: 'Reasoning Engine', tag: 'LLM', x: 18, y: 78, delay: 0.5, Icon: Brain, desc: 'Claude 3.5 Sonnet / GPT-4o multi-step chain-of-thought routing' },
  { id: 'workers', label: 'Edge Workers', tag: 'OPS', x: 8, y: 50, delay: 0.6, Icon: Zap, desc: 'Zero-cold-start globally distributed Cloudflare edge microservices' },
  { id: 'database', label: 'Supabase / PG', tag: 'SYNC', x: 18, y: 22, delay: 0.7, Icon: Server, desc: 'Real-time database triggers, vector embeddings & audit telemetry' },
];

// Testimonials & Case Metrics Data
const CLIENT_TESTIMONIALS = [
  {
    id: 1,
    name: 'Vikram Malhotra',
    role: 'Managing Director, Apex FinServe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: "GrowthHikes' WhatsApp AI funnel increased our qualified lead conversion by 340% while slashing response time from 4 hours to 12 seconds.",
    rating: 5,
    metric: '340% Higher Conversion',
    tag: 'FinTech Automation'
  },
  {
    id: 2,
    name: 'Dr. Rhea Mehta',
    role: 'Founder, MedAesthetic Clinics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    text: "The autonomous voice concierge handles over 1,200 inbound appointment calls a week in English & Hindi with zero human intervention. Absolutely flawless.",
    rating: 5,
    metric: '<450ms Voice Latency',
    tag: 'Healthcare AI'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'VP of Engineering, OmniCloud Systems',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    text: "Their custom RAG pipeline indexed 8,000 internal SOP documents and technical manuals. Our support tier-1 engineers save 15+ hours every week.",
    rating: 5,
    metric: '60% Workload Reduction',
    tag: 'Enterprise RAG'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Head of Growth, Vivant Luxury Goods',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    text: "Seamless integration between our Instagram Reels campaigns and automated WhatsApp checkout. Pure engineering excellence from the GrowthHikes team.",
    rating: 5,
    metric: '4.2x ROAS Multiplier',
    tag: 'D2C E-Commerce'
  }
];

export default function AiSolutions({ onOpenBooking }) {
  const [activeNode, setActiveNode] = useState(null);
  const [typedPrompt, setTypedPrompt] = useState('// SYSTEM ONLINE · READY');
  const [bootStep, setBootStep] = useState(3);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const typingTimerRef = useRef(null);
  const motherboardRef = useRef(null);

  // Typewriter effect when selecting peripheral node
  useEffect(() => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    
    let text = '// SYSTEM ONLINE · READY';
    if (activeNode) {
      const selected = MOTHERBOARD_NODES.find(n => n.id === activeNode);
      if (selected) {
        text = `> ACTIVE::${selected.label.toUpperCase()} [${selected.tag}]`;
      }
    }
    
    let charIndex = 0;
    setTypedPrompt('');
    typingTimerRef.current = setInterval(() => {
      if (charIndex <= text.length) {
        setTypedPrompt(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingTimerRef.current);
      }
    }, 25);

    return () => clearInterval(typingTimerRef.current);
  }, [activeNode]);

  // Testimonial auto-rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % CLIENT_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#030407', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. Cyber AI Hero Section with Talencee Waterfall Grid & Falling Data Streams */}
      <section className="aihero" style={{ minHeight: '85vh', padding: '140px 0 60px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="aihero-bg-layer" />
        <div className="aihero-glow" />

        {/* 3D Perspective Waterfall Grid Plane */}
        <div className="aihero-grid-container" aria-hidden="true">
          <div className="aihero-grid-plane" />
        </div>

        {/* Falling Data Streams */}
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
            <span>AUTONOMOUS NEURAL ARCHITECTURE · GROWTHHIKES</span>
          </div>

          <h1 className="aihero-title" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            AI-POWERED SYSTEMS FOR <br />
            <span style={{
              background: 'linear-gradient(135deg, #1ddca8 0%, #8dffe0 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              EXPONENTIAL BUSINESS GROWTH
            </span>
          </h1>

          <p className="aihero-subtitle" style={{
            maxWidth: '740px',
            margin: '0 auto 36px auto',
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.7,
          }}>
            Automate customer acquisition, eliminate response latency, and scale operations autonomously. We architect custom multi-agent funnels, WhatsApp Cloud API bots, and low-latency voice concierges that hook directly into your databases.
          </p>

          <div className="aihero-actions" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
              className="aihero-btn primary"
              style={{
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                color: '#000000',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 8px 30px rgba(29, 220, 168, 0.4)',
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
                padding: '14px 28px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <MessageSquare size={18} color="#1ddca8" />
              <span>Test Live Agent on WhatsApp</span>
            </a>
          </div>

          {/* 3 Core Architecture Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            textAlign: 'left',
          }}>
            {/* Card 1 */}
            <div style={{
              background: 'rgba(11, 15, 25, 0.85)',
              border: '1px solid rgba(29, 220, 168, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(29, 220, 168, 0.12)',
                border: '1px solid rgba(29, 220, 168, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1ddca8',
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
                  <CheckCircle2 size={15} color="#1ddca8" />
                  <span>Sub-second natural responses</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#1ddca8" />
                  <span>Automated PDF brochure & quote dispatch</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'rgba(11, 15, 25, 0.85)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(12px)',
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
                  <span>&lt;450ms conversational latency</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#818cf8" />
                  <span>Direct calendar booking integration</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div style={{
              background: 'rgba(11, 15, 25, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              backdropFilter: 'blur(12px)',
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

      {/* 2. Interactive Neural Motherboard (Reverse-Engineered from Talencee) */}
      <section 
        ref={motherboardRef}
        style={{
          padding: '80px 0 100px 0',
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 220, 168, 0.08) 0%, #030407 70%)',
          position: 'relative',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(29, 220, 168, 0.1)',
            border: '1px solid rgba(29, 220, 168, 0.3)',
            color: '#1ddca8',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px',
          }}>
            <Activity size={14} />
            <span>LIVE INTERACTIVE ARCHITECTURE</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: '#fff',
            fontFamily: 'var(--font-display)',
            marginBottom: '14px',
          }}>
            The GrowthHikes Neural Core
          </h2>
          <p style={{
            maxWidth: '680px',
            margin: '0 auto',
            color: '#94a3b8',
            fontSize: '1.05rem',
          }}>
            Hover or tap any peripheral node to route live data packets into the centralized execution core.
          </p>
        </div>

        {/* Neural Motherboard Interactive Canvas Container */}
        <div 
          className="ai-system-wrapper in-view"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            height: '620px',
            margin: '0 auto',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(180deg, #07090e 0%, #040508 100%)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8), 0 0 60px rgba(29, 220, 168, 0.1)',
            overflow: 'hidden',
          }}
          onClick={() => setActiveNode(null)}
        >
          {/* Background scanlines & grid */}
          <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
          <div className="bg-scanlines" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />

          {/* Motherboard SVG Connections */}
          <svg className="motherboard-svg" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <filter id="gh-trace-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {MOTHERBOARD_NODES.map(node => {
              const isSelected = activeNode === node.id;
              return (
                <g key={`trace-${node.id}`}>
                  {/* Base static trace line */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                  />
                  {/* Active glowing beam */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke={isSelected ? '#1ddca8' : 'rgba(29, 220, 168, 0.25)'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    strokeDasharray={isSelected ? '6, 6' : 'none'}
                    filter={isSelected ? 'url(#gh-trace-glow)' : 'none'}
                    style={{
                      animation: isSelected ? 'hs-radar-spin 2s linear infinite' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* 8 Peripheral Interactive Nodes */}
          {MOTHERBOARD_NODES.map(node => {
            const isSelected = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNode(activeNode === node.id ? null : node.id);
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                style={{
                  position: 'absolute',
                  top: `${node.y}%`,
                  left: `${node.x}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  style={{
                    width: isSelected ? '54px' : '46px',
                    height: isSelected ? '54px' : '46px',
                    borderRadius: '16px',
                    background: isSelected ? 'rgba(29, 220, 168, 0.2)' : 'rgba(16, 22, 34, 0.9)',
                    border: `1.5px solid ${isSelected ? '#1ddca8' : 'rgba(255, 255, 255, 0.15)'}`,
                    boxShadow: isSelected ? '0 0 25px rgba(29, 220, 168, 0.6), inset 0 0 15px rgba(29, 220, 168, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#1ddca8' : '#cbd5e1',
                    transform: isSelected ? 'scale(1.12)' : 'scale(1)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <node.Icon size={isSelected ? 24 : 20} />
                </div>
                
                <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
                  <span style={{
                    display: 'block',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isSelected ? '#1ddca8' : '#ffffff',
                    whiteSpace: 'nowrap',
                    textShadow: isSelected ? '0 0 10px rgba(29, 220, 168, 0.8)' : 'none',
                  }}>
                    {node.label}
                  </span>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: isSelected ? '#8dffe0' : '#64748b',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '1px 6px',
                    borderRadius: '4px',
                  }}>
                    {node.tag}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Central CPU Core Card */}
          <div
            className={`cpu-core-card ${activeNode ? 'receiving-data' : ''}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '210px',
              height: '210px',
              zIndex: 15,
            }}
          >
            <div 
              className="core-inner"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, #0d121c 0%, #06080d 100%)',
                border: `2px solid ${activeNode ? '#1ddca8' : 'rgba(29, 220, 168, 0.45)'}`,
                boxShadow: activeNode 
                  ? '0 0 60px rgba(29, 220, 168, 0.5), inset 0 0 30px rgba(29, 220, 168, 0.25)' 
                  : '0 0 35px rgba(29, 220, 168, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Outer scanning rings */}
              <div className="core-scan-ring outer" />
              <div className="core-scan-ring inner" />
              <div className="core-scan-sweep" />

              <Cpu size={32} color={activeNode ? '#1ddca8' : '#8dffe0'} style={{ marginBottom: '8px' }} />
              
              <h4 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.12em',
                marginBottom: '4px',
                fontFamily: 'var(--font-display)',
              }}>
                NEURAL CORE
              </h4>

              <div style={{
                fontSize: '0.72rem',
                color: '#1ddca8',
                fontFamily: 'var(--font-mono, monospace)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                minHeight: '18px',
              }}>
                {typedPrompt}
                <span style={{ animation: 'pulse 1s infinite' }}>▌</span>
              </div>
            </div>
          </div>

          {/* Coordinate HUD (Bottom Left) */}
          <div
            className="coord-hud visible"
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '24px',
              display: 'flex',
              gap: '14px',
              fontSize: '0.72rem',
              color: '#64748b',
              fontFamily: 'var(--font-mono, monospace)',
              letterSpacing: '0.08em',
              zIndex: 30,
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span>NODES: 08 ACTIVE</span>
            <span>LATENCY: 18ms</span>
            <span style={{ color: '#1ddca8' }}>STATUS: ONLINE</span>
          </div>

          {/* Status HUD (Top Right) */}
          <div
            className="status-hud visible"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: activeNode ? '#1ddca8' : '#94a3b8',
              zIndex: 30,
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: `1px solid ${activeNode ? 'rgba(29, 220, 168, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: activeNode ? '#1ddca8' : '#10b981',
              boxShadow: '0 0 10px #1ddca8',
            }} />
            <span>{activeNode ? 'PACKET STREAMING' : 'IDLE / LISTENING'}</span>
          </div>
        </div>
      </section>

      {/* 3. The 4-Card Strategic Advantage Matrix (ae-wrap from Talencee) */}
      <section className="ae-wrap" style={{ padding: '90px 0', background: '#05070c' }}>
        <div className="container">
          <div className="ae-shell">
            <div className="ae-box" style={{
              background: '#090d18',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '28px',
              padding: '48px 40px',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7)',
            }}>
              <div className="ae-grid">
                
                {/* Heading Block */}
                <div className="ae-heading fade-up" style={{ marginBottom: '32px' }}>
                  <div className="ae-eyebrow" style={{
                    color: '#1ddca8',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    OUR STRATEGIC ADVANTAGE
                  </div>
                  <h2 className="ae-h2" style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    lineHeight: 1.2,
                  }}>
                    Why High-Growth Brands Choose <br />
                    Us for <span className="ae-accent" style={{ color: '#1ddca8' }}>AI &amp; Automation</span>
                  </h2>
                </div>

                {/* Description Block */}
                <div className="ae-desc fade-up" style={{
                  color: '#94a3b8',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}>
                  <p>
                    We build end-to-end autonomous business systems that solve quantifiable revenue bottlenecks—empowering your team to eliminate human latency, automate client acquisition, and scale efficiently.
                  </p>
                </div>

                {/* 4 Cards Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '24px',
                  marginBottom: '40px',
                }}>
                  {/* Card 01: Strategy-First with Orbital Ring */}
                  <article className="ae-card ae-card-green ae-c01 fade-up" style={{
                    background: 'rgba(16, 23, 38, 0.85)',
                    border: '1px solid rgba(29, 220, 168, 0.3)',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span className="ae-num" style={{ color: '#1ddca8', fontSize: '1.8rem', fontWeight: 800, display: 'block', marginBottom: '16px' }}>01</span>
                    <h3 className="ae-ctitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                      Strategy-First Architecture
                    </h3>
                    <p className="ae-cdesc" style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      We align every LLM workflow with your bottom-line unit economics, ensuring measurable pipeline revenue rather than empty tech hype.
                    </p>
                    {/* Orbital Graphic */}
                    <div className="ae-c01-graphic" aria-hidden="true">
                      <div className="ae-orbit">
                        <div className="ae-orbit-ring ae-ring1" />
                        <div className="ae-orbit-ring ae-ring2" />
                        <div className="ae-orbit-core" style={{ background: '#1ddca8' }} />
                        <div className="ae-orbit-spin1">
                          <div className="ae-orbit-dot ae-od1" style={{ background: '#1ddca8' }} />
                        </div>
                        <div className="ae-orbit-dot ae-od2" style={{ background: '#8dffe0' }} />
                        <div className="ae-orbit-dot ae-od3" style={{ background: '#6366f1' }} />
                      </div>
                    </div>
                  </article>

                  {/* Card 02: ROI-Focused with Vector Arrow */}
                  <article className="ae-card ae-card-green ae-c02 fade-up" style={{
                    background: 'rgba(16, 23, 38, 0.85)',
                    border: '1px solid rgba(29, 220, 168, 0.3)',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span className="ae-num" style={{ color: '#1ddca8', fontSize: '1.8rem', fontWeight: 800, display: 'block', marginBottom: '16px' }}>02</span>
                    <h3 className="ae-ctitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                      Measurable ROI Velocity
                    </h3>
                    <p className="ae-cdesc" style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      Directly cuts manual agent hours by 60%+ while driving 3.4x faster lead response times across WhatsApp, phone calls, and web.
                    </p>
                    <svg className="ae-roi-arrow" viewBox="0 0 100 100" aria-hidden="true" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '48px', height: '48px' }}>
                      <path d="M 80 15 L 95 40 L 85 40 Q 75 80 20 95 Q 65 75 70 40 L 60 40 Z" fill="#1ddca8" />
                    </svg>
                  </article>

                  {/* Card 03: Smart Automation */}
                  <article className="ae-card ae-card-brown ae-c03 fade-up" style={{
                    background: 'rgba(16, 23, 38, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    position: 'relative',
                  }}>
                    <span className="ae-num" style={{ color: '#818cf8', fontSize: '1.8rem', fontWeight: 800, display: 'block', marginBottom: '16px' }}>03</span>
                    <h3 className="ae-ctitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                      Autonomous Multi-Agents
                    </h3>
                    <p className="ae-cdesc" style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      We combine LLM reasoning with programmatic cron workers and webhooks to manage booking calendars, invoicing, and lead routing 24/7.
                    </p>
                  </article>

                  {/* Card 04: Future-Ready */}
                  <article className="ae-card ae-card-brown ae-c04 fade-up" style={{
                    background: 'rgba(16, 23, 38, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '20px',
                    padding: '32px 26px',
                    position: 'relative',
                  }}>
                    <span className="ae-num" style={{ color: '#38bdf8', fontSize: '1.8rem', fontWeight: 800, display: 'block', marginBottom: '16px' }}>04</span>
                    <h3 className="ae-ctitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                      Zero Model Lock-In
                    </h3>
                    <p className="ae-cdesc" style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      Engineered with provider-agnostic routing. Seamlessly toggle between Claude 3.5 Sonnet, GPT-4o, and DeepSeek with zero downtime.
                    </p>
                  </article>
                </div>

                {/* Footer Action Bar */}
                <div className="ae-footer" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} color="#1ddca8" />
                    <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Enterprise Grade Security · SOC2 &amp; GDPR Compliant Pipeline</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['support-concierge', 'calling-agents'] }) : null}
                    className="ae-cta-btn"
                    style={{
                      background: 'rgba(29, 220, 168, 0.12)',
                      border: '1px solid #1ddca8',
                      color: '#ffffff',
                      padding: '10px 24px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span>Schedule AI Architecture Call</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Live Agent Simulator (Working Chat & Voice Concierge Demo) */}
      <AiAgentsDemo />

      {/* 5. Client ROI Testimonials & Performance Metrics Carousel */}
      <section style={{ padding: '80px 0 100px 0', background: '#030407', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(29, 220, 168, 0.1)',
              border: '1px solid rgba(29, 220, 168, 0.3)',
              color: '#1ddca8',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '14px',
            }}>
              <Star size={14} />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-display)',
              marginBottom: '12px',
            }}>
              Proven Outcomes Across Industries
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Real metrics from live client deployments powered by GrowthHikes autonomous pipelines.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                style={{
                  background: 'rgba(12, 16, 26, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '22px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#1ddca8',
                      background: 'rgba(29, 220, 168, 0.1)',
                      border: '1px solid rgba(29, 220, 168, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                    }}>
                      {t.tag}
                    </span>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>

                  <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
                    "{t.text}"
                  </p>
                </div>

                <div>
                  {/* Metric Pill */}
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(29, 220, 168, 0.08)',
                    border: '1px solid rgba(29, 220, 168, 0.2)',
                    borderRadius: '10px',
                    color: '#1ddca8',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    marginBottom: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <TrendingUp size={14} />
                    <span>{t.metric}</span>
                  </div>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1.5px solid rgba(29, 220, 168, 0.4)',
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                        {t.name}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Schedule Consultation Callout */}
      <section style={{
        padding: '90px 0',
        background: '#04060a',
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
