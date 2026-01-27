// Animation JavaScript for Ziyani Mouad Portfolio - Lightweight & Performance Optimized

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initTypedText();
    initAOS();
});

// Particle System - Lightweight
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50, // Reduced for performance
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#b91c1c"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#b91c1c",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 4, // Reduced for performance
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: false // Disabled for performance
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Typed Text Effect
function initTypedText() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Full Stack Developer',
                'YouCode Student',
                'Web Enthusiast',
                'Problem Solver',
                'Creative Thinker'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });
    }
}

// AOS (Animate On Scroll) Initialization
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // Reduced for performance
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 0,
            anchorPlacement: 'top-bottom'
        });
    }
}

// Performance optimization - Reduce animations on low-end devices
function optimizeAnimations() {
    const isLowEnd = () => {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return true;
        }
        
        // Check device memory (if available)
        if (navigator.deviceMemory && navigator.deviceMemory < 4) {
            return true;
        }
        
        // Check connection speed (if available)
        if (navigator.connection && navigator.connection.effectiveType && 
            ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType)) {
            return true;
        }
        
        return false;
    };
    
    if (isLowEnd()) {
        // Disable or reduce animations
        document.body.classList.add('reduce-animations');
        
        // Remove particle effects
        const particles = document.getElementById('particles-js');
        if (particles) {
            particles.style.display = 'none';
        }
        
        // Disable AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({
                disable: true
            });
        }
    }
}

// Run optimization
optimizeAnimations();
