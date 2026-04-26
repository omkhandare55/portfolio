import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  Trophy, ExternalLink, Zap, Shield, Users, Code2,
  GitBranch, Layers, Lock, Terminal, CheckCircle2, ArrowRight, Star
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiSocketdotio, SiMongodb,
  SiExpress, SiJsonwebtokens, SiTailwindcss, SiVercel,
  SiRedis,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: <Lock size={22} />,
    title: 'Role-Based Editing',
    desc: 'Host controls who types — mutex-style permission system prevents ghost edits and merge conflicts in real time.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Live Conflict Prevention',
    desc: 'Operational-transform logic keeps every participant\u2019s view in sync with zero edit collision.',
  },
  {
    icon: <Users size={22} />,
    title: 'Multi-User Rooms',
    desc: 'Shareable room codes let teammates join instantly. Presence indicators show who\u2019s watching vs. editing.',
  },
  {
    icon: <Terminal size={22} />,
    title: 'In-Browser Compiler',
    desc: 'Execute code directly in the editor with real-time output — powered by Wandbox API across 10+ languages.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Monaco Editor Core',
    desc: 'The same engine powering VS Code — syntax highlighting, IntelliSense, and multi-language support baked in.',
  },
  {
    icon: <Shield size={22} />,
    title: 'JWT Auth & Sessions',
    desc: 'Secure room creation with token-based auth. Only authenticated hosts can grant or revoke edit rights.',
  },
];

const TECH_STACK = [
  { icon: <SiReact />, label: 'React 19', color: '#61DAFB' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#68A063' },
  { icon: <SiSocketdotio />, label: 'Socket.IO', color: '#ffffff' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
  { icon: <SiExpress />, label: 'Express', color: '#efefef' },
  { icon: <SiJsonwebtokens />, label: 'JWT', color: '#d63aff' },
  { icon: <VscCode />, label: 'Monaco Editor', color: '#007ACC' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: '#38BDF8' },
  { icon: <SiVercel />, label: 'Vercel', color: '#ffffff' },
  { icon: <SiRedis />, label: 'Redis', color: '#FF4438' },
];

const CONTRIBUTIONS = [
  'Designed the full permission architecture — role assignment, lock/unlock flow, and host-only controls.',
  'Built the Socket.IO event bus for real-time code sync and cursor broadcasting across all peers.',
  'Implemented the JWT auth system securing room creation and join flows end-to-end.',
  'Integrated Monaco Editor with live operational-transform diffing for conflict-free co-editing.',
  'Architected the in-browser compiler pipeline with multi-language support via Wandbox API.',
  'Led mobile-responsive refactor using Bootstrap 5 tab-layout and thumb-friendly bottom nav.',
];

/* ─── SUB-COMPONENTS ────────────────────────────────────────────────────── */

const AwardBadge = () => (
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide"
    style={{
      background: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(251,191,36,0.12) 100%)',
      border: '1px solid rgba(245,158,11,0.45)',
      color: '#fbbf24',
    }}
  >
    <Trophy size={15} className="flex-shrink-0" />
    <span>2nd Runner-Up · Hack-Heist Hackathon</span>
    <span
      className="px-2 py-0.5 text-xs rounded-full font-bold"
      style={{ background: 'rgba(245,158,11,0.25)', color: '#fcd34d' }}
    >
      ChaiCode Sponsored
    </span>
  </motion.div>
);

/* Glowing card with mouse-tracking spotlight */
const FeatureCard = ({ feature, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl p-px cursor-default"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(245,158,11,0.13), transparent 80%)`,
        }}
      />
      {/* Amber border glow on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: '1px solid rgba(245,158,11,0.3)', borderRadius: 'inherit' }}
      />

      <div className="relative rounded-2xl p-5 h-full flex flex-col gap-3"
        style={{ background: '#0d0d0d' }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'rgba(245,158,11,0.12)',
            border: '1px solid rgba(245,158,11,0.25)',
            color: '#f59e0b',
          }}
        >
          {feature.icon}
        </div>
        <h4 className="font-semibold text-sm text-white/90 group-hover:text-amber-400 transition-colors">
          {feature.title}
        </h4>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

const TechPill = ({ icon, label, color, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    whileHover={{ scale: 1.08, y: -2 }}
    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: 'rgba(255,255,255,0.7)',
    }}
  >
    <span style={{ color, fontSize: '1rem' }}>{icon}</span>
    {label}
  </motion.div>
);

/* ─── MAIN COMPONENT ────────────────────────────────────────────────────── */

const FeaturedProject = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      id="featured-project"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 15% 50%, rgba(245,158,11,0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 20%, rgba(251,191,36,0.04) 0%, transparent 60%)',
        }}
      />
      {/* Horizontal amber line accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 gap-5"
        >
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.2)',
              color: '#f59e0b',
            }}
          >
            <Star size={12} />
            Featured Project
          </div>

          <AwardBadge />

          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1.1 }}
          >
            <span className="gradient-text">Debugra</span>
          </h2>

          <p className="max-w-xl text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
            A real-time collaborative coding platform engineered to eliminate merge conflicts
            through role-based editing permissions — built under 24 hours at Hack-Heist.
          </p>
        </motion.div>

        {/* ── Problem → Solution ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14"
        >
          {[
            {
              label: '🔴 The Problem',
              heading: 'Collaborative Editing is Chaos',
              body: 'When multiple developers edit the same file simultaneously, edits collide, code gets corrupted, and no one knows whose version is "correct." Traditional pair-programming tools lack access control, making remote collaboration unreliable.',
              borderColor: 'rgba(239,68,68,0.3)',
              bg: 'rgba(239,68,68,0.04)',
            },
            {
              label: '🟢 The Solution',
              heading: 'Role-Based Edit Permissions',
              body: 'Debugra introduces a host-controlled mutex system — only one editor at a time, chosen by the host. Real-time presence indicators, operational-transform sync, and JWT-secured rooms make collaboration safe, predictable, and production-grade.',
              borderColor: 'rgba(245,158,11,0.35)',
              bg: 'rgba(245,158,11,0.04)',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl p-6 md:p-8 flex flex-col gap-3"
              style={{ background: item.bg, border: `1px solid ${item.borderColor}` }}
            >
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {item.label}
              </span>
              <h3 className="text-xl font-bold text-white/90">{item.heading}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Key Features ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers size={18} className="text-amber-400" />
            <h3 className="text-lg font-bold text-white/80 uppercase tracking-widest text-sm">Key Features</h3>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>

        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <GitBranch size={18} className="text-amber-400" />
            <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest">Tech Stack</h3>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((t, i) => (
              <TechPill key={i} {...t} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── My Contribution ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-7 md:p-10 mb-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(12,12,12,1) 60%)',
            border: '1px solid rgba(245,158,11,0.18)',
          }}
        >
          {/* decorative corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)' }}
          />
          <div className="flex items-center gap-3 mb-7">
            <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0" />
            <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest">My Contribution</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTRIBUTIONS.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <ArrowRight size={14} className="flex-shrink-0 mt-0.5 text-amber-500" />
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Live Demo */}
          <motion.a
            href="https://debugra.vercel.app"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm overflow-hidden hover-trigger"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              color: '#000',
              boxShadow: '0 0 30px rgba(245,158,11,0.35)',
            }}
          >
            {/* shimmer on hover */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)', backgroundSize: '200% 100%' }}
            />
            <ExternalLink size={16} className="relative z-10" />
            <span className="relative z-10">Live Demo</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/omkhandare55/Debugra"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm hover-trigger"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <FaGithub size={16} />
            View on GitHub
          </motion.a>
        </motion.div>

      </div>

      {/* Bottom rule */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent)' }}
      />
    </section>
  );
};

export default FeaturedProject;
