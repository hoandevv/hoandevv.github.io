import React from 'react';
import { FaGraduationCap, FaBrain, FaUsers, FaCode, FaRocket } from 'react-icons/fa';

const education = {
  school: 'University of Transport Technology',
  shortName: 'UTT',
  degree: 'Software Engineering',
  period: '2023 – Present',
  status: '3rd Year Student',
  highlights: [
    'Focusing on Backend Development with Java & Spring Boot ecosystem.',
    'Core subjects: Data Structures & Algorithms, Database Management Systems, Software Architecture, Web Development.',
    'Active member of the IT Student Community — coding competitions & technical workshops.',
    'Developing strong problem-solving skills and clean code practices.',
  ],
};

const strengths = [
  {
    icon: FaBrain,
    title: 'Self-Learning',
    description: 'Quickly grasps new technologies and frameworks independently.',
  },
  {
    icon: FaCode,
    title: 'Problem Solving',
    description: 'Analytical thinking to debug and optimize complex backend systems.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'Effective communication and teamwork via Git/GitHub workflows.',
  },
  {
    icon: FaRocket,
    title: 'Dedication',
    description: 'Committed to delivering high-quality, maintainable, scalable code.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-4">
      <div className="flex items-center mb-16">
        <span className="heading-number text-xl">02.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Education & Strengths
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Education Card */}
        <div className="md:col-span-3">
          <div className="relative p-7 rounded-xl bg-navy-light border border-navy-lighter hover:border-cyan/30 transition-all duration-300 overflow-hidden group">
            {/* Accent top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-cyan/10 border border-cyan/20 shrink-0">
                <FaGraduationCap className="text-cyan" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-lighter leading-tight">
                  {education.school}
                </h3>
                <p className="font-mono text-cyan text-sm mt-0.5">{education.degree}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-cyan px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5">
                {education.status}
              </span>
              <span className="font-mono text-xs text-slate">{education.period}</span>
            </div>

            <ul className="space-y-3">
              {education.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-light text-sm leading-relaxed">
                  <span className="text-cyan mt-1 shrink-0 text-xs">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strengths */}
        <div className="md:col-span-2">
          <p className="font-mono text-slate text-xs mb-5 uppercase tracking-widest">// core strengths</p>
          <div className="grid grid-cols-1 gap-3">
            {strengths.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-navy-light border border-navy-lighter hover:border-cyan/30 group transition-all duration-300 cursor-default"
              >
                <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/20 shrink-0 group-hover:bg-cyan/15 transition-colors">
                  <s.icon className="text-cyan group-hover:scale-110 transition-transform" size={14} />
                </div>
                <div>
                  <h5 className="text-slate-lighter font-bold text-sm mb-0.5">{s.title}</h5>
                  <p className="text-slate text-xs leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;