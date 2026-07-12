import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50/50",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 88 }
    ]
  },
  {
    title: "Core Frameworks & Web",
    icon: Layout,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50/50",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "DSA", level: 80 },
      { name: "OOPs", level: 85 }
    ]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-sky-500 to-sky-600",
    bgColor: "bg-sky-50/50",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase", level: 82 }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    icon: Wrench,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50/50",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "Google Colab", level: 88 },
      { name: "Excel", level: 80 },
      { name: "Canva", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all bg-white relative group overflow-hidden"
              >
                {/* Background color highlight on hover */}
                <div className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${category.color} text-white flex items-center justify-center shadow-lg shadow-indigo-100`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 font-outfit">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-4 py-2 bg-slate-50 border border-slate-200/60 text-slate-700 text-sm font-semibold rounded-2xl shadow-sm hover:border-indigo-400 hover:bg-white hover:text-indigo-600 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
