import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://welajzriifgyxdcqgvzi.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlbGFqenJpaWZneXhkY3FndnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzE1ODcsImV4cCI6MjAzMTcwNzU4N30.yVoGyX2eqoDbe8F2GztDRYiRYU-Nv2ZWVfFBT9OOBgA'
)
export default supabase;