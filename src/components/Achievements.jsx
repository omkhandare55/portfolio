import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { label: "LeetCode", value: "Profile", icon: <Target className="text-primary" />, desc: "OP_GAMING55", link: "https://leetcode.com/u/OP_GAMING55/" },
    { label: "CodeChef", value: "Profile", icon: <Star className="text-yellow-400" />, desc: "rcp_fy_24616", link: "https://www.codechef.com/users/rcp_fy_24616" },
    { label: "GitHub", value: "Profile", icon: <Zap className="text-emerald-400" />, desc: "omkhandare55", link: "https://github.com/omkhandare55" },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/5">
          {/* Removed AI gradient */}
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Coding <span className="gradient-text">Profiles</span> & Stats
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Numbers that reflect my continuous dedication to problem solving line by line, contest by contest.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.a
                  href={stat.link}
                  target="_blank"
                  rel="noreferrer"
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center justify-center gap-2 group hover-trigger cursor-pointer"
                >
                  <div className="p-4 bg-white/5 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold font-heading">{stat.value}</div>
                  <div className="text-lg font-medium text-foreground/80">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
