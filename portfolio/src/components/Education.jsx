import React from 'react';

const Education = () => {
  const education = {
    school: 'University of Transport Technology',
    degree: 'Software Engineering',
    period: '2023 - Present',
    status: '3rd Year Student',
    highlights: [
      'Focusing on Backend Development with Java & Spring Boot ecosystem.',
      'Core subjects: Data Structures and Algorithms, Database Management Systems, Software Architecture, Web Development.',
      'Active member of the IT Student Community, participating in coding competitions and technical workshops.',
      'Developing strong problem-solving skills and clean code practices.',
    ],
  };

  const strengths = [
    { title: 'Self-Learning', description: 'Ability to quickly grasp new technologies and frameworks independently.' },
    { title: 'Problem Solving', description: 'Analytical thinking to debug and optimize complex backend systems.' },
    { title: 'Teamwork', description: 'Effective communication and collaboration using Git/GitHub.' },
    { title: 'Commitment', description: 'Highly dedicated to delivering high-quality, scalable code.' },
  ];

  return (
    <section id="education" className="py-24 max-w-5xl mx-auto">
      <div className="flex items-center mb-12">
        <span className="heading-number text-xl">02.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          Education & Strengths
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Education Section */}
        <div className="md:col-span-3">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-lighter mb-1">
              {education.school}
            </h3>
            <div className="flex justify-between items-center mb-4">
              <p className="font-mono text-cyan text-sm">{education.status}</p>
              <p className="font-mono text-slate text-xs">{education.period}</p>
            </div>
            <ul className="space-y-4">
              {education.highlights.map((item, i) => (
                <li key={i} className="flex items-start text-slate-light text-base">
                  <span className="text-cyan mr-3 mt-1.5 text-xs">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="md:col-span-2">
          <h4 className="text-slate-lighter font-bold mb-6 flex items-center gap-2">
            <span className="text-cyan font-mono text-sm">/</span> Strengths
          </h4>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="group p-4 rounded bg-navy-light hover:bg-navy-lighter transition-colors border-l-2 border-cyan/30 hover:border-cyan">
                <h5 className="text-cyan font-bold mb-1 text-sm uppercase tracking-wider">{s.title}</h5>
                <p className="text-slate text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;