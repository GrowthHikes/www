import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SideLabel from '../components/SideLabel';
import { 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users, 
  Trophy, 
  Target, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Play, 
  Lightbulb, 
  Compass, 
  Award,
  Video,
  Bot,
  Layers,
  Activity,
  Check,
  X,
  MapPin,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { CONTACT_PHONE_IN, CONTACT_PHONE_US, WHATSAPP_LINK } from '../data/servicesData';

// 4 Strategic Methodology Phases for Dynamic Content Box
const METHODOLOGY_PHASES = [
  {
    id: 0,
    watermark: '01',
    step: 'Phase 01',
    title: 'Brand Engineering & Visual Identity',
    text: 'We strip away superficial fluff and define the emotional core of your brand. From high-conversion typography and dark luxury aesthetics to viral hook frameworks, we engineer assets that dominate attention.',
    tags: ['Design Systems', 'Viral Hook Frameworks', 'Luxury Editorial', 'Conversion UI']
  },
  {
    id: 1,
    watermark: '02',
    step: 'Phase 02',
    title: '4K FPV Drone Cinematography & UGC Media',
    text: 'DGCA-certified commercial drone pilots capture thrilling indoor FPV flythroughs and sweeping architectural master cuts in 10-bit D-Log. Combined with our high-volume UGC creator network, your content pipeline never runs dry.',
    tags: ['Indoor FPV Flythroughs', 'DGCA Licensed', '10-Bit HDR 4K', 'Creator UGC Network']
  },
  {
    id: 2,
    watermark: '03',
    step: 'Phase 03',
    title: 'Autonomous AI Multi-Agents & Funnels',
    text: 'Eliminate human lead decay. We deploy intelligent 24/7 WhatsApp Cloud API agents, low-latency (<450ms) neural voice concierges, and private enterprise RAG systems that close sales and qualify leads on autopilot.',
    tags: ['WhatsApp Cloud API', 'Real-Time Voice AI', 'Internal RAG', 'Automated CRM Sync']
  },
  {
    id: 3,
    watermark: '04',
    step: 'Phase 04',
    title: 'Modern Web Engineering & Edge Cloud Ops',
    text: 'Zero-bloat, ultra-performant web applications built with Next.js, React, Tailwind CSS, and Cloudflare Workers. We guarantee sub-second LCP scores, bulletproof security, and seamless API integrations.',
    tags: ['Next.js App Router', 'Edge Workers', 'Sub-second LCP', 'Real-Time Telemetry']
  }
];

// DO vs DON'T Cards Data (Why GrowthHikes vs The Rest)
const DO_CARDS = [
  {
    title: 'Unified Production & Engineering',
    text: 'We unite 4K cinematic video production, performance marketing, and software engineering under one roof. No fragmented handoffs.',
    tag: 'One Dedicated Team'
  },
  {
    title: 'Guaranteed 2-Week Sprint Velocity',
    text: 'From shoot storyboard to live WhatsApp AI bot deployment, our agile cycles deliver production-ready assets every 14 days.',
    tag: 'Rapid Turnaround'
  },
  {
    title: 'Autonomous Zero-Latency Systems',
    text: 'AI voice bots and WhatsApp funnels respond to customer leads within 2 seconds, 24 hours a day, 365 days a year.',
    tag: '24/7 Automation'
  },
  {
    title: 'Direct Access to Lead Engineers',
    text: 'Direct communication via private Slack/WhatsApp channels with the creators and software architects building your product.',
    tag: 'Zero Middlemen'
  }
];

const DONT_CARDS = [
  {
    title: 'Fragmented Freelance Chaos',
    text: 'Hiring separate videographers, junior ad media buyers, and overseas developers who do not communicate or coordinate.',
    tag: 'Disconnected Vendors'
  },
  {
    title: 'Bloated Agency Overhead',
    text: 'Endless account manager meetings, opaque billable hours, and month-long delays before a single line of code or video is delivered.',
    tag: 'Months of Delay'
  },
  {
    title: 'Manual Human Bottlenecks',
    text: 'Lead inquiries sit in CRM inboxes for 4 to 8 hours until human reps clock in, resulting in 70%+ lead dropoff and lost sales.',
    tag: 'Slow Response'
  },
  {
    title: 'Vanity Metrics Without Revenue',
    text: 'Agencies boasting about empty impressions and social likes that produce zero attributed pipeline revenue or conversions.',
    tag: 'Zero ROI Accountability'
  }
];

// Global Delivery Hubs
const GLOBAL_HUBS = [
  { id: 'del', name: 'New Delhi & NCR', region: 'India HQ', lat: 28.61, lon: 77.20, role: 'Global Studio & Fleet Labs', uptime: '99.99%', latency: '12ms' },
  { id: 'blr', name: 'Bengaluru', region: 'India Tech Hub', lat: 12.97, lon: 77.59, role: 'AI Engineering Core', uptime: '99.98%', latency: '15ms' },
  { id: 'nyc', name: 'New York', region: 'North America', lat: 40.71, lon: -74.01, role: 'Executive Client Desk', uptime: '99.99%', latency: '22ms' },
  { id: 'sfo', name: 'San Francisco', region: 'North America', lat: 37.77, lon: -122.42, role: 'Tech & Venture Accounts', uptime: '99.99%', latency: '28ms' },
  { id: 'lon', name: 'London', region: 'Europe', lat: 51.51, lon: -0.13, role: 'European Delivery Hub', uptime: '99.99%', latency: '35ms' },
  { id: 'dub', name: 'Dubai', region: 'Middle East', lat: 25.20, lon: 55.27, role: 'GCC Luxury Media Desk', uptime: '99.98%', latency: '42ms' },
  { id: 'sgp', name: 'Singapore', region: 'Asia Pacific', lat: 1.35, lon: 103.82, role: 'APAC Operations & Growth', uptime: '99.99%', latency: '24ms' },
  { id: 'syd', name: 'Sydney', region: 'Oceania', lat: -33.87, lon: 151.21, role: 'ANZ Digital Delivery', uptime: '99.97%', latency: '58ms' }
];

// Core Team Members
const TEAM_MEMBERS = [
  {
    name: 'Sahil Rathee',
    role: 'Founder & Head of Systems',
    bio: 'Directs full-stack product engineering, autonomous AI pipelines, and high-performance digital architecture across GrowthHikes clients.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    tag: 'Systems Architecture'
  },
  {
    name: 'Aman Vashisht',
    role: 'Lead AI & Full-Stack Engineer',
    bio: 'Specializes in real-time voice synthesis, WhatsApp Cloud API integrations, and edge-native serverless workflows.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    tag: 'Autonomous AI'
  },
  {
    name: 'Karan Sharma',
    role: 'Cinematography & Drone Director',
    bio: 'DGCA-certified commercial drone pilot. 500+ flight hours across commercial real estate, corporate headquarters, and high-speed FPV runs.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    tag: '4K FPV Production'
  },
  {
    name: 'Neha Kapoor',
    role: 'Growth Marketing & ROAS Lead',
    bio: 'Scales paid acquisition across Meta Reels, YouTube Ads, and Google Performance Max with a focus on verified CAC and conversion economics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    tag: 'Paid Performance'
  }
];

export default function About({ onOpenBooking }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [isDoActive, setIsDoActive] = useState(true);
  const [selectedHub, setSelectedHub] = useState(GLOBAL_HUBS[0]);
  const [mapHoverHub, setMapHoverHub] = useState(null);

  return (
    <div style={{ background: '#030407', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. Talencee Lit Tube Hero Section */}
      <section className="hero hero--lit" style={{ minHeight: '85vh', padding: '140px 0 60px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero__bg" />
        
        {/* Neon Light Tube & Overhead Glow */}
        <div className="hero__tube-wrap" aria-hidden="true">
          <div className="hero__tube" />
          <div className="hero__tube-glow" />
        </div>

        {/* Ambient Light Cone */}
        <div className="hero__cone" aria-hidden="true" />
        <div className="hero__floor" aria-hidden="true" />

        {/* Floating Atmospheric Dust Particles */}
        <div className="hero__particles" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="hero__p"
              style={{
                left: `${15 + (i * 7.5)}%`,
                top: `${20 + (i % 5) * 14}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        <div className="hero__content container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            background: 'rgba(29, 220, 168, 0.1)',
            border: '1px solid rgba(29, 220, 168, 0.3)',
            color: '#1ddca8',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '24px',
            letterSpacing: '0.08em',
          }}>
            <Sparkles size={14} />
            <span>WHO WE ARE · GROWTHHIKES DIGITAL</span>
          </div>

          <h1 className="hero__title" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Where Strategy Meets <br />
            <span style={{
              background: 'linear-gradient(135deg, #1ddca8 0%, #8dffe0 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Cinematic Execution
            </span>
          </h1>

          <p className="hero__sub" style={{
            maxWidth: '750px',
            margin: '0 auto 36px auto',
            fontSize: '1.18rem',
            color: 'rgba(255, 255, 255, 0.78)',
            lineHeight: 1.7,
          }}>
            GrowthHikes was founded on a singular principle: modern industry leaders cannot afford to disconnect their viral media storytelling from their software engineering. We build the complete growth engine under one roof.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : null}
              className="hero__btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 36px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                color: '#000000',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(29, 220, 168, 0.4)',
              }}
            >
              <span>Partner With GrowthHikes</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Who We Are (waw-section with Video Reel & 3 Foundational Pillars - Clean Light Edition) */}
      <section className="waw-section" style={{ padding: '80px 0 100px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '32px' }}>
            <SideLabel text="WHO WE ARE" theme="light" />

            <div style={{ flex: 1, minWidth: 0 }}>
              
              {/* Studio Reel Showcase Card */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '16/8',
                background: '#0a0d15',
                border: '1px solid #27272a',
                marginBottom: '56px',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.25)',
              }}>
                {!isPlayingVideo ? (
                  <div
                    onClick={() => setIsPlayingVideo(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(180deg, rgba(3, 4, 7, 0.3) 0%, rgba(3, 4, 7, 0.85) 100%)',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 50% 50%, rgba(29, 220, 168, 0.22) 0%, transparent 65%)',
                    }} />

                    {/* Animated Ripple Pulse */}
                    <div style={{
                      position: 'relative',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(29, 220, 168, 0.5)',
                        animation: 'ripple 2s infinite ease-out',
                      }} />
                      <div style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        boxShadow: '0 0 30px rgba(29, 220, 168, 0.6)',
                        zIndex: 2,
                      }}>
                        <Play size={28} fill="#000" style={{ marginLeft: '4px' }} />
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      background: 'rgba(29, 220, 168, 0.15)',
                      padding: '6px 18px',
                      borderRadius: '999px',
                      border: '1px solid rgba(29, 220, 168, 0.35)',
                    }}>
                      WATCH OUR CINEMATIC SHOWREEL
                    </span>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="GrowthHikes Studio Showcase"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* 3 Core Pillars */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(29, 220, 168, 0.15)',
                    border: '1px solid rgba(29, 220, 168, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    marginBottom: '20px',
                  }}>
                    <Rocket size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#09090b', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Fast Execution
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Quick turnarounds, rapid video cutting, and continuous agile deployments keep your business moving forward without bureaucratic delays.
                  </p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                    marginBottom: '20px',
                  }}>
                    <Lightbulb size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#09090b', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Creative Expertise
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Fresh storytelling, cinematic drone angles, and compelling hooks designed to transform ordinary brands into category market leaders.
                  </p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4f46e5',
                    marginBottom: '20px',
                  }}>
                    <Compass size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#09090b', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Strategic Thinking
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Every deliverable is guided by rigorous financial direction, conversion analytics, smart audience modeling, and purposeful execution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Content Box (vision-section from Talencee) */}
      <section className="vision-section" style={{ padding: '80px 0 100px 0', background: '#030407', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
              <Layers size={14} />
              <span>THE GROWTH METHODOLOGY</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-display)',
              marginBottom: '12px',
            }}>
              Our 4-Stage Execution Framework
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
              How we take brands from fragmented operations to industry-dominating growth engines.
            </p>
          </div>

          {/* Interactive Phase Selector Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}>
            {METHODOLOGY_PHASES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(idx)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  background: activePhase === idx ? 'rgba(29, 220, 168, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${activePhase === idx ? '#1ddca8' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: activePhase === idx ? '#1ddca8' : '#94a3b8',
                }}
              >
                <span>{p.step}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Box Card */}
          <div 
            className="dynamic-content-box"
            style={{
              position: 'relative',
              maxWidth: '920px',
              margin: '0 auto',
              borderRadius: '24px',
              padding: '48px 40px',
              background: 'linear-gradient(145deg, #0a0e18 0%, #06080d 100%)',
              border: '1px solid rgba(29, 220, 168, 0.25)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(29, 220, 168, 0.08)',
              overflow: 'hidden',
            }}
          >
            {/* Watermark Number */}
            <div 
              className="dcb-watermark"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '25px',
                fontSize: '9rem',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.03)',
                fontFamily: 'var(--font-display)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {METHODOLOGY_PHASES[activePhase].watermark}
            </div>

            <div className="dcb-body" style={{ position: 'relative', zIndex: 5 }}>
              <div style={{
                color: '#1ddca8',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {METHODOLOGY_PHASES[activePhase].step}
              </div>

              <h3 className="dcb-title" style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                marginBottom: '16px',
                lineHeight: 1.25,
              }}>
                {METHODOLOGY_PHASES[activePhase].title}
              </h3>

              <p className="dcb-text" style={{
                color: '#cbd5e1',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '750px',
              }}>
                {METHODOLOGY_PHASES[activePhase].text}
              </p>

              <div className="dcb-tags" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {METHODOLOGY_PHASES[activePhase].tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="dcb-tag"
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why GrowthHikes vs The Rest (Interactive Do/Don't Cards - Clean High-Contrast Edition) */}
      <section className="why-section" style={{ padding: '90px 0 110px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#059669',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '14px',
            }}>
              <Award size={14} />
              <span>THE GROWTHHIKES BENCHMARK</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#09090b',
              fontFamily: 'var(--font-display)',
              marginBottom: '14px',
            }}>
              Why Brands Choose GrowthHikes vs Traditional Agencies
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 28px auto' }}>
              Compare our streamlined, technology-first approach against outdated agency failures.
            </p>

            {/* Toggle Switch */}
            <div style={{
              display: 'inline-flex',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              borderRadius: '999px',
              padding: '4px',
              gap: '4px',
            }}>
              <button
                onClick={() => setIsDoActive(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  background: isDoActive ? '#1ddca8' : 'transparent',
                  color: isDoActive ? '#000000' : '#94a3b8',
                }}
              >
                <Check size={16} />
                <span>The GrowthHikes Standard</span>
              </button>

              <button
                onClick={() => setIsDoActive(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  background: !isDoActive ? '#ef4444' : 'transparent',
                  color: !isDoActive ? '#ffffff' : '#94a3b8',
                }}
              >
                <X size={16} />
                <span>Traditional Agency Pitfalls</span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {(isDoActive ? DO_CARDS : DONT_CARDS).map((card, idx) => (
              <div
                key={idx}
                className={`feature-card ${isDoActive ? 'do-card' : 'dont-card'}`}
                style={{
                  background: isDoActive ? 'rgba(10, 16, 26, 0.85)' : 'rgba(26, 12, 16, 0.85)',
                  border: `1px solid ${isDoActive ? 'rgba(29, 220, 168, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  borderRadius: '20px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: isDoActive ? 'rgba(29, 220, 168, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDoActive ? '#1ddca8' : '#ef4444',
                    marginBottom: '18px',
                  }}>
                    {isDoActive ? <Check size={22} /> : <X size={22} />}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                    {card.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {card.text}
                  </p>
                </div>

                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: isDoActive ? '#1ddca8' : '#ef4444',
                  background: isDoActive ? 'rgba(29, 220, 168, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  alignSelf: 'flex-start',
                }}>
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Service Delivery Hub Network (ms section from Talencee) */}
      <section className="ms" style={{ padding: '80px 0 100px 0', background: '#030407', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
              <Globe size={14} />
              <span>GLOBAL DELIVERY REACH</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-display)',
              marginBottom: '12px',
            }}>
              Global Service Delivery Network
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
              We deploy our FPV drone pilots, AI automation pipelines, and software engineers to clients worldwide.
            </p>
          </div>

          {/* Interactive World Canvas & Hub Detail Box */}
          <div style={{
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto 40px auto',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, #090d18 0%, #05060a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '36px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.7)',
          }}>
            {/* World Map SVG Mock with Pulsing Nodes */}
            <div style={{ position: 'relative', width: '100%', height: '340px', background: 'radial-gradient(circle at 50% 50%, rgba(29, 220, 168, 0.06) 0%, transparent 70%)', borderRadius: '16px', overflow: 'hidden' }}>
              
              {/* World Map Background Outline SVG */}
              <svg viewBox="0 0 1000 480" style={{ width: '100%', height: '100%', opacity: 0.25 }}>
                <path d="M150,120 Q220,100 280,140 Q320,180 250,260 Q180,240 140,180 Z" fill="#94a3b8" />
                <path d="M480,90 Q580,70 620,120 Q600,180 500,170 Q460,130 480,90 Z" fill="#94a3b8" />
                <path d="M520,200 Q600,190 640,260 Q580,360 510,320 Q480,240 520,200 Z" fill="#94a3b8" />
                <path d="M680,110 Q850,90 900,160 Q840,260 720,240 Q660,180 680,110 Z" fill="#94a3b8" />
                <path d="M780,310 Q860,300 880,370 Q820,410 770,360 Z" fill="#94a3b8" />
                <path d="M260,280 Q320,270 340,360 Q300,440 240,380 Z" fill="#94a3b8" />
              </svg>

              {/* Connecting Flight/Route Vectors */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <line x1="72%" y1="42%" x2="25%" y2="35%" stroke="rgba(29, 220, 168, 0.35)" strokeDasharray="4,4" />
                <line x1="72%" y1="42%" x2="51%" y2="30%" stroke="rgba(29, 220, 168, 0.35)" strokeDasharray="4,4" />
                <line x1="72%" y1="42%" x2="62%" y2="40%" stroke="rgba(29, 220, 168, 0.45)" strokeDasharray="4,4" />
                <line x1="72%" y1="42%" x2="81%" y2="58%" stroke="rgba(29, 220, 168, 0.35)" strokeDasharray="4,4" />
              </svg>

              {/* City Node Pins on Map */}
              {GLOBAL_HUBS.map(hub => {
                const isSelected = selectedHub.id === hub.id;
                // Projected coordinates for map SVG
                const leftPos = `${((hub.lon + 180) / 360) * 85 + 7}%`;
                const topPos = `${((90 - hub.lat) / 180) * 80 + 10}%`;

                return (
                  <div
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    onMouseEnter={() => setMapHoverHub(hub)}
                    onMouseLeave={() => setMapHoverHub(null)}
                    style={{
                      position: 'absolute',
                      top: topPos,
                      left: leftPos,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      zIndex: 10,
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      width: isSelected ? '18px' : '12px',
                      height: isSelected ? '18px' : '12px',
                      borderRadius: '50%',
                      background: isSelected ? '#1ddca8' : '#8dffe0',
                      boxShadow: isSelected ? '0 0 20px #1ddca8' : '0 0 10px rgba(29, 220, 168, 0.6)',
                      transition: 'all 0.25s ease',
                    }}>
                      {isSelected && (
                        <span style={{
                          position: 'absolute',
                          inset: '-6px',
                          borderRadius: '50%',
                          border: '1.5px solid #1ddca8',
                          animation: 'ripple 1.8s infinite',
                        }} />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Live Selected Hub Card Over Map */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '20px',
                background: 'rgba(6, 9, 15, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(29, 220, 168, 0.35)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#1ddca8',
                  boxShadow: '0 0 12px #1ddca8',
                }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {selectedHub.name} · <span style={{ color: '#1ddca8', fontWeight: 600 }}>{selectedHub.region}</span>
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    {selectedHub.role} · Edge Latency: {selectedHub.latency}
                  </span>
                </div>
              </div>

            </div>

            {/* Hub Selector Grid */}
            <div 
              className="ms__hub-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
                marginTop: '24px',
              }}
            >
              {GLOBAL_HUBS.map(hub => {
                const isActive = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '14px',
                      background: isActive ? 'rgba(29, 220, 168, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${isActive ? '#1ddca8' : 'rgba(255, 255, 255, 0.08)'}`,
                      color: isActive ? '#1ddca8' : '#cbd5e1',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                      {hub.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                      {hub.region}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Minds Behind GrowthHikes (team-section from Talencee) */}
      <section className="team-section" style={{ padding: '80px 0 100px 0', background: '#05070c' }}>
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
              <Users size={14} />
              <span>THE LEADERSHIP &amp; ENGINEERING DESK</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-display)',
              marginBottom: '12px',
            }}>
              The Minds That Deliver
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Multidisciplinary specialists combining licensed drone piloting, autonomous machine learning, and venture growth engineering.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
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
                  <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '1/1', marginBottom: '20px' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#1ddca8',
                      background: 'rgba(0, 0, 0, 0.75)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(29, 220, 168, 0.4)',
                    }}>
                      {member.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1ddca8', marginBottom: '14px' }}>
                    {member.role}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Discovery Session CTA */}
      <section style={{
        padding: '90px 0',
        background: '#04060a',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Build Your Category Leader Engine
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Book a direct strategy session with our executive producers and systems architects. We will audit your current growth bottlenecks and show live prototypes.
          </p>
          <button
            onClick={() => onOpenBooking ? onOpenBooking() : null}
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
            Schedule Discovery Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
