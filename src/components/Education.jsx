import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      year: "2018 — 2020",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Hena Islam College",
      location: "Netrokona, Bangladesh",
      description: "Completed higher secondary education with a focus on academic excellence, building a strong foundation for analytical skills and future professional endeavors.",
      icon: "🎓",
      color: "#a78bfa",
      hasCredentials: false
    },
    {
      year: "2024 — 2025",
      degree: "Complete Web Development Graduate",
      institution: "Programming Hero",
      location: "Dhaka, Bangladesh (Remote)",
      description: "Graduated from a rigorous, milestone-based, industry-standard training program. Specialized in the MERN ecosystem, modern state management, deployment pipelines, and real-time communication systems.",
      icon: "⚡",
      color: "#34d399",
      hasCredentials: true,
      certificateUrl: encodeURI("/Certifcate-china akther.pdf"),
      lorUrl: encodeURI("/Recommendation letter_China Akther.pdf")
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
  };

  return (
    <section
      id="education"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "#07080f",
        fontFamily: "'Sora', sans-serif",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .edu-eyebrow {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,0.4); letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 0.9rem;
        }
        .edu-heading {
          font-size: clamp(30px, 4.2vw, 44px); font-weight: 700;
          letter-spacing: -0.02em; color: #fff; margin-bottom: 0.75rem;
        }
        .edu-lede {
          font-size: 15px; color: rgba(255,255,255,0.45); font-weight: 300;
          max-width: 480px; margin: 0 auto; line-height: 1.7;
        }

        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.25rem;
          max-width: 1000px;
          margin: 3.5rem auto 0;
        }

        .edu-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 1.9rem 1.9rem 1.75rem;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .edu-card:hover { transform: translateY(-3px); }

        .edu-top-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .edu-icon-box {
          width: 42px; height: 42px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; font-size: 19px;
        }
        .edu-year {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          padding: 5px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.55);
        }

        .edu-title {
          font-size: 17.5px; font-weight: 700; color: #fff;
          letter-spacing: -0.01em; margin-bottom: 0.45rem; line-height: 1.35;
        }
        .edu-meta {
          font-size: 13px; color: rgba(255,255,255,0.5);
          margin-bottom: 1rem;
          display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
        }
        .edu-details {
          font-size: 13.5px; color: rgba(255,255,255,0.42);
          line-height: 1.75; font-weight: 300;
        }

        .btn-group { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1.4rem; }
        .action-link {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'DM Mono', monospace; font-size: 11.5px; font-weight: 500;
          padding: 9px 15px; border-radius: 10px; text-decoration: none;
          transition: all 0.25s ease;
        }

        @media (max-width: 560px) {
          .edu-card { padding: 1.5rem 1.4rem; }
        }
      `}</style>

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Section Header ── */}
        <motion.div
          style={{ textAlign: "center" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="edu-eyebrow">Education</div>
          <h2 className="edu-heading">Academic Background</h2>
          <p className="edu-lede">
            The formal foundation and hands-on training behind the work I do today.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="edu-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={index}
              whileHover={{ borderColor: `${edu.color}40` }}
            >
              <div className="edu-top-row">
                <div className="edu-icon-box" style={{ background: `${edu.color}16`, border: `1px solid ${edu.color}35`, color: edu.color }}>
                  {edu.icon}
                </div>
                <span className="edu-year">{edu.year}</span>
              </div>

              <h3 className="edu-title">{edu.degree}</h3>
              <div className="edu-meta">
                <span style={{ color: "#fff", fontWeight: 600 }}>{edu.institution}</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                <span>{edu.location}</span>
              </div>
              <p className="edu-details">{edu.description}</p>

              {edu.hasCredentials && (
                <div className="btn-group">
                  <a
                    href={edu.certificateUrl} target="_blank" rel="noopener noreferrer"
                    className="action-link"
                    style={{ background: `${edu.color}14`, color: edu.color, border: `1px solid ${edu.color}30` }}
                  >
                    📜 Certificate
                  </a>
                  <a
                    href={edu.lorUrl} target="_blank" rel="noopener noreferrer"
                    className="action-link"
                    style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    ✉️ Letter of Recommendation
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;