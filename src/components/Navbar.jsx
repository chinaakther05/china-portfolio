// Navbar.jsx — Fully Enhanced & Requirement Compliant Version
import React, { useState, useEffect } from "react";

const HireModal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // ✅ scroll lock
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = ""; // ✅ restore
    };
  }, [onClose]);

  const actions = [
    { icon: "📄", label: "Download Resume", sub: "PDF • Updated 2026", href: "Resume.pdf", download: true, color: "#f472b6" },
    { icon: "📧", label: "Send an Email", sub: "chinaakther05@gmail.com", href: "mailto:chinaakther05@gmail.com", color: "#a78bfa" },
    { icon: "💬", label: "WhatsApp Me", sub: "+880 1933067666", href: "https://wa.me/8801933067666", color: "#34d399" },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn  { from{opacity:0;} to{opacity:1;} }
        @keyframes slideUp { from{opacity:0;transform:translateY(40px) scale(0.96);} to{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes rgb-shift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes shimmer { 0%{transform:translateX(-120%);} 100%{transform:translateX(120%);} }
        .hire-action-card { display:flex;align-items:center;gap:16px;padding:13px 16px;border-radius:14px;margin-bottom:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);text-decoration:none;transition:all .25s; }
        .hire-action-card:hover { transform:translateX(4px); }
        .hire-action-card .arrow { margin-left:auto;color:rgba(255,255,255,0.25);font-size:14px;transition:all .2s; }
        .hire-action-card:hover .arrow { color:#a78bfa;transform:translateX(4px); }
        .modal-close:hover { background:rgba(244,114,182,0.15)!important;border-color:rgba(244,114,182,0.3)!important;color:#f472b6!important; }
        @media (max-width: 480px) {
          .hire-modal-card { max-width: 92vw !important; }
        }
      `}</style>

      <div onClick={onClose} style={{
        position:"fixed",inset:0,zIndex:9999,
        background:"rgba(0,0,0,0.82)",backdropFilter:"blur(12px)",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:20, animation:"fadeIn .25s ease",
      }}>
        <div onClick={(e) => e.stopPropagation()} className="hire-modal-card" style={{
          background:"linear-gradient(145deg,#0d0e1a,#10111f)",
          border:"1px solid rgba(167,139,250,0.25)",
          borderRadius:24,width:"100%",maxWidth:460,
          position:"relative",overflow:"hidden",
          animation:"slideUp .35s cubic-bezier(0.22,1,0.36,1)",
          boxShadow:"0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,139,250,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>
          {/* Rainbow top bar */}
          <div style={{ height:3,background:"linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",backgroundSize:"200% auto",animation:"rgb-shift 3s linear infinite",position:"relative",overflow:"hidden" }}>
            <div style={{ position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)",animation:"shimmer 2s ease-in-out infinite" }} />
          </div>

          <div style={{ padding:"32px 32px 28px" }}>
            <button className="modal-close" onClick={onClose} style={{
              position:"absolute",top:18,right:18,
              background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",
              color:"rgba(255,255,255,0.5)",width:32,height:32,borderRadius:"50%",
              display:"flex",alignItems:"center",justifyContent:"center",
              cursor:"pointer",fontSize:14,transition:"all .2s",
            }}>✕</button>

            <div style={{ width:56,height:56,borderRadius:14,marginBottom:18,background:"linear-gradient(135deg,rgba(244,114,182,0.2),rgba(167,139,250,0.25))",border:"1px solid rgba(167,139,250,0.35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,boxShadow:"0 0 28px rgba(167,139,250,0.2)" }}>
              👩‍💻
            </div>

            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,fontWeight:500,color:"#a78bfa",letterSpacing:".12em",textTransform:"uppercase",marginBottom:8 }}>
              ✦ Let's work together
            </div>

            <h2 style={{ fontSize:24,fontWeight:800,color:"#fff",margin:"0 0 6px",letterSpacing:"-.02em" }}>
              Hire{" "}
              <span style={{ background:"linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"rgb-shift 4s linear infinite" }}>
                China Akther
              </span>
            </h2>

            <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.65,margin:"8px 0 24px",fontWeight:300 }}>
              Full Stack Developer — available for freelance projects, full-time roles, and exciting collaborations.
            </p>

            {actions.map((item, i) => (
              <a key={i} href={item.href} target={item.download ? undefined : "_blank"} rel="noopener noreferrer" download={item.download || undefined} className="hire-action-card"
                onMouseEnter={(e) => { e.currentTarget.style.background=`${item.color}10`; e.currentTarget.style.borderColor=`${item.color}40`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; }}
              >
                <div style={{ width:42,height:42,borderRadius:12,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,background:`${item.color}15`,border:`1px solid ${item.color}30` }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize:13,fontWeight:700,color:"#fff",marginBottom:3 }}>{item.label}</div>
                  <div style={{ fontSize:11,color:"rgba(255,255,255,0.35)",fontFamily:"'DM Mono',monospace" }}>{item.sub}</div>
                </div>
                <span className="arrow">↗</span>
              </a>
            ))}

            <div style={{ height:1,background:"linear-gradient(90deg,transparent,rgba(167,139,250,0.2),transparent)",margin:"18px 0 14px" }} />
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontSize:11,color:"rgba(255,255,255,0.25)",fontFamily:"'DM Mono',monospace" }}>
              <span style={{ width:5,height:5,borderRadius:"50%",background:"#34d399",boxShadow:"0 0 6px #34d399",display:"inline-block",animation:"blink 1.4s infinite" }} />
              Currently available for new projects
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [active, setActive]       = useState("home");
  const [scrolled, setScrolled]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    // ✅ Scroll progress
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);

    // ✅ IntersectionObserver — auto active section detect (All Sections Added)
    const sections = ["home", "about", "skills", "education", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  // ✅ close mobile menu automatically if the viewport is resized back to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Added 'skills' and 'education' to match all requirements
  const links = [
    { id: "home",      label: "Home"      },
    { id: "about",     label: "About"     },
    { id: "skills",    label: "Skills"    },
    { id: "education", label: "Education" },
    { id: "projects",  label: "Projects"  },
    { id: "contact",   label: "Contact"   },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Mono:wght@400;500;600&display=swap');
        @keyframes rgb-shift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes blink     { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes shimmer   { 0%{transform:translateX(-120%);} 100%{transform:translateX(120%);} }
        @keyframes fadeDown  { from{opacity:0;transform:translateY(-12px);} to{opacity:1;transform:translateY(0);} }
        @keyframes navGlow   { 0%,100%{box-shadow:0 1px 24px rgba(244,114,182,0.07);} 50%{box-shadow:0 1px 32px rgba(167,139,250,0.13);} }

        .nav-logo-sub { font-family:'DM Mono',monospace; font-size:9px; color:rgba(255,255,255,0.28); letter-spacing:3px; text-transform:uppercase; }

        /* Desktop Nav Link Layout Styling */
        .desktop-nav { display: none; align-items: center; gap: 2px; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
        }

        .nav-link {
          position:relative; text-decoration:none; padding:7px 12px; border-radius:10px;
          font-family:'DM Mono',monospace; font-size:13px; font-weight:600;
          letter-spacing:1px; text-transform:uppercase;
          transition:color .25s, background .25s; overflow:hidden;
        }
        .nav-link::before {
          content:''; position:absolute; inset:0; border-radius:10px;
          background:linear-gradient(135deg,rgba(244,114,182,0.1),rgba(167,139,250,0.1));
          opacity:0; transition:opacity .25s;
        }
        .nav-link:hover::before { opacity:1; }
        .nav-link .bar {
          position:absolute; bottom:4px; left:50%; transform:translateX(-50%);
          width:0; height:2px; border-radius:2px;
          background:linear-gradient(90deg,#f472b6,#a78bfa);
          transition:width .3s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link.active .bar, .nav-link:hover .bar { width:16px; }

        .hire-btn {
          border:none; font-family:'Sora',sans-serif; font-size:11px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase;
          padding:9px 22px; border-radius:100px; color:#07080f; cursor:pointer;
          position:relative; overflow:hidden; transition:transform .2s, box-shadow .2s;
          box-shadow:0 4px 20px rgba(167,139,250,0.35);
        }
        .hire-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa); background-size:200% auto; animation:rgb-shift 3s linear infinite; }
        .hire-btn::after  { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent); animation:shimmer 2.5s ease-in-out infinite; }
        .hire-btn span { position:relative; z-index:1; display:flex; align-items:center; gap:6px; color:#07080f; }
        .hire-btn:hover { transform:translateY(-2px) scale(1.04); box-shadow:0 8px 28px rgba(167,139,250,0.6); }

        .mobile-link { display:block; text-decoration:none; font-family:'DM Mono',monospace; font-size:11px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; padding:13px 16px; border-radius:12px; transition:all .2s; border:1px solid transparent; }
        .mobile-link:hover { background:rgba(167,139,250,0.08); border-color:rgba(167,139,250,0.2); color:#a78bfa !important; }

        /* Responsive Hamburger Controls */
        .hamburger { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:17px; transition:all .2s; flex-shrink:0; }
        .hamburger:hover { background:rgba(167,139,250,0.1); border-color:rgba(167,139,250,0.3); color:#a78bfa; }
        @media (min-width: 1024px) {
          .hamburger { display: none !important; }
        }

        /* ---------- Narrow-mobile overflow protection ---------- */
        .nav-right { display:flex; align-items:center; gap:10px; }
        @media (max-width: 480px) {
          .badge-open-to-work { display: none; }
          .hire-btn { padding: 8px 14px; font-size: 10px; letter-spacing: 1px; }
        }
        @media (max-width: 360px) {
          .hire-btn span span.hire-label { display: none; } /* keep icon only on very small screens */
        }
      `}</style>

      <header style={{
        position:"sticky", top:0, zIndex:100,
        background: scrolled ? "rgba(7,8,15,0.98)" : "rgba(7,8,15,0.92)",
        backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
        borderBottom:`1px solid ${scrolled ? "rgba(167,139,250,0.18)" : "rgba(167,139,250,0.08)"}`,
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
        fontFamily:"'Sora', sans-serif",
        transition:"all 0.4s ease",
        animation:"navGlow 6s ease-in-out infinite",
      }}>
        <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",height:66,gap:12 }}>

          {/* Logo */}
          <a href="#home" onClick={() => { setActive("home"); setIsOpen(false); }} style={{ display:"flex",alignItems:"center",gap:11,textDecoration:"none",flexShrink:0 }}>
            <div style={{ width:36,height:36,borderRadius:11,background:"linear-gradient(135deg,rgba(244,114,182,0.18),rgba(167,139,250,0.22))",border:"1px solid rgba(167,139,250,0.35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,color:"#a78bfa",boxShadow:"0 0 20px rgba(167,139,250,0.2),inset 0 1px 0 rgba(255,255,255,0.1)" }}>
              ✦
            </div>
            <div>
              <span style={{ fontSize:18,fontWeight:800,letterSpacing:4,textTransform:"uppercase",background:"linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",backgroundSize:"300% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"rgb-shift 4s linear infinite" }}>
                China
              </span>
            </div>
          </a>

          {/* Desktop Nav — CSS class driven for clean responsiveness */}
          <nav className="desktop-nav">
            {links.map(link => (
              <a key={link.id} href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`nav-link ${active === link.id ? "active" : ""}`}
                style={{ color: active === link.id ? "#a78bfa" : hoveredLink === link.id ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.42)" }}
              >
                {link.label}
                <span className="bar" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="nav-right">
            <div className="badge-open-to-work" style={{ display:"inline-flex",alignItems:"center",gap:7,background:"rgba(52,211,153,0.07)",border:"1px solid rgba(52,211,153,0.18)",borderRadius:100,padding:"5px 13px",fontFamily:"'DM Mono',monospace",fontSize:10,fontWeight:500,color:"rgba(52,211,153,0.75)",letterSpacing:".07em",textTransform:"uppercase",whiteSpace:"nowrap" }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#34d399",boxShadow:"0 0 7px #34d399",display:"inline-block",animation:"blink 1.4s ease-in-out infinite" }} />
              Open to work
            </div>

            <button className="hire-btn" onClick={() => setShowModal(true)}>
              <span>
                <span className="hire-label">Hire Me</span>
                <svg width={11} height={11} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* Hamburger — Managed responsive visibility via custom media queries in style tag */}
            <button className="hamburger" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Scroll Progress */}
        <div style={{ position:"absolute",bottom:0,left:0,height:2,borderRadius:2,background:"linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",backgroundSize:"200% auto",animation:"rgb-shift 3s linear infinite",width:`${scrollProgress}%`,transition:"width .1s linear" }} />

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ background:"rgba(7,8,15,0.98)",borderTop:"1px solid rgba(167,139,250,0.12)",padding:"20px 28px 28px",display:"flex",flexDirection:"column",gap:4,animation:"fadeDown .25s ease" }}>
            {links.map(link => (
              <a key={link.id} href={`#${link.id}`} className="mobile-link"
                onClick={() => { setActive(link.id); setIsOpen(false); }}
                style={{ color: active === link.id ? "#a78bfa" : "rgba(255,255,255,0.45)", background: active === link.id ? "rgba(167,139,250,0.07)" : "transparent" }}>
                {active === link.id ? "✦ " : ""}{link.label}
              </a>
            ))}
            <button onClick={() => { setShowModal(true); setIsOpen(false); }}
              style={{ marginTop:12,padding:"11px 0",borderRadius:100,border:"none",background:"linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa)",color:"#fff",fontFamily:"'Sora',sans-serif",fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer" }}>
              Hire Me ↗
            </button>
          </div>
        )}
      </header>

      {showModal && <HireModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;