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
  },
  {
    role: 'Head of Club',
    company: 'Bytecraft Club',
    duration: 'Aug 2025 – Present',
    description: [
      'Coordinating and hosting algorithmic coding workshops and full-stack web bootcamps for 800+ students.',
      'Mentoring university peers in Data Structures, Algorithms, and clean web architecture patterns.',
    ],
  },
  {
    role: 'Technical Volunteer',
    company: 'Converges Event',
    duration: 'Jan 2025 – Present',
    description: [
      'Assisted in managing registration desk workflows, logistics, and technical speaker scheduling for 100+ participants.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ History & Leadership ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Experience</h2>
        </div>

        {/* Clean Timeline List */}
        <div className="space-y-10">
          {EXPERIENCE_ITEMS.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col sm:flex-row gap-4 sm:gap-10 pb-10 border-b border-zinc-900 last:border-0 last:pb-0"
            >
              {/* Date & Company Column */}
              <div className="sm:w-1/4 select-none">
                <span className="font-mono text-xs text-zinc-500 block mb-1">
                  {item.duration}
                </span>
                <span className="font-bold text-sm text-zinc-300">
                  {item.company}
                </span>
              </div>

              {/* Role & Description Column */}
              <div className="sm:w-3/4 space-y-3">
                <h3 className="text-base font-bold text-white leading-none">
                  {item.role}
                </h3>
                <ul className="space-y-2">
                  {item.description.map((bullet, idx) => (
                    <li 
                      key={idx} 
                      className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-zinc-600 select-none mt-0.5">•</span>
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
