import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent ${
              isScrolled ? '' : 'text-white'
            }`}>
              JMDDirect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-[#1f7a8c]'
                    : isScrolled
                    ? 'text-gray-700 hover:text-[#1f7a8c]'
                    : 'text-white hover:text-[#bfdbf7]'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-[#1f7a8c] bg-[#e1e5f2]'
                  : 'text-gray-700 hover:text-[#1f7a8c] hover:bg-[#e1e5f2]'
              } rounded-md`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mx-3 mt-4 bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;