import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function will run before any request is processed
export function middleware(request: NextRequest) {
  // For blog post URLs, ensure they're properly processed
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/blog/') && !pathname.includes('/category/') && !pathname.includes('/author/') && !pathname.includes('/organization/')) {
    // This is a blog post URL - ensure it's properly handled
    const slug = pathname.split('/')[2]; // Extract slug from URL
    
    if (slug) {
      // Log request (in development only)
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Blog post requested: ${slug}`);
      }
    }
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  // Only run middleware for blog-related paths
  matcher: ['/blog/:path*'],
};
