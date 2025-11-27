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
      <div className="relative w-[85%] h-[85%] max-w-7xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-2xl h-full overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{item.image_heading}</h2>
            <p className="text-gray-600 text-lg">{item.image_text}</p>
            
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <Calendar className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold">{item.date}</p>
              </div>
              <div>
                <Users className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Guests</p>
                <p className="font-semibold">{item.guests}</p>
              </div>
              <div>
                <MapPin className="h-5 w-5 text-[#1f7a8c] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{item.location}</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex-1 flex flex-col">
            {/* Main Image */}
            <div className="flex-1 relative">
              <img
                src={images[currentImageIndex]}
                alt={`${item.image_heading} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex space-x-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-[#1f7a8c] scale-110'
                          : 'border-gray-300 hover:border-[#1f7a8c]/50'
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;