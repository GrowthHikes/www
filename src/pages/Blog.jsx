import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { Sparkles, Calendar, Clock, ArrowRight, User, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog({ onOpenBooking }) {
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const tags = ['All', 'Cinematography', 'Social Media', 'Paid Ads', 'Meta CAPI', 'AI & Automation', 'WhatsApp API', 'Local SEO'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTag = activeTag === 'All' || post.tags.includes(activeTag) || post.category === activeTag;
    const matchesSearch = !searchTerm.trim() ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      {/* Header Banner */}
      <section style={{
        padding: '70px 0 50px 0',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 20%, rgba(0, 200, 150, 0.1) 0%, transparent 70%)',
      }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 200, 150, 0.1)',
            border: '1px solid rgba(0, 200, 150, 0.3)',
            color: '#00c896',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
          }}>
            <Sparkles size={14} />
            <span>GROWTH INSIGHTS & CASE STUDIES</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}>
            Engineering & Growth Teardowns
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto 36px auto',
          }}>
            Real-world field reports, algorithm reverse-engineering, conversion tracking teardowns, and autonomous AI system case studies from the GrowthHikes lab.
          </p>

          {/* Search bar */}
          <div style={{ maxWidth: '440px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search case studies & insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '12px',
                background: 'rgba(18, 20, 30, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Tag Filters */}
      <section style={{ padding: '20px 0 40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeTag === tag ? '1px solid #00c896' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: activeTag === tag ? 'rgba(0, 200, 150, 0.15)' : 'rgba(18, 20, 30, 0.6)',
                  color: activeTag === tag ? '#00c896' : '#94a3b8',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  background: 'rgba(18, 20, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: 'rgba(0, 200, 150, 0.12)',
                      color: '#00c896',
                    }}>
                      {post.category}
                    </span>

                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.8rem' }}>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.35,
                    marginBottom: '12px',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {post.tags.map((t, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.72rem',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: '#94a3b8',
                      }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    By {post.author} • {post.date}
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#00c896',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Read Teardown</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 10, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}>
          <div style={{
            background: '#12141e',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            maxWidth: '760px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
            position: 'relative',
          }}>
            <button
              onClick={() => setSelectedPost(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#00c896',
              marginBottom: '12px',
              display: 'inline-block',
            }}>
              {selectedPost.category}
            </span>

            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '16px',
              fontFamily: 'var(--font-display)',
            }}>
              {selectedPost.title}
            </h2>

            <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '0.85rem', marginBottom: '24px' }}>
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime} read</span>
            </div>

            <div style={{
              color: '#cbd5e1',
              fontSize: '1.02rem',
              lineHeight: 1.8,
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '20px',
              marginBottom: '32px',
              whiteSpace: 'pre-line',
            }}>
              {selectedPost.content}
            </div>

            <div style={{
              background: 'rgba(0, 200, 150, 0.08)',
              border: '1px solid rgba(0, 200, 150, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
                Want to implement this framework in your business?
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>
                Our team can audit your setup and execute these strategies for guaranteed ROI lift.
              </p>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="btn-primary"
              >
                <span>Book Growth Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
