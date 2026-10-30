import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore private storage restrictions
    }
  }, []);

  const handleChoice = (choice) => {
    try {
      localStorage.setItem('cookie_consent', choice);
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        width: 'calc(100% - 32px)',
        maxWidth: '860px',
        boxSizing: 'border-box',
        animation: 'slideUpBanner 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <div
        style={{
          background: 'rgba(11, 15, 20, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
          borderRadius: '18px',
          padding: '18px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            color: '#e2e8f0',
            lineHeight: 1.55,
            fontFamily: 'var(--font-sans)',
            flex: '1 1 340px',
          }}
        >
          We use cookies to improve your experience and analyse site traffic. See our{' '}
          <Link
            to="/contact"
            style={{
              color: '#1ddca8',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: 500,
            }}
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={() => handleChoice('declined')}
            style={{
              background: '#141a21',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#e2e8f0',
              padding: '10px 22px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1c242e';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#141a21';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            style={{
              background: '#10b981',
              border: 'none',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#059669';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#10b981';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
