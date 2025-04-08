
<?php
/**
 * Sectors section template part
 */

// Define the sectors array (this could come from a custom post type in a real implementation)
$sectors = [
    [
        'title' => 'Businesses',
        'icon' => 'briefcase',
        'description' => 'We partner with businesses of all sizes to develop digital solutions that drive growth, improve operational efficiency, and create lasting competitive advantage in today\'s digital marketplace.',
        'features' => [
            'Custom e-commerce solutions',
            'Business process automation tools',
            'Client & employee portals',
            'Digital marketing infrastructure'
        ]
    ],
    [
        'title' => 'Public Sector',
        'icon' => 'building',
        'description' => 'We help government and public sector organisations deliver accessible, compliant digital services that meet the diverse needs of citizens while optimizing resource utilization and improving service delivery.',
        'features' => [
            'Citizen-focused service platforms',
            'Accessibility-compliant web applications',
            'Digital transformation consultancy',
            'Data collection & analysis tools'
        ]
    ],
    [
        'title' => 'Charities',
        'icon' => 'heart',
        'description' => 'We create donor-focused digital solutions that help non-profit organizations maximize their social impact, engage supporters more effectively, and streamline operational processes to reduce administrative overhead.',
        'features' => [
            'Donation platforms & payment integration',
            'Volunteer management systems',
            'Impact reporting dashboards',
            'Community engagement tools'
        ]
    ],
    [
        'title' => 'Education',
        'icon' => 'graduation-cap',
        'description' => 'We support educational institutions with innovative digital tools that enhance teaching and learning experiences, simplify administrative processes, and create engaging environments for students of all ages.',
        'features' => [
            'Learning management systems',
            'Student progress tracking',
            'Interactive educational resources',
            'Virtual classroom technologies'
        ]
    ]
];
?>

<section id="sectors" class="section-padding py-20 bg-gradient-to-b from-white to-robin-cream/50">
    <div class="container mx-auto px-4 md:px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-robin-dark">
                <?php echo get_theme_mod('sectors_title', 'Sectors We Serve'); ?>
            </h2>
            <p class="text-lg text-robin-dark/70">
                <?php echo get_theme_mod('sectors_subtitle', 'We specialize in serving organizations with purpose, delivering tailored digital solutions that address the unique challenges and opportunities in each sector.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <?php foreach ($sectors as $sector) : ?>
                <div class="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-robin-dark/5 hover:border-robin-orange/20 rounded-lg">
                    <div class="bg-robin-orange/10 p-6 flex flex-row items-center gap-4">
                        <div class="w-12 h-12 bg-robin-orange rounded-full flex items-center justify-center text-white shrink-0">
                            <?php echo get_icon_svg($sector['icon']); ?>
                        </div>
                        <h3 class="text-xl font-semibold text-robin-dark"><?php echo $sector['title']; ?></h3>
                    </div>
                    
                    <div class="p-6">
                        <p class="text-robin-dark/70 mb-4"><?php echo $sector['description']; ?></p>
                        <ul class="space-y-2">
                            <?php foreach ($sector['features'] as $feature) : ?>
                                <li class="flex items-center gap-2 text-robin-dark/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-robin-orange shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    <span><?php echo $feature; ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    
                    <div class="p-6 bg-gradient-to-r from-robin-orange/5 to-transparent">
                        <p class="text-sm text-robin-dark/60 italic">
                            We specialize in creating tailored solutions for <?php echo strtolower($sector['title']); ?> of all sizes
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php
function get_icon_svg($icon_name) {
    switch ($icon_name) {
        case 'briefcase':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>';
        case 'building':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line></svg>';
        case 'heart':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
        case 'graduation-cap':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>';
        default:
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>';
    }
}
?>
