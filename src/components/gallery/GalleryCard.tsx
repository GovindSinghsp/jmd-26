import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { GalleryItem } from '../../lib/supabase';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={item.image_1}
            alt={item.card_heading}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold mb-1">{item.card_heading}</h3>
            <p className="text-sm text-white/90 line-clamp-2">{item.card_text}</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.card_heading}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{item.card_text}</p>
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
  );
};

export default GalleryCard;