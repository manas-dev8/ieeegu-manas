import React from 'react';
import { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import AuthorCard from '@/components/AuthorCard';
import BlogCard from '@/components/BlogCard';
import { getAuthors, getAuthor, getCategories } from '@/lib/sanity.client';
import { Author } from '@/types';

interface AuthorPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = await getAuthor(params.slug);
  if (!author) return { title: 'Author Not Found' };
  
  return {
    title: `Articles by ${author.name} | IEEE GU Blog`,
    description: `Browse all articles written by ${author.name}`,
  };
}

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((author: Author) => ({ 
    slug: author.slug,
  }));
}

export const revalidate = 60;

export default async function AuthorPage({ params }: AuthorPageProps) {
  const [author, categories] = await Promise.all([
    getAuthor(params.slug),
    getCategories()
  ]);
  
  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <BlogLayout 
      title={`Articles by ${author.name}`}
      description={`Browse all articles written by ${author.name}`}
      categories={categories}
      showCategories={false}
    >
      <div className="mb-12">
        <AuthorCard author={author} showFullBio={true} />
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Articles by {author.name}</h2>
      
      {author.posts && author.posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {author.posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">No articles found by this author yet.</h3>
        </div>
      )}
    </BlogLayout>
  );
}
