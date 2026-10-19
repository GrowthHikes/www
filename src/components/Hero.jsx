import React from 'react';
import { Camera, Bot, Smartphone, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenCalculator }) {
  return (
    <section style={{
      padding: '90px 0 60px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(10, 11, 16, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(10, 11, 16, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Sibling badge */}
        <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
          <div className="badge">
            <Zap size={14} color="#6366f1" />
            <span>Digital Marketing & Custom Software Engineering Studio</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '24px',
          maxWidth: '1000px',
          margin: '0 auto 24px auto',
        }}>
          Transform Your Brand with <span className="gradient-text">Drone Cinematography</span>, Viral Meta Growth & <span className="gradient-text">Autonomous AI Agents</span>.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          fontWeight: 400,
        }}>
          We merge high-velocity creative media—4K FPV drone shoots, Google Local SEO, and Instagram/Meta management—with cutting-edge software engineering: Next.js platforms, iOS/Android apps, WhatsApp bots, and autonomous voice calling agents.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px',
        }}>
          <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            <span>Book Growth Consultation</span>
            <ArrowRight size={18} />
          </button>
          <button onClick={onOpenCalculator} className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            <span>Calculate Instant Estimate</span>
          </button>
        </div>

        {/* Stat / Proof Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          maxWidth: '1080px',
          margin: '0 auto',
        }}>
          <div className="glass-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
              <Camera size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>4K / 60fps & FPV</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Certified Drone Pilots & Reels</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
              <Bot size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>&lt;800ms Voice AI</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Autonomous Calling & Support</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
              <Smartphone size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>iOS, Android & Web</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Flutter & Next.js Production</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>rttss-sahil Fleet</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Infortts & Naibooking Synergy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
