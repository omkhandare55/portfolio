import React from 'react';
import { Shield, Cpu, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      
      {/* Accent glow behind profile text */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-[0.02] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 80%)' }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full" />
            [ Profile & Background ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Competency & Background</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          
          {/* Main Story Column (3/5 width) */}
          <div className="md:col-span-3 space-y-6 text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
            <p>
              I am an IT student at R. C. Patel Institute of Technology, Shirpur, specializing in <span className="text-white font-medium">Java, Data Structures & Algorithms, and robust web engineering</span>.
            </p>
            <p>
              My development philosophy focuses on modular complexity management and runtime efficiency. I spend my time solving algorithmic problems, refining backend routing safety, and implementing clean browser-facing interfaces.
            </p>
            <p>
              Serving as the Head of the Bytecraft Club, I coordinate technical workshops and bootcamps, helping students transition from core logic foundations to actual software deployments.
            </p>
          </div>

          {/* Competency boxes column (2/5 width) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: <Terminal size={16} className="text-[hsl(var(--primary))]" />,
                title: 'Data Structures & Algos',
                desc: 'Highly active in competitive coding with 2,500+ solved challenges across LeetCode & CodeChef.',
              },
              {
                icon: <Cpu size={16} className="text-[hsl(var(--accent))]" />,
                title: 'Scalable Backend Sync',
                desc: 'Building Express API layers, Firestore synchronizers, and clustered master-worker servers.',
              },
              {
                icon: <Shield size={16} className="text-zinc-400" />,
                title: 'Computer Science Core',
                desc: 'Deep study of operating system processes, database optimizations, and net protocols.',
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="premium-card p-5 hover:border-[hsl(var(--accent))]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-2 select-none">
                  {item.icon}
                  <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
