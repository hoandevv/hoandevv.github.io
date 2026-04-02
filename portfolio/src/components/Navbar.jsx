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
    { href: '#about', label: '01.', text: 'About' },
    { href: '#experience', label: '02.', text: 'Experience' },
    { href: '#work', label: '03.', text: 'Work' },
    { href: '#contact', label: '04.', text: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
      isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]' : ''
    }`}>
      <a href="#" className="text-2xl font-bold text-slate-lighter hover:text-white transition-colors">
        DH
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate hover:text-cyan transition-colors link-hover"
          >
            <span className="text-cyan font-mono mr-1">{link.label}</span>
            {link.text}
          </a>
        ))}
        
        <a
          href="mailto:hoandev208@gmail.com"
          className="btn-primary"
        >
          Resume
        </a>
      </div>

      <button
        className="md:hidden text-slate-light hover:text-cyan"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-navy/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 text-slate-light hover:text-cyan"
            onClick={() => setIsMobileMenuOpen(false)}
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
                <span className="text-cyan mr-2">{link.label}</span>
                {link.text}
              </a>
            ))}
            <a href="mailto:hoandev208@gmail.com" className="btn-primary mt-4">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;