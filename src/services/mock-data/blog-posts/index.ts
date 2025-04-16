
import { BlogPost } from '../../models/content-types';
import { charitySectorPosts } from './charity-sector';
import { publicSectorPosts } from './public-sector';
import { educationPosts } from './education';
import { technologyPosts } from './technology';
import { webDesignPosts } from './web-design';
import { businessPosts } from './business';
import { formatContent } from './utils';

/**
 * Combined blog posts from all categories
 */
export const mockBlogPosts: BlogPost[] = [
  ...charitySectorPosts,
  ...publicSectorPosts,
  ...educationPosts,
  ...technologyPosts,
  ...webDesignPosts,
  ...businessPosts
];

// Export individual category collections for when they're needed separately
export {
  charitySectorPosts,
  publicSectorPosts,
  educationPosts,
  technologyPosts,
  webDesignPosts,
  businessPosts,
  formatContent
};
