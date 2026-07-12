import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, Calendar, MapPin, Maximize2, X, Download } from 'lucide-react';

const achievements = [
  {
    title: "Runner-up – Creatathon 2024 (Web Hackathon)",
    subtitle: "Intra-College Web Hackathon",
    location: "Sri Eshwar College of Engineering",
    date: "Dec 27, 2024",
    description: "Secured runner-up position in a competitive class-level hackathon. Designed and pitched a creative web utility within a 24-hour development sprint.",
    image: "/assets/achievements/createathon.png",
    tagColor: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    title: "Third Prize - Mini Project Review",
    subtitle: "Departmental Project Exhibition",
    location: "Sri Eshwar College of Engineering",
    date: "Apr 11, 2026",
    description: "Won third prize for displaying a functioning technical mini-project. Evaluated on UI layout, execution logic, database connection, and oral presentation.",
    image: "/assets/achievements/project_expo.png",
    tagColor: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    title: "Top 20 Finalist - TechSprint 2025",
    subtitle: "Regional Hackathon Event",
    location: "GDG on Campus - Coimbatore Institute of Technology",
    date: "Feb 2025",
    description: "Recognized as a Top 20 Finalist for displaying outstanding technical expertise, innovative design workflow, and effective product engineering.",
    image: "/assets/achievements/techsprint.png",
    tagColor: "bg-purple-50 border-purple-100 text-purple-700",
  },
  {
    title: "Pre-Finalist - Shine Healthcare Hackathon",
    subtitle: "National Level Healthcare Innovation Challenge",
    location: "Trichy SRM Medical College Hospital & Research Centre",
    date: "Aug 26, 2025",
    description: "Advanced to pre-final round of a nationwide call for healthcare innovators. Designed a solution targeting patient tracking and resource accessibility.",
    image: "/assets/achievements/shine_healthcare.png",
    tagColor: "bg-sky-50 border-sky-100 text-sky-700",
  },
  {
    title: "Outstanding Performer - Coding Carnival",
    subtitle: "Programmer's & Engineer's Day Contests",
    location: "Sri Eshwar College of Engineering",
    date: "Sep 2025",
    description: "Awarded a Certificate of Appreciation for outstanding performance, problem-solving, and dedication in competitive programming challenges.",
    image: "/assets/achievements/coding_carnival.png",
    tagColor: "bg-teal-50 border-teal-100 text-teal-700",
  }
];

export default function Achievements() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Honors</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Achievements &amp; Hackathons</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedIdx(index)}
              className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col group"
            >
              {/* Image box */}
              <div className="h-52 overflow-hidden relative bg-slate-100">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4" /> View Award Details
                </div>
              </div>

              {/* Content box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {ach.date}
                    </span>
                  </div>

                  <h3 className="text-slate-800 font-bold font-outfit text-base group-hover:text-indigo-600 transition-colors mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    {ach.subtitle}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {ach.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-slate-100 text-slate-400 text-[11px] font-semibold">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{ach.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Achievement lightbox overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-2 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button floating top-right outside */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute -top-12 right-0 text-white hover:text-indigo-400 p-2 text-sm font-bold flex items-center gap-1 bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center">
                <img
                  src={achievements[selectedIdx].image}
                  alt={achievements[selectedIdx].title}
                  className="max-w-full max-h-[68vh] object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 bg-white gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {achievements[selectedIdx].date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {achievements[selectedIdx].location}
                    </span>
                  </div>
                  <h4 className="text-slate-800 font-bold text-base font-outfit mb-1">
                    {achievements[selectedIdx].title}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                    {achievements[selectedIdx].description}
                  </p>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                  <a
                    href={achievements[selectedIdx].image}
                    download={`${achievements[selectedIdx].title.replace(/\s+/g, '_')}.png`}
                    className="flex-1 md:flex-initial px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-150 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
