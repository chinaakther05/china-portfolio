import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-5 overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white"
    >
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-cyan-400">China Akther</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300">
            Full Stack Developer
          </p>

          <p className="text-gray-400 max-w-xl">
            I love building modern web applications and solving challenging problems.
            I enjoy exploring new technologies, designing clean UI/UX, and creating
            fast, scalable digital solutions.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start pt-4">
            <a
              href="Resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold py-3 px-7 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-300 font-semibold py-3 px-7 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-xl opacity-70"></div>
            <img
              src="https://i.ibb.co/HLjD4dVm/china2.jpg"
              alt="Profile Photo"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
