import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    { icon: "🚀", label: "Fast Delivery",     color: "#f472b6" },
    { icon: "🧹", label: "Clean Code",        color: "#a78bfa" },
    { icon: "📱", label: "Responsive UI",     color: "#60a5fa" },
    { icon: "⚡", label: "Performance First", color: "#34d399" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
  };

  return (
    <section
      id="about"
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

        @keyframes drift {
          0%,100% { transform: translateY(0) translateX(0); }
          33%      { transform: translateY(-18px) translateX(8px); }
          66%      { transform: translateY(10px) translateX(-6px); }
        }
        @keyframes rgb-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer-line {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes float-soft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

        .about-section-tag {
          display: inline-flex; align-items: center; gap: 7px;
          background: linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.15));
          border: 1px solid rgba(167,139,250,0.35);
          color: #a78bfa;
          font-family: 'DM Mono',monospace; font-size: 11px; font-weight: 500;
          padding: 6px 16px; border-radius: 100px;
          letter-spacing: 0.07em; text-transform: uppercase;
          margin-bottom: 1.2rem;
        }

        .heading-gradient {
          background: linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rgb-shift 5s linear infinite;
        }

        .underline-bar {
          width: 72px; height: 3px; border-radius: 100px;
          background: linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa);
          background-size: 200% auto;
          animation: rgb-shift 3s linear infinite;
          margin: 0.75rem auto 0;
          position: relative; overflow: hidden;
        }
        .underline-bar::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent);
          animation: shimmer-line 2s ease-in-out infinite;
        }

        /* ---------- Image styling ---------- */
        .image-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px 0 34px;
        }
        .image-container {
          position: relative;
          width: 100%;
          max-width: 360px;
          border-radius: 26px;
          padding: 6px;
          background: linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa,#34d399);
          background-size: 300% auto;
          animation: rgb-shift 6s linear infinite;
          box-shadow: 0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04);
        }
        .image-inner {
          position: relative;
          border-radius: 21px;
          overflow: hidden;
          background: #07080f;
        }
        .profile-img {
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          object-position: 50% 18%;
          display: block;
          filter: saturate(1.03) contrast(1.02);
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .image-container:hover .profile-img { transform: scale(1.045); }

        .image-inner::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 62%, rgba(7,8,15,0.55) 100%);
          pointer-events: none;
        }

        .image-badge {
          position: absolute;
          left: 50%;
          bottom: -18px;
          transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(10,11,22,0.92);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(167,139,250,0.3);
          border-radius: 100px;
          padding: 8px 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
          animation: float-soft 4s ease-in-out infinite;
          white-space: nowrap;
        }
        .image-badge .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #34d399; box-shadow: 0 0 8px #34d399;
        }
        .image-badge span.txt {
          font-family: 'DM Mono', monospace; font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.04em; color: #fff;
        }

        .corner-badge {
          position: absolute;
          top: -14px; right: 6px;
          background: rgba(10,11,22,0.94);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(52,211,153,0.35);
          border-radius: 14px;
          padding: 8px 12px;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 10px 26px rgba(0,0,0,0.4);
          animation: float-soft 4.5s ease-in-out infinite 0.5s;
        }
        .corner-badge .num {
          font-size: 16px; font-weight: 800; color: #34d399; line-height: 1;
        }
        .corner-badge .txt {
          font-size: 9.5px; color: rgba(255,255,255,0.5);
          font-family: 'DM Mono', monospace; letter-spacing: 0.03em;
        }

        .image-orbit {
          position: absolute; border-radius: 50%;
          border: 1px dashed rgba(167,139,250,0.18);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          pointer-events: none;
        }

        @media (max-width: 520px) {
          .image-container { max-width: 300px; }
          .corner-badge { top: -10px; right: 0; padding: 6px 10px; }
        }

        .bio-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem;
          position: relative; overflow: hidden;
        }

        .bio-text {
          font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.8;
          font-weight: 300;
        }
        .bio-text .highlight {
          background: linear-gradient(90deg,#f472b6,#a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; font-weight: 600;
        }
        .bio-text .highlight-green {
          background: linear-gradient(90deg,#34d399,#60a5fa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; font-weight: 600;
        }
        .bio-text .highlight-amber {
          background: linear-gradient(90deg,#fbbf24,#f472b6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; font-weight: 600;
        }

        .highlight-card {
          display: flex; flex-direction: column; align-items: center;
          gap: 6px; padding: 14px 10px; border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.25s ease; cursor: default;
          text-align: center;
        }
        .highlight-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.14);
        }
        .highlight-icon { font-size: 22px; }
        .highlight-label { font-size: 11px; font-weight: 600; }

        .quote-block {
          border-left: 3px solid;
          border-image: linear-gradient(180deg,#f472b6,#a78bfa,#60a5fa) 1;
          padding: 0.75rem 1.25rem;
          background: rgba(255,255,255,0.01);
          border-radius: 0 12px 12px 0;
          font-size: 13.5px; font-style: italic;
          color: rgba(255,255,255,0.4); line-height: 1.6;
        }
      `}</style>

      {/* Background decoration */}
      <div style={{ position:"absolute",top:"-10%",right:"-5%",width:450,height:450,
        background:"radial-gradient(circle,rgba(167,139,250,0.12) 0%,transparent 65%)",
        animation:"drift 12s ease-in-out infinite" }} />
      <div style={{ position:"absolute",bottom:"0%",left:"-5%",width:400,height:400,
        background:"radial-gradient(circle,rgba(52,211,153,0.1) 0%,transparent 65%)",
        animation:"drift 10s ease-in-out infinite reverse" }} />

      <div style={{ position:"relative", maxWidth:1150, margin:"0 auto" }}>

        {/* ── Section Header ── */}
        <motion.div
          style={{ textAlign:"center", marginBottom:"4rem" }}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} custom={0}
        >
          <div className="about-section-tag">✦ Get to know me</div>
          <h2 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:800, letterSpacing:"-0.025em", marginBottom:"0.5rem" }}>
            <span className="heading-gradient">About Me</span>
          </h2>
          <div className="underline-bar" />
        </motion.div>

        {/* ── Split Layout Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "start"
        }}>

          {/* Left Column: Image */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp} custom={1}
            className="image-wrap"
          >
            <div className="image-orbit" style={{ width:400, height:400 }} />
            <div className="image-orbit" style={{ width:340, height:340, animation:"spin-slow 14s linear infinite" }} />

            <div className="image-container">
              <div className="image-inner">
                <img
                  src="https://i.ibb.co/23NTftvQ/protfilo-image.png"
                  alt="China Akther — Full Stack Developer"
                  className="profile-img"
                />
              </div>

              <div className="corner-badge">
                <span className="num">1+</span>
                <span className="txt">Years<br/>Experience</span>
              </div>

              <div className="image-badge">
                <span className="dot" />
                <span className="txt">China Akther · Full Stack Dev</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio + Content Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Bio Card */}
            <motion.div
              className="bio-card"
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp} custom={2}
            >
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1.25rem" }}>
                <div style={{
                  width:38, height:38, borderRadius:10,
                  background:"linear-gradient(135deg,rgba(244,114,182,0.2),rgba(167,139,250,0.2))",
                  border:"1px solid rgba(244,114,182,0.3)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:18,
                }}>👩‍💻</div>
                <div>
                  <div style={{ fontSize:15, fontWeight:700 }}>China Akther</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", fontFamily:"'DM Mono',monospace" }}>Full Stack Developer</div>
                </div>
              </div>

              <p className="bio-text">
                Hello! I'm a passionate{" "}
                <span className="highlight">MERN Stack Developer</span>{" "}
                who began exploring the inner workings of websites out of sheer curiosity.
                Over time, I fell in love with solving problems through code and building
                full-stack applications that are{" "}
                <span className="highlight-green">functional, scalable, and visually engaging</span>.
              </p>
              <br />
              <p className="bio-text">
                I enjoy working with{" "}
                <span className="highlight">JavaScript, React, Node.js, MongoDB</span>{" "}
                and modern UI frameworks like Tailwind CSS. More recently, I've been going deeper
                into{" "}
                <span className="highlight-green">PostgreSQL and Prisma</span>{" "}
                to build well-structured, type-safe relational databases alongside my
                existing MongoDB skills. My goal is to build fast, responsive, and maintainable
                web applications with clean code.
              </p>
              <br />
              <p className="bio-text">
                Outside of coding, I love{" "}
                <span className="highlight-amber">traveling, discovering new places,</span>{" "}
                listening to music, and learning new technologies that spark creativity.
              </p>

              <div style={{ marginTop:"1.5rem" }}>
                <div className="quote-block">
                  "Code is not just logic — it's the art of making ideas come to life."
                </div>
              </div>
            </motion.div>

            {/* Bottom Inner Grid: Highlights & Quick Info */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem"
            }}>

              {/* Highlights Sub-Grid */}
              <motion.div
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp} custom={3}
                style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}
              >
                {highlights.map((h, i) => (
                  <div key={i} className="highlight-card">
                    <div className="highlight-icon">{h.icon}</div>
                    <div className="highlight-label" style={{ color: h.color, textShadow:`0 0 12px ${h.color}88` }}>
                      {h.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Quick Info Block */}
              <motion.div
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp} custom={4}
                style={{
                  background:"rgba(255,255,255,0.02)",
                  border:"1px solid rgba(255,255,255,0.06)",
                  borderRadius:16, padding:"1.25rem",
                  position:"relative", overflow:"hidden",
                }}
              >
                <div style={{ position:"absolute",top:0,left:0,right:0,height:1,
                  background:"linear-gradient(90deg,transparent,rgba(52,211,153,0.3),transparent)" }} />

                {[
                  { label:"📍 Location",    value:"Bangladesh",        color:"#f472b6" },
                  { label:"💼 Experience",  value:"1+ Years",            color:"#60a5fa" },
                  { label:"🌐 Languages",   value:"Bangla, English",     color:"#34d399" },
                  { label:"⚡ Availability", value:"Open to work",       color:"#fbbf24" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"6px 0",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}>
                    <span style={{ fontSize:12,color:"rgba(255,255,255,0.4)" }}>{item.label}</span>
                    <span style={{ fontSize:12,fontWeight:600,color:item.color }}>{item.value}</span>
                  </div>
                ))}
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;