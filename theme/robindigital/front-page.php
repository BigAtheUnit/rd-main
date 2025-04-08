
<?php
/**
 * The front page template file
 *
 * This is the template that displays the home/front page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package RobinDigital
 */

get_header();
?>

<main class="min-h-screen bg-robin-cream flex flex-col overflow-x-hidden">
    <?php 
    // Include template parts for the home page
    get_template_part('template-parts/hero-section');
    ?>
    
    <div class="py-10"></div> <!-- Increased spacing between sections -->
    
    <?php get_template_part('template-parts/services-section'); ?>
    
    <div class="py-10"></div> <!-- Increased spacing between sections -->
    
    <?php get_template_part('template-parts/sectors-section'); ?>
    
    <div class="py-10"></div> <!-- Increased spacing between sections -->
    
    <?php get_template_part('template-parts/testimonials-section'); ?>
    
    <div class="py-10"></div> <!-- Increased spacing between sections -->
    
    <?php get_template_part('template-parts/contact-section'); ?>
</main>

<?php
get_footer();
