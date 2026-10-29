import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Instagram, Phone, Mail, ArrowUpRight, Sparkles, MapPin, Globe } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_PHONE_IN, CONTACT_PHONE_US } from '../data/servicesData';
import Logo from './Logo';

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative',
      background: '#07080e',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden',
      color: '#94a3b8',
      fontSize: '0.9rem',
    }}>
      {/* Semicircle Curved Glowing Banner (Talencee Style) */}
      <div style={{
        position: 'relative',
        padding: '100px 24px 80px 24px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 200, 150, 0.22), rgba(99, 102, 241, 0.12) 45%, transparent 75%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        {/* Subtle decorative glowing arch */}
        <div style={{
          position: 'absolute',
          top: '-140px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(1200px, 92vw)',
          height: '240px',
          borderRadius: '50%',
          borderTop: '2px solid rgba(0, 200, 150, 0.45)',
          boxShadow: '0 0 50px rgba(0, 200, 150, 0.25)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 200, 150, 0.12)',
            border: '1px solid rgba(0, 200, 150, 0.35)',
            color: '#2cc295',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>Scale Your Brand with High-Impact Execution</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}>
            Let’s start building something <span style={{
              background: 'linear-gradient(135deg, #00c896 0%, #2cc295 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>great together!</span>
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 32px auto',
          }}>
            From 4K FPV drone cinematography and viral Meta reels to production Next.js web platforms and autonomous AI voice agents—GrowthHikes drives exponential business results.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '40px',
          }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.location.href = '/contact'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 200, 150, 0.35)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Schedule a Strategy Session</span>
              <ArrowUpRight size={18} />
            </button>

            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
              }}
            >
              <span>Explore All 14 Services</span>
            </Link>
          </div>

          {/* Quick Contact Hotlines Banner */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <a
              href={`tel:${CONTACT_PHONE_IN.replace(/\s+/g, '')}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
              <strong>India:</strong>
              <span style={{ color: '#2cc295' }}>{CONTACT_PHONE_IN}</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE_US.replace(/\D/g, '')}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>🇺🇸</span>
              <strong>USA:</strong>
              <span style={{ color: '#2cc295' }}>{CONTACT_PHONE_US}</span>
            </a>

            <a
              href="mailto:contact@growthhikes.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <Mail size={15} color="#2cc295" />
              <span>contact@growthhikes.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container" style={{ padding: '70px 24px 40px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '16px' }}>
              <Logo height={38} variant="full" />
            </div>

            <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#94a3b8' }}>
              Elite full-service digital growth studio & custom software engineering lab. Empowering ambitious brands with cinematic visuals, hyper-scaled performance ads, and autonomous AI agents.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#fb7185',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <Instagram size={16} />
                <span>Follow {INSTAGRAM_HANDLE}</span>
              </a>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.8rem' }}>
                <ShieldCheck size={14} color="#00c896" />
                <span>Part of Infortts Ecosystem Fleet</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About GrowthHikes</Link></li>
              <li><Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services Directory</Link></li>
              <li><Link to="/solutions" style={{ color: '#94a3b8', textDecoration: 'none' }}>AI Solutions & Bots</Link></li>
              <li><Link to="/technologies" style={{ color: '#94a3b8', textDecoration: 'none' }}>Technologies Stack</Link></li>
              <li><Link to="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Case Studies & Blog</Link></li>
              <li><Link to="/careers" style={{ color: '#94a3b8', textDecoration: 'none' }}>Careers (We’re Hiring)</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Column 2: Growth & Media */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Growth & Media
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/services/drone-cinematography" style={{ color: '#94a3b8', textDecoration: 'none' }}>4K Drone Cinematography</Link></li>
              <li><Link to="/services/hyperlocal-seo-gmb" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hyperlocal GMB SEO</Link></li>
              <li><Link to="/services/instagram-meta-growth" style={{ color: '#94a3b8', textDecoration: 'none' }}>Viral Instagram Management</Link></li>
              <li><Link to="/services/paid-advertising-capi" style={{ color: '#94a3b8', textDecoration: 'none' }}>Paid Advertising (Meta/Google)</Link></li>
              <li><Link to="/services/ugc-creator-engine" style={{ color: '#94a3b8', textDecoration: 'none' }}>UGC Creator Engine</Link></li>
              <li><Link to="/services/email-sms-funnels" style={{ color: '#94a3b8', textDecoration: 'none' }}>Automated Email Funnels</Link></li>
              <li><Link to="/services/ecommerce-mentorship" style={{ color: '#94a3b8', textDecoration: 'none' }}>Ecommerce Mentorship</Link></li>
            </ul>
          </div>

          {/* Column 3: Software & AI */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Software & AI
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/services/custom-web-platforms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Next.js Web Platforms</Link></li>
              <li><Link to="/services/mobile-apps-react-flutter" style={{ color: '#94a3b8', textDecoration: 'none' }}>iOS & Android Native Apps</Link></li>
              <li><Link to="/services/whatsapp-cloud-api-bots" style={{ color: '#94a3b8', textDecoration: 'none' }}>WhatsApp Cloud API Bots</Link></li>
              <li><Link to="/services/autonomous-support-concierge" style={{ color: '#94a3b8', textDecoration: 'none' }}>Autonomous Support Agents</Link></li>
              <li><Link to="/services/autonomous-voice-calling-agents" style={{ color: '#94a3b8', textDecoration: 'none' }}>AI Calling Agents</Link></li>
              <li><Link to="/services/brand-ui-ux-design" style={{ color: '#94a3b8', textDecoration: 'none' }}>Brand Identity & UI/UX</Link></li>
              <li><Link to="/services/analytics-attribution-pipelines" style={{ color: '#94a3b8', textDecoration: 'none' }}>Attribution Pipelines</Link></li>
            </ul>
          </div>

          {/* Column 4: Sibling Ventures */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ecosystem
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.88rem' }}>Infortts Group</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Enterprise Cloud Infra & Autonomous Mesh</span>
              </div>
              <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.88rem' }}>NaiBooking</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Salon ERP & Customer Booking App</span>
              </div>
              <div style={{ padding: '10px 14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.88rem' }}>Shubham Computers</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Hardware, Networking & IT Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#64748b',
        }}>
          <div>
            © {currentYear} GrowthHikes Studio. All rights reserved. Built with precision for modern hyper-growth brands.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
