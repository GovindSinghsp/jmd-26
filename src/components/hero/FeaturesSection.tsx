import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Expert Planning',
      description: 'Meticulous planning and coordination for flawless execution'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Experienced professionals dedicated to your event success'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in event management industry'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}JMDDirect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity, expertise, and passion to deliver exceptional events that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-[#1f7a8c]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;