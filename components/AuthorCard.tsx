"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/image';
import { Author } from '../types';
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { PortableText } from '@portabletext/react';

interface AuthorCardProps {
  author: Author;
  showFullBio?: boolean;
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'twitter': return <FaTwitter />;
    case 'linkedin': return <FaLinkedin />;
    case 'github': return <FaGithub />;
    default: return <FaGlobe />;
  }
};

export default function AuthorCard({ author, showFullBio = false }: AuthorCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      {author.image && (
        <div className="flex-shrink-0">
          <Link href={`/blog/author/${author.slug}`}>
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
              <Image 
                src={urlFor(author.image).width(128).height(128).url()} 
                alt={author.name} 
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      )}
      
      <div className="flex-1 text-center sm:text-left">
        <Link href={`/blog/author/${author.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{author.name}</h3>
        </Link>
        
        {author.organization && (
          <Link href={`/blog/organization/${author.organization.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
            {author.organization.name}
          </Link>
        )}
        
        {author.bio && (
          <div className="mt-3 text-gray-700 dark:text-gray-300 prose-sm dark:prose-invert max-w-none">
            {showFullBio ? (
              <PortableText value={author.bio} />
            ) : (
              <PortableText value={author.bio.slice(0, 1)} />
            )}
            {!showFullBio && author.bio.length > 1 && (
              <Link href={`/blog/author/${author.slug}`} className="text-blue-600 dark:text-blue-400 inline-block mt-2 hover:underline">
                Read more about {author.name}
              </Link>
            )}
          </div>
        )}
        
        {author.socialLinks && author.socialLinks.length > 0 && (
          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            {author.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title={social.platform}
              >
                <span className="text-xl">{getSocialIcon(social.platform)}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
