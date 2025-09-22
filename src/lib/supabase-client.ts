// src/lib/supabase-client.ts
import { createClient } from '@supabase/supabase-js';

// IMPORTANT: This client is for SERVER-SIDE use only.
// It uses the Service Role Key, which should never be exposed to the client.

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  if (import.meta.env.PROD) {
    throw new Error("Supabase URL and Service Role Key must be provided in environment variables.");
  } else {
    // In development, it's okay for these to be missing if not actively used.
    console.warn("Supabase server client not configured. This is okay for client-side only pages.");
  }
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
