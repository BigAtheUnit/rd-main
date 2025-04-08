
<?php
/**
 * The template for displaying archive pages
 */

get_header();
?>

<main class="pt-32 pb-16 bg-robin-cream min-h-screen">
    <div class="container mx-auto px-4 md:px-6">
        <header class="page-header mb-12 text-center">
            <?php
            the_archive_title('<h1 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">', '</h1>');
            the_archive_description('<div class="archive-description text-lg text-robin-dark/70 max-w-3xl mx-auto">', '</div>');
            ?>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-orange/10 hover:border-robin-orange/30 hover:-translate-y-1'); ?>>
                        <?php robindigital_post_thumbnail(); ?>
                        
                        <header class="entry-header mt-4">
                            <?php the_title('<h2 class="text-xl font-semibold mb-2 text-robin-dark"><a href="' . esc_url(get_permalink()) . '">', '</a></h2>'); ?>
                            
                            <?php if ('post' === get_post_type()) : ?>
                            <div class="entry-meta mb-3">
                                <?php robindigital_posted_on(); ?>
                            </div>
                            <?php endif; ?>
                        </header>

                        <div class="entry-content">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <footer class="entry-footer mt-4 pt-4 border-t border-robin-dark/10">
                            <a href="<?php echo esc_url(get_permalink()); ?>" class="inline-flex items-center text-robin-orange hover:text-robin-dark transition-colors">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </footer>
                    </article>
                <?php endwhile; ?>

                <div class="pagination-container col-span-full mt-12">
                    <?php robindigital_pagination(); ?>
                </div>

            <?php else : ?>
                <div class="col-span-full">
                    <p class="text-lg text-robin-dark/70 text-center"><?php esc_html_e('No posts found', 'robindigital'); ?></p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php
get_footer();
