/*
  # Create Hero Section Tables

  1. New Tables
    - `hero_image`
      - `id` (uuid, primary key)
      - `heading` (text)
      - `text` (text)
      - `image_url` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    - `hero_video`
      - `id` (uuid, primary key)
      - `youtube_url` (text)
      - `title` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    - `hero_message`
      - `id` (uuid, primary key)
      - `name` (text)
      - `mobile_no` (text)
      - `organization_name` (text)
      - `message` (text)
      - `created_at` (timestamp)
    - `stats_counter`
      - `id` (uuid, primary key)
      - `events_completed` (text)
      - `happy_clients` (text)
      - `years_experience` (text)
      - `success_rate` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    - `hero_client`
      - `id` (uuid, primary key)
      - `name` (text)
      - `position` (text)
      - `message` (text)
      - `image_url` (text)
      - `rating` (integer)
      - `is_active` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated insert on hero_message
*/

-- Create hero_image table
CREATE TABLE IF NOT EXISTS hero_image (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  heading text NOT NULL,
  text text NOT NULL,
  image_url text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_image ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read hero_image"
  ON hero_image
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create hero_video table
CREATE TABLE IF NOT EXISTS hero_video (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  youtube_url text NOT NULL,
  title text NOT NULL DEFAULT 'Watch Our Story',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_video ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read hero_video"
  ON hero_video
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create hero_message table
CREATE TABLE IF NOT EXISTS hero_message (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile_no text NOT NULL,
  organization_name text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_message ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert hero_message"
  ON hero_message
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create stats_counter table
CREATE TABLE IF NOT EXISTS stats_counter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  events_completed text NOT NULL DEFAULT '500+',
  happy_clients text NOT NULL DEFAULT '50K+',
  years_experience text NOT NULL DEFAULT '15+',
  success_rate text NOT NULL DEFAULT '98%',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE stats_counter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read stats_counter"
  ON stats_counter
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create hero_client table
CREATE TABLE IF NOT EXISTS hero_client (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  message text NOT NULL,
  image_url text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_client ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read hero_client"
  ON hero_client
  FOR SELECT
  TO public
  USING (is_active = true);

-- Insert sample data
INSERT INTO hero_image (heading, text, image_url) VALUES
('Create Unforgettable Moments', 'Transform your vision into reality with our premium event management services. From intimate gatherings to grand celebrations, we craft experiences that last a lifetime.', 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');

INSERT INTO hero_video (youtube_url, title) VALUES
('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Watch Our Story');

INSERT INTO stats_counter (events_completed, happy_clients, years_experience, success_rate) VALUES
('500+', '50K+', '15+', '98%');

INSERT INTO hero_client (name, position, message, image_url, rating) VALUES
('Sarah Johnson', 'CEO, Tech Corp', 'EventCraft transformed our corporate retreat into an unforgettable experience. Their attention to detail is unmatched.', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', 5),
('Michael Chen', 'Wedding Client', 'Our wedding was absolutely perfect thanks to EventCraft. They handled everything with such professionalism and care.', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', 5),
('Emily Davis', 'Marketing Director', 'The product launch event exceeded all our expectations. EventCraft truly understands how to create memorable experiences.', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', 5);