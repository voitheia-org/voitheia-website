const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Function to check if the device has a mouse pointer or is phone-sized
const isMousePointerAvailable = () => {
    return window.matchMedia("(pointer: fine)").matches;
};

const updateCursorVisibility = () => {
    if (isMousePointerAvailable()) {
        cursor.style.display = 'block';
        follower.style.display = 'block';
    } else {
        cursor.style.display = 'none';
        follower.style.display = 'none';
    }
};

// Call once at the start
updateCursorVisibility();

// Add event listener for device orientation or viewport changes
window.addEventListener('resize', updateCursorVisibility);

if (isMousePointerAvailable()) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            duration: 0, // Instant response
            x: e.clientX - 10,
            y: e.clientY - 10,
            ease: 'none' // No easing for the main cursor
        });

        gsap.to(follower, {
            duration: 0.01, // Snappier feel
            x: e.clientX - 15,
            y: e.clientY - 15,
            ease: 'power2.out' // Smooth easing for follower
        });
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to([cursor, follower], {
                scale: 1.5,
                duration: 0.2, // Slightly faster scale
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to([cursor, follower], {
                scale: 1,
                duration: 0.2, // Slightly faster scale
                ease: 'power2.out'
            });
        });
    });

    // Hide cursors when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
        follower.style.opacity = 0;
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = 1;
        follower.style.opacity = 1;
    });
}
