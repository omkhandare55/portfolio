import React from 'react';
import { ExternalLink } from 'lucide-react';

const PROFILES = [
  {
    platform: 'LeetCode',
    username: 'OP_GAMING55',
    stat: '2,000+ Solved',
    desc: 'Regular contest participation with algorithmic focus on data structures, graphs, and arrays.',
    link: 'https://leetcode.com/u/OP_GAMING55/',
    color: '#F59E0B', // Amber
  },
  {
    platform: 'CodeChef',
    username: 'rcp_fy_24616',
    stat: '3★ Rating',
    desc: 'Active competitive coder solving logic and mathematical complexity optimization tasks.',
    link: 'https://www.codechef.com/users/rcp_fy_24616',
    color: '#EA580C', // Copper
  },
  {
    platform: 'GitHub',
    username: 'omkhandare55',
    stat: '20+ Repos',
    desc: 'Hosting open-source repository contributions, web utilities, and full-stack projects.',
    link: 'https://github.com/omkhandare55',
    color: '#10B981', // Emerald
  },
];

const HIGHLIGHTS = [
  {
    title: '2,500+ Problems Defeated',
    detail: 'Aggregated algorithm resolutions across all competitive programming hosts.',
  },
  {
    title: '2x Hackathon Winner',
    detail: 'Secured top positions in regional software development hackathons.',
  },
  {
    title: 'Technovate 2026 Runner-Up',
    detail: '2nd Runner-Up at Dhule SVKM Hackathon event (Collaborative Monaco editor).',
  },
  {
    title: 'GirlScript SoC 2026',
    detail: 'Contributed code to open-source libraries under maintainer guidelines.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full" />
            [ Metrics & Archives ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Achievements & Profiles</h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {PROFILES.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="premium-card p-6 flex flex-col justify-between hover:border-zinc-700/60 duration-300"
            >
              <div className="space-y-3.5">
                <span 
                  className="font-mono text-[9px] uppercase tracking-widest block font-bold select-none"
                  style={{ color: p.color }}
                >
                  // {p.platform}
                </span>
                <span className="text-xl font-bold text-white block tracking-tight">
                  {p.stat}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors mt-6 select-none">
                <span>@{p.username}</span>
                <ExternalLink size={10} />
              </div>
            </a>
          ))}
        </div>

        {/* Highlights List */}
        <div>
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800/80 pb-2 select-none">
            Key Accomplishments
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="space-y-1.5 p-4 border border-zinc-900 bg-zinc-900/10 rounded-xl hover:border-zinc-800 duration-250">
                <h4 className="text-sm font-bold text-zinc-200">
                  {h.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
