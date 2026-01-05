import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-5 text-center">

        {/* Name / Logo */}
        <h3 className="text-2xl font-bold tracking-wide mb-2">
          China Akther
        </h3>
        <p className="text-sm text-gray-200 mb-4">
          Full Stack Developer • Web Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6 text-2xl">
          <a
            href="https://www.facebook.com/sohag.gaji.14473"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/china-akther-a384b23a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/chinaakther05"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mb-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-200">
          © 2026 China Akther. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
