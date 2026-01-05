import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4 text-white">
        
        {/* Logo on Left */}
        <a href="#home" className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:scale-105 transition-transform">
  CHINA
</a>


        {/* Desktop Menu on Right */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Hamburger Button on Right */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 pb-6 flex flex-col gap-4 text-white">
          <a href="#home" className="hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
