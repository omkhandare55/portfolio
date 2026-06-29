import React from 'react';
import { FaGithub } from 'react-icons/fa';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ Premium Featured Project Case Study ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Debugra: AI-Powered Collaboration</h2>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-400 leading-relaxed mb-10">
          <p>
            <strong>Debugra</strong> is a VS Code-inspired real-time collaborative code editor designed to enable conflict-free remote pair-programming and instant compiler diagnostics. Engineered during a 24-hour hackathon, the platform secured <strong className="text-white">2nd Runner-Up at Technovate 2026</strong>.
          </p>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* System Architecture */}
          <div className="p-6 border border-zinc-800 bg-zinc-900/10">
            <h3 className="text-xs font-bold font-mono text-white mb-4 uppercase tracking-wider">
              // Conflict Prevention Architecture
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              To resolve parallel edit conflicts without introducing heavy Operational Transform overhead, Debugra implements a host-controlled mutex (token) system:
            </p>
            <ul className="text-xs text-zinc-500 space-y-2 list-disc pl-4">
              <li>Hosts control edit permissions, dynamically granting/revoking write tokens.</li>
              <li>Other active peers are set to read-only mode, blocking ghost input overrides.</li>
              <li>Real-time cursor positions and typing focus are synced instantly.</li>
            </ul>
          </div>

          {/* AI Integration & Synchronization */}
          <div className="p-6 border border-zinc-800 bg-zinc-900/10">
            <h3 className="text-xs font-bold font-mono text-white mb-4 uppercase tracking-wider">
              // Data Sync & AI Pipeline
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-3">
              Built on a decoupled Firebase/Express backbone to prioritize low-latency state sharing and structured diagnostics:
            </p>
            <ul className="text-xs text-zinc-500 space-y-2 list-disc pl-4">
              <li>Firestore snapshot listeners capture and distribute code buffer edits.</li>
              <li>Integrated Groq LLM API client triggers async script debugging.</li>
              <li>Provides developers with instant inline bugs alerts and code walkthroughs.</li>
            </ul>
          </div>

        </div>

        {/* Tech Stack Specs & Actions */}
        <div className="p-6 border border-zinc-800 bg-zinc-900/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="font-bold text-xs uppercase tracking-widest text-zinc-300 block mb-2">Technical Stack</span>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'Firebase Auth', 'Firestore', 'Monaco Editor Core', 'Groq API', 'TailwindCSS'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-500 border border-zinc-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/omkhandare55/Debugra"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-zinc-800 hover:border-zinc-600 text-xs font-mono font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <FaGithub size={14} />
            <span>Case Study Code</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
