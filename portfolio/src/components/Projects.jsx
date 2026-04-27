import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiOpenjdk, SiSpringboot, SiMysql, SiRedis, SiAngular, SiDocker,
  SiPhp, SiBootstrap,
} from 'react-icons/si';

const techIcons = {
  'Java 17': SiOpenjdk,
  'Spring Boot': SiSpringboot,
  MySQL: SiMysql,
  Redis: SiRedis,
  Docker: SiDocker,
  Angular: SiAngular,
  PHP: SiPhp,
  'Bootstrap 5': SiBootstrap,
};

const projects = [
  {
    title: 'Warehouse Management System',
    description:
      'Backend system for warehouse management. Handles import/export operations with transactional consistency, real-time inventory tracking, and role-based access control.',
    tech: ['Java 17', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
    link: 'https://github.com/hoandevv/Warehouse-Management',
    highlights: [
      'Managed products, batches, and real-time inventory tracking',
      'Handled import/export operations with transactional consistency',
      'Improved query performance using Redis caching',
      'Designed RESTful APIs with role-based access control (RBAC)',
      'Implemented pagination & filtering for products & transaction history',
    ],
    badge: 'Backend',
  },
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
  },
];

const badgeStyles = {
  Backend: 'from-emerald-400/15 to-emerald-400/5 text-emerald-300 border-emerald-300/25',
  'Full-Stack': 'from-cyan/15 to-cyan/5 text-cyan border-cyan/25',
  'E-commerce': 'from-amber-300/15 to-amber-300/5 text-amber-200 border-amber-200/25',
};

const Projects = () => {
  return (
    <section id="work" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <div className="flex items-center mb-16">
        <span className="heading-number text-xl">04.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Featured Projects
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-navy-lighter bg-gradient-to-br from-navy-light via-navy-light to-navy shadow-[0_20px_70px_-40px_rgba(2,12,27,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(100,255,218,0.10),transparent_55%)]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[96px_1fr]">
              <div className="border-b lg:border-b-0 lg:border-r border-navy-lighter bg-navy/60 px-5 py-6 lg:py-8">
                <p className="font-mono text-[11px] text-slate tracking-[0.2em] uppercase mb-4">Project</p>
                <p className="font-mono text-2xl text-slate-lighter/70">{String(index + 1).padStart(2, '0')}</p>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-3">
                      <span
                        className={`font-mono text-[11px] tracking-wider uppercase px-3 py-1 rounded-full border bg-gradient-to-r ${badgeStyles[project.badge]}`}
                      >
                        {project.badge}
                      </span>
                      <p className="font-mono text-[11px] text-slate tracking-[0.15em] uppercase">Featured Project</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-lighter group-hover:text-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-3 text-slate">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-navy-lighter bg-navy/60 flex items-center justify-center hover:text-cyan hover:border-cyan/35 transition-all duration-200"
                      title="View Source on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-navy-lighter bg-navy/60 flex items-center justify-center hover:text-cyan hover:border-cyan/35 transition-all duration-200"
                      title="External Link"
                    >
                      <FaExternalLinkAlt size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-light text-base leading-relaxed mb-7 max-w-3xl">
                  {project.description}
                </p>

                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-slate text-sm leading-relaxed">
                      <span className="text-cyan mt-1 shrink-0">◆</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 pt-5 border-t border-navy-lighter">
                  {project.tech.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-light px-3 py-1.5 rounded-full bg-navy/80 border border-navy-lighter hover:border-cyan/30 hover:text-cyan transition-all duration-200"
                      >
                        {Icon && <Icon size={12} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
