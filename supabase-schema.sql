-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contacts
CREATE POLICY "Allow public to insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows only authenticated users to read contacts
CREATE POLICY "Allow authenticated users to read contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
