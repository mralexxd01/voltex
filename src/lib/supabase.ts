// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// ¡Asegúrate de que tenga la palabra 'export' aquí!
export const supabase = createClient(supabaseUrl, supabaseAnonKey);