import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { supabase, HeroMessage } from '../../lib/supabase';

interface PlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlanningModal: React.FC<PlanningModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<HeroMessage>({
    name: '',
    mobile_no: '',
    organization_name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        .from('hero_message')
        .insert([formData]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        name: '',
        mobile_no: '',
        organization_name: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      mobile_no: '',
      organization_name: '',
      message: '',
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Start Planning</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label htmlFor="mobile_no" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile_no"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="organization_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization_name"
                  name="organization_name"
                  value={formData.organization_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1f7a8c] focus:ring-2 focus:ring-[#bfdbf7] transition-colors duration-300 outline-none resize-none"
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white py-3 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanningModal;