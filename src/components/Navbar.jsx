import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Globe, Menu, X, Sparkles } from 'lucide-react';
import MegaMenu from './MegaMenu';

const PHONE_NUMBERS = [
  { code: 'IN', label: 'India', display: '+91 97080 01001', href: 'tel:+919708001001' },
  { code: 'US', label: 'USA', display: '+1 (917) 735-9752', href: 'tel:+19177359752' }
];

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState(PHONE_NUMBERS[0]);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  
  const location = useLocation();
  const phoneRef = useRef(null);

  // Scroll listener for header compression
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsPhoneDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for phone dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (phoneRef.current && !phoneRef.current.contains(e.target)) {
        setIsPhoneDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="header-wrapper">
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo" aria-label="GrowthHikes Home">
            <div className="logo-brand">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">Growth<span className="logo-accent">Hikes</span></span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            
            {/* Services with MegaMenu */}
            <button
              className={`nav-services-btn ${isMegaMenuOpen || location.pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              aria-expanded={isMegaMenuOpen}
            >
              <span>Services</span>
              <ChevronDown className={`nav-services-arrow ${isMegaMenuOpen ? 'nav-arrow-open' : ''}`} size={14} />
            </button>

            <Link to="/ai-solutions" className={isActive('/ai-solutions') ? 'active' : ''}>
              AI Solutions
            </Link>
            <Link to="/technologies" className={isActive('/technologies') ? 'active' : ''}>Technologies</Link>
            <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </div>

          {/* Right Section: Dual-Country Phone Pill & CTA */}
          <div className="right-section">
            {/* Phone Selector Dropdown */}
            <div className="phone-dropdown" ref={phoneRef}>
              <div className="phone-pill">
                <a href={selectedPhone.href} className="phone-call" title={`Call ${selectedPhone.label}`}>
                  <Phone className="phone-icon text-emerald-400" size={14} />
                  <span className="phone-number">{selectedPhone.display}</span>
                </a>
                <button
                  className="phone-toggle"
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                  aria-label="Select Country"
                >
                  <Globe className="phone-globe" size={13} />
                  <span className="phone-code">{selectedPhone.code}</span>
                  <ChevronDown className={`phone-chevron ${isPhoneDropdownOpen ? 'phone-chevron-open' : ''}`} size={11} />
                </button>
              </div>

              {/* Dropdown Panel */}
              <div className={`phone-panel ${isPhoneDropdownOpen ? 'phone-panel--open' : ''}`}>
                <div className="phone-panel-head">SELECT LOCATION</div>
                {PHONE_NUMBERS.map((p) => (
                  <button
                    key={p.code}
                    className={`phone-panel-item ${selectedPhone.code === p.code ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPhone(p);
                      setIsPhoneDropdownOpen(false);
                    }}
                  >
                    <span className="phone-badge">{p.code}</span>
                    <div className="phone-panel-text">
                      <span className="phone-item-label">{p.label} Hotline</span>
                      <span className="phone-item-num">{p.display}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Strategy Call Button */}
            <button className="cta-btn-primary" onClick={() => onOpenBooking()}>
              <Sparkles size={14} className="cta-spark" />
              <span>Get Free Proposal</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link>
            <Link to="/ai-solutions" onClick={() => setIsMobileMenuOpen(false)}>AI Solutions</Link>
            <Link to="/technologies" onClick={() => setIsMobileMenuOpen(false)}>Technologies</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <div className="mobile-phone-section">
              <span className="mobile-phone-title">Direct Inquiries:</span>
              <a href={selectedPhone.href} className="mobile-phone-link">
                <Phone size={16} /> {selectedPhone.label}: {selectedPhone.display}
              </a>
            </div>

            <button
              className="cta-btn-primary mobile-cta"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
            >
              Get Free Proposal
            </button>
          </div>
        )}
      </header>

      {/* Full-Screen Mega Menu Overlay */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
}
