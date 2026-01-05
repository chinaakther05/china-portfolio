import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-5 text-center">

        {/* Name / Logo */}
        <motion.h3
          className="text-2xl font-bold tracking-wide mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          China Akther
        </motion.h3>
        <motion.p
          className="text-sm text-gray-200 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer • Web Enthusiast
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[ 
            { icon: <FaFacebook />, link: "https://www.facebook.com/sohag.gaji.14473" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/china-akther-a384b23a2/" },
            { icon: <FaGithub />, link: "https://github.com/chinaakther05" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mb-4"></div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          © 2026 China Akther. All rights reserved.
        </motion.p>

      </div>
    </motion.footer>
  );
};

export default Footer;
