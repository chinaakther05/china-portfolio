// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      desc: "A responsive web application built with HTML, CSS, and JavaScript. Users can interact and explore dynamic content.",
      img: "https://i.ibb.co/FqDRbTM6/5c6b847f-1463-4306-9222-32945d342e46.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://warmpaws-pet-care.surge.sh/",
      github: "https://github.com/chinaakther05",
    },
    {
      title: "Project Two",
      desc: "An e-commerce platform with interactive UI, dynamic product listing, and secure checkout functionality.",
      img: "https://i.ibb.co/wZmYtRr6/b3657f77-c42c-4f92-bed0-ebe14d1b4735.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      live: "https://astonishing-parfait-83d6d0.netlify.app/",
      github: "https://github.com/chinaakther05",
    },
    {
      title: "Project Three",
      desc: "A personal portfolio website showcasing skills, projects, and a contact section with responsive design.",
      img: "https://i.ibb.co/yBWMJCPV/91266ec3-3e8c-4b6e-b752-b90d4d0b6c87.jpg",
      tech: ["Next.js", "TailwindCSS"],
      live: "https://smart-home-37fee.web.app/",
      github: "https://github.com/chinaakther05",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-5 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my selected projects showcasing my skills in frontend and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 p-5 flex flex-col"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="font-bold text-xl mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 mb-3">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 rounded-full hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-cyan-400 text-cyan-300 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
