import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_CATEGORIES, SERVICES_DATA } from '../data/servicesData';

export default function MegaMenu({ isOpen, onClose, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(SERVICES_DATA[0]);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const handleServiceClick = (slug) => {
    onClose();
    navigate(`/services/${slug}`);
  };

  return (
    <div className="mm-overlay" onClick={onClose}>
      {/* Background Floating Embers */}
      <div className="mm-fire">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`mm-ember mm-ember-${i + 1}`}></div>
        ))}
      </div>

      <div className="mm-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button Pill */}
        <button className="mm-close-btn-prime" onClick={onClose} aria-label="Close Menu">
          <X className="mm-close-prime-icon" size={16} />
          <span className="mm-close-prime-text">CLOSE</span>
        </button>

        {/* Vertical Label Strip */}
        <div className="mm-strip">
          <span className="mm-menu-label">GROWTH HIKES CAPABILITIES</span>
          <div className="mm-strip-dot"></div>
        </div>

        {/* Middle Column: Categories & Services List */}
        <div className="mm-main-col">
          <div className="mm-header-info">
            <span className="mm-badge">
              <Sparkles size={12} className="text-emerald-400" />
              End-to-End Growth & Engineering
            </span>
            <h2 className="mm-title">Explore Our Capabilities</h2>
          </div>

          {/* Category Tabs */}
          <div className="mm-categories">
            {SERVICES_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`mm-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mm-services-list">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className={`mm-service-row ${hoveredService.id === service.id ? 'selected' : ''}`}
                onMouseEnter={() => setHoveredService(service)}
                onClick={() => handleServiceClick(service.slug)}
              >
                <div className="mm-service-meta">
                  <span className="mm-service-cat">{service.categoryLabel}</span>
                  <h4 className="mm-service-name">{service.name}</h4>
                  <p className="mm-service-short">{service.shortDesc}</p>
                </div>
                <ArrowRight className="mm-row-arrow" size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Preview Card */}
        <div className="mm-preview-col">
          {hoveredService && (
            <div className="mm-preview-card">
              <div className="mm-preview-top">
                <span className="mm-preview-badge">{hoveredService.categoryLabel}</span>
                <span className="mm-preview-price">From {hoveredService.priceStarts}</span>
              </div>

              <h3 className="mm-preview-title">{hoveredService.name}</h3>
              <p className="mm-preview-desc">{hoveredService.tagline}</p>

              <div className="mm-preview-deliverables">
                <span className="mm-deliverables-title">Key Deliverables:</span>
                <ul>
                  {hoveredService.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mm-preview-actions">
                <button
                  className="mm-action-primary"
                  onClick={() => {
                    onClose();
                    onOpenBooking({ selectedServices: [hoveredService.id] });
                  }}
                >
                  Book Consultation
                </button>
                <button
                  className="mm-action-secondary"
                  onClick={() => handleServiceClick(hoveredService.slug)}
                >
                  Full Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
