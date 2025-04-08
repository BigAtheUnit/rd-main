<?php
/**
 * The template for displaying the footer
 */
?>

<footer class="bg-robin-dark text-white pt-16 pb-8">
    <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-white.png" alt="<?php echo get_bloginfo('name'); ?> Logo" class="h-16 mb-4" />
                <p class="text-robin-cream/80 mb-6">
                    <?php echo get_theme_mod('footer_tagline', 'Empowering organizations with innovative digital solutions that make a difference.'); ?>
                </p>
                <div class="flex space-x-4">
                    <?php if (get_theme_mod('facebook_url')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" class="text-robin-cream/70 hover:text-robin-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('twitter_url')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('twitter_url')); ?>" class="text-robin-cream/70 hover:text-robin-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('linkedin_url')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" class="text-robin-cream/70 hover:text-robin-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('instagram_url')) : ?>
                    <a href="<?php echo esc_url(get_theme_mod('instagram_url')); ?>" class="text-robin-cream/70 hover:text-robin-orange transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <?php endif; ?>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class' => 'space-y-2',
                    'container' => false,
                    'fallback_cb' => false,
                    'depth' => 1,
                    'walker' => new Footer_Walker_Nav_Menu()
                ));
                ?>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Solutions</h3>
                <ul class="space-y-2">
                    <?php
                    $services = get_posts(array(
                        'post_type' => 'services',
                        'posts_per_page' => 5
                    ));
                    
                    foreach ($services as $service) :
                    ?>
                    <li>
                        <a href="<?php echo get_permalink($service->ID); ?>" class="text-robin-cream/70 hover:text-robin-orange transition-colors">
                            <?php echo get_the_title($service->ID); ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-robin-orange shrink-0 mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span class="text-robin-cream/70"><?php echo get_theme_mod('contact_email', 'hello@robindigital.com'); ?></span>
                    </li>
                    <li>
                        <span class="block text-robin-cream/70"><?php echo get_theme_mod('contact_address_line1', '123 Digital Hub, Lace Market'); ?></span>
                        <span class="block text-robin-cream/70"><?php echo get_theme_mod('contact_address_line2', 'Nottingham City Centre, UK'); ?></span>
                    </li>
                    <li>
                        <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="inline-block bg-robin-orange text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-robin-dark transition-colors">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p class="text-robin-cream/60 text-sm mb-4 md:mb-0">
                © <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. All rights reserved. 
                Created by <a href="https://www.robindigital.io" class="text-robin-orange hover:text-white transition-colors">https://www.robindigital.io</a>
            </p>
            
            <div class="flex flex-col md:flex-row items-center gap-4">
                <div class="flex gap-4">
                    <a href="<?php echo get_permalink(get_page_by_path('privacy-policy')->ID); ?>" class="text-robin-cream/60 hover:text-robin-orange text-sm transition-colors">Privacy Policy</a>
                    <a href="<?php echo get_permalink(get_page_by_path('terms-of-service')->ID); ?>" class="text-robin-cream/60 hover:text-robin-orange text-sm transition-colors">Terms of Service</a>
                </div>
                
                <button id="scroll-to-top" class="ml-4 w-10 h-10 bg-robin-orange/20 hover:bg-robin-orange rounded-full flex items-center justify-center text-white transition-colors" aria-label="Scroll to top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                </button>
            </div>
        </div>
    </div>
</footer>

<?php
// Custom Walker for footer menu
class Footer_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $output .= '<li><a href="' . esc_url($item->url) . '" class="text-robin-cream/70 hover:text-robin-orange transition-colors">' . esc_html($item->title) . '</a></li>';
    }
}
?>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top with improved smoothness
    document.getElementById('scroll-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Make all anchor links smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return; // Skip if empty anchor
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Improved smooth scrolling with offset
                const yOffset = -80; // Adjust offset to account for fixed header
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('translate-x-full');
            document.querySelector('.menu-icon').classList.toggle('hidden');
            document.querySelector('.close-icon').classList.toggle('hidden');
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            document.querySelector('.menu-icon').classList.remove('hidden');
            document.querySelector('.close-icon').classList.add('hidden');
        });
    }
    
    // Header scroll effect
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.remove('bg-transparent', 'py-5');
            header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
        } else if(window.location.pathname === '/') {
            header.classList.add('bg-transparent', 'py-5');
            header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
        }
    });
});
</script>

<?php wp_footer(); ?>
</body>
</html>
