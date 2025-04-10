<?php
/**
 * Robin Digital functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package RobinDigital
 */

// Include custom template tags
require_once get_template_directory() . '/inc/template-tags.php';

// Include theme options
require_once get_template_directory() . '/inc/theme-options.php';

// Include ACF fields (if ACF is active)
if (class_exists('ACF')) {
    require_once get_template_directory() . '/inc/acf-fields.php';
}

// Include REST API customizations for headless CMS setup
require_once get_template_directory() . '/inc/rest-api.php';

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function robindigital_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');

    // Register menus
    register_nav_menus(
        array(
            'primary' => esc_html__('Primary Menu', 'robindigital'),
            'footer' => esc_html__('Footer Menu', 'robindigital'),
        )
    );

    // Switch default core markup to output valid HTML5
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for custom logo
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );

    // Add support for Schema.org markup
    add_theme_support('html5', array('script', 'style', 'microdata'));
}
add_action('after_setup_theme', 'robindigital_setup');

/**
 * Enqueue scripts and styles.
 */
function robindigital_scripts() {
    // Enqueue Tailwind CSS
    wp_enqueue_style('robindigital-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('robindigital-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('robindigital-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap', array(), null);
    
    // Enqueue main JS
    wp_enqueue_script('robindigital-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'robindigital_scripts');

/**
 * Register custom post types
 */
function robindigital_register_post_types() {
    // Services
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'robindigital'),
            'singular_name' => __('Service', 'robindigital'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-hammer',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true, // Enable Gutenberg editor and REST API
    ));
    
    // Testimonials
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Testimonials', 'robindigital'),
            'singular_name' => __('Testimonial', 'robindigital'),
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true, // Enable Gutenberg editor and REST API
    ));
    
    // Products
    register_post_type('products', array(
        'labels' => array(
            'name' => __('Products', 'robindigital'),
            'singular_name' => __('Product', 'robindigital'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cart',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true, // Enable Gutenberg editor and REST API
    ));
}
add_action('init', 'robindigital_register_post_types');

/**
 * Register widget area.
 */
function robindigital_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__('Sidebar', 'robindigital'),
            'id'            => 'sidebar-1',
            'description'   => esc_html__('Add widgets here.', 'robindigital'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
    
    register_sidebar(
        array(
            'name'          => esc_html__('Footer Widget Area', 'robindigital'),
            'id'            => 'footer-1',
            'description'   => esc_html__('Add footer widgets here.', 'robindigital'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        )
    );
}
add_action('widgets_init', 'robindigital_widgets_init');

/**
 * Add REST API field for post content in a clean format
 */
function robindigital_register_rest_fields() {
    // Register REST field for content with proper formatting
    register_rest_field(
        array('post', 'page', 'services', 'testimonials', 'products'),
        'content_formatted',
        array(
            'get_callback' => 'robindigital_get_formatted_content',
            'schema' => null,
        )
    );
}
add_action('rest_api_init', 'robindigital_register_rest_fields');

/**
 * Get formatted content for REST API
 */
function robindigital_get_formatted_content($object) {
    $content = apply_filters('the_content', $object['content']['raw']);
    return $content;
}

/**
 * Add security headers for REST API responses
 */
function robindigital_add_api_security_headers() {
    // Add security headers for REST API responses
    add_filter('rest_pre_serve_request', function ($served, $result, $request, $server) {
        // Security headers for REST API
        header('X-Content-Type-Options: nosniff');
        header('X-XSS-Protection: 1; mode=block');
        header('X-Frame-Options: SAMEORIGIN');
        header('Referrer-Policy: strict-origin-when-cross-origin');
        
        return $served;
    }, 10, 4);
}
add_action('rest_api_init', 'robindigital_add_api_security_headers');

/**
 * Add HMAC signature verification for API requests
 */
function robindigital_verify_api_signature() {
    // Only for specific API endpoints that need verification
    if (strpos($_SERVER['REQUEST_URI'], '/wp-json/robindigital/v1/') !== false) {
        // This is a basic implementation. In production, use proper key management.
        $secret_key = get_option('robindigital_api_secret_key', 'default-secret-key-change-me');
        
        // Verify the request timestamp to prevent replay attacks
        $timestamp = isset($_SERVER['HTTP_X_TIMESTAMP']) ? $_SERVER['HTTP_X_TIMESTAMP'] : '';
        $signature = isset($_SERVER['HTTP_X_SIGNATURE']) ? $_SERVER['HTTP_X_SIGNATURE'] : '';
        
        // Skip verification if headers are not present (for development/fallback)
        if (empty($timestamp) || empty($signature)) {
            return;
        }
        
        // Check if the request is too old (5 minutes)
        if (abs(time() - intval($timestamp)) > 300) {
            status_header(401);
            echo json_encode(['error' => 'Request expired']);
            exit;
        }
        
        // Create expected signature
        $data = file_get_contents('php://input');
        $expected_signature = hash_hmac('sha256', $data . $timestamp, $secret_key);
        
        // Verify signature
        if (!hash_equals($expected_signature, $signature)) {
            status_header(401);
            echo json_encode(['error' => 'Invalid signature']);
            exit;
        }
    }
}
// Uncomment this line to enable signature verification when ready
// add_action('rest_api_init', 'robindigital_verify_api_signature', 5);

/**
 * Add security option to theme options
 */
function robindigital_add_security_options($wp_customize) {
    $wp_customize->add_section('robindigital_security', array(
        'title'    => __('Security Settings', 'robindigital'),
        'priority' => 130,
    ));
    
    $wp_customize->add_setting('robindigital_api_secret_key', array(
        'default'           => wp_generate_password(32, false),
        'type'              => 'option',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('robindigital_api_secret_key', array(
        'label'       => __('API Secret Key', 'robindigital'),
        'description' => __('Secret key used for API signature verification. Keep this secure.', 'robindigital'),
        'section'     => 'robindigital_security',
        'type'        => 'text',
    ));
}
add_action('customize_register', 'robindigital_add_security_options');

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
 * Add Accessibility improvements
 */
function robindigital_accessibility_enhancements() {
    // Add screen reader text class
    add_action('wp_head', function() {
        echo '<style>
        .screen-reader-text {
            border: 0;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: inset(50%);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            word-wrap: normal !important;
        }
        .screen-reader-text:focus {
            background-color: #f1f1f1;
            border-radius: 3px;
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
            clip: auto !important;
            clip-path: none;
            color: #21759b;
            display: block;
            font-size: 14px;
            font-weight: 700;
            height: auto;
            left: 5px;
            line-height: normal;
            padding: 15px 23px 14px;
            text-decoration: none;
            top: 5px;
            width: auto;
            z-index: 100000;
        }
        </style>';
    });
}
add_action('after_setup_theme', 'robindigital_accessibility_enhancements');

/**
 * Add meta tags for SEO and social media
 */
function robindigital_add_meta_tags() {
    // Get current post/page data
    global $post;
    
    // Default values
    $title = get_bloginfo('name');
    $description = get_bloginfo('description');
    $image = get_theme_mod('robindigital_default_og_image', '');
    
    // If we're on a singular post/page, get specific meta data
    if (is_singular()) {
        $title = get_the_title() . ' - ' . get_bloginfo('name');
        $description = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 30, '...');
        
        // Get featured image
        if (has_post_thumbnail()) {
            $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large')[0];
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
    echo '<meta property="og:url" content="' . esc_url(get_permalink()) . '" />' . "\n";
    
    if ($image) {
        echo '<meta property="og:image" content="' . esc_url($image) . '" />' . "\n";
    }
    
    // Twitter Card tags
    echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
    echo '<meta name="twitter:title" content="' . esc_attr($title) . '" />' . "\n";
    echo '<meta name="twitter:description" content="' . esc_attr($description) . '" />' . "\n";
    
    if ($image) {
        echo '<meta name="twitter:image" content="' . esc_url($image) . '" />' . "\n";
    }
    
    // Canonical URL
    echo '<link rel="canonical" href="' . esc_url(get_permalink()) . '" />' . "\n";
}
add_action('wp_head', 'robindigital_add_meta_tags', 1);

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
