import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto py-20">
      <div className="max-w-4xl">
        <p className="font-mono text-cyan text-lg mb-5 animate-fade-in-up">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-8xl font-bold text-slate-lighter mb-4 animate-fade-in-up delay-100">
          Đỗ Hoàn.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8 leading-tight animate-fade-in-up delay-200">
          I build things for the <span className="text-slate-lighter">web</span>.
        </h2>
        <p className="text-slate-light max-w-2xl text-xl mb-12 leading-relaxed animate-fade-in-up delay-300">
          I'm a Backend Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently a 3rd-year student at UTT, focused on building accessible, human-centered products with Java & Spring Boot.
        </p>
        
        <div className="animate-fade-in-up delay-400">
          <a
            href="#work"
            className="btn-primary text-lg px-10 py-5"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;