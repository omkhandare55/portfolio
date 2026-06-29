import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const SOCIALS = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/omkhandare55', label: 'GitHub' },
  { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/om-khandare-6b98a432a/', label: 'LinkedIn' },
  { icon: <SiLeetcode size={14} />, href: 'https://leetcode.com/u/OP_GAMING55/', label: 'LeetCode' },
  { icon: <SiCodechef size={14} />, href: 'https://www.codechef.com/users/rcp_fy_24616', label: 'CodeChef' },
  { icon: <Mail size={16} />, href: 'mailto:omkh4242@gmail.com', label: 'Email' },
];

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Debugra', href: '#featured-project' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left: Brand info */}
          <div className="space-y-2">
            <span className="font-heading font-bold text-white tracking-widest text-lg">
              OM KHANDARE
            </span>
            <p className="text-xs text-zinc-500 max-w-xs">
              Software Developer focused on algorithmic performance and scalable system architectures.
            </p>
          </div>

          {/* Center/Right: Navigation and Socials */}
          <div className="flex flex-col gap-6 md:items-end">
            {/* Nav list */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-zinc-500">
              {NAV_LINKS.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social list */}
            <div className="flex gap-4">
              {SOCIALS.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                  title={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600">
          <span>&copy; {new Date().getFullYear()} Om Khandare. All rights reserved.</span>
          <span>Nandurbar, Maharashtra, India</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
