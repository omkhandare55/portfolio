import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Timeline / Story */}
          <motion.div 
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              I am a passionate <strong className="text-white">Software Developer</strong> with a strong foundation in <strong className="text-white">Java and Data Structures & Algorithms</strong>. 
              My journey began with a curiosity for how things work, which naturally led me into the world of programming.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              I thrive on solving complex algorithmic problems and building scalable web applications. My code is clean, maintainable, and optimized for performance. When I'm not pushing pixels or wrangling logic, you can find me optimizing my LeetCode solutions or diving deep into system design.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors">
                <Code2 className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Writing readable, maintainable, and robust code is my top priority.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <Terminal className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">Extensive experience in competitive programming and algorithmic puzzles.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-[2rem] p-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0C0C0C] z-0"></div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Cpu className="text-primary" /> Core Philosophy
                </h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Algorithmic Efficiency", percent: "95%" },
                    { label: "Code Architecture", percent: "90%" },
                    { label: "UI/UX Development", percent: "85%" },
                    { label: "Continuous Learning", percent: "100%" }
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.label}</span>
                        <span className="text-primary">{skill.percent}</span>
                      </div>
                      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-white/5">
                        <motion.div 
                          className="h-full bg-white"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.percent }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
