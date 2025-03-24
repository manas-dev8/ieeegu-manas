import { createClient } from 'next-sanity'
import { config } from './sanity.config'

export const client = createClient({
  ...config,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})

const REVALIDATE_INTERVAL = 60 // seconds

export async function getPosts(limit?: number, category?: string, author?: string) {
  // Build the query based on optional filters
  let query = `*[_type == "post"]`;
  const params: Record<string, any> = {};
  
  // Add category filter if provided
  if (category) {
    query += ` && $category in categories[]->slug.current`;
    params.category = category;
  }
  
  // Add author filter if provided
  if (author) {
    query += ` && $author in authors[]->slug.current`;
    params.author = author;
  }
  
  // Add sorting and limiting
  query += ` | order(publishedAt desc)`;
  if (limit) {
    query += `[0...$limit]`;
    params.limit = limit - 1;
  }
  
  // Add field selection
  query += ` {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    "categories": categories[]->{ _id, title, "slug": slug.current },
    "authors": authors[]->{ _id, name, "slug": slug.current, image }
  }`;
  
  return client.fetch(
    query,
    params,
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      content, // Changed from 'body' to 'content' to match the Sanity schema
      "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180), // Also update here
      "categories": categories[]->{ _id, title, "slug": slug.current },
      "authors": authors[]->{ 
        _id, 
        name, 
        "slug": slug.current, 
        image, 
        bio, 
        "organization": organization->{
          _id, 
          name, 
          "slug": slug.current
        }, 
        socialLinks 
      }
    }`,
    { slug },
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getCategories() {
  return client.fetch(
    `*[_type == "category"] {
      _id,
      title,
      "slug": slug.current,
      description
    }`,
    {},
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getAuthors() {
  return client.fetch(
    `*[_type == "author"] {
      _id,
      name,
      "slug": slug.current,
      image,
      bio,
      "organization": organization->{
        _id,
        name,
        "slug": slug.current
      },
      socialLinks
    }`,
    {},
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getAuthor(slug: string) {
  return client.fetch(
    `*[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      image,
      bio,
      "organization": organization->{
        _id,
        name,
        "slug": slug.current
      },
      socialLinks,
      "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage
      }
    }`,
    { slug },
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getFeaturedPosts(limit = 3) {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "authors": authors[]->{ _id, name, "slug": slug.current, image }
    }`,
    { limit: limit - 1 },
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getPostsByCategory(categorySlug: string, limit?: number) {
  const limitClause = limit ? `[0...$limit]` : '';
  const params: Record<string, any> = { categorySlug };
  
  if (limit) params.limit = limit - 1;
  
  return client.fetch(
    `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc)${limitClause} {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "authors": authors[]->{ _id, name, "slug": slug.current, image }
    }`,
    params,
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getRelatedPosts(slug: string, limit = 3) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage,
        "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180), // Update here too
        "authors": authors[]->{ _id, name, "slug": slug.current, image }
      }
    }.related`,
    { slug, limit: limit - 1 },
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function triggerRevalidation(slug?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  try {
    await fetch(`${baseUrl}/api/revalidate-blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.REVALIDATION_TOKEN,
        slug,
      }),
    })
    return true
  } catch (error) {
    console.error('Revalidation error:', error)
    return false
  }
}

export async function getOrganization(slug: string) {
  return client.fetch(
    `*[_type == "organization" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      logo,
      description,
      website,
      "authors": *[_type == "author" && references(^._id)] {
        _id,
        name,
        "slug": slug.current,
        image
      },
      "posts": *[_type == "post" && references(*[_type=="author" && organization._ref == ^._id]._id)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        mainImage,
        "authors": authors[]->{ _id, name, "slug": slug.current, image }
      }
    }`,
    { slug },
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}

export async function getOrganizations() {
  return client.fetch(
    `*[_type == "organization"] {
      _id,
      name,
      "slug": slug.current,
      logo,
      website
    }`,
    {},
    {
      next: { revalidate: REVALIDATE_INTERVAL }
    }
  )
}