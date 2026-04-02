import React from 'react';
import avtHoan from '../assets/images/avt_hoan.jpg';

const About = () => {
  const recentTech = ['Java (Spring Boot)', 'React', 'Node.js', 'PostgreSQL', 'Docker'];

  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4">
      <div className="flex items-center mb-12">
        <span className="heading-number text-xl">01.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lighter">
          About Me
        </h2>
        <div className="h-px bg-navy-lighter flex-1 ml-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-slate-light text-lg leading-relaxed">
          <p>
            Hello! My name is <span className="text-cyan font-semibold">Đỗ Hoàn</span>. 
            Born in 2005, I began my journey into software development in 2025, 
            with a dedicated focus on <span className="text-slate-lighter">backend engineering</span>. 
            What started as pure curiosity quickly transformed into a serious pursuit of building 
            systems that are reliable, scalable, and efficient.
          </p>

          <p>
            Since then, I’ve been dedicating my time to learning and working with backend technologies—designing 
            robust <span className="text-slate-lighter">APIs</span>, managing <span className="text-slate-lighter">databases</span>, 
            and understanding how complex systems operate under real-world conditions. I’m especially 
            interested in areas like <span className="text-cyan font-bold">system design, performance optimization</span>, 
            and building services that can handle significant growth.
          </p>

            <p>
            These days, my main focus is improving my technical depth, working with modern frameworks, 
            and continuously sharpening my problem-solving mindset through practical, hands-on projects.
          </p>

        </div>

        <div className="relative group mx-auto md:mx-0 max-w-[300px]">
          <div className="relative z-10">
            <div className="absolute inset-0 border-2 border-cyan rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
            <div className="aspect-square rounded overflow-hidden bg-cyan">
               <img 
                src={avtHoan} 
                alt="Đỗ Hoàn" 
                className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;