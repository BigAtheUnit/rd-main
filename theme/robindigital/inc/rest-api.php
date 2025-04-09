
<?php
/**
 * REST API customizations for headless CMS setup
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add custom endpoints to WordPress REST API
 */
function robindigital_register_rest_routes() {
    // Register custom endpoint for theme settings
    register_rest_route('robindigital/v1', '/settings', array(
        'methods' => 'GET',
        'callback' => 'robindigital_get_theme_settings',
        'permission_callback' => '__return_true',
    ));
    
    // Register endpoint for services
    register_rest_route('robindigital/v1', '/services', array(
        'methods' => 'GET',
        'callback' => 'robindigital_get_services',
        'permission_callback' => '__return_true',
    ));
    
    // Register endpoint for testimonials
    register_rest_route('robindigital/v1', '/testimonials', array(
        'methods' => 'GET',
        'callback' => 'robindigital_get_testimonials',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'robindigital_register_rest_routes');

/**
 * Callback for theme settings endpoint
 */
function robindigital_get_theme_settings() {
    $settings = array(
        'site_title' => get_bloginfo('name'),
        'site_description' => get_bloginfo('description'),
        'logo_url' => wp_get_attachment_url(get_theme_mod('custom_logo')),
        'hero' => array(
            'title' => get_theme_mod('hero_title', 'Digital Solutions That Transform'),
            'subtitle' => get_theme_mod('hero_subtitle', 'Empowering organizations with innovative digital solutions that make a difference.'),
            'cta_primary' => get_theme_mod('hero_cta_primary', 'Start Your Project'),
            'cta_secondary' => get_theme_mod('hero_cta_secondary', 'Explore Solutions'),
        ),
        'contact' => array(
            'email' => get_theme_mod('contact_email', 'hello@robindigital.com'),
            'address_line1' => get_theme_mod('contact_address_line1', '123 Digital Hub, Lace Market'),
            'address_line2' => get_theme_mod('contact_address_line2', 'Nottingham City Centre, UK'),
        ),
        'social' => array(
            'facebook' => get_theme_mod('facebook_url', ''),
            'twitter' => get_theme_mod('twitter_url', ''),
            'linkedin' => get_theme_mod('linkedin_url', ''),
            'instagram' => get_theme_mod('instagram_url', ''),
        ),
        'footer_tagline' => get_theme_mod('footer_tagline', 'Empowering organizations with innovative digital solutions that make a difference.'),
    );
    
    return rest_ensure_response($settings);
}

/**
 * Callback for services endpoint
 */
function robindigital_get_services() {
    $args = array(
        'post_type' => 'services',
        'posts_per_page' => -1,
        'post_status' => 'publish',
    );
    
    $services_query = new WP_Query($args);
    $services = array();
    
    if ($services_query->have_posts()) {
        while ($services_query->have_posts()) {
            $services_query->the_post();
            $services[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'content' => get_the_content(),
                'excerpt' => get_the_excerpt(),
                'permalink' => get_permalink(),
                'icon' => get_field('icon'),
                'featured_image' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
            );
        }
        wp_reset_postdata();
    }
    
    return rest_ensure_response($services);
}

/**
 * Callback for testimonials endpoint
 */
function robindigital_get_testimonials() {
    $args = array(
        'post_type' => 'testimonials',
        'posts_per_page' => -1,
        'post_status' => 'publish',
    );
    
    $testimonials_query = new WP_Query($args);
    $testimonials = array();
    
    if ($testimonials_query->have_posts()) {
        while ($testimonials_query->have_posts()) {
            $testimonials_query->the_post();
            $testimonials[] = array(
                'id' => get_the_ID(),
                'author' => get_the_title(),
                'content' => get_the_content(),
                'role' => get_field('role'),
                'organization' => get_field('organization'),
                'rating' => get_field('rating'),
                'avatar' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'),
            );
        }
        wp_reset_postdata();
    }
    
    return rest_ensure_response($testimonials);
}

/**
 * Enable CORS for REST API
 */
function robindigital_add_cors_headers() {
    // Get the allowed origin from WordPress option (default to * if not set)
    $allowed_origin = get_option('robindigital_cors_origin', '*');
    
    header("Access-Control-Allow-Origin: {$allowed_origin}");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
    
    if ('OPTIONS' == $_SERVER['REQUEST_METHOD']) {
        status_header(200);
        exit();
    }
}
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        robindigital_add_cors_headers();
        return $value;
    });
}, 15);

/**
 * Add CORS settings field to theme options
 */
function robindigital_add_cors_settings($wp_customize) {
    $wp_customize->add_section('robindigital_headless', array(
        'title'    => __('Headless CMS Settings', 'robindigital'),
        'priority' => 120,
    ));
    
    $wp_customize->add_setting('robindigital_cors_origin', array(
        'default'           => '*',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('robindigital_cors_origin', array(
        'label'       => __('CORS Allowed Origin', 'robindigital'),
        'description' => __('Domain that can access the REST API. Use * for any domain (not recommended for production) or https://yourdomain.com for specific access.', 'robindigital'),
        'section'     => 'robindigital_headless',
        'type'        => 'text',
    ));
}
add_action('customize_register', 'robindigital_add_cors_settings');
