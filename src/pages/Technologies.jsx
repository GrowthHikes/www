import React from 'react';
import TechStackGrid from '../components/TechStackGrid';
import { Sparkles, Code2, Server, Smartphone, Database, Palette, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Technologies({ onOpenBooking }) {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            color: '#38bdf8',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>FULL-STACK ENGINEERING STACK</span>
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
            Technologies Powering Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8 0%, #00c896 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              High-Performance Studio
            </span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '750px',
            margin: '0 auto 36px auto',
          }}>
            From dynamic websites to feature-rich mobile applications, we harness the power of top-tier technologies to make your digital experience functional, resilient, and user-friendly.
          </p>
        </div>
      </section>

      {/* Complete Pixelate Nest Inspired Tech Badges Grid */}
      <TechStackGrid />

      {/* Engineering Standards at GrowthHikes */}
      <section style={{ padding: '60px 0 30px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
              How We Architect Production Systems
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '10px' }}>
              We don’t just write code; we build maintainable, battle-tested software adhering to strict automated testing and CI/CD protocols.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <Code2 size={24} color="#00c896" style={{ marginBottom: '14px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                TypeScript & Modern React
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every web project is built on TypeScript with strict linting, zero any types, and component-driven architecture for rapid iteration and long-term stability.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <Server size={24} color="#6366f1" style={{ marginBottom: '14px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                Event-Driven Cloud Backends
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Serverless and containerized microservices on AWS and Google Cloud with automatic autoscaling, Redis caching, and 99.99% service level agreements.
              </p>
            </div>

            <div style={{
              background: 'rgba(18, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px',
            }}>
              <Smartphone size={24} color="#38bdf8" style={{ marginBottom: '14px' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                60 FPS Native Performance
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Using React Native and Flutter with native bridge optimizations, smooth reanimated transitions, and offline-first SQLite synchronization.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '40px',
            borderRadius: '20px',
            background: 'rgba(18, 20, 30, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>
              Have an Existing Codebase or Legacy Stack?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              We regularly modernize PHP/WordPress legacy sites into blazing-fast headless Next.js platforms, or migrate monolithic backends into Node.js/Python microservices.
            </p>
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: ['web-development'] }) : null}
              className="btn-primary"
            >
              <span>Consult Our Engineering Leads</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
