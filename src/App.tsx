import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import CorporateEvents from './pages/services/CorporateEvents';
import WeddingPlanning from './pages/services/WeddingPlanning';
import BirthdayParties from './pages/services/BirthdayParties';
import ConferenceManagement from './pages/services/ConferenceManagement';
import ProductLaunches from './pages/services/ProductLaunches';
import SocialGatherings from './pages/services/SocialGatherings';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar />
        <main className="transition-all duration-500 ease-in-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/corporate-events" element={<CorporateEvents />} />
            <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
            <Route path="/services/birthday-parties" element={<BirthdayParties />} />
            <Route path="/services/conference-management" element={<ConferenceManagement />} />
            <Route path="/services/product-launches" element={<ProductLaunches />} />
            <Route path="/services/social-gatherings" element={<SocialGatherings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;   