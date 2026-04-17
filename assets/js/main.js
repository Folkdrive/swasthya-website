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
    // Training loader and verify engine are handled inline on those pages
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
   5. HERO SLIDER ENGINE
───────────────────────────────────────────── */

function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        const prevVideo = slides[currentSlide].querySelector('video');
        if (prevVideo && typeof prevVideo.pause === 'function') {
            prevVideo.pause();
        }

        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => {
            d.classList.remove('active');
            d.style.background = 'rgba(0,0,0,0.2)';
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        dots[index].style.background = 'var(--clr-primary)';
        
        const currentVideo = slides[index].querySelector('video');
        if (currentVideo && typeof currentVideo.play === 'function') {
            currentVideo.currentTime = 0;
            currentVideo.play().catch(e => console.warn('Video autoplay blocked or pending.', e));
        }

        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        stopSlider();
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlider() {
        if (slideInterval) clearInterval(slideInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlider();
        });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // Initial setup
    const initialVideo = slides[currentSlide].querySelector('video');
    if (initialVideo) {
        initialVideo.play().catch(e => console.warn('Initial video autoplay blocked.', e));
    }
    
    startSlider();
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
