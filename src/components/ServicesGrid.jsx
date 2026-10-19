import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
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
  CheckCircle2,
  ArrowUpRight,
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
};

const CATEGORIES = ['All Verticals', 'Creative Media', 'Social Media', 'Local Dominance', 'AI Voice Tech', 'AI Automation', 'Engineering'];

export default function ServicesGrid({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All Verticals');

  const filteredServices = activeCategory === 'All Verticals'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>Complete Service Portfolio</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
            Everything Modern Brands Need to <span className="gradient-text">Scale & Automate</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            From drone reels that capture attention to automated software and voice bots that convert traffic into closed revenue.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: activeCategory === cat ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
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
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818cf8',
                    }}>
                      <IconComponent size={24} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#22d3ee',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                    }}>
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#a5b4fc', marginBottom: '16px', fontWeight: 500 }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {service.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Pricing & Action */}
                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pricing From</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {service.priceFrom} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)' }}>({service.priceINR})</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="btn-secondary"
                    style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                  >
                    <span>Inquire</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
