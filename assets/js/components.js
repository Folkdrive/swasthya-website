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
                                <a href="${prefix}trainings/index.html#regulatory">Regulatory Trainings</a>
                                <a href="${prefix}trainings/index.html#iso">FSMS Trainings</a>
                                <a href="${prefix}trainings/index.html#audit">Audit Trainings</a>
                                <a href="${prefix}trainings/index.html#engineering">Engineering Trainings</a>
                                <a href="${prefix}trainings/index.html#fostac">FoSTaC Trainings</a>
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
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="${prefix}company.html" class="cyber-tile" style="--tile-color: #FB8C00; --delay: 0.1s">
                    <div class="cyber-tile-glow"></div>
                    <i class="fas fa-users"></i>
                    <span>About Us</span>
                </a>
                <a href="${prefix}services/index.html" class="cyber-tile" style="--tile-color: #7c3aed; --delay: 0.15s">
                    <div class="cyber-tile-glow"></div>
                    <i class="fas fa-layer-group"></i>
                    <span>Services</span>
                </a>
                <a href="${prefix}trainings/index.html" class="cyber-tile" style="--tile-color: #10b981; --delay: 0.2s">
                    <div class="cyber-tile-glow"></div>
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Trainings</span>
                </a>
                <a href="${prefix}clientele.html" class="cyber-tile" style="--tile-color: #f43f5e; --delay: 0.25s">
                    <div class="cyber-tile-glow"></div>
                    <i class="fas fa-building"></i>
                    <span>Clients</span>
                </a>
                <a href="${prefix}blog.html" class="cyber-tile" style="--tile-color: #f59e0b; --delay: 0.3s">
                    <div class="cyber-tile-glow"></div>
                    <i class="fas fa-blog"></i>
                    <span>Blog</span>
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
                    <i class="fas fa-paper-plane"></i> Contact Us
                </a>
                <div class="cyber-social">
                    <a href="https://www.linkedin.com/in/thammaiah-n-d-b9468925" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://wa.me/919980182600" target="_blank"><i class="fab fa-whatsapp"></i></a>
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
            width: 48px;
            height: 48px;
            object-fit: contain;
            filter: brightness(0) invert(1);
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
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            width: 100%;
            max-width: 380px;
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
        <footer style="background: #0d0c2e; color: white; padding: 40px 0 0; font-family: var(--ff-body, sans-serif);">
            <div class="container">

                <!-- Top row -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1.4fr; gap: 32px; padding-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.07);">

                    <!-- Brand -->
                    <div>
                        <img src="${prefix}assets/images/Swasthya-Food-Consulting.png" alt="Swasthya" style="filter: brightness(0) invert(1); height: 38px; margin-bottom: 10px; display: block;">
                        <p style="font-size: 0.75rem; color: rgba(255,255,255,0.5); line-height: 1.6; margin: 0 0 12px;">Bengaluru's premier BRCGS &amp; FoSTaC partner.<br>Est. 2022 &nbsp;·&nbsp; 135+ global partners.</p>
                        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; color: rgba(255,255,255,0.55);">QCI</span>
                            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; color: rgba(255,255,255,0.55);">APEDA</span>
                            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; color: rgba(255,255,255,0.55);">FoSTaC</span>
                            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; color: rgba(255,255,255,0.55);">BRCGS</span>
                        </div>
                    </div>

                    <!-- Solutions -->
                    <div>
                        <p style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.35); margin: 0 0 12px;">Solutions</p>
                        <div style="display: flex; flex-direction: column; gap: 7px;">
                            <a href="${prefix}services/fssai.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">FSSAI Regulatory</a>
                            <a href="${prefix}services/iso22000.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">FSMS Consultancy</a>
                            <a href="${prefix}services/audits.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Audits</a>
                            <a href="${prefix}services/technical.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Engineering</a>
                            <a href="${prefix}trainings/index.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">FoSTaC Trainings</a>
                            <a href="${prefix}trainings/index.html#brcgs" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#4DB6AC'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">BRCGS Trainings</a>
                        </div>
                    </div>

                    <!-- Company -->
                    <div>
                        <p style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.35); margin: 0 0 12px;">Company</p>
                        <div style="display: flex; flex-direction: column; gap: 7px;">
                            <a href="${prefix}company.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">About Us</a>
                            <a href="${prefix}company.html#founder" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Founder</a>
                            <a href="${prefix}company.html#timeline" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Our Evolution</a>
                            <a href="${prefix}clientele.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Clients</a>
                            <a href="${prefix}blog.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Blog</a>
                            <a href="${prefix}contact.html" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#FB8C00'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Contact</a>
                        </div>
                    </div>

                    <!-- Contact -->
                    <div>
                        <p style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.35); margin: 0 0 12px;">Contact HQ</p>
                        <p style="font-size: 0.78rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0 0 8px;">
                            <i class="fas fa-map-marker-alt" style="color: #FB8C00; margin-right: 6px;"></i>
                            Karihobanahalli, Bengaluru – 560073
                        </p>
                        <p style="font-size: 0.78rem; color: rgba(255,255,255,0.6); margin: 0 0 8px; word-break: break-all;">
                            <i class="fas fa-envelope" style="color: #FB8C00; margin-right: 6px;"></i>
                            thammaiah.nd@swasthyafoodconsulting.com
                        </p>
                        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.35); margin: 0 0 14px;">
                            <i class="fas fa-file-invoice" style="margin-right: 6px;"></i>GSTIN: 29AJFPD0474P1ZV
                        </p>
                        <div style="display: flex; gap: 8px;">
                            <a href="https://www.linkedin.com/in/thammaiah-n-d-b9468925" target="_blank" style="width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.8rem; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(10,102,194,0.3)';this.style.color='white'" onmouseout="this.style.background='rgba(255,255,255,0.06)';this.style.color='rgba(255,255,255,0.6)'">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/919980182600" target="_blank" style="width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.8rem; text-decoration: none; transition: all 0.2s;" onmouseover="this.style.background='rgba(37,211,102,0.3)';this.style.color='white'" onmouseout="this.style.background='rgba(255,255,255,0.06)';this.style.color='rgba(255,255,255,0.6)'">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Bottom bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; padding: 16px 0;">
                    <p style="font-size: 0.72rem; color: rgba(255,255,255,0.3); margin: 0;">
                        &copy; 2026 Swasthya Food Consulting &nbsp;·&nbsp;
                        <a href="https://www.folkdrive.in" target="_blank" style="color: #4DB6AC; text-decoration: none; font-weight: 600;">Folkdrive India Pvt Ltd</a>
                    </p>
                    <div style="display: flex; gap: 20px;">
                        <a href="#" style="font-size: 0.72rem; color: rgba(255,255,255,0.3); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.3)'">Privacy Policy</a>
                        <a href="#" style="font-size: 0.72rem; color: rgba(255,255,255,0.3); text-decoration: none;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.3)'">Terms</a>
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
        <div class="floating-actions-elite" style="position: fixed; bottom: 30px; left: 30px; z-index: 1000; display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
            <a href="https://wa.me/918105787342" target="_blank" class="whatsapp-btn-animated" title="Chat on WhatsApp: +91 81057 87342">
                <span class="whatsapp-pulse"></span>
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
        <style>
            .whatsapp-btn-animated {
                position: relative;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #25D366;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.85rem;
                box-shadow: 0 10px 25px rgba(37,211,102,0.3);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-decoration: none;
                z-index: 2;
            }
            .whatsapp-btn-animated:hover {
                transform: scale(1.15) rotate(10deg);
                box-shadow: 0 15px 35px rgba(37,211,102,0.45);
            }
            .whatsapp-pulse {
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background: #25D366;
                border-radius: 50%;
                z-index: -1;
                opacity: 0.7;
                animation: waPulse 2.5s infinite;
            }
            @keyframes waPulse {
                0% { transform: scale(1); opacity: 0.7; }
                50% { transform: scale(1.5); opacity: 0; }
                100% { transform: scale(1); opacity: 0; }
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

    // Close when any link inside the overlay is clicked
    if (overlay) {
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

// Run injection
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}
