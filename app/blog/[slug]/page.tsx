import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import BlogLayout from '@/components/BlogLayout';
import AuthorCard from '@/components/AuthorCard';
import BlogCard from '@/components/BlogCard';
import { BlogService } from '@/services/blog.service';
import { urlFor } from '@/lib/image';
import { Post } from '@/types';
import { getPost, getPosts } from '@/lib/sanity.client';

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | IEEE GU Blog`,
    description: post.excerpt || `Read ${post.title} on IEEE GU Blog`,
  };
}

// Add dynamic segment configuration to enable on-demand revalidation
export const dynamicParams = true;

// Set revalidate interval to 60 seconds (for ISR)
export const revalidate = 60;

// Generate static params for build time
export async function generateStaticParams() {
  const posts = await getPosts(100); // limit to 100 for build time
  return posts.map((post: Post) => ({ 
    slug: post.slug,
  }));
}

// Define the components for the PortableText renderer
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
          <Image 
            src={urlFor(value).width(800).height(450).url()} 
            alt={value.alt || ''} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {value.caption && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">{value.caption}</div>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),
    callout: ({ value }: any) => {
      const typeStyles = {
        info: 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-300',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-900/20 dark:border-yellow-400 dark:text-yellow-300',
        success: 'bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:border-green-400 dark:text-green-300',
        error: 'bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:border-red-400 dark:text-red-300',
      };
      
      const style = typeStyles[value.type as keyof typeof typeStyles] || typeStyles.info;
      
      return (
        <div className={`border-l-4 p-4 my-6 ${style}`}>
          <PortableText value={value.content} />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href}
          rel={rel}
          target={rel ? '_blank' : undefined}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-3 text-gray-900 dark:text-white">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic my-6 text-gray-700 dark:text-gray-300">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="mb-4 text-gray-800 dark:text-gray-200">{children}</p>,
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Use the service layer to get all blog post data
  const blogData = await BlogService.getBlogPostData(params.slug);
  
  if (!blogData) {
    return (
      <BlogLayout>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Post not found</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The blog post you're looking for doesn't seem to exist.
          </p>
        </div>
      </BlogLayout>
    );
  }

  const { post, relatedPosts, categories } = blogData;
  const formattedDate = post.publishedAt 
    ? format(new Date(post.publishedAt), 'MMMM dd, yyyy')
    : '';
  
  return (
    <BlogLayout 
      title={post.title}
      description={post.excerpt || `Read ${post.title} on IEEE GU Blog`}
      categories={categories}
      showCategories={false}
    >
      <article className="max-w-3xl mx-auto blog-content">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="text-gray-600 dark:text-gray-400">
            {formattedDate}
            {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
          </div>
        </div>
        
        {post.mainImage && (
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image 
              src={urlFor(post.mainImage).width(800).height(450).url()} 
              alt={post.title} 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        <div className="prose prose-blue dark:prose-invert prose-lg max-w-none">
          {/* This renders the full blog content - updated from body to content */}
          {post.content && <PortableText value={post.content} components={portableTextComponents} />}
        </div>

        {post.authors && post.authors[0] && (
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">About the Author</h2>
            <AuthorCard author={post.authors[0]} showFullBio={true} />
          </div>
        )}
      </article>
      
      {relatedPosts && relatedPosts.length > 0 && (
        <aside className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost: Post) => (
              <BlogCard key={relatedPost._id} post={relatedPost} variant="small" />
            ))}
          </div>
        </aside>
      )}
    </BlogLayout>
  );
}
