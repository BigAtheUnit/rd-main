
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
    
    $domain = 'https://www.robindigital.io';
    $default_image = $domain . '/lovable-uploads/2ddae788-6e1b-4c0a-8e90-e401d9f120e9.png';
    
    // Organization schema
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => get_bloginfo('name'),
        'url' => $domain,
        'logo' => get_site_icon_url(),
        'image' => $default_image,
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
        'url' => $domain,
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'potentialAction' => array(
            '@type' => 'SearchAction',
            'target' => $domain . '/?s={search_term_string}',
            'query-input' => 'required name=search_term_string'
        ),
        'image' => $default_image
    );
    
    // Professional Service schema for digital services
    $service_schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'ProfessionalService',
        'name' => get_bloginfo('name'),
        'url' => $domain,
        'description' => 'Digital agency specializing in web development, CMS solutions, AI implementation, and digital transformation',
        'image' => $default_image,
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
                    'name' => 'Custom Web Development',
                    'description' => 'Bespoke websites built around your unique goals and branding. We handle everything from frontend interfaces to backend integrations—ensuring speed, security, and scalability.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'AI Consulting & Implementation',
                    'description' => 'Stay ahead of the curve with data-driven solutions, predictive analytics, and automation. From AI-powered chatbots to advanced machine learning models, we design and implement AI to meet your specific needs.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'CMS & E-commerce Solutions',
                    'description' => 'Expert development for WordPress, Drupal, Shopify, and beyond. We build intuitive, SEO-ready platforms that make content management straightforward and keep your audience engaged.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'UX & UI Design',
                    'description' => 'Delight your users with beautiful, accessible design that's as practical as it is eye-catching. We create frictionless journeys that boost user satisfaction, conversions, and brand loyalty.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'Ongoing Support & Maintenance',
                    'description' => 'Rely on our dedicated team to keep your site secure, optimised, and ready for growth. With regular performance checks and updates, you'll always stay ahead of the digital curve.'
                ),
                array(
                    '@type' => 'Offer',
                    'name' => 'Digital Strategy & Consultancy',
                    'description' => 'Whether you're launching a new venture or reinventing an existing platform, our strategic insights help you plan for long-term success. We identify the best tech solutions, outline realistic roadmaps, and ensure measurable ROI.'
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
