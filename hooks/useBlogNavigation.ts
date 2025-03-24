"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

/**
 * Hook for managing blog navigation state and operations
 */
export function useBlogNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  
  // Track navigation for "back" functionality
  useEffect(() => {
    if (pathname && pathname.startsWith('/blog')) {
      setPreviousPath(pathname);
    }
  }, [pathname]);
  
  const navigateToHome = () => {
    router.push('/blog');
  };
  
  const navigateToCategory = (slug: string) => {
    router.push(`/blog/category/${slug}`);
  };
  
  const navigateToPost = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  
  const navigateToAuthor = (slug: string) => {
    router.push(`/blog/author/${slug}`);
  };
  
  const navigateToOrganization = (slug: string) => {
    router.push(`/blog/organization/${slug}`);
  };
  
  const navigateBack = () => {
    if (previousPath && previousPath !== pathname) {
      router.push(previousPath);
    } else {
      navigateToHome();
    }
  };
  
  return {
    navigateToHome,
    navigateToCategory,
    navigateToPost,
    navigateToAuthor,
    navigateToOrganization,
    navigateBack,
    currentPath: pathname
  };
}
