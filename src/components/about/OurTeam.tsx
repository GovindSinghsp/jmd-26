import React from 'react';

const OurTeam = () => {
  const team = [
    {
      name: 'Alexandra Smith',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With 15+ years in event management, Alexandra founded EventCraft to bring luxury and creativity to every celebration.',
      specialties: ['Wedding Planning', 'Luxury Events', 'Strategic Planning']
    },
    {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Marcus brings artistic vision and innovative design concepts to create truly memorable event experiences.',
      specialties: ['Event Design', 'Brand Activation', 'Creative Concepts']
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Sarah ensures flawless execution with her meticulous attention to detail and exceptional organizational skills.',
      specialties: ['Project Management', 'Vendor Relations', 'Quality Control']
    },
    {
      name: 'David Rodriguez',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'David handles all technical aspects of events, from lighting and sound to live streaming and AV production.',
      specialties: ['AV Production', 'Live Streaming', 'Technical Setup']
    },
    {
      name: 'Emma Thompson',
      role: 'Client Relations Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Emma is the friendly face our clients love, ensuring every interaction is positive and every need is met.',
      specialties: ['Client Communication', 'Customer Service', 'Relationship Building']
    },
    {
      name: 'James Wilson',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'James develops marketing strategies and manages our brand presence across all channels.',
      specialties: ['Digital Marketing', 'Brand Strategy', 'Social Media']
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}Team
            </span>
          </h2>
          <p className="text-xl text-[#022b3a] max-w-3xl mx-auto">
            The creative minds and passionate professionals behind every successful event
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-[#e1e5f2]">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#1f7a8c] font-semibold mb-4">{member.role}</p>
                </div>
                
                <p className="text-[#022b3a] leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>
                
                <div className="border-t border-[#1f7a8c]/30 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 text-center">Specialties</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-[#e1e5f2] text-[#022b3a] text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl p-8 border border-[#e1e5f2]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-[#022b3a] mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating extraordinary events. 
              If you're creative, detail-oriented, and love making people's dreams come true, we'd love to hear from you.
            </p>
            <button className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;