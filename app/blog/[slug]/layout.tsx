"use client";

import { useEffect } from 'react';
import { useBlog } from '@/context/BlogContext';

export default function BlogPostLayout({ 
  children,
  params
}: { 
  children: React.ReactNode,
  params: { slug: string }  
}) {
  const { addToRecentlyViewed } = useBlog();
  
  // Track post view
  useEffect(() => {
    addToRecentlyViewed(params.slug);
  }, [params.slug, addToRecentlyViewed]);
  
  return children;
}
