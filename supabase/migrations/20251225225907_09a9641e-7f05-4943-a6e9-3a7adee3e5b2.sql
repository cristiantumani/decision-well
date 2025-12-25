-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for signup form)
CREATE POLICY "Anyone can sign up for early access"
ON public.early_access_signups
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins would be able to view signups (for future admin dashboard)
-- For now, no SELECT policy means only service role can read