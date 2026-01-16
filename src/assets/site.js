/**
 * IRAZ.site - Main JavaScript
 */

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent document click from closing it immediately
            navMenu.classList.toggle('active');
        });

        // Mobile dropdown toggle
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    const dropdown = this.nextElementSibling;
                    if (dropdown) {
                        dropdown.classList.toggle('active');
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                // Also hide active dropdowns when closing the main menu
                document.querySelectorAll('.dropdown-menu.active').forEach(d => d.classList.remove('active'));
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

    const interval = setInterval(nextSlide, 4000);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') previousSlide();
        if (event.key === 'ArrowRight') nextSlide();
    });

    carousel.addEventListener('mouseenter', () => carousel.classList.add('paused'));
    carousel.addEventListener('mouseleave', () => carousel.classList.remove('paused'));
}

// Run initializers on load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeBackToTop();
    initializeCarousel();
});
