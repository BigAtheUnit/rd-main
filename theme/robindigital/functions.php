
<?php
/**
 * Robin Digital functions and definitions
 *
 * @package RobinDigital
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
}
add_action('after_setup_theme', 'robindigital_setup');

// Enqueue scripts and styles.
function robindigital_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('robindigital-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Tailwind CSS with higher priority
    wp_enqueue_style('robindigital-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0.0');
    
    // Enqueue main JavaScript file
    wp_enqueue_script('robindigital-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Add smooth scroll JavaScript
    wp_add_inline_script('robindigital-script', '
        // Smooth scrolling for all hash links
        jQuery(document).ready(function($) {
            $("a[href*=\\#]:not([href=\\#])").on("click", function() {
                if (location.pathname.replace(/^\\//, "") == this.pathname.replace(/^\\//, "") && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top - 100
                        }, 500);
                        return false;
                    }
                }
            });
        });
    ');
    
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

// Include theme options
require get_template_directory() . '/inc/theme-options.php';

// Add ACF field groups if ACF plugin is active
if (class_exists('ACF')) {
    require get_template_directory() . '/inc/acf-fields.php';
}

// Create template pages on theme activation
function robindigital_create_pages() {
    // Only run once
    if (get_option('robindigital_pages_created')) {
        return;
    }
    
    // Create Privacy Policy page if it doesn't exist
    $privacy_exists = get_page_by_path('privacy-policy');
    if (!$privacy_exists) {
        $privacy_content = '
<h1>Privacy Policy</h1>

<p>Last updated: ' . date('F j, Y') . '</p>

<p>Robin Digital ("we", "us", or "our") operates the website https://www.robindigital.io (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

<h2>Information Collection and Use</h2>

<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

<h3>Types of Data Collected</h3>

<h4>Personal Data</h4>

<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

<ul>
    <li>Email address</li>
    <li>First name and last name</li>
    <li>Phone number</li>
    <li>Organization name</li>
    <li>Cookies and Usage Data</li>
</ul>

<h4>Usage Data</h4>

<p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

<h4>Tracking & Cookies Data</h4>

<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>

<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>

<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

<h2>Use of Data</h2>

<p>Robin Digital uses the collected data for various purposes:</p>

<ul>
    <li>To provide and maintain the Service</li>
    <li>To notify you about changes to our Service</li>
    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
    <li>To provide customer care and support</li>
    <li>To provide analysis or valuable information so that we can improve the Service</li>
    <li>To monitor the usage of the Service</li>
    <li>To detect, prevent and address technical issues</li>
</ul>

<h2>Transfer of Data</h2>

<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

<p>If you are located outside United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to United Kingdom and process it there.</p>

<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

<h2>Disclosure of Data</h2>

<p>Robin Digital may disclose your Personal Data in the good faith belief that such action is necessary to:</p>

<ul>
    <li>To comply with a legal obligation</li>
    <li>To protect and defend the rights or property of Robin Digital</li>
    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
    <li>To protect the personal safety of users of the Service or the public</li>
    <li>To protect against legal liability</li>
</ul>

<h2>Security of Data</h2>

<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

<h2>Service Providers</h2>

<p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>

<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

<h2>Links to Other Sites</h2>

<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>

<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

<h2>Changes to This Privacy Policy</h2>

<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>

<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

<h2>Contact Us</h2>

<p>If you have any questions about this Privacy Policy, please contact us:</p>

<ul>
    <li>By email: contact@robindigital.io</li>
    <li>By visiting this page on our website: https://www.robindigital.io/contact</li>
</ul>';

        $privacy_page = array(
            'post_title'    => 'Privacy Policy',
            'post_content'  => $privacy_content,
            'post_status'   => 'publish',
            'post_author'   => 1,
            'post_type'     => 'page',
            'post_name'     => 'privacy-policy',
            'page_template' => 'template-privacy-policy.php'
        );
        wp_insert_post($privacy_page);
    }
    
    // Create Terms of Service page if it doesn't exist
    $terms_exists = get_page_by_path('terms-of-service');
    if (!$terms_exists) {
        $terms_content = '
<h1>Terms of Service</h1>

<p>Last updated: ' . date('F j, Y') . '</p>

<p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://www.robindigital.io website (the "Service") operated by Robin Digital ("us", "we", or "our").</p>

<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

<h2>Website Content</h2>

<p>Our Service allows you to access information about our services, products, and company. All content on the website is provided for general information only. We make no warranties about the accuracy, reliability, completeness or timeliness of the information provided.</p>

<h2>Products and Services</h2>

<p>Robin Digital provides digital services including but not limited to web development, software solutions, consulting, and digital products.</p>

<p>Products and services displayed on the website may be subject to specific terms and conditions that will be provided separately upon request or purchase.</p>

<h2>Communications</h2>

<p>By contacting us through the Service, you agree to receive communications from us in relation to your inquiry. We may contact you via email, phone, or other methods you provide.</p>

<p>If you subscribe to our newsletter or marketing communications, you may opt out at any time by following the unsubscribe links or by contacting us directly.</p>

<h2>Accounts</h2>

<p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>

<h2>Intellectual Property</h2>

<p>The Service and its original content, features, and functionality are and will remain the exclusive property of Robin Digital and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.</p>

<p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Robin Digital.</p>

<h2>Links To Other Web Sites</h2>

<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Robin Digital.</p>

<p>Robin Digital has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Robin Digital shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

<h2>Termination</h2>

<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

<h2>Limitation Of Liability</h2>

<p>In no event shall Robin Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>

<h2>Disclaimer</h2>

<p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

<h2>Governing Law</h2>

<p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>

<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>

<h2>Changes</h2>

<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

<h2>Contact Us</h2>

<p>If you have any questions about these Terms, please contact us:</p>

<ul>
    <li>By email: contact@robindigital.io</li>
    <li>By visiting this page on our website: https://www.robindigital.io/contact</li>
</ul>';

        $terms_page = array(
            'post_title'    => 'Terms of Service',
            'post_content'  => $terms_content,
            'post_status'   => 'publish',
            'post_author'   => 1,
            'post_type'     => 'page',
            'post_name'     => 'terms-of-service',
            'page_template' => 'template-terms-of-service.php'
        );
        wp_insert_post($terms_page);
    }
    
    // Set privacy policy page
    $privacy_page_id = get_page_by_path('privacy-policy')->ID;
    update_option('wp_page_for_privacy_policy', $privacy_page_id);
    
    update_option('robindigital_pages_created', true);
}
add_action('after_switch_theme', 'robindigital_create_pages');

// Add custom image sizes
add_image_size('robindigital-featured', 1200, 675, true);
add_image_size('robindigital-thumbnail', 600, 400, true);
add_image_size('robindigital-square', 600, 600, true);

// Custom pagination function
function robindigital_pagination() {
    global $wp_query;
    
    if ($wp_query->max_num_pages <= 1) {
        return;
    }
    
    $big = 999999999; // Need an unlikely integer
    
    $pages = paginate_links(array(
        'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages,
        'type' => 'array',
        'prev_next' => true,
        'prev_text' => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
        'next_text' => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    ));
    
    if (is_array($pages)) {
        $paged = (get_query_var('paged') == 0) ? 1 : get_query_var('paged');
        
        echo '<div class="nav-links flex justify-center gap-2">';
        foreach ($pages as $page) {
            echo $page;
        }
        echo '</div>';
    }
}
