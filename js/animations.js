// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Scroll for header - Hide/Show on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add background and shadow when scrolled down
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hide the header when scrolling down, show when scrolling up
    if (scrollTop > lastScrollTop) {
        header.style.top = '-80px';  // Adjust height based on your header size
    } else {
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the section title
gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 80%", // Start animation when the top of the section is 80% from the top of the viewport
    toggleActions: "play none none reverse", // Play animation on scroll, reverse when scrolling back up
  },
  y: 50, // Move from 50px below
  opacity: 0, // Start with 0 opacity
  duration: 1, // Animation duration in seconds
  ease: "power2.out", // Easing function for a smooth effect
});

// Animate the info cards with fromTo
gsap.fromTo(".info-card", 
  {
    y: 50, // Starting position
    opacity: 0 // Starting opacity
  },
  {
    scrollTrigger: {
      trigger: ".why-choose-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 0, // End position
    opacity: 1, // End opacity
    duration: 1, // Duration of the animation
    ease: "power2.out", // Easing function for a smooth effect
    stagger: 0.2 // Delay between animations for each card
  }
);

gsap.registerPlugin(ScrollTrigger);

// Animate each history item and its text with a delay
gsap.from(".history-container .history-item", {
  scrollTrigger: {
    trigger: ".history-container",
    start: "top 85%", // Trigger when 85% of the container enters the viewport
    end: "bottom top", // End animation when the container goes out of view
    scrub: 0.5,
    toggleActions: "play none none reverse",
  },
  y: 40, // Slide up from 40px below
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Stagger the animations of each history item
  ease: "power2.out",
});

// Animate images with a delay for each
gsap.from(".history-image .image-placeholder", {
  scrollTrigger: {
    trigger: ".history-container",
    start: "top 85%", // Trigger when 85% of the container enters the viewport
    end: "bottom top", // End animation when the container goes out of view
    scrub: 0.5,
    toggleActions: "play none none reverse",
  },
  x: (i) => (i % 2 === 0 ? -50 : 50), // Slide in from left (-50) for even images and right (50) for odd images
  opacity: 0,
  duration: 1,
  stagger: 0.3, // Stagger the animations for each image
  ease: "power2.out",
});


// Your existing animations
window.addEventListener('load', () => {
// Header animations with GSAP
gsap.from('.logo', {
    duration: 0.8,
    y: -50,  // Reduced distance
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.nav-links a', {
    duration: 0.5,
    y: -30,  // Reduced distance
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
});
    
// Hero section animations
gsap.from('.voitheia-title', {
    duration: 1.2,
    opacity: 0,
    x: -50,
    ease: 'power4.out',
});

gsap.from('.animated-text', {
    duration: 1.5,
    opacity: 0,
    x: -50,
    delay: 0.3,
    ease: 'power4.out',
    stagger: 0.2 // Stagger effect for smooth text appearance
});

gsap.from('.mission-statement', {
    duration: 1.5,
    opacity: 0,
    x: -50,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.fromTo('.background-image', {
    scale: 1.1,
    opacity: 0
}, {
    duration: 1.8,
    scale: 1,
    opacity: 0.2, // Keeps the image at reduced opacity
    delay: 0.5,
    ease: 'power2.out'
});


});

// Enhanced counter animations
function animateCounter(element, target, prefix = '') {
    let current = 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = prefix + Math.floor(current).toLocaleString();
    }, interval);
}

// Trigger counter animations when in view with retry mechanism
function initializeCounters() {
    const counterSection = document.querySelector('.counter-grid');
    if (!counterSection) {
        console.warn('Counter section not found, retrying...');
        setTimeout(initializeCounters, 500);
        return;
    }

    ScrollTrigger.create({
        trigger: counterSection,
        start: 'top center',
        onEnter: () => {
            const projectCounter = document.getElementById('projectCounter');
            const fundsCounter = document.getElementById('fundsCounter');
            const membersCounter = document.getElementById('membersCounter');
            
            if (projectCounter && fundsCounter && membersCounter) {
                animateCounter(projectCounter, 3);
                animateCounter(fundsCounter, 120000, '₦');
                animateCounter(membersCounter, 56);
            }
        },
        once: true  // Only trigger once
    });
}

// Initialize counters after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCounters);

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations for Excos Section Title
    gsap.from(".meet-excos-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
    });

    // Animate the description paragraph
    gsap.from(".members-preview p", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
    });

    // Animate the Exco member items
    gsap.from(".exco-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, // Stagger animation for each exco item
        delay: 0.5,
        ease: "power2.out"
    });

    // ScrollTrigger animation example
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer-content", {
        scrollTrigger: {
            trigger: ".footer-content",
            start: "top 80%", // Trigger when the top of the footer is 80% down the viewport
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});

// GSAP animation for photo frames
document.addEventListener("DOMContentLoaded", function () {
    const photoFrames = document.querySelectorAll(".photo-frame");

    // Animate each photo frame into view
    photoFrames.forEach((frame, index) => {
        gsap.from(frame, {
            duration: 1, // Time for animation
            opacity: 0, // Start with hidden frame
            scale: 0.7, // Start smaller
            y: -50, // Start above the position
            delay: 0.2 * index, // Staggered delay for each photo frame
            ease: "power2.out", // Easing for smooth animation
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".gallery-title", {
        duration: 1.5, // Animation duration
        x: -50, // Start from 50 pixels to the left
        opacity: 0, // Start with zero opacity
        ease: "power3.out" // Easing function for a smoother effect
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body; // Get the body element
    let isDropdownActive = false; // Tracks the state of the dropdown

    // Function to toggle dropdown
    function toggleDropdown(e) {
        e.preventDefault(); // Prevent the default link behavior

        if (isDropdownActive) {
            // If dropdown is active, navigate to index.html
            window.location.href = "index.html";
        } else {
            // Toggle dropdown menu
            navLinks.classList.add("active"); // Show dropdown
            body.classList.add("active-dropdown"); // Show overlay
            isDropdownActive = true;

            // Animate the dropdown with GSAP
            gsap.fromTo(navLinks, {
                y: -50,
                opacity: 0
            }, {
                duration: 0.6,
                y: 0,
                opacity: 1,
                ease: 'power4.out'
            });

            gsap.to(body, {
                duration: 0.4,
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
                ease: 'power2.out'
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", closeDropdownOnOutsideClick);
        }
    }

    // Function to close dropdown when clicking outside
    function closeDropdownOnOutsideClick(event) {
        if (!logo.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active"); // Hide dropdown
            body.classList.remove("active-dropdown"); // Hide overlay
            isDropdownActive = false;

            // Animate the closing of the dropdown with GSAP
            gsap.to(navLinks, {
                duration: 0.4,
                y: -50,
                opacity: 0,
                ease: 'power2.in'
            });

            gsap.to(body, {
                duration: 0.4,
                backgroundColor: 'transparent', // Remove overlay
                ease: 'power2.in'
            });

            // Remove event listener after closing the dropdown
            document.removeEventListener("click", closeDropdownOnOutsideClick);
        }
    }

    // Add the click event listener for the logo
    logo.addEventListener("click", toggleDropdown);
});

// Transparency Section Animation
gsap.from(".transparency-container", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".transparency-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});

// Info Content Fade-in and Text Animation
gsap.from(".info-content h2", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".info-content h2",
        start: "top 90%",
    },
});
gsap.from(".info-content p", {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".info-content p",
        start: "top 90%",
    },
});

// Button Bounce Animation
gsap.from(".view-log-button", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".button-container",
        start: "top 90%",
    },
});

// Accounts PDF Section Animation
gsap.from("#accounts-pdf-section h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#accounts-pdf-section h2",
        start: "top 90%",
    },
});
gsap.from(".pdf-container", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".pdf-container",
        start: "top 90%",
    },
});

// Donate Section Animation
gsap.from(".why-donate-content", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".why-donate",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});

// Title Fade-in and Slide Animation
gsap.from(".donate-title", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".donate-title",
        start: "top 90%",
    },
});

// Highlighted Text Animation
gsap.from(".donate-text .highlight", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".donate-text",
        start: "top 90%",
    },
});

// Contact Button Animation
gsap.from(".contact-button-wrapper", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-button-wrapper",
        start: "top 90%",
    },
});

gsap.from(".contact-button", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".contact-button",
        start: "top 90%",
    },
});




