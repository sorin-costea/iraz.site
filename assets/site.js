// Function to extract body content from HTML document
function extractBodyContent(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.innerHTML;
}

// Function to load header and footer
function loadHeaderFooter() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const bodyContent = extractBodyContent(data);
            document.getElementById('header-placeholder').innerHTML = bodyContent;
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading header:', error));
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const bodyContent = extractBodyContent(data);
            document.getElementById('footer-placeholder').innerHTML = bodyContent;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
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
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer first
    loadHeaderFooter();
    
    // Initialize back to top button
    initializeBackToTop();

    // Initialize carousel if it exists on the page
    setTimeout(function() {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            const slides = carousel.querySelectorAll('.carousel-slide');
            let currentSlide = 0;
            const totalSlides = slides.length;

            function nextSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % totalSlides;
                slides[currentSlide].classList.add('active');
            }

            function previousSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                slides[currentSlide].classList.add('active');
            }

            // Auto-advance carousel every 4 seconds
            setInterval(nextSlide, 4000);

            // Optional: Add keyboard navigation
            document.addEventListener('keydown', function(event) {
                if (event.key === 'ArrowLeft') {
                    previousSlide();
                } else if (event.key === 'ArrowRight') {
                    nextSlide();
                }
            });

            // Optional: Pause on hover
            carousel.addEventListener('mouseenter', function() {
                carousel.classList.add('paused');
            });

            carousel.addEventListener('mouseleave', function() {
                carousel.classList.remove('paused');
            });
        }
    }, 100);
});