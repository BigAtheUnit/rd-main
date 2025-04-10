
<?php
/**
 * Security functions for the Robin Digital theme
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
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
