import React from 'react';
import { Rocket, ShieldCheck, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/servicesData';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '60px 0 30px 0',
      background: 'rgba(10, 11, 16, 0.95)',
      fontSize: '0.88rem',
      color: 'var(--text-muted)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px',
          marginBottom: '48px',
        }}>
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#fff' }}>
              <Rocket size={20} color="#6366f1" />
              <strong style={{ fontSize: '1.2rem', fontWeight: 800 }}>GrowthHikes</strong>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '16px' }}>
              Full-service digital growth agency & custom software studio. Elevating brands with 4K drone cinematography, viral Meta reels, paid advertising, and autonomous AI agents.
            </p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="badge"
                style={{ background: 'rgba(244, 63, 94, 0.1)', color: '#fb7185', borderColor: 'rgba(244, 63, 94, 0.3)' }}
              >
                <Instagram size={14} />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <div className="badge" style={{ fontSize: '0.75rem' }}>
                <ShieldCheck size={14} color="#4ade80" />
                <span>rttss-sahil fleet</span>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '14px', fontSize: '0.95rem' }}>
              Marketing & Media
            </strong>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#drone">Drone Cinematography & FPV</a></li>
              <li><a href="#services">Local Marketing & GMB SEO</a></li>
              <li><a href="#services">Instagram & Meta Management</a></li>
              <li><a href="#services">Paid Advertising (Google/Meta/YT)</a></li>
              <li><a href="#services">User Generated Content (UGC)</a></li>
              <li><a href="#services">Email Marketing Automation</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '14px', fontSize: '0.95rem' }}>
              Software & AI Tech
            </strong>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#services">Next.js & React Web Platforms</a></li>
              <li><a href="#services">Cross-Platform iOS & Android Apps</a></li>
              <li><a href="#services">WhatsApp Cloud API Bots</a></li>
              <li><a href="#ai-agents">Autonomous AI Support Agents</a></li>
              <li><a href="#ai-agents">Autonomous AI Calling Agents</a></li>
              <li><a href="#services">Ecommerce Mentorship & Coaching</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '14px', fontSize: '0.95rem' }}>
              Ecosystem Siblings
            </strong>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Infortts</strong> (Enterprise Infra & HFT)</li>
              <li><strong>NaiBooking</strong> (Salon & Service Fleet)</li>
              <li><strong>Shubham Computers</strong> (Retail Tech)</li>
              <li><strong>FortheJanta</strong> (Policy Platform)</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div>
            © {new Date().getFullYear()} GrowthHikesOrg. Follow us on Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#fb7185', fontWeight: 600 }}>{INSTAGRAM_HANDLE}</a>
          </div>
          <div>
            Engineered with modern standards within <code style={{ color: '#06b6d4' }}>rttss-sahil</code>.
          </div>
        </div>
      </div>
    </footer>
  );
}
