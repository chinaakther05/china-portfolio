
import React, { useState, useEffect } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const HireModal = ({ onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const actions = [
    {
      icon: "📄",
      label: "Download Resume",
      detail: "PDF Resume",
      href: "/China_Akther_Full_Stack_Developer_Resume.pdf",
      download: true,
      color: "#A78BFA",
    },
    {
      icon: "✉",
      label: "Send an Email",
      detail: "chinaakther05@gmail.com",
      href: "mailto:chinaakther05@gmail.com",
      color: "#F472B6",
    },
    {
      icon: "💬",
      label: "WhatsApp Me",
      detail: "Let's discuss an opportunity",
      href: "https://wa.me/8801933067666",
      color: "#34D399",
    },
  ];

  return (
    <div
      className="hire-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="hire-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="modal-icon">👩‍💻</div>

        <p className="modal-eyebrow">LET'S WORK TOGETHER</p>

        <h2 id="hire-title">
          Hire <span>China Akther</span>
        </h2>

        <p className="modal-description">
          Full-Stack Developer open to suitable job
          opportunities and professional collaborations.
        </p>

        <div className="hire-actions">
          {actions.map((item) => (
            <a
              key={item.label}
              href={item.href}
              download={item.download || undefined}
              target={item.download ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="hire-action"
              style={{ "--action-color": item.color }}
            >
              <span className="action-icon">{item.icon}</span>

              <span className="action-text">
                <strong>{item.label}</strong>
                <small>{item.detail}</small>
              </span>

              <span className="action-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        total > 0 ? (window.scrollY / total) * 100 : 0
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    const sectionElements = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sectionElements.forEach((section) =>
      observer.observe(section)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <style>{`
        .portfolio-navbar,
        .portfolio-navbar * {
          box-sizing: border-box;
        }

        .portfolio-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(7, 8, 15, 0.94);
          border-bottom: 1px solid rgba(167, 139, 250, 0.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          font-family: 'Sora', sans-serif;
          transition: background 0.25s, box-shadow 0.25s;
        }

        .portfolio-navbar.is-scrolled {
          background: rgba(7, 8, 15, 0.98);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
        }

        .nav-inner {
          max-width: 1200px;
          height: 72px;
          padding: 0 24px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .nav-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .nav-logo-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #c4b5fd;
          font-size: 20px;
          background: rgba(167, 139, 250, 0.10);
          border: 1px solid rgba(167, 139, 250, 0.25);
        }

        .nav-logo-name {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }

        .nav-logo-name span {
          color: #c4b5fd;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          padding: 10px 11px;
          color: #a1a1aa;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #c4b5fd;
          background: rgba(167, 139, 250, 0.07);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 50%;
          width: 14px;
          height: 2px;
          border-radius: 10px;
          background: #a78bfa;
          transform: translateX(-50%);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .open-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #6ee7b7;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        .open-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
        }

        .hire-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          border: 1px solid rgba(167, 139, 250, 0.4);
          border-radius: 10px;
          background: #a78bfa;
          color: #100c1d;
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .hire-btn:hover {
          background: #c4b5fd;
          transform: translateY(-1px);
        }

        .menu-toggle {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 12px 20px 22px;
          border-top: 1px solid rgba(167, 139, 250, 0.12);
          background: #090a13;
        }

        .mobile-link {
          display: block;
          padding: 13px 14px;
          border-radius: 9px;
          color: #a1a1aa;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s, color 0.2s;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #c4b5fd;
          background: rgba(167, 139, 250, 0.09);
        }

        .mobile-hire {
          margin-top: 8px;
          padding: 13px;
          border: 0;
          border-radius: 9px;
          background: #a78bfa;
          color: #100c1d;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .scroll-progress {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          background: linear-gradient(
            90deg, #f472b6, #a78bfa
          );
          transition: width 0.1s linear;
        }

        .hire-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(8px);
        }

        .hire-modal {
          position: relative;
          width: 100%;
          max-width: 440px;
          padding: 34px;
          border: 1px solid rgba(167, 139, 250, 0.24);
          border-radius: 22px;
          background: #10111f;
          color: #fff;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
          animation: modal-enter 0.22s ease-out;
        }

        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          color: #d4d4d8;
          cursor: pointer;
        }

        .modal-icon {
          display: grid;
          place-items: center;
          width: 54px;
          height: 54px;
          margin-bottom: 20px;
          border: 1px solid rgba(167, 139, 250, 0.3);
          border-radius: 15px;
          background: rgba(167, 139, 250, 0.10);
          font-size: 25px;
        }

        .modal-eyebrow {
          margin: 0 0 10px;
          color: #c4b5fd;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hire-modal h2 {
          margin: 0;
          font-size: 25px;
          line-height: 1.4;
        }

        .hire-modal h2 span {
          color: #c4b5fd;
        }

        .modal-description {
          margin: 12px 0 24px;
          color: #a1a1aa;
          font-size: 13px;
          line-height: 1.8;
        }

        .hire-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hire-action {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 13px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }

        .hire-action:hover {
          background: rgba(167, 139, 250, 0.07);
          border-color: var(--action-color);
        }

        .action-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 11px;
          background: rgba(167, 139, 250, 0.10);
          font-size: 19px;
        }

        .action-text {
          display: flex;
          flex: 1;
          min-width: 0;
          flex-direction: column;
          gap: 5px;
        }

        .action-text strong {
          font-size: 12px;
        }

        .action-text small {
          overflow-wrap: anywhere;
          color: #a1a1aa;
          font-size: 10px;
        }

        .action-arrow {
          color: #a1a1aa;
        }

        @media (max-width: 1100px) {
          .nav-inner {
            padding: 0 18px;
            gap: 12px;
          }

          .nav-link {
            padding: 10px 8px;
            font-size: 11px;
          }

          .open-badge {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .nav-inner {
            height: 68px;
          }
        }

        @media (max-width: 420px) {
          .nav-inner {
            padding: 0 14px;
          }

          .nav-logo-name {
            font-size: 15px;
          }

          .hire-btn {
            padding: 10px 12px;
            font-size: 11px;
          }

          .hire-modal {
            padding: 28px 20px 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-navbar *,
          .hire-overlay *,
          .hire-overlay {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <header
        className={`portfolio-navbar ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={() => {
              setActive("home");
              closeMenu();
            }}
          >
            <span className="nav-logo-icon">✦</span>
            <span className="nav-logo-name">
              China <span>Akther</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${
                  active === link.id ? "active" : ""
                }`}
                aria-current={
                  active === link.id ? "location" : undefined
                }
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <span className="open-badge">
              <span className="open-dot" />
              Open to Work
            </span>

            <button
              className="hire-btn"
              onClick={() => setShowModal(true)}
            >
              Hire Me <span>↗</span>
            </button>

            <button
              className="menu-toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((previous) => !previous)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />

        {isOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-link ${
                  active === link.id ? "active" : ""
                }`}
                onClick={() => {
                  setActive(link.id);
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}

            <button
              className="mobile-hire"
              onClick={() => {
                closeMenu();
                setShowModal(true);
              }}
            >
              Hire Me ↗
            </button>
          </nav>
        )}
      </header>

      {showModal && (
        <HireModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Navbar;
