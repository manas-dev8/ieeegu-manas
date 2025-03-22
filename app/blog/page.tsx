import React from 'react';
import BlogLayout from '../../components/BlogLayout';
import BlogCard from '../../components/BlogCard';
import { getPosts, getCategories, getFeaturedPosts } from '../../lib/sanity.client';
import { Post, Category } from '../../types';

// Set revalidation time for the page
export const revalidate = 60; // Revalidate every minute

export default async function BlogHome() {
  const [posts, categories, featuredPosts] = await Promise.all([
    getPosts(12), // Get 12 most recent posts
    getCategories(),
    getFeaturedPosts(4) // Get 4 featured posts
  ]);
  return (
    <BlogLayout categories={categories}>
      {/* Featured Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 gap-8">
          {featuredPosts[0] && (
            <BlogCard post={featuredPosts[0]} variant="large" />
          )}
          
          {featuredPosts.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(1).map((post: Post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </BlogLayout>
  );
}
