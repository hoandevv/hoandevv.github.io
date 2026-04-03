import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const roles = ['Backend Developer', 'Java & Spring Boot', 'System Designer', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(ci => ci + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(ci => ci - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(ri => (ri + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hoandevv', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ho%C3%A0n-%C4%91%E1%BB%97-5174b2400/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:hoandev208@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto py-20 relative">
      {/* Terminal-style badge */}
      <div className="animate-fade-in-up mb-8">
        <span className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 text-cyan">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          Available for opportunities
        </span>
      </div>

      <div className="max-w-4xl">
        <p className="font-mono text-cyan text-base mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-8xl font-bold text-slate-lighter mb-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Đỗ Hoàn.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <span className="text-cyan">&gt; </span>
          <span className="text-slate-lighter">{displayed}</span>
          <span className="inline-block w-0.5 h-8 md:h-12 bg-cyan ml-1 animate-blink" />
        </h2>
        <p className="text-slate-light max-w-2xl text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          3rd-year Software Engineering student at{' '}
          <span className="text-cyan font-semibold">UTT</span>, passionate about building
          scalable backend systems with <span className="text-slate-lighter font-semibold">Java & Spring Boot</span>.
          Love clean architecture, distributed systems, and high-performance APIs.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5 mb-10 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          {socialLinks.map((sl) => (
            <a
              key={sl.label}
              href={sl.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sl.label}
              className="text-slate hover:text-cyan transition-all duration-300 hover:-translate-y-1"
            >
              <sl.icon size={22} />
            </a>
          ))}
          <div className="h-px w-20 bg-navy-lighter" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a href="#work" className="btn-primary text-sm px-8 py-4 group">
            View My Work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
          <a href="#about" className="font-mono text-sm text-slate hover:text-cyan px-8 py-4 border border-transparent hover:border-navy-lighter rounded transition-all duration-300">
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate animate-bounce">
        <span className="font-mono text-xs">scroll</span>
        <FaChevronDown size={14} />
      </div>
    </section>
  );
};

export default Hero;