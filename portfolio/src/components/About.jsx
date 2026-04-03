import React from 'react';
import avtHoan from '../assets/images/avt_hoan.jpg';
import { FaCode, FaServer, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const stats = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Commits', value: '200+' },
];

const focusAreas = [
  { icon: FaServer, label: 'Backend Engineering', desc: 'REST APIs, microservices' },
  { icon: FaDatabase, label: 'Database Design', desc: 'MySQL, PostgreSQL, Redis' },
  { icon: FaCode, label: 'Clean Architecture', desc: 'SOLID principles, design patterns' },
];

const recentTech = ['Java (Spring Boot)', 'Spring Security', 'Redis', 'Docker'];

const About = () => {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4">
      <div className="flex items-center mb-16">
        <span className="heading-number text-xl">01.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          About Me
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Text content */}
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-4 text-slate-light text-base md:text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-cyan font-semibold">Đỗ Hoàn</span>, a backend developer
              born in 2005. I started my software development journey in 2023 with a deep focus on
              building <span className="text-slate-lighter font-medium">reliable, scalable backend systems</span>.
            </p>
            <p>
              Currently a 3rd-year student at{' '}
              <span className="text-slate-lighter font-medium">University of Transport Technology</span>,
              I spend most of my time designing robust APIs, optimizing database performance,
              and exploring distributed system concepts.
            </p>
            <p>
              I'm especially passionate about{' '}
              <span className="text-cyan font-semibold">system design</span>,{' '}
              <span className="text-cyan font-semibold">performance optimization</span>, and
              building services that scale gracefully under real-world conditions.
            </p>
          </div>

          {/* Recent tech */}
          <div>
            <p className="font-mono text-slate text-sm mb-3">// recent tech focus</p>
            <div className="flex flex-wrap gap-2">
              {recentTech.map((t) => (
                <span key={t} className="font-mono text-xs text-cyan px-3 py-1 border border-cyan/30 rounded-full bg-cyan/5 hover:bg-cyan/10 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-lg bg-navy-light border border-navy-lighter hover:border-cyan/30 transition-colors">
                <div className="text-2xl font-bold text-cyan mb-1">{s.value}</div>
                <div className="text-xs font-mono text-slate">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: photo + focus areas */}
        <div className="md:col-span-2 space-y-8">
          {/* Avatar */}
          <div className="relative group mx-auto max-w-[240px]">
            <div className="relative z-10">
              <div className="absolute inset-0 border-2 border-cyan rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="aspect-square rounded-lg overflow-hidden bg-cyan">
                <img
                  src={avtHoan}
                  alt="Đỗ Hoàn"
                  className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div className="space-y-3">
            {focusAreas.map((area) => (
              <div key={area.label} className="flex items-start gap-3 p-4 rounded-lg bg-navy-light border border-navy-lighter hover:border-cyan/30 group transition-all duration-300">
                <area.icon className="text-cyan mt-0.5 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <div>
                  <p className="text-slate-lighter text-sm font-semibold">{area.label}</p>
                  <p className="text-slate text-xs font-mono mt-0.5">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;