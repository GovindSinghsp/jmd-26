import React from 'react';
import { Calendar } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white/30 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full animate-pulse">
              <Calendar className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-2">JMDDirect</h2>
          <p className="text-white/80">Creating magical moments...</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;