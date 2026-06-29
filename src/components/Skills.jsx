import React from 'react';

const SKILLS_GROUPS = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'C'],
  },
  {
    category: 'Frontend Development',
    skills: ['React.js', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'Firebase Authentication', 'Firestore', 'REST APIs'],
  },
  {
    category: 'Tools & Workflows',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel Deployment'],
  },
  {
    category: 'Computer Science Core',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ Skills & Tech ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Technical Arsenal</h2>
        </div>

        {/* Flat Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SKILLS_GROUPS.map((group, i) => (
            <div 
              key={i} 
              className="pb-6 border-b border-zinc-900"
            >
              <h3 className="text-sm font-bold font-mono text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-none" />
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 rounded-none hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
