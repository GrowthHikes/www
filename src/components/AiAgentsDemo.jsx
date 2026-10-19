import React, { useState } from 'react';
import { PhoneCall, Bot, Send, User, Sparkles, Volume2, ShieldAlert } from 'lucide-react';

export default function AiAgentsDemo() {
  const [activeTab, setActiveTab] = useState('support'); // 'support' or 'calling'
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am your GrowthHikes AI Concierge. I can answer questions about our drone shoots, custom software, WhatsApp bots, or pricing. How can I help you today?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState('Idle');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    try {
      const res = await fetch('http://localhost:26001/api/ai-agents/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      if (data.success) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.data.response }]);
      } else {
        throw new Error();
      }
    } catch {
      // Offline fallback simulator
      setTimeout(() => {
        let reply = "GrowthHikes specializes in high-impact execution across drone cinematography, custom web & mobile apps, and autonomous AI agents. Let's schedule a 15-minute discovery call to tailor a plan for your brand!";
        if (userText.toLowerCase().includes('drone')) {
          reply = "Our drone packages start from $350 / ₹15,000 for 4K 60fps shoots and high-speed indoor FPV walkthroughs with certified pilots.";
        } else if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
          reply = "You can use our interactive calculator on this page to get an immediate quote, or we can send an itemized PDF directly to your WhatsApp!";
        }
        setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      }, 600);
    }
  };

  const simulateCall = () => {
    if (isCalling) {
      setIsCalling(false);
      setCallStatus('Call Ended');
      return;
    }

    setIsCalling(true);
    setCallStatus('Connecting to AI Voice Gateway (:26002)...');

    setTimeout(() => {
      setCallStatus('Streaming low-latency audio (<800ms) | Polly & Deepgram active');
    }, 1200);
  };

  return (
    <section id="ai-agents" style={{ padding: '80px 0', background: 'rgba(10, 11, 16, 0.5)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <Bot size={14} />
            <span>Interactive AI Engine</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Test Our <span className="gradient-text">Autonomous AI Agents</span> in Real-Time
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Experience the difference between clunky rule-based bots and responsive, low-latency AI assistants trained specifically on GrowthHikes services.
          </p>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          <button
            onClick={() => setActiveTab('support')}
            style={{
              padding: '10px 22px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 600,
              background: activeTab === 'support' ? '#6366f1' : 'rgba(255,255,255,0.05)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Bot size={18} />
            <span>24/7 AI Support Concierge</span>
          </button>

          <button
            onClick={() => setActiveTab('calling')}
            style={{
              padding: '10px 22px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 600,
              background: activeTab === 'calling' ? '#06b6d4' : 'rgba(255,255,255,0.05)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <PhoneCall size={18} />
            <span>AI Voice Calling Agent</span>
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {activeTab === 'support' ? (
            <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '480px' }}>
              {/* Chat Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80' }} />
                  <strong style={{ fontSize: '0.95rem' }}>GrowthHikes AI Knowledge Agent</strong>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>RAG-backed • 40+ Languages</span>
              </div>

              {/* Messages Container */}
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '8px' }}>
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '80%',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      background: m.sender === 'user' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      border: m.sender === 'bot' ? '1px solid var(--border-color)' : 'none',
                    }}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <input
                  type="text"
                  placeholder="Ask about drone shoots, Instagram management, pricing..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 20px' }}>
                  <Send size={16} />
                </button>
              </form>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: isCalling ? 'rgba(239, 68, 68, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                color: isCalling ? '#ef4444' : '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                boxShadow: isCalling ? '0 0 30px rgba(239, 68, 68, 0.4)' : '0 0 25px rgba(6, 182, 212, 0.3)',
                transition: 'all 0.3s ease',
              }}>
                <PhoneCall size={32} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                Autonomous Voice Receptionist & Lead Qualifier
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto 24px auto' }}>
                Simulate an incoming or 60-second follow-up phone call. Our engine speaks with natural intonation, understands interrupts, and answers instantly.
              </p>

              <div style={{
                padding: '16px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                marginBottom: '28px',
                display: 'inline-block',
                minWidth: '320px',
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>TELEPHONY STREAM STATUS</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: isCalling ? '#4ade80' : 'var(--text-secondary)' }}>
                  {callStatus}
                </div>
              </div>

              <div>
                <button
                  onClick={simulateCall}
                  className="btn-primary"
                  style={{
                    background: isCalling ? '#ef4444' : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    padding: '14px 32px',
                    fontSize: '1rem',
                  }}
                >
                  <Volume2 size={18} />
                  <span>{isCalling ? 'End Voice Session' : 'Start Simulated Call'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
