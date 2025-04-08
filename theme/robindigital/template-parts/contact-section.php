
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
            <div class="bg-gradient-to-br from-white to-robin-cream shadow-lg rounded-xl border-t-4 border-robin-orange overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="p-8 h-full flex flex-col">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-robin-dark mb-4">Contact Information</h3>
                        <p class="text-lg text-robin-dark/70 leading-relaxed">
                            Reach out to our team using any of the following contact methods or fill out the form to send us a direct message.
                        </p>
                    </div>
                    
                    <div class="space-y-6 mt-2">
                        <div class="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                            <div class="w-12 h-12 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Email Us</h3>
                                <p class="text-robin-dark/70 group-hover:text-robin-orange transition-colors">
                                    <?php echo get_theme_mod('contact_email', 'hello@robindigital.com'); ?>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                            <div class="w-12 h-12 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Call Us</h3>
                                <p class="text-robin-dark/70 group-hover:text-robin-orange transition-colors">
                                    <?php echo get_theme_mod('contact_phone', '+44 (0) 123 456 7890'); ?>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                            <div class="w-12 h-12 bg-robin-orange/10 rounded-full flex items-center justify-center shrink-0 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-robin-dark">Visit Us</h3>
                                <p class="text-robin-dark/70 group-hover:text-robin-orange transition-colors">
                                    <?php echo get_theme_mod('contact_address', 'The Lace Market, Nottingham City Centre, UK'); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right Column - Contact Form -->
            <div class="bg-gradient-to-br from-white to-robin-cream/70 shadow-lg rounded-xl border-t-4 border-robin-orange overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                <div class="p-8 relative">
                    <!-- Background gradient effect -->
                    <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-robin-orange/5 to-transparent pointer-events-none"></div>
                    
                    <!-- Shine animation effect -->
                    <div class="absolute -left-10 top-0 h-full w-20 bg-white/20 transform rotate-15 animate-shine pointer-events-none"></div>
                    
                    <h3 class="text-2xl font-bold text-robin-dark mb-6 relative">Send us a message</h3>
                    
                    <?php
                    // Show success message if form was submitted
                    if (isset($_GET['contact']) && $_GET['contact'] === 'success') {
                        echo '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                            <strong class="font-bold">Thank you!</strong>
                            <span class="block sm:inline"> Your message has been sent successfully. We\'ll get back to you as soon as possible.</span>
                        </div>';
                    }
                    ?>
                    
                    <form action="<?php echo admin_url('admin-post.php'); ?>" method="post" class="space-y-6 relative">
                        <input type="hidden" name="action" value="robindigital_contact_form">
                        <?php wp_nonce_field('robindigital_contact_form', 'robindigital_contact_nonce'); ?>
                        
                        <div class="space-y-4">
                            <div class="group">
                                <label for="name" class="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="John Smith"
                                    required
                                    class="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow px-4 py-2 rounded border"
                                />
                            </div>
                            
                            <div class="group">
                                <label for="email" class="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                    class="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow px-4 py-2 rounded border"
                                />
                            </div>
                            
                            <div class="group">
                                <label for="organization" class="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                                    Organization
                                </label>
                                <input
                                    id="organization"
                                    name="organization"
                                    placeholder="Your organization name"
                                    required
                                    class="w-full border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow px-4 py-2 rounded border"
                                />
                            </div>
                            
                            <div class="group">
                                <label for="message" class="block text-sm font-medium text-robin-dark/80 mb-2 group-hover:text-robin-orange transition-colors">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project or inquiry"
                                    required
                                    class="w-full min-h-[120px] border-robin-dark/10 focus:border-robin-orange focus:ring-robin-orange/10 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow px-4 py-2 rounded border"
                                ></textarea>
                            </div>
                            
                            <div class="flex items-center space-x-2 pt-2">
                                <input 
                                    type="checkbox" 
                                    id="newsletter" 
                                    name="newsletter"
                                    class="h-4 w-4 text-robin-orange focus:ring-robin-orange border-robin-dark/10 rounded"
                                />
                                <label 
                                    for="newsletter" 
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                >
                                    Keep me updated with industry news and insights
                                </label>
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            class="w-full bg-robin-orange hover:bg-robin-dark text-white font-medium transition-colors flex items-center justify-center gap-2 py-6 h-auto text-md rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
