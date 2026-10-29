import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICES_CATEGORIES } from '../data/servicesData';
import {
  Camera,
  MapPin,
  Instagram,
  Bot,
  MessageSquare,
  Globe,
  Smartphone,
  Headphones,
  PhoneCall,
  Zap,
  Target,
  Mail,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Camera,
  MapPin,
  Instagram,
  Bot,
  MessageSquare,
  Globe,
  Smartphone,
  Headphones,
  PhoneCall,
  Zap,
  Target,
  Mail,
  Sparkles,
};

export default function ServicesGrid({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ padding: '90px 0', background: 'rgba(10, 11, 16, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={13} />
            <span>Complete Service Portfolio</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Everything Modern Brands Need to <span className="gradient-text">Scale & Automate</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            From 4K drone reels that command attention to Next.js platforms, WhatsApp bots, and autonomous AI voice agents that convert traffic into closed revenue.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '44px',
        }}>
          {SERVICES_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: isActive ? 'rgba(0, 200, 150, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#00c896' : '#94a3b8',
                  border: isActive ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {filteredServices.map(service => {
            const IconComponent = ICON_MAP[service.icon] || Zap;

            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                }}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(0, 200, 150, 0.12)',
                      border: '1px solid rgba(0, 200, 150, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00c896',
                    }}>
                      <IconComponent size={24} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#00c896',
                      border: '1px solid rgba(0, 200, 150, 0.2)',
                    }}>
                      {service.categoryLabel || service.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#a5b4fc', marginBottom: '14px', fontWeight: 500, lineHeight: 1.5 }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                    {service.shortDesc || service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {(service.deliverables || service.features).slice(0, 3).map((feat, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.84rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={16} color="#00c896" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Pricing & Actions */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block', textTransform: 'uppercase' }}>Starting from</span>
                      <strong style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00c896' }}>
                        {service.startingPrice || service.priceINR || service.priceStarts}
                      </strong>
                    </div>

                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      {service.turnaround || service.timeline}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link
                      to={`/services/${service.slug}`}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Scope Details</span>
                      <ArrowRight size={13} />
                    </Link>

                    <button
                      onClick={() => onSelectService(service)}
                      className="btn-primary"
                      style={{ flex: 1, padding: '10px', fontSize: '0.85rem', borderRadius: '10px' }}
                    >
                      <span>Book Sprint</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
