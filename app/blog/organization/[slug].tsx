import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogLayout from '../../../components/BlogLayout';
import BlogCard from '../../../components/BlogCard';
import { PortableText } from '@portabletext/react';
import { getOrganizations, getOrganization, getCategories } from '../../../lib/sanity.client';
import { urlFor } from '../../../lib/image';
import { Organization, Category, Post, Author } from '../../../types';

interface OrganizationPageProps {
  organization: Organization & { 
    posts: Post[];
    authors: Author[];
    description?: any[];
  };
  categories: Category[];
}

export default function OrganizationPage({ organization, categories }: OrganizationPageProps) {
  if (!organization) return null;
  
  return (
    <BlogLayout 
      title={organization.name}
      description={`Learn about ${organization.name} and browse their articles`}
      categories={categories}
      showCategories={false}
    >
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          {organization.logo && (
            <div className="flex-shrink-0">
              <div className="w-32 h-32 relative overflow-hidden rounded-lg border-4 border-white dark:border-gray-800 shadow-md">
                <Image 
                  src={urlFor(organization.logo).width(128).height(128).url()} 
                  alt={organization.name} 
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          )}
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{organization.name}</h1>
            
            {organization.website && (
              <a 
                href={organization.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-block mb-4"
              >
                {organization.website.replace(/^https?:\/\//, '')}
              </a>
            )}
            
            {organization.description && (
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <PortableText value={organization.description} />
              </div>
            )}
          </div>
        </div>

        {organization.authors && organization.authors.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Authors from {organization.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {organization.authors.map(author => (
                <Link 
                  key={author._id} 
                  href={`/blog/author/${author.slug}`}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                >
                  {author.image ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                      <Image 
                        src={urlFor(author.image).width(64).height(64).url()}
                        alt={author.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                        {author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-center font-medium text-gray-800 dark:text-gray-200">{author.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {organization.posts && organization.posts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Articles from {organization.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organization.posts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            No articles found from this organization yet.
          </h3>
        </div>
      )}
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const organizations = await getOrganizations();
  const paths = organizations.map((org: Organization) => ({
    params: { slug: org.slug },
  }));
  
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const [organization, categories] = await Promise.all([
    getOrganization(slug),
    getCategories()
  ]);
  
  if (!organization) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      organization,
      categories
    },
    revalidate: 60
  };
};
