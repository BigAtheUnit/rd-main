
<?php
/**
 * Accessibility functions for the Robin Digital theme
 *
 * @package RobinDigital
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

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
