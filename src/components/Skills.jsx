import React from 'react';

const SKILLS_GROUPS = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'C'],
    color: '#F59E0B', // Amber
  },
  {
    category: 'Frontend Development',
    skills: ['React.js', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS'],
    color: '#06B6D4', // Cyan
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'Firebase Auth', 'Firestore', 'REST APIs'],
    color: '#EA580C', // Copper
  },
  {
    category: 'Tools & Workflows',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel Deployment'],
    color: '#71717A', // Muted Gray
  },
  {
    category: 'Computer Science Core',
    skills: ['Data Structures & Algos', 'Object-Oriented Design', 'DBMS', 'Operating Systems', 'Computer Networks'],
    color: '#10B981', // Emerald
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full" />
            [ Skills & Tech ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Technical Arsenal</h2>
        </div>

        {/* Flat Grid Layout with Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS_GROUPS.map((group, i) => (
            <div 
              key={i} 
              className="premium-card p-6 flex flex-col justify-between hover:border-zinc-700/60 duration-300"
            >
              <div>
                <h3 className="text-xs font-bold font-mono text-white mb-4 uppercase tracking-widest flex items-center gap-2 select-none">
                  <span 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: group.color }}
                  />
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono text-zinc-400 rounded-lg hover:text-white hover:border-zinc-700 duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
