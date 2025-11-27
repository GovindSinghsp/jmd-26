import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase, ContactFormData } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Product Launch',
    'Social Gathering',
    'Entertainment Event',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!supabase) {
        console.error('Supabase not configured. Cannot submit form.');
        return;
      }

      const { error } = await supabase
        .from('contact_us')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          event_type: formData.event_type,
          event_date: formData.event_date || null,
          guests: formData.guests || null,
          message: formData.message,
        }]);

      if (error) throw error;

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        guests: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setIsSubmitting(false);
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
            Get In
            <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let's start planning your perfect event. Reach out to us and let's create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@jmddirect.site</p>
              <p className="text-gray-600">events@jmddirect.site</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">123 Event Street</p>
              <p className="text-gray-600">City Center, NY 10001</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Send Us A
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}Message
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your event.
              </p>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">Thank you! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300 outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="event_type" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="event_type"
                      name="event_type"
                      value={formData.event_type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event_date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="event_date"
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-300 outline-none"
                      placeholder="100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none resize-none"
                    placeholder="Share your vision, requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731668482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959988619!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Visit our office for a face-to-face consultation. We'd love to show you our portfolio and discuss your event in detail over coffee.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl p-8 border border-[#bfdbf7]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We understand that planning an event can be time-sensitive. That's why we guarantee a response within 24 hours on business days.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">No obligation quote</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Expert advice and recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">
                We recommend booking 6-12 months in advance for weddings and large events, and 2-3 months for smaller gatherings. However, we can accommodate shorter timelines based on availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's included in your services?</h3>
              <p className="text-gray-600">
                Our services include full event planning and coordination, vendor management, timeline creation, day-of coordination, and more. We tailor each package to your specific needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you handle vendor payments?</h3>
              <p className="text-gray-600">
                We coordinate with all vendors and manage the timeline, but clients typically handle direct payments to vendors. We can discuss alternative arrangements during consultation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I customize my event package?</h3>
              <p className="text-gray-600">
                Absolutely! We offer fully customizable packages tailored to your specific needs, budget, and vision. Every event is unique, and we treat it that way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
