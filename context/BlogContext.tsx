"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Category } from '@/types';

interface BlogContextValue {
  recentlyViewed: string[];
  addToRecentlyViewed: (postSlug: string) => void;
  clearRecentlyViewed: () => void;
  preferredCategories: string[];
  addPreferredCategory: (categorySlug: string) => void;
  removePreferredCategory: (categorySlug: string) => void;
}

const BlogContext = createContext<BlogContextValue | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  // Track recently viewed posts (stored in localStorage)
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  
  // Track user category preferences (stored in localStorage)
  const [preferredCategories, setPreferredCategories] = useState<string[]>([]);
  
  // Initialize state from localStorage on client side
  useEffect(() => {
    const storedRecent = localStorage.getItem('ieee_recently_viewed');
    if (storedRecent) {
      try {
        setRecentlyViewed(JSON.parse(storedRecent));
      } catch (e) {
        console.error('Failed to parse recently viewed posts from localStorage');
      }
    }
    
    const storedPreferences = localStorage.getItem('ieee_preferred_categories');
    if (storedPreferences) {
      try {
        setPreferredCategories(JSON.parse(storedPreferences));
      } catch (e) {
        console.error('Failed to parse preferred categories from localStorage');
      }
    }
  }, []);
  
  // Add a post to recently viewed
  const addToRecentlyViewed = (postSlug: string) => {
    setRecentlyViewed(prev => {
      // Remove if already exists and add to front of array
      const newList = [postSlug, ...prev.filter(slug => slug !== postSlug)].slice(0, 10);
      localStorage.setItem('ieee_recently_viewed', JSON.stringify(newList));
      return newList;
    });
  };
  
  // Clear recently viewed
  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
    localStorage.removeItem('ieee_recently_viewed');
  };
  
  // Add a category to preferences
  const addPreferredCategory = (categorySlug: string) => {
    setPreferredCategories(prev => {
      if (prev.includes(categorySlug)) return prev;
      const newList = [...prev, categorySlug];
      localStorage.setItem('ieee_preferred_categories', JSON.stringify(newList));
      return newList;
    });
  };
  
  // Remove a category from preferences
  const removePreferredCategory = (categorySlug: string) => {
    setPreferredCategories(prev => {
      const newList = prev.filter(slug => slug !== categorySlug);
      localStorage.setItem('ieee_preferred_categories', JSON.stringify(newList));
      return newList;
    });
  };
  
  return (
    <BlogContext.Provider value={{
      recentlyViewed,
      addToRecentlyViewed,
      clearRecentlyViewed,
      preferredCategories,
      addPreferredCategory,
      removePreferredCategory
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
