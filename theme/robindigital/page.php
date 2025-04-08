
<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main class="pt-32 pb-16 bg-robin-cream min-h-screen">
    <div class="container mx-auto px-4 md:px-6">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="page-<?php the_ID(); ?>" <?php post_class('bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-robin-orange/10 max-w-4xl mx-auto'); ?>>
                <header class="entry-header mb-8 text-center">
                    <?php the_title('<h1 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">', '</h1>'); ?>
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
                    <?php
                    edit_post_link(
                        sprintf(
                            wp_kses(
                                /* translators: %s: Name of current post. Only visible to screen readers */
                                __('Edit <span class="screen-reader-text">%s</span>', 'robindigital'),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            get_the_title()
                        ),
                        '<span class="edit-link text-sm text-robin-dark/60">',
                        '</span>'
                    );
                    ?>
                </footer>
            </article>

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
