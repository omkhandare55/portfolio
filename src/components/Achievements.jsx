import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Trophy, Star, Target, Zap, Award, ExternalLink, TrendingUp, Code2 } from 'lucide-react';
import { SiLeetcode, SiCodechef, SiGithub } from 'react-icons/si';

/* ─── DATA ──────────────────────────────────────────────────────────── */

const PROFILES = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode size={28} />,
    username: 'OP_GAMING55',
    stat: '2000+',
    statLabel: 'Combat Power (CP)',
    desc: 'Specialty: Dynamic Programming, Graph Theory, and Array algorithms.',
    link: 'https://leetcode.com/u/OP_GAMING55/',
    color: '#FFA116',
    gradient: 'linear-gradient(135deg, rgba(255,161,22,0.12) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(255,161,22,0.25)',
    type: '🔮 Psychic Coder',
    healthBars: 4,
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef size={28} />,
    username: 'rcp_fy_24616',
    stat: '3★',
    statLabel: 'Rating Tier',
    desc: 'Specialty: High-speed competitive algorithms and math challenges.',
    link: 'https://www.codechef.com/users/rcp_fy_24616',
    color: '#a855f7', // Purple/Psychic
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(168,85,247,0.3)',
    type: '🔥 Fire Coder',
    healthBars: 3,
  },
  {
    platform: 'GitHub',
    icon: <SiGithub size={28} />,
    username: 'omkhandare55',
    stat: '20+',
    statLabel: 'Deployed Repos',
    desc: 'Specialty: Full-stack applications, open-source repositories.',
    link: 'https://github.com/omkhandare55',
    color: '#10b981', // Grass green
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(16,185,129,0.12)',
    type: '🌿 Grass Contributor',
    healthBars: 5,
  },
];

const HIGHLIGHTS = [
  {
    icon: <Trophy size={18} />,
    text: '2x Hackathon Winner Badge',
    sub: 'Earned at local & regional developer showdowns.',
    color: '#f59e0b',
  },
  {
    icon: <Award size={18} />,
    text: 'Technovate 2026 2nd Runner-Up',
    sub: 'SVKM Dhule — Deployed Debugra real-time editor.',
    color: '#fbbf24',
  },
  {
    icon: <TrendingUp size={18} />,
    text: '2500+ Problems Defeated',
    sub: 'Total count across competitive testing platforms.',
    color: '#d97706',
  },
  {
    icon: <Code2 size={18} />,
    text: 'GirlScript SoC 2026 Contributor',
    sub: 'Active open-source contributor on global repos.',
    color: '#f59e0b',
  },
];

/* ─── Profile Card (Pokédex Style) ─────────────────────────────────── */

const ProfileCard = ({ profile, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.a
      ref={ref}
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative block rounded-2xl p-px cursor-pointer overflow-hidden border border-white/[0.05]"
      style={{ background: profile.gradient }}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${profile.color}18, transparent 80%)`,
        }}
      />

      {/* Pokédex High-Tech Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20 select-none group-hover:border-white/60 transition-colors" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20 select-none group-hover:border-white/60 transition-colors" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20 select-none group-hover:border-white/60 transition-colors" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20 select-none group-hover:border-white/60 transition-colors" />

      <div className="relative rounded-2xl p-6 h-full flex flex-col items-center text-center gap-4">
        {/* Type Badge */}
        <div className="text-[8px] font-extrabold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors flex items-center gap-1 select-none">
          <span>{profile.type}</span>
        </div>

        {/* Icon Ring */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `${profile.color}10`,
            border: `1px solid ${profile.borderColor}`,
            color: profile.color,
          }}
        >
          {profile.icon}
        </div>

        {/* Stat */}
        <div>
          <div className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {profile.stat}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/40">
            {profile.statLabel}
          </div>
        </div>

        {/* Health / Stat Bar */}
        <div className="flex gap-1.5 justify-center select-none">
          {[1, 2, 3, 4, 5].map((bar) => (
            <div
              key={bar}
              className="w-3.5 h-1 rounded-sm transition-all duration-300"
              style={{
                backgroundColor: bar <= profile.healthBars ? profile.color : 'rgba(255,255,255,0.06)',
                opacity: bar <= profile.healthBars ? (isSelected => 0.8) : 0.25
              }}
            />
          ))}
        </div>

        <p className="text-xs leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
          {profile.desc}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-1 text-xs font-semibold mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: profile.color }}
        >
          <span>Cat Profile</span>
          <ExternalLink size={12} />
        </div>
      </div>
    </motion.a>
  );
};

/* ─── MAIN ──────────────────────────────────────────────────────────── */

const Achievements = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(255,255,255,0.01) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/5 bg-[#0a0a0a]">
          {/* Top Pokédex UI style decorations */}
          <div className="absolute top-4 left-6 flex gap-1.5 select-none opacity-40">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="absolute top-4 right-6 text-[8px] font-mono tracking-wider opacity-30 select-none">
            DEX_SYS_v2.5
          </div>

          <div className="relative z-10 mt-2">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Combat <span className="gradient-text">Stats</span> & Profiles
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Algorithms encountered and challenges defeated. Real-time metrics tracking competitive growth.
              </p>
            </motion.div>

            {/* Profile cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {PROFILES.map((p, i) => (
                <ProfileCard key={i} profile={p} index={i} />
              ))}
            </div>

            {/* Highlights Console */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star size={16} className="text-amber-500" />
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">Achievements Console</h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-4 px-4 py-3 rounded-xl border border-white/[0.03]"
                    style={{
                      background: 'rgba(255,255,255,0.01)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#f59e0b' }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80">{h.text}</div>
                      <div className="text-xs text-white/45">{h.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
