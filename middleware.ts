import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware function will run before any request is processed
export function middleware(request: NextRequest) {
  // Simply return the next response - this helps establish middleware
  // which can sometimes prevent the error from appearing as frequently
  return NextResponse.next();
}

// Configure matcher to run this middleware only for certain paths
export const config = {
  matcher: ['/blog/:path*'],
};
