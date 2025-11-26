import React, { useState, useEffect } from 'react';
import { supabase, StatsCounter } from '../../lib/supabase';

const StatsSection = () => {
  const [stats, setStats] = useState<StatsCounter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Using fallback data.');
        return;
      }

      const { data } = await supabase
        .from('stats_counter')
        .select('*')
        .eq('is_active', true)
        .single();

      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 animate-pulse">
                  <div className="h-12 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const statsData = [
    { number: stats?.events_completed || '500+', label: 'Events Completed' },
    { number: stats?.happy_clients || '50K+', label: 'Happy Clients' },
    { number: stats?.years_experience || '15+', label: 'Years Experience' },
    { number: stats?.success_rate || '98%', label: 'Success Rate' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;