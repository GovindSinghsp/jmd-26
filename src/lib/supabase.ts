import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables for JMDDirect. Please set up your .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types for our tables
export interface HeroImage {
  id: string;
  heading: string;
  text: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

export interface HeroVideo {
  id: string;
  youtube_url: string;
  title: string;
  is_active: boolean;
  created_at: string;
}

export interface HeroMessage {
  id?: string;
  name: string;
  mobile_no: string;
  organization_name?: string;
  message: string;
  created_at?: string;
}

export interface StatsCounter {
  id: string;
  events_completed: string;
  happy_clients: string;
  years_experience: string;
  success_rate: string;
  is_active: boolean;
  created_at: string;
}

export interface HeroClient {
  id: string;
  name: string;
  position: string;
  message: string;
  image_url: string;
  rating: number;
  is_active: boolean;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  image_heading: string;
  image_text: string;
  card_heading: string;
  card_text: string;
  date: string;
  guests: string;
  location: string;
  image_1: string;
  image_2?: string;
  image_3?: string;
  image_4?: string;
  image_5?: string;
  image_6?: string;
  image_7?: string;
  image_8?: string;
  image_9?: string;
  image_10?: string;
  category: string;
  is_active: boolean;
  created_at: string;
}

export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  event_type: string;
  event_date?: string;
  guests?: string;
  message: string;
  created_at?: string;
}