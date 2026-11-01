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
    : TECHNOLOGIES_LIST.filter(t => {
        if (activeCategory === 'cloud') return t.category === 'cloud' || t.category === 'devops';
        if (activeCategory === 'frontend') return t.category === 'frontend' || t.category === 'cms';
        return t.category === activeCategory;
      });

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

        {/* Tech Cards Grid (Matching Pixelate Nest and screenshot) */}
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
            <span className="tech-stat-desc">TypeScript & Type-Safe Code</span>
          </div>
          <div className="tech-stat-block">
            <span className="tech-stat-num">&lt;800ms</span>
            <span className="tech-stat-desc">Next.js LCP Page Speed</span>
          </div>
          <div className="tech-stat-block">
            <span className="tech-stat-num">60 FPS</span>
            <span className="tech-stat-desc">Flutter & React Native Framerate</span>
          </div>
          <div className="tech-stat-block">
            <span className="tech-stat-num">99.99%</span>
            <span className="tech-stat-desc">Cloudflare Edge & AWS SLA Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pixel-Perfect, Authentic SVGs for Technologies
function TechLogo({ id, color, name }) {
  switch (id) {
    case 'react-native':
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.2">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" width="34" height="34" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
          <path d="M149.5 157.4L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.4z" fill="url(#nextg1)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#nextg2)"/>
          <defs>
            <linearGradient id="nextg1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="nextg2" x1="121" y1="54" x2="120.8" y2="106.9" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 256 289" width="30" height="34">
          <path fill="#539E43" d="M128 0L9.4 68.4v152.2L128 289l118.6-68.4V68.4L128 0zm79.1 199.3l-20.9 12-58.2-33.6v-67.2l58.2-33.6 20.9 12v110.4zm-20.9-132.8l-58.2 33.6-58.2-33.6 58.2-33.6 58.2 33.6zm-79.1 22.4v67.2L48.9 199.3V88.9l20.9-12 37.3 21.6v-9.6z"/>
        </svg>
      );
    case 'expressjs':
      return (
        <div style={{
          padding: '6px 10px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '13px',
          color: '#ffffff',
          letterSpacing: '-0.3px',
          fontFamily: 'monospace'
        }}>
          express
        </div>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M11.9 2C8.6 2 6.6 3.5 6.6 6.3V8h5.5v.8H4.6C2.5 8.8 1 10.4 1 12.8c0 2.5 1.7 4 4.3 4h1.7v-2.3c0-2 1.7-3.7 3.7-3.7h5.5c1.8 0 3.2-1.4 3.2-3.2V6.3c0-2.8-2.5-4.3-7.5-4.3zm-2.1 2.2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#3776AB"/>
          <path d="M17.4 7.2v2.3c0 2-1.7 3.7-3.7 3.7H8.2c-1.8 0-3.2 1.4-3.2 3.2v1.3c0 2.8 2.5 4.3 7.5 4.3 3.3 0 5.3-1.5 5.3-4.3V16h-5.5v-.8h7.5c2.1 0 3.6-1.6 3.6-4 0-2.5-1.7-4-4.3-4h-1.7zm-3.2 12.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#FFD43B"/>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" width="34" height="24">
          <path fill="#777BB4" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-4.3 13.5H6.2l1.6-7h2.2c1.2 0 2 .2 2.4.7.4.5.5 1.2.3 2.1-.2 1.1-.7 1.9-1.5 2.5-.8.5-1.9.7-3.5.7zm1.1-3.2h.9c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.6-1.3.1-.6 0-1-.3-1.2-.3-.2-.8-.3-1.5-.3h-.8l-.4 3.2zm6.7 3.2h-1.5l1.6-7h2.2c1.2 0 2 .2 2.4.7.4.5.5 1.2.3 2.1-.2 1.1-.7 1.9-1.5 2.5-.8.5-1.9.7-3.5.7zm1.1-3.2h.9c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.6-1.3.1-.6 0-1-.3-1.2-.3-.2-.8-.3-1.5-.3h-.8l-.4 3.2z"/>
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6.029 15.686L12.014 21.67 18.014 15.686 12.014 9.7 6.029 15.686zm5.985 5.984L14.314 24h7.37L15.7 18 12.014 21.67z"/>
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#3DDC84">
          <path d="M17.523 15.341l2.039 3.531a.584.584 0 0 1-.213.797.58.58 0 0 1-.797-.213l-2.072-3.593a8.887 8.887 0 0 1-4.48 1.206c-1.6 0-3.13-.42-4.48-1.206l-2.072 3.593a.58.58 0 0 1-.797.213.584.584 0 0 1-.213-.797l2.039-3.531C4.195 13.538 3 10.957 3 8h18c0 2.957-1.195 5.538-3.477 7.341zM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      );
    case 'ios':
      return (
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.67c.65-.8 1.1-1.92.98-3.04-.95.04-2.09.64-2.76 1.43-.59.68-1.11 1.79-.97 2.87 1.05.08 2.13-.53 2.75-1.26"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path fill="#FF9900" d="M18.6 15.4c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.5-10.9-4.1-.2-.2-.1-.5.2-.4 3.1 1.7 6.8 2.7 10.7 2.7 2.7 0 5.7-.7 8.3-2.1.4-.2.7.2.5.5z"/>
          <path fill="#FF9900" d="M19.3 14.5c-.3-.4-2-.2-2.8 0-.2 0-.2-.2 0-.3 1.3-.9 3.4-.7 3.7-.3.3.4-.1 2.5-1.3 3.5-.2.1-.3 0-.2-.2.2-.4.6-2.3.6-2.7z"/>
          <path fill="#FFFFFF" d="M7.7 8.5v3.8c0 .4.2.5.6.5.3 0 .7-.1 1.1-.3v1.1c-.5.3-1.1.4-1.8.4-1.2 0-1.8-.7-1.8-1.9V8.5H4.6V7.3h1.2V5.5l1.9-.6v2.4h1.9v1.2H7.7zM14.5 13.8c-.8.3-1.6.4-2.4.4-1.9 0-3-1.1-3-2.9 0-1.9 1.3-3.1 3.2-3.1.8 0 1.5.2 2.1.5v4.2c0 .4.1.7.5.7.2 0 .5-.1.8-.2v1.1c-.4.2-.8.3-1.2.3zm0-3.6c-.4-.3-.9-.4-1.5-.4-1.1 0-1.8.7-1.8 1.9 0 1.1.6 1.8 1.6 1.8.6 0 1.2-.2 1.7-.5V10.2z"/>
        </svg>
      );
    case 'google-cloud':
      return (
        <svg viewBox="0 0 24 24" width="34" height="34">
          <path fill="#EA4335" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          <path fill="#4285F4" d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#336791">
          <path d="M12.001 2c-5.522 0-10 4.477-10 10 0 4.673 3.208 8.6 7.55 9.697.163-.393.253-.82.253-1.266 0-.82-.32-1.564-.84-2.115-.494-.525-1.185-.85-1.954-.85-1.547 0-2.8 1.253-2.8 2.8 0 .285.044.56.124.818C2.19 19.344 1 15.82 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11c0 3.793-1.928 7.135-4.854 9.076.079-.253.123-.523.123-.804 0-1.547-1.253-2.8-2.8-2.8-.77 0-1.46.325-1.954.85-.52.551-.84 1.295-.84 2.115 0 .445.09.872.253 1.265C17.29 20.6 20.5 16.673 20.5 12c0-5.523-4.478-10-10-10z"/>
          <path d="M12 5.5c-3.037 0-5.5 2.463-5.5 5.5 0 1.942 1.01 3.647 2.535 4.622-.023-.203-.035-.41-.035-.622 0-2.209 1.791-4 4-4s4 1.791 4 4c0 .212-.012.419-.035.622C18.49 14.647 19.5 12.942 19.5 11c0-3.037-2.463-5.5-5.5-5.5zm0 2c1.933 0 3.5 1.567 3.5 3.5 0 .428-.077.838-.219 1.218-.845-.75-1.97-1.218-3.281-1.218s-2.436.468-3.281 1.218A3.483 3.483 0 0 1 8.5 11c0-1.933 1.567-3.5 3.5-3.5z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#00758F">
          <path d="M17.83 12.3c-.65-.24-1.3-.39-1.94-.47-.19-.46-.46-.88-.8-1.24-.76-.79-1.8-1.22-2.9-1.22-.38 0-.75.05-1.12.16-.14-.24-.31-.46-.51-.66-.94-.95-2.28-1.47-3.66-1.47-.79 0-1.57.17-2.29.5-.27.12-.4.44-.28.71.12.27.44.4.71.28.61-.28 1.27-.42 1.94-.42 1.17 0 2.31.44 3.11 1.25.13.13.24.28.34.43-.88.43-1.61 1.1-2.09 1.95-.56.98-.79 2.11-.67 3.24.12 1.13.62 2.18 1.44 2.97.82.79 1.89 1.24 3.03 1.28h.12c1.24 0 2.42-.51 3.27-1.42.36-.39.64-.84.83-1.33.64.04 1.28.16 1.9.36.47.16.89.37 1.26.63.13.09.28.13.43.13.18 0 .36-.07.49-.2.23-.23.23-.6 0-.83-.49-.36-1.05-.65-1.67-.86z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="28" height="34" fill="#47A248">
          <path d="M12 0c0 0-6.5 6.2-6.5 13.5 0 5 3.5 8.5 6.5 10.5 3-2 6.5-5.5 6.5-10.5C18.5 6.2 12 0 12 0zm0 21.5c-2.4-1.7-5-4.6-5-8 0-4.8 3.5-9.2 5-11.2 1.5 2 5 6.4 5 11.2 0 3.4-2.6 6.3-5 8z"/>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" width="26" height="34" fill="none">
          <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#0ACF83"/>
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#21759B">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312L5.27 12.86c0-.07.005-.14.01-.21l2.55-7.4A9.977 9.977 0 0 1 12 2zm7.42 4.417c.974 1.547 1.54 3.38 1.54 5.347 0 3.444-1.724 6.488-4.35 8.318l3.15-9.135c.16-.48.24-.96.24-1.39 0-1.2-.42-2.13-1.01-2.86-.01-.01-.02-.02-.03-.03l.46-.25zm-6.66 14.51c-.88.19-1.8.29-2.76.29-1.22 0-2.39-.17-3.5-.49l3.41-9.92 3.3 9.61c-.15.17-.3.34-.45.51zM12 4.09c1.67 0 3.22.48 4.53 1.3-.43.03-.89.07-1.33.15-.81.15-1.42.54-1.42 1.19 0 .43.27.79.54 1.14.36.45.72.93.72 1.6 0 .93-.72 2.45-1.08 3.55l-2.3-6.72c.11-.7.2-1.38.2-1.97 0-.17-.01-.33-.03-.49.38-.5.73-.75 1.17-.75z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#ffffff">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case 'adobe-xd':
      return (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: '#470137',
          border: '1.5px solid #FF61F6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '14px',
          color: '#FF61F6',
          letterSpacing: '-0.5px'
        }}>
          Xd
        </div>
      );
    case 'illustrator':
      return (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: '#330000',
          border: '1.5px solid #FF9A00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '14px',
          color: '#FF9A00',
          letterSpacing: '-0.5px'
        }}>
          Ai
        </div>
      );
    case 'after-effects':
      return (
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: '#00005B',
          border: '1.5px solid #9999FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '14px',
          color: '#9999FF',
          letterSpacing: '-0.5px'
        }}>
          Ae
        </div>
      );
    default:
      return <Code2 size={26} color={color} />;
  }
}
