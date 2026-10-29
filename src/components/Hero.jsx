import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Bot, Sparkles, ArrowRight, ShieldCheck, Zap, Play, CheckCircle2, Star } from 'lucide-react';
import { CONTACT_PHONE_IN } from '../data/servicesData';

export default function Hero({ onOpenBooking, onOpenCalculator }) {
  return (
    <section style={{
      padding: '110px 0 70px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 10%, rgba(0, 200, 150, 0.08) 0%, rgba(10, 11, 16, 1) 70%)',
    }}>
      {/* Decorative gradient glow orbs */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 200, 150, 0.18) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Animated Badge Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 18px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(0, 200, 150, 0.35)',
          boxShadow: '0 4px 20px rgba(0, 200, 150, 0.12)',
          marginBottom: '26px',
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#00c896',
            boxShadow: '0 0 10px #00c896',
            animation: 'pulse 2s infinite ease-in-out',
          }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.02em' }}>
            Next-Gen Digital Marketing & Custom Software Studio
          </span>
          <span style={{
            background: 'rgba(0, 200, 150, 0.15)',
            color: '#00c896',
            fontSize: '0.75rem',
            padding: '2px 8px',
            borderRadius: '12px',
            fontWeight: 700,
          }}>
            India & USA
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 5.8vw, 4.6rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          maxWidth: '1040px',
          margin: '0 auto 24px auto',
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
        }}>
          Transform Your Brand with{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00c896 0%, #2cc295 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Drone Cinematography
          </span>
          , Viral Reels &{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Autonomous AI Agents
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          lineHeight: 1.65,
          fontWeight: 400,
        }}>
          We merge high-velocity creative production—4K FPV drone shoots, Google Local SEO, and Instagram/Meta management—with battle-tested engineering: Next.js platforms, iOS/Android apps, WhatsApp bots, and autonomous voice calling agents.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: '56px',
        }}>
          <button
            onClick={onOpenBooking}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.02rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0, 200, 150, 0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <span>Book Growth Consultation</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onOpenCalculator}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 30px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#f8fafc',
              fontWeight: 600,
              fontSize: '1.02rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Sparkles size={18} color="#00c896" />
            <span>Instant Quote Calculator</span>
          </button>
        </div>

        {/* High-Impact Stat / Feature Highlights Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '16px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <div style={{
            background: 'rgba(18, 20, 30, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '22px 20px',
            textAlign: 'left',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s ease, transform 0.2s ease',
          }}>
            <div style={{
              padding: '12px',
              borderRadius: '12px',
              background: 'rgba(0, 200, 150, 0.15)',
              color: '#00c896',
            }}>
              <Camera size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>4K / 60fps & FPV</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Certified Drone Pilots & Reels</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(18, 20, 30, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '22px 20px',
            textAlign: 'left',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s ease, transform 0.2s ease',
          }}>
            <div style={{
              padding: '12px',
              borderRadius: '12px',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
            }}>
              <Bot size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>Autonomous AI</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Voice Calling & WhatsApp Bots</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(18, 20, 30, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '22px 20px',
            textAlign: 'left',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s ease, transform 0.2s ease',
          }}>
            <div style={{
              padding: '12px',
              borderRadius: '12px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#38bdf8',
            }}>
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>4.8x Avg ROAS</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Meta CAPI & Google Performance</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(18, 20, 30, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '22px 20px',
            textAlign: 'left',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s ease, transform 0.2s ease',
          }}>
            <div style={{
              padding: '12px',
              borderRadius: '12px',
              background: 'rgba(234, 179, 8, 0.15)',
              color: '#facc15',
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>21+ Tech Badges</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Full-Stack & Native App Lab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
