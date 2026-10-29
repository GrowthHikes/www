import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import Footer from './components/Footer';
import LeadBookingModal from './components/LeadBookingModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import AiSolutions from './pages/AiSolutions';
import Technologies from './pages/Technologies';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scroll to top on route change & prevent scroll jump on refresh
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  const handleOpenBooking = (initialData = {}) => {
    setModalInitialData(initialData);
    setIsModalOpen(true);
  };

  const scrollToCalculator = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#calculator';
    } else {
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />

      <div className="app-root">
        <Navbar onOpenBooking={handleOpenBooking} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={handleOpenBooking}
                  onOpenCalculator={scrollToCalculator}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services"
              element={<Services onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services/:slug"
              element={<ServiceDetail onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/ai-solutions"
              element={<AiSolutions onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/technologies"
              element={<Technologies onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/blog"
              element={<Blog onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/careers"
              element={<Careers />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>

        <Footer onOpenBooking={handleOpenBooking} />

        <LeadBookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={modalInitialData}
        />
      </div>
    </BrowserRouter>
  );
}
