import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background py-8 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Om Khandare. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors hover-trigger">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors hover-trigger">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
