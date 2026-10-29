import React from 'react';
import Hero from '../components/Hero';
import TrustedBanner from '../components/TrustedBanner';
import CoreCapabilitiesGrid from '../components/CoreCapabilitiesGrid';
import DroneShowcase from '../components/DroneShowcase';
import TechStackGrid from '../components/TechStackGrid';
import AiAgentsDemo from '../components/AiAgentsDemo';
import CaseStudiesShowcase from '../components/CaseStudiesShowcase';
import ProcessTimeline from '../components/ProcessTimeline';
import QuotationCalculator from '../components/QuotationCalculator';

export default function Home({ onOpenBooking, onOpenCalculator }) {
  const handleSelectService = (service) => {
    onOpenBooking({ selectedServices: [service.id] });
  };

  const handleBookWithQuote = (quoteData) => {
    onOpenBooking(quoteData);
  };

  return (
    <div style={{ background: '#030407' }}>
      {/* 1. High-Tech Cyber Radar & Particle Hero */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onOpenCalculator={onOpenCalculator}
      />

      {/* 2. Trusted By Leaders Marquee */}
      <TrustedBanner />

      {/* 3. Core Flagship Capabilities (Meteors & Cyber Cards) */}
      <CoreCapabilitiesGrid onSelectService={handleSelectService} />

      {/* 4. 4K Drone Cinematography & FPV Showcase */}
      <DroneShowcase onBookDrone={() => onOpenBooking({ selectedServices: ['drone-shooting'] })} />

      {/* 5. Production Tech Stack Grid (From pixelatenest.com) */}
      <TechStackGrid />

      {/* 6. Autonomous AI Multi-Agent & Voice Bots Demo */}
      <AiAgentsDemo />

      {/* 7. Driving Growth Through Strategy (Talencee Process Protocol) */}
      <ProcessTimeline />

      {/* 8. Proof in Performance Case Studies Showcase */}
      <CaseStudiesShowcase />

      {/* 9. Live Quotation & Scope Estimator */}
      <QuotationCalculator onBookWithQuote={handleBookWithQuote} />
    </div>
  );
}
