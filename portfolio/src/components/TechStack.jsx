import React from 'react';
import {
  SiOpenjdk, SiSpringboot, SiMysql, SiPostgresql, SiRedis, SiDocker,
  SiJavascript, SiTypescript, SiPhp, SiPython,
  SiReact, SiAngular, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap,
  SiMongodb, SiGit, SiPostman, SiSwagger, SiHtml5, SiCss
} from 'react-icons/si';

const techCategories = [
  {
    title: 'Languages',
    color: 'from-blue-400 to-indigo-500',
    border: 'hover:border-blue-400/30',
    items: [
      { name: 'Java', icon: SiOpenjdk, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'from-cyan-400 to-blue-500',
    border: 'hover:border-cyan/30',
    items: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Bootstrap 5', icon: SiBootstrap, color: '#7952b3' },
    ],
  },
  {
    title: 'Tools & Databases',
    color: 'from-emerald-400 to-teal-500',
    border: 'hover:border-emerald-400/30',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'Redis', icon: SiRedis, color: '#dc382d' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-16 px-4">
        <span className="heading-number text-xl">03.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Technologies I Work With
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`relative group p-6 rounded-xl bg-navy-light border border-navy-lighter ${category.border} transition-all duration-300 overflow-hidden`}
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(100,255,218,0.04), transparent 70%)' }} />

            <h3 className={`text-sm font-bold mb-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-mono tracking-widest uppercase`}>
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-navy/60 border border-navy-lighter hover:border-cyan/30 group/item cursor-default transition-all duration-200"
                >
                  <item.icon
                    size={16}
                    style={{ color: item.color }}
                    className="shrink-0 group-hover/item:scale-110 transition-transform"
                  />
                  <span className="text-slate-light text-xs font-mono truncate group-hover/item:text-slate-lighter transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;