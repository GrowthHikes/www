import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideLabel from '../components/SideLabel';
import { Rocket, ShieldCheck, Zap, Globe, Users, Trophy, Target, Sparkles, ArrowRight, CheckCircle2, Play, Lightbulb, Compass, Award } from 'lucide-react';
import { CONTACT_PHONE_IN, CONTACT_PHONE_US, WHATSAPP_LINK } from '../data/servicesData';

export default function About({ onOpenBooking }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div style={{ background: '#030407', color: '#fff', minHeight: '100vh', padding: '40px 0 80px 0' }}>
      {/* 1. Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(29, 220, 168, 0.12) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(29, 220, 168, 0.1)',
            border: '1px solid rgba(29, 220, 168, 0.3)',
            color: '#1ddca8',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>WHO WE ARE · GROWTHHIKES</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
          }}>
            Where Strategy Meets{' '}
            <span style={{
              background: 'linear-gradient(135deg, #1ddca8 0%, #8dffe0 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Cinematic Execution
            </span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '750px',
            margin: '0 auto 36px auto',
          }}>
            GrowthHikes was founded on a singular conviction: modern brands cannot afford to disconnect their viral media production from their software engineering. We build the full growth engine under one roof.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : null}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                color: '#000000',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(29, 220, 168, 0.35)',
              }}
            >
              <span>Get Started Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Who We Are (Talencee waw Section) */}
      <section style={{ padding: '60px 0 90px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '32px' }}>
            <SideLabel text="WHO WE ARE" theme="dark" />

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Video Story Reel Showcase */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '16/8',
                background: '#0a0d14',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '56px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              }}>
                {!isPlayingVideo ? (
                  <div
                    onClick={() => setIsPlayingVideo(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(180deg, rgba(3, 4, 7, 0.4) 0%, rgba(3, 4, 7, 0.85) 100%)',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 50% 50%, rgba(29, 220, 168, 0.18) 0%, transparent 60%)',
                    }} />

                    {/* Animated Ripple Pulse */}
                    <div style={{
                      position: 'relative',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <span style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(29, 220, 168, 0.5)',
                        animation: 'ripple 2s infinite ease-out',
                      }} />
                      <div style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1ddca8 0%, #00c896 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        boxShadow: '0 0 30px rgba(29, 220, 168, 0.6)',
                        zIndex: 2,
                      }}>
                        <Play size={28} fill="#000" style={{ marginLeft: '4px' }} />
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      background: 'rgba(29, 220, 168, 0.2)',
                      padding: '6px 16px',
                      borderRadius: '999px',
                      border: '1px solid rgba(29, 220, 168, 0.4)',
                    }}>
                      WATCH OUR STUDIO REEL
                    </span>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="GrowthHikes Studio Showcase"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* 3 Strategic Pillars (Talencee waw-features) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}>
                {/* Pillar 1 */}
                <div style={{
                  background: 'rgba(12, 16, 24, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(29, 220, 168, 0.12)',
                    border: '1px solid rgba(29, 220, 168, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1ddca8',
                    marginBottom: '20px',
                  }}>
                    <Rocket size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Fast Execution
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Quick turnarounds, rapid video cutting, and continuous agile deployments keep your business moving forward without bureaucratic delays.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div style={{
                  background: 'rgba(12, 16, 24, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    marginBottom: '20px',
                  }}>
                    <Lightbulb size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Creative Expertise
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Fresh storytelling, cinematic drone angles, and compelling hooks designed to transform ordinary brands into category market leaders.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div style={{
                  background: 'rgba(12, 16, 24, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                    marginBottom: '20px',
                  }}>
                    <Compass size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                    Strategic Thinking
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    Every deliverable is guided by rigorous financial direction, conversion analytics, smart audience modeling, and purposeful execution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Presence & Footprint */}
      <section style={{
        padding: '80px 0',
        background: '#040608',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
            Operating Globally Across India & North America
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            Headquartered in Haryana & Delhi NCR, with dedicated commercial drone hubs and partner engineering desks in the US.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <div style={{
              background: 'rgba(16, 20, 28, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1ddca8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                INDIA HEADQUARTERS
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                Delhi NCR &amp; Haryana
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Production studio, DGCA-certified drone fleet, AI engineering labs, and client consultation center.
              </p>
              <div style={{ marginTop: '14px', fontSize: '0.9rem', color: '#1ddca8', fontWeight: 600 }}>
                {CONTACT_PHONE_IN}
              </div>
            </div>

            <div style={{
              background: 'rgba(16, 20, 28, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                NORTH AMERICA DESK
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                San Francisco &amp; New York
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                International client accounts, enterprise cloud architecture consulting, and high-growth venture partnerships.
              </p>
              <div style={{ marginTop: '14px', fontSize: '0.9rem', color: '#38bdf8', fontWeight: 600 }}>
                {CONTACT_PHONE_US}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
