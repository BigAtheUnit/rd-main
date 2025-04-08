
/**
 * Robin Digital theme main JavaScript file
 */

(function($) {
    'use strict';
    
    /**
     * Smooth scrolling for anchor links
     */
    function smoothScroll() {
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    e.preventDefault();
                    var yOffset = -100; // Adjust scroll position
                    var element = target[0];
                    var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                    
                    // Change URL hash
                    if (history.pushState) {
                        history.pushState(null, null, this.hash);
                    } else {
                        window.location.hash = this.hash;
                    }
                    
                    return false;
                }
            }
        });
    }
    
    /**
     * Contact form handling
     */
    function setupContactForm() {
        var $form = $('#contact-form');
        
        if (!$form.length) return;
        
        $form.on('submit', function(e) {
            var $submitButton = $form.find('button[type="submit"]');
            var buttonText = $submitButton.text();
            
            // Disable button during submission
            $submitButton.prop('disabled', true).text('Sending...');
            
            // Show success message after form redirect
            if (window.location.search.indexOf('contact=success') > -1) {
                $('#form-success-message').removeClass('hidden');
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    $('#form-success-message').addClass('hidden');
                }, 5000);
            }
            
            // Re-enable button if form doesn't redirect
            setTimeout(function() {
                $submitButton.prop('disabled', false).text(buttonText);
            }, 3000);
        });
    }
    
    /**
     * Animate elements on scroll
     */
    function setupScrollAnimations() {
        // Only run if IntersectionObserver is supported
        if (!('IntersectionObserver' in window)) return;
        
        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px"
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            });
        }, appearOptions);
        
        const elementsToAnimate = document.querySelectorAll('.should-animate');
        elementsToAnimate.forEach(elem => {
            appearOnScroll.observe(elem);
        });
    }
    
    /**
     * Initialize when document is ready
     */
    $(document).ready(function() {
        smoothScroll();
        setupContactForm();
        setupScrollAnimations();
        
        // Mobile menu toggle
        $('#mobile-menu-toggle, #mobile-menu-close').on('click', function() {
            $('#mobile-menu').toggleClass('translate-x-full');
            $('.menu-icon, .close-icon').toggleClass('hidden');
        });
        
        // Header scroll effect
        $(window).on('scroll', function() {
            var $header = $('#site-header');
            
            if ($(window).scrollTop() > 10) {
                $header.removeClass('bg-transparent py-5')
                       .addClass('bg-white/95 backdrop-blur-sm shadow-md py-3');
            } else if (window.location.pathname === '/' || window.location.pathname === '/index.php') {
                $header.addClass('bg-transparent py-5')
                       .removeClass('bg-white/95 backdrop-blur-sm shadow-md py-3');
            }
        });
        
        // Scroll to top button
        $('#scroll-to-top').on('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
})(jQuery);
