import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import StatsSection from '../components/hero/StatsSection';
import FeaturesSection from '../components/hero/FeaturesSection';
import TestimonialsSection from '../components/hero/TestimonialsSection';
import CTASection from '../components/hero/CTASection';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;