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
      background: '#040608',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
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
                padding: '6px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1ddca8' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.02em' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  [{item.domain}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Badge */}
        <div className="trusted-text" style={{
          flexShrink: 0,
          padding: '8px 20px',
          borderRadius: '9999px',
          background: 'rgba(29, 220, 168, 0.1)',
          border: '1px solid rgba(29, 220, 168, 0.3)',
          color: '#ffffff',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Industry Leaders Trust <span className="trusted-brand" style={{ color: '#1ddca8' }}>GrowthHikes</span>
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
                padding: '6px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.02em' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
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
