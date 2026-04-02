import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const experienceData = [
  {
    company: 'Movie Booking System',
    role: 'Backend Developer',
    period: '2024 - Present',
    description: 'Full-stack movie ticket booking system with real-time seat reservation.',
    highlights: [
      'Built RESTful APIs with Spring Boot and Spring Security',
      'Implemented distributed locking with Redis for seat reservation',
      'Designed MySQL database schema with efficient indexing',
      'Dockerized application for easy deployment',
    ],
    tech: ['Java 17', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'Angular'],
    link: 'https://github.com/hoandevv/Movie-Booking-System',
  },
  {
    company: 'GearShop E-commerce',
    role: 'Full Stack Developer',
    period: '2023 - 2024',
    description: 'E-commerce platform for selling tech equipment with complete shopping flow.',
    highlights: [
      'Developed PHP-based backend with MVC architecture',
      'Implemented shopping cart, checkout, and order management',
      'Added OTP verification via email with PHPMailer',
      'Built admin dashboard for product and order management',
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'Docker'],
    link: 'https://github.com/hoandevv/Sales-Management-Project',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="min-h-screen py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <span className="heading-number">02.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Where I've Worked
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab List */}
        <div className="md:w-1/4 flex md:flex-col gap-2">
          {experienceData.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`text-left px-4 py-3 font-mono text-sm transition-all border-l-2 ${
                activeTab === index
                  ? 'border-cyan text-cyan bg-navy-light'
                  : 'border-transparent text-slate hover:text-slate-lighter hover:bg-navy-light/50'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="md:w-3/4 animate-fade-in-up delay-200">
          <h3 className="text-xl font-bold text-slate-lighter mb-1">
            {experienceData[activeTab].role}
            <span className="text-cyan"> @ {experienceData[activeTab].company}</span>
          </h3>
          <p className="font-mono text-sm text-slate mb-4">
            {experienceData[activeTab].period}
          </p>
          <p className="text-slate mb-4 leading-relaxed">
            {experienceData[activeTab].description}
          </p>
          <ul className="space-y-2 mb-6">
            {experienceData[activeTab].highlights.map((highlight, i) => (
              <li key={i} className="flex items-start text-slate text-sm">
                <span className="text-cyan mr-2 mt-1">▹</span>
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {experienceData[activeTab].tech.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-cyan"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;