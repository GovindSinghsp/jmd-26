import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Award, Users, Rocket, Globe, Star } from 'lucide-react';

const OurJourney = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const journeyPages = [
    {
      title: "The Foundation Years",
      subtitle: "2009 - 2012",
      content: [
        {
          year: '2009',
          icon: Calendar,
          event: 'JMDDirect Founded',
          description: 'Alexandra Smith organized her first professional event - a wedding for 150 guests that became the talk of the town.',
          details: 'What started as helping a friend turned into a business when three more couples asked Alexandra to plan their weddings based on that single event.',
          image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2010',
          icon: Users,
          event: 'First Corporate Client',
          description: 'Landed our first major corporate contract with TechStart Inc. for their annual conference.',
          details: 'This 500-person event marked our entry into the corporate events market and established our reputation for handling large-scale productions.',
          image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2012',
          icon: Award,
          event: 'First Industry Award',
          description: 'Recognized as "Best New Event Company" by the National Event Planning Association.',
          details: 'This recognition came after successfully managing 50+ events in our first three years, with a 100% client satisfaction rate.',
          image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    },
    {
      title: "Growth & Recognition",
      subtitle: "2013 - 2017",
      content: [
        {
          year: '2013',
          icon: Rocket,
          event: 'Team Expansion',
          description: 'Hired our first full-time employees: Marcus Johnson (Creative Director) and Sarah Chen (Operations Manager).',
          details: 'Growing from a one-person operation to a team of five allowed us to take on multiple simultaneous events and expand our service offerings.',
          image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2015',
          icon: Star,
          event: '100th Event Milestone',
          description: 'Celebrated our 100th successful event with a charity gala that raised $50,000 for local nonprofits.',
          details: 'This milestone event showcased our growth and commitment to giving back to the community that supported us.',
          image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2017',
          icon: Globe,
          event: 'Regional Expansion',
          description: 'Opened our second office and began serving clients across three states.',
          details: 'Our reputation for excellence led to requests from clients in neighboring states, prompting our first major expansion.',
          image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    },
    {
      title: "Innovation & Excellence",
      subtitle: "2018 - Present",
      content: [
        {
          year: '2018',
          icon: Users,
          event: 'Team of 25+',
          description: 'Grew to a team of 25+ dedicated professionals across multiple departments.',
          details: 'Our expanded team includes specialists in design, technology, catering coordination, and client relations.',
          image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2021',
          icon: Rocket,
          event: 'Digital Innovation',
          description: 'Launched virtual and hybrid event services during the global pandemic.',
          details: 'We quickly adapted to changing needs, helping clients maintain connections through innovative virtual event solutions.',
          image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          year: '2024',
          icon: Award,
          event: '500+ Events & Counting',
          description: 'Proudly serving clients with over 500 successful events and a 98% satisfaction rate.',
          details: 'Today, we continue to push boundaries and set new standards in the event management industry.',
          image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % journeyPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + journeyPages.length) % journeyPages.length);
  };

  const currentPageData = journeyPages[currentPage];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}Journey
            </span>
          </h2>
          <p className="text-xl text-[#022b3a] max-w-3xl mx-auto">
            Key milestones that have shaped JMDDirect into the company we are today
          </p>
        </div>

        {/* Book-style container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-[#e1e5f2]" style={{ minHeight: '600px' }}>
            {/* Book header */}
            <div className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">{currentPageData.title}</h3>
              <p className="text-xl opacity-90">{currentPageData.subtitle}</p>
            </div>

            {/* Book content */}
            <div className="p-8">
              <div className="space-y-8">
                {currentPageData.content.map((milestone, index) => (
                  <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={milestone.image}
                          alt={milestone.event}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] rounded-full flex items-center justify-center">
                          <milestone.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#1f7a8c]">{milestone.year}</div>
                          <h4 className="text-xl font-bold text-gray-900">{milestone.event}</h4>
                        </div>
                      </div>
                      <p className="text-[#022b3a] mb-4 text-lg">{milestone.description}</p>
                      <p className="text-[#022b3a]/80 leading-relaxed">{milestone.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page navigation */}
            <div className="bg-[#e1e5f2] px-8 py-6 flex items-center justify-between border-t border-[#bfdbf7]">
              <button
                onClick={prevPage}
                className="flex items-center space-x-2 px-6 py-3 bg-white border border-[#bfdbf7] rounded-full hover:bg-[#bfdbf7]/20 transition-colors duration-300 disabled:opacity-50"
                disabled={currentPage === 0}
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {journeyPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-[#1f7a8c] to-[#022b3a]'
                        : 'bg-[#bfdbf7] hover:bg-[#1f7a8c]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="flex items-center space-x-2 px-6 py-3 bg-white border border-[#bfdbf7] rounded-full hover:bg-[#bfdbf7]/20 transition-colors duration-300 disabled:opacity-50"
                disabled={currentPage === journeyPages.length - 1}
              >
                <span>Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Book spine effect */}
          <div className="absolute left-0 top-4 bottom-4 w-2 bg-gradient-to-b from-[#1f7a8c] to-[#022b3a] rounded-l-lg shadow-lg"></div>
          <div className="absolute left-2 top-6 bottom-6 w-1 bg-gradient-to-b from-[#022b3a] to-[#1f7a8c] rounded-l-sm"></div>
        </div>

        {/* Page indicator */}
        <div className="text-center mt-8">
          <p className="text-[#022b3a]">
            Page {currentPage + 1} of {journeyPages.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;