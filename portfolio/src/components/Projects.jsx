import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaExternalLinkSquareAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Movie Booking System',
    description: 'A comprehensive full-stack movie ticket booking system. Features include real-time seat selection, integrated payment gateways, and a robust admin dashboard for managing screenings and theaters.',
    tech: ['Java 17', 'Spring Boot', 'MySQL', 'Redis', 'Angular', 'Docker'],
    link: 'https://github.com/hoandevv/Movie-Booking-System',
    featured: true
  },
  {
    title: 'GearShop E-commerce',
    description: 'High-performance e-commerce platform built for tech enthusiasts. Implements a complete shopping lifecycle, secure order management, and multi-factor authentication for user security.',
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'PHPMailer', 'Docker'],
    link: 'https://github.com/hoandevv/Sales-Management-Project',
    featured: true
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-16 px-4">
        <span className="heading-number text-xl">04.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Featured Projects
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid grid-cols-1 gap-12 px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative group"
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-navy-light p-8 md:p-10 rounded-lg border border-white/5 group-hover:border-cyan/30 transition-all duration-300 flex flex-col shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-mono text-cyan text-xs mb-2 tracking-widest uppercase">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-lighter group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-5 text-slate-lighter pt-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan transition-all transform hover:-translate-y-1"
                    title="View Source"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan transition-all transform hover:-translate-y-1"
                    title="External Link"
                  >
                    <FaExternalLinkAlt size={22} />
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-slate-light text-base md:text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-auto font-mono text-sm text-cyan/70">
                {project.tech.map((tech) => (
                  <li key={tech} className="relative">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;