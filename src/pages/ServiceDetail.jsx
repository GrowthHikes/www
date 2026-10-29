import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_CATALOG } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, Sparkles, Clock, TrendingUp, ShieldCheck, ArrowRight, Zap, Layers } from 'lucide-react';

export default function ServiceDetail({ onOpenBooking }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES_CATALOG.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '16px' }}>Service Not Found</h1>
        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>The requested growth or engineering vertical does not exist.</p>
        <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
          Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 0 100px 0' }}>
      {/* Breadcrumb & Top Bar */}
      <div className="container" style={{ marginBottom: '30px' }}>
        <Link
          to="/services"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section style={{
        padding: '50px 0 60px 0',
        background: 'radial-gradient(ellipse at 50% 10%, rgba(0, 200, 150, 0.12) 0%, transparent 70%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(0, 200, 150, 0.15)',
              color: '#00c896',
              border: '1px solid rgba(0, 200, 150, 0.3)',
            }}>
              {service.category.toUpperCase()}
            </span>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94a3b8',
              fontSize: '0.85rem',
            }}>
              <Clock size={14} />
              <span>Turnaround: {service.turnaround}</span>
            </span>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '0.85rem',
            }}>
              <TrendingUp size={14} />
              <span>Impact: {service.metric}</span>
            </span>
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
            {service.title}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e1',
            lineHeight: 1.65,
            marginBottom: '36px',
            maxWidth: '820px',
          }}>
            {service.shortDesc}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block' }}>Estimated Starting Tier</span>
              <strong style={{ fontSize: '1.8rem', color: '#00c896', fontWeight: 800 }}>{service.startingPrice}</strong>
            </div>

            <button
              onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: [service.id] }) : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00c896 0%, #059669 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 200, 150, 0.35)',
              }}
            >
              <span>Book This Service</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Deliverables & Deep Scope */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}>
            {/* Deliverables Column */}
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                Comprehensive Deliverables
              </h2>

              <div style={{
                background: 'rgba(18, 20, 30, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '30px',
              }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#00c896" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Execution Process & Milestones */}
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
                Execution Process
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  background: 'rgba(18, 20, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(0, 200, 150, 0.15)',
                      color: '#00c896',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                    }}>1</span>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Discovery & Technical Audit</strong>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                    We analyze your current metrics, account configurations, codebase, or creative assets to outline precise KPIs.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(18, 20, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(0, 200, 150, 0.15)',
                      color: '#00c896',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                    }}>2</span>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Production & Engineering Sprint</strong>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                    Flight permissions, 4K shoot execution, frontend coding, or API bot wiring begins with daily asynchronous updates.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(18, 20, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(0, 200, 150, 0.15)',
                      color: '#00c896',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                    }}>3</span>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Quality Assurance & Launch</strong>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                    Rigorous testing across screen resolutions, mobile devices, audio calibrators, and conversion tracking before full release.
                  </p>
                </div>

                <div style={{
                  background: 'rgba(18, 20, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(0, 200, 150, 0.15)',
                      color: '#00c896',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                    }}>4</span>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Continuous Growth & Optimization</strong>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                    Real-time ROAS tracking, automated dashboard feeds, retention retargeting, and continuous feature expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Related Services Callout */}
      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 200, 150, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
            border: '1px solid rgba(0, 200, 150, 0.25)',
            borderRadius: '20px',
            padding: '36px',
            textAlign: 'center',
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>
              Need a Custom Bundle or Multi-Service Sprint?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Most clients pair {service.title} with our Drone Shoots or Next.js Web Platforms for exponential omnichannel lift.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ selectedServices: [service.id] }) : null}
                className="btn-primary"
              >
                <span>Book Sprint Consultation</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none' }}>
                Browse Other Verticals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
