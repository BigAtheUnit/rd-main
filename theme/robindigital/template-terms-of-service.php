
<?php
/**
 * Template Name: Terms of Service
 */

get_header();
?>

<main class="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden pt-32 pb-20">
    <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-robin-dark mb-8"><?php the_title(); ?></h1>
            
            <div class="bg-white rounded-xl shadow-lg p-8 text-robin-dark/80 prose prose-lg max-w-none">
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
    </div>
</main>

<?php
get_footer();
