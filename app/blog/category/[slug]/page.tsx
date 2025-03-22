import React from 'react';
import { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import BlogCard from '@/components/BlogCard';
import { getCategories, getPostsByCategory } from '@/lib/sanity.client';
import { Category } from '@/types';

interface CategoryPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getCategories();
  const currentCategory = categories.find((c: Category) => c.slug === params.slug);
  
  if (!currentCategory) return { title: 'Category Not Found' };
  
  return {
    title: `${currentCategory.title} Articles | IEEE GU Blog`,
    description: currentCategory.description || `Browse all articles in ${currentCategory.title} category`,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: Category) => ({ 
    slug: category.slug,
  }));
}

export const revalidate = 60;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await getCategories();
  const currentCategory = categories.find((c: Category) => c.slug === params.slug);
  
  if (!currentCategory) {
    return <div>Category not found</div>;
  }
  
  const posts = await getPostsByCategory(params.slug);
  
  return (
    <BlogLayout 
      title={`${currentCategory.title} Articles`}
      description={currentCategory.description || `Browse all articles in ${currentCategory.title} category`}
      categories={categories}
      activeCategory={currentCategory.slug}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{currentCategory.title}</h1>
        {currentCategory.description && (
          <p className="text-gray-600 dark:text-gray-300">{currentCategory.description}</p>
        )}
      </div>
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">No articles found in this category yet.</h3>
        </div>
      )}
    </BlogLayout>
  );
}
