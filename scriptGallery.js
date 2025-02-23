document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeLightbox = document.querySelector('.close-lightbox');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


  // Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h3').textContent;
      const description = item.querySelector('p').textContent;

      lightboxImg.src = img.src;
      lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeLightbox.addEventListener('click', closeLightboxFunction);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightboxFunction();
    }
  });

  function closeLightboxFunction() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightboxFunction();
    }
  });

  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Determine image orientation
  function setImageOrientation() {
    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      img.onload = () => {
        if (img.naturalWidth > img.naturalHeight) {
          item.classList.add('landscape');
        } else {
          item.classList.add('portrait');
        }
      };
    });
  }

  setImageOrientation();

  // Handle window resize for responsiveness
  function handleResize() {
    const isMobile = window.innerWidth <= 768;
    filterButtons.forEach(btn => {
      btn.style.width = isMobile ? '100%' : 'auto';
    });
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Call once on load
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

// 
// scroll to top
document.addEventListener("DOMContentLoaded", () => {
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
});