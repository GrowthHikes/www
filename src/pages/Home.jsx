import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import DroneShowcase from '../components/DroneShowcase';
import TechStackGrid from '../components/TechStackGrid';
import AiAgentsDemo from '../components/AiAgentsDemo';
import QuotationCalculator from '../components/QuotationCalculator';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Star } from 'lucide-react';

export default function Home({ onOpenBooking, onOpenCalculator }) {
  const handleSelectService = (service) => {
    onOpenBooking({ selectedServices: [service.id] });
  };

  const handleBookWithQuote = (quoteData) => {
    onOpenBooking(quoteData);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onOpenCalculator={onOpenCalculator}
      />

      {/* Services Overview Grid */}
      <ServicesGrid onSelectService={handleSelectService} />

      {/* 4K Drone Cinematography Spotlight */}
      <DroneShowcase onBookDrone={() => onOpenBooking({ selectedServices: ['drone-shooting'] })} />

      {/* Technologies Section (From pixelatenest.com & user design reference) */}
      <TechStackGrid />

      {/* Autonomous AI Agents & WhatsApp Bots Interactive Showcase */}
      <AiAgentsDemo />

      {/* Live Quotation & Scope Estimator */}
      <QuotationCalculator onBookWithQuote={handleBookWithQuote} />

      {/* Testimonials & Proof Section (Talencee Style) */}
      <section style={{
        padding: '90px 0',
        background: 'rgba(10, 11, 16, 0.9)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(0, 200, 150, 0.1)',
              color: '#00c896',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '14px',
            }}>
              <Star size={14} fill="#00c896" color="#00c896" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '14px',
              fontFamily: 'var(--font-display)',
            }}>
              Trusted by High-Velocity Founders & Enterprises
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Here is how our synergy of cinematic production, hyper-targeted ad funnels, and autonomous software transforms our partners’ balance sheets.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {/* Card 1 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#facc15' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                "GrowthHikes completely redefined our local presence. Their 4K drone reels generated over 1.2M views on Instagram within 45 days, and their Google Local SEO revamp placed our branches in the top 3 map pack across all target zip codes."
              </p>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Aman Singhania</strong>
                <span style={{ color: '#00c896', fontSize: '0.82rem' }}>Managing Director, Luxury Real Estate Fleet</span>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#facc15' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                "The WhatsApp Cloud API bot and autonomous AI support agent built by GrowthHikes eliminated 78% of our repetitive customer service tickets. Orders now flow directly from WhatsApp into our inventory backend with zero manual effort."
              </p>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Sneha Verma</strong>
                <span style={{ color: '#00c896', fontSize: '0.82rem' }}>Chief Technology Officer, NaiBooking</span>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              background: 'rgba(18, 20, 30, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#facc15' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                "We scaled our D2C brand from $40k/mo to over $210k/mo in under 6 months. GrowthHikes implemented server-side Conversions API (CAPI), high-converting UGC creative funnels, and optimized our Next.js storefront for sub-second speeds."
              </p>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>Marcus Chen</strong>
                <span style={{ color: '#00c896', fontSize: '0.82rem' }}>Founder & CEO, Apex Lifestyle Products (USA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
