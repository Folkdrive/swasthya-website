/**
 * Reusable Components - Elite Header, Footer, and Floating Actions
 * Updated with Dynamic Path Intelligence for local/server compatibility.
 */

function getPathPrefix() {
    // Detect if we are in a subfolder (services/, trainings/, resources/)
    const path = window.location.pathname;
    const isSubdir = path.includes('/services/') || path.includes('/trainings/') || path.includes('/resources/');
    return isSubdir ? '../' : './';
}

function getHeaderTemplate(prefix) {
    return `
        <header id="main-header" class="header">
            <div class="container flex flex-between" style="width: 100%;">
                <a href="${prefix}index.html" class="logo-elite">
                    <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya Food Consulting" class="logo-img">
                </a>
                <style>
                    .logo-elite {
                        display: inline-flex;
                        align-items: center;
                        text-decoration: none;
                        position: relative;
                        padding: 10px 0;
                        transition: all 0.4s ease;
                    }
                    .logo-img {
                        height: 48px;
                        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
                        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative;
                        z-index: 2;
                    }
                    .logo-elite::before {
                        content: '';
                        position: absolute;
                        inset: -5px -20px;
                        background: radial-gradient(circle at center, rgba(0, 137, 123, 0.08) 0%, transparent 70%);
                        opacity: 0;
                        transition: opacity 0.4s ease;
                        z-index: 1;
                        border-radius: 50%;
                    }
                    .logo-elite::after {
                        content: '';
                        position: absolute;
                        top: 0; left: -150%;
                        width: 100%; height: 100%;
                        background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
                        transform: skewX(-25deg);
                        z-index: 3;
                        pointer-events: none;
                    }
                    .logo-elite:hover::before {
                        opacity: 1;
                    }
                    .logo-elite:hover .logo-img {
                        transform: scale(1.05) translateY(-2px);
                        filter: drop-shadow(0 8px 20px rgba(0, 137, 123, 0.15));
                    }
                    .logo-elite:hover::after {
                        animation: logoShine 0.7s ease-out forwards;
                    }
                    @keyframes logoShine {
                        0% { left: -150%; }
                        100% { left: 150%; }
                    }
                </style>
                
                <nav class="nav-links" id="nav-links">
                    <div class="nav-links-inner" style="display: flex; align-items: center; gap: var(--sp-md);">
                        <a href="${prefix}index.html" class="nav-item">Home</a>
                        
                        <div class="nav-item-wrap">
                            <a href="${prefix}company.html" class="nav-item">Company <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-left: 4px; opacity: 0.6;"></i></a>
                            <div class="dropdown-menu">
                                <a href="${prefix}company.html" class="dropdown-item">About Swasthya</a>
                                <a href="${prefix}company.html#founder" class="dropdown-item">Founder's Vision</a>
                                <a href="${prefix}company.html#team" class="dropdown-item">Strategic Advisory Team</a>
                                <div class="dropdown-divider"></div>
                                <a href="${prefix}clientele.html" class="dropdown-item">Our Clientele (Partners)</a>
                            </div>
                        </div>

                        <div class="nav-item-wrap">
                            <a href="${prefix}services/index.html" class="nav-item">Services <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-left: 4px; opacity: 0.6;"></i></a>
                            <div class="dropdown-menu">
                                <a href="${prefix}services/fssai.html" class="dropdown-item">Licensing &amp; Regulatory</a>
                                <a href="${prefix}services/iso22000.html" class="dropdown-item">ISO &amp; Global Standards</a>
                                <a href="${prefix}services/audits.html" class="dropdown-item">Audits &amp; Hygiene Rating</a>
                                <a href="${prefix}services/technical.html" class="dropdown-item">Engineering &amp; NPD</a>
                            </div>
                        </div>

                        <div class="nav-item-wrap">
                            <a href="${prefix}trainings/index.html" class="nav-item">Trainings <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-left: 4px; opacity: 0.6;"></i></a>
                            <div class="dropdown-menu">
                                <a href="${prefix}trainings/index.html" class="dropdown-item">FoSTaC Certification</a>
                                <a href="${prefix}trainings/index.html#professional" class="dropdown-item">Advanced Quality Tools</a>
                                <a href="${prefix}trainings/index.html#safety" class="dropdown-item">Food Defense (TACCP/VACCP)</a>
                            </div>
                        </div>

                        <a href="${prefix}resources/blog.html" class="nav-item">Resources</a>
                        <a href="${prefix}contact.html" class="nav-item">Book Consultation</a>
                    </div>
                </nav>

                <div class="mobile-toggle" id="mobile-toggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
        </header>

        <!-- Mobile Full-Screen Overlay -->
        <div class="mobile-menu-overlay" id="mobile-menu-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 999; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: var(--transition-smooth); overflow-y: auto;">
            <div class="mobile-menu-content" style="padding: 100px 0;">
                <nav style="text-align: center; display: flex; flex-direction: column; gap: var(--sp-md);">
                    <a href="${prefix}index.html" style="font-size: 1.5rem; font-weight: 700; color: var(--clr-secondary);">Home</a>
                    <div class="dropdown-divider" style="width: 40px; margin: 0 auto;"></div>
                    
                    <a href="${prefix}company.html" style="font-size: 1.5rem; font-weight: 700; color: var(--clr-secondary);">Company</a>
                    <a href="${prefix}clientele.html" style="font-size: 1.1rem; color: var(--clr-primary);">Our Clientele</a>
                    <div class="dropdown-divider" style="width: 40px; margin: 0 auto;"></div>

                    <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--clr-text-muted); margin-bottom: -10px;">Consultancy</p>
                    <a href="${prefix}services/fssai.html" style="font-size: 1.1rem; font-weight: 600;">Licensing &amp; FSSAI</a>
                    <a href="${prefix}services/iso22000.html" style="font-size: 1.1rem; font-weight: 600;">ISO Certifications</a>
                    <a href="${prefix}services/audits.html" style="font-size: 1.1rem; font-weight: 600;">Audits</a>
                    <a href="${prefix}services/technical.html" style="font-size: 1.1rem; font-weight: 600;">Engineering</a>
                    <div class="dropdown-divider" style="width: 40px; margin: 0 auto;"></div>

                    <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--clr-text-muted); margin-bottom: -10px;">Training</p>
                    <a href="${prefix}trainings/index.html" style="font-size: 1.1rem; font-weight: 600;">FoSTaC Academy</a>
                    <div class="dropdown-divider" style="width: 40px; margin: 0 auto;"></div>

                    <a href="${prefix}resources/blog.html" style="font-size: 1.5rem; font-weight: 700;">Resources</a>
                    <a href="${prefix}contact.html" style="font-size: 1.5rem; font-weight: 700; color: var(--clr-primary); margin-top: 20px;">Book Consultation</a>
                </nav>
            </div>
        </div>
    `;
}

function getFooterTemplate(prefix) {
    return `
        <footer class="footer-elite" style="background: var(--clr-secondary); padding: var(--sp-3xl) 0 var(--sp-xl); color: white; margin-top: auto;">
            <div class="container">
                <div class="footer-grid-elite" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: var(--sp-2xl);">
                    <div class="footer-brand">
                        <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" style="filter: brightness(0) invert(1); height: 50px; margin-bottom: var(--sp-md);">
                        <p class="text-small" style="color: var(--clr-text-muted); max-width: 300px; font-size: 0.82rem; line-height: 1.7;">
                            QCI &amp; APEDA approved food safety consultants. Established 2022 in Bengaluru. FSSAI licensing, ISO 22000, FSSC 22000, BRC-Food, audits &amp; FoSTaC training.
                        </p>
                        <div style="margin-top: 1.5rem; display: flex; gap: 8px; flex-wrap: wrap;">
                            <span style="font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; color: rgba(255,255,255,0.6);">QCI</span>
                            <span style="font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; color: rgba(255,255,255,0.6);">APEDA</span>
                            <span style="font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; color: rgba(255,255,255,0.6);">FoSTaC</span>
                            <span style="font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; color: rgba(255,255,255,0.6);">BRCGS</span>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <h4 style="color: white; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Solutions</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/fssai.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">FSSAI Compliance</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/iso22000.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">ISO Certifications</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/audits.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">Third Party Audits</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/technical.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">Product Development</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-links">
                        <h4 style="color: white; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Resources</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}resources/blog.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">Industry Insights (Blog)</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}clientele.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">Our Clientele (Partners)</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}verify.html" style="color: var(--clr-text-muted); font-size: 0.95rem;">Validate Certificate</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h4 style="color: white; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Global HQ</h4>
                        <p class="text-small" style="font-size: 0.85rem; margin-bottom: var(--sp-sm); line-height: 1.6;">
                            <i class="fas fa-map-marker-alt text-primary" style="margin-right: 8px;"></i>
                            #102, Bluejay Atmosphere-2, Karihobanahalli, Andrahalli Main Road, Bengaluru, 560073
                        </p>
                        <p class="text-small" style="font-size: 0.85rem; margin-bottom: var(--sp-sm);"><i class="fas fa-envelope text-primary" style="margin-right: 8px;"></i> thammaiah.nd@swasthyafoodconsulting.com</p>
                        <p class="text-small" style="font-size: 0.8rem; margin-bottom: var(--sp-sm); color: var(--clr-text-muted); padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.05);">
                            <i class="fas fa-file-invoice text-primary" style="margin-right: 8px;"></i> GSTIN: 29AJFPD0474P1ZV
                        </p>
                        <div class="flex" style="gap: var(--sp-sm); margin-top: var(--sp-md); display: flex;">
                             <a href="https://www.linkedin.com/in/thammaiah-n-d-b9468925" target="_blank" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: white;"><i class="fab fa-linkedin-in"></i></a>
                             <a href="#" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: white;"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: var(--sp-xl); margin-top: var(--sp-2xl); color: var(--clr-text-muted); font-size: 0.8rem;">
                    <div class="flex" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--sp-md);">
                        <p>&copy; 2026 Swasthya Food Consulting. Bengaluru, India. <br> <span style="font-size: 0.75rem; opacity: 0.7; margin-top: 5px; display: inline-block;">Designed and Developed by <a href="https://www.folkdrive.in" target="_blank" style="color: var(--clr-primary); text-decoration: none; font-weight: 600;">Folkdrive India Pvt Ltd</a></span></p>
                        <div class="flex" style="display: flex; gap: var(--sp-md);">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function getFloatingActionsTemplate(prefix) {
    return `
        <div class="floating-actions-elite" style="position: fixed; bottom: 30px; right: 30px; z-index: 100; display: flex; flex-direction: column; gap: 12px; align-items: flex-end;">
            <a href="https://wa.me/918105787342" target="_blank" style="width: 56px; height: 56px; border-radius: 50%; background: #25D366; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.7rem; box-shadow: 0 8px 24px rgba(37,211,102,0.4); transition: var(--transition-smooth);" title="Chat on WhatsApp: +91 81057 87342">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
        <style>
            .floating-actions-elite a:hover { transform: scale(1.12) translateY(-3px); box-shadow: 0 14px 32px rgba(37,211,102,0.5) !important; }
        </style>
    `;
}


function injectComponents() {
    const prefix = getPathPrefix();

    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) headerPlaceholder.innerHTML = getHeaderTemplate(prefix);

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = getFooterTemplate(prefix);

    // Inject Floating Actions
    const floatingPlaceholder = document.getElementById('floating-placeholder');
    if (floatingPlaceholder) floatingPlaceholder.innerHTML = getFloatingActionsTemplate(prefix);

    // Initialize Behaviors
    initHeader();
}

function initHeader() {
    const header = document.getElementById('main-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            overlay.classList.toggle('active');
            const bars = mobileToggle.querySelectorAll('.bar');
            if (overlay.classList.contains('active')) {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';
                if (bars[0]) bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                if (bars[1]) bars[1].style.opacity = '0';
                if (bars[2]) bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                document.body.style.overflow = 'hidden';
            } else {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                if (bars[0]) bars[0].style.transform = 'none';
                if (bars[1]) { bars[1].style.opacity = '1'; bars[1].style.transform = 'none'; }
                if (bars[2]) bars[2].style.transform = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            document.body.style.overflow = 'auto';
            const bars = mobileToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.transform = 'none';
        });
    });
}

// Run injection
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}
