import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative max-w-md w-full mx-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 z-0" 
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.03),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full glass-card rounded-3xl overflow-hidden border border-white/10 z-10 flex flex-col">
        {/* Project Image Placeholder / Container */}
        <div className="w-full h-56 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <div className="w-full h-full bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
            {/* Replace with actual image */}
            <div className="text-4xl font-bold font-heading text-white/20">
              {project.title.charAt(0)}
            </div>
          </div>
          
          {/* Tags floating on image */}
          <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground flex-grow mb-6 text-sm line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div className="flex gap-4">
              <a href={project.github} className="text-foreground/70 hover:text-white transition-colors hover-trigger" target="_blank" rel="noreferrer">
                <FaGithub size={20} />
              </a>
              <a href={project.live} className="text-foreground/70 hover:text-primary transition-colors hover-trigger" target="_blank" rel="noreferrer">
                <ExternalLink size={20} />
              </a>
            </div>
            <a href={project.live} className="text-sm font-medium text-primary hover:underline hover-trigger">
              View Details
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "NoteFlow",
      description: "A modern, AI-powered note-taking application. Features include secure Google Authentication, Markdown support, AI-driven summarization, Flashcard generation, and Cloud Storage.",
      tags: ["React 18", "TailwindCSS", "Firebase", "OpenAI API"],
      github: "https://github.com/omkhandare55/Notes_App.git",
      live: "https://notes-app-five-swart-56.vercel.app"
    },
    {
      title: "CPU Scheduling Simulator",
      description: "An interactive educational tool that visualizes various CPU scheduling algorithms like FCFS, SJF, and Round Robin. Calculates average waiting and turnaround times.",
      tags: ["Algorithms", "OS Concepts", "JavaScript"],
      github: "https://github.com/omkhandare55/CPU-Scheduling-Simulator.git",
      live: "#"
    },
    {
      title: "EcoLearn",
      description: "A gamified environmental education platform promoting sustainability. Features interactive modules, real-world activity tracking, and a comprehensive badge/reward system.",
      tags: ["JavaScript", "HTML5/CSS3", "Gamification", "EdTech"],
      github: "https://github.com/omkhandare55/EcoLearn.git",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/omkhandare55" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors glass group hover-trigger">
            <span>View All Projects on GitHub</span>
            <FaGithub size={18} className="group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
