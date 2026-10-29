import React, { useState } from 'react';
import { TECHNOLOGIES_LIST, TECH_INTRO } from '../data/technologiesData';
import { Layers, Sparkles, Code2, Cpu, Database, Cloud, Palette } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & Web' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'database', label: 'Databases' },
  { id: 'design', label: 'UI/UX & Creative' }
];

export default function TechStackGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all'
    ? TECHNOLOGIES_LIST
    : TECHNOLOGIES_LIST.filter(t => t.category === activeCategory);

  return (
    <section className="tech-stack-section" id="technologies">
      <div className="container">
        {/* Section Header */}
        <div className="tech-stack-header">
          <div className="section-pill">
            <Sparkles size={13} className="text-emerald-400" />
            <span>Modern Engineering Architecture</span>
          </div>

          <h2 className="tech-stack-title">
            From Dynamic Websites to Feature-Rich Applications
          </h2>

          <p className="tech-stack-description">
            {TECH_INTRO.subheadline}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="tech-filter-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`tech-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="tech-cards-grid">
          {filteredTech.map(tech => (
            <div
              key={tech.id}
              className="tech-card-item"
              style={{
                '--tech-color': tech.color,
                '--tech-bg': tech.bgTint,
                '--tech-border': tech.borderTint
              }}
            >
              {/* Tech Icon / Monogram */}
              <div className="tech-icon-container">
                <TechLogo id={tech.id} color={tech.color} name={tech.name} />
              </div>

              {/* Tech Name */}
              <span className="tech-card-name">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Stats */}
        <div className="tech-bottom-stats">
          <div className="tech-stat-block">
            <span className="tech-stat-num">100%</span>
            <span className="tech-stat-text">Type-Safe & Scalable Code</span>
          </div>
          <div className="tech-stat-sep"></div>
          <div className="tech-stat-block">
            <span className="tech-stat-num">&lt;800ms</span>
            <span className="tech-stat-text">Edge Response Latency</span>
          </div>
          <div className="tech-stat-sep"></div>
          <div className="tech-stat-block">
            <span className="tech-stat-num">Zero</span>
            <span className="tech-stat-text">Vendor Lock-In Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Crisp Vector SVG Logos for each Technology in the screenshot
function TechLogo({ id, color, name }) {
  switch (id) {
    case 'react-native':
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34" fill="none">
          <circle cx="0" cy="0" r="2.05" fill={color} />
          <g stroke={color} strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" width="34" height="34" fill={color}>
          <path d="M12.9 8.6c-2.3 0-3.6 1.1-3.6 2.8 0 1.9 1.3 2.7 3.2 2.7 1.3 0 2.4-.6 3.1-1.6v1.3h2.4V8.8h-2.4v1.1c-.7-.8-1.5-1.3-2.7-1.3zm.7 4.1c-1.1 0-1.8-.5-1.8-1.4 0-.8.6-1.4 1.8-1.4 1.1 0 1.9.6 1.9 1.4 0 .9-.8 1.4-1.9 1.4zM22 17.6c-3.1 2.3-7.5 3.5-11.4 3.5-5.4 0-10.2-2.1-13.9-5.6-.3-.3-.1-.7.3-.5 3.8 2.2 8.3 3.5 13 3.5 3.5 0 7.4-.9 10.9-2.7.5-.2.9.3.5.6z"/>
          <path d="M22.8 16.5c-.4-.5-2.6-.3-3.6-.1-.3 0-.3-.3 0-.5 1.7-1.2 4.4-.9 4.8-.4.4.5-.1 3.2-1.7 4.5-.2.2-.4.1-.3-.2.3-.9.9-2.8.8-3.3z"/>
        </svg>
      );
    case 'google-cloud':
      return (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke={color} strokeWidth="1.8">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" width="28" height="34" fill="none">
          <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill={color}/>
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill={color}/>
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill={color}/>
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill={color}/>
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill={color}/>
        </svg>
      );
    case 'adobe-xd':
      return (
        <div style={{ fontWeight: 900, fontSize: '18px', color: color, letterSpacing: '-1px' }}>
          Xd
        </div>
      );
    case 'illustrator':
      return (
        <div style={{ fontWeight: 900, fontSize: '18px', color: color, letterSpacing: '-1px' }}>
          Ai
        </div>
      );
    case 'after-effects':
      return (
        <div style={{ fontWeight: 900, fontSize: '18px', color: color, letterSpacing: '-1px' }}>
          Ae
        </div>
      );
    case 'php':
      return (
        <div style={{ fontWeight: 800, fontSize: '15px', color: color, letterSpacing: '0px' }}>
          php
        </div>
      );
    case 'node':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke={color} strokeWidth="1.8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill={color}>
          <path d="M11.9 2C8.6 2 6.6 3.5 6.6 6.3V8h5.5v.8H4.6C2.5 8.8 1 10.4 1 12.8c0 2.5 1.7 4 4.3 4h1.7v-2.3c0-2 1.7-3.7 3.7-3.7h5.5c1.8 0 3.2-1.4 3.2-3.2V6.3c0-2.8-2.5-4.3-7.5-4.3zm-2.1 2.2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zM17.4 7.2v2.3c0 2-1.7 3.7-3.7 3.7H8.2c-1.8 0-3.2 1.4-3.2 3.2v1.3c0 2.8 2.5 4.3 7.5 4.3 3.3 0 5.3-1.5 5.3-4.3V16h-5.5v-.8h7.5c2.1 0 3.6-1.6 3.6-4 0-2.5-1.7-4-4.3-4h-1.7zm-3.2 12.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/>
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill={color}>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312L5.27 12.86c0-.07.005-.14.01-.21l2.55-7.4A9.977 9.977 0 0 1 12 2zm7.42 4.417c.974 1.547 1.54 3.38 1.54 5.347 0 3.444-1.724 6.488-4.35 8.318l3.15-9.135c.16-.48.24-.96.24-1.39 0-1.2-.42-2.13-1.01-2.86-.01-.01-.02-.02-.03-.03l.46-.25zm-6.66 14.51c-.88.19-1.8.29-2.76.29-1.22 0-2.39-.17-3.5-.49l3.41-9.92 3.3 9.61c-.15.17-.3.34-.45.51zM12 4.09c1.67 0 3.22.48 4.53 1.3-.43.03-.89.07-1.33.15-.81.15-1.42.54-1.42 1.19 0 .43.27.79.54 1.14.36.45.72.93.72 1.6 0 .93-.72 2.45-1.08 3.55l-2.3-6.72c.11-.7.2-1.38.2-1.97 0-.17-.01-.33-.03-.49.38-.5.73-.75 1.17-.75z"/>
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill={color}>
          <path d="M17.523 15.341l2.039 3.531a.584.584 0 0 1-.213.797.58.58 0 0 1-.797-.213l-2.072-3.593a8.887 8.887 0 0 1-4.48 1.206c-1.6 0-3.13-.42-4.48-1.206l-2.072 3.593a.58.58 0 0 1-.797.213.584.584 0 0 1-.213-.797l2.039-3.531C4.195 13.538 3 10.957 3 8h18c0 2.957-1.195 5.538-3.477 7.341zM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      );
    case 'ios':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill={color}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.67c.65-.8 1.1-1.92.98-3.04-.95.04-2.09.64-2.76 1.43-.59.68-1.11 1.79-.97 2.87 1.05.08 2.13-.53 2.75-1.26"/>
        </svg>
      );
    case 'mysql':
      return (
        <div style={{ fontWeight: 800, fontSize: '13px', color: color }}>
          MySQL
        </div>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="28" height="32" fill={color}>
          <path d="M12 0c0 0-6.5 6.2-6.5 13.5 0 5 3.5 8.5 6.5 10.5 3-2 6.5-5.5 6.5-10.5C18.5 6.2 12 0 12 0zm0 21.5c-2.4-1.7-5-4.6-5-8 0-4.8 3.5-9.2 5-11.2 1.5 2 5 6.4 5 11.2 0 3.4-2.6 6.3-5 8z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <div style={{ fontWeight: 800, fontSize: '12px', color: color }}>
          Postgres
        </div>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill={color}>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case 'nextjs':
      return (
        <div style={{ fontWeight: 900, fontSize: '18px', color: color, letterSpacing: '-1px' }}>
          N
        </div>
      );
    case 'expressjs':
      return (
        <div style={{ fontWeight: 800, fontSize: '15px', color: color }}>
          ex
        </div>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill={color}>
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6.029 15.686L12.014 21.67 18.014 15.686 12.014 9.7 6.029 15.686zm5.985 5.984L14.314 24h7.37L15.7 18 12.014 21.67z"/>
        </svg>
      );
    default:
      return <Code2 size={26} color={color} />;
  }
}
