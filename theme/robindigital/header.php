
<?php
/**
 * The header for our theme
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-robin-cream min-h-screen flex flex-col overflow-x-hidden'); ?>>
<?php wp_body_open(); ?>

<header class="fixed w-full z-50 transition-all duration-300 <?php echo (is_front_page() && !isset($_GET['scrolled'])) ? 'bg-transparent py-5' : 'bg-white/95 backdrop-blur-sm shadow-md py-3'; ?>" id="site-header">
    <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
            <?php 
            if (has_custom_logo()) {
                $custom_logo_id = get_theme_mod('custom_logo');
                $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                echo '<img src="' . esc_url($logo[0]) . '" alt="' . get_bloginfo('name') . ' Logo" class="h-14 md:h-20 w-auto">'; 
            } else {
                echo '<img src="' . get_template_directory_uri() . '/assets/images/logo.png" alt="Robin Digital Logo" class="h-14 md:h-20 w-auto">';
            }
            ?>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
            <?php
            // Primary menu for desktop
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'flex items-center space-x-8',
                'container' => false,
                'fallback_cb' => false,
                'items_wrap' => '%3$s',
                'walker' => new Robin_Walker_Nav_Menu()
            ));
            ?>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="bg-robin-orange text-white px-5 py-2 rounded-md hover:bg-robin-dark transition-colors">
                Contact Us
            </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-toggle" class="md:hidden text-robin-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon hidden">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform translate-x-full transition-transform duration-300 ease-in-out">
        <nav class="flex flex-col space-y-6 items-center bg-white">
            <!-- Close Button for Mobile Menu -->
            <button id="mobile-menu-close" class="absolute top-4 right-4 p-2 text-robin-dark hover:text-robin-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <?php
            // Primary menu for mobile
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'flex flex-col space-y-6 items-center',
                'container' => false,
                'fallback_cb' => false,
                'items_wrap' => '%3$s',
                'walker' => new Robin_Mobile_Walker_Nav_Menu()
            ));
            ?>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="text-robin-dark hover:text-robin-orange font-medium text-lg w-full text-center bg-robin-orange text-white px-6 py-3 rounded-md hover:bg-robin-dark transition-colors">
                Contact Us
            </a>
        </nav>
    </div>
</header>

<?php
// Custom Walker for primary menu
class Robin_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $output .= '<a href="' . esc_url($item->url) . '" class="text-robin-dark hover:text-robin-orange font-medium transition-colors">' . esc_html($item->title) . '</a>';
    }
}

// Custom Walker for mobile menu
class Robin_Mobile_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $output .= '<a href="' . esc_url($item->url) . '" class="text-robin-dark hover:text-robin-orange font-medium text-lg">' . esc_html($item->title) . '</a>';
    }
}
?>
