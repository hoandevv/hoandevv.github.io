import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about',    label: '01.', text: 'About' },
    { href: '#education', label: '02.', text: 'Education' },
    { href: '#tech',     label: '03.', text: 'Tech' },
    { href: '#work',     label: '04.', text: 'Projects' },
    { href: '#github',   label: '05.', text: 'GitHub' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
      isScrolled
        ? 'bg-navy/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] border-b border-navy-lighter/40'
        : ''
    }`}>
      {/* Logo */}
      <a href="#" className="group flex items-center gap-2 text-slate-lighter hover:text-cyan transition-colors">
        <span className="font-mono text-cyan text-lg font-bold">&lt;</span>
        <span className="text-lg font-bold tracking-wide">DH</span>
        <span className="font-mono text-cyan text-lg font-bold">/&gt;</span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate hover:text-cyan transition-colors duration-200 group"
          >
            <span className="text-cyan font-mono text-xs mr-1 opacity-70 group-hover:opacity-100">{link.label}</span>
            {link.text}
          </a>
        ))}

        <a
          href="https://github.com/hoandevv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-cyan transition-colors ml-2"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="mailto:hoandev208@gmail.com"
          className="btn-primary text-xs px-5 py-2.5 ml-2"
        >
          Contact
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-light hover:text-cyan transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-navy/97 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 text-slate-light hover:text-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-mono text-slate-light hover:text-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-cyan mr-2 text-sm">{link.label}</span>
                {link.text}
              </a>
            ))}
            <a href="mailto:hoandev208@gmail.com" className="btn-primary mt-4">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;