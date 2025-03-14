
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://banapgytkdybwboctodh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbmFwZ3l0a2R5Yndib2N0b2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTA2NjYsImV4cCI6MjA1NjU4NjY2Nn0.ahgjHK85AR_s7cNeySS8vNPYz43OfiLqvXK5Jcsi_TM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;