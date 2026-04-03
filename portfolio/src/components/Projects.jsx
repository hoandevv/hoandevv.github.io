import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiOpenjdk, SiSpringboot, SiMysql, SiRedis, SiAngular, SiDocker,
  SiPhp, SiBootstrap
} from 'react-icons/si';

const techIcons = {
  'Java 17': SiOpenjdk,
  'Spring Boot': SiSpringboot,
  'MySQL': SiMysql,
  'Redis': SiRedis,
  'Docker': SiDocker,
  'Angular': SiAngular,
  'PHP': SiPhp,
  'Bootstrap 5': SiBootstrap,
};

const projects = [
  {
    title: 'Movie Booking System',
    description:
      'A comprehensive full-stack movie ticket booking platform. Features real-time seat reservation with distributed locking, integrated payment flow, and an admin dashboard for managing screenings, theaters, and analytics.',
    tech: ['Java 17', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Angular'],
    link: 'https://github.com/hoandevv/Movie-Booking-System',
    highlights: [
      'Built RESTful APIs with Spring Boot & Spring Security',
      'Distributed locking with Redis for concurrent seat reservation',
      'Efficient MySQL schema design with optimized indexing',
      'Fully Dockerized for streamlined deployment',
    ],
    badge: 'Full-Stack',
    badgeColor: 'text-cyan border-cyan/40 bg-cyan/5',
  },
  {
    title: 'GearShop E-commerce',
    description:
      'High-performance e-commerce platform for tech enthusiasts. Implements a complete shopping lifecycle, OTP-based authentication, secure order management, and a full-featured admin panel.',
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'Docker'],
    link: 'https://github.com/hoandevv/Sales-Management-Project',
    highlights: [
      'PHP MVC backend with clean separation of concerns',
      'Shopping cart, checkout, and order lifecycle management',
      'OTP verification via email with PHPMailer',
      'Admin dashboard for product, order, and user management',
    ],
    badge: 'E-commerce',
    badgeColor: 'text-purple-400 border-purple-400/40 bg-purple-400/5',
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

      <div className="grid grid-cols-1 gap-10 px-4">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            {/* Ambient glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-cyan/20 via-purple-500/10 to-cyan/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-navy-light rounded-xl border border-navy-lighter group-hover:border-cyan/20 transition-all duration-300 overflow-hidden">
              {/* Top accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="font-mono text-xs text-slate tracking-widest uppercase">Featured Project</p>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>
                  <div className="flex gap-4 text-slate">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan transition-all duration-200 hover:-translate-y-0.5"
                      title="View Source on GitHub"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan transition-all duration-200 hover:-translate-y-0.5"
                      title="External Link"
                    >
                      <FaExternalLinkAlt size={19} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-lighter mb-4 group-hover:text-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-light text-base leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate text-sm">
                      <span className="text-cyan mt-1 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-lighter">
                  {project.tech.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-light px-3 py-1.5 rounded-full bg-navy border border-navy-lighter hover:border-cyan/30 hover:text-cyan transition-all duration-200"
                      >
                        {Icon && <Icon size={12} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;