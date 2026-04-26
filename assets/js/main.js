/**
 * SWASTHYA INTERACTION ENGINE v3.0
 * Scroll reveals, header, counters, mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
    initRevealObserver();
    initSmoothScroll();
    initCounters();
    initHeroSlider();
    handleActiveNav();
    initTestimonialSlider();
    initTiltEffect(); // New 3D Interaction
});

/* ─────────────────────────────────────────────
   1. SCROLL REVEAL
───────────────────────────────────────────── */

function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────
   2. SMOOTH SCROLL (anchor links)
───────────────────────────────────────────── */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
            }
        });
    });
}

/* ─────────────────────────────────────────────
   3. ANIMATED NUMBER COUNTERS
   Run when .counter elements enter viewport
───────────────────────────────────────────── */

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => obs.observe(el));
}

function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    const text = el.dataset.target || el.textContent;
    const hasPlus = text.includes('+');
    const hasPercent = text.includes('%');
    
    // Support decimals by using parseFloat
    const target = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;

    const isDecimal = text.includes('.');
    const duration = 2000;
    const start = performance.now();

    function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        
        let current = eased * target;
        
        // Display with 1 decimal if target was decimal, else floor it
        let displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
        
        el.textContent = displayValue + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
        
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/* ─────────────────────────────────────────────
   4. ACTIVE NAV HIGHLIGHT
───────────────────────────────────────────── */

function handleActiveNav() {
    const currentUrl = window.location.href.split('#')[0].toLowerCase();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (!link.href) return;
        // Skip CTA buttons (Book Consultation etc.) — never highlight them
        if (link.classList.contains('btn')) return;

        const linkUrl = link.href.split('#')[0].toLowerCase();
        // Match exact URL
        if (currentUrl === linkUrl || currentUrl === linkUrl + 'index.html' || currentUrl + 'index.html' === linkUrl) {
            link.classList.add('active');
        }
    });
}
/* ─────────────────────────────────────────────
   5. HERO SLIDER ENGINE (5-Slide Elite)
───────────────────────────────────────────── */

function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('#slider-nav .dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');

    if (!slides.length) return;

    let current = 0;
    let timer;
    const INTERVAL = 5500;

    /* ── Show a specific slide ── */
    function goTo(index) {
        // Bounds
        index = (index + slides.length) % slides.length;

        // Remove active from current
        slides[current].classList.remove('active');
        if (dots[current]) {
            dots[current].classList.remove('active');
            dots[current].style.background = '';
        }

        current = index;

        // Activate new slide
        const activeSlide = slides[current];
        activeSlide.classList.add('active');

        // Restart Ken Burns by toggling the animation
        const bg = activeSlide.querySelector('.slide-bg-kenburns');
        if (bg) {
            bg.style.animation = 'none';
            // Force reflow
            void bg.offsetWidth;
            bg.style.animation = '';
        }

        if (dots[current]) {
            dots[current].classList.add('active');
        }
    }

    /* ── Auto-advance ── */
    function start() {
        stop();
        timer = setInterval(() => goTo(current + 1), INTERVAL);
    }

    function stop() {
        if (timer) clearInterval(timer);
    }

    /* ── Dot clicks ── */
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); start(); });
    });

    /* ── Arrow buttons ── */
    if (prevBtn) {
        prevBtn.addEventListener('click', () => { goTo(current - 1); start(); });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => { goTo(current + 1); start(); });
    }

    /* ── Pause on hover ── */
    const section = document.getElementById('hero-section');
    if (section) {
        section.addEventListener('mouseenter', stop);
        section.addEventListener('mouseleave', start);
    }

    /* ── Touch / Swipe support ── */
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) {
            delta > 0 ? goTo(current + 1) : goTo(current - 1);
            start();
        }
    }, { passive: true });

    /* ── Boot ── */
    goTo(0);
    start();
}


/* ─────────────────────────────────────────────
   6. TESTIMONIAL SLIDER ENGINE
───────────────────────────────────────────── */

function initTestimonialSlider() {
    const quoteEl = document.getElementById('testimonial-quote');
    const authorEl = document.getElementById('testimonial-author');
    const roleEl = document.getElementById('testimonial-role');
    const progressBar = document.getElementById('testimonial-progress');
    
    if (!quoteEl || !authorEl || !roleEl) return;

    const testimonials = [
        {
            quote: "Since the day I requested Thammaiah sir for consultancy, it's like we have found a gem in this field. He took all risks to attend us in an interior location. His punctuality and dedication are a true inspiration.",
            author: "Ms. Lalitha Angirasa",
            role: "MD, Ibbani Food Industries"
        },
        {
            quote: "The training session was amazing, knowledgeable, and interactive with various case studies. Thammaiah is a true expert whose passion for food safety is evident throughout. I personally recommend Swasthya Food Consulting.",
            author: "Nidheesh KK",
            role: "DGM, Epigamia (Drums Food International)"
        },
        {
            quote: "Thank you for the great course. Your expertise and subject knowledge have been invaluable in helping our team understand and apply complex safety concepts to execute their duties efficiently.",
            author: "Brahmaiah E",
            role: "Corporate QAM, Dodla Dairy Limited"
        },
        {
            quote: "Great presentation style with lots of opportunities to ask questions. The session more than met my expectations. Exceptional quality and professional approach.",
            author: "Dinkar TV",
            role: "QAM, ID Fresh Food (India) Pvt Ltd"
        }
    ];

    let currentIndex = 0;

    function updateTestimonial() {
        // Start animation
        quoteEl.classList.add('fade-out');
        authorEl.classList.add('fade-out');
        roleEl.classList.add('fade-out');
        
        // Reset progress bar
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            const data = testimonials[currentIndex];

            quoteEl.textContent = `"${data.quote}"`;
            authorEl.textContent = data.author;
            roleEl.textContent = data.role;

            // Remove fade-out, trigger fade-in
            quoteEl.classList.remove('fade-out');
            authorEl.classList.remove('fade-out');
            roleEl.classList.remove('fade-out');
            
            // Start progress bar
            setTimeout(() => {
                progressBar.style.transition = 'width 4s linear';
                progressBar.style.width = '100%';
            }, 50);

        }, 500);
    }

    // Initial progress bar start
    progressBar.style.width = '100%';
    
    // Set interval for rotation
    setInterval(updateTestimonial, 4000);
}

/* ─────────────────────────────────────────────
   7. 3D MOUSE-FOLLOW TILT EFFECT (Elite)
───────────────────────────────────────────── */

function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.card, .capability-card, .stat-card, .industry-item-card, .founder-portrait-container');
    
    tiltCards.forEach(card => {
        // Ensure parent doesn't clip the 3D pop-out
        if (card.parentElement) card.parentElement.style.perspective = "1000px";
        
        card.style.transition = "transform 0.1s ease-out";
        card.style.transformStyle = "preserve-3d";
        card.style.willChange = "transform";
        
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Bold Tilt intensity (increased to 25 degrees for visibility)
            const rotateX = ((y - centerY) / centerY) * -25;
            const rotateY = ((x - centerX) / centerX) * 25;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.06, 1.06, 1.06)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}
