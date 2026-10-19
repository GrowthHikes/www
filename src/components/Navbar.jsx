import React from 'react';
import { Rocket, Sparkles, PhoneCall, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/servicesData';

export default function Navbar({ onOpenBooking, onOpenCalculator }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 11, 16, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '16px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
          }}>
            <Rocket size={22} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Growth<span className="gradient-text">Hikes</span>
            </span>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              <span>rttss-sahil fleet</span>
              <span>•</span>
              <span style={{ color: '#06b6d4' }}>Infortts & Naibooking sibling</span>
            </div>
          </div>
        </div>

        {/* Center Links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', fontSize: '0.9rem', fontWeight: 500 }} className="desktop-links">
          <a href="#services" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Services</a>
          <a href="#drone" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Drone Cine</a>
          <a href="#ai-agents" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>AI & Voice</a>
          <a href="#calculator" onClick={(e) => { e.preventDefault(); onOpenCalculator(); }} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Pricing Calculator</a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#f43f5e',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
            }}
          >
            <Instagram size={15} />
            <span>{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={onOpenCalculator}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <Sparkles size={16} color="#6366f1" />
            Instant Quote
          </button>
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <PhoneCall size={16} />
            Book Call
          </button>
        </div>
      </div>
    </nav>
  );
}
