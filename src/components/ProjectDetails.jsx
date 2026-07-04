import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./Projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const proj = projects.find((p) => p.slug === slug);

  if (!proj) {
    return (
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 16,
        background: "#07080f", color: "#fff", fontFamily: "'Sora', sans-serif",
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>Project not found</h2>
        <Link to="/#projects" style={{ color: "#a78bfa", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>
          ← Back to Projects
        </Link>
      </section>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
  };

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      padding: "6rem 1.5rem 6rem",
      background: "#07080f",
      color: "#fff",
      fontFamily: "'Sora', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .pd-back {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 12.5px; font-weight: 500;
          color: rgba(255,255,255,0.5); text-decoration: none;
          transition: color 0.2s ease;
        }
        .pd-back:hover { color: #fff; }

        .pd-hero-img {
          width: 100%; border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          margin: 1.75rem 0 2.5rem;
        }
        .pd-hero-img img {
          width: 100%; height: auto; max-height: 480px;
          object-fit: cover; display: block;
        }

        .pd-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 860px) {
          .pd-grid { grid-template-columns: 1fr; }
        }

        .pd-block {
          margin-bottom: 2.25rem;
        }
        .pd-block h3 {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
          margin-bottom: 0.85rem;
          font-family: 'DM Mono', monospace;
        }
        .pd-block p {
          font-size: 14.5px; line-height: 1.8; color: rgba(255,255,255,0.65);
          font-weight: 300;
        }

        .pd-side-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .pd-side-card h4 {
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
          margin-bottom: 1rem; font-family: 'DM Mono', monospace;
        }

        .pd-link-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          text-decoration: none; font-family: 'DM Mono', monospace;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; padding: 12px 0; border-radius: 12px;
          margin-bottom: 10px; transition: transform 0.2s ease, filter 0.2s ease;
        }
        .pd-link-btn:last-child { margin-bottom: 0; }
        .pd-link-btn:hover { transform: translateY(-2px); }

        .pd-tech-tag {
          display: inline-flex; font-size: 11.5px; font-weight: 600;
          font-family: 'DM Mono', monospace; padding: 6px 12px;
          border-radius: 100px; margin: 0 6px 6px 0;
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }}>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <Link to="/#projects" className="pd-back">← Back to Projects</Link>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: `${proj.accent}18`, border: `1px solid ${proj.accent}40`,
            color: proj.accent, fontFamily: "'DM Mono',monospace", fontSize: 11,
            fontWeight: 500, padding: "6px 16px", borderRadius: 100,
            letterSpacing: "0.07em", textTransform: "uppercase",
            marginTop: "1.5rem", marginBottom: "1rem",
          }}>Project {proj.number}</div>

          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 10 }}>
            {proj.title}
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 620, lineHeight: 1.7, fontWeight: 300 }}>
            {proj.desc}
          </p>
        </motion.div>

        <motion.div className="pd-hero-img" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
          <img src={proj.img} alt={proj.title} />
        </motion.div>

        <div className="pd-grid">
          {/* Main content */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <div className="pd-block">
              <h3>Overview</h3>
              <p>{proj.fullDescription}</p>
            </div>

            <div className="pd-block">
              <h3>Challenges Faced</h3>
              <p>{proj.challenges}</p>
            </div>

            <div className="pd-block">
              <h3>Future Improvements</h3>
              <p>{proj.improvements}</p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}>
            <div className="pd-side-card">
              <h4>Tech Stack</h4>
              <div>
                {proj.tech.map((t) => (
                  <span key={t} className="pd-tech-tag" style={{
                    background: `${proj.accent}14`, border: `1px solid ${proj.accent}35`, color: proj.accent,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="pd-side-card">
              <h4>Links</h4>
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="pd-link-btn"
                style={{ background: proj.accent, color: "#07080f" }}>
                🔗 Live Project
              </a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="pd-link-btn"
                style={{ background: "transparent", border: `1px solid ${proj.accent}45`, color: proj.accent }}>
                💻 GitHub (Client)
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;