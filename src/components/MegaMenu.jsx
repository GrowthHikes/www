import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_CATEGORIES, SERVICES_DATA } from '../data/servicesData';

export default function MegaMenu({ isOpen, onClose, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(SERVICES_DATA[0]);
  const navigate = useNavigate();

  // Scroll locking & Escape key handler
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const handleServiceClick = (slug) => {
    onClose();
    navigate(`/services/${slug}`);
  };

  return (
    <div
      className="mm-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3, 4, 7, 0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="mm-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '90vh',
          backgroundColor: '#090c14',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 40px rgba(29, 220, 168, 0.12)',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {/* Close Button Top Right */}
        <button
          className="mm-close-btn-prime"
          onClick={onClose}
          aria-label="Close Menu"
          style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            zIndex: 60,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            e.currentTarget.style.color = '#f87171';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          <X size={16} />
          <span>CLOSE</span>
        </button>

        {/* Left Side Label Strip */}
        <div
          className="mm-strip"
          style={{
            width: '48px',
            backgroundColor: '#06080d',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 0',
            flexShrink: 0,
          }}
        >
          <span
            className="mm-menu-label"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#64748b',
              whiteSpace: 'nowrap',
            }}
          >
            GROWTH HIKES CAPABILITIES
          </span>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#1ddca8',
              boxShadow: '0 0 10px #1ddca8',
            }}
          />
        </div>

        {/* Middle Column: Categories & Services List */}
        <div
          className="mm-main-col"
          style={{
            flex: 1,
            padding: '36px 32px',
            overflowY: 'auto',
            maxHeight: '90vh',
            backgroundColor: '#090c14',
          }}
        >
          <div className="mm-header-info" style={{ marginBottom: '24px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#1ddca8',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px',
              }}
            >
              <Sparkles size={14} color="#1ddca8" />
              <span>END-TO-END GROWTH &amp; ENGINEERING</span>
            </span>
            <h2
              style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-display)',
              }}
            >
              Explore Our Capabilities
            </h2>
          </div>

          {/* Category Tabs */}
          <div
            className="mm-categories"
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {SERVICES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  backgroundColor: activeCategory === cat.id ? 'rgba(29, 220, 168, 0.16)' : '#111522',
                  border: `1px solid ${activeCategory === cat.id ? '#1ddca8' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: activeCategory === cat.id ? '#1ddca8' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Services List */}
          <div
            className="mm-services-list"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`mm-service-row ${hoveredService?.id === service.id ? 'selected' : ''}`}
                onMouseEnter={() => setHoveredService(service)}
                onClick={() => handleServiceClick(service.slug)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  backgroundColor: hoveredService?.id === service.id ? '#151b2b' : '#0e121d',
                  border: `1px solid ${hoveredService?.id === service.id ? 'rgba(29, 220, 168, 0.45)' : 'rgba(255, 255, 255, 0.07)'}`,
                  boxShadow: hoveredService?.id === service.id ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ maxWidth: '85%' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#1ddca8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                    }}
                  >
                    {service.categoryLabel}
                  </span>
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '4px',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {service.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#94a3b8',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {service.shortDesc}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  style={{
                    color: hoveredService?.id === service.id ? '#1ddca8' : '#64748b',
                    transform: hoveredService?.id === service.id ? 'translateX(4px)' : 'none',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    marginLeft: '12px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Preview Card */}
        <div
          className="mm-preview-col"
          style={{
            width: '380px',
            flexShrink: 0,
            padding: '60px 28px 32px 28px',
            backgroundColor: '#0c0f18',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {hoveredService && (
            <div
              style={{
                backgroundColor: '#111624',
                border: '1px solid rgba(29, 220, 168, 0.25)',
                borderRadius: '20px',
                padding: '26px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#1ddca8',
                      background: 'rgba(29, 220, 168, 0.1)',
                      border: '1px solid rgba(29, 220, 168, 0.3)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {hoveredService.categoryLabel}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    From {hoveredService.priceStarts}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-display)',
                    lineHeight: 1.25,
                  }}
                >
                  {hoveredService.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {hoveredService.tagline}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#cbd5e1',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '10px',
                    }}
                  >
                    KEY DELIVERABLES:
                  </span>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {hoveredService.deliverables.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '0.84rem',
                          color: '#e2e8f0',
                          lineHeight: 1.4,
                        }}
                      >
                        <CheckCircle2 size={15} color="#1ddca8" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking({ selectedServices: [hoveredService.id] });
                  }}
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                    color: '#000000',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(29, 220, 168, 0.3)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => handleServiceClick(hoveredService.slug)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  }}
                >
                  <span>Full Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
