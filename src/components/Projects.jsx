import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'NoteFlow',
    type: 'Note Management Service',
    problem: 'Standard note applications lack light, client-synced text editors with integrated AI summaries and structural organization.',
    architecture: 'React-driven client layer communicating with Firebase/Firestore. Implements secure Google Auth and OpenAI API pipeline.',
    metrics: 'Secured 2nd Runner-Up at Technovate 2026. Custom Firestore snapshot listeners achieve sub-100ms document state updates.',
    stack: ['React.js', 'Firebase Auth', 'Firestore', 'OpenAI API', 'TailwindCSS'],
    github: 'https://github.com/omkhandare55/Notes_App.git',
    live: 'https://notes-app-five-swart-56.vercel.app',
    accentColor: '#F59E0B',
  },
  {
    title: 'Election Education Assistant',
    type: 'Secure AI Agent Platform',
    problem: 'Voters face highly complex and fragmented candidate information, requiring a secure, unbiased, accessible consulting interface.',
    architecture: 'Clustered Node.js running Next.js. Secured via Helmet HTTP headers, rate-limiting, and express-validator.',
    metrics: 'Deployed on Google Cloud Run. Integrated Winston audit logs, Morgan HTTP logging streams, and Jest server test suites.',
    stack: ['Next.js', 'Google Gemini AI', 'Express.js', 'Firebase', 'Helmet', 'Jest'],
    github: 'https://github.com/omkhandare55',
    live: 'https://election-assistant-9504743892.us-central1.run.app',
    accentColor: '#EA580C',
  },
  {
    title: 'CPU Scheduling Simulator',
    type: 'OS Simulation Tool',
    problem: 'Understanding scheduling algorithm states (FCFS, SJF, RR) is highly abstract for students without interactive visual charts.',
    architecture: 'Standard JavaScript algorithm suite mapping queue stages to dynamic SVG graphs and Gantt diagrams.',
    metrics: 'Computes runtime statistics (turnaround, waiting times) and draws Gantt charts synchronously in the browser.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'SVG Rendering'],
    github: 'https://github.com/omkhandare55/CPU-Scheduling-Simulator.git',
    live: '#',
    accentColor: '#71717A',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 border-t border-zinc-900 bg-background relative overflow-hidden">
      
      {/* Background ambient gradient */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 80%)' }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2 select-none">
            <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full" />
            [ Code Showcases ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">Engineering Projects</h2>
        </div>

        {/* Project List */}
        <div className="space-y-10">
          {PROJECTS_DATA.map((project, i) => (
            <div 
              key={i} 
              className="premium-card p-8 flex flex-col md:flex-row gap-8 justify-between items-start hover:border-zinc-700/60 duration-300"
            >
              <div className="flex-1 space-y-5">
                {/* Title & Type */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5 select-none">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Problem & Tech specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-light">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block mb-1.5 select-none">// Problem solved</span>
                    <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block mb-1.5 select-none">// Architecture</span>
                    <p className="text-zinc-400 leading-relaxed">{project.architecture}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="text-xs sm:text-sm font-light">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block mb-1.5 select-none">// Performance & Deployment</span>
                  <p className="text-zinc-400 leading-relaxed font-mono text-xs">{project.metrics}</p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 select-none">
                  {project.stack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-900/60 text-[10px] font-mono text-zinc-500 border border-zinc-800/80 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Side */}
              <div className="flex md:flex-col gap-3.5 w-full md:w-auto flex-shrink-0 pt-6 md:pt-0 border-t md:border-t-0 border-zinc-800/60 md:items-end justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/20 text-xs font-mono font-semibold tracking-wider text-zinc-400 hover:text-white rounded-lg transition-all duration-250 flex items-center justify-center gap-2 select-none"
                >
                  <FaGithub size={14} />
                  <span>Code</span>
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-250 flex items-center justify-center gap-2 select-none shadow-lg shadow-black/25"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
