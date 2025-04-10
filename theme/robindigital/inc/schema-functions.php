
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
        'url' => 'https://www.robindigital.io',
        'logo' => get_site_icon_url(),
        'contactPoint' => array(
            '@type' => 'ContactPoint',
            'telephone' => get_theme_mod('robindigital_phone', '+44 123 456 7890'),
            'contactType' => 'customer service',
            'email' => get_theme_mod('robindigital_email', 'info@robindigital.io'),
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
        'url' => 'https://www.robindigital.io',
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'potentialAction' => array(
            '@type' => 'SearchAction',
            'target' => 'https://www.robindigital.io/?s={search_term_string}',
            'query-input' => 'required name=search_term_string'
        )
    );
    
    // Professional Service schema for digital services
    $service_schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'ProfessionalService',
        'name' => get_bloginfo('name'),
        'url' => 'https://www.robindigital.io',
        'description' => 'Digital agency specializing in web development, CMS solutions, AI implementation, and digital transformation',
        'address' => array(
            '@type' => 'PostalAddress',
            'addressCountry' => 'UK'
        ),
        'hasOfferCatalog' => array(
            '@type' => 'OfferCatalog',
            'name' => 'Digital Services',
            'itemListElement' => array(
                array(
                    '@type' => 'Offer',
                    'name' => 'Web Development',
                    'description' => 'Custom web development with solutions tailored to your specific business needs and objectives.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'CMS Development',
                    'description' => 'Expert WordPress, Drupal, and other CMS development with tailored solutions for content management.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'AI Consulting & Implementation',
                    'description' => 'Leverage the power of AI to solve complex problems and enhance your digital capabilities.'
                )
            )
        )
    );
    
    // Output schema markup
    echo '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>';
    echo '<script type="application/ld+json">' . wp_json_encode($website_schema) . '</script>';
    echo '<script type="application/ld+json">' . wp_json_encode($service_schema) . '</script>';
}
add_action('wp_footer', 'robindigital_add_schema_markup');
