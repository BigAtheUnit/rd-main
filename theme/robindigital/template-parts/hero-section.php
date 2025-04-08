
<?php
/**
 * Hero section template part
 */
?>

<section class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-robin-cream">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 z-0 opacity-5">
        <div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-robin-orange blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-robin-orange blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 md:px-6 z-10 relative">
        <div class="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <div class="space-y-6 animate-fade-in">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-robin-dark leading-tight">
                    <?php echo get_theme_mod('hero_title', 'Digital Solutions That <span class="text-robin-orange relative inline-block transform hover:scale-105 transition-transform duration-300">Transform<span class="absolute inset-0 bg-white/20 animate-shine -skew-x-12"></span></span>'); ?>
                </h1>
                
                <p class="text-lg md:text-xl text-robin-dark/80 leading-relaxed">
                    <?php echo get_theme_mod('hero_subtitle', 'Empowering charities, public sector, education, and businesses with innovative digital solutions that make a difference.'); ?>
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a 
                        href="#contact" 
                        class="bg-robin-orange text-white px-8 py-3 rounded-md font-medium hover:bg-robin-dark transition-colors text-center hover-scale inline-flex items-center justify-center"
                    >
                        <?php echo get_theme_mod('hero_cta_primary', 'Start Your Project'); ?>
                    </a>
                    <a 
                        href="#solutions" 
                        class="border-2 border-robin-dark/10 bg-white/50 backdrop-blur-sm text-robin-dark px-8 py-3 rounded-md font-medium hover:bg-robin-dark hover:text-white transition-colors text-center inline-flex items-center justify-center hover-scale"
                    >
                        <?php echo get_theme_mod('hero_cta_secondary', 'Explore Solutions'); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#solutions" class="text-robin-dark/60 hover:text-robin-orange transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
        </a>
    </div>
</section>
