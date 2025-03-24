import { 
  getPosts, 
  getPost, 
  getCategories, 
  getAuthors, 
  getFeaturedPosts,
  getRelatedPosts,
  getPostsByCategory,
  getAuthor,
  getOrganization
} from '@/lib/sanity.client';
import { Post, Category, Author, Organization } from '@/types';

/**
 * Blog service layer - abstracts all data operations related to the blog
 */
export class BlogService {
  /**
   * Fetch data for the blog homepage
   */
  static async getBlogHomeData(postLimit: number = 12, featuredLimit: number = 4) {
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
  }

  /**
   * Fetch data for an individual blog post page
   */
  static async getBlogPostData(slug: string) {
    const [post, relatedPosts, categories] = await Promise.all([
      getPost(slug),
      getRelatedPosts(slug, 3),
      getCategories()
    ]);
    
    if (!post) {
      return null;
    }

    // Ensure post.authors exists to prevent errors
    post.authors = post.authors || [];
    
    return {
      post,
      relatedPosts,
      categories
    };
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
}
