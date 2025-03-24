"use client";

import React from 'react';
import Link from 'next/link';
import { Category } from '../types';
import CategoryList from './CategoryList';
import { ModeToggle } from './darktheme';

interface BlogLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  categories?: Category[];
  activeCategory?: string;
  showCategories?: boolean;
}

export default function BlogLayout({ 
  children, 
  title = 'IEEE GU Blog', 
  description = 'Latest insights, articles, and news from IEEE GU',
  categories = [],
  activeCategory,
  showCategories = true
}: BlogLayoutProps) {
  // For App Router we don't need Head component anymore, but we keep the prop for metadata in page components
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200 min-h-screen pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/blog" className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 hover:underline">
              IEEE GU Blog
            </Link>
            <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
              Latest insights, articles and news from our community
            </p>
          </div>
          <ModeToggle />
        </div>
        
        {showCategories && categories.length > 0 && (
          <CategoryList categories={categories} activeCategory={activeCategory} />
        )}
        
        <main className="pt-4">{children}</main>
        
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
              &larr; Back to all articles
            </Link>
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Return to IEEE GU homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
