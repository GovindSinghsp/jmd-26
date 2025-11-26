import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlanningModal from './PlanningModal';

const CTASection = () => {
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}Amazing?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's bring your vision to life. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsPlanningModalOpen(true)}
              className="bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#022b3a] transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <PlanningModal 
        isOpen={isPlanningModalOpen} 
        onClose={() => setIsPlanningModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;