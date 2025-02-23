document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

    if (scrollToTopBtn) {
        // Show or hide the button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        // Scroll to the top smoothly when clicked
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    } else {
        console.error("Scroll to Top Button not found!");
    }
});
// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// dark mode
// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.classList.add('dark');
}

// Toggle theme function
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark');

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', null);
    }
});