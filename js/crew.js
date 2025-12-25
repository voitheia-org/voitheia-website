/**
 * @file crew.js
 * @description Manages the Crew page UI interactions including accordions and search filtering.
 * @version 1.1.0
 * @requires GSAP
 */

document.addEventListener("DOMContentLoaded", () => {
    /** @type {NodeListOf<Element>} Collection of all accordion sections */
    const items = document.querySelectorAll(".accordion-item");

    /**
     * INITIALIZATION:
     * Sets the default state by opening the TOP-MOST (first) year category.
     * Index [0] targets the first element in the list.
     */
    if (items.length > 0) {
        // CHANGED: items[items.length - 1] -> items[0]
        openAccordion(items[0], true);
    }

    /**
     * EVENT DELEGATION:
     * High-performance click listener for accordion headers.
     */
    document.addEventListener("click", (e) => {
        const header = e.target.closest(".accordion-header");
        if (!header) return;

        const item = header.parentElement;
        if (!item.classList.contains("open")) {
            openAccordion(item, false);
        } else {
            closeAccordion(item);
        }
    });

    /**
     * Handles the opening animation of an accordion section.
     * Uses GSAP for smooth height and opacity transitions.
     * * @param {HTMLElement} item - The parent accordion element.
     * @param {boolean} skipCloseAll - Prevents closing other sections if true.
     */
    function openAccordion(item, skipCloseAll = false) {
        const content = item.querySelector(".accordion-content");
        if (!content) return;

        // REMOVED: The loop that was closing all other items

        item.classList.add("open");
        const icon = item.querySelector(".toggle-icon");
        if (icon) icon.textContent = "-";

        // Dynamic height calculation for GSAP
        gsap.set(content, { height: "auto", opacity: 0 });
        const targetHeight = content.scrollHeight;
        gsap.set(content, { height: 0 });

        gsap.to(content, {
            height: targetHeight,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out"
        });
    }

    /**
     * Handles the closing animation of an accordion section.
     * @param {HTMLElement} item - The parent accordion element.
     */
    function closeAccordion(item) {
        const content = item.querySelector(".accordion-content");
        if (!content) return;

        item.classList.remove("open");
        const icon = item.querySelector(".toggle-icon");
        if (icon) icon.textContent = "+";

        gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut"
        });
    }

    /**
     * MASS CONTROL HANDLERS:
     * Triggers for expanding or collapsing the entire directory.
     */
    const expandBtn = document.getElementById("expand-all");
    const collapseBtn = document.getElementById("collapse-all");

    if (expandBtn) {
        expandBtn.onclick = () => {
            items.forEach(item => openAccordion(item, true));
        };
    }

    if (collapseBtn) {
        collapseBtn.onclick = () => {
            items.forEach(closeAccordion);
        };
    }

    /**
     * SEARCH ENGINE:
     * Filters visibility of .crew-card elements based on name or role text.
     */
    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
        searchBar.addEventListener("input", function() {
            const filter = this.value.toLowerCase();
            document.querySelectorAll(".crew-card").forEach(card => {
                const name = card.querySelector("h3").innerText.toLowerCase();
                const role = card.querySelector("p").innerText.toLowerCase();
                
                // Toggle display style based on substring match
                card.style.display = (name.includes(filter) || role.includes(filter)) 
                    ? "block" 
                    : "none";
            });
        });
    }

        /* PARTICLES.JS - SMOOTH WEB CONFIGURATION   */

    particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 130, // High density to fill the center
        "density": {
            "enable": true,
            "value_area": 900
        }
        },
        "color": { "value": "#FF6B6B" },
        "shape": { "type": "circle" },
        "opacity": {
        "value": 0.3, // Lower base opacity for a subtler look
        "random": true
        },
        "size": {
        "value": 2.5,
        "random": true
        },
        "line_linked": {
        "enable": true,
        "distance": 160, 
        "color": "#FF6B6B",
        "opacity": 0.2, // Very light lines by default
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 1.2, // Slower base movement for a "floating" effect
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "grab" 
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 180, // Reduced from 250 to make it less "aggressive"
            "line_linked": {
            "opacity": 0.4 // Soft highlight instead of a solid snap
            }
        },
        "push": {
            "particles_nb": 4
        }
        }
    },
    "retina_detect": true
    });
});