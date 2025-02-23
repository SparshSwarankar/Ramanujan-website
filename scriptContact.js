const scriptURL = 'https://script.google.com/macros/s/AKfycbyA2FPhymW8Mhu0U7JfpDu1b-gKAbxUKWG5gWGZIjXnFddbZlWo7R-QlEe3buLIMBbX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Form is submitted"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

// 
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (themeToggle) {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        themeToggle.classList.toggle("dark");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // ========== Mobile Navigation Menu ==========
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});