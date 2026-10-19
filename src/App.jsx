import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import DroneShowcase from './components/DroneShowcase';
import QuotationCalculator from './components/QuotationCalculator';
import AiAgentsDemo from './components/AiAgentsDemo';
import LeadBookingModal from './components/LeadBookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenBooking = (initialData = {}) => {
    setModalInitialData(initialData);
    setIsModalOpen(true);
  };

  const handleSelectService = (service) => {
    handleOpenBooking({ selectedServices: [service.id] });
  };

  const handleBookWithQuote = (quoteData) => {
    handleOpenBooking(quoteData);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCalculator={scrollToCalculator}
      />

      <main>
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCalculator={scrollToCalculator}
        />

        <ServicesGrid onSelectService={handleSelectService} />

        <DroneShowcase onBookDrone={() => handleOpenBooking({ selectedServices: ['drone-shooting'] })} />

        <AiAgentsDemo />

        <QuotationCalculator onBookWithQuote={handleBookWithQuote} />
      </main>

      <Footer />

      <LeadBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}
