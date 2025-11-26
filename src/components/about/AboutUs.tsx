import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}JMDDirect
              </span>
            </h2>
            <div className="space-y-6 text-[#022b3a] leading-relaxed">
              <p className="text-lg">
                JMDDirect was born from a simple belief: every celebration deserves to be extraordinary. 
                Founded in 2009 by Alexandra Smith, we started as a small team with big dreams and an 
                unwavering commitment to excellence.
              </p>
              <p className="text-lg">
                Over the years, we've grown into a full-service event management company, but our core 
                values remain unchanged. We believe in the power of human connection, the magic of 
                shared experiences, and the importance of celebrating life's precious moments.
              </p>
              <p className="text-lg">
                Today, with over 500 successful events and countless happy clients, we continue to 
                push the boundaries of creativity and innovation in event planning. Every project 
                is a new opportunity to create something truly special.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-[#1f7a8c] flex-shrink-0" />
                <span className="text-[#022b3a] text-lg">09+ years of industry experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-[#1f7a8c] flex-shrink-0" />
                <span className="text-[#022b3a] text-lg">187+ successful events delivered</span>
              </div>
              <div className="flex items-center space-x-3">   
                <CheckCircle className="h-6 w-6 text-[#1f7a8c] flex-shrink-0" />
                <span className="text-[#022b3a] text-lg">98% client satisfaction rate</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Work With Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="EventCraft team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;