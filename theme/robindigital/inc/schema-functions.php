
<?php
/**
 * Schema.org structured data functions for the Robin Digital theme
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add Schema.org structured data to improve SEO
 */
function robindigital_add_schema_markup() {
    // Only add schema markup in the front-end, not in admin
    if (is_admin()) {
        return;
    }
    
    // Organization schema
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => get_bloginfo('name'),
        'url' => home_url(),
        'logo' => get_site_icon_url(),
        'contactPoint' => array(
            '@type' => 'ContactPoint',
            'telephone' => get_theme_mod('robindigital_phone', '+44 123 456 7890'),
            'contactType' => 'customer service',
            'email' => get_theme_mod('robindigital_email', 'info@example.com'),
            'availableLanguage' => 'English'
        ),
        'sameAs' => array(
            get_theme_mod('robindigital_facebook', ''),
            get_theme_mod('robindigital_twitter', ''),
            get_theme_mod('robindigital_linkedin', ''),
            get_theme_mod('robindigital_instagram', '')
        )
    );
    
    // Add WebSite schema
    $website_schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        'url' => home_url(),
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'potentialAction' => array(
            '@type' => 'SearchAction',
            'target' => home_url('/?s={search_term_string}'),
            'query-input' => 'required name=search_term_string'
        )
    );
    
    // Output schema markup
    echo '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>';
    echo '<script type="application/ld+json">' . wp_json_encode($website_schema) . '</script>';
}
add_action('wp_footer', 'robindigital_add_schema_markup');
