import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5",      color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS3",       color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",       category: "Frontend" },
    { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
    { name: "TypeScript", color: "#3178C6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
    { name: "React",      color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",      category: "Frontend" },
    { name: "Next.js",    color: "#a0a0a0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",     category: "Frontend", lightBg: true },
    { name: "Tailwind",   color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },

    { name: "Node.js",    color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",     category: "Backend" },
    { name: "Express.js", color: "#a0a0a0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",  category: "Backend", lightBg: true },
    { name: "Prisma",     color: "#5EEAD4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",   category: "Backend", lightBg: true },
    { name: "MongoDB",    color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",  category: "Backend" },
    { name: "PostgreSQL", color: "#4169E1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Backend" },

    { name: "Vercel",     color: "#a0a0a0", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",                         category: "Tools", lightBg: true },
    { name: "Netlify",    color: "#00C7B7", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",                       category: "Tools" },
    { name: "Postman",    color: "#FF6C37", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",                 category: "Tools" },
    { name: "DB Schema Design", color: "#FF5722", icon: "https://cdn-icons-png.flaticon.com/512/2379/2379264.png",                      category: "Tools" },
    { name: "Git",        color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",          category: "Tools" },
    { name: "GitHub",     color: "#a0a0a0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",     category: "Tools", lightBg: true },
  ];

  const categories = [
    { key: "Frontend", label: "Frontend Tech", icon: "⚡", accent: "#60a5fa" },
    { key: "Backend",  label: "Backend & DB",  icon: "⚙️", accent: "#34d399" },
    { key: "Tools",    label: "Tools & Systems", icon: "🛠️", accent: "#f472b6" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "#07080f",
        overflow: "hidden",
        fontFamily: "'Sora', sans-serif",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes drift-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes rgb-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skills-section-tag {
          display: inline-flex; align-items: center; gap: 7px;
          background: linear-gradient(135deg, rgba(167,139,250,0.15), rgba(96,165,250,0.15));
          border: 1px solid rgba(167,139,250,0.35);
          color: #a78bfa;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          padding: 6px 16px; border-radius: 100px;
          letter-spacing: 0.07em; text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .heading-gradient {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #34d399);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rgb-shift 5s linear infinite;
        }

        .underline-bar {
          width: 72px; height: 3px; border-radius: 100px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
          margin: 0.75rem auto 0;
        }

        .skills-subtitle {
          font-family: 'DM Mono', monospace; font-size: 12px;
          color: rgba(255,255,255,0.35); margin-top: 0.9rem;
        }

        .category-block {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.015);
          border-radius: 22px;
          padding: 1.75rem;
          margin-bottom: 1.75rem;
          position: relative;
          overflow: hidden;
        }
        .category-block::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
        }

        .category-title {
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; margin-bottom: 1.4rem;
          font-family: 'DM Mono', monospace;
          display: flex; align-items: center; gap: 10px;
        }
        .category-title .cat-icon-box {
          width: 30px; height: 30px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0;
        }
        .category-title .cat-count {
          margin-left: auto; font-weight: 500; color: rgba(255,255,255,0.3);
          font-size: 11px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.9rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 1.2rem 0.9rem;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 11px; cursor: default; position: relative; overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }
        .skill-card:hover { transform: translateY(-4px); }
        .skill-card:hover .card-hover-glow { opacity: 0.4; }
        .skill-card:hover .skill-icon-wrapper { transform: scale(1.08) rotate(-4deg); }

        .card-hover-glow {
          position: absolute; width: 60px; height: 60px; border-radius: 50%;
          top: -10px; left: 50%; transform: translateX(-50%);
          filter: blur(22px); opacity: 0; transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .skill-icon-wrapper {
          width: 46px; height: 46px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: transform 0.25s ease;
        }
        .skill-icon-wrapper.light-bg {
          background: rgba(255,255,255,0.92);
          border-color: rgba(255,255,255,0.9);
        }
        .skill-icon-wrapper img {
          width: 24px; height: 24px; object-fit: contain;
        }

        .skill-name {
          font-size: 12.5px; font-weight: 600; color: rgba(255, 255, 255, 0.8);
          font-family: 'DM Mono', monospace; letter-spacing: -0.01em;
          text-align: center; line-height: 1.3;
        }

        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.65rem; }
          .skill-card { padding: 0.9rem 0.6rem; }
          .category-block { padding: 1.25rem; }
        }
      `}</style>

      {/* Decorative background ambient lights */}
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 65%)",
        animation: "drift-slow 15s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: 450, height: 450,
        background: "radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 65%)",
        animation: "drift-slow 12s ease-in-out infinite reverse" }} />

      {/* Grid Pattern mask overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="skills-section-tag">✦ Abilities</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: "0.5rem" }}>
            <span className="heading-gradient">Skills &amp; Technologies</span>
          </h2>
          <div className="underline-bar" />
          <div className="skills-subtitle">{skills.length} technologies across {categories.length} categories</div>
        </motion.div>

        {/* ── Categories & Skills Rendering ── */}
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.key}
            className="category-block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: catIdx * 0.1 }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${cat.accent}80, transparent)` }} />

            <div className="category-title" style={{ color: cat.accent }}>
              <span className="cat-icon-box" style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}35` }}>
                {cat.icon}
              </span>
              {cat.label}
              <span className="cat-count">{skills.filter((s) => s.category === cat.key).length} skills</span>
            </div>

            <div className="skills-grid">
              {skills
                .filter((s) => s.category === cat.key)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{
                      borderColor: `${skill.color}55`,
                      backgroundColor: `${skill.color}0c`,
                      boxShadow: `0 12px 26px ${skill.color}1f`,
                    }}
                  >
                    <div className="card-hover-glow" style={{ background: skill.color }} />

                    <div className={`skill-icon-wrapper ${skill.lightBg ? "light-bg" : ""}`}>
                      <img src={skill.icon} alt={skill.name} loading="lazy" />
                    </div>

                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;