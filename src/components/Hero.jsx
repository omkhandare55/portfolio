import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 bg-background overflow-hidden">
      
      {/* Background ambient lighting (extremely subtle copper/gold depth circle, not a neon blur) */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #EA580C 100%)' }}
      />

      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Double-ringed geometric avatar frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="w-32 h-32 rounded-full border border-dashed border-zinc-700/60 p-1.5 flex items-center justify-center relative select-none">
            {/* Spinning decorative accent line */}
            <div className="absolute inset-0 rounded-full border-t border-b border-transparent border-t-[hsl(var(--primary))]/30 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="w-full h-full rounded-full overflow-hidden border border-zinc-800 bg-zinc-900/80">
              <img 
                src="/profile.png" 
                alt="Om Khandare, Software Developer Portrait" 
                width="112"
                height="112"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-300" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full"
        >
          {/* Subtitle & Telemetry Specs */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 select-none">
            <span>[ LOC: MH, IN ]</span>
            <span className="text-zinc-700">•</span>
            <span className="text-[hsl(var(--primary))]/80 font-bold">[ DSA: 2500+ SOLVED ]</span>
            <span className="text-zinc-700">•</span>
            <span>[ LEVEL: B.TECH IT ]</span>
          </div>

          {/* Heading with subtle metallic gradient */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Engineering robust algorithms <br className="hidden sm:inline" />
            and <span className="gradient-text">scalable web systems</span>.
          </h1>

          {/* Clean Description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            I am Om Khandare, an IT student at R. C. Patel Institute of Technology. I specialize in Java, Data Structures & Algorithms, and robust full-stack web applications. I serve as Head of the Bytecraft Club and contribute to open-source initiatives.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 bg-[hsl(var(--primary))] text-black font-semibold text-xs tracking-wider uppercase rounded-lg shadow-lg shadow-amber-500/10 hover:bg-amber-400 transition-all hover:-translate-y-0.5 text-center duration-250"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Om_Khandare_Resume.pdf" 
              className="w-full sm:w-auto px-6 py-3 border border-zinc-800 bg-zinc-900/20 text-zinc-300 font-semibold text-xs tracking-wider uppercase rounded-lg hover:border-zinc-700 hover:bg-zinc-900 hover:text-white transition-all text-center duration-250"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        
      </div>

      {/* Classic scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hidden md:flex select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-zinc-600 hover:text-white transition-colors duration-250" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
