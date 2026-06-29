import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, Award, Users, ChevronRight, Zap } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code 2026',
    duration: 'May 2026 – Present',
    icon: <Zap className="text-amber-500" size={18} />,
    description: [
      'Contributing to key open-source repositories through robust code optimization, feature requests, and issue resolution.',
      'Collaborating actively with maintainers and international developers via Git and GitHub workflows to maintain code quality.',
    ],
    badge: 'Open Source',
  },
  {
    role: 'Head',
    company: 'Bytecraft Club',
    duration: 'Aug 2025 – Present',
    icon: <Briefcase className="text-amber-500" size={18} />,
    description: [
      'Leading a technical student association, organizing coding bootcamps and tech workshops for 800+ students.',
      'Mentoring peers in key concepts like Data Structures, Algorithms, and scalable web engineering.',
    ],
    badge: 'Leadership',
  },
  {
    role: 'Technical Volunteer',
    company: 'Converges Event',
    duration: 'Jan 2025 – Present',
    icon: <Users className="text-amber-500" size={18} />,
    description: [
      'Assisted in the end-to-end coordination and execution of technical symposiums and events hosting 100+ participants.',
      'Managed event logistics, speaker scheduling, and automated registration desk pipelines.',
    ],
    badge: 'Volunteer',
  },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-12 group mb-12 last:mb-0"
    >
      {/* Date Column (Left on desktop) */}
      <div className="md:w-1/4 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-end text-left md:text-right">
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-1"
          style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.18)',
            color: '#f59e0b',
          }}
        >
          {item.badge}
        </span>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <Calendar size={14} className="text-amber-500/60" />
          <span className="font-medium tabular-nums">{item.duration}</span>
        </div>
      </div>

      {/* Timeline Node (Middle) */}
      <div className="absolute left-4 md:left-1/4 top-12 md:top-2 -translate-x-[9px] md:-translate-x-[9px] z-10">
        <div
          className="w-[18px] h-[18px] rounded-full border-2 border-amber-500 flex items-center justify-center bg-black transition-all duration-300 group-hover:scale-125"
          style={{ boxShadow: '0 0 10px rgba(245,158,11,0.3)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        </div>
      </div>

      {/* Content Card (Right on desktop) */}
      <div className="md:w-3/4 pl-8 md:pl-0">
        <div
          className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-amber-500/30 group-hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(12,12,12,1) 100%)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.18)',
              }}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {item.role}
              </h3>
              <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.company}
              </p>
            </div>
          </div>

          <ul className="space-y-2">
            {item.description.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <ChevronRight size={14} className="flex-shrink-0 mt-0.5 text-amber-500/60" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 85% 50%, rgba(245,158,11,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[21px] md:left-1/4 top-4 bottom-4 w-px bg-white/[0.08]" />

          {/* Timeline Items */}
          <div className="flex flex-col">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
