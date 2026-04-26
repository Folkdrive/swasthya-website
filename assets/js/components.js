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
        <header id="main-header" class="header-portal">
            
            <div class="nav-container-svg">
                <!-- LIGHT VIBRANT MESH (Prismatic Sunset) -->
                <div class="glass-mesh-bg vibrant-pulse"></div>
                
                <div class="glass-shimmer-layer"></div>

                <!-- LIGHT GLASS NAVBAR -->
                <svg viewBox="0 0 1200 120" class="navbar-svg" preserveAspectRatio="none">
                    <path d="M0,0 H1200 V50 L780,50 C700,50 680,105 600,105 C520,105 500,50 420,50 L0,50 Z" fill="rgba(255, 255, 255, 0.75)" />
                </svg>
            </div>

            <div class="nav-content-overlay container">
                    <!-- Left Section -->
                    <div class="nav-group nav-left">
                        <a href="${prefix}index.html" class="nav-link-portal">
                            <span class="nav-art-symbol"><i class="fas fa-home"></i></span> Home
                        </a>
                        <div class="nav-dropdown-wrap">
                            <a href="${prefix}company.html" class="nav-link-portal">
                                <span class="nav-art-symbol"><i class="fas fa-users"></i></span> About Us
                            </a>
                            <div class="nav-dropdown">
                                <a href="${prefix}company.html">Overview</a>
                                <a href="${prefix}company.html#founder">Founder</a>
                                <a href="${prefix}company.html#vision">Vision, Mission & Values</a>
                                <a href="${prefix}company.html#timeline">Our Evolution</a>
                                <a href="${prefix}company.html#accreditations">Accreditations</a>
                                <a href="${prefix}clientele.html">Esteemed Clients</a>
                            </div>
                        </div>
                        <div class="nav-dropdown-wrap">
                            <a href="${prefix}services/index.html" class="nav-link-portal">
                                <span class="nav-art-symbol"><i class="fas fa-layer-group"></i></span> Core Services
                            </a>
                            <div class="nav-dropdown">
                                <a href="${prefix}services/fssai.html">FSSAI Regulatory Support</a>
                                <a href="${prefix}services/iso22000.html">FSMS Consultancy</a>
                                <a href="${prefix}services/audits.html">Audits</a>
                                <a href="${prefix}services/technical.html">Engineering Services</a>
                                <a href="${prefix}services/technical.html#technical">Technical Support</a>
                            </div>
                        </div>
                    </div>

                    <!-- CENTER HUB -->
                    <div class="logo-portal-wrap">
                        <div class="logo-glow-ring"></div>
                        <a href="${prefix}index.html" class="logo-portal-circle-glass">
                            <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" class="logo-portal-img">
                        </a>
                    </div>

                    <!-- Right Section -->
                    <div class="nav-group nav-right">
                        <div class="nav-dropdown-wrap">
                            <a href="${prefix}trainings/index.html" class="nav-link-portal">
                                <span class="nav-art-symbol"><i class="fas fa-chalkboard-teacher"></i></span> Trainings
                            </a>
                            <div class="nav-dropdown">
                                <a href="${prefix}trainings/index.html">FoSTaC Trainings</a>
                                <a href="${prefix}trainings/index.html#haccp">HACCP Trainings</a>
                                <a href="${prefix}trainings/index.html#iso">ISO Trainings</a>
                                <a href="${prefix}trainings/index.html#fssc">FSSC Trainings</a>
                                <a href="${prefix}trainings/index.html#brcgs">BRCGS Trainings</a>
                                <a href="${prefix}trainings/index.html#custom">Custom Tailored</a>
                            </div>
                        </div>
                        <a href="${prefix}blog.html" class="nav-link-portal">
                            <span class="nav-art-symbol"><i class="fas fa-blog"></i></span> Blog
                        </a>
                        <a href="${prefix}contact.html" class="nav-link-portal contact-pill">
                            <span class="nav-art-symbol"><i class="fas fa-paper-plane"></i></span> Contact
                        </a>
                    </div>

                    <div class="mobile-toggle-portal" id="mobile-toggle">
                        <span></span><span></span><span></span>
                    </div>
                </div>

            <style>
                .header-portal {
                    position: fixed;
                    top: 0; left: 0; width: 100%;
                    z-index: 1000;
                    background: transparent;
                    padding-top: 5px;
                }
                
                .nav-container-svg {
                    position: relative;
                    height: 110px;
                    width: 100%;
                    overflow: hidden;
                    /* LIGHT VIBRANT GLOW */
                    filter: drop-shadow(0 0 20px rgba(255, 171, 145, 0.4));
                }
                
                /* LIGHT VIBRANT GRADIENT MIXTURE (Fading) */
                .glass-mesh-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, 
                        #ffffff 0%, 
                        #e0f7fa 25%, 
                        #f3e5f5 50%, 
                        #e8f5e9 75%,
                        #ffffff 100%
                    );
                    background-size: 400% 400%;
                    opacity: 0.95; /* High opacity for bright, stunning look */
                    animation: meshFlow 10s ease-in-out infinite;
                    z-index: 1;
                    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 H1200 V50 L780,50 C700,50 680,105 600,105 C520,105 500,50 420,50 L0,50 Z"/></svg>');
                    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 H1200 V50 L780,50 C700,50 680,105 600,105 C520,105 500,50 420,50 L0,50 Z"/></svg>');
                }

                @keyframes meshFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .glass-shimmer-layer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transform: translateX(-100%);
                    animation: shimmerSweep 7s infinite ease-in-out;
                    z-index: 5;
                    pointer-events: none;
                }
                @keyframes shimmerSweep {
                    0% { transform: translateX(-100%) skewX(-20deg); }
                    20%, 100% { transform: translateX(200%) skewX(-20deg); }
                }

                .navbar-svg {
                    width: 100%; height: 100%;
                    display: block;
                    backdrop-filter: blur(25px) saturate(250%);
                    -webkit-backdrop-filter: blur(25px) saturate(250%);
                    z-index: 2;
                }

                .nav-content-overlay {
                    position: absolute;
                    top: 0; left: 50%;
                    transform: translateX(-50%);
                    width: 100%; height: 50px; 
                    display: flex; justify-content: space-between; align-items: center;
                    z-index: 20;
                }

                .nav-group {
                    display: flex; gap: var(--sp-lg);
                    width: 42%; align-items: center;
                }
                .nav-left { justify-content: flex-end; padding-right: 80px; }
                .nav-right { justify-content: flex-start; padding-left: 80px; }
                
                /* Dropdown styling */
                .nav-dropdown-wrap {
                    position: relative;
                }
                .nav-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(15px);
                    border-radius: 12px;
                    padding: 10px 0;
                    min-width: 250px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255,255,255,0.4);
                    z-index: 100;
                    pointer-events: none;
                }
                .nav-dropdown-wrap:hover .nav-dropdown {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(0);
                    pointer-events: all;
                }
                .nav-dropdown::before {
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.95);
                    border-left: 1px solid rgba(255,255,255,0.4);
                    border-top: 1px solid rgba(255,255,255,0.4);
                }
                .nav-dropdown a {
                    display: block;
                    padding: 8px 20px;
                    color: #12113a;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }
                .nav-dropdown a:hover {
                    color: #FB8C00;
                    background: rgba(251, 140, 0, 0.05);
                    padding-left: 25px;
                }

                .nav-art-symbol {
                    font-size: 0.75rem;
                    margin-right: 8px;
                    opacity: 0.9;
                    transition: all 0.4s ease;
                    color: #12113a;
                    display: inline-block;
                }
                .nav-link-portal:hover .nav-art-symbol {
                    transform: scale(1.2) rotate(15deg);
                    filter: drop-shadow(0 0 8px rgba(251, 140, 0, 0.4));
                    color: #FB8C00;
                }

                .nav-link-portal {
                    color: #12113a; text-decoration: none;
                    font-weight: 800; font-size: 0.85rem;
                    text-transform: uppercase; letter-spacing: 0.15em;
                    transition: all 0.4s ease;
                    display: flex; align-items: center;
                    text-shadow: 0 1px 5px rgba(255,255,255,0.8);
                }
                .nav-link-portal:hover { color: #FB8C00; transform: translateY(-2px); }

                .contact-pill {
                    background: rgba(251, 140, 0, 0.1);
                    padding: 8px 22px; border-radius: 40px;
                    border: 1px solid rgba(251, 140, 0, 0.4);
                    backdrop-filter: blur(8px);
                }
                .contact-pill:hover { background: rgba(251, 140, 0, 0.2); border-color: #FB8C00; }

                /* LOGO HUB */
                .logo-portal-wrap {
                    position: absolute;
                    top: 5px; left: 50%;
                    transform: translateX(-50%);
                    z-index: 30;
                }
                .logo-portal-circle-glass {
                    width: 100px; height: 100px;
                    background: white; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    border: 4px solid #FB8C00;
                    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer; overflow: hidden;
                    box-sizing: border-box;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                }
                .logo-portal-img { 
                    height: 60px; width: auto; 
                    max-width: 85%;
                    object-fit: contain;
                    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .logo-portal-circle-glass:hover { transform: scale(1.05) rotate(5deg); border-color: #FF8A65; }
                .logo-portal-circle-glass:hover .logo-portal-img { transform: rotate(360deg); }

                .mobile-toggle-portal {
                    display: none; flex-direction: column; gap: 6px; cursor: pointer; z-index: 50; position: absolute; right: 20px; top: 25px;
                }
                .mobile-toggle-portal span {
                    display: block; width: 30px; height: 3px; background: #12113a; border-radius: 3px; transition: all 0.3s ease;
                }

                @media (max-width: 1024px) {
                    .nav-group { display: none; }
                    .mobile-toggle-portal { display: flex; }
                    .nav-container-svg { height: 75px; }
                    .logo-portal-wrap { top: 0; }
                    .logo-portal-circle-glass { width: 85px; height: 85px; border-color: #12113a; }
                    .logo-portal-img { height: 45px; }
                }
            </style>
        </header>

        <!-- Mobile Overlay -->
        <div class="mobile-menu-overlay-glass" id="mobile-menu-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255, 183, 77, 0.95), rgba(255, 138, 101, 0.98)); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); z-index: 999; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: all 0.5s ease;">
            <div class="mobile-menu-content" style="padding: 80px 0; text-align: center; overflow-y: auto; max-height: 100vh; width: 100%;">
                <nav style="display: flex; flex-direction: column; gap: var(--sp-lg); padding-bottom: 50px;">
                    <a href="${prefix}index.html" style="font-size: 1.5rem; font-weight: 800; color: white; text-decoration: none;">HOME</a>
                    
                    <div style="color: white;">
                        <span style="font-size: 1.5rem; font-weight: 800; display: block; margin-bottom: 10px;">ABOUT US</span>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <a href="${prefix}company.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Overview</a>
                            <a href="${prefix}company.html#founder" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Founder</a>
                            <a href="${prefix}company.html#vision" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Vision, Mission & Values</a>
                            <a href="${prefix}company.html#timeline" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Our Evolution</a>
                            <a href="${prefix}company.html#accreditations" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Accreditations & Affiliations</a>
                            <a href="${prefix}clientele.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Esteemed Clients</a>
                        </div>
                    </div>

                    <div style="color: white;">
                        <span style="font-size: 1.5rem; font-weight: 800; display: block; margin-bottom: 10px;">CORE SERVICES</span>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <a href="${prefix}services/fssai.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">FSSAI Regulatory Support</a>
                            <a href="${prefix}services/iso22000.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">FSMS Consultancy</a>
                            <a href="${prefix}services/audits.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Audits</a>
                            <a href="${prefix}services/technical.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Engineering Services</a>
                            <a href="${prefix}services/technical.html#technical" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Technical Support</a>
                        </div>
                    </div>

                    <div style="color: white;">
                        <span style="font-size: 1.5rem; font-weight: 800; display: block; margin-bottom: 10px;">TRAININGS</span>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <a href="${prefix}trainings/index.html" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">FoSTaC Trainings</a>
                            <a href="${prefix}trainings/index.html#haccp" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">HACCP Trainings</a>
                            <a href="${prefix}trainings/index.html#iso" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">ISO Trainings</a>
                            <a href="${prefix}trainings/index.html#fssc" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">FSSC Trainings</a>
                            <a href="${prefix}trainings/index.html#brcgs" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">BRCGS Trainings</a>
                            <a href="${prefix}trainings/index.html#custom" style="font-size: 1rem; color: rgba(255,255,255,0.8); text-decoration: none;">Custom Tailored Trainings</a>
                        </div>
                    </div>

                    <a href="${prefix}blog.html" style="font-size: 1.5rem; font-weight: 800; color: white; text-decoration: none;">BLOG</a>
                    <div style="margin-top: 10px;">
                        <a href="${prefix}contact.html" style="font-size: 1.2rem; font-weight: 800; color: white; text-decoration: none; padding: 12px 30px; border: 2px solid white; border-radius: 50px; display: inline-block;">CONTACT US</a>
                    </div>
                </nav>
            </div>
        </div>
    `;
}

function getFooterTemplate(prefix) {
    return `
        <footer class="footer-elite tex-bg" style="background-color: #12113a; padding: var(--sp-3xl) 0 var(--sp-xl); color: white; margin-top: auto; position: relative;">
            <div class="container" style="position: relative; z-index: 2;">
                <div class="footer-grid-elite" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: var(--sp-2xl);">
                     <div class="footer-brand">
                        <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" style="filter: brightness(0) invert(1); height: 50px; margin-bottom: var(--sp-md);">
                        <p class="text-small" style="color: rgba(255,255,255,0.7); max-width: 300px; font-size: 0.85rem; line-height: 1.8;">
                            A premium one-stop solution for food manufacturers and food service establishments. Established 2022 in Bengaluru. Guiding organizations through complex compliance and quality assurance.
                        </p>
                        <div style="margin-top: 1.8rem; display: flex; gap: 8px; flex-wrap: wrap;">
                            <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05);">QCI</span>
                            <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05);">APEDA</span>
                            <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05);">FoSTaC</span>
                            <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border: 1px solid rgba(255,255,255,0.15); border-radius: 100px; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05);">BRCGS</span>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <h4 style="color: white; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Solutions</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/fssai.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-mint)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">FSSAI Regulatory</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/iso22000.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-mint)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">FSMS Consultancy</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/audits.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-mint)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Audits</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}services/technical.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-mint)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Engineering Services</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-links">
                        <h4 style="color: white; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Trainings</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}trainings/index.html" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-yellow)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">FoSTaC Trainings</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}trainings/index.html#haccp" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-yellow)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">HACCP Trainings</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}trainings/index.html#iso" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-yellow)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">ISO &amp; FSSC Trainings</a></li>
                            <li style="margin-bottom: 0.8rem;"><a href="${prefix}trainings/index.html#brcgs" style="color: rgba(255,255,255,0.7); font-size: 0.95rem; text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='var(--clr-yellow)'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">BRCGS Trainings</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h4 style="color: white; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--sp-lg);">Contact HQ</h4>
                        <p class="text-small" style="font-size: 0.85rem; margin-bottom: var(--sp-sm); line-height: 1.6; color: rgba(255,255,255,0.85);">
                            <i class="fas fa-map-marker-alt" style="margin-right: 8px; color: var(--clr-coral);"></i>
                            #102, Bluejay Atmosphere-2, Karihobanahalli, Andrahalli Main Road, Bengaluru, 560073
                        </p>
                        <p class="text-small" style="font-size: 0.85rem; margin-bottom: var(--sp-sm); color: rgba(255,255,255,0.85);"><i class="fas fa-envelope" style="margin-right: 8px; color: var(--clr-coral);"></i> thammaiah.nd@swasthyafoodconsulting.com</p>
                        <p class="text-small" style="font-size: 0.8rem; margin-bottom: var(--sp-sm); color: rgba(255,255,255,0.5); padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
                            <i class="fas fa-file-invoice" style="margin-right: 8px; color: var(--clr-text-muted);"></i> GSTIN: 29AJFPD0474P1ZV
                        </p>
                        <div class="flex" style="gap: 12px; margin-top: var(--sp-md); display: flex;">
                             <a href="https://www.linkedin.com/in/thammaiah-n-d-b9468925" target="_blank" style="width: 42px; height: 42px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s ease;" onmouseover="this.style.background='var(--clr-ocean)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="fab fa-linkedin-in"></i></a>
                             <a href="#" style="width: 42px; height: 42px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s ease;" onmouseover="this.style.background='var(--clr-ocean)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: var(--sp-xl); margin-top: var(--sp-2xl); color: rgba(255,255,255,0.5); font-size: 0.85rem;">
                    <div class="flex" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--sp-md);">
                        <p>&copy; 2026 Swasthya Food Consulting. Bengaluru, India. <br> <span style="font-size: 0.75rem; opacity: 0.7; margin-top: 6px; display: inline-block;">Designed and Developed by <a href="https://www.folkdrive.in" target="_blank" style="color: var(--clr-mint); text-decoration: none; font-weight: 600;">Folkdrive India Pvt Ltd</a></span></p>
                        <div class="flex" style="display: flex; gap: var(--sp-lg);">
                            <a href="#" style="color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Privacy Policy</a>
                            <a href="#" style="color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.3s ease;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Terms of Service</a>
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
            <a href="https://wa.me/918105787342" target="_blank" style="position: relative; width: 56px; height: 56px; border-radius: 50%; background: #25D366; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.7rem; box-shadow: 0 8px 24px rgba(37,211,102,0.4); transition: var(--transition-smooth);" title="Chat on WhatsApp: +91 81057 87342">
                <span class="fab-ring"></span>
                <i class="fab fa-whatsapp" style="position: relative; z-index: 2;"></i>
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
            const spans = mobileToggle.querySelectorAll('span');
            if (overlay.classList.contains('active')) {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';
                if (spans[0]) spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                if (spans[1]) spans[1].style.opacity = '0';
                if (spans[2]) spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                document.body.style.overflow = 'hidden';
            } else {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                if (spans[0]) spans[0].style.transform = 'none';
                if (spans[1]) { spans[1].style.opacity = '1'; spans[1].style.transform = 'none'; }
                if (spans[2]) spans[2].style.transform = 'none';
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
            const spans = mobileToggle.querySelectorAll('span');
            if (spans[0]) spans[0].style.transform = 'none';
            if (spans[1]) spans[1].style.opacity = '1';
            if (spans[2]) spans[2].style.transform = 'none';
        });
    });
}

// Run injection
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}
