import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white"
    >
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Hi, I'm <span className="text-cyan-400">China Akther</span>
          </motion.h1>

          {/* Designation */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-gray-400 max-w-xl mx-auto md:mx-0"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          >
            I create seamless web experiences using the MERN stack — MongoDB, Express, React, and Node.js.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap justify-center md:justify-start pt-4"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="Resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold py-3 px-7 rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-300 font-semibold py-3 px-7 rounded-full hover:bg-cyan-400 hover:text-black transition transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Floating Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.4 }}
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-3xl opacity-50"></div>

          {/* Floating Profile Image */}
          <motion.img
            src="https://i.ibb.co/HLjD4dVm/china2.jpg"
            alt="Profile Photo"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            animate={{
              y: [0, -15, 0, -10, 0],
              rotate: [0, 2, -2, 1, 0],
              scale: [1, 1.03, 1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
