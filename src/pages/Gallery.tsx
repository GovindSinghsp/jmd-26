import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'birthdays', name: 'Birthdays' },
    { id: 'launches', name: 'Product Launches' },
    { id: 'social', name: 'Social Events' },
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Elegant Garden Wedding',
      category: 'weddings',
      description: 'A romantic outdoor wedding with 150 guests featuring floral arrangements and string lights.',
      date: 'June 2024',
      guests: '150',
      location: 'Botanical Gardens'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Tech Conference 2024',
      category: 'corporate',
      description: 'Annual technology conference with keynote speakers and networking sessions.',
      date: 'March 2024',
      guests: '500',
      location: 'Convention Center'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sweet 16 Celebration',
      category: 'birthdays',
      description: 'A glamorous sweet sixteen party with DJ, photo booth, and custom decorations.',
      date: 'August 2024',
      guests: '80',
      location: 'Private Venue'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Product Launch Gala',
      category: 'launches',
      description: 'Exclusive product launch event with media coverage and influencer attendance.',
      date: 'May 2024',
      guests: '200',
      location: 'Luxury Hotel'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Charity Fundraiser',
      category: 'social',
      description: 'Annual charity gala raising funds for local community programs.',
      date: 'September 2024',
      guests: '300',
      location: 'Grand Ballroom'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Music Festival',
      category: 'social',
      description: 'Three-day music festival featuring local and international artists.',
      date: 'July 2024',
      guests: '2000',
      location: 'City Park'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      title: 'Intimate Beach Wedding',
      category: 'weddings',
      description: 'Sunset beach ceremony with close family and friends.',
      date: 'April 2024',
      guests: '50',
      location: 'Seaside Resort'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      title: 'Corporate Retreat',
      category: 'corporate',
      description: 'Team building retreat with workshops and outdoor activities.',
      date: 'October 2024',
      guests: '100',
      location: 'Mountain Resort'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      title: '50th Birthday Bash',
      category: 'birthdays',
      description: 'Milestone birthday celebration with live band and gourmet catering.',
      date: 'November 2024',
      guests: '120',
      location: 'Country Club'
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

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
            Our
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}Gallery
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful events and get inspired for your next celebration.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{item.guests} guests</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {filteredItems[selectedImage].description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Calendar className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">{filteredItems[selectedImage].date}</p>
                  </div>
                  <div>
                    <Users className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-semibold">{filteredItems[selectedImage].guests}</p>
                  </div>
                  <div>
                    <MapPin className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{filteredItems[selectedImage].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and client satisfaction
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent mb-2">
                187+
              </div>
              <p className="text-gray-600">Events Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600">Happy Guests</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent mb-2">
                09+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;