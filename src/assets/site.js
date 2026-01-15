/**
 * IRAZ.site - Main JavaScript
 */

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent document click from closing it immediately
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Back to top functionality
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Carousel logic
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        if (carousel.classList.contains('paused')) return;
        showSlide((currentSlide + 1) % totalSlides);
    }

    function previousSlide() {
        if (carousel.classList.contains('paused')) return;
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }

    // Auto-advance carousel every 4 seconds
    const interval = setInterval(nextSlide, 4000);

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') previousSlide();
        if (event.key === 'ArrowRight') nextSlide();
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', () => carousel.classList.add('paused'));
    carousel.addEventListener('mouseleave', () => carousel.classList.remove('paused'));
}

// Run initializers on load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeBackToTop();
    initializeCarousel();
});