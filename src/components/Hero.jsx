import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative pt-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center justify-center text-center">
        
        {/* Profile photo with subtle border */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border border-zinc-800 mx-auto bg-zinc-900">
            <img 
              src="/profile.png" 
              alt="Om Khandare" 
              className="w-full h-full object-cover grayscale opacity-90" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
          {/* Subtitle */}
          <div className="font-mono text-xs tracking-wider text-zinc-500 uppercase mb-4">
            [ Developer Portfolio ]
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Engineering robust algorithms and scalable web systems.
          </h1>

          {/* Clean Description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            I am Om Khandare, an IT student at R. C. Patel Institute of Technology. I specialize in Java, Data Structures & Algorithms, and robust full-stack web applications. I serve as Head of the Bytecraft Club and contribute to open-source initiatives.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase transition-colors hover:bg-zinc-200 text-center"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Om_Khandare_Resume.pdf" 
              className="w-full sm:w-auto px-6 py-3 border border-zinc-800 text-zinc-300 font-semibold text-xs tracking-wider uppercase transition-colors hover:bg-zinc-900 hover:text-white text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
