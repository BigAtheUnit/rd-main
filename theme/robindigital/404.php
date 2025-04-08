
<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header();
?>

<main class="pt-32 pb-16 bg-robin-cream min-h-screen flex items-center">
    <div class="container mx-auto px-4 md:px-6 text-center">
        <div class="bg-white rounded-xl p-8 shadow-lg border-2 border-robin-orange/10 max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-robin-orange mx-auto mb-6">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-robin-dark">404</h1>
            <h2 class="text-2xl font-semibold mb-6 text-robin-dark">Page Not Found</h2>
            
            <p class="text-lg text-robin-dark/70 mb-8">
                The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="bg-robin-orange text-white px-6 py-3 rounded-md font-medium hover:bg-robin-dark transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Back to Home
                </a>
                
                <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="border-2 border-robin-dark/10 bg-white text-robin-dark px-6 py-3 rounded-md font-medium hover:bg-robin-dark hover:text-white transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Contact Us
                </a>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
