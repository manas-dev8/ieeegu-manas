"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { urlFor } from '../lib/image';
import { Post } from '../types';

interface BlogCardProps {
  post: Post;
  variant?: 'small' | 'medium' | 'large';
  isHighlighted?: boolean;
}

export default function BlogCard({ post, variant = 'medium', isHighlighted = false }: BlogCardProps) {
  const { title, slug, publishedAt, mainImage, excerpt, authors, estimatedReadingTime } = post;
  const formattedDate = format(new Date(publishedAt), 'MMM dd, yyyy');
  
  if (variant === 'small') {
    return (
      <Link 
        href={`/blog/${slug}`} 
        className={`group flex flex-col h-full hover:opacity-90 transition-opacity rounded-lg ${
          isHighlighted ? 'ring-2 ring-blue-500 dark:ring-blue-400 shadow-md' : ''
        }`}
      >
        <div className="relative w-full aspect-[16/9] mb-3 overflow-hidden rounded-lg">
          {mainImage ? (
            <Image 
              src={urlFor(mainImage).width(400).height(225).url()}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">IEEE GU</span>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-base line-clamp-2 mb-1 text-gray-800 dark:text-gray-100">{title}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-auto">
          {formattedDate} · {estimatedReadingTime || 3} min read
        </div>
      </Link>
    );
  }
  
  if (variant === 'large') {
    return (
      <Link 
        href={`/blog/${slug}`} 
        className={`group grid md:grid-cols-2 gap-6 hover:opacity-90 transition-opacity p-4 rounded-lg ${
          isHighlighted 
            ? 'border border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md' 
            : 'border border-transparent hover:border-gray-200 dark:hover:border-gray-700'
        }`}
      >
        <div className="relative w-full aspect-[16/9] md:aspect-square overflow-hidden rounded-lg">
          {mainImage ? (
            <Image 
              src={urlFor(mainImage).width(600).height(600).url()}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">IEEE GU</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h2>
          {excerpt && <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{excerpt}</p>}
          <div className="flex items-center mt-auto">
            {authors?.[0]?.image && (
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white dark:border-gray-800">
                <Image 
                  src={urlFor(authors[0].image).width(40).height(40).url()}
                  alt={authors[0].name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-200">{authors?.[0]?.name || 'IEEE GU'}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {formattedDate} · {estimatedReadingTime || 5} min read
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  // Default medium size
  return (
    <Link 
      href={`/blog/${slug}`} 
      className={`group flex flex-col h-full hover:opacity-90 transition-opacity p-3 rounded-lg ${
        isHighlighted 
          ? 'border border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md' 
          : 'border border-transparent hover:border-gray-200 dark:hover:border-gray-700'
      }`}
    >
      <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
        {mainImage ? (
          <Image 
            src={urlFor(mainImage).width(600).height(338).url()}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">IEEE GU</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg line-clamp-2 mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      {excerpt && <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">{excerpt}</p>}
      <div className="flex items-center mt-auto">
        {authors?.[0]?.image && (
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-white dark:border-gray-800">
            <Image 
              src={urlFor(authors[0].image).width(32).height(32).url()}
              alt={authors[0].name}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        )}
        <div className="text-sm">
          <span className="font-medium text-gray-800 dark:text-gray-200">{authors?.[0]?.name || 'IEEE GU'}</span>
          <div className="text-gray-600 dark:text-gray-400">
            {formattedDate} · {estimatedReadingTime || 4} min read
          </div>
        </div>
      </div>
    </Link>
  );
}
