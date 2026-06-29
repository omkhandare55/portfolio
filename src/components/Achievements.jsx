import React from 'react';
import { ExternalLink } from 'lucide-react';

const PROFILES = [
  {
    platform: 'LeetCode',
    username: 'OP_GAMING55',
    stat: '2,000+ Solved',
    desc: 'Regular contest participation with algorithmic focus on data structures, graphs, and arrays.',
    link: 'https://leetcode.com/u/OP_GAMING55/',
  },
  {
    platform: 'CodeChef',
    username: 'rcp_fy_24616',
    stat: '3★ Rating',
    desc: 'Active competitive coder solving logic and mathematical complexity optimization tasks.',
    link: 'https://www.codechef.com/users/rcp_fy_24616',
  },
  {
    platform: 'GitHub',
    username: 'omkhandare55',
    stat: '20+ Repos',
    desc: 'Hosting open-source repository contributions, web utilities, and full-stack projects.',
    link: 'https://github.com/omkhandare55',
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
    <section id="achievements" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ Metrics & Archives ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Achievements & Profiles</h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {PROFILES.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="p-5 border border-zinc-800 bg-zinc-900/10 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                  // {p.platform}
                </span>
                <span className="text-xl font-bold text-white block">
                  {p.stat}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors mt-4">
                <span>@{p.username}</span>
                <ExternalLink size={10} />
              </div>
            </a>
          ))}
        </div>

        {/* Highlights Console */}
        <div>
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-900 pb-2">
            Key Accomplishments
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="space-y-1">
                <h4 className="text-sm font-bold text-zinc-200">
                  {h.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
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
