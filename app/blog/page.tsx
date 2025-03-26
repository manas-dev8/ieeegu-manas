import React from 'react';
import { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import BlogCard from '@/components/BlogCard';
import FeaturedPostsSection from '@/components/blog/FeaturedPostsSection';
import LatestPostsSection from '@/components/blog/LatestPostsSection';
import { BlogService } from '@/services/blog.service';

export const metadata: Metadata = {
  title: 'IEEE GU Blog',
  description: 'Latest insights, articles, and news from IEEE GU',
};

// Set revalidate interval (for ISR)
export const revalidate = 60;

// Enable dynamic rendering for on-demand updates
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  // Use service layer to fetch data
  const { posts, categories, featuredPosts } = await BlogService.getBlogHomeData();
  
  return (
    <BlogLayout categories={categories}>
      {/* Split into component sections for better organization */}
      <FeaturedPostsSection posts={featuredPosts} />
      <LatestPostsSection posts={posts} />
    </BlogLayout>
  );
}
