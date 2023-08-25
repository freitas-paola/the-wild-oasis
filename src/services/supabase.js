import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mksxylszqxxkowvncqkx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rc3h5bHN6cXh4a293dm5jcWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODM5NDAsImV4cCI6MjAwNzE1OTk0MH0.fbJ-etGEegonV_xrZ82LIvcMsxKbGaeJIQfl26GaJVQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
