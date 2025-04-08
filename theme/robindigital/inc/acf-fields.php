
<?php
/**
 * ACF Field Groups
 */

if (function_exists('acf_add_local_field_group')) {
    // Services Fields
    acf_add_local_field_group(array(
        'key' => 'group_services',
        'title' => 'Service Details',
        'fields' => array(
            array(
                'key' => 'field_service_icon',
                'label' => 'Icon',
                'name' => 'icon',
                'type' => 'select',
                'instructions' => 'Select an icon for this service',
                'required' => 1,
                'choices' => array(
                    'globe' => 'Globe',
                    'code' => 'Code',
                    'wrench' => 'Wrench',
                    'layout' => 'Layout',
                    'bot' => 'Bot/AI',
                    'heart' => 'Heart',
                    'lightbulb' => 'Lightbulb',
                    'line-chart' => 'Chart',
                ),
                'default_value' => 'globe',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'services',
                ),
            ),
        ),
    ));
    
    // Testimonial Fields
    acf_add_local_field_group(array(
        'key' => 'group_testimonials',
        'title' => 'Testimonial Details',
        'fields' => array(
            array(
                'key' => 'field_testimonial_role',
                'label' => 'Role',
                'name' => 'role',
                'type' => 'text',
                'instructions' => 'The role of the person giving the testimonial',
                'required' => 1,
            ),
            array(
                'key' => 'field_testimonial_organization',
                'label' => 'Organization',
                'name' => 'organization',
                'type' => 'text',
                'instructions' => 'The organization the person belongs to',
                'required' => 1,
            ),
            array(
                'key' => 'field_testimonial_rating',
                'label' => 'Rating',
                'name' => 'rating',
                'type' => 'number',
                'instructions' => 'Rating from 1-5',
                'required' => 1,
                'min' => 1,
                'max' => 5,
                'default_value' => 5,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'testimonials',
                ),
            ),
        ),
    ));
    
    // Product Fields
    acf_add_local_field_group(array(
        'key' => 'group_products',
        'title' => 'Product Details',
        'fields' => array(
            array(
                'key' => 'field_product_price',
                'label' => 'Price',
                'name' => 'price',
                'type' => 'text',
                'instructions' => 'Product price (e.g. £19.99/mo)',
                'required' => 1,
            ),
            array(
                'key' => 'field_product_icon',
                'label' => 'Icon',
                'name' => 'icon',
                'type' => 'select',
                'instructions' => 'Select an icon for this product',
                'required' => 1,
                'choices' => array(
                    'shield' => 'Shield',
                    'file-edit' => 'File Edit',
                    'store' => 'Store',
                    'clock' => 'Clock',
                    'tag' => 'Tag',
                ),
                'default_value' => 'tag',
            ),
            array(
                'key' => 'field_product_is_new',
                'label' => 'New Product',
                'name' => 'is_new',
                'type' => 'true_false',
                'instructions' => 'Mark as a new product',
                'ui' => 1,
            ),
            array(
                'key' => 'field_product_is_featured',
                'label' => 'Featured Product',
                'name' => 'is_featured',
                'type' => 'true_false',
                'instructions' => 'Mark as a featured product',
                'ui' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'products',
                ),
            ),
        ),
    ));
    
    // Theme Options
    acf_add_local_field_group(array(
        'key' => 'group_theme_options',
        'title' => 'Theme Options',
        'fields' => array(
            array(
                'key' => 'field_contact_email',
                'label' => 'Contact Email',
                'name' => 'contact_email',
                'type' => 'email',
                'instructions' => 'The primary contact email address',
                'required' => 1,
                'default_value' => 'hello@robindigital.com',
            ),
            array(
                'key' => 'field_contact_phone',
                'label' => 'Contact Phone',
                'name' => 'contact_phone',
                'type' => 'text',
                'instructions' => 'The primary contact phone number',
                'required' => 1,
                'default_value' => '+44 (0) 123 456 7890',
            ),
            array(
                'key' => 'field_contact_address',
                'label' => 'Contact Address',
                'name' => 'contact_address',
                'type' => 'textarea',
                'instructions' => 'The physical address',
                'required' => 1,
                'default_value' => 'The Lace Market, Nottingham City Centre, UK',
                'rows' => 3,
            ),
            array(
                'key' => 'field_social_facebook',
                'label' => 'Facebook URL',
                'name' => 'facebook_url',
                'type' => 'url',
                'instructions' => 'Link to Facebook page',
            ),
            array(
                'key' => 'field_social_twitter',
                'label' => 'Twitter URL',
                'name' => 'twitter_url',
                'type' => 'url',
                'instructions' => 'Link to Twitter profile',
            ),
            array(
                'key' => 'field_social_linkedin',
                'label' => 'LinkedIn URL',
                'name' => 'linkedin_url',
                'type' => 'url',
                'instructions' => 'Link to LinkedIn profile',
            ),
            array(
                'key' => 'field_social_instagram',
                'label' => 'Instagram URL',
                'name' => 'instagram_url',
                'type' => 'url',
                'instructions' => 'Link to Instagram profile',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'theme-general-settings',
                ),
            ),
        ),
    ));
}

// Add options page
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme General Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}
