
<?php
/**
 * Services section template part
 */

// Get services from custom post type if available, otherwise use default data
$services_query = new WP_Query([
    'post_type' => 'services',
    'posts_per_page' => 6,
    'orderby' => 'menu_order',
    'order' => 'ASC'
]);

// If we have services posts, use them
if ($services_query->have_posts()) {
    $services = [];
    while ($services_query->have_posts()) {
        $services_query->the_post();
        
        // Get icon from ACF or use default
        $icon_name = get_field('icon') ?: 'globe';
        
        $services[] = [
            'title' => get_the_title(),
            'description' => get_the_excerpt(),
            'icon' => $icon_name,
            'permalink' => get_permalink()
        ];
    }
    wp_reset_postdata();
} else {
    // Use default service data if no posts
    $services = [
        [
            'title' => 'Custom Web Development',
            'description' => 'Bespoke websites built around your unique goals and branding. We handle everything from frontend interfaces to backend integrations—ensuring speed, security, and scalability.',
            'icon' => 'code',
        ],
        [
            'title' => 'AI Consulting & Implementation',
            'description' => 'Stay ahead of the curve with data-driven solutions, predictive analytics, and automation. From AI-powered chatbots to advanced machine learning models, we design and implement AI to meet your specific needs.',
            'icon' => 'bot',
        ],
        [
            'title' => 'CMS & E-commerce Solutions',
            'description' => 'Expert development for WordPress, Drupal, Shopify, and beyond. We build intuitive, SEO-ready platforms that make content management straightforward and keep your audience engaged.',
            'icon' => 'globe',
        ],
        [
            'title' => 'UX & UI Design',
            'description' => 'Delight your users with beautiful, accessible design that is as practical as it is eye-catching. We create frictionless journeys that boost user satisfaction, conversions, and brand loyalty.',
            'icon' => 'layout',
        ],
        [
            'title' => 'Ongoing Support & Maintenance',
            'description' => 'Rely on our dedicated team to keep your site secure, optimised, and ready for growth. With regular performance checks and updates, you will always stay ahead of the digital curve.',
            'icon' => 'wrench',
        ],
        [
            'title' => 'Digital Strategy & Consultancy',
            'description' => 'Whether you are launching a new venture or reinventing an existing platform, our strategic insights help you plan for long-term success. We identify the best tech solutions, outline realistic roadmaps, and ensure measurable ROI.',
            'icon' => 'lightbulb',
        ]
    ];
}
?>

<section id="solutions" class="section-padding py-20 bg-gradient-to-b from-robin-cream to-white">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">
                <?php echo get_theme_mod('services_title', 'Our Solutions'); ?>
            </h2>
            <p class="text-lg text-robin-dark/70">
                <?php echo get_theme_mod('services_subtitle', 'We deliver end-to-end digital solutions across multiple platforms that solve real problems and create measurable impact.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach ($services as $index => $service) : ?>
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-orange/10 hover:border-robin-orange/30 hover:translate-y-[-5px] group" 
                     style="animation-delay: <?php echo $index * 100; ?>ms">
                    <div class="w-14 h-14 bg-robin-orange/20 rounded-lg flex items-center justify-center mb-4 text-robin-orange group-hover:bg-robin-orange group-hover:text-white transition-colors">
                        <?php echo get_icon_svg($service['icon']); ?>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-robin-dark"><?php echo $service['title']; ?></h3>
                    <p class="text-robin-dark/70"><?php echo $service['description']; ?></p>
                    
                    <?php if (isset($service['permalink'])) : ?>
                    <div class="mt-4">
                        <a href="<?php echo $service['permalink']; ?>" class="text-robin-orange hover:text-robin-dark inline-flex items-center transition-colors">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        
        <!-- Looking for something else section -->
        <div class="mt-16 text-center">
            <div class="bg-white rounded-xl p-8 shadow-lg border-2 border-robin-orange/10 max-w-3xl mx-auto">
                <h3 class="text-2xl font-semibold mb-4 text-robin-dark">Looking for something else?</h3>
                <p class="text-robin-dark/70 mb-6">We thrive on challenging, custom projects—if you don't see what you need here, just ask. Chances are we can do it.</p>
                <a href="#contact" class="inline-block bg-robin-orange hover:bg-robin-orange/90 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                    Get in Touch
                </a>
            </div>
        </div>
    </div>
</section>

<?php
/**
 * Helper function to output SVG icon based on name
 */
function get_icon_svg($icon_name) {
    switch ($icon_name) {
        case 'globe':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
        case 'code':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
        case 'wrench':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>';
        case 'layout':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>';
        case 'bot':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>';
        case 'heart':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
        case 'lightbulb':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path></svg>';
        case 'line-chart':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>';
        case 'shield':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
        default:
            return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>';
    }
}
?>
