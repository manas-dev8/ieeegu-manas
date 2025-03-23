"use client";

import React from 'react';
import BlogCard from '@/components/BlogCard';
import { Post } from '@/types';
import { useBlog } from '@/context/BlogContext';

interface LatestPostsSectionProps {
  posts: Post[];
}

export default function LatestPostsSection({ posts }: LatestPostsSectionProps) {
  const { addToRecentlyViewed, preferredCategories } = useBlog();
  
  // Handle post click to track in recently viewed
  const handlePostClick = (slug: string) => {
    addToRecentlyViewed(slug);
  };
  
  if (!posts.length) return null;
  
  // If user has preferred categories, highlight those posts
  const prioritizedPosts = [...posts].sort((a, b) => {
    // Check if post has any preferred categories
    const aHasPreferred = a.categories?.some(cat => preferredCategories.includes(cat.slug)) || false;
    const bHasPreferred = b.categories?.some(cat => preferredCategories.includes(cat.slug)) || false;
    
    if (aHasPreferred && !bHasPreferred) return -1;
    if (!aHasPreferred && bHasPreferred) return 1;
    return 0;
  });
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prioritizedPosts.map((post: Post) => (
          <div key={post._id} onClick={() => handlePostClick(post.slug)}>
            <BlogCard 
              post={post}
              // Remove the isHighlighted prop or update BlogCard component to accept it
              // isHighlighted={post.categories?.some(cat => preferredCategories.includes(cat.slug))}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
