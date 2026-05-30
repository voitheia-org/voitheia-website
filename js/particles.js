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