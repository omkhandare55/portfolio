import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const SOCIALS = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/omkhandare55', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/omkhandare55/', label: 'LinkedIn' },
  { icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/u/OP_GAMING55/', label: 'LeetCode' },
  { icon: <SiCodechef size={16} />, href: 'https://www.codechef.com/users/rcp_fy_24616', label: 'CodeChef' },
  { icon: <Mail size={18} />, href: 'mailto:omkh4242g@gmail.com', label: 'Email' },
];

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Debugra', href: '#featured-project' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#0A0A0A]">
      {/* Amber accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#home" className="inline-block text-2xl font-bold font-heading text-white tracking-wider hover:opacity-80 transition-opacity">
              OM.
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Software Developer specializing in robust algorithms and scalable web architectures. Always building, always learning.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium py-1 transition-colors hover-trigger flex items-center gap-1 group"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  <span className="group-hover:text-white transition-colors">{link.name}</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </a>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover-trigger"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Feel free to reach out — I'm always open to new opportunities!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Om Khandare. Built with
            <Heart size={12} className="text-amber-500" fill="currentColor" />
            using React & Tailwind
          </p>
          <div className="flex gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <span>Nandurbar, India</span>
            <span>·</span>
            <a href="mailto:omkh4242g@gmail.com" className="hover:text-amber-400 transition-colors">
              omkh4242g@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
