import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

// ✅ Update these to match your real contact details
const CONTACT_EMAIL = "chinaakther05@gmail.com";
const CONTACT_PHONE = "+8801933067666";           // used for tel: link (no spaces)
const CONTACT_PHONE_DISPLAY = "+880 1933067666";  // used for display
const WHATSAPP_NUMBER = "8801933067666";          // used for wa.me link (no + or spaces)

const infoItems = [
  { icon: "📧", label: "Email",    value: CONTACT_EMAIL,           color: "#f472b6", href: `mailto:${CONTACT_EMAIL}` },
  { icon: "📞", label: "Phone",    value: CONTACT_PHONE_DISPLAY,   color: "#a78bfa", href: `tel:${CONTACT_PHONE}` },
  { icon: "💬", label: "WhatsApp", value: CONTACT_PHONE_DISPLAY,   color: "#34d399", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: "📍", label: "Location", value: "Bangladesh",            color: "#60a5fa", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // FormSubmit.co — free, backend-free form-to-email service.
      // First submission to a new email needs a one-time confirmation click in that inbox.
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `New message from ${form.name} (portfolio)`,
          message: form.message,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{
      position: "relative", padding: "80px 24px 100px",
      background: "#07080f", overflow: "hidden",
      fontFamily: "'Sora', sans-serif", color: "#fff",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes rgb-shift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
        @keyframes shimmer-line{0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}
        @keyframes drift{0%,100%{transform:translateY(0) translateX(0);}33%{transform:translateY(-18px) translateX(8px);}66%{transform:translateY(10px) translateX(-6px);}}
        @keyframes spin { to { transform: rotate(360deg); } }

        .contact-input {
          width:100%; background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.1); border-radius:12px;
          padding:12px 16px; color:#fff;
          font-family:'Sora',sans-serif; font-size:13px; outline:none;
          transition:border-color .25s, background .25s;
        }
        .contact-input::placeholder { color:rgba(255,255,255,0.25); }
        .contact-input:focus { border-color:rgba(167,139,250,0.5); background:rgba(167,139,250,0.06); }

        .send-btn {
          width:100%; padding:13px; border:none; border-radius:100px;
          cursor:pointer; font-family:'Sora',sans-serif;
          font-size:13px; font-weight:700; letter-spacing:1.5px;
          text-transform:uppercase; color:#fff;
          background:linear-gradient(135deg,#f472b6,#a78bfa,#60a5fa);
          background-size:200% auto; animation:rgb-shift 3s linear infinite;
          transition:transform .2s, opacity .2s;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .send-btn:hover { transform:translateY(-2px); opacity:.9; }
        .send-btn:disabled { cursor:not-allowed; opacity:.7; transform:none; }

        .spinner {
          width:14px; height:14px; border-radius:50%;
          border:2px solid rgba(255,255,255,0.35); border-top-color:#fff;
          animation: spin 0.7s linear infinite;
        }

        .info-link {
          text-decoration: none; color: inherit; display: flex; align-items: center; gap: 16px;
          width: 100%; transition: transform 0.2s ease;
        }
        .info-link.clickable:hover { transform: translateX(4px); }
      `}</style>

      {/* Orbs */}
      {[
        { top: "-60px", left: "-60px", color: "rgba(244,114,182,0.15)", dur: 11 },
        { bottom: "-60px", right: "-60px", color: "rgba(96,165,250,0.13)", dur: 9, rev: true },
        { top: "40%", left: "50%", color: "rgba(167,139,250,0.1)", dur: 13, delay: "2s", tx: true },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute", borderRadius: "50%", pointerEvents: "none",
          width: 360, height: 360,
          top: o.top, bottom: o.bottom, left: o.left, right: o.right,
          transform: o.tx ? "translateX(-50%)" : undefined,
          background: `radial-gradient(circle,${o.color} 0%,transparent 65%)`,
          animation: `drift ${o.dur}s ease-in-out infinite ${o.rev ? "reverse" : ""} ${o.delay || ""}`,
        }} />
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
      <motion.div style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.15))",
          border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa",
          fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 500,
          padding: "6px 16px", borderRadius: 100, letterSpacing: ".07em",
          textTransform: "uppercase", marginBottom: "1.2rem",
        }}>✦ Say Hello</div>
        <h2 style={{
          fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-.025em",
          background: "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa,#34d399)",
          backgroundSize: "200% auto", WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent", backgroundClip: "text",
          animation: "rgb-shift 5s linear infinite", marginBottom: 8,
        }}>Get In Touch</h2>
        <div style={{
          width: 72, height: 3, borderRadius: 100, margin: "0 auto 12px",
          background: "linear-gradient(90deg,#f472b6,#a78bfa,#60a5fa)",
          backgroundSize: "200% auto", animation: "rgb-shift 3s linear infinite",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)", animation: "shimmer-line 2s ease-in-out infinite" }} />
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, maxWidth: 460, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      {/* Grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: 24, maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1,
      }}>
        {/* Info Card */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.5),transparent)" }} />
          {infoItems.map((item, i) => {
            const content = (
              <>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                  background: `${item.color}18`, border: `1px solid ${item.color}35`,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10.5, color: "rgba(255,255,255,0.35)", letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#fff" }}>{item.value}</div>
                </div>
              </>
            );
            return (
              <div key={i} style={{
                padding: "14px 0",
                borderBottom: i < infoItems.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="info-link clickable">
                    {content}
                  </a>
                ) : (
                  <div className="info-link">{content}</div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Form Card */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)" }} />

          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <input className="contact-input" type="text" name="name" placeholder="Your Name"
                value={form.name} onChange={handleChange} required />
              <input className="contact-input" type="email" name="email" placeholder="Your Email"
                value={form.email} onChange={handleChange} required />
            </div>
            <input className="contact-input" type="text" name="subject" placeholder="Subject"
              value={form.subject} onChange={handleChange} style={{ marginBottom: 12 }} />
            <textarea className="contact-input" name="message" rows={5} placeholder="Your Message"
              value={form.message} onChange={handleChange} required
              style={{ resize: "none", marginBottom: 12 }} />

            <button className="send-btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <><span className="spinner" /> Sending...</>
              ) : (
                <>✦ Send Message</>
              )}
            </button>

            {status === "success" && (
              <p style={{ marginTop: 12, fontSize: 12.5, color: "#34d399", fontFamily: "'DM Mono',monospace" }}>
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 12, fontSize: 12.5, color: "#f87171", fontFamily: "'DM Mono',monospace" }}>
                ⚠ Please fill in your name, email and message — or try again in a moment.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;