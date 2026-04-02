import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'Python', 'SQL (NoSQL/Relational)', 'HTML/CSS'],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'React.js', 'Angular', 'Express.js', 'Tailwind CSS', 'Bootstrap 5'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Tools & Databases',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'Git/GitHub', 'Postman', 'Swagger (OpenAPI)'],
    color: 'from-emerald-400 to-teal-500',
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-12 px-4">
        <span className="heading-number text-xl">03.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Technologies I Work With
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid grid-cols-1 gap-6 px-4">
        {techCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-6 rounded bg-navy-light border border-transparent hover:border-cyan/20 transition-all duration-300"
          >
            <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-mono text-slate-light bg-navy-lighter/30 rounded-full border border-navy-lighter hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;