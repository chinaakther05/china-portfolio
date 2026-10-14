import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const springRotateX = useSpring(rotateX, {
    stiffness: 100,
    damping: 20,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.13 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "TypeScript", color: "#3B82F6" },
    { name: "Node.js", color: "#84CC16" },
    { name: "Prisma", color: "#8B93FF" },
    { name: "PostgreSQL", color: "#60A5FA" },
    { name: "Tailwind CSS", color: "#38BDF8" },
  ];

  const stats = [
    { title: "Frontend", label: "Development", color: "#f472b6" },
    { title: "Backend", label: "Development", color: "#a78bfa" },
    { title: "Full Stack", label: "Web Applications", color: "#34d399" },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        overflow: "hidden",
        background: "#07080f",
        fontFamily: "'Sora', sans-serif",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes drift {
          0%,100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(12px) translateX(-8px); }
        }

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        @keyframes spin-rev {
          to { transform: rotate(-360deg); }
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes rgb-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-name-gradient {
          background: linear-gradient(
            90deg,
            #f472b6,
            #a78bfa,
            #60a5fa,
            #f472b6
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rgb-shift 5s linear infinite;
        }

        .badge-available {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.3);
          color: #6ee7b7;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 7px 14px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .dot-live {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: blink 1.4s ease-in-out infinite;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg,#f472b6,#a78bfa,#818cf8);
          background-size: 200% auto;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 25px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(167,139,250,0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(167,139,250,0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 25px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          transform: translateY(-2px);
        }

        .tech-chip {
          display: inline-flex;
          align-items: center;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          padding: 7px 12px;
          border-radius: 8px;
          border: 1px solid;
          transition: all 0.2s ease;
          cursor: default;
          font-weight: 500;
        }

        .tech-chip:hover {
          transform: translateY(-2px);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 12px 15px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          transition: all 0.2s;
          min-width: 112px;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }

        .stat-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;
        }

        .stat-label {
          font-size: 10px;
          color: rgba(255,255,255,0.48);
          letter-spacing: 0.03em;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .float-badge {
          position: absolute;
          z-index: 2;
          background: rgba(10,11,22,0.92);
          backdrop-filter: blur(14px);
          border-radius: 12px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: float 4s ease-in-out infinite;
          white-space: nowrap;
        }

        .float-badge-label {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
        }

        .float-badge-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.5);
        }

        .hero-image-wrap {
          width: 320px;
          height: 320px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .hero-main {
            gap: 2.5rem !important;
          }

          .hero-image-wrap {
            width: 290px;
            height: 290px;
          }
        }

        @media (max-width: 600px) {
          .hero-main {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center;
            padding: 7rem 0 3rem !important;
            gap: 2rem !important;
          }

          .hero-copy {
            min-width: 0 !important;
            width: 100%;
          }

          .hero-description {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-tech,
          .hero-buttons,
          .hero-stats {
            justify-content: center !important;
          }

          .hero-image-wrap {
            width: 255px;
            height: 255px;
          }

          .hero-photo {
            width: 205px !important;
            height: 205px !important;
          }

          .hero-orbit-one {
            width: 245px !important;
            height: 245px !important;
          }

          .hero-orbit-two {
            width: 270px !important;
            height: 270px !important;
          }

          .hero-ring-one {
            width: 225px !important;
            height: 225px !important;
          }

          .hero-ring-two {
            width: 215px !important;
            height: 215px !important;
          }

          .hero-float-one {
            right: -4px !important;
            top: 10px !important;
          }

          .hero-float-two {
            left: -5px !important;
            bottom: 8px !important;
          }

          .hero-float-three {
            right: -2px !important;
            bottom: -20px !important;
          }

          .hero-stats {
            gap: 8px !important;
          }

          .stat-card {
            min-width: 95px;
            padding: 10px 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-name-gradient,
          .dot-live,
          .float-badge {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle,rgba(236,72,153,0.15) 0%,transparent 65%)",
          animation: "drift 10s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          right: "0%",
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 65%)",
          animation: "drift 13s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "25%",
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle,rgba(52,211,153,0.08) 0%,transparent 65%)",
          animation: "drift 11s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%,black,transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        className="hero-main"
        style={{
          position: "relative",
          maxWidth: 1160,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          padding: "6rem 0 4rem",
          zIndex: 1,
        }}
      >
        {/* Left side */}
        <motion.div
          className="hero-copy"
          style={{ flex: "1 1 420px", minWidth: 280 }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <div className="badge-available">
              <span className="dot-live" />
              Available for Work
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(36px,5vw,60px)",
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#fff",
              margin: "0 0 1rem",
              letterSpacing: "-0.035em",
            }}
          >
            Hi, I'm <span className="hero-name-gradient">China Akther</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(15px,1.8vw,19px)",
              fontWeight: 600,
              marginBottom: "1rem",
              fontFamily: "'DM Mono',monospace",
              letterSpacing: "0.02em",
              color: "#c4b5fd",
            }}
          >
            {"< Full Stack Web Developer />"}
          </motion.p>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.85,
              maxWidth: 480,
              margin: "0 0 1.6rem",
              fontWeight: 300,
            }}
          >
            I build responsive and user-friendly web applications using{" "}
            
            . I enjoy turning ideas into practical digital solutions and
            continuously improving my development skills.
          </motion.p>

          {/* Tech stack */}
          <motion.div
            className="hero-tech"
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: "1.75rem",
            }}
          >
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="tech-chip"
                style={{
                  color: tech.color,
                  borderColor: `${tech.color}45`,
                  background: `${tech.color}12`,
                }}
              >
                {tech.name}
              </span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a href="/Resume.pdf" download className="btn-primary">
              <svg
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3"
                />
              </svg>
              Download Resume
            </a>

            <a href="#contact" className="btn-secondary">
              Get in Touch
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Development focus — not experience statistics */}
          <motion.div
            className="hero-stats"
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.title} className="stat-card">
                <span
                  className="stat-title"
                  style={{ color: stat.color }}
                >
                  {stat.title}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — profile photo */}
        <motion.div
          style={{
            flex: "0 1 360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            perspective: 900,
            minWidth: 0,
          }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          <div
            className="orbit-ring hero-orbit-one"
            style={{
              width: 360,
              height: 360,
              border: "1px dashed rgba(236,72,153,0.22)",
            }}
          />

          <div
            className="orbit-ring hero-orbit-two"
            style={{
              width: 410,
              height: 410,
              border: "1px dashed rgba(99,102,241,0.17)",
            }}
          />

          <div
            className="orbit-ring hero-ring-one"
            style={{
              width: 324,
              height: 324,
              border: "2px solid transparent",
              borderTopColor: "#f472b6",
              borderRightColor: "#a78bfa",
              animation: "spin-slow 7s linear infinite",
              boxShadow: "0 0 18px rgba(244,114,182,0.18)",
            }}
          />

          <div
            className="orbit-ring hero-ring-two"
            style={{
              width: 296,
              height: 296,
              border: "1.5px solid transparent",
              borderBottomColor: "#60a5fa",
              borderLeftColor: "#34d399",
              animation: "spin-rev 10s linear infinite",
            }}
          />

          <motion.div
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-image-wrap"
            >
              {/* Profile photo glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 8,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg,rgba(236,72,153,0.5),rgba(99,102,241,0.4),rgba(52,211,153,0.3),rgba(96,165,250,0.45),rgba(236,72,153,0.5))",
                  filter: "blur(22px)",
                  opacity: 0.7,
                  animation: "spin-slow 10s linear infinite",
                }}
              />

              <img
                className="hero-photo"
                src="https://i.ibb.co/HLjD4dVm/china2.jpg"
                alt="China Akther — Full Stack Web Developer"
                loading="eager"
                style={{
                  position: "relative",
                  width: 272,
                  height: 272,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.5)",
                  display: "block",
                }}
              />

              {/* React badge */}
              <motion.div
                className="float-badge hero-float-one"
                style={{
                  top: 10,
                  right: -24,
                  border: "1px solid rgba(97,218,251,0.3)",
                  boxShadow: "0 4px 20px rgba(97,218,251,0.15)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "#102538",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  ⚛️
                </div>
                <div>
                  <div className="float-badge-label">React</div>
                  <div
                    className="float-badge-sub"
                    style={{ color: "#61DAFB" }}
                  >
                    UI Development
                  </div>
                </div>
              </motion.div>

              {/* Prisma badge */}
              <motion.div
                className="float-badge hero-float-two"
                style={{
                  bottom: 18,
                  left: -24,
                  border: "1px solid rgba(139,147,255,0.3)",
                  boxShadow: "0 4px 20px rgba(104,117,245,0.12)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "#1a1c3a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  ◭
                </div>
                <div>
                  <div className="float-badge-label">Prisma</div>
                  <div
                    className="float-badge-sub"
                    style={{ color: "#a5b4fc" }}
                  >
                    ORM
                  </div>
                </div>
              </motion.div>

              {/* PostgreSQL badge */}
              <motion.div
                className="float-badge hero-float-three"
                style={{
                  bottom: -12,
                  right: -18,
                  border: "1px solid rgba(96,165,250,0.3)",
                  boxShadow: "0 4px 20px rgba(51,103,145,0.12)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "#0f243a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                  }}
                >
                  🐘
                </div>
                <div>
                  <div className="float-badge-label">PostgreSQL</div>
                  <div
                    className="float-badge-sub"
                    style={{ color: "#60a5fa" }}
                  >
                    Database
                  </div>
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