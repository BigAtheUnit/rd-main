
<?php
/**
 * Template Name: About Page
 * 
 * This is the template for displaying the About page.
 * 
 * @package RobinDigital
 */

get_header();
?>

<main class="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden pt-32 pb-20">
    <div class="container mx-auto px-4 md:px-6">
        <!-- Hero Section -->
        <div class="max-w-4xl mx-auto mb-16">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-robin-dark mb-6"><?php the_title(); ?></h1>
            
            <?php if (has_excerpt()) : ?>
                <p class="text-xl text-robin-dark/80 mb-8"><?php echo get_the_excerpt(); ?></p>
            <?php endif; ?>
            
            <div class="prose prose-lg max-w-none text-robin-dark/80">
                <?php 
                if (have_posts()) :
                    while (have_posts()) :
                        the_post();
                        the_content();
                    endwhile;
                endif;
                ?>
            </div>
        </div>
        
        <!-- Team Section (if ACF is active) -->
        <?php if (function_exists('get_field') && get_field('show_team_section')) : ?>
        <div class="py-12 bg-white rounded-xl shadow-lg p-8 mb-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-robin-dark mb-4"><?php echo esc_html(get_field('team_section_title', 'Our Team')); ?></h2>
                <p class="text-lg text-robin-dark/70 max-w-2xl mx-auto"><?php echo esc_html(get_field('team_section_subtitle', 'Meet the talented people behind Robin Digital.')); ?></p>
            </div>
            
            <?php if (have_rows('team_members')) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_rows('team_members')) : the_row(); ?>
                <div class="text-center">
                    <?php if (get_sub_field('photo')) : ?>
                    <div class="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                        <img src="<?php echo esc_url(get_sub_field('photo')['url']); ?>" alt="<?php echo esc_attr(get_sub_field('name')); ?>" class="w-full h-full object-cover">
                    </div>
                    <?php else : ?>
                    <div class="w-48 h-48 rounded-full bg-robin-cream mx-auto mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-robin-orange/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <?php endif; ?>
                    <h3 class="text-xl font-bold text-robin-dark"><?php echo esc_html(get_sub_field('name')); ?></h3>
                    <p class="text-robin-orange font-medium mb-2"><?php echo esc_html(get_sub_field('position')); ?></p>
                    <p class="text-robin-dark/70"><?php echo esc_html(get_sub_field('bio')); ?></p>
                    
                    <?php if (have_rows('social_links')) : ?>
                    <div class="flex justify-center space-x-3 mt-4">
                        <?php while (have_rows('social_links')) : the_row(); ?>
                        <a href="<?php echo esc_url(get_sub_field('url')); ?>" class="text-robin-dark hover:text-robin-orange transition-colors">
                            <?php if (get_sub_field('platform') == 'linkedin') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            <?php elseif (get_sub_field('platform') == 'twitter') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            <?php else : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                            </svg>
                            <?php endif; ?>
                        </a>
                        <?php endwhile; ?>
                    </div>
                    <?php endif; ?>
                </div>
                <?php endwhile; ?>
            </div>
            <?php else : ?>
            <p class="text-center text-robin-dark/70">Add team members using Advanced Custom Fields.</p>
            <?php endif; ?>
        </div>
        <?php endif; ?>
        
        <!-- Company Values -->
        <?php if (function_exists('get_field') && get_field('show_values_section')) : ?>
        <div class="py-12 bg-white rounded-xl shadow-lg p-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-robin-dark mb-4"><?php echo esc_html(get_field('values_section_title', 'Our Values')); ?></h2>
                <p class="text-lg text-robin-dark/70 max-w-2xl mx-auto"><?php echo esc_html(get_field('values_section_subtitle', 'The principles that guide everything we do.')); ?></p>
            </div>
            
            <?php if (have_rows('company_values')) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_rows('company_values')) : the_row(); ?>
                <div class="p-6 rounded-lg border border-robin-cream hover:border-robin-orange hover-scale transition-all">
                    <div class="w-12 h-12 rounded-full bg-robin-cream flex items-center justify-center mb-4">
                        <?php if (get_sub_field('icon')) : ?>
                        <img src="<?php echo esc_url(get_sub_field('icon')['url']); ?>" alt="" class="w-6 h-6">
                        <?php else : ?>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <?php endif; ?>
                    </div>
                    <h3 class="text-xl font-bold text-robin-dark mb-2"><?php echo esc_html(get_sub_field('title')); ?></h3>
                    <p class="text-robin-dark/70"><?php echo esc_html(get_sub_field('description')); ?></p>
                </div>
                <?php endwhile; ?>
            </div>
            <?php else : ?>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 rounded-lg border border-robin-cream hover:border-robin-orange hover-scale transition-all">
                    <div class="w-12 h-12 rounded-full bg-robin-cream flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-robin-dark mb-2">Innovation</h3>
                    <p class="text-robin-dark/70">We embrace new technologies and approaches to solve complex problems with elegant solutions.</p>
                </div>
                
                <div class="p-6 rounded-lg border border-robin-cream hover:border-robin-orange hover-scale transition-all">
                    <div class="w-12 h-12 rounded-full bg-robin-cream flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-robin-dark mb-2">Transparency</h3>
                    <p class="text-robin-dark/70">We believe in open communication and honesty with our clients at every stage of a project.</p>
                </div>
                
                <div class="p-6 rounded-lg border border-robin-cream hover:border-robin-orange hover-scale transition-all">
                    <div class="w-12 h-12 rounded-full bg-robin-cream flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-robin-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-robin-dark mb-2">Social Impact</h3>
                    <p class="text-robin-dark/70">We're committed to projects that make a positive difference in communities and organizations.</p>
                </div>
            </div>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();

