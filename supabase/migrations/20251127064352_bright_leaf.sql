/*
  # Create Gallery and Contact Tables

  1. New Tables
    - `gallery_table`
      - `id` (uuid, primary key)
      - `image_heading` (text)
      - `image_text` (text)
      - `card_heading` (text)
      - `card_text` (text)
      - `date` (text)
      - `guests` (text)
      - `location` (text)
      - `image_1` through `image_10` (text URLs)
      - `category` (text)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    - `contact_us`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `event_type` (text)
      - `event_date` (date)
      - `guests` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on gallery_table
    - Add policies for public insert on contact_us
*/

-- Create gallery_table
CREATE TABLE IF NOT EXISTS gallery_table (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_heading text NOT NULL,
  image_text text NOT NULL,
  card_heading text NOT NULL,
  card_text text NOT NULL,
  date text NOT NULL,
  guests text NOT NULL,
  location text NOT NULL,
  image_1 text NOT NULL,
  image_2 text,
  image_3 text,
  image_4 text,
  image_5 text,
  image_6 text,
  image_7 text,
  image_8 text,
  image_9 text,
  image_10 text,
  category text NOT NULL DEFAULT 'all',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_table ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read gallery_table"
  ON gallery_table
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create contact_us table
CREATE TABLE IF NOT EXISTS contact_us (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text NOT NULL,
  event_date date,
  guests text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_us ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact_us"
  ON contact_us
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample gallery data
INSERT INTO gallery_table (
  image_heading, image_text, card_heading, card_text, date, guests, location, category,
  image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10
) VALUES
(
  'Elegant Garden Wedding',
  'A romantic outdoor wedding celebration with beautiful floral arrangements and magical lighting that created the perfect atmosphere for this special day.',
  'Elegant Garden Wedding',
  'A romantic outdoor wedding with 150 guests featuring floral arrangements and string lights.',
  'June 2024',
  '150',
  'Botanical Gardens',
  'weddings',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
),
(
  'Tech Conference 2024',
  'Annual technology conference featuring keynote speakers, networking sessions, and the latest innovations in the tech industry.',
  'Tech Conference 2024',
  'Annual technology conference with keynote speakers and networking sessions.',
  'March 2024',
  '500',
  'Convention Center',
  'corporate',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
),
(
  'Sweet 16 Celebration',
  'A glamorous sweet sixteen party with DJ, photo booth, custom decorations, and all the special touches to make this milestone birthday unforgettable.',
  'Sweet 16 Celebration',
  'A glamorous sweet sixteen party with DJ, photo booth, and custom decorations.',
  'August 2024',
  '80',
  'Private Venue',
  'birthdays',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
);