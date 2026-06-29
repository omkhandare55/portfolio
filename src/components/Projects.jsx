import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useInView, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, BookOpen, Leaf } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import {
  SiReact, SiTailwindcss, SiFirebase, SiJavascript, SiNodedotjs,
} from 'react-icons/si';

/* ─── PROJECT DATA ──────────────────────────────────────────────── */

const projects = [
  {
    title: 'NoteFlow',
    description:
      'An AI-powered note management platform inspired by Notion. Implements secure Google Auth, Markdown support, AI-driven summarization, flashcard generation, and Firestore synchronization. Secured 2nd Runner-Up at Technovate 2026.',
    tags: ['React.js', 'TailwindCSS', 'Firebase', 'OpenAI API'],
    icons: [<SiReact key="r" />, <SiTailwindcss key="t" />, <SiFirebase key="f" />],
    github: 'https://github.com/omkhandare55/Notes_App.git',
    live: 'https://notes-app-five-swart-56.vercel.app',
    accent: '#a855f7', // Psychic Purple
    emoji: '📝',
    heroIcon: <Sparkles size={48} />,
    pokeType: '🔮 Psychic / React.js',
    hp: '120 HP',
  },
  {
    title: 'Election Education Assistant',
    description:
      'An ultra-secure, Google Gemini-powered educational platform designed to inform voters. Built with a clustered Next.js/Express architecture, Firebase, Helmet security layers, and Supertest test suites. Deployed on Google Cloud Run.',
    tags: ['Next.js', 'Gemini AI', 'Express.js', 'Firebase', 'Jest'],
    icons: [<SiReact key="nx" />, <SiNodedotjs key="nd" />, <SiFirebase key="fb" />],
    github: 'https://github.com/omkhandare55',
    live: 'https://election-assistant-9504743892.us-central1.run.app',
    accent: '#eab308', // Electric Yellow
    emoji: '🗳️',
    heroIcon: <BookOpen size={48} />,
    pokeType: '⚡ Electric / Next.js',
    hp: '160 HP',
  },
  {
    title: 'CPU Scheduling Simulator',
    description:
      'An interactive educational tool that visualizes various CPU scheduling algorithms like FCFS, SJF, and Round Robin. Calculates average waiting and turnaround times.',
    tags: ['Algorithms', 'OS Concepts', 'JavaScript'],
    icons: [<SiJavascript key="j" />],
    github: 'https://github.com/omkhandare55/CPU-Scheduling-Simulator.git',
    live: '#',
    accent: '#94a3b8', // Steel Gray
    emoji: '⚙️',
    heroIcon: <Leaf size={48} />,
    pokeType: '🛡️ Steel / JavaScript',
    hp: '100 HP',
  },
];

/* ─── Project Card ─────────────────────────────────────────────── */

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  // 3D Tilt rotations
  const rotateX = useTransform(mouseY, [0, 320], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 320], [-8, 8]);

  // Holographic reflection percentages
  const xPct = useTransform(mouseX, [0, 320], [0, 100]);
  const yPct = useTransform(mouseY, [0, 320], [0, 100]);

  const holoBackground = useMotionTemplate`radial-gradient(
    circle at ${xPct}% ${yPct}%,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0.04) 35%,
    transparent 70%
  )`;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(160); // reset tilt
    mouseY.set(160);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative max-w-md w-full mx-auto holo-card cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Light sheen that moves with the cursor */}
      <motion.div className="holo-shine" style={{ background: holoBackground }} />

      {/* Spotlight hover border glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${project.accent}20,
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full rounded-2xl overflow-hidden border border-white/[0.08] z-10 flex flex-col" style={{ background: '#0d0d0d' }}>
        
        {/* Pokémon Trading Card Header details */}
        <div className="flex justify-between items-center px-5 pt-4 pb-2 border-b border-white/[0.04] text-[9px] font-extrabold uppercase tracking-widest text-white/40">
          <span>{project.pokeType}</span>
          <span style={{ color: project.accent }} className="font-mono">{project.hp}</span>
        </div>

        {/* Visual Header — gradient + icon instead of placeholder image */}
        <div className="w-full h-44 relative overflow-hidden flex items-center justify-center border-b border-white/[0.04]">
          {/* Ambient gradient bg */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, ${project.accent}15 0%, transparent 70%), linear-gradient(180deg, ${project.accent}08 0%, #0d0d0d 100%)`,
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Hero icon */}
          <motion.div
            className="relative z-10 transition-transform duration-700 group-hover:scale-110"
            style={{ color: `${project.accent}60` }}
          >
            {project.heroIcon}
          </motion.div>
          {/* Floating emoji */}
          <motion.div
            className="absolute top-4 right-4 text-2xl z-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {project.emoji}
          </motion.div>

          {/* Tags floating on header */}
          <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: 'linear-gradient(transparent, #0d0d0d)' }} />
        </div>

        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-400"
            />
          </h3>
          <p className="flex-grow mb-5 text-sm leading-relaxed line-clamp-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {project.description}
          </p>

          {/* Tech icons */}
          <div className="flex items-center gap-2 mb-5">
            {project.icons.map((icon, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {icon}
              </span>
            ))}
            {project.tags.length > project.icons.length && (
              <span className="text-[10px] font-medium px-2 py-1 rounded-md" style={{ color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.03)' }}>
                +{project.tags.length - project.icons.length} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover-trigger hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                <FaGithub size={16} />
              </a>
              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover-trigger hover:scale-110"
                  style={{
                    background: 'rgba(245,158,11,0.1)',
                    border: '1px solid rgba(245,158,11,0.2)',
                    color: '#f59e0b',
                  }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold flex items-center gap-1 hover-trigger"
                style={{ color: project.accent }}
              >
                Live Demo
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN ──────────────────────────────────────────────────────── */

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.01) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="https://github.com/omkhandare55"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium hover-trigger"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            <span>View All Projects on GitHub</span>
            <FaGithub size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
