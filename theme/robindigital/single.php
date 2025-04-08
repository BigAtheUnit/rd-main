
<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<main class="pt-32 pb-16 bg-robin-cream min-h-screen">
    <div class="container mx-auto px-4 md:px-6">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-robin-orange/10 max-w-4xl mx-auto'); ?>>
                <header class="entry-header mb-8 text-center">
                    <?php the_title('<h1 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">', '</h1>'); ?>
                    
                    <?php if ('post' === get_post_type()) : ?>
                    <div class="entry-meta">
                        <?php robindigital_posted_on(); ?>
                    </div>
                    <?php endif; ?>
                </header>

                <?php robindigital_post_thumbnail(); ?>

                <div class="entry-content mt-8 prose prose-lg mx-auto text-robin-dark/80">
                    <?php the_content(); ?>
                    
                    <?php
                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links mt-4 pt-4 border-t border-robin-dark/10">' . esc_html__('Pages:', 'robindigital'),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div>

                <footer class="entry-footer mt-8 pt-4 border-t border-robin-dark/10">
                    <?php robindigital_entry_footer(); ?>
                </footer>
            </article>

            <div class="post-navigation max-w-4xl mx-auto mt-8">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                        <?php
                        $prev_post = get_previous_post();
                        if (!empty($prev_post)) :
                        ?>
                            <span class="block text-sm text-robin-dark/60 mb-1"><?php echo esc_html__('Previous', 'robindigital'); ?></span>
                            <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" class="flex items-center text-robin-dark hover:text-robin-orange transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <?php echo esc_html(get_the_title($prev_post->ID)); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                    
                    <div class="md:w-1/2 md:pl-4 text-right">
                        <?php
                        $next_post = get_next_post();
                        if (!empty($next_post)) :
                        ?>
                            <span class="block text-sm text-robin-dark/60 mb-1"><?php echo esc_html__('Next', 'robindigital'); ?></span>
                            <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" class="flex items-center justify-end text-robin-dark hover:text-robin-orange transition-colors">
                                <?php echo esc_html(get_the_title($next_post->ID)); ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
        endwhile; // End of the loop.
        ?>
    </div>
</main>

<?php
get_footer();
