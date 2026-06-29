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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Faster loading, less artificial wait
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-white/20 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="flex flex-col items-center">
        {/* Clean, minimalist progress spinner instead of heavy rotating shapes */}
        <div className="w-10 h-10 border border-white/20 border-t-white rounded-full animate-spin" />
        <div className="mt-6 text-sm font-mono tracking-widest text-zinc-500 uppercase select-none">
          OM KHANDARE
        </div>
      </div>
    </motion.div>
  );
};

export default App;
