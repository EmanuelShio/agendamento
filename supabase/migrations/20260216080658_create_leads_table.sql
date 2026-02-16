/*
  # Create leads table for Kingdom Assessoria Quiz Funnel

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Lead's name
      - `whatsapp` (text) - Lead's WhatsApp number
      - `website_instagram` (text, nullable) - Lead's website or Instagram
      - `email` (text) - Lead's email address
      - `service` (text) - Selected service option
      - `created_at` (timestamptz) - Timestamp when lead was created
      - `ip_address` (text, nullable) - IP address for tracking
      - `user_agent` (text, nullable) - Browser user agent

  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submission)
    - Add policy for authenticated users to read leads (for admin access)

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for date-based queries
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp text NOT NULL,
  website_instagram text,
  email text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);