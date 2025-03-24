import { 
  getPosts, 
  getPost, 
  getCategories, 
  getAuthors, 
  getFeaturedPosts,
  getRelatedPosts,
  getPostsByCategory,
  getAuthor,
  getOrganization,
  triggerRevalidation 
} from '@/lib/sanity.client';
import { Post, Category, Author, Organization } from '@/types';

/**
 * Blog service layer - abstracts all data operations related to the blog
 */
export class BlogService {
  // Cache times
  private static readonly CACHE_TTL = 60 * 1000; // 1 minute cache
  private static cache: Record<string, { data: any, timestamp: number }> = {};

  /**
   * Get cached data or fetch new data
   */
  private static async getCachedOrFetch<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    // Skip cache in development for easier testing
    if (process.env.NODE_ENV === 'development') {
      return fetchFn();
    }
    
    const now = Date.now();
    const cached = this.cache[key];
    
    if (cached && now - cached.timestamp < this.CACHE_TTL) {
      return cached.data as T;
    }
    
    const data = await fetchFn();
    this.cache[key] = { data, timestamp: now };
    return data;
  }

  /**
   * Clear specific items from cache
   */
  static clearCache(keys?: string[]) {
    if (!keys || keys.length === 0) {
      this.cache = {};
      return;
    }
    
    keys.forEach(key => {
      delete this.cache[key];
    });
  }
  
  /**
   * Fetch data for the blog homepage
   */
  static async getBlogHomeData(postLimit: number = 12, featuredLimit: number = 4) {
    return this.getCachedOrFetch('homepage', async () => {
      const [posts, categories, featuredPosts] = await Promise.all([
        getPosts(postLimit),
        getCategories(),
        getFeaturedPosts(featuredLimit)
      ]);
      
      return {
        posts,
        categories,
        featuredPosts
      };
    });
  }

  /**
   * Fetch data for an individual blog post page
   */
  static async getBlogPostData(slug: string) {
    return this.getCachedOrFetch(`post-${slug}`, async () => {
      const [post, relatedPosts, categories] = await Promise.all([
        getPost(slug),
        getRelatedPosts(slug, 3),
        getCategories()
      ]);
      
      if (!post) {
        return null;
      }

      // Ensure post has all needed properties to prevent errors
      post.authors = post.authors || [];
      
      // Debug the post content to ensure content is present
      if (process.env.NODE_ENV !== 'production' && !post.content) {
        console.warn(`Blog post ${slug} is missing content`);
      }
      
      return {
        post,
        relatedPosts,
        categories
      };
    });
  }

  /**
   * Fetch data for a category page
   */
  static async getCategoryData(slug: string) {
    const categories = await getCategories();
    const currentCategory = categories.find((c: Category) => c.slug === slug);
    
    if (!currentCategory) {
      return null;
    }
    
    const posts = await getPostsByCategory(slug);
    
    return {
      categories,
      currentCategory,
      posts
    };
  }

  /**
   * Fetch data for an author page
   */
  static async getAuthorData(slug: string) {
    const [author, categories] = await Promise.all([
      getAuthor(slug),
      getCategories()
    ]);
    
    if (!author) {
      return null;
    }

    return {
      author,
      categories
    };
  }

  /**
   * Fetch data for an organization page
   */
  static async getOrganizationData(slug: string) {
    const [organization, categories] = await Promise.all([
      getOrganization(slug),
      getCategories()
    ]);
    
    if (!organization) {
      return null;
    }
    
    return {
      organization,
      categories
    };
  }

  /**
   * Manually trigger an update for blog content
   */
  static async triggerContentUpdate(type?: string, id?: string, path?: string) {
    // Clear any cache entries related to this content
    if (type === 'post') {
      this.clearCache(['homepage', `post-${id}`]);
    } else if (type === 'category') {
      this.clearCache(['homepage', 'categories']);
    } else if (type === 'author') {
      this.clearCache([`author-${id}`]);
    } else {
      // Clear everything if no specific type
      this.clearCache();
    }
    
    // Trigger revalidation in Next.js
    return triggerRevalidation(type, id, path);
  }
}
