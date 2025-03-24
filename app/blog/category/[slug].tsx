import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import BlogLayout from '../../../components/BlogLayout';
import BlogCard from '../../../components/BlogCard';
import { getCategories, getPostsByCategory } from '../../../lib/sanity.client';
import { Post, Category } from '../../../types';

interface CategoryPageProps {
  posts: Post[];
  categories: Category[];
  currentCategory: Category;
}

export default function CategoryPage({ posts, categories, currentCategory }: CategoryPageProps) {
  return (
    <BlogLayout 
      title={`${currentCategory.title} Articles`}
      description={currentCategory.description || `Browse all articles in ${currentCategory.title} category`}
      categories={categories}
      activeCategory={currentCategory.slug}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{currentCategory.title}</h1>
        {currentCategory.description && (
          <p className="text-gray-600">{currentCategory.description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600">No articles found in this category yet.</h3>
        </div>
      )}
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const [posts, categories, categoryList] = await Promise.all([
    getPostsByCategory(slug),
    getCategories(),
    getCategories(),
  ]);
  
  const currentCategory = categoryList.find((c: Category) => c.slug === slug);
  
  if (!currentCategory) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      posts,
      categories,
      currentCategory
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category: Category) => ({
    params: { slug: category.slug }
  }));
  
  return {
    paths,
    fallback: 'blocking'
  };
};
