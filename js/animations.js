// ===================================
// GSAP ANIMATIONS
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// HERO SECTION ANIMATIONS
// ===================================
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate hero content
    tl.from('.hero-greeting', {
        opacity: 0,
        y: 30,
        duration: 0.8
    })
        .from('.title-line', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2
        }, '-=0.4')
        .from('.hero-description', {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, '-=0.4')
        .from('.hero-buttons .btn', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.4')
        .from('.stat-item', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15
        }, '-=0.4');

    // Animate hero image
    gsap.from('.profile-card', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Animate floating badges
    gsap.from('.floating-badge', {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 1.2
    });

    // Continuous floating animation for badges
    gsap.to('.badge-1', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.badge-2', {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
    });

    gsap.to('.badge-3', {
        y: -18,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
    });

    // Scroll indicator animation
    gsap.from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.5
    });
}

// ===================================
// SECTION ANIMATIONS ON SCROLL
// ===================================
function initScrollAnimations() {

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // About section
    gsap.from('.about-image-wrapper', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    });

    // Service cards
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Portfolio items
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Resume timeline
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // Skills section
    gsap.utils.toArray('.skill-category').forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });

    // Animate skill bars
    gsap.utils.toArray('.skill-progress').forEach(bar => {
        const width = bar.style.width;

        gsap.from(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            width: 0,
            duration: 1.5,
            ease: 'power2.out'
        });
    });

    // Testimonial cards
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // Blog cards
    gsap.utils.toArray('.blog-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // Contact section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -80,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 80,
        duration: 1,
        ease: 'power3.out'
    });
}

// ===================================
// PARALLAX EFFECTS
// ===================================
function initParallaxEffects() {
    // Parallax for gradient orbs
    gsap.utils.toArray('.gradient-orb').forEach((orb, index) => {
        gsap.to(orb, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: (index + 1) * 150,
            ease: 'none'
        });
    });

    // Parallax for section backgrounds
    gsap.utils.toArray('.section').forEach(section => {
        const bg = section.querySelector('.section-bg');
        if (bg) {
            gsap.to(bg, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: -100,
                ease: 'none'
            });
        }
    });
}

// ===================================
// HOVER ANIMATIONS
// ===================================
function initHoverAnimations() {
    // Service cards hover
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// NAVBAR ANIMATION
// ===================================
function initNavbarAnimation() {
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
            className: 'scrolled',
            targets: navbar
        }
    });
}

// ===================================
// TEXT REVEAL ANIMATIONS
// ===================================
function initTextRevealAnimations() {
    // Split text into words for animation
    gsap.utils.toArray('.section-title').forEach(title => {
        const words = title.textContent.split(' ');
        title.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

        gsap.from(title.querySelectorAll('.word'), {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        });
    });
}

// ===================================
// SMOOTH SCROLL REVEAL
// ===================================
function initSmoothScrollReveal() {
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// ===================================
// CURSOR FOLLOW EFFECT (Optional)
// ===================================
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.5);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Scale cursor on hover over interactive elements
    document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 2,
                duration: 0.3
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        });
    });
}

// ===================================
// INITIALIZE ALL ANIMATIONS
// ===================================
window.addEventListener('load', () => {
    // Wait for page to load
    setTimeout(() => {
        initHeroAnimations();
        initScrollAnimations();
        initParallaxEffects();
        initHoverAnimations();
        initNavbarAnimation();
        // initTextRevealAnimations(); // Optional - can be heavy on performance
        initSmoothScrollReveal();
        // initCursorEffect(); // Optional - custom cursor

        console.log('GSAP animations initialized! ✨');
    }, 100);
});

// ===================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ===================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
