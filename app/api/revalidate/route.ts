import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export const runtime = 'edge';

/**
 * API route for on-demand revalidation
 * This can be triggered by Sanity webhooks when content changes
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the request has the proper authorization
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.REVALIDATION_TOKEN;
    
    // Ensure a token is configured and matches the request
    if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { 
        status: 401,
        headers: { 'content-type': 'application/json' }
      });
    }

    const body = await request.json();
    const { path, tag, type, id } = body;
    
    // Enhanced logging
    console.log(`Revalidation webhook received at ${new Date().toISOString()}`);
    console.log(`Content type: ${type}, ID: ${id}`);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('Full webhook payload:', body);
    }

    // Log the revalidation attempt
    console.log(`Revalidation request received for ${type || 'unknown'} ${id || ''}`, { path, tag });
    
    // Handle blog-specific revalidations
    if (type === 'post') {
      // Revalidate the specific post and related collections
      revalidateTag('post');
      revalidateTag('posts');
      
      if (path) {
        revalidatePath(path);
        revalidatePath('/blog');
      }
    } else if (type === 'author') {
      // Revalidate author pages and related posts
      revalidateTag('author');
      revalidateTag('authors');
      
      if (path) {
        revalidatePath(path);
      }
    } else if (type === 'category') {
      // Revalidate category pages
      revalidateTag('category');
      revalidateTag('categories');
      
      if (path) {
        revalidatePath(path);
      }
    } else {
      // Generic revalidation for all blog content
      revalidatePath('/blog');
    }

    return NextResponse.json({ 
      revalidated: true,
      now: Date.now(),
      message: `Revalidation triggered for ${path || tag || 'all blog content'}`
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ 
      revalidated: false,
      now: Date.now(),
      message: 'Error revalidating content'
    }, { status: 500 });
  }
}
