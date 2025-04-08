
/**
 * Robin Digital main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all hash links
    document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const hrefPath = this.getAttribute('href').split('#')[0];
            const currentPath = window.location.pathname;
            
            if (!hrefPath || hrefPath === '' || currentPath === hrefPath) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('site-header');
    const handleScroll = function() {
        if (window.scrollY > 10) {
            if (header) {
                header.classList.remove('bg-transparent', 'py-5');
                header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
            }
        } else if (window.location.pathname === '/' || window.location.pathname === '/index.php') {
            if (header) {
                header.classList.add('bg-transparent', 'py-5');
                header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set proper state on page load
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenuToggle && mobileMenu && menuIcon && closeIcon) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('translate-x-full');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
    
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    if (mobileMenuClose && mobileMenu && menuIcon && closeIcon) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    }
    
    // Close mobile menu when clicking on a menu item
    const mobileMenuItems = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileMenuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            if (mobileMenu && menuIcon && closeIcon) {
                mobileMenu.classList.add('translate-x-full');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
    
    // Add animation classes to elements as they scroll into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkIfInView = function() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animatedElements.forEach(function(element) {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in view
            if (
                (elementBottomPosition >= windowTopPosition) && 
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Call once to check for elements already in view
    
    // Initialize any other interactive elements
});
