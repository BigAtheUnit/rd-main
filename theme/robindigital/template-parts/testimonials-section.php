
<?php
/**
 * Testimonials section template part
 */

// Get testimonials from custom post type if available, otherwise use default data
$testimonials_query = new WP_Query([
    'post_type' => 'testimonials',
    'posts_per_page' => 4,
    'orderby' => 'menu_order',
    'order' => 'ASC'
]);

// If we have testimonial posts, use them
if ($testimonials_query->have_posts()) {
    $testimonials = [];
    while ($testimonials_query->have_posts()) {
        $testimonials_query->the_post();
        
        $testimonials[] = [
            'quote' => get_the_content(),
            'role' => get_field('role') ?: 'Client',
            'organization' => get_field('organization') ?: 'Organization',
            'rating' => get_field('rating') ?: 5
        ];
    }
    wp_reset_postdata();
} else {
    // Use default testimonial data if no posts
    $testimonials = [
        [
            'quote' => "Robin Digital transformed our outdated website into a powerful fundraising tool. Donations increased by 40% in the first three months after launch.",
            'role' => "Director of Digital",
            'organization' => "Charity, London",
            'rating' => 5
        ],
        [
            'quote' => "Their WordPress template was exactly what our school needed. Easy to customise and maintain, with excellent support when we needed help.",
            'role' => "Head of IT",
            'organization' => "Education, Scotland",
            'rating' => 5
        ],
        [
            'quote' => "The custom CRM they built for our council has streamlined operations and improved our service delivery to vulnerable communities.",
            'role' => "Digital Transformation Manager",
            'organization' => "Public Sector, Midlands",
            'rating' => 5
        ],
        [
            'quote' => "Using their AI integration services has transformed our business processes, reducing manual work by 65% and allowing us to focus on growth.",
            'role' => "Managing Director",
            'organization' => "Business, Ireland",
            'rating' => 5
        ]
    ];
}
?>

<section id="testimonials" class="section-padding py-20 bg-robin-cream/50">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">
                <?php echo get_theme_mod('testimonials_title', 'Client Success Stories'); ?>
            </h2>
            <p class="text-lg text-robin-dark/70">
                <?php echo get_theme_mod('testimonials_subtitle', 'Don\'t just take our word for it. Here\'s what our clients have to say about working with Robin Digital.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <?php foreach ($testimonials as $testimonial) : ?>
                <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-dark/5 hover:border-robin-orange/20 h-full flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                        <div class="text-robin-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                            </svg>
                        </div>
                        <div class="flex">
                            <?php for ($i = 0; $i < $testimonial['rating']; $i++) : ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            <?php endfor; ?>
                        </div>
                    </div>
                    <blockquote class="text-robin-dark/80 italic flex-grow"><?php echo $testimonial['quote']; ?></blockquote>
                    <div class="mt-6 pt-6 border-t border-robin-dark/10">
                        <p class="text-robin-dark/70 text-sm"><?php echo $testimonial['role']; ?></p>
                        <p class="text-robin-dark/70 text-sm"><?php echo $testimonial['organization']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
