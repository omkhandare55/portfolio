import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('fire'); // 'fire' | 'water' | 'grass' | 'electric'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const themeClass = theme === 'fire' ? '' : `theme-${theme}`;

  return (
    <div className={`relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground ${themeClass}`}>
      <CustomCursor />
      <ScrollProgress />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            <ParticleBackground theme={theme} />
            <Navbar theme={theme} setTheme={setTheme} />
            <main className="flex-grow z-10">
              <Hero theme={theme} setTheme={setTheme} />
              <About />
              <Skills />
              <Projects theme={theme} />
              <FeaturedProject />
              <Experience />
              <Achievements />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 border-4 border-primary border-t-accent"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-bold font-heading tracking-widest text-glow"
        >
          OM KHANDARE
        </motion.div>
      </div>
    </motion.div>
  );
};

export default App;
