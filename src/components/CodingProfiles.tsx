import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Code2, ArrowUpRight } from 'lucide-react';

const profiles = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/_divya-d-26_/",
    solved: "130+",
    stats: [
      { label: "Contests Attended", value: "2" },
      { label: "Rating", value: "1477" },
      { label: "Global Rank", value: "#449,386" }
    ],
    description: "Actively solving algorithmic challenges focusing on arrays, dynamic programming, strings, tree traversals, and mathematical problems.",
    icon: Code2,
    color: "from-yellow-400 to-amber-500",
    shadowColor: "shadow-amber-100",
    buttonBg: "hover:bg-amber-500 hover:border-amber-500",
  },
  {
    platform: "SkillRack",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=514391&key=6272083e287e22217a8cf1aab53090e9befad804",
    solved: "790+",
    stats: [
      { label: "Bronzes Earned", value: "189" },
      { label: "Certifications", value: "4" },
      { label: "Global Rank", value: "#36,040" }
    ],
    description: "Consistently resolving daily challenges and tracking speed programming benchmarks in C++, Python, and SQL.",
    icon: Award,
    color: "from-green-500 to-emerald-600",
    shadowColor: "shadow-emerald-100",
    buttonBg: "hover:bg-green-600 hover:border-green-600",
  },
  {
    platform: "GitHub",
    url: "https://github.com/divyadharshiny26",
    solved: "20+",
    stats: [
      { label: "Total Repos", value: "12" },
      { label: "Active Project", value: "Alumni Hub" },
      { label: "Contributions", value: "Daily" }
    ],
    description: "Maintaining open-source repositories for web tools, Flask/SQL backends, and full-stack React projects utilizing MVC flow.",
    icon: null,
    color: "from-slate-700 to-slate-900",
    shadowColor: "shadow-slate-200",
    buttonBg: "hover:bg-slate-900 hover:border-slate-900",
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Statistics</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Coding Profiles</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${profile.color} text-white flex items-center justify-center shadow-lg ${profile.shadowColor}`}>
                      {profile.platform === "GitHub" ? (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                    ) : (
                      Icon && <Icon className="w-6 h-6" />
                    )}
                    </div>
                    
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Problems Solved</p>
                      <p className="text-xl font-black text-slate-800 font-outfit">{profile.solved}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 font-outfit mb-3">{profile.platform}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{profile.description}</p>
                  
                  {/* Platform Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 rounded-2xl p-4 mb-6">
                    {profile.stats.map((s, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 truncate">{s.label}</p>
                        <p className="text-xs font-extrabold text-slate-700 truncate">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit profile button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full border border-slate-200 hover:text-white transition-all text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-sm group ${profile.buttonBg}`}
                >
                  Visit Profile <ArrowUpRight className="w-4 h-4" />
                </a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
