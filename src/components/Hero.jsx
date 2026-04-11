import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-background mix-blend-multiply opacity-50 z-[-1]"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center md:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full glass mb-6 border border-primary/30"
            >
              <span className="text-sm font-medium text-primary">👋 Welcome to my portfolio</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 leading-tight">
              Hi, I'm <br/>
              <span className="gradient-text">Om Khandare</span>
            </h1>
            
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Developer <span className="text-primary">|</span> DSA (Java) Enthusiast
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto md:mx-0 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building digital experiences that combine stunning design with robust engineering. I turn complex problems into elegant, scaleable solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden hover-trigger">
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              </a>
              
              <a href="#contact" className="px-8 py-4 font-semibold rounded-full border border-white/20 hover:border-primary/50 hover:bg-white/5 transition-colors flex items-center gap-2 hover-trigger glass">
                Let's Talk
              </a>
            </motion.div>

            <motion.div 
              className="mt-12 flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: <FaGithub size={24} />, href: "https://github.com/omkhandare55" },
                { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/om-khandare-6b98a432a" },
                { icon: <Mail size={24} />, href: "mailto:omkh4242g@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform hover-trigger"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 right-side relative max-md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[400px] h-[500px] mx-auto glow-border rounded-3xl p-1">
              <div className="w-full h-full glass-card rounded-[22px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {/* 3D or cool abstract visualization could go here */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-black/40">
                  <motion.div 
                    className="w-32 h-32 rounded-full border-2 border-primary border-t-accent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute font-heading font-bold text-4xl tracking-widest text-glow">
                    &lt;/&gt;
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -top-10 -right-10 glass px-6 py-4 rounded-2xl border-white/10 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xl font-bold text-white mb-1">500+</div>
              <div className="text-xs text-muted-foreground">DSA Problems</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-16 glass px-6 py-4 rounded-2xl border-white/10 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-xl font-bold text-accent mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Commitment</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
