import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Camera, Sparkles, MessageSquare, Calculator } from 'lucide-react';
import { CONTACT_PHONE_IN, WHATSAPP_LINK } from '../data/servicesData';

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export default function Hero({ onOpenBooking, onOpenCalculator }) {
  const containerRef = useRef(null);
  const pinnedLayerRef = useRef(null);
  const canvasRef = useRef(null);
  const scanLineRef = useRef(null);

  // Parallax ref
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animId = null;
    let active = true;
    let lastTime = 0;
    let width = 0;
    let height = 0;
    let skyStars = [];
    let streaks = [];
    const horizonRatio = 0.6;
    let waveOffset = 0;

    // Sprite for streak
    const sprite = document.createElement('canvas');
    sprite.width = 2;
    sprite.height = 100;
    const sCtx = sprite.getContext('2d');
    const grad = sCtx.createLinearGradient(0, 0, 0, 100);
    grad.addColorStop(0, 'rgba(141, 255, 224, 0)');
    grad.addColorStop(0.6, 'rgba(29, 220, 168, 0.85)');
    grad.addColorStop(1, 'rgba(29, 220, 168, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 2, 100);

    const getCounts = () => {
      if (window.innerWidth < 768) return { sky: 12, streaks: 12 };
      if (window.innerWidth < 1280) return { sky: 20, streaks: 20 };
      return { sky: 28, streaks: 28 };
    };

    function resize() {
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      const { sky, streaks: stCount } = getCounts();
      skyStars = Array.from({ length: sky }, () => ({
        x: Math.random() * width,
        yFrac: Math.random() * 0.72,
        r: Math.random() * 1.4 + 0.5,
        seed: Math.random() * 10,
      }));
      streaks = Array.from({ length: stCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: 30 + Math.random() * 70,
        speed: 1.1 + Math.random() * 1.8,
      }));
    }

    function render(time) {
      const dt = lastTime ? Math.min(time - lastTime, 48) : 16.7;
      lastTime = time;
      const step = dt / 16.7;

      ctx.clearRect(0, 0, width, height);

      const horizon = height * horizonRatio;
      const radGrad = ctx.createRadialGradient(width / 2, horizon, 0, width / 2, horizon, width * 0.55);
      radGrad.addColorStop(0, 'rgba(29, 220, 168, 0.22)');
      radGrad.addColorStop(1, 'rgba(29, 220, 168, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        waveOffset = (waveOffset + 0.0016 * step) % 1;
      }

      // Horizontal scan perspective lines
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 16; i++) {
        const norm = (i / 16 + waveOffset) % 1;
        const lineY = horizon + Math.pow(norm, 2.3) * (height - horizon);
        if (lineY > horizon && lineY <= height) {
          ctx.strokeStyle = `rgba(29, 220, 168, ${0.04 + norm * 0.22})`;
          ctx.moveTo(0, lineY);
          ctx.lineTo(width, lineY);
          ctx.stroke();
          ctx.beginPath();
        }
      }

      // Radial perspective converging beams
      ctx.strokeStyle = 'rgba(29, 220, 168, 0.08)';
      ctx.beginPath();
      for (let e = -8; e <= 8; e++) {
        const topX = width / 2 + width * 0.018 * e;
        const botX = width / 2 + width * 0.09 * e;
        ctx.moveTo(topX, horizon);
        ctx.lineTo(botX, height);
      }
      ctx.stroke();

      // Sky stars
      skyStars.forEach((star) => {
        const alpha = 0.5 * (prefersReducedMotion ? 0.7 : 0.3 + 0.7 * Math.abs(Math.sin(time * 0.0006 + star.seed)));
        ctx.fillStyle = `rgba(141, 255, 224, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.yFrac * horizon, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Energy particles upward
      streaks.forEach((streak) => {
        if (!prefersReducedMotion) {
          streak.y -= streak.speed * 1.5 * step;
          if (streak.y < horizon - 40) {
            streak.y = height + Math.random() * 60;
            streak.x = Math.random() * width;
            streak.len = 30 + Math.random() * 70;
            streak.speed = 1.1 + Math.random() * 1.8;
          }
        }
        ctx.drawImage(sprite, 0, 0, 2, 100, streak.x, streak.y, 1.3, streak.len);
      });
    }

    function loop(time) {
      if (active) {
        render(time);
        animId = requestAnimationFrame(loop);
      }
    }

    resize();
    initParticles();
    animId = requestAnimationFrame(loop);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        initParticles();
      }, 120);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      active = false;
      if (animId) cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax Pointer Tracking
  useEffect(() => {
    const layer = pinnedLayerRef.current;
    if (!layer) return;

    let animId = null;
    let currX = 0;
    let currY = 0;

    const handlePointerMove = (e) => {
      const rect = layer.getBoundingClientRect();
      const nx = clamp(((e.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
      const ny = clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
      mousePos.current.targetX = nx;
      mousePos.current.targetY = ny;
    };

    const updateParallax = () => {
      currX += (mousePos.current.targetX - currX) * 0.07;
      currY += (mousePos.current.targetY - currY) * 0.07;
      layer.style.setProperty('--mx', currX.toFixed(3));
      layer.style.setProperty('--my', currY.toFixed(3));
      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={containerRef} className="hs-trigger-container" style={{ minHeight: '92vh', paddingTop: '40px' }}>
      <div ref={pinnedLayerRef} className="hs-pinned-layer" style={{ height: 'auto', minHeight: '92vh', paddingBottom: '80px' }}>
        {/* Background Gradients & Aurora */}
        <div className="hs-bg" />
        <div className="hs-aurora hs-aurora--a" />
        <div className="hs-aurora hs-aurora--b" />

        {/* Dynamic Canvas Horizon & Energy Streaks */}
        <canvas ref={canvasRef} className="hs-field" />

        {/* Cyber Radar Conic Sweep & Pulse Ping */}
        <div className="hs-radar" />
        <span className="hs-ping" />

        {/* Horizontal Laser Scan Beam */}
        <div ref={scanLineRef} className="hs-scan" style={{ transform: 'scaleX(1)', opacity: 0.7 }} />

        {/* Vignette & Grain */}
        <div className="hs-vignette" />
        <div className="hs-grain" />

        {/* HUD Telemetry - Top Left */}
        <div className="hs-hud hs-hud--tl">
          <div className="hs-hud-row">
            <span className="hs-pip">
              <span />
            </span>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M0,22 L16,22 L26,38 L44,38" stroke="rgba(29,220,168,0.4)" strokeWidth="1" />
            </svg>
          </div>
          <span className="hs-hud-label" style={{ color: '#1ddca8' }}>
            SYSTEM · CALIBRATED
          </span>
        </div>

        {/* HUD Telemetry - Bottom Right */}
        <div className="hs-hud hs-hud--br">
          <div className="hs-hud-row">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M44,22 L28,22 L18,6 L0,6" stroke="rgba(29,220,168,0.4)" strokeWidth="1" />
            </svg>
            <span className="hs-pip">
              <span />
            </span>
          </div>
          <span className="hs-hud-label" style={{ color: '#1ddca8' }}>
            AI AGENTS · ONLINE
          </span>
        </div>

        {/* Main Content Slide */}
        <div className="hs-slide hs-slide-1" style={{ position: 'relative', opacity: 1, pointerEvents: 'auto', paddingTop: '60px' }}>
          <div className="hs-inner" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            
            {/* Cyber Eyebrow with pulsating dots */}
            <div className="hs-s1-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
              <span className="hs-dot" />
              <span className="hs-dot" />
              <span style={{ letterSpacing: '0.15em', fontWeight: 600, color: '#1ddca8' }}>
                GROWTH HIKES &nbsp;·&nbsp; DIGITAL &amp; AI STUDIO &nbsp;·&nbsp; GLOBAL
              </span>
              <span className="hs-dot" />
              <span className="hs-dot" />
            </div>

            {/* Main Headline */}
            <h1 className="hs-s1-title" style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              marginBottom: '24px',
              color: '#ffffff',
              fontFamily: 'var(--font-display)',
            }}>
              ENGINEERED FOR EXPONENTIAL BRAND SCALE WITH{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1ddca8 0%, #8dffe0 50%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                4K DRONE CINEMA
              </span>{' '}
              &amp;{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                AUTONOMOUS AI AGENTS
              </span>
            </h1>

            {/* Badge Pillars */}
            <div className="hs-s1-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(29, 220, 168, 0.08)',
              border: '1px solid rgba(29, 220, 168, 0.3)',
              color: '#8dffe0',
              fontSize: '0.86rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              marginBottom: '36px',
            }}>
              <span className="hs-badge-dot" />
              <span>4K FPV DRONE CINEMA &nbsp;·&nbsp; AI REELS &nbsp;·&nbsp; HIGH-ROAS FUNNELS &nbsp;·&nbsp; CUSTOM SOFTWARE</span>
            </div>

            {/* Interactive Action Controls */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '42px',
            }}>
              {/* Primary Booking Button */}
              <button
                onClick={() => onOpenBooking()}
                className="hs-glass-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, rgba(29, 220, 168, 0.25) 0%, rgba(29, 220, 168, 0.08) 100%)',
                  border: '1px solid rgba(29, 220, 168, 0.6)',
                  boxShadow: '0 0 25px rgba(29, 220, 168, 0.35)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>Launch Project / Consultation</span>
                <ArrowRight size={18} color="#1ddca8" />
              </button>

              {/* Scope Estimator / Calculator Button */}
              {onOpenCalculator && (
                <button
                  onClick={onOpenCalculator}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 26px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#f8fafc',
                    fontSize: '0.96rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(29, 220, 168, 0.5)';
                    e.currentTarget.style.background = 'rgba(29, 220, 168, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <Calculator size={18} color="#8dffe0" />
                  <span>Instant Scope Estimator</span>
                </button>
              )}

              {/* Direct Founder WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  color: '#25d366',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <MessageSquare size={17} />
                <span>WhatsApp Founder Direct</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              maxWidth: '860px',
              margin: '0 auto',
              padding: '20px',
              borderRadius: '16px',
              background: 'rgba(10, 15, 20, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
            }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1ddca8', fontFamily: 'var(--font-display)' }}>10M+</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Organic Reel Views</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-display)' }}>340%</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average ROAS on Ads</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#8dffe0', fontFamily: 'var(--font-display)' }}>4K HDR</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Licensed DGCA Drone Pilots</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'var(--font-display)' }}>24/7</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Autonomous Lead Capture</div>
              </div>
            </div>

          </div>
        </div>

        {/* Ambient Subtle Scroll Arrow */}
        <div className="hs-s1-scroll" aria-hidden="true" style={{ bottom: '20px' }}>
          <div className="hs-scroll-line" />
          <span className="hs-scroll-label">EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
