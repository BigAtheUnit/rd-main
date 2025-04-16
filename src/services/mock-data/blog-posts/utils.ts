
/**
 * Utility functions for blog post formatting
 */

// Function to format blog HTML content with proper styling for readability
export const formatContent = (content: string): string => {
  // Improve image handling with container divs and potential captions
  const enhancedContent = content
    // Wrap images in containers for better styling
    .replace(/<img(.*?)>/g, (match, attributes) => {
      // Extract alt text for potential use as caption
      const altMatch = attributes.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : '';
      
      // Return the image wrapped in a container
      if (alt && !alt.startsWith('decorative')) {
        return `<figure class="image-container"><img${attributes}><figcaption>${alt}</figcaption></figure>`;
      }
      return `<div class="image-container"><img${attributes}></div>`;
    })
    // Ensure first paragraph has lead styling
    .replace(/<p>(.*?)<\/p>/, '<p class="lead">$1</p>');
    
  return enhancedContent;
};

// Helper function to create responsive images
export const createResponsiveImageHtml = (
  src: string, 
  alt: string, 
  caption?: string
): string => {
  const imgHtml = `<img src="${src}" alt="${alt}" loading="lazy" />`;
  
  if (caption) {
    return `<figure class="image-container">${imgHtml}<figcaption>${caption}</figcaption></figure>`;
  }
  
  return `<div class="image-container">${imgHtml}</div>`;
};
