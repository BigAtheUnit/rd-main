
<?php
/**
 * Robin Digital functions and definitions
 */

// Theme setup
function robindigital_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title.
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    
    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
        array(
            'primary' => esc_html__('Primary Menu', 'robindigital'),
            'footer' => esc_html__('Footer Menu', 'robindigital'),
        )
    );
    
    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');
}
add_action('after_setup_theme', 'robindigital_setup');

// Enqueue scripts and styles.
function robindigital_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('robindigital-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Tailwind CSS (you'd need to compile this separately)
    wp_enqueue_style('robindigital-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0.0');
    
    // Enqueue main JavaScript file
    wp_enqueue_script('robindigital-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('robindigital-script', 'robindigital_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('robindigital-nonce')
    ));
}
add_action('wp_enqueue_scripts', 'robindigital_scripts');

// Register widget area
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
}
add_action('widgets_init', 'robindigital_widgets_init');

// Custom Post Types
function robindigital_custom_post_types() {
    // Services post type
    register_post_type('services',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'services'),
            'menu_icon' => 'dashicons-admin-generic',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
        )
    );
    
    // Testimonials post type
    register_post_type('testimonials',
        array(
            'labels' => array(
                'name' => __('Testimonials'),
                'singular_name' => __('Testimonial')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'testimonials'),
            'menu_icon' => 'dashicons-format-quote',
            'supports' => array('title', 'editor', 'thumbnail')
        )
    );
    
    // Products post type
    register_post_type('products',
        array(
            'labels' => array(
                'name' => __('Products'),
                'singular_name' => __('Product')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'products'),
            'menu_icon' => 'dashicons-cart',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'price')
        )
    );
}
add_action('init', 'robindigital_custom_post_types');

// Contact form submission handling
function robindigital_process_contact_form() {
    if (!isset($_POST['robindigital_contact_nonce']) || !wp_verify_nonce($_POST['robindigital_contact_nonce'], 'robindigital_contact_form')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $organization = sanitize_text_field($_POST['organization']);
    $message = sanitize_textarea_field($_POST['message']);
    $newsletter = isset($_POST['newsletter']) ? true : false;
    
    // Process form (email sending, database storage, etc.)
    $to = get_option('admin_email');
    $subject = 'New contact form submission from ' . $name;
    $body = "Name: $name\nEmail: $email\nOrganization: $organization\nMessage: $message\nNewsletter: " . ($newsletter ? 'Yes' : 'No');
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    wp_mail($to, $subject, $body, $headers);
    
    // Redirect back to contact page
    wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    exit;
}
add_action('admin_post_robindigital_contact_form', 'robindigital_process_contact_form');
add_action('admin_post_nopriv_robindigital_contact_form', 'robindigital_process_contact_form');

// Include custom template tags
require get_template_directory() . '/inc/template-tags.php';

// Add ACF field groups if ACF plugin is active
if (class_exists('ACF')) {
    require get_template_directory() . '/inc/acf-fields.php';
}
