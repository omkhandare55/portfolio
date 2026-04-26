import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiGit, SiFigma, SiVite, SiRedux,
  SiMongodb, SiFirebase,
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { Code2, Server, Wrench, Sparkles } from 'lucide-react';

/* ─── DATA ──────────────────────────────────────────────────────────── */

const categories = [
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    accent: '#f59e0b',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 90 },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript />, level: 88 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'SQL', icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    title: 'Frontend Stack',
    icon: <Sparkles size={20} />,
    accent: '#fbbf24',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 92 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 72 },
      { name: 'Redux', icon: <SiRedux />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 93 },
      { name: 'Framer Motion', icon: <SiReact />, level: 85 },
    ],
  },
  {
    title: 'Tools & Backend',
    icon: <Wrench size={20} />,
    accent: '#d97706',
    skills: [
      { name: 'Git & GitHub', icon: <SiGit />, level: 88 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 82 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      { name: 'Firebase', icon: <SiFirebase />, level: 78 },
      { name: 'Vite', icon: <SiVite />, level: 90 },
      { name: 'Figma', icon: <SiFigma />, level: 70 },
      { name: 'REST APIs', icon: <Server size={16} />, level: 88 },
    ],
  },
];

const LEARNING = ['Docker', 'AWS', 'GraphQL', 'Prisma', 'System Design'];

/* ─── SkillPill with animated bar ─────────────────────────────────── */

const SkillPill = ({ skill, accent, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.04, y: -2 }}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Icon */}
      <span
        className="text-base flex-shrink-0 transition-colors duration-300"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {skill.icon}
      </span>

      {/* Name + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-white/80 truncate">{skill.name}</span>
          <span
            className="text-[10px] font-bold tabular-nums opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: accent }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 0.9, delay: delay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Category Card with spotlight ─────────────────────────────────── */

const CategoryCard = ({ category, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl p-px cursor-default"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${category.accent}18, transparent 80%)`,
        }}
      />

      <div
        className="relative rounded-2xl p-7 h-full flex flex-col"
        style={{ background: '#0d0d0d' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${category.accent}18`,
              border: `1px solid ${category.accent}35`,
              color: category.accent,
            }}
          >
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">
            {category.title}
          </h3>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {category.skills.length} skills
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-2">
          {category.skills.map((skill, sIdx) => (
            <SkillPill
              key={sIdx}
              skill={skill}
              accent={category.accent}
              delay={index * 0.15 + sIdx * 0.06}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN ──────────────────────────────────────────────────────────── */

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <div className="w-24 h-1 bg-white/20 rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-md text-right max-md:text-left">
            A comprehensive overview of my technical capabilities and the tools I use to build modern applications.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} index={idx} />
          ))}
        </div>

        {/* Currently Learning ticker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3 flex-wrap"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.2)',
              color: '#f59e0b',
            }}
          >
            Currently Learning
          </span>
          {LEARNING.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
