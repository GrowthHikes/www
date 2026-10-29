import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Zap, Globe, Users, Trophy, Target, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_PHONE_IN, CONTACT_PHONE_US } from '../data/servicesData';

export default function About({ onOpenBooking }) {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 60px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(0, 200, 150, 0.1) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
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
            <span>ABOUT GROWTHHIKES</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Where Cinematic Visuals Meet{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00c896 0%, #2cc295 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              High-Velocity Software
            </span>
            .
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '750px',
            margin: '0 auto',
          }}>
            GrowthHikes was founded on a singular conviction: modern brands cannot afford to disconnect their media production from their software engineering. We build the full growth engine under one roof.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
            <div>
              <span style={{ color: '#00c896', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Our Genesis
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#fff',
                marginTop: '10px',
                marginBottom: '20px',
                fontFamily: 'var(--font-display)',
              }}>
                The Digital Growth Studio for the Next Decade
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '18px' }}>
                Most creative agencies have no clue how to deploy an event-driven serverless architecture, calibrate Meta Conversions API (CAPI), or configure autonomous AI calling agents.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '24px' }}>
                Conversely, traditional software dev shops don’t know how to shoot 4K FPV drone footage that stops thumbs in the first 2 seconds of an Instagram Reel. GrowthHikes eliminates this compromise. We deploy certified drone pilots alongside Senior Full-Stack and AI engineers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc' }}>
                  <CheckCircle2 size={18} color="#00c896" />
                  <span>DGCA Certified Commercial Drone Pilots & Cinema Colorists</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc' }}>
                  <CheckCircle2 size={18} color="#00c896" />
                  <span>Production-Grade React Native, Flutter, and Next.js Developers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc' }}>
                  <CheckCircle2 size={18} color="#00c896" />
                  <span>Meta Blueprint & Google Premier Certified Performance Media Buyers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f8fafc' }}>
                  <CheckCircle2 size={18} color="#00c896" />
                  <span>Proprietary WhatsApp Cloud API & Autonomous Voice AI Stacks</span>
                </div>
              </div>
            </div>

            {/* Interactive Stats Visual Card */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(18, 20, 30, 0.95), rgba(10, 11, 16, 0.95))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(0, 200, 150, 0.15)',
                filter: 'blur(40px)',
              }} />

              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>
                Growth Metrics by the Numbers
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#00c896' }}>14+</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Full-Spectrum Services</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#6366f1' }}>21+</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Mastered Technologies</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38bdf8' }}>4.8x</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Average Client ROAS</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#facc15' }}>99.8%</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Enterprise SLA Uptime</div>
                </div>
              </div>

              <div style={{
                marginTop: '32px',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(0, 200, 150, 0.08)',
                border: '1px solid rgba(0, 200, 150, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <ShieldCheck size={24} color="#00c896" />
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <strong>Enterprise Ready:</strong> End-to-end NDA protection, strict IP transfer, and dedicated sprint managers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Sibling Network */}
      <section style={{
        padding: '70px 0',
        background: 'rgba(15, 17, 26, 0.6)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
              The Infortts Ecosystem Synergies
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '8px' }}>
              GrowthHikes draws upon the technical backbone, distributed cloud infrastructure, and proprietary tooling of the wider Infortts technology group.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00c896', marginBottom: '8px' }}>
                Infortts Group
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                High-frequency trading networks, distributed microservices, private cloud deployments, and resilient multi-region infrastructure.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#6366f1', marginBottom: '8px' }}>
                NaiBooking
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Next-gen salon and wellness ERP platform powering appointment scheduling, dynamic pricing, and staff management for service fleets.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8', marginBottom: '8px' }}>
                Shubham Computers
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Hardware lifecycle management, on-prem networking solutions, and enterprise IT hardware procurement across northern India.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#facc15', marginBottom: '8px' }}>
                FortheJanta
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Civic tech and public interest platform providing automated government scheme discovery and citizen assistance tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence & Call to Action */}
      <section style={{ padding: '80px 0 20px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Ready to Build Your Growth Engine?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Whether you want to launch a nationwide drone campaign, rebuild your web platform on Next.js, or automate your support desk with AI—our team is ready.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenBooking}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={18} />
            </button>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textDecoration: 'none',
              }}
            >
              <span>Direct Hotlines & Inquiries</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
