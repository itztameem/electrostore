import { supabase } from "./supabase";

// Sign Up
export const signUp = async (email, password) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

// Login
export const signIn = async (email, password) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

// Logout
export const signOut = async () => {
  return await supabase.auth.signOut();
};

// Get Current User
export const getUser = async () => {
  return await supabase.auth.getUser();
};