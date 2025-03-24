import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import BlogLayout from '../../components/BlogLayout';
import AuthorCard from '../../components/AuthorCard';
import BlogCard from '../../components/BlogCard';
import { getPost, getPosts, getRelatedPosts, getCategories } from '../../lib/sanity.client';
import { urlFor } from '../../lib/image';
import { Post, Category } from '../../types';

interface BlogPostPageProps {
  post: Post;
  relatedPosts: Post[];
  categories: Category[];
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
          <div className="text-sm text-gray-500 mt-2 text-center">{value.caption}</div>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),
    callout: ({ value }: any) => {
      const typeStyles = {
        info: 'bg-blue-50 border-blue-500 text-blue-700',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
        success: 'bg-green-50 border-green-500 text-green-700',
        error: 'bg-red-50 border-red-500 text-red-700',
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
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-3">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">{children}</blockquote>
    ),
  },
};

export default function BlogPostPage({ post, relatedPosts, categories }: BlogPostPageProps) {
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
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="text-gray-600">
            {formattedDate}
            {post.estimatedReadingTime && ` · ${post.estimatedReadingTime} min read`}
          </div>
        </div>
        
        {post.mainImage && (
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
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

        <div className="prose prose-blue prose-lg max-w-none">
          <PortableText value={post.content} components={portableTextComponents} />
        </div>

        <div className="mt-12">
          {post.authors && post.authors[0] && (
            <AuthorCard author={post.authors[0]} showFullBio />
          )}
        </div>
      </article>
      
      {relatedPosts.length > 0 && (
        <aside className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost._id} post={relatedPost} variant="small" />
            ))}
          </div>
        </aside>
      )}
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const [post, relatedPosts, categories] = await Promise.all([
    getPost(slug),
    getRelatedPosts(slug, 3),
    getCategories()
  ]);
  
  if (!post) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      post,
      relatedPosts,
      categories
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(20); // Pre-render the 20 most recent posts
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug }
  }));
  
  return {
    paths,
    fallback: 'blocking'
  };
};
