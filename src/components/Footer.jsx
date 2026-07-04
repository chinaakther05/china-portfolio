// Footer.jsx — simple, on-theme version
import React from "react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, label: "Facebook", href: "https://www.facebook.com/chiana.chiana.257030", color: "#1877F2" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/china-akther-a384b23a2/", color: "#0A66C2" },
  { icon: <GitHubIcon />,   label: "GitHub",   href: "https://github.com/chinaakther05", color: "#a78bfa" },
];

const navLinks = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "skills",   label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

const Footer = () => (
  <footer style={{
    position: "relative",
    background: "#07080f",
    padding: "30px 24px",
    fontFamily: "'Sora', sans-serif",
    overflow: "hidden",
  }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
      @keyframes rgb-shift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }

      .footer-top-line {
        height: 1px; width: 100%;
        background: linear-gradient(90deg, transparent, #f472b6, #a78bfa, #60a5fa, #34d399, transparent);
        background-size: 200% auto;
        animation: rgb-shift 5s linear infinite;
        margin-bottom: 26px;
      }

      .footer-row {
        max-width: 1100px; margin: 0 auto;
        display: flex; align-items: center; justify-content: space-between;
        flex-wrap: wrap; gap: 16px;
      }

      .footer-name {
        font-size: 14px; font-weight: 700;
        background: linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa);
        background-size: 200% auto;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: rgb-shift 5s linear infinite;
      }
      .footer-name span {
        color: rgba(255,255,255,0.35); font-weight: 400;
        -webkit-text-fill-color: rgba(255,255,255,0.35);
      }

      .footer-nav { display: flex; gap: 20px; flex-wrap: wrap; }
      .footer-nav a {
        font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
        letter-spacing: .04em; text-transform: uppercase;
        color: rgba(255,255,255,0.45); text-decoration: none;
        transition: color .2s ease;
      }
      .footer-nav a:hover { color: #a78bfa; }

      .footer-socials { display: flex; gap: 10px; align-items: center; }
      .footer-social-btn {
        width: 34px; height: 34px; border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        color: rgba(255,255,255,0.55);
        transition: all .25s ease;
      }
      .footer-social-btn:hover {
        transform: translateY(-2px);
      }

      .footer-bottom {
        max-width: 1100px; margin: 20px auto 0;
        padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
        text-align: center;
        font-family: 'DM Mono', monospace; font-size: 10.5px;
        color: rgba(255,255,255,0.28); letter-spacing: .03em;
      }
      .footer-bottom span.accent {
        background: linear-gradient(90deg, #f472b6, #a78bfa);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; font-weight: 600;
      }
    `}</style>

    <div className="footer-top-line" />

    <div className="footer-row">
      <div className="footer-name">
        China Akther <span>· Full Stack Developer</span>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>{link.label}</a>
        ))}
      </nav>

      <div className="footer-socials">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="footer-social-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = s.color;
              e.currentTarget.style.borderColor = `${s.color}55`;
              e.currentTarget.style.background = `${s.color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>

    <div className="footer-bottom">
      © 2026 <span className="accent">China Akther</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;