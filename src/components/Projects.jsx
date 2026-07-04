import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const projects = [
  { slug: "dashchat", number: "04", title: "DashChat", desc: "Real-time full-stack chat app with JWT auth, Socket.IO messaging, video calling via Stream SDK and Google OAuth.", img: "https://i.ibb.co.com/bp1P2bK/Screenshot-61.png", tech: ["React 19", "Socket.io", "Node.js", "MongoDB", "Stream SDK"], live: "https://dash-chat-frontend.onrender.com/", github: "https://github.com/chinaakther05", accent: "#a78bfa", fullDescription: "DashChat is a real-time full-stack chat application featuring JWT-based authentication, Google OAuth login, live messaging over Socket.IO, and video calling powered by the Stream SDK. The backend handles auth, message persistence, and socket rooms; the frontend is built with React 19.", challenges: "Synchronizing real-time message delivery with reliable persistence (so no messages are lost on reconnect), and wiring up video calling alongside the existing socket-based chat without state conflicts, were the biggest engineering challenges.", improvements: "Future plans include group chat rooms, message read-receipts, end-to-end encryption for DMs, and push notifications for offline users." },
  { slug: "ecommerce", number: "02", title: "E-Commerce", desc: "Full-stack e-commerce platform with dynamic product listing, cart, and secure checkout flow.", img: "https://i.ibb.co/wZmYtRr6/b3657f77-c42c-4f92-bed0-ebe14d1b4735.jpg", tech: ["React", "Node.js", "MongoDB"], live: "https://astonishing-parfait-83d6d0.netlify.app/", github: "https://github.com/chinaakther05", accent: "#60a5fa", fullDescription: "A full-stack e-commerce platform with dynamic product listings, category filtering, a persistent cart, and a checkout flow. The backend is built with Node.js and MongoDB, exposing a REST API consumed by a React frontend.", challenges: "Keeping cart state in sync across page reloads and multiple tabs, and structuring the MongoDB schema so product variants (size/color/stock) stayed easy to query, were the trickiest parts of this build.", improvements: "Next steps are adding real payment gateway integration, an admin dashboard for inventory management, and order-tracking with email notifications." },
  { slug: "smart-home", number: "03", title: "Smart Home", desc: "Modern smart home dashboard with responsive design, built using Next.js and Tailwind CSS.", img: "https://i.ibb.co/yBWMJCPV/91266ec3-3e8c-4b6e-b752-b90d4d0b6c87.jpg", tech: ["Next.js", "Tailwind CSS"], live: "https://smart-home-37fee.web.app/", github: "https://github.com/chinaakther05", accent: "#34d399", fullDescription: "A smart-home control dashboard concept UI, built with Next.js and styled entirely with Tailwind CSS. It presents device states (lights, temperature, security) in a clean, responsive card-based layout.", challenges: "Designing a dashboard that stays readable and usable on small screens — while still showing several live-looking device widgets at once — required careful use of Tailwind's responsive grid utilities.", improvements: "Planning to connect it to a real device API (or a mock WebSocket server) for live state updates, add user authentication, and support custom device grouping/rooms." },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const Projects = () => (
  <section
    id="projects"
    style={{
      position: "relative",
      padding: "80px 24px 100px",
      background: "#07080f",
      overflow: "hidden",
      fontFamily: "'Sora', sans-serif",
      color: "#fff",
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700;800&family=DM+Mono:wght@400;500&display=swap');
      @keyframes rgb-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      @keyframes shimmer-line { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      @keyframes drift { 0%,100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-18px) translateX(8px); } 66% { transform: translateY(10px) translateX(-6px); } }

      .proj-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* এখানে ৪ থেকে ৩ করে দেওয়া হয়েছে */
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      @media (max-width: 900px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 560px) { .proj-grid { grid-template-columns: 1fr; } }

      .proj-card:hover .proj-img { transform: scale(1.07); }
      .proj-img { transition: transform 0.5s ease; }

      .btn-live:hover   { filter: brightness(1.08); transform: translateY(-2px); }
      .btn-details:hover { transform: translateY(-2px); }
    `}</style>

    {/* Background orbs */}
    {[
      { top: "-80px", right: "-80px", color: "rgba(167,139,250,0.14)", dur: "10s" },
      { bottom: "-60px", left: "-60px", color: "rgba(52,211,153,0.12)", dur: "12s", rev: true },
      { top: "40%", left: "45%", color: "rgba(96,165,250,0.09)", dur: "9s", delay: "3s" },
    ].map((o, i) => (
      <div
        key={i}
        style={{
          position: "absolute", borderRadius: "50%", pointerEvents: "none",
          width: 380, height: 380, ...o,
          background: `radial-gradient(circle,${o.color} 0%,transparent 65%)`,
          animation: `drift ${o.dur} ease-in-out infinite ${o.rev ? "reverse" : ""} ${o.delay || "0s"}`,
        }}
      />
    ))}

    {/* Grid BG */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
      backgroundSize: "52px 52px",
      maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)",
      WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)",
    }} />

    {/* Header */}
    <motion.div
      style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
    >
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        background: "linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.15))",
        border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa",
        fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 500,
        padding: "6px 16px", borderRadius: 100, letterSpacing: "0.07em",
        textTransform: "uppercase", marginBottom: "1.2rem",
      }}>✦ My Work</div>

      <h2 style={{
        fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.025em",
        background: "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        animation: "rgb-shift 5s linear infinite", marginBottom: 8,
      }}>Projects</h2>

      <div style={{
        width: 72, height: 3, borderRadius: 100, margin: "0 auto 12px",
        background: "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa)",
        backgroundSize: "200% auto", animation: "rgb-shift 3s linear infinite",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)",
          animation: "shimmer-line 2s ease-in-out infinite",
        }} />
      </div>

      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, maxWidth: 460, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
        Selected works showcasing my skills in frontend and full-stack development.
      </p>
    </motion.div>

    {/* 3-column card grid */}
    <div className="proj-grid" style={{ position: "relative", zIndex: 1 }}>
      {projects.map((proj, i) => (
        <motion.div
          key={proj.slug}
          className="proj-card"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp} custom={i}
          whileHover={{
            y: -8,
            boxShadow: `0 30px 60px ${proj.accent}22, 0 0 0 1px ${proj.accent}40`,
            borderColor: `${proj.accent}50`,
          }}
        >
          {/* Image */}
          <Link to={`/projects/${proj.slug}`} style={{ position: "relative", overflow: "hidden", height: 160, display: "block" }}>
            <img
              className="proj-img"
              src={proj.img}
              alt={proj.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 35%,rgba(7,8,15,0.97))" }} />
            <span style={{
              position: "absolute", top: 12, left: 14,
              fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 500,
              color: "rgba(255,255,255,0.5)", letterSpacing: 2,
              background: "rgba(0,0,0,0.45)", padding: "4px 10px",
              borderRadius: 50, backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>{proj.number}</span>
          </Link>

          {/* Body */}
          <div style={{ padding: "16px 16px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>{proj.title}</h3>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: 14, fontWeight: 300, flex: 1 }}>{proj.desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
              {proj.tech.map((t, j) => (
                <span key={j} style={{
                  fontSize: 10, fontWeight: 600, fontFamily: "'DM Mono',monospace",
                  padding: "3px 10px", borderRadius: 100,
                  background: `${proj.accent}14`,
                  border: `1px solid ${proj.accent}35`,
                  color: proj.accent, letterSpacing: "0.03em",
                }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
              <a href={proj.live} target="_blank" rel="noopener noreferrer"
                className="btn-live"
                style={{
                  flex: 1, textAlign: "center", textDecoration: "none",
                  background: proj.accent,
                  color: "#07080f", fontSize: 10, fontWeight: 700,
                  letterSpacing: "1px", textTransform: "uppercase",
                  fontFamily: "'DM Mono',monospace",
                  padding: "9px 0", borderRadius: 100,
                  transition: "transform 0.2s, filter 0.2s",
                }}>Live Demo</a>

              <Link to={`/projects/${proj.slug}`}
                className="btn-details"
                style={{
                  flex: 1, textAlign: "center", textDecoration: "none",
                  background: "transparent",
                  border: `1px solid ${proj.accent}45`,
                  color: proj.accent, fontSize: 10, fontWeight: 700,
                  letterSpacing: "1px", textTransform: "uppercase",
                  fontFamily: "'DM Mono',monospace",
                  padding: "9px 0", borderRadius: 100,
                  transition: "transform 0.2s",
                }}>View Details</Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;