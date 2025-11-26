import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AboutUs from '../components/about/AboutUs';
import OurStory from '../components/about/OurStory';
import OurTeam from '../components/about/OurTeam';
import OurJourney from '../components/about/OurJourney';

const About = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}JMDDirect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Crafting extraordinary experiences since 2009. We're passionate about turning your dreams into unforgettable realities.
          </p>
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* Our Story Component */}
      <OurStory />

      {/* Our Team Component */}
      <OurTeam />

      {/* Our Journey Component with Book Style */}
      <OurJourney />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}Journey?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create something extraordinary together. Contact us today to discuss your event vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;