import React from 'react';

const EXPERIENCE_ITEMS = [
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code 2026',
    duration: 'May 2026 – Present',
    description: [
      'Contributing to open-source repositories by resolving feature requests, fixing async state bugs, and optimizing query loops.',
      'Collaborating with code maintainers using Git branches and pull request review workflows.',
    ],
    accentColor: '#10B981', // Emerald
  },
  {
    role: 'Head of Club',
    company: 'Bytecraft Club',
    duration: 'Aug 2025 – Present',
    description: [
      'Coordinating and hosting algorithmic coding workshops and full-stack web bootcamps for 800+ students.',
      'Mentoring university peers in Data Structures, Algorithms, and clean web architecture patterns.',
    ],
    accentColor: '#F59E0B', // Amber
  },
  {
    role: 'Technical Volunteer',
    company: 'Converges Event',
    duration: 'Jan 2025 – Present',
    description: [
      'Assisted in managing registration desk workflows, logistics, and technical speaker scheduling for 100+ participants.',
    ],
    accentColor: '#71717A', // Muted Gray
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full" />
            [ History & Leadership ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Experience</h2>
        </div>

        {/* Clean Timeline List */}
        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map((item, i) => (
            <div 
              key={i} 
              className="premium-card p-6 flex flex-col sm:flex-row gap-6 sm:gap-8 hover:border-zinc-700/60 duration-300"
            >
              {/* Date & Company Column (Left) */}
              <div className="sm:w-1/4 select-none flex-shrink-0">
                <span className="font-mono text-[10px] text-zinc-500 block mb-1">
                  {item.duration}
                </span>
                <div className="flex items-center gap-2">
                  <span 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <span className="font-bold text-sm text-zinc-200">
                    {item.company}
                  </span>
                </div>
              </div>

              {/* Role & Description Column (Right) */}
              <div className="sm:w-3/4 space-y-3">
                <h3 className="text-base font-bold text-white leading-none">
                  {item.role}
                </h3>
                <ul className="space-y-2">
                  {item.description.map((bullet, idx) => (
                    <li 
                      key={idx} 
                      className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2.5 font-light"
                    >
                      <span className="text-zinc-600 select-none mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
