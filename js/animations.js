// 1. Initialize GSAP ScrollTrigger (Only once at the top)
gsap.registerPlugin(ScrollTrigger);

// 2. Header Scroll Logic (Hide/Show on scroll)
let lastScrollTop = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.top = '-80px'; 
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
}

// 3. Section Title Animations (.info-card)
if (document.querySelector(".info-grid")) {
    let startTrigger = window.innerWidth <= 768 ? "top 80%" : "top 95%";
    let endTrigger = window.innerWidth <= 768 ? "top 50%" : "top 10%";

    gsap.fromTo(".info-card", 
        { opacity: 0, scale: 0.85, y: 30 },
        {
            scrollTrigger: {
                trigger: ".info-grid",
                start: startTrigger,  
                end: endTrigger,      
                scrub: true,
            },
            opacity: 1, scale: 1, y: 0, duration: 2.5, ease: "power2.out",
            stagger: window.innerWidth <= 768 ? 0.3 : 0.25, 
        }
    );
}

// 4. History Container Animations
if (document.querySelector(".history-container")) {
    gsap.from(".history-container .history-item", {
        scrollTrigger: {
            trigger: ".history-container",
            start: "top 85%",
            end: "bottom top",
            scrub: 0.5,
            toggleActions: "play none none reverse",
        },
        y: 40, opacity: 0, duration: 1, stagger: 0.3, ease: "power2.out",
    });

    gsap.from(".history-image .image-placeholder", {
        scrollTrigger: {
            trigger: ".history-container",
            start: "top 85%",
            end: "bottom top",
            scrub: 0.5,
            toggleActions: "play none none reverse",
        },
        x: (i) => (i % 2 === 0 ? -50 : 50),
        opacity: 0, duration: 1, stagger: 0.3, ease: "power2.out",
    });
}

// 5. Hero & Nav Animations (On Window Load)
window.addEventListener('load', () => {
    if (document.querySelector('.logo')) {
        gsap.from('.logo', { duration: 0.8, y: -50, opacity: 0, ease: 'power4.out' });
    }
    
    if (document.querySelector('.nav-links a')) {
        gsap.from('.nav-links a', { duration: 0.5, y: -30, opacity: 0, stagger: 0.1, ease: 'power2.out' });
    }
    
    if (document.querySelector('.voitheia-title')) {
        gsap.from('.voitheia-title', { duration: 1.2, opacity: 0, x: -50, ease: 'power4.out' });
    }

    if (document.querySelector('.animated-text')) {
        gsap.from('.animated-text', { duration: 1.5, opacity: 0, x: -50, delay: 0.3, ease: 'power4.out', stagger: 0.2 });
    }

    if (document.querySelector('.background-image')) {
        gsap.fromTo('.background-image', { scale: 1.1, opacity: 0 }, {
            duration: 1.8, scale: 1, opacity: 0.2, delay: 0.5, ease: 'power2.out'
        });
    }
});

// 6. Counter Logic (FIXED: Removed infinite loop)
function animateCounter(element, target, prefix = '') {
    let current = 0;
    const duration = 2000;
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

function initializeCounters() {
    const counterSection = document.querySelector('.counter-grid');
    // FIXED: If section is not found, we exit immediately instead of retrying
    if (!counterSection) return; 

    ScrollTrigger.create({
        trigger: counterSection,
        start: 'top center',
        onEnter: () => {
            const projectCounter = document.getElementById('projectCounter');
            const fundsCounter = document.getElementById('fundsCounter');
            const membersCounter = document.getElementById('membersCounter');
            
            if (projectCounter) animateCounter(projectCounter, 10);
            if (fundsCounter) animateCounter(fundsCounter, 120000, '₦');
            if (membersCounter) animateCounter(membersCounter, 117);
        },
        once: true
    });
}

// 7. General Section Animations (On DOM Content Loaded)
document.addEventListener('DOMContentLoaded', () => {
    initializeCounters();

    // Excos
    if (document.querySelector(".meet-excos-title")) {
        gsap.from(".meet-excos-title", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        gsap.from(".members-preview p", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power2.out" });
        gsap.from(".exco-item", { opacity: 0, y: 50, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" });
    }

    // Footer
    if (document.querySelector(".footer-content")) {
        gsap.from(".footer-content", {
            scrollTrigger: { trigger: ".footer-content", start: "top 90%" },
            opacity: 0, y: 50, duration: 1, ease: "power2.out"
        });
    }

    // Photo Frames & Gallery
    const photoFrames = document.querySelectorAll(".photo-frame");
    if (photoFrames.length > 0) {
        photoFrames.forEach((frame, index) => {
            gsap.from(frame, { duration: 1, opacity: 0, scale: 0.7, y: -50, delay: 0.1 * index, ease: "power2.out" });
        });
    }

    if (document.querySelector(".gallery-title")) {
        gsap.from(".gallery-title", { duration: 1.5, x: -50, opacity: 0, ease: "power3.out" });
    }

    // Logo Dropdown
    const logo = document.querySelector(".logo");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;
    let isDropdownActive = false;

    if (logo && navLinks) {
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            if (isDropdownActive) {
                window.location.href = "index.html";
            } else {
                navLinks.classList.add("active");
                body.classList.add("active-dropdown");
                isDropdownActive = true;
                gsap.fromTo(navLinks, { y: -50, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1, ease: 'power4.out' });
                document.addEventListener("click", function closeClick(ev) {
                    if (!logo.contains(ev.target) && !navLinks.contains(ev.target)) {
                        navLinks.classList.remove("active");
                        body.classList.remove("active-dropdown");
                        isDropdownActive = false;
                        document.removeEventListener("click", closeClick);
                    }
                });
            }
        });
    }

    // PDF & Donate Sections
    if (document.querySelector(".pdf-container")) {
        gsap.from(".pdf-container", { scrollTrigger: ".pdf-container", opacity: 0, scale: 0.9, duration: 1.2 });
    }
    
    if (document.querySelector(".why-donate-content")) {
        gsap.from(".why-donate-content", { scrollTrigger: ".why-donate", opacity: 0, y: 50, duration: 1.5, ease: "elastic.out(1, 0.5)" });
    }
});

// 8. Polaroid Modal Logic (Only runs if Modal exists)
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("photoModal");
    if (!modal) return;

    const slideImage = document.getElementById("slideImage");
    const projectDescription = document.getElementById("projectDescription");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const projectData = [
        { images: ["img1.jpg", "img2.jpg", "img3.jpg"], description: "Project 1" },
        { images: ["img4.jpg", "img5.jpg", "img6.jpg"], description: "Project 2" }
    ];

    let currentProject = 0;
    let currentSlide = 0;

    document.querySelectorAll(".photo-frame").forEach((frame, index) => {
        frame.addEventListener("click", () => {
            currentProject = index;
            currentSlide = 0;
            updateModal();
            modal.style.display = "flex";
        });
    });

    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";

    function updateModal() {
        if (projectData[currentProject]) {
            slideImage.src = projectData[currentProject].images[currentSlide];
            projectDescription.textContent = projectData[currentProject].description;
        }
    }

    if (prevBtn) prevBtn.onclick = () => {
        currentSlide = (currentSlide - 1 + projectData[currentProject].images.length) % projectData[currentProject].images.length;
        updateModal();
    };

    if (nextBtn) nextBtn.onclick = () => {
        currentSlide = (currentSlide + 1) % projectData[currentProject].images.length;
        updateModal();
    };
});