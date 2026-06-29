import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">[ About & Background ]</div>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">Profile & Competencies</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Main Story Column */}
          <div className="md:w-3/5 space-y-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
            <p>
              I am a software developer with a primary focus on <span className="text-white font-medium">Java, Data Structures & Algorithms, and robust web engineering</span>. Currently pursuing a Bachelor of Technology in Information Technology at R. C. Patel Institute of Technology, Shirpur.
            </p>
            <p>
              My coding philosophy centers on simplicity and runtime efficiency. I spend my time solving complex algorithmic challenges, analyzing system complexities, and architecting modular full-stack codebases.
            </p>
            <p>
              As the Head of the Bytecraft Club, I coordinate technical workshops and mentor peers in web architectures and software paradigms, fostering a strong collaborative environment.
            </p>
          </div>

          {/* Competency areas block */}
          <div className="md:w-2/5 flex flex-col gap-4">
            {[
              {
                title: 'Data Structures & Algorithms',
                desc: 'Highly active in competitive programming with 2,500+ algorithm challenges completed across LeetCode and CodeChef.',
              },
              {
                title: 'Full-Stack Development',
                desc: 'Building responsive browser interfaces and secure server environments using React, Node.js, Express, and Firebase.',
              },
              {
                title: 'Engineering Core',
                desc: 'Strong foundation in computer science fundamentals: DBMS, Operating Systems, Computer Networks, and Object-Oriented Design.',
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-5 border border-zinc-800 bg-zinc-900/30 rounded-none transition-colors hover:border-zinc-700"
              >
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-2">
                  // {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
