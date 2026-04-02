import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hoandevv', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/hoandevv', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:hoandev208@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-6 text-center">
      <div className="flex justify-center gap-6 mb-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-cyan transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-slate">
        Built by <span className="text-cyan">Đỗ Hoàn</span>
      </p>
    </footer>
  );
};

export default Footer;