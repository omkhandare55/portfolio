import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "SQL"]
    },
    {
      title: "Frontend Stack",
      skills: ["React.js", "Redux", "Tailwind CSS", "Framer Motion", "Next.js"]
    },
    {
      title: "Tools & Tech",
      skills: ["Git & GitHub", "Vite", "Node.js", "Figma", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-md text-right max-md:text-left">
            A comprehensive overview of my technical capabilities and the tools I use to build modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-card rounded-[2rem] p-8 hover:border-primary/30 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-primary hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
