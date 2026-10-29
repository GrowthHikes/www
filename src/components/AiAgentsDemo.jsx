import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, Bot, Send, User, Sparkles, Volume2, ShieldCheck, PhoneOff, Mic, Play, MessageSquare } from 'lucide-react';
import { CONTACT_PHONE_IN } from '../data/servicesData';

export default function AiAgentsDemo() {
  const [activeTab, setActiveTab] = useState('support'); // 'support' or 'calling'
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am your GrowthHikes AI Concierge. Ask me anything about our 4K drone shoots, custom software, WhatsApp bots, or pricing tiers.',
      timestamp: 'Just now'
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [callTranscript, setCallTranscript] = useState([
    { speaker: 'AI Agent', text: 'Thank you for contacting GrowthHikes Studio. This is Maya, your autonomous AI assistant. Are you calling regarding a drone shoot or software engineering sprint?' }
  ]);

  const chatBodyRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let timer;
    if (isCalling) {
      timer = setInterval(() => setCallDuration(d => d + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [isCalling]);

  // Intelligent client-side NLP response generator
  const generateAgentResponse = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('drone') || q.includes('fpv') || q.includes('shoot') || q.includes('camera') || q.includes('video')) {
      return "Our aerial cinematography package starts at ₹14,999 ($350). It includes 4K/60fps HDR raw D-Log footage, indoor CineWhoop FPV walkthroughs, and licensed DGCA pilot permits with same-week turnaround!";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('quote')) {
      return "GrowthHikes provides transparent tier pricing: Local SEO from ₹9,999/mo, WhatsApp Cloud API Bots from ₹14,999, Next.js Web Platforms from ₹24,999, and Mobile Apps from ₹44,999. Use the Instant Estimator on this page to build an exact bundle!";
    }
    if (q.includes('whatsapp') || q.includes('bot') || q.includes('api')) {
      return "We deploy official Meta WhatsApp Cloud API bots with green-tick verification, automated product catalog checkout, instant PDF quote dispatch, and multi-agent shared inboxes. Setup takes just 7–10 days.";
    }
    if (q.includes('seo') || q.includes('google') || q.includes('map') || q.includes('local')) {
      return "Our Hyperlocal SEO service focuses on owning the Google Local 3-Pack. We optimize your GBP profile, sync 50+ NAP directory citations, and deploy automated WhatsApp review funnels to maximize inbound calls.";
    }
    if (q.includes('app') || q.includes('mobile') || q.includes('react') || q.includes('flutter') || q.includes('next')) {
      return "We build 60 FPS cross-platform mobile apps (React Native & Flutter) and sub-second Next.js 15 web applications. Every project features strict TypeScript typing, CI/CD pipelines, and app store approval compliance.";
    }
    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('whatsapp') || q.includes('location')) {
      return `You can reach our directors directly on WhatsApp or call us at ${CONTACT_PHONE_IN}. We operate studios in India with global client support!`;
    }

    return "GrowthHikes merges cinematic media production with high-velocity software and AI automation. Would you like to schedule a 15-minute consultation to walk through a tailored sprint for your brand?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userText = inputMessage.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText, timestamp: 'Just now' }]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAgentResponse(userText);
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: response, timestamp: 'Just now' }]);
    }, 650);
  };

  const toggleCallSimulation = () => {
    if (isCalling) {
      setIsCalling(false);
    } else {
      setIsCalling(true);
      setCallTranscript([
        { speaker: 'AI Agent', text: 'Thank you for contacting GrowthHikes Studio. This is Maya, your autonomous AI assistant. Are you calling regarding a drone shoot or software engineering sprint?' }
      ]);

      setTimeout(() => {
        setCallTranscript(prev => [
          ...prev,
          { speaker: 'Caller', text: 'Hi Maya, we need an indoor FPV drone walkthrough for our hotel resort next week.' }
        ]);
      }, 2500);

      setTimeout(() => {
        setCallTranscript(prev => [
          ...prev,
          { speaker: 'AI Agent', text: 'Excellent! We have DGCA certified CineWhoop pilots available. What is the location and square footage? I can reserve our crew right away.' }
        ]);
      }, 5000);
    }
  };

  const formatDuration = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="ai-agents" style={{ padding: '90px 0', background: 'rgba(10, 11, 16, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Bot size={14} />
            <span>Autonomous Intelligence Suite</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
            Experience Our <span className="gradient-text">AI Automation Engine</span> Live
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Interact with our simulated support concierge or test the voice calling agent pipeline below.
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px', borderRadius: '12px', marginTop: '24px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setActiveTab('support')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: activeTab === 'support' ? '#00c896' : 'transparent',
                color: activeTab === 'support' ? '#ffffff' : '#94a3b8',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageSquare size={16} />
              <span>24/7 Support Concierge</span>
            </button>

            <button
              onClick={() => setActiveTab('calling')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: activeTab === 'calling' ? '#00c896' : 'transparent',
                color: activeTab === 'calling' ? '#ffffff' : '#94a3b8',
                transition: 'all 0.2s ease',
              }}
            >
              <PhoneCall size={16} />
              <span>Voice Calling Agent Simulator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 24/7 AI Support Concierge Sandbox */}
        {activeTab === 'support' && (
          <div className="glass-card" style={{ maxWidth: '820px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {/* Chat Header */}
            <div style={{
              padding: '18px 24px',
              background: 'rgba(18, 20, 30, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 200, 150, 0.15)',
                  color: '#00c896',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Bot size={20} />
                </div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.98rem', display: 'block' }}>GrowthHikes Concierge</strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00c896', boxShadow: '0 0 6px #00c896' }} />
                    <span style={{ color: '#00c896', fontSize: '0.78rem', fontWeight: 600 }}>Active Online • 0ms Latency</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setMessages([{ sender: 'bot', text: 'Chat reset! How can GrowthHikes help your brand scale today?', timestamp: 'Just now' }])}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#94a3b8',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                  }}
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div
              ref={chatBodyRef}
              style={{
                height: '340px',
                overflowY: 'auto',
                padding: '24px',
                background: '#0d0f18',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}
                >
                  {msg.sender === 'bot' && (
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(0, 200, 150, 0.2)',
                      color: '#00c896',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      flexShrink: 0,
                    }}>
                      AI
                    </div>
                  )}

                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 18px',
                    borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.sender === 'user' ? 'linear-gradient(135deg, #00c896, #059669)' : 'rgba(255, 255, 255, 0.06)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(0, 200, 150, 0.2)',
                    color: '#00c896',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                  }}>
                    AI
                  </div>
                  <div style={{
                    padding: '10px 16px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                  }}>
                    Concierge is typing...
                  </div>
                </div>
              )}
            </div>

            {/* Quick Sample Prompts */}
            <div style={{
              padding: '10px 20px',
              background: 'rgba(15, 17, 26, 0.9)',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
            }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', alignSelf: 'center', flexShrink: 0 }}>Try:</span>
              <button
                type="button"
                onClick={() => setInputMessage('How much do 4K drone shoots cost?')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Drone pricing?
              </button>
              <button
                type="button"
                onClick={() => setInputMessage('Tell me about your WhatsApp Cloud API bot')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                WhatsApp Bot features?
              </button>
              <button
                type="button"
                onClick={() => setInputMessage('What tech stack do you use for web apps?')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Web tech stack?
              </button>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} style={{
              display: 'flex',
              padding: '14px 20px',
              background: 'rgba(18, 20, 30, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              gap: '10px',
            }}>
              <input
                type="text"
                placeholder="Ask about our drone equipment, Next.js apps, or pricing..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0 20px', borderRadius: '12px' }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Voice Calling Agent Simulator */}
        {activeTab === 'calling' && (
          <div className="glass-card" style={{ maxWidth: '780px', margin: '0 auto', borderRadius: '24px', padding: '36px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: isCalling ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                border: isCalling ? '2px solid #00c896' : '1px solid rgba(255, 255, 255, 0.1)',
                color: isCalling ? '#00c896' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: isCalling ? '0 0 30px rgba(0, 200, 150, 0.3)' : 'none',
                transition: 'all 0.3s ease',
              }}>
                <PhoneCall size={32} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                {isCalling ? 'Active Voice Telephony Session' : 'Autonomous Voice Agent Demo'}
              </h3>

              <div style={{ color: isCalling ? '#00c896' : '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>
                {isCalling ? `Connected • ${formatDuration(callDuration)} | Latency <550ms` : 'Ready to simulate automated telephone reception'}
              </div>
            </div>

            {/* Simulated Live Transcript */}
            <div style={{
              background: 'rgba(10, 11, 16, 0.6)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '28px',
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Live Call Audio Transcript:
              </span>
              {callTranscript.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <strong style={{ color: t.speaker === 'AI Agent' ? '#00c896' : '#38bdf8', flexShrink: 0 }}>
                    {t.speaker}:
                  </strong>
                  <span style={{ color: '#cbd5e1' }}>{t.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={toggleCallSimulation}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: isCalling ? '#ef4444' : 'linear-gradient(135deg, #00c896, #059669)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: isCalling ? '0 4px 15px rgba(239, 68, 68, 0.3)' : '0 4px 15px rgba(0, 200, 150, 0.35)',
                }}
              >
                {isCalling ? <PhoneOff size={18} /> : <PhoneCall size={18} />}
                <span>{isCalling ? 'End Simulation' : 'Start Simulated Call'}</span>
              </button>

              <a
                href={`tel:${CONTACT_PHONE_IN.replace(/\s+/g, '')}`}
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <PhoneCall size={18} color="#00c896" />
                <span>Call GrowthHikes Directly ({CONTACT_PHONE_IN})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
