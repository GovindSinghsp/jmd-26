import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { supabase, HeroImage, HeroVideo } from '../../lib/supabase';
import PlanningModal from './PlanningModal';
import VideoModal from './VideoModal';

const HeroSection = () => {
  const [heroData, setHeroData] = useState<HeroImage | null>(null);
  const [videoData, setVideoData] = useState<HeroVideo | null>(null);
  const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Using fallback data.');
        return;
      }

      // Fetch hero image data
      const { data: heroImageData } = await supabase
        .from('hero_image')
        .select('*')
        .eq('is_active', true)
        .single();

      // Fetch hero video data
      const { data: heroVideoData } = await supabase
        .from('hero_video')
        .select('*')
        .eq('is_active', true)
        .single();

      setHeroData(heroImageData);
      setVideoData(heroVideoData);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white/30"></div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {heroData?.image_url && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url(${heroData.image_url})`
            }}
          ></div>
        )}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slideUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {heroData?.heading || 'Create Unforgettable Moments'}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {heroData?.text || 'Transform your vision into reality with our premium event management services.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsPlanningModalOpen(true)}
                className="group bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Planning</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {videoData && (
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group flex items-center space-x-2 text-white hover:text-[#bfdbf7] transition-colors duration-300"
                >
                  <div className="p-3 border-2 border-white/30 rounded-full group-hover:border-[#bfdbf7] transition-colors duration-300">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                  <span className="text-lg">{videoData.title}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-[#1f7a8c]/20 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-[#bfdbf7]/20 rounded-full backdrop-blur-sm"></div>
        </div>
      </section>

      <PlanningModal 
        isOpen={isPlanningModalOpen} 
        onClose={() => setIsPlanningModalOpen(false)} 
      />
      
      {videoData && (
        <VideoModal 
          isOpen={isVideoModalOpen} 
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={videoData.youtube_url}
          title={videoData.title}
        />
      )}
    </>
  );
};

export default HeroSection;