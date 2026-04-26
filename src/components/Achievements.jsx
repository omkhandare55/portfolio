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
    stat: '200+',
    statLabel: 'Problems Solved',
    desc: 'Consistent daily streak & contest participation',
    link: 'https://leetcode.com/u/OP_GAMING55/',
    color: '#FFA116',
    gradient: 'linear-gradient(135deg, rgba(255,161,22,0.12) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(255,161,22,0.25)',
  },
  {
    platform: 'CodeChef',
    icon: <SiCodechef size={28} />,
    username: 'rcp_fy_24616',
    stat: '3★',
    statLabel: 'Rating',
    desc: 'Active competitive programmer in rated contests',
    link: 'https://www.codechef.com/users/rcp_fy_24616',
    color: '#5B4638',
    gradient: 'linear-gradient(135deg, rgba(91,70,56,0.15) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(91,70,56,0.3)',
  },
  {
    platform: 'GitHub',
    icon: <SiGithub size={28} />,
    username: 'omkhandare55',
    stat: '20+',
    statLabel: 'Repositories',
    desc: 'Open source contributions & project showcases',
    link: 'https://github.com/omkhandare55',
    color: '#f0f0f0',
    gradient: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(12,12,12,1) 60%)',
    borderColor: 'rgba(255,255,255,0.12)',
  },
];

const HIGHLIGHTS = [
  {
    icon: <Trophy size={18} />,
    text: '2nd Runner-Up at Hack-Heist Hackathon',
    sub: 'Built Debugra — collaborative coding platform',
    color: '#f59e0b',
  },
  {
    icon: <Award size={18} />,
    text: 'ChaiCode Sponsored Recognition',
    sub: 'Top 3 among 50+ competing teams',
    color: '#fbbf24',
  },
  {
    icon: <TrendingUp size={18} />,
    text: 'Consistent Problem Solver',
    sub: '200+ problems across LeetCode & CodeChef',
    color: '#d97706',
  },
  {
    icon: <Code2 size={18} />,
    text: 'Full-Stack Project Portfolio',
    sub: 'Multiple deployed production applications',
    color: '#f59e0b',
  },
];

/* ─── Profile Card ─────────────────────────────────────────────────── */

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
      className="group relative block rounded-2xl p-px cursor-pointer"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${profile.color}18, transparent 80%)`,
        }}
      />

      <div
        className="relative rounded-2xl p-7 h-full flex flex-col items-center text-center gap-4"
        style={{ background: profile.gradient }}
      >
        {/* Icon ring */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${profile.color}14`,
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
          <div className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {profile.statLabel}
          </div>
        </div>

        {/* Platform */}
        <div>
          <div className="text-base font-bold text-white/90">{profile.platform}</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>@{profile.username}</div>
        </div>

        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {profile.desc}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-1.5 text-xs font-medium mt-auto pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: profile.color }}
        >
          <span>View Profile</span>
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
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(245,158,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden border border-white/5">
          {/* Corner deco */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Coding <span className="gradient-text">Profiles</span> & Stats
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Numbers that reflect my continuous dedication to problem solving — line by line, contest by contest.
              </p>
            </motion.div>

            {/* Profile cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {PROFILES.map((p, i) => (
                <ProfileCard key={i} profile={p} index={i} />
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star size={16} className="text-amber-400" />
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest">Highlights</h3>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${h.color}14`, color: h.color }}
                    >
                      {h.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/85">{h.text}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{h.sub}</div>
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
