export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  content: any[]; // Changed from body to content to match Sanity schema
  mainImage?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  categories: Category[];
  authors: Author[];
  estimatedReadingTime?: number;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  image?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  bio?: any[];
  organization?: Organization;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

export interface Organization {
  _id: string;
  name: string;
  slug: string;
  logo?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  description?: any[];
  website?: string;
}
