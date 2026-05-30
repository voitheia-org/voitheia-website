/* ==========================================
   1. PROJECT DATA
   ========================================== */
const projectsData = {
    'ils': {
        title: "Indian Language School",
        address: "14/16 Obanle Aro Cres, Ilupeju, Lagos 100252, Lagos, Nigeria",
        mapUrl: "https://maps.app.goo.gl/nEqvQH9HKfyVRzJK9",  
        images: ['Voitheia-Photos/Project-Photos/p41.webp','Voitheia-Photos/Project-Photos/p42.webp','Voitheia-Photos/Project-Photos/p43.webp','Voitheia-Photos/Project-Photos/p44.webp','Voitheia-Photos/Project-Photos/p45.webp'],
        description: "<p>Our fourth project rallied a dedicated team of volunteers across all grade levels, channeling a shared sense of pride and community spirit into restoring our school campus after a major event. Armed with a full arsenal of cleaning supplies, organized waste disposal stations, and the backing of the school administration, we tackled the entire grounds efficiently, transforming messy spaces back into pristine learning environments."
    },
    'babesalaam': {
        title: "Bab Es Salaam Orphanage",
        address: "14 Joel Ogunnaike St, Ikeja GRA, Ikeja 101233, Lagos, Nigeria",
        mapUrl: "https://www.google.com/maps/place/Bab+Es+Salaam+Orphanage/@6.5844767,3.3498235,17z/data=!4m6!3m5!1s0x103b93c636694a15:0x9c6060ccb6245c9!8m2!3d6.5845455!4d3.3497964!16s%2Fg%2F11fqprprv3?entry=tts&g_ep=EgoyMDI1MDcwNi4wIPu8ASoASAFQAw%3D%3D&skid=d78aa456-d84f-4602-b922-7b036fec7b5f",
        images: ['Voitheia-Photos/Project-Photos/p31.webp','Voitheia-Photos/Project-Photos/p32.webp','Voitheia-Photos/Project-Photos/p33.webp','Voitheia-Photos/Project-Photos/p34.webp','Voitheia-Photos/Project-Photos/p35.webp','Voitheia-Photos/Project-Photos/p36.webp'],
        description: `<p>Our third project brought together a larger team of volunteers from different grades, creating a vibrant and collaborative environment filled with energy and enthusiasm.With increased support and funding, we were able to collect a wider range of toys and valuable resources that brought visible excitement and joy to the children. We also organized a series of sports and fun games, encouraging every child to participate and enjoy the spirit of healthy competition — with prizes and cheers all around.</p>`
    },
    'littlesaints': {
        title: "Little Saint's Girls Orphanage",
        address: "Dorcas Osibona House, 15 Joe Ona Agbato Cl, Ogudu, Lagos 105102, Lagos, Nigeria",
        mapUrl: "https://www.google.com/maps/place/Little+Saints+Orphanage/@6.5710753,3.386348,17z",
        images: ['Voitheia-Photos/Project-Photos/p21.webp','Voitheia-Photos/Project-Photos/p22.webp','Voitheia-Photos/Project-Photos/p23.webp','Voitheia-Photos/Project-Photos/p24.webp','Voitheia-Photos/Project-Photos/p25.webp','Voitheia-Photos/Project-Photos/p26.webp'],
        description: `<p>Our second project created a unique space for our volunteers to connect with girls their own age, building a sense of shared understanding and empathy. We provided them with essential supplies, while also taking time to sit down and engage in heartfelt conversations that offered us a glimpse into their daily lives and personal stories. These sincere interactions left a lasting impression on our volunteers, deepening their compassion and broadening their perspective on the lives of others.</p>`
    },
    'heritage': {
        title: "Heritage Homes",
        address: "45 Faramobi Ajike St, Anthony, Lagos",
        mapUrl: "https://maps.app.goo.gl/oPwseXvsbDnAhjm97",
        images: ['Voitheia-Photos/Project-Photos/p11.webp','Voitheia-Photos/Project-Photos/p12.webp','Voitheia-Photos/Project-Photos/p13.webp','Voitheia-Photos/Project-Photos/p14.webp','Voitheia-Photos/Project-Photos/p15.webp','Voitheia-Photos/Project-Photos/p16.webp'],
        description: `<p>This was the very first initiative undertaken by Voitheia, marking the beginning of a meaningful journey. The staff at Heritage Homes welcomed us warmly and gave us the opportunity to spend time with the cheerful and energetic children. We provided them with thoughtful donations including books, stationery, toys, chocolates, and sweets, all collected through small contributions from our 15 founding members. Apart from the gifts, we connected with the children through interactive games and engaging activities, filling the day with laughter, learning, and joy.</p>`
    },
    'childrencentre': {
        title: "Children Centre",
        address: "11 13 Ojerinde St, Mushin, Lagos 102215, Lagos, Nigeria",
        mapUrl: "https://maps.app.goo.gl/js6NcZGCdPuNd8HfA",
        images: ['Voitheia-Photos/Project-Photos/p51.webp','Voitheia-Photos/Project-Photos/p52.webp','Voitheia-Photos/Project-Photos/p53.mp4','Voitheia-Photos/Project-Photos/p54.webp'],
        description: "<p>Our next initiative focused on supporting a vibrant local children’s center, bringing together an enthusiastic team of volunteers dedicated to enriching the daily lives of the youth. Thanks to generous community contributions, we were able to provide the center with a wealth of fresh educational materials, creative art kits, and interactive learning tools. These resources were carefully selected to stimulate curiosity and foster cognitive development, successfully equipping the facility with the essential assets needed to inspire and support the children throughout their ongoing learning journeys.</p>"
    },
    'vcft2025': {
        title: 'Voitheia Charity Football Tournament',
        address: "41 Ribadu Rd, Ikoyi, Lagos",
        mapUrl: 'https://maps.app.goo.gl/4JzfPwxoczEieveA7',
        images: ['Voitheia-Photos/Project-Photos/p61.webp','Voitheia-Photos/Project-Photos/p62.webp','Voitheia-Photos/Project-Photos/p63.mp4','Voitheia-Photos/Project-Photos/p64.webp','Voitheia-Photos/Project-Photos/p65.webp'],
        description: `<p>Our charity football tournament brought the community together for an exciting day of sportsmanship and collective purpose, successfully raising over 1.2 million naira to support amputees.<br> Thanks to the incredible energy of our players, spectators, and generous donors, these funds will go directly toward providing life-changing mobility aids, prosthetics, and essential rehabilitation resources.<br> The event beautifully blended competitive athletic spirit with deep empathy, proving that when a community teams up, we can achieve truly extraordinary goals both on and off the pitch.</p>`
    }
};

/* ==========================================
   2. CORE LOGIC
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-content');
    const footer = document.querySelector('footer');

    // --- FOOTER: hidden by default, no y shift so it never affects layout ---
    if (footer) {
        gsap.set(footer, { opacity: 0, visibility: 'hidden' });
    }

    let footerRevealed = false;

    const revealFooter = () => {
        if (!footerRevealed && footer) {
            footerRevealed = true;
            gsap.to(footer, { opacity: 1, visibility: 'visible', duration: 0.8, ease: 'power2.out' });
        }
    };

    const hideFooter = () => {
        if (footerRevealed && footer) {
            footerRevealed = false;
            gsap.to(footer, { opacity: 0, visibility: 'hidden', duration: 0.4, ease: 'power2.in' });
        }
    };

    // Also reveal footer when user scrolls down to it normally
    ScrollTrigger.create({
        trigger: footer,
        start: 'top 90%',
        onEnter: revealFooter
    });

    // --- CLOSE FUNCTION ---
    const closeFunc = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    // --- OPEN MODAL ---
   document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();

        const projectId = card.getAttribute('data-project-id');
        const data = projectsData[projectId];
        if (!data) return;

        document.getElementById('modalTitle').innerText = data.title;

        const addressLink = document.getElementById('modalAddress');
        addressLink.innerText = data.address;
        addressLink.href = data.mapUrl;
        addressLink.target = "_blank";

        document.getElementById('modalDesc').innerHTML = data.description;

        // --- NEW SMART GALLERY LOGIC ---
        const gallery = document.getElementById('modalGallery');
        // Use data.media if defined; otherwise fallback to data.images for safety
        const galleryItems = data.media || data.images || [];

        gallery.innerHTML = galleryItems.map(item => {
            // Check if the file path ends with a common video extension
            const isVideo = item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.ogg') || item.endsWith('.mov');
            
            if (isVideo) {
                // Returns a responsive video player with controls
                return `<video src="${item}" controls muted playsinline class="modal-video"></video>`;
            } else {
                // Returns your standard image
                return `<img src="${item}" alt="${data.title}">`;
            }
        }).join('');
        // --------------------------------

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        gsap.fromTo(modalContent,
            { scale: 0.8, opacity: 0, y: 50 },
            { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
        );
        });
    });

    // --- CLOSE TRIGGERS ---
    closeModalBtn.addEventListener('click', closeFunc);
    window.addEventListener('click', (e) => { if (e.target === modal) closeFunc(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeFunc(); });

    // --- SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('project-search');
    const cardTimers = new Map();

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();

            document.querySelectorAll('.project-card').forEach(card => {
                const projectId = card.getAttribute('data-project-id');
                const data = projectsData[projectId];
                if (!data) return;

                const searchable = (data.title + ' ' + data.description).toLowerCase();
                const words = query.split(' ').filter(Boolean);
                const matches = query === '' || words.every(word => searchable.includes(word));

                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                if (matches) {
                    if (cardTimers.has(card)) {
                        clearTimeout(cardTimers.get(card));
                        cardTimers.delete(card);
                    }
                    card.style.display = '';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    const timer = setTimeout(() => { card.style.display = 'none'; }, 300);
                    cardTimers.set(card, timer);
                }
            });

            // Check after timers would have fired
            setTimeout(() => {
                const anyVisible = [...document.querySelectorAll('.project-card')]
                    .some(c => c.style.display !== 'none' && c.style.opacity !== '0');

                if (!anyVisible) {
                    revealFooter();
                } else {
                    hideFooter();
                }
            }, 350);
        });
    }

    // --- REVEAL ANIMATION ---
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach((el, index) => {
        setTimeout(() => { el.classList.add('visible'); }, index * 150);
    });
});

// --- COPY TO CLIPBOARD ---
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const original = btn.innerHTML;
        
        // 1. Change the text content and set the state attribute
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.setAttribute('data-copied', 'true');

        // Helper functions to handle text color changes dynamically
        const forceWhiteText = () => { btn.style.color = '#ffffff'; };
        const clearInlineStyles = () => { btn.style.color = ''; };

        // If the user's mouse leaves immediately after clicking, ensure text flips to white
        if (!btn.matches(':hover')) {
            forceWhiteText();
        }

        // Active listeners only during the 2-second "Copied!" state
        btn.addEventListener('mouseleave', forceWhiteText);
        btn.addEventListener('mouseenter', clearInlineStyles);

        setTimeout(() => {
            // 2. Reset everything back to normal after 2 seconds
            btn.innerHTML = original;
            btn.removeAttribute('data-copied');
            clearInlineStyles(); // Clean up our temporary inline styling
            
            // Remove listeners so they don't stack up on subsequent clicks
            btn.removeEventListener('mouseleave', forceWhiteText);
            btn.removeEventListener('mouseenter', clearInlineStyles);
        }, 2000);
    });
}

// --- HEADER SCROLL ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});