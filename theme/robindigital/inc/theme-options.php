
<?php
/**
 * Robin Digital Theme Options
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add theme options page to admin menu
 */
function robindigital_add_theme_options_page() {
    add_theme_page(
        'Robin Digital Theme Options',
        'Theme Options',
        'manage_options',
        'robindigital-options',
        'robindigital_theme_options_page'
    );
}
add_action('admin_menu', 'robindigital_add_theme_options_page');

/**
 * Render the theme options page
 */
function robindigital_theme_options_page() {
    ?>
    <div class="wrap">
        <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
        <div class="notice notice-info">
            <p><?php _e('Welcome to Robin Digital Theme Options. Use the WordPress Customizer to modify theme settings.', 'robindigital'); ?></p>
            <p><a href="<?php echo esc_url(admin_url('customize.php')); ?>" class="button button-primary"><?php _e('Open Customizer', 'robindigital'); ?></a></p>
        </div>
        
        <div class="card" style="max-width: 800px; margin-top: 20px; padding: 20px;">
            <h2><?php _e('Theme Setup Checklist', 'robindigital'); ?></h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><?php _e('Upload your logo in the Customizer → Site Identity section', 'robindigital'); ?></li>
                <li><?php _e('Create menus and assign them to "Primary Menu" and "Footer Menu" locations', 'robindigital'); ?></li>
                <li><?php _e('Add content to the Privacy Policy and Terms of Service pages', 'robindigital'); ?></li>
                <li><?php _e('Configure social media links in the Customizer', 'robindigital'); ?></li>
                <li><?php _e('Add Services using the Services custom post type', 'robindigital'); ?></li>
                <li><?php _e('Add Testimonials using the Testimonials custom post type', 'robindigital'); ?></li>
            </ul>
        </div>
    </div>
    <?php
}

/**
 * Register theme customizer settings
 */
function robindigital_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('robindigital_social_media', array(
        'title'    => __('Social Media Links', 'robindigital'),
        'priority' => 30,
    ));
    
    // Facebook
    $wp_customize->add_setting('facebook_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('facebook_url', array(
        'label'    => __('Facebook URL', 'robindigital'),
        'section'  => 'robindigital_social_media',
        'type'     => 'url',
    ));
    
    // Twitter
    $wp_customize->add_setting('twitter_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('twitter_url', array(
        'label'    => __('Twitter URL', 'robindigital'),
        'section'  => 'robindigital_social_media',
        'type'     => 'url',
    ));
    
    // LinkedIn
    $wp_customize->add_setting('linkedin_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('linkedin_url', array(
        'label'    => __('LinkedIn URL', 'robindigital'),
        'section'  => 'robindigital_social_media',
        'type'     => 'url',
    ));
    
    // Instagram
    $wp_customize->add_setting('instagram_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('instagram_url', array(
        'label'    => __('Instagram URL', 'robindigital'),
        'section'  => 'robindigital_social_media',
        'type'     => 'url',
    ));
    
    // Footer Tagline
    $wp_customize->add_setting('footer_tagline', array(
        'default'           => 'Empowering organizations with innovative digital solutions that make a difference.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('footer_tagline', array(
        'label'    => __('Footer Tagline', 'robindigital'),
        'section'  => 'title_tagline',
        'type'     => 'text',
    ));
    
    // Contact Information
    $wp_customize->add_section('robindigital_contact', array(
        'title'    => __('Contact Information', 'robindigital'),
        'priority' => 35,
    ));
    
    // Email
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'hello@robindigital.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Contact Email', 'robindigital'),
        'section'  => 'robindigital_contact',
        'type'     => 'email',
    ));
    
    // Address Line 1
    $wp_customize->add_setting('contact_address_line1', array(
        'default'           => '123 Digital Hub, Lace Market',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_address_line1', array(
        'label'    => __('Address Line 1', 'robindigital'),
        'section'  => 'robindigital_contact',
        'type'     => 'text',
    ));
    
    // Address Line 2
    $wp_customize->add_setting('contact_address_line2', array(
        'default'           => 'Nottingham City Centre, UK',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_address_line2', array(
        'label'    => __('Address Line 2', 'robindigital'),
        'section'  => 'robindigital_contact',
        'type'     => 'text',
    ));
    
    // Hero Section Customizations
    $wp_customize->add_section('robindigital_hero', array(
        'title'    => __('Hero Section', 'robindigital'),
        'priority' => 40,
    ));
    
    // Hero Title
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'Digital Solutions That <span class="text-robin-orange relative inline-block transform hover:scale-105 transition-transform duration-300">Transform<span class="absolute inset-0 bg-white/20 animate-shine -skew-x-12"></span></span>',
        'sanitize_callback' => 'wp_kses_post',
    ));
    $wp_customize->add_control('hero_title', array(
        'label'    => __('Hero Title (HTML allowed)', 'robindigital'),
        'section'  => 'robindigital_hero',
        'type'     => 'textarea',
    ));
    
    // Hero Subtitle
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Empowering charities, public sector, education, and businesses with innovative digital solutions that make a difference.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_subtitle', array(
        'label'    => __('Hero Subtitle', 'robindigital'),
        'section'  => 'robindigital_hero',
        'type'     => 'textarea',
    ));
    
    // Primary CTA
    $wp_customize->add_setting('hero_cta_primary', array(
        'default'           => 'Start Your Project',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_cta_primary', array(
        'label'    => __('Primary CTA Text', 'robindigital'),
        'section'  => 'robindigital_hero',
        'type'     => 'text',
    ));
    
    // Secondary CTA
    $wp_customize->add_setting('hero_cta_secondary', array(
        'default'           => 'Explore Solutions',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_cta_secondary', array(
        'label'    => __('Secondary CTA Text', 'robindigital'),
        'section'  => 'robindigital_hero',
        'type'     => 'text',
    ));
    
    // Testimonials Section
    $wp_customize->add_section('robindigital_testimonials', array(
        'title'    => __('Testimonials Section', 'robindigital'),
        'priority' => 45,
    ));
    
    // Testimonials Title
    $wp_customize->add_setting('testimonials_title', array(
        'default'           => 'Client Success Stories',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('testimonials_title', array(
        'label'    => __('Testimonials Title', 'robindigital'),
        'section'  => 'robindigital_testimonials',
        'type'     => 'text',
    ));
    
    // Testimonials Subtitle
    $wp_customize->add_setting('testimonials_subtitle', array(
        'default'           => 'Don\'t just take our word for it. Here\'s what our clients have to say about working with Robin Digital.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('testimonials_subtitle', array(
        'label'    => __('Testimonials Subtitle', 'robindigital'),
        'section'  => 'robindigital_testimonials',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'robindigital_customize_register');
