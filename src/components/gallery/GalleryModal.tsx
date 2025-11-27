import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';
import { GalleryItem } from '../../lib/supabase';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  // Get all available images
  const images = [
    item.image_1,
    item.image_2,
    item.image_3,
    item.image_4,
    item.image_5,
    item.image_6,
    item.image_7,
    item.image_8,
    item.image_9,
    item.image_10,
  ].filter(Boolean) as string[];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-[90%] max-w-6xl h-[85vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-xl h-full overflow-hidden flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
            {/* Event Details */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.image_heading}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.image_text}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-[#1f7a8c] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-semibold text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#1f7a8c] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Guests</p>
                    <p className="font-semibold text-sm">{item.guests}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#1f7a8c] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.card_heading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.card_text}</p>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex-1 p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Gallery ({images.length} photos)</h4>
              <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'border-[#1f7a8c] ring-2 ring-[#1f7a8c]/30'
                        : 'border-gray-200 hover:border-[#1f7a8c]/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 flex flex-col">
            {/* Image Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Photo {currentImageIndex + 1} of {images.length}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevImage}
                    disabled={images.length <= 1}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={images.length <= 1}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Image Display */}
            <div className="flex-1 relative bg-gray-100">
              <img
                src={images[currentImageIndex]}
                alt={`${item.image_heading} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Large Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;