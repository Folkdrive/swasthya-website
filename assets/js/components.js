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
                            Home
                        </a>
                        <div class="nav-dropdown-wrap">
                            <a href="${prefix}company.html" class="nav-link-portal">
                                About Us
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
                                Core Services
                            </a>
                            <div class="nav-dropdown">
                                <a href="${prefix}services/fssai.html">FSSAI Regulatory Support</a>
                                <a href="${prefix}services/iso22000.html">FSMS Consultancy</a>
                                <a href="${prefix}services/audits.html">Audits</a>
                                <a href="${prefix}services/technical.html">Engineering and Technical Services</a>
                            </div>
                        </div>
                    </div>

                    <!-- CENTER HUB -->
                    <div class="logo-portal-wrap">
                        <a href="${prefix}index.html" class="logo-portal-circle-glass">
                            <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" class="logo-portal-img">
                        </a>
                    </div>

                    <!-- Right Section -->
                    <div class="nav-group nav-right">
                        <div class="nav-dropdown-wrap">
                            <a href="${prefix}trainings/index.html" class="nav-link-portal">
                                Trainings
                            </a>
                            <div class="nav-dropdown">
                                <a href="${prefix}trainings/index.html#regulatory">Regulatory Trainings</a>
                                <a href="${prefix}trainings/index.html#iso">FSMS Trainings</a>
                                <a href="${prefix}trainings/index.html#audit">Audit Trainings</a>
                                <a href="${prefix}trainings/index.html#engineering">Engineering Trainings</a>
                                <a href="${prefix}trainings/index.html#fostac">FoSTaC Trainings</a>
                                <a href="${prefix}trainings/index.html#brcgs">BRCGS Trainings</a>
                                <a href="${prefix}trainings/index.html#custom">Custom Tailored</a>
                            </div>
                        </div>
                        <a href="${prefix}verify.html" class="nav-link-portal">
                            Verify Certificate
                        </a>
                        <a href="${prefix}contact.html" class="nav-link-portal contact-pill">
                            Contact
                        </a>
                    </div>

                    <div class="mobile-toggle-portal" id="mobile-toggle">
                        <span></span><span></span><span></span>
                    </div>
                </div>

            <style>
                .header-portal {
                    position: fixed;
                    top: 0; left: 0; width: 100%; max-width: 100vw;
                    z-index: 1000;
                    background: transparent;
                    padding-top: 5px;
                    transition: all 0.4s ease;
                }
                
                .header-portal.scrolled {
                    padding-top: 0;
                }
                
                .header-portal.scrolled .nav-container-svg {
                    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.08));
                    height: 100px;
                }
                
                @media (max-width: 1024px) {
                    .header-portal.scrolled .nav-container-svg { height: 70px; }
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
                    top: -40px; left: 50%;
                    transform: translateX(-50%);
                    z-index: 30;
                }
                .logo-portal-circle-glass {
                    width: 145px; height: 145px;
                    background: transparent; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    border: none;
                    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer;
                    box-sizing: border-box;
                    box-shadow: none;
                }
                .logo-portal-img { 
                    height: 125px; width: auto; 
                    max-width: 100%;
                    object-fit: contain;
                    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .logo-portal-circle-glass:hover { transform: scale(1.1); }
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
                    .logo-portal-wrap { top: -18px; }
                    .logo-portal-circle-glass { width: 90px; height: 90px; border: none; background: transparent; }
                    .logo-portal-img { height: 75px; }
                }
            </style>
        </header>

        <!-- Mobile Cyber-Grid Menu -->
        <div class="cyber-menu-overlay" id="mobile-menu-overlay">
            <!-- Animated background mesh -->
            <div class="cyber-mesh-bg"></div>
            <div class="cyber-grid-lines"></div>

            <!-- Close button -->
            <button class="cyber-close-btn" id="cyber-close-btn" aria-label="Close Menu">
                <span></span><span></span>
            </button>

            <!-- Logo at top -->
            <div class="cyber-menu-logo">
                <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya">
                <span>Swasthya</span>
            </div>

            <!-- Main nav tiles -->
            <div class="cyber-tiles-grid">
                <a href="${prefix}index.html" class="cyber-tile" style="--tile-color: #00f2ff; --delay: 0.05s">
                    <div class="cyber-tile-glow"></div>

                    <span>Home</span>
                </a>
                <a href="${prefix}company.html" class="cyber-tile" style="--tile-color: #FB8C00; --delay: 0.1s">
                    <div class="cyber-tile-glow"></div>

                    <span>About Us</span>
                </a>

                <!-- Services Accordion -->
                <div class="cyber-tile-wrapper" style="--tile-color: #7c3aed; --delay: 0.15s">
                    <div class="cyber-tile cyber-accordion-trigger" data-accordion="services">
                        <div class="cyber-tile-glow"></div>

                        <span>Services</span>

                    </div>
                    <div class="cyber-accordion-content" id="acc-services">
                        <a href="${prefix}services/fssai.html">FSSAI Regulatory</a>
                        <a href="${prefix}services/iso22000.html">FSMS Consultancy</a>
                        <a href="${prefix}services/audits.html">Audits</a>
                        <a href="${prefix}services/technical.html">Engineering & Technical</a>
                        <a href="${prefix}services/index.html">View All</a>
                    </div>
                </div>

                <!-- Trainings Accordion -->
                <div class="cyber-tile-wrapper" style="--tile-color: #10b981; --delay: 0.2s">
                    <div class="cyber-tile cyber-accordion-trigger" data-accordion="trainings">
                        <div class="cyber-tile-glow"></div>

                        <span>Trainings</span>

                    </div>
                    <div class="cyber-accordion-content" id="acc-trainings">
                        <a href="${prefix}trainings/index.html#fostac">FoSTaC Training</a>
                        <a href="${prefix}trainings/index.html#brcgs">BRCGS Training</a>
                        <a href="${prefix}trainings/index.html#iso">FSMS Training</a>
                        <a href="${prefix}trainings/index.html#audit">Audit Training</a>
                        <a href="${prefix}trainings/index.html">Full Catalog</a>
                    </div>
                </div>

                <a href="${prefix}clientele.html" class="cyber-tile" style="--tile-color: #f43f5e; --delay: 0.25s">
                    <div class="cyber-tile-glow"></div>

                    <span>Clients</span>
                </a>
                <a href="${prefix}verify.html" class="cyber-tile" style="--tile-color: #f59e0b; --delay: 0.3s">
                    <div class="cyber-tile-glow"></div>

                    <span>Verify Certificate</span>
                </a>
            </div>

            <!-- Sub links row -->
            <div class="cyber-sub-links">
                <a href="${prefix}company.html#founder">Founder</a>
                <a href="${prefix}company.html#timeline">Our Evolution</a>
                <a href="${prefix}services/fssai.html">FSSAI</a>
                <a href="${prefix}services/audits.html">Audits</a>
                <a href="${prefix}company.html#accreditations">Accreditations</a>
            </div>

            <!-- CTA + social -->
            <div class="cyber-footer-cta">
                <a href="${prefix}contact.html" class="cyber-contact-btn">
                    Contact Us
                </a>
                <div class="cyber-social">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=swasthya%20food%20consulting&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A80190283&position=0" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://wa.me/918105787342" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>

        <style>
        /* =============================================
           CYBER-GRID MOBILE MENU
        ============================================= */
        .cyber-menu-overlay {
            position: fixed;
            inset: 0;
            z-index: 999;
            background: #04040f;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
            padding: 20px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
            overflow: hidden;
        }
        .cyber-menu-overlay.active {
            opacity: 1;
            pointer-events: all;
        }

        /* Animated mesh bg */
        .cyber-mesh-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(-45deg, #04040f, #0a0a2a, #06061a, #0d0d20);
            background-size: 400% 400%;
            animation: cyberMeshFlow 12s ease infinite;
            z-index: 0;
        }
        @keyframes cyberMeshFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        /* Grid lines overlay */
        .cyber-grid-lines {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(rgba(0,242,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,242,255,0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 1;
        }

        /* Close button */
        .cyber-close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(0,242,255,0.3);
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .cyber-close-btn:hover { background: rgba(0,242,255,0.15); border-color: #00f2ff; }
        .cyber-close-btn span {
            position: absolute;
            width: 18px;
            height: 2px;
            background: white;
            border-radius: 2px;
        }
        .cyber-close-btn span:first-child { transform: rotate(45deg); }
        .cyber-close-btn span:last-child  { transform: rotate(-45deg); }

        /* Logo */
        .cyber-menu-logo {
            position: relative;
            z-index: 5;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .cyber-menu-logo img {
            width: 65px;
            height: 65px;
            object-fit: contain;
            filter: brightness(0) invert(1);
            transition: all 0.5s ease;
        }

        .cyber-menu-logo span {
            font-family: 'Outfit', sans-serif;
            font-size: 1.4rem;
            font-weight: 800;
            color: white;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        /* Main tile grid */
        .cyber-tiles-grid {
            position: relative;
            z-index: 5;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            width: 100%;
            max-width: 380px;
        }

        .cyber-tile-wrapper {
            grid-column: span 1;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .cyber-tile {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 22px 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            text-decoration: none;
            color: white;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            width: 100%;
        }

        .acc-arrow {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 0.7rem !important;
            opacity: 0.5;
            transition: transform 0.3s ease;
        }
        .cyber-tile-wrapper.active .acc-arrow { transform: rotate(180deg); opacity: 1; }

        .cyber-accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            background: rgba(255,255,255,0.03);
            border-radius: 12px;
        }

        .cyber-tile-wrapper.active .cyber-accordion-content {
            max-height: 400px;
            padding: 5px 0;
            margin-top: 5px;
            border: 1px solid rgba(0,242,255,0.2);
        }
        .cyber-accordion-content a {
            padding: 10px 15px;
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 600;
            border-bottom: 1px solid rgba(255,255,255,0.03);
            text-align: center;
        }
        .cyber-accordion-content a:last-child { border-bottom: none; }
        .cyber-accordion-content a:hover { color: #00f2ff; background: rgba(0,242,255,0.05); }

        .cyber-tile {
            /* Spring pop animation on open */
            opacity: 0;
            transform: scale(0.7) translateY(20px);
        }
        .cyber-menu-overlay.active .cyber-tile {
            opacity: 1;
            transform: scale(1) translateY(0);
            transition-delay: var(--delay, 0s);
        }
        .cyber-tile:hover, .cyber-tile:active {
            background: rgba(255,255,255,0.1);
            border-color: var(--tile-color);
            transform: scale(1.06);
            box-shadow: 0 0 20px rgba(0,0,0,0.4), 0 0 30px var(--tile-color), inset 0 0 15px rgba(255,255,255,0.03);
        }

        .cyber-tile-glow {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 60px;
            background: var(--tile-color);
            filter: blur(20px);
            opacity: 0.3;
            border-radius: 50%;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .cyber-tile:hover .cyber-tile-glow { opacity: 0.6; }

        .cyber-tile i {
            font-size: 1.6rem;
            color: var(--tile-color);
            filter: drop-shadow(0 0 8px var(--tile-color));
            transition: transform 0.3s ease;
        }
        .cyber-tile:hover i { transform: scale(1.2) rotate(-5deg); }

        .cyber-tile span {
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(255,255,255,0.85);
        }

        /* Sub links */
        .cyber-sub-links {
            position: relative;
            z-index: 5;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            max-width: 380px;
        }
        .cyber-sub-links a {
            font-size: 0.75rem;
            font-weight: 600;
            color: rgba(255,255,255,0.5);
            text-decoration: none;
            padding: 5px 14px;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 100px;
            transition: all 0.25s ease;
            letter-spacing: 0.05em;
        }
        .cyber-sub-links a:hover {
            color: #00f2ff;
            border-color: rgba(0,242,255,0.4);
            background: rgba(0,242,255,0.06);
        }

        /* Footer CTA */
        .cyber-footer-cta {
            position: relative;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
        }
        .cyber-contact-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 36px;
            background: linear-gradient(135deg, #FB8C00, #FF6B6B);
            color: white;
            font-weight: 800;
            font-size: 0.95rem;
            text-decoration: none;
            border-radius: 100px;
            letter-spacing: 0.05em;
            box-shadow: 0 8px 25px rgba(251,140,0,0.35);
            transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0;
            transform: translateY(20px);
        }
        .cyber-menu-overlay.active .cyber-contact-btn {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.4s;
        }
        .cyber-contact-btn:hover { transform: scale(1.05); box-shadow: 0 12px 35px rgba(251,140,0,0.5); }

        .cyber-social {
            display: flex;
            gap: 12px;
        }
        .cyber-social a {
            width: 38px; height: 38px;
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            display: flex; align-items: center; justify-content: center;
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .cyber-social a:hover {
            background: rgba(0,242,255,0.1);
            border-color: #00f2ff;
            color: #00f2ff;
        }
        </style>
    `;
}

function getFooterTemplate(prefix) {
    return `
        <footer style="background: #ffffff; color: #004D40; padding: 80px 0 0; font-family: var(--ff-body, sans-serif); border-top: 1px solid rgba(0,0,0,0.08); position: relative; z-index: 10;">
            <div class="container">

                <!-- Top row -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1.4fr; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid rgba(0,0,0,0.08);">

                    <!-- Brand -->
                    <div>
                        <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" style="height: 54px; margin-bottom: 15px; display: block;">
                        <p style="font-size: 0.78rem; color: #1e293b; line-height: 1.6; margin: 0 0 15px; font-weight: 500;">India's Leading FoSTaC Training Partner, FSMS Consultants and BRCGS Training Partner</p>
                    </div>

                    <!-- Solutions -->
                    <div>
                        <p style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; margin: 0 0 18px;">Solutions</p>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <a href="${prefix}services/fssai.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">FSSAI Regulatory</a>
                            <a href="${prefix}services/iso22000.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">FSMS Consultancy</a>
                            <a href="${prefix}services/audits.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Audits</a>
                            <a href="${prefix}services/technical.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Engineering & Technical</a>
                            <a href="${prefix}trainings/index.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">FoSTaC Trainings</a>
                            <a href="${prefix}trainings/index.html#brcgs" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#004D40';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">BRCGS Trainings</a>
                        </div>
                    </div>

                    <!-- Company -->
                    <div>
                        <p style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; margin: 0 0 18px;">Company</p>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <a href="${prefix}company.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">About Us</a>
                            <a href="${prefix}company.html#founder" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Founder</a>
                            <a href="${prefix}company.html#timeline" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Our Evolution</a>
                            <a href="${prefix}clientele.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Clients</a>
                            <a href="${prefix}verify.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Verify Certificate</a>
                            <a href="${prefix}contact.html" style="font-size: 0.85rem; color: #0f172a; text-decoration: none; font-weight: 600; transition: all 0.3s;" onmouseover="this.style.color='#FB8C00';this.style.paddingLeft='5px'" onmouseout="this.style.color='#0f172a';this.style.paddingLeft='0'">Contact</a>
                        </div>
                    </div>

                    <!-- Contact -->
                    <div>
                        <p style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; margin: 0 0 18px;">Contact HQ</p>
                        <p style="font-size: 0.85rem; color: #1e293b; line-height: 1.6; margin: 0 0 12px; font-weight: 500;">
                            <i class="fas fa-map-marker-alt" style="color: #FB8C00; margin-right: 10px;"></i>
                            No. 102, Bluejay Atmosphere 2, Bengaluru 560073
                        </p>
                        <p style="font-size: 0.85rem; color: #1e293b; margin: 0 0 12px; word-break: break-all; font-weight: 500;">
                            <i class="fas fa-envelope" style="color: #FB8C00; margin-right: 10px;"></i>
                            thammaiah.nd@swasthyafoodconsulting.com
                        </p>
                        <p style="font-size: 0.75rem; color: #64748b; margin: 0 0 20px; font-weight: 600;">
                            <i class="fas fa-file-invoice" style="margin-right: 10px;"></i>GSTIN: 29AJFPD0474P1ZV
                        </p>
                        <div style="display: flex; gap: 12px;">
                            <a href="https://www.linkedin.com/search/results/all/?keywords=swasthya%20food%20consulting&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A80190283&position=0" target="_blank" style="width: 42px; height: 42px; border-radius: 50%; background: #f1f5f9; border: 1.5px solid #cbd5e1; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 1rem; text-decoration: none; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.background='#0077b5';this.style.color='white';this.style.borderColor='#0077b5';this.style.transform='translateY(-5px)'" onmouseout="this.style.background='#f1f5f9';this.style.color='#475569';this.style.borderColor='#cbd5e1';this.style.transform='translateY(0)'">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/918105787342" target="_blank" style="width: 42px; height: 42px; border-radius: 50%; background: #f1f5f9; border: 1.5px solid #cbd5e1; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 1rem; text-decoration: none; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.background='#25d366';this.style.color='white';this.style.borderColor='#25d366';this.style.transform='translateY(-5px)'" onmouseout="this.style.background='#f1f5f9';this.style.color='#475569';this.style.borderColor='#cbd5e1';this.style.transform='translateY(0)'">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bottom bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 30px 0;">
                    <p style="font-size: 0.8rem; color: #475569; margin: 0; font-weight: 500;">
                        &copy; 2026 Swasthya Food Consulting
                    </p>
                    <div style="display: flex; gap: 30px;">
                        <p style="font-size: 0.8rem; color: #475569; margin: 0; font-weight: 500;">
                            Developed by <a href="https://www.folkdrive.in" target="_blank" style="color: #004D40; text-decoration: none; font-weight: 800;">Folkdrive India Pvt Ltd</a>
                        </p>
                    </div>
                </div>

            </div>

            <!-- Mobile responsive footer -->
            <style>
            @media (max-width: 768px) {
                .container > div[style*="grid-template-columns: 1fr 1fr 1fr"] {
                    grid-template-columns: 1fr 1fr !important;
                    gap: 24px !important;
                }
            }
            @media (max-width: 480px) {
                .container > div[style*="grid-template-columns: 1fr 1fr 1fr"] {
                    grid-template-columns: 1fr !important;
                }
            }
            </style>
        </footer>
    `;
}

function getFloatingActionsTemplate(prefix) {
    return `
        <!-- Left Side: WhatsApp -->
        <div class="floating-left-elite" style="position: fixed; bottom: 30px; left: 30px; z-index: 1000;">
            <a href="https://wa.me/918105787342" target="_blank" class="elite-fab fab-whatsapp" title="Chat on WhatsApp">
                <span class="fab-pulse pulse-whatsapp"></span>
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>



        <style>

            
            .elite-fab {
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-decoration: none;
                z-index: 5;
            }
            .fab-whatsapp { background: #25D366; }

            .elite-fab:hover {
                transform: scale(1.15) rotate(10deg);
                box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            }

            .fab-pulse {
                position: absolute;
                inset: 0;
                border-radius: 50%;
                z-index: -1;
                opacity: 0.6;
                animation: fabPulse 2.5s infinite;
            }
            .pulse-whatsapp { background: #25D366; }

            @keyframes fabPulse {
                0% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.6); opacity: 0; }
                100% { transform: scale(1); opacity: 0; }
            }

            @media (max-width: 640px) {
                .elite-fab { width: 50px; height: 50px; font-size: 1.5rem; }
                .floating-left-elite { bottom: 20px; left: 20px; }
            }
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
    const cyberCloseBtn = document.getElementById('cyber-close-btn');

    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    });

    function openMenu() {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        const spans = mobileToggle ? mobileToggle.querySelectorAll('span') : [];
        if (spans[0]) spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        if (spans[1]) spans[1].style.opacity = '0';
        if (spans[2]) spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    }

    function closeMenu() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        const spans = mobileToggle ? mobileToggle.querySelectorAll('span') : [];
        if (spans[0]) spans[0].style.transform = 'none';
        if (spans[1]) { spans[1].style.opacity = '1'; spans[1].style.transform = 'none'; }
        if (spans[2]) spans[2].style.transform = 'none';
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            overlay.classList.contains('active') ? closeMenu() : openMenu();
        });
    }

    // Close via the dedicated X button inside the cyber menu
    if (cyberCloseBtn) {
        cyberCloseBtn.addEventListener('click', closeMenu);
    }

    // Close when any simple tile link is clicked
    if (overlay) {
        overlay.querySelectorAll('.cyber-tile:not(.cyber-accordion-trigger)').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        // Close when any accordion link is clicked
        overlay.querySelectorAll('.cyber-accordion-content a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Accordion Logic
    const accordionTriggers = document.querySelectorAll('.cyber-accordion-trigger');
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const wrapper = trigger.closest('.cyber-tile-wrapper');
            const isActive = wrapper.classList.contains('active');
            
            // Close all other accordions
            document.querySelectorAll('.cyber-tile-wrapper').forEach(w => w.classList.remove('active'));
            
            // Toggle current
            if (!isActive) wrapper.classList.add('active');
        });
    });
}

// Run injection
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}
