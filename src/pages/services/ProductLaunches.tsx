import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Rocket, Camera, Megaphone, Phone } from 'lucide-react';

const ProductLaunches = () => {
  const features = [
    'Media Management',
    'Influencer Coordination',
    'Brand Activation',
    'Press Coverage',
    'Product Demonstrations',
    'VIP Guest Management',
    'Social Media Integration',
    'Launch Event Production'
  ];

  const packages = [
    {
      name: 'Startup Launch',
      price: 'From $12,000',
      duration: 'Half-Day Event',
      features: [
        'Venue coordination',
        'Basic media setup',
        'Product display area',
        'Press kit preparation',
        'Social media coverage'
      ]
    },
    {
      name: 'Professional Launch',
      price: 'From $25,000',
      duration: 'Full-Day Event',
      features: [
        'Everything in Startup',
        'Influencer coordination',
        'Live streaming setup',
        'Professional photography',
        'Media interviews',
        'VIP reception'
      ]
    },
    {
      name: 'Premium Launch',
      price: 'From $50,000',
      duration: 'Multi-Day Campaign',
      features: [
        'Everything in Professional',
        'Celebrity endorsements',
        'Multi-city coordination',
        'Exclusive previews',
        'International media',
        'Post-launch analytics'
      ]
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Product
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Launches
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Launch your products with impact through strategic event experiences that generate buzz and drive market success.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Make Your Launch Unforgettable
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A successful product launch can make or break your market entry. Our strategic approach combines creative storytelling, media relations, and experiential marketing to create launch events that generate maximum impact and media coverage.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From tech startups to established brands, we've helped launch products that have gone on to achieve remarkable market success. Our team understands the nuances of different industries and creates tailored experiences that resonate with your target audience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Product launch event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Launch Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic launch solutions tailored to your product and market goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#1f7a8c] mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-300 block"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Product Launches
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Impact</h3>
              <p className="text-gray-600">Data-driven approach to maximize market impact and media coverage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media Excellence</h3>
              <p className="text-gray-600">Professional media relations and content creation for maximum exposure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Amplification</h3>
              <p className="text-gray-600">Integrated marketing approach that amplifies your brand message</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Product?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a launch event that generates buzz, drives sales, and establishes your product in the market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Launch Strategy Session</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunches; 