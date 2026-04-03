import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub,   href: 'https://github.com/hoandevv',  label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ho%C3%A0n-%C4%91%E1%BB%97-5174b2400/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:hoandev208@gmail.com',    label: 'Email' },
  ];

  return (
    <footer className="py-12 px-6 text-center border-t border-navy-lighter/40">
      <div className="flex justify-center gap-6 mb-5">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-cyan transition-all duration-300 hover:-translate-y-1"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      <p className="font-mono text-xs text-slate/60">
        Designed & Built by{' '}
        <span className="text-cyan hover:text-cyan/80 transition-colors">Đỗ Hoàn</span>
      </p>
      <p className="font-mono text-xs text-slate/40 mt-1">
   
      </p>
    </footer>
  );
};

export default Footer;