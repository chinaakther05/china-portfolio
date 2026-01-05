import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-cyan-400 uppercase tracking-widest">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold text-white">chinaakther05@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 text-xl">
                <FaPhone />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-semibold text-white">+880 1933067666</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 text-xl">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="font-semibold text-white">+880 1933067666</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 p-3 text-white rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2 p-3 text-white rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 text-white rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full text-white p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
