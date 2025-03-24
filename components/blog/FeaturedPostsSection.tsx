"use client";

import React from 'react';
import BlogCard from '@/components/BlogCard';
import { Post } from '@/types';
import { useBlog } from '@/context/BlogContext';

interface FeaturedPostsSectionProps {
  posts: Post[];
}

export default function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
  const { addToRecentlyViewed } = useBlog();
  
  // Handle post click to track in recently viewed
  const handlePostClick = (slug: string) => {
    addToRecentlyViewed(slug);
  };
  
  if (!posts.length) return null;
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Articles</h2>
      <div className="grid grid-cols-1 gap-8">
        {posts[0] && (
          <div onClick={() => handlePostClick(posts[0].slug)}>
            <BlogCard post={posts[0]} variant="large" />
          </div>
        )}
        
        {posts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post: Post) => (
              <div key={post._id} onClick={() => handlePostClick(post.slug)}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
