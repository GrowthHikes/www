import React from 'react';
import { Camera, ShieldCheck, Video, Compass, Sparkles, CheckCircle } from 'lucide-react';

export default function DroneShowcase({ onBookDrone }) {
  return (
    <section id="drone" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: '24px',
          padding: '50px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}>
          {/* Left Column */}
          <div>
            <div className="badge" style={{ marginBottom: '16px' }}>
              <Camera size={14} />
              <span>Aerial & FPV Production Studio</span>
            </div>

            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '18px', lineHeight: 1.2 }}>
              High-Velocity <span className="gradient-text">Drone Cinematography</span> & FPV Walkthroughs
            </h2>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              Static photography no longer commands attention. We engineer breathtaking 4K 60fps aerial panoramas and high-speed indoor FPV drone dives that make prospective clients pause and engage.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem' }}>4K/60fps 10-bit HDR</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Crisp color fidelity on every screen</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem' }}>Indoor FPV CineWhoop</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Safe single-take walkthroughs</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem' }}>DGCA & FAA Compliant</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Permits, safety, pilot certifications</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem' }}>Reels & Shorts Ready</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vertical 9:16 cuts + viral audio</span>
                </div>
              </div>
            </div>

            <button onClick={onBookDrone} className="btn-primary" style={{ padding: '12px 24px' }}>
              <Video size={18} />
              <span>Schedule Aerial Survey / Shoot</span>
            </button>
          </div>

          {/* Right Column: Visual Equipment Card */}
          <div style={{
            background: 'rgba(10, 11, 16, 0.7)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '28px',
          }}>
            <div style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
              Flight Fleet & Specifications
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Professional Cinema Drone Rig</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Primary Cinema Rig</span>
                <span style={{ fontWeight: 600 }}>DJI Mavic 3 Pro / Air 3 (Hasselblad Color)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'var(--text-muted)' }}>FPV Indoor Drone</span>
                <span style={{ fontWeight: 600 }}>Custom Protected CineWhoop + Naked GoPro 12</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Stabilization</span>
                <span style={{ fontWeight: 600 }}>3-Axis Mechanical Gimbal + Gyroflow Post</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Resolution Options</span>
                <span style={{ fontWeight: 600 }}>5.1K 50fps, 4K 120fps Slow-Mo, D-Log M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Post-Production</span>
                <span style={{ fontWeight: 600 }}>DaVinci Resolve Studio Color Grading</span>
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              padding: '12px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              fontSize: '0.8rem',
              color: '#a5b4fc',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Compass size={16} color="#6366f1" />
              <span>Available for shoots across India and international assignments on request.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
