
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

// Include SEO functions
require_once get_template_directory() . '/inc/seo-functions.php';

// Include accessibility functions
require_once get_template_directory() . '/inc/accessibility-functions.php';

// Include schema markup functions
require_once get_template_directory() . '/inc/schema-functions.php';

// Include security functions
require_once get_template_directory() . '/inc/security-functions.php';

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
