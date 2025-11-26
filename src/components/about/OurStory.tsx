import React from 'react';
import { Heart, Award, Users, Target } from 'lucide-react';

const OurStory = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our heart into every event, ensuring each detail reflects your unique vision and style.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality and perfection has earned us recognition as industry leaders.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, making the planning process enjoyable and stress-free.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of trends and incorporate cutting-edge ideas to make your event stand out.'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The principles that guide everything we do and shape every event we create
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our story in action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Beginning</h3>
            <div className="space-y-4 text-[#022b3a] leading-relaxed">
              <p className="text-lg">
                It all started in 2009 when Alexandra Smith organized her first wedding for a close friend. 
                What began as a favor turned into a passion when she realized the profound joy that comes 
                from creating perfect moments for others.
              </p>
              <p className="text-lg">
                From that single wedding, word spread quickly about Alexandra's meticulous attention to 
                detail and creative vision. Soon, she was planning events for friends of friends, then 
                local businesses, and eventually, high-profile clients across the region.
              </p>
              <p className="text-lg">
                The company officially launched with a simple mission: to transform ordinary occasions 
                into extraordinary memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-xl text-[#022b3a] max-w-3xl mx-auto">
            These values have guided us from day one and continue to shape every decision we make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-[#e1e5f2] text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-[#1f7a8c]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-[#022b3a] leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;