
<?php
/**
 * Template Name: Contact Page
 * 
 * This is the template for displaying the Contact page.
 * 
 * @package RobinDigital
 */

get_header();
?>

<main class="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden pt-32 pb-20">
    <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-robin-dark mb-8"><?php the_title(); ?></h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Contact Form -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-semibold text-robin-dark mb-6">Send us a message</h2>
                    
                    <?php 
                    // Check if Contact Form 7 is active
                    if (function_exists('wpcf7_contact_form')) {
                        // Display contact form with ID 123 (replace with your form ID)
                        echo do_shortcode('[contact-form-7 id="123" title="Contact Form"]');
                    } else {
                        // Fallback basic form if CF7 is not installed
                    ?>
                        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-robin-dark mb-1">Your Name</label>
                                <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-robin-orange">
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-medium text-robin-dark mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-robin-orange">
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-robin-dark mb-1">Your Message</label>
                                <textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-robin-orange"></textarea>
                            </div>
                            
                            <button type="submit" class="bg-robin-orange hover:bg-robin-orange/90 text-white font-bold py-2 px-6 rounded-md transition-colors">
                                Send Message
                            </button>
                            
                            <input type="hidden" name="action" value="robindigital_contact_form">
                            <?php wp_nonce_field('robindigital_contact_form_nonce', 'contact_nonce'); ?>
                        </form>
                    <?php } ?>
                </div>
                
                <!-- Contact Information -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-semibold text-robin-dark mb-6">Get in Touch</h2>
                    
                    <div class="space-y-4">
                        <div class="flex items-start space-x-4">
                            <div class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Email Us</h3>
                                <a href="mailto:<?php echo esc_html(get_theme_mod('contact_email', 'hello@robindigital.com')); ?>" class="text-robin-orange hover:text-robin-dark transition-colors">
                                    <?php echo esc_html(get_theme_mod('contact_email', 'hello@robindigital.com')); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Visit Us</h3>
                                <address class="not-italic text-robin-dark/80">
                                    <?php echo esc_html(get_theme_mod('contact_address_line1', '123 Digital Hub, Lace Market')); ?><br>
                                    <?php echo esc_html(get_theme_mod('contact_address_line2', 'Nottingham City Centre, UK')); ?>
                                </address>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Working Hours</h3>
                                <p class="text-robin-dark/80">
                                    Monday - Friday: 9:00 AM - 5:00 PM<br>
                                    Weekend: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Media Links -->
                    <div class="mt-8">
                        <h3 class="text-lg font-medium text-robin-dark mb-3">Connect With Us</h3>
                        <div class="flex space-x-4">
                            <?php if (get_theme_mod('facebook_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center hover:bg-robin-orange hover:text-white transition-colors text-robin-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <?php endif; ?>
                            
                            <?php if (get_theme_mod('twitter_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('twitter_url')); ?>" class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center hover:bg-robin-orange hover:text-white transition-colors text-robin-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <?php endif; ?>
                            
                            <?php if (get_theme_mod('linkedin_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center hover:bg-robin-orange hover:text-white transition-colors text-robin-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <?php endif; ?>
                            
                            <?php if (get_theme_mod('instagram_url')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('instagram_url')); ?>" class="w-10 h-10 rounded-full bg-robin-cream flex items-center justify-center hover:bg-robin-orange hover:text-white transition-colors text-robin-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Google Map (Optional) -->
            <div class="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-semibold text-robin-dark mb-6">Find Us</h2>
                <div class="h-[400px] bg-gray-200 rounded-lg">
                    <!-- Replace with Google Maps embed code -->
                    <div class="w-full h-full flex items-center justify-center text-robin-dark/60">
                        <p>Google Map Embed Goes Here</p>
                    </div>
                </div>
                <p class="mt-4 text-sm text-robin-dark/60">
                    Note: To display a Google Map, add your Google Maps API key in the theme options and place the embed code here.
                </p>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();

