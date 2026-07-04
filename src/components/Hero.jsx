import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  // ✅ Updated tech stack with Prisma & PostgreSQL
  const techStack = [
    { name: "React",      color: "#61DAFB", shadow: "rgba(97,218,251,0.4)" },
    { name: "TypeScript", color: "#3B82F6", shadow: "rgba(59,130,246,0.4)" },
    { name: "Prisma",     color: "#6875F5", shadow: "rgba(104,117,245,0.4)" },
    { name: "PostgreSQL", color: "#336791", shadow: "rgba(51,103,145,0.4)" },
    { name: "Node.js",    color: "#84CC16", shadow: "rgba(132,204,22,0.4)" },
    { name: "Tailwind",   color: "#38BDF8", shadow: "rgba(56,189,248,0.4)" },
  ];

  const stats = [
    { num: "1+",  label: "Years exp.",   color: "#f472b6" },
    { num: "40+", label: "Projects",     color: "#a78bfa" },
    { num: "100%", label: "Satisfaction", color: "#34d399" },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative", minHeight: "100vh", display: "flex",
        alignItems: "center", padding: "0 1.5rem", overflow: "hidden",
        background: "#07080f", fontFamily: "'Sora', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes drift {
          0%,100% { transform: translateY(0) translateX(0); }
          33%      { transform: translateY(-20px) translateX(10px); }
          66%      { transform: translateY(12px) translateX(-8px); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes spin-rev  { to { transform: rotate(-360deg); } }
        @keyframes blink     { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes float     { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }
        @keyframes rgb-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes name-glow {
          0%,100% { filter: drop-shadow(0 0 14px rgba(168,85,247,0.7)); }
          33%      { filter: drop-shadow(0 0 22px rgba(236,72,153,0.8)); }
          66%      { filter: drop-shadow(0 0 18px rgba(99,102,241,0.8)); }
        }
        .hero-name-gradient {
          background: linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399,#fbbf24,#f472b6);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rgb-shift 4s linear infinite, name-glow 4s ease-in-out infinite;
        }
        .badge-available {
          display: inline-flex; align-items: center; gap: 7px;
          background: linear-gradient(135deg,rgba(52,211,153,0.15),rgba(99,102,241,0.15));
          border: 1px solid rgba(52,211,153,0.35); color: #34d399;
          font-family: 'DM Mono',monospace; font-size: 11px; font-weight: 500;
          padding: 6px 16px; border-radius: 100px;
          letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.5rem;
        }
        .dot-live {
          width:7px; height:7px; border-radius:50%;
          background:#34d399; box-shadow:0 0 8px #34d399;
          animation: blink 1.4s ease-in-out infinite;
        }
        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa);
          background-size:200% auto; color:#fff;
          font-family:'Sora',sans-serif; font-size:14px; font-weight:600;
          padding:13px 30px; border-radius:100px; border:none;
          cursor:pointer; text-decoration:none; transition:all 0.3s ease;
          box-shadow:0 4px 24px rgba(167,139,250,0.45);
          letter-spacing:0.02em; animation:rgb-shift 3s linear infinite;
        }
        .btn-primary:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 8px 32px rgba(167,139,250,0.65); }
        .btn-secondary {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:rgba(255,255,255,0.8);
          font-family:'Sora',sans-serif; font-size:14px; font-weight:500;
          padding:12px 28px; border-radius:100px;
          border:1px solid rgba(255,255,255,0.2);
          cursor:pointer; text-decoration:none; transition:all 0.25s ease;
          letter-spacing:0.02em;
        }
        .btn-secondary:hover { background:rgba(255,255,255,0.07); border-color:rgba(255,255,255,0.4); color:#fff; transform:translateY(-2px); }
        .tech-chip {
          display:inline-flex; align-items:center;
          font-size:11.5px; font-family:'DM Mono',monospace;
          padding:6px 13px; border-radius:8px; border:1px solid;
          transition:all 0.2s ease; cursor:default; font-weight:500;
        }
        .tech-chip:hover { transform:translateY(-2px) scale(1.06); }
        .stat-card {
          display:flex; flex-direction:column; gap:3px;
          padding:12px 18px; border-radius:12px;
          border:1px solid rgba(255,255,255,0.08);
          background:rgba(255,255,255,0.03); transition:all 0.2s;
        }
        .stat-card:hover { background:rgba(255,255,255,0.06); transform:translateY(-2px); }
        .stat-num { font-size:24px; font-weight:800; line-height:1; }
        .stat-label { font-size:10.5px; color:rgba(255,255,255,0.4); font-weight:400; letter-spacing:0.03em; }
        .orbit-ring { position:absolute; border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); }
        .float-badge {
          position:absolute;
          background:rgba(10,11,22,0.88); backdrop-filter:blur(14px);
          border-radius:12px; padding:9px 14px;
          display:flex; align-items:center; gap:9px;
          animation:float 4s ease-in-out infinite;
        }
        .float-badge-label { font-size:11.5px; font-weight:600; color:#fff; font-family:'Sora',sans-serif; }
        .float-badge-sub   { font-size:10px; color:rgba(255,255,255,0.4); }
      `}</style>

      {/* Colorful background orbs */}
      <div style={{ position:"absolute",top:"5%",left:"-5%",width:480,height:480,
        background:"radial-gradient(circle,rgba(236,72,153,0.18) 0%,transparent 65%)",
        animation:"drift 10s ease-in-out infinite" }} />
      <div style={{ position:"absolute",top:"15%",right:"0%",width:420,height:420,
        background:"radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 65%)",
        animation:"drift 13s ease-in-out infinite reverse" }} />
      <div style={{ position:"absolute",bottom:"5%",left:"25%",width:380,height:380,
        background:"radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 65%)",
        animation:"drift 11s ease-in-out infinite 2s" }} />
      <div style={{ position:"absolute",bottom:"10%",right:"5%",width:300,height:300,
        background:"radial-gradient(circle,rgba(251,191,36,0.1) 0%,transparent 65%)",
        animation:"drift 9s ease-in-out infinite 1s reverse" }} />

      {/* Grid */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
        backgroundSize:"52px 52px",
        maskImage:"radial-gradient(ellipse 90% 70% at 50% 40%,black,transparent)",
      }} />

      {/* Main container */}
      <div style={{
        position:"relative", maxWidth:1160, margin:"0 auto", width:"100%",
        display:"flex", flexDirection:"row", alignItems:"center",
        gap:"3rem", flexWrap:"wrap", padding:"5rem 0",
      }}>

        {/* LEFT — Text */}
        <motion.div style={{ flex:"1 1 420px", minWidth:280 }} variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <div className="badge-available">
              <div className="dot-live" /> Available for work
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontSize:"clamp(38px,5vw,60px)", fontWeight:800,
            lineHeight:1.08, color:"#fff", marginBottom:"0.8rem",
            letterSpacing:"-0.025em",
          }}>
            Hi, I'm <span className="hero-name-gradient">China Akther</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontSize:"clamp(15px,1.8vw,19px)", fontWeight:600,
            marginBottom:"1rem", fontFamily:"'DM Mono',monospace", letterSpacing:"0.02em",
            background:"linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            {"< Full Stack Developer />"}
          </motion.p>

          <motion.p variants={fadeUp} style={{
            fontSize:15, color:"rgba(255,255,255,0.5)", lineHeight:1.78,
            maxWidth:460, marginBottom:"1.75rem", fontWeight:300,
          }}>
            {/* ✅ Description updated to highlight advanced skills */}
            I craft seamless, performant web applications using the{" "}
            <span style={{
              background:"linear-gradient(90deg,#f472b6,#a78bfa)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              backgroundClip:"text", fontWeight:600,
            }}>Next.js, TypeScript & Prisma</span> ecosystem. From pixel-perfect reactive UIs to optimized backend systems — I build robust solutions.
          </motion.p>

          {/* Tech chips */}
          <motion.div variants={fadeUp} style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:"1.75rem" }}>
            {techStack.map((t) => (
              <span key={t.name} className="tech-chip" style={{
                color:t.color, borderColor:`${t.color}40`,
                background:`${t.color}12`, textShadow:`0 0 12px ${t.shadow}`,
              }}>
                {t.name}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:"2rem" }}>
            <a href="Resume.pdf" download className="btn-primary">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-num" style={{ color:s.color, textShadow:`0 0 18px ${s.color}99` }}>{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Image */}
        <motion.div style={{
          flex:"0 0 auto", display:"flex", justifyContent:"center",
          alignItems:"center", position:"relative", perspective:900,
        }}
          initial={{ opacity:0, scale:0.82 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1], delay:0.3 }}
        >
          <div className="orbit-ring" style={{ width:360, height:360, border:"1px dashed rgba(236,72,153,0.2)" }} />
          <div className="orbit-ring" style={{ width:440, height:440, border:"1px dashed rgba(99,102,241,0.15)" }} />

          {/* Spinning rings */}
          <div style={{
            position:"absolute", width:324, height:324, borderRadius:"50%",
            border:"2.5px solid transparent",
            borderTopColor:"#f472b6", borderRightColor:"#a78bfa",
            animation:"spin-slow 6s linear infinite",
            top:"50%", left:"50%", transform:"translate(-50%,-50%)",
            boxShadow:"0 0 20px rgba(244,114,182,0.25)",
          }} />
          <div style={{
            position:"absolute", width:296, height:296, borderRadius:"50%",
            border:"1.5px solid transparent",
            borderBottomColor:"#60a5fa", borderLeftColor:"#34d399",
            animation:"spin-rev 9s linear infinite",
            top:"50%", left:"50%", transform:"translate(-50%,-50%)",
          }} />

          <motion.div style={{ rotateX:springRotateX, rotateY:springRotateY, transformStyle:"preserve-3d" }}>
            <motion.div animate={{ y:[0,-14,0,-9,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }} style={{ position:"relative" }}>

              {/* Rainbow glow */}
              <div style={{
                position:"absolute", inset:-28, borderRadius:"50%",
                background:"conic-gradient(from 0deg,rgba(236,72,153,0.55),rgba(99,102,241,0.45),rgba(52,211,153,0.4),rgba(251,191,36,0.35),rgba(96,165,250,0.5),rgba(236,72,153,0.55))",
                filter:"blur(22px)", opacity:0.85,
                animation:"spin-slow 8s linear infinite",
              }} />

              {/* Profile image */}
              <img
                src="https://i.ibb.co/HLjD4dVm/china2.jpg"
                alt="China Akther"
                style={{
                  position:"relative", width:272, height:272,
                  borderRadius:"50%", objectFit:"cover",
                  border:"3px solid rgba(255,255,255,0.15)",
                  boxShadow:"0 0 0 1px rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.7)",
                  display:"block",
                }}
              />

              {/* React badge */}
              <motion.div className="float-badge" style={{
                top:10, right:-36,
                border:"1px solid rgba(97,218,251,0.3)",
                animationDelay:"0s", boxShadow:"0 4px 20px rgba(97,218,251,0.2)",
              }}>
                <div style={{ width:28, height:28, borderRadius:8, background:"linear-gradient(135deg,#1e3a5f,#0d2137)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>⚛️</div>
                <div>
                  <div className="float-badge-label">React</div>
                  <div className="float-badge-sub" style={{ color:"#61DAFB" }}>Expert</div>
                </div>
              </motion.div>

              {/* ✅ Prisma badge instead of plain Node */}
              <motion.div className="float-badge" style={{
                bottom:20, left:-40,
                border:"1px solid rgba(104,117,245,0.3)",
                animationDelay:"2s", boxShadow:"0 4px 20px rgba(104,117,245,0.15)",
              }}>
                <div style={{ width:28, height:28, borderRadius:8, background:"linear-gradient(135deg,#1a1c3a,#0b0c16)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>◭</div>
                <div>
                  <div className="float-badge-label">Prisma</div>
                  <div className="float-badge-sub" style={{ color:"#6875F5" }}>ORM</div>
                </div>
              </motion.div>

              {/* ✅ PostgreSQL badge instead of MongoDB */}
              <motion.div className="float-badge" style={{
                bottom:-12, right:-24,
                border:"1px solid rgba(51,103,145,0.3)",
                animationDelay:"1s", boxShadow:"0 4px 20px rgba(51,103,145,0.12)",
              }}>
                <div style={{ width:28, height:28, borderRadius:8, background:"linear-gradient(135deg,#0f243a,#06101b)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15 }}>🐘</div>
                <div>
                  <div className="float-badge-label">PostgreSQL</div>
                  <div className="float-badge-sub" style={{ color:"#336791" }}>Database</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;