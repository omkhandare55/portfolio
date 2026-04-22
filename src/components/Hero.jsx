import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-background z-[-2]"></div>
      
      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center justify-center text-center">
        
        {/* Very clean minimalist profile picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 mx-auto shadow-xl">
            <img 
              src="/profile.png" 
              alt="Om Khandare" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150/111111/FFFFFF/?text=OM";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="uppercase tracking-widest sm:tracking-[0.2em] text-xs sm:text-sm text-[hsl(var(--primary))] font-semibold mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <span className="w-4 sm:w-8 h-px bg-[hsl(var(--primary))]/50"></span>
            Software Developer
            <span className="w-4 sm:w-8 h-px bg-[hsl(var(--primary))]/50"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-white leading-[1.1] sm:leading-tight px-2">
            Engineering <span className="italic font-light text-muted-foreground mr-1 sm:mr-2">elegant</span>
            <br className="hidden sm:block"/>
            digital solutions.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed px-4">
            I'm Om Khandare, a developer specializing in robust algorithms and scalable architectures. I blend clean code with intuitive design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-6">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium text-sm tracking-wide uppercase transition-transform hover:-translate-y-1 rounded-sm">
              View Projects
            </a>
            <a href="/resume.pdf" download="Om_Khandare_Resume.pdf" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide uppercase transition-colors hover:bg-white/5 rounded-sm">
              Download Resume
            </a>
          </div>
        </motion.div>
        
      </div>

      {/* Classic scroll indicator - text removed for a cleaner look */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
