  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Heart, 
  Briefcase, 
  Rocket, 
  Music, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Create the wedding of your dreams with our comprehensive planning services',
      features: ['Venue Selection', 'Vendor Coordination', 'Timeline Management', 'Day-of Coordination'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/wedding-planning',
      price: 'From $8,000',
      duration: 'Full Planning'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional corporate events that leave lasting impressions on your clients',
      features: ['Conference Management', 'Team Building Events', 'Product Launches', 'Executive Retreats'],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/corporate-events',
      price: 'From $5,000',
      duration: 'Multi-Day Events'
    },
    {
      icon: Calendar,
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations for all ages, from intimate to grand',
      features: ['Theme Development', 'Entertainment Booking', 'Catering Services', 'Decoration Setup'],
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/birthday-parties',
      price: 'From $2,500',
      duration: 'All Ages'
    },
    {
      icon: Rocket,
      title: 'Conference Management',
      description: 'Professional conference management that delivers impactful experiences',
      features: ['Speaker Coordination', 'Registration Management', 'AV Setup', 'Networking Sessions'],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/conference-management',
      price: 'From $8,000',
      duration: 'Multi-Day'
    },
    {
      icon: Rocket,
      title: 'Product Launches',
      description: 'Launch your products with impact through strategic event experiences',
      features: ['Media Management', 'Influencer Coordination', 'Brand Activation', 'Press Coverage'],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/product-launches',
      price: 'From $12,000',
      duration: 'Campaign Events'
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Bring people together with perfectly orchestrated social events',
      features: ['Reunion Planning', 'Holiday Parties', 'Networking Events', 'Charity Galas'],
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      link: '/services/social-gatherings',
      price: 'From $3,500',
      duration: 'Community Events'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start with a detailed consultation to understand your vision, requirements, and budget.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a comprehensive plan with timelines, vendor selections, and design concepts.'
    },
    {
      step: '03',
      title: 'Coordination',
      description: 'We handle all vendor communications, logistics, and ensure everything runs smoothly.'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'On event day, we manage every detail so you can enjoy your perfectly executed event.'
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Team',
      description: 'Recognized excellence in event management with industry awards and certifications.'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete insurance coverage and liability protection for peace of mind.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support throughout the planning process and event day.'
    },
    {
      icon: Star,
      title: '98% Success Rate',
      description: 'Consistently delivering exceptional results with a proven track record.'
    },
  ];

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
              {' '}Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we offer comprehensive event management services tailored to your unique vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive event management services designed to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 ${
                  activeService === index ? 'border-[#1f7a8c]' : 'border-gray-100'
                }`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-[#1f7a8c]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[#1f7a8c]">{service.price}</span>
                        <span className="text-sm text-gray-500">{service.duration}</span>
                      </div>
                      {service.link ? (
                        <Link
                          to={service.link}
                          className="w-full bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <Link
                          to="/contact"
                          className="w-full bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>Get Quote</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every event is executed flawlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}JMDDirect
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages that set us apart in the event management industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-10 w-10 text-[#1f7a8c]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}Perfect Event?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get a personalized quote for your event. Our team will work with you to create a package that fits your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#022b3a] transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;