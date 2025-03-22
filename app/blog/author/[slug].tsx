import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import BlogLayout from '../../../components/BlogLayout';
import AuthorCard from '../../../components/AuthorCard';
import BlogCard from '../../../components/BlogCard';
import { getAuthors, getAuthor, getCategories } from '../../../lib/sanity.client';
import { Author, Category, Post } from '../../../types';

interface AuthorPageProps {
  author: Author & { posts: Post[] };
  categories: Category[];
}

export default function AuthorPage({ author, categories }: AuthorPageProps) {
  if (!author) return null;

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
          {author.posts.map(post => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = await getAuthors();
  const paths = authors.map((author: Author) => ({
    params: { slug: author.slug },
  }));
  
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const [author, categories] = await Promise.all([
    getAuthor(slug),
    getCategories()
  ]);
  
  if (!author) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      author,
      categories
    },
    revalidate: 60
  };
};
