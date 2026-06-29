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
  },
  {
    title: 'Election Education Assistant',
    type: 'Secure AI Agent Platform',
    problem: 'Voters face highly complex and fragmented candidate information, requiring an secure, unbiased, accessible consulting interface.',
    architecture: 'Clustered Node.js (Master-Worker) running Next.js. Secured via Helmet HTTP headers, rate-limiting, and express-validator.',
    metrics: 'Deployed on Google Cloud Run. Integrated Winston audit logs, Morgan HTTP logging streams, and Jest server test suites.',
    stack: ['Next.js', 'Google Gemini AI', 'Express.js', 'Firebase', 'Helmet', 'Jest'],
    github: 'https://github.com/omkhandare55',
    live: 'https://election-assistant-9504743892.us-central1.run.app',
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
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ Code Showcases ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Engineering Projects</h2>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {PROJECTS_DATA.map((project, i) => (
            <div 
              key={i} 
              className="p-6 border border-zinc-800 bg-zinc-900/10 rounded-none hover:border-zinc-700 transition-colors flex flex-col md:flex-row gap-6 justify-between items-start"
            >
              <div className="flex-1 space-y-4">
                {/* Title & Type */}
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>

                {/* Problem & Tech specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-zinc-300 block mb-1">Problem solved</span>
                    <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-300 block mb-1">Architecture</span>
                    <p className="text-zinc-400 leading-relaxed">{project.architecture}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="text-xs">
                  <span className="font-bold text-zinc-300 block mb-1">Performance & Deployment</span>
                  <p className="text-zinc-400 leading-relaxed font-mono">{project.metrics}</p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-zinc-900 text-[10px] font-mono text-zinc-500 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Side */}
              <div className="flex md:flex-col gap-2 w-full md:w-auto flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800 md:items-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 md:flex-none px-4 py-2 border border-zinc-800 hover:border-zinc-600 text-xs font-mono font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <FaGithub size={12} />
                  <span>Code</span>
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none px-4 py-2 bg-white hover:bg-zinc-200 text-black text-xs font-mono font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink size={12} />
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
