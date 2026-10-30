import React from 'react';

const PARTNERS = [
  { name: 'NexGen Cloud', domain: 'Cloud & AI Infrastructure' },
  { name: 'AeroVue Estates', domain: 'Luxury Real Estate' },
  { name: 'FinVertex', domain: 'Fintech & Payments' },
  { name: 'Zenith Hospitality', domain: 'Hotels & Resorts' },
  { name: 'OmniFlow SaaS', domain: 'Enterprise Automation' },
  { name: 'Apex Athletics', domain: 'D2C E-commerce' },
  { name: 'DentalWorks Pro', domain: 'Healthcare & Clinics' },
  { name: 'UrbanCraft', domain: 'Architecture & Interior' },
];

export default function TrustedBanner() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <div className="trusted-wrapper" style={{
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      padding: '24px 0',
      overflow: 'hidden',
    }}>
      <div className="trusted-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        maxWidth: '1440px',
        margin: '0 auto',
      }}>
        {/* Left Marquee */}
        <div className="trusted-carousel" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div className="trusted-track" style={{
            display: 'flex',
            gap: '32px',
            animation: 'scrollLeft 30s linear infinite',
            whiteSpace: 'nowrap',
          }}>
            {doubled.map((item, idx) => (
              <div key={`l-${idx}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', letterSpacing: '0.01em' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>
                  [{item.domain}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Badge - Solid Black Pill for High Contrast */}
        <div className="trusted-text" style={{
          flexShrink: 0,
          padding: '10px 24px',
          borderRadius: '9999px',
          background: '#09090b',
          border: '1px solid #27272a',
          color: '#ffffff',
          fontSize: '0.82rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
        }}>
          Industry Leaders Trust <span className="trusted-brand" style={{ color: '#10b981', marginLeft: '4px' }}>GrowthHikes</span>
        </div>

        {/* Right Marquee */}
        <div className="trusted-carousel" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div className="trusted-track" style={{
            display: 'flex',
            gap: '32px',
            animation: 'scrollLeft 30s linear infinite reverse',
            whiteSpace: 'nowrap',
          }}>
            {doubled.map((item, idx) => (
              <div key={`r-${idx}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', letterSpacing: '0.01em' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>
                  [{item.domain}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
