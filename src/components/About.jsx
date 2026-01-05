import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    ["HTML5", "E34F26", "html5", "white"],
    ["CSS3", "1572B6", "css3", "white"],
    ["JavaScript", "F7DF1E", "javascript", "black"],
    ["React", "61DAFB", "react", "black"],
    ["Next.js", "000000", "next.js", "white"],
    ["Node.js", "339933", "node.js", "white"],
    ["Express.js", "000000", "express", "white"],
    ["MongoDB", "47A248", "mongodb", "white"],
    ["Tailwind_CSS", "06B6D4", "tailwind-css", "white"],
    ["Git", "F05032", "git", "white"],
    ["GitHub", "181717", "github", "white"],
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-5 bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hello! I’m a passionate MERN Stack Developer who began exploring the inner
            workings of websites and applications out of sheer curiosity. Over time,
            I fell in love with solving problems through code and building full-stack
            applications that are functional, scalable, and visually engaging.
            <br /><br />
            I enjoy working with JavaScript, React, Node.js, MongoDB, and modern UI
            frameworks like Tailwind CSS. My goal is to build fast, responsive, and
            maintainable web applications with clean code.
            <br /><br />
            Outside of coding, I love traveling, discovering new places, listening to
            music, and learning new technologies that spark creativity.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map(([name, color, logo, logoColor], index) => (
              <motion.img
                key={index}
                src={`https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`}
                className="h-10 hover:scale-110 transition-transform duration-500"
                alt={name}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
