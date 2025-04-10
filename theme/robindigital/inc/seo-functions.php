
<?php
/**
 * SEO functions for the Robin Digital theme
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add meta tags for SEO and social media
 */
function robindigital_add_meta_tags() {
    // Get current post/page data
    global $post;
    
    // Default values
    $title = get_bloginfo('name');
    $description = get_bloginfo('description');
    $default_image = '/lovable-uploads/2ddae788-6e1b-4c0a-8e90-e401d9f120e9.png';
    $image = get_theme_mod('robindigital_default_og_image', $default_image);
    $domain = 'https://www.robindigital.io';
    
    // Ensure image has absolute URL
    if (strpos($image, 'http') !== 0) {
        $image = $domain . $image;
    }
    
    // If we're on a singular post/page, get specific meta data
    if (is_singular()) {
        $title = get_the_title() . ' - ' . get_bloginfo('name');
        $description = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 30, '...');
        
        // Get featured image
        if (has_post_thumbnail()) {
            $image_src = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
            if ($image_src) {
                $image = $image_src[0];
                
                // Ensure image has absolute URL
                if (strpos($image, 'http') !== 0) {
                    $image = $domain . $image;
                }
            }
        }
    } elseif (is_category() || is_tag() || is_tax()) {
        $term = get_queried_object();
        $title = $term->name . ' - ' . get_bloginfo('name');
        $description = $term->description ? $term->description : $description;
    }
    
    // Clean up description
    $description = wp_strip_all_tags($description);
    
    // Output meta tags
    echo '<meta name="description" content="' . esc_attr($description) . '" />' . "\n";
    
    // Open Graph tags
    echo '<meta property="og:title" content="' . esc_attr($title) . '" />' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($description) . '" />' . "\n";
    echo '<meta property="og:type" content="' . (is_single() ? 'article' : 'website') . '" />' . "\n";
    echo '<meta property="og:url" content="' . esc_url($domain . $_SERVER['REQUEST_URI']) . '" />' . "\n";
    echo '<meta property="og:site_name" content="Robin Digital" />' . "\n";
    
    if ($image) {
        echo '<meta property="og:image" content="' . esc_url($image) . '" />' . "\n";
        echo '<meta property="og:image:width" content="1200" />' . "\n";
        echo '<meta property="og:image:height" content="630" />' . "\n";
        // Add these tags to improve Facebook compatibility
        echo '<meta property="og:image:type" content="image/png" />' . "\n";
        echo '<meta property="og:image:alt" content="Robin Digital" />' . "\n";
    }
    
    // Twitter Card tags
    echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
    echo '<meta name="twitter:title" content="' . esc_attr($title) . '" />' . "\n";
    echo '<meta name="twitter:description" content="' . esc_attr($description) . '" />' . "\n";
    
    if ($image) {
        echo '<meta name="twitter:image" content="' . esc_url($image) . '" />' . "\n";
    }
    
    // Facebook specific tags
    echo '<meta property="fb:app_id" content="' . esc_attr(get_theme_mod('robindigital_facebook_app_id', '')) . '" />' . "\n";
    
    // Canonical URL
    echo '<link rel="canonical" href="' . esc_url($domain . $_SERVER['REQUEST_URI']) . '" />' . "\n";
}
add_action('wp_head', 'robindigital_add_meta_tags', 1);

/**
 * Add Sitemap generation using WordPress core sitemaps
 */
function robindigital_sitemap_setup() {
    // WordPress 5.5+ includes a sitemap feature
    add_filter('wp_sitemaps_enabled', '__return_true');
    
    // Customize sitemap settings as needed
    add_filter('wp_sitemaps_max_urls', function() {
        return 500; // Set maximum URLs per sitemap page
    });
}
add_action('init', 'robindigital_sitemap_setup');

/**
 * Add responsive image support
 */
function robindigital_responsive_image_support() {
    // Add featured image sizes for responsive images
    add_image_size('robindigital-small', 400, 300, true);
    add_image_size('robindigital-medium', 800, 600, true);
    add_image_size('robindigital-large', 1200, 900, true);
    
    // Enable responsive embeds
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'robindigital_responsive_image_support');

/**
 * Add structured data for Robin Digital
 */
function robindigital_structured_data() {
    $domain = 'https://www.robindigital.io';
    $logo = get_template_directory_uri() . '/assets/images/logo.png';
    $image = $domain . '/lovable-uploads/2ddae788-6e1b-4c0a-8e90-e401d9f120e9.png';
    
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => 'Robin Digital',
        'url' => $domain,
        'logo' => $logo,
        'image' => $image,
        'description' => get_bloginfo('description'),
        'address' => [
            '@type' => 'PostalAddress',
            'addressCountry' => 'UK'
        ],
        'sameAs' => [
            get_theme_mod('robindigital_facebook', ''),
            get_theme_mod('robindigital_twitter', ''),
            get_theme_mod('robindigital_linkedin', '')
        ]
    ];
    
    echo '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>' . "\n";
}
add_action('wp_head', 'robindigital_structured_data');
