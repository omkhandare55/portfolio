import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Debugra', href: '#featured-project' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled ? 'bg-black border-b border-zinc-900 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-heading text-white tracking-widest hover:opacity-85 transition-opacity">
          OM.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Om_Khandare_Resume.pdf"
            className="px-4 py-1.5 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium hover:bg-zinc-900 hover:text-white transition-all"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-zinc-950 border-b border-zinc-900 w-full py-4 px-6 flex flex-col gap-4 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Om_Khandare_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono font-medium text-white hover:text-zinc-300 transition-colors"
          >
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
