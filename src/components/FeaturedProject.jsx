import React from 'react';
import { FaGithub } from 'react-icons/fa';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      
      {/* Accent glow behind featured title */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 80%)' }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full" />
            [ Premium Case Study ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Debugra: AI-Powered Collaboration</h2>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-12">
          <p>
            <strong>Debugra</strong> is a VS Code-inspired collaborative editor built to enable real-time pair programming and instant compiler diagnostics. Engineered during a 24-hour hackathon, the platform secured <strong className="text-white">2nd Runner-Up at Technovate 2026</strong>.
          </p>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Mutex Architecture */}
          <div className="premium-card p-6 hover:border-zinc-700/60 duration-300">
            <h3 className="text-xs font-bold font-mono text-white mb-4 uppercase tracking-widest flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Conflict Prevention
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-light">
              To resolve parallel edit conflicts without introducing heavy Operational Transform overhead, Debugra implements a host-controlled mutex token system:
            </p>
            <ul className="text-xs text-zinc-500 space-y-2.5 list-disc pl-4 font-light">
              <li>Hosts control edit permissions, dynamically granting write tokens to active peers.</li>
              <li>Peers without tokens are set to read-only mode, blocking ghost input overrides.</li>
              <li>Real-time cursor positions and typing focus are synced instantly across clients.</li>
            </ul>
          </div>

          {/* AI Integration */}
          <div className="premium-card p-6 hover:border-zinc-700/60 duration-300">
            <h3 className="text-xs font-bold font-mono text-white mb-4 uppercase tracking-widest flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
              State Sync & AI Pipeline
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-light">
              Built on a decoupled Firebase/Express backbone to prioritize low-latency state sharing and structured diagnostics:
            </p>
            <ul className="text-xs text-zinc-500 space-y-2.5 list-disc pl-4 font-light">
              <li>Firestore snapshot listeners capture and distribute code buffer edits under 100ms.</li>
              <li>Integrated Groq LLM API client triggers asynchronous diagnostic scripts.</li>
              <li>Provides developers with instant compiler alerts and structural walkthroughs.</li>
            </ul>
          </div>

        </div>

        {/* Tech Stack Specs & Actions */}
        <div className="premium-card p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-zinc-700/40 duration-300">
          <div>
            <span className="font-bold text-xs uppercase tracking-widest text-zinc-300 block mb-2 select-none font-mono">// Tech Stack Specs</span>
            <div className="flex flex-wrap gap-1.5 select-none">
              {['React.js', 'Node.js', 'Express.js', 'Firebase Auth', 'Firestore', 'Monaco Editor Core', 'Groq API', 'TailwindCSS'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-500 border border-zinc-850 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/omkhandare55/Debugra"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/20 text-xs font-mono font-semibold tracking-wider text-zinc-400 hover:text-white rounded-lg transition-colors duration-250 flex items-center gap-2 flex-shrink-0 select-none"
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
