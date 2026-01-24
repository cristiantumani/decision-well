-- Add a SELECT policy that denies all access to protect PII data
-- This table only needs INSERT capability for public signups
CREATE POLICY "No public read access to signups"
ON public.early_access_signups
FOR SELECT
USING (false);