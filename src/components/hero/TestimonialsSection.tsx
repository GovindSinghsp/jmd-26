import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { supabase, HeroClient } from '../../lib/supabase';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<HeroClient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Using fallback data.');
        return;
      }

      const { data } = await supabase
        .from('hero_client')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mx-auto mb-4 max-w-md animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto max-w-2xl animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="group">
              <div className="bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-[#bfdbf7]">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;