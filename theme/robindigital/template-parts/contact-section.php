
<?php
/**
 * Contact section template part
 */
?>

<section id="contact" class="section-padding bg-gradient-to-b from-white to-robin-cream overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-robin-dark mb-4">
                <?php echo get_theme_mod('contact_title', 'Get in Touch'); ?>
            </h2>
            <p class="text-lg text-robin-dark/70">
                <?php echo get_theme_mod('contact_subtitle', 'Ready to discuss your next digital project? We\'re here to help transform your digital presence.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <!-- Left Column - Contact Information -->
            <div class="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-robin-dark/5 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-robin-dark">Contact Information</h3>
                    
                    <div class="space-y-6">
                        <div class="flex items-start gap-3">
                            <div class="text-robin-orange mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-medium text-robin-dark">Email</h4>
                                <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@robindigital.com')); ?>" class="text-robin-dark/70 hover:text-robin-orange transition-colors">
                                    <?php echo get_theme_mod('contact_email', 'hello@robindigital.com'); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="text-robin-orange mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-medium text-robin-dark">Phone</h4>
                                <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+44 123 456 7890')); ?>" class="text-robin-dark/70 hover:text-robin-orange transition-colors">
                                    <?php echo get_theme_mod('contact_phone', '+44 123 456 7890'); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="text-robin-orange mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-medium text-robin-dark">Address</h4>
                                <p class="text-robin-dark/70">
                                    <?php echo get_theme_mod('contact_address_line1', '123 Digital Hub, Lace Market'); ?><br />
                                    <?php echo get_theme_mod('contact_address_line2', 'Nottingham City Centre, UK'); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10">
                    <h4 class="font-semibold text-robin-dark mb-4">Connect With Us</h4>
                    <div class="flex gap-4">
                        <?php if (get_theme_mod('facebook_url')): ?>
                        <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" class="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('twitter_url')): ?>
                        <a href="<?php echo esc_url(get_theme_mod('twitter_url')); ?>" class="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('linkedin_url')): ?>
                        <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" class="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('instagram_url')): ?>
                        <a href="<?php echo esc_url(get_theme_mod('instagram_url')); ?>" class="bg-gray-100 hover:bg-robin-orange/10 p-3 rounded-full text-robin-dark hover:text-robin-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            
            <!-- Right Column - Contact Form -->
            <div class="bg-white rounded-xl p-8 md:p-10 shadow-lg border border-robin-dark/5">
                <h3 class="text-2xl font-semibold mb-6 text-robin-dark">Send Us a Message</h3>
                
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="space-y-6">
                    <input type="hidden" name="action" value="robindigital_contact_form">
                    <?php wp_nonce_field('robindigital_contact_form', 'robindigital_contact_nonce'); ?>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-robin-dark/70 mb-1">Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                class="w-full px-4 py-3 rounded-md border border-robin-dark/10 focus:border-robin-orange focus:ring focus:ring-robin-orange/20 focus:outline-none transition-colors"
                                placeholder="John Doe"
                            >
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-robin-dark/70 mb-1">Your Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required 
                                class="w-full px-4 py-3 rounded-md border border-robin-dark/10 focus:border-robin-orange focus:ring focus:ring-robin-orange/20 focus:outline-none transition-colors"
                                placeholder="john@example.com"
                            >
                        </div>
                    </div>
                    
                    <div>
                        <label for="organization" class="block text-sm font-medium text-robin-dark/70 mb-1">Organization</label>
                        <input 
                            type="text" 
                            name="organization" 
                            id="organization" 
                            class="w-full px-4 py-3 rounded-md border border-robin-dark/10 focus:border-robin-orange focus:ring focus:ring-robin-orange/20 focus:outline-none transition-colors"
                            placeholder="Company / Organization Name"
                        >
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-robin-dark/70 mb-1">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows="5" 
                            required 
                            class="w-full px-4 py-3 rounded-md border border-robin-dark/10 focus:border-robin-orange focus:ring focus:ring-robin-orange/20 focus:outline-none transition-colors"
                            placeholder="How can we help with your digital project?"
                        ></textarea>
                    </div>
                    
                    <div class="flex items-center">
                        <input 
                            type="checkbox" 
                            name="newsletter" 
                            id="newsletter" 
                            class="h-4 w-4 text-robin-orange border-robin-dark/10 rounded focus:ring-robin-orange"
                        >
                        <label for="newsletter" class="ml-2 block text-sm text-robin-dark/70">
                            Subscribe to our newsletter for digital insights and project tips
                        </label>
                    </div>
                    
                    <div>
                        <button 
                            type="submit" 
                            class="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium py-3 rounded-md transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                    
                    <?php if (isset($_GET['contact']) && $_GET['contact'] === 'success'): ?>
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Success!</strong>
                        <span class="block sm:inline">Your message has been sent. We'll get back to you soon.</span>
                    </div>
                    <?php endif; ?>
                </form>
            </div>
        </div>
    </div>
</section>
