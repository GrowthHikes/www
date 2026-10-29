import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_CATALOG, SERVICE_CATEGORIES } from '../data/servicesData';
import { Sparkles, ArrowRight, Check, Search, Filter, ShieldCheck, Zap } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return SERVICES_CATALOG.filter((svc) => {
      const matchesCat = activeCategory === 'all' || svc.category === activeCategory;
      const matchesQuery = !searchQuery.trim() ||
        svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(0, 200, 150, 0.1) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
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
            <span>FULL-SPECTRUM AGENCY SERVICES</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}>
            All 14 Growth & Engineering Verticals
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 36px auto',
          }}>
            Select a service to view technical specifications, deliverables, pricing tiers, and turnaround times. Every solution is custom engineered for maximum return on investment.
          </p>

          {/* Search bar */}
          <div style={{
            maxWidth: '480px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search services (e.g. drone, WhatsApp, Next.js, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '12px',
                background: 'rgba(18, 20, 30, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '20px 0 40px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {SERVICE_CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: active ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: active ? 'rgba(0, 200, 150, 0.15)' : 'rgba(18, 20, 30, 0.6)',
                    color: active ? '#00c896' : '#94a3b8',
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}>
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                style={{
                  background: 'rgba(18, 20, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  {/* Category tag & Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#00c896',
                      border: '1px solid rgba(0, 200, 150, 0.2)',
                    }}>
                      {svc.category}
                    </span>

                    <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                      {svc.turnaround}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {svc.title}
                  </h3>

                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>
                    {svc.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div style={{
                    background: 'rgba(10, 11, 16, 0.5)',
                    padding: '14px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                  }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Deliverables:
                    </strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {svc.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#94a3b8' }}>
                          <Check size={14} color="#00c896" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer price & actions */}
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '18px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '16px',
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Starting investment</span>
                      <strong style={{ fontSize: '1.25rem', color: '#00c896', fontWeight: 800 }}>{svc.startingPrice}</strong>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Target Metric</span>
                      <strong style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 700 }}>{svc.metric}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link
                      to={`/services/${svc.slug}`}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '11px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                      }}
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: [svc.id] }) : null}
                      style={{
                        flex: 1,
                        padding: '11px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
