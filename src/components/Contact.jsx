import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.12,
    },
  }),
};

// Contact details
const CONTACT_EMAIL = "chinaakther05@gmail.com";
const CONTACT_PHONE = "+8801933067666";
const CONTACT_PHONE_DISPLAY = "+880 1933067666";
const WHATSAPP_NUMBER = "8801933067666";

const infoItems = [
  {
    icon: "📧",
    label: "Email",
    value: CONTACT_EMAIL,
    color: "#f472b6",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "📞",
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    color: "#a78bfa",
    href: `tel:${CONTACT_PHONE}`,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: CONTACT_PHONE_DISPLAY,
    color: "#34d399",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangladesh",
    color: "#60a5fa",
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email and message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject:
              subject || `New message from ${name} (portfolio)`,
            message,
            _template: "table",
          }),
        }
      );

      // Check the HTTP response and parse the service response.
      const data = await response.json();

      if (
        !response.ok ||
        data.success === false ||
        data.success === "false"
      ) {
        throw new Error(
          data.message || "Message could not be sent."
        );
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setErrorMessage(
        "Sorry, your message could not be sent. Please try again or contact me directly by email."
      );
    }
  };

  return (
    <section
      id="contact"
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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes rgb-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes drift {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-18px) translateX(8px); }
          66% { transform: translateY(10px) translateX(-6px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .contact-input {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          outline: none;
          transition: border-color .25s, background .25s;
        }

        .contact-input::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .contact-input:focus {
          border-color: rgba(167,139,250,0.7);
          background: rgba(167,139,250,0.06);
        }

        .send-btn {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa);
          background-size: 200% auto;
          animation: rgb-shift 3s linear infinite;
          transition: transform .2s, opacity .2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .send-btn:hover {
          transform: translateY(-2px);
          opacity: .9;
        }

        .send-btn:disabled {
          cursor: not-allowed;
          opacity: .7;
          transform: none;
        }

        .spinner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: spin 0.7s linear infinite;
        }

        .info-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          transition: transform 0.2s ease;
        }

        .info-link.clickable:hover {
          transform: translateX(4px);
        }

        .info-link:focus-visible,
        .send-btn:focus-visible {
          outline: 2px solid #a78bfa;
          outline-offset: 4px;
        }

        @media (max-width: 560px) {
          .contact-section {
            padding: 64px 16px 76px !important;
          }

          .contact-form-row {
            flex-direction: column;
          }

          .contact-card {
            padding: 24px 20px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .send-btn,
          .info-link,
          .spinner {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Decorative background orbs */}
      {[
        {
          top: "-60px",
          left: "-60px",
          color: "rgba(244,114,182,0.15)",
          dur: 11,
        },
        {
          bottom: "-60px",
          right: "-60px",
          color: "rgba(96,165,250,0.13)",
          dur: 9,
          rev: true,
        },
        {
          top: "40%",
          left: "50%",
          color: "rgba(167,139,250,0.1)",
          dur: 13,
          delay: "2s",
          tx: true,
        },
      ].map((orb, index) => (
        <div
          key={index}
          aria-hidden="true"
          style={{
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
            width: 360,
            height: 360,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            transform: orb.tx ? "translateX(-50%)" : undefined,
            background: `radial-gradient(circle,${orb.color} 0%,transparent 65%)`,
            animation: `drift ${orb.dur}s ease-in-out infinite ${
              orb.rev ? "reverse" : ""
            } ${orb.delay || ""}`,
          }}
        />
      ))}

      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)",
        }}
      />

      {/* Section header */}
      <motion.div
        style={{
          textAlign: "center",
          marginBottom: 48,
          position: "relative",
          zIndex: 1,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background:
              "linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.15))",
            border: "1px solid rgba(167,139,250,0.35)",
            color: "#a78bfa",
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            fontWeight: 500,
            padding: "6px 16px",
            borderRadius: 100,
            letterSpacing: ".07em",
            textTransform: "uppercase",
            marginBottom: "1.2rem",
          }}
        >
          ✦ Say Hello
        </div>

        <h2
          style={{
            fontSize: "clamp(32px,5vw,52px)",
            fontWeight: 800,
            letterSpacing: "-.025em",
            background:
              "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "rgb-shift 5s linear infinite",
            marginBottom: 8,
          }}
        >
          Get In Touch
        </h2>

        <div
          style={{
            width: 72,
            height: 3,
            borderRadius: 100,
            margin: "0 auto 12px",
            background: "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa)",
            backgroundSize: "200% auto",
            animation: "rgb-shift 3s linear infinite",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)",
              animation: "shimmer-line 2s ease-in-out infinite",
            }}
          />
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            maxWidth: 460,
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      {/* Contact cards */}
      <div
        className="contact-section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
          gap: 24,
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Contact information card */}
        <motion.div
          className="contact-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "32px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg,transparent,rgba(167,139,250,0.5),transparent)",
            }}
          />

          {infoItems.map((item, index) => {
            const content = (
              <>
                <div
                  aria-hidden="true"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}35`,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ minWidth: 0, overflowWrap: "anywhere" }}>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: 10.5,
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: ".07em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </>
            );

            return (
              <div
                key={item.label}
                style={{
                  padding: "14px 0",
                  borderBottom:
                    index < infoItems.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="info-link clickable"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="info-link">{content}</div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Contact form card */}
        <motion.div
          className="contact-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "32px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)",
            }}
          />

          <form onSubmit={handleSubmit}>
            <div
              className="contact-form-row"
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: 6,
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: 6,
                  }}
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label
                htmlFor="contact-subject"
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: 6,
                }}
              >
                Subject
              </label>
              <input
                id="contact-subject"
                className="contact-input"
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                maxLength={150}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label
                htmlFor="contact-message"
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: 6,
                }}
              >
                Your Message *
              </label>
              <textarea
                id="contact-message"
                className="contact-input"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                maxLength={5000}
                required
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              className="send-btn"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>✦ Send Message</>
              )}
            </button>

            {status === "success" && (
              <p
                role="status"
                aria-live="polite"
                style={{
                  marginTop: 12,
                  fontSize: 12.5,
                  color: "#34d399",
                  fontFamily: "'DM Mono',monospace",
                  lineHeight: 1.7,
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                style={{
                  marginTop: 12,
                  fontSize: 12.5,
                  color: "#f87171",
                  fontFamily: "'DM Mono',monospace",
                  lineHeight: 1.7,
                }}
              >
                ⚠ {errorMessage}
              </p>
            )}

            <p
              style={{
                marginTop: 12,
                fontSize: 11,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}
            >
              Your message will be sent using FormSubmit. If this is your first
              submission, you may need to confirm your email address.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;