

document.addEventListener("DOMContentLoaded", () => {
    // ========== Mobile Navigation Menu ==========
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ========== Image Transition Banner ==========
    const images = document.querySelectorAll(".banner-image");
    let currentIndex = 0;

    if (images.length > 0) {
        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        setInterval(showNextImage, 4000);
        images[currentIndex].classList.add("active");
    }

    // ========== Scroll to Top ==========
    const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

    if (scrollToTopBtn) {
        const toggleButton = () => {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        };

        window.addEventListener("scroll", toggleButton);

        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ========== Scroll Animation for Cards ==========
    const cards = document.querySelectorAll(".card");

    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, { threshold: 0.1 });

        cards.forEach((card) => observer.observe(card));
    }

    // ========== Team Members Hover Effect ==========
    const teamMembers = document.querySelectorAll(".team-member");

    if (teamMembers.length > 0) {
        teamMembers.forEach((member) => {
            member.addEventListener("mouseenter", () => {
                member.style.transform = "translateY(-10px)";
            });

            member.addEventListener("mouseleave", () => {
                member.style.transform = "translateY(0)";
            });

            const socialIcons = member.querySelectorAll(".social-icons .icon");
            socialIcons.forEach((icon) => {
                icon.addEventListener("mouseenter", (e) => {
                    e.target.style.transform = "scale(1.2)";
                });

                icon.addEventListener("mouseleave", (e) => {
                    e.target.style.transform = "scale(1)";
                });
            });
        });
    }

    // ========== Dark Mode Toggle ==========
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
});

// 
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var eventDetailsEl = document.querySelector('.event-details');
    var currentEvent = null;

    // Ensure the event details are hidden initially
    eventDetailsEl.style.display = 'none';

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridYear'
        },
        views: {
            dayGridYear: {
                type: 'dayGrid',
                duration: { years: 1 },
                buttonText: 'Year'
            }
        },
        buttonText: {
            today: "Today",
            month: "Month"
        },
        events: [{
            title: 'Sample Event',
            start: '2025-02-18T10:00:00',
            end: '2025-02-19T12:00:00'
        }],
        eventClick: function (info) {
            // Update event details content
            currentEvent = info.event;
            eventDetailsEl.querySelector('h2').textContent = info.event.title;
            eventDetailsEl.querySelector('.event-time').innerHTML = `
                <span>Start: ${info.event.start.toLocaleString()}</span>
                <span>End: ${info.event.end ? info.event.end.toLocaleString() : 'Not specified'}</span>
            `;

            // Show event details
            eventDetailsEl.style.display = 'block';
        }
    });

    calendar.render();
    // Fix mobile click issues (ensure buttons are clickable)
    document.querySelectorAll('.fc-button').forEach(button => {
        button.addEventListener('touchend', function (e) {
            e.preventDefault(); // Prevent double tap zoom
            button.click();
        }, {passive:true});
    });
    // ✅ Ensure buttons are always clickable
    document.querySelectorAll('.fc-button, .fc-toolbar').forEach(el => {
        el.style.pointerEvents = "auto";
    });


    // Close event details when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!eventDetailsEl.contains(e.target) && !e.target.closest('.fc-event')) {
            eventDetailsEl.style.display = 'none';
            currentEvent = null;
        }
    }, true);
});
