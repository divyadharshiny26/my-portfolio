import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, Search, Filter, X, Download } from 'lucide-react';

const certificates = [
  {
    title: "GenAI Powered Data Analytics job simulation",
    issuer: "Tata Virtual Experience (Forage)",
    year: "2025",
    category: "AI & Data Science",
    image: "/assets/certificates/tata_genai.png",
    details: "Completed exploratory data analysis, predictive modeling with AI, collections strategy reporting, and data storytelling.",
  },
  {
    title: "The complete Java programmer",
    issuer: "Udemy Academy",
    year: "2025",
    category: "Programming",
    image: "/assets/certificates/udemy_java.png",
    details: "Mastered core Java concepts from scratch to advanced, covering Object-Oriented Programming, Exception Handling, Collections, Multithreading, and file inputs.",
  },
  {
    title: "Building Intelligent AI Agents",
    issuer: "Great Learning Academy",
    year: "2025",
    category: "AI & Data Science",
    image: "/assets/certificates/great_learning_agents.png",
    details: "Acquired core foundation in agentic workflows, prompt engineering frameworks, and constructing AI models to automate reasoning and tasks.",
  },
  {
    title: "Design Thinking course (Elite Silver)",
    issuer: "NPTEL National Certification",
    year: "2026",
    category: "Others",
    image: "/assets/certificates/nptel_design_thinking.png",
    details: "Completed NPTEL certification in Design Thinking principles, user research, rapid prototyping, and interface usability testing with Elite Silver standing.",
  },
  {
    title: "MERN Full Stack Development",
    issuer: "AlgoTutor Academy",
    year: "2025",
    category: "Web Development",
    image: "/assets/certificates/algotutor_internship.png",
    details: "Intensive training program focused on MongoDB database schemas, Express router, React rendering logic, Node API endpoints, and authentication.",
  }
];

const categories = ["All", "AI & Data Science", "Programming", "Web Development", "Others"];

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredCerts = certificates.filter((cert) => {
    const matchesCategory = filter === "All" || cert.category === filter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 max-w-4xl mx-auto">
          {/* Categories Row */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full border transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/60 hover:border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-200/50 text-[10px] font-bold text-slate-500 rounded-md">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-slate-800 font-bold text-sm font-outfit mb-1">{cert.title}</h3>
                  <p className="text-[11px] text-indigo-600 font-bold tracking-wider uppercase mb-3">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{cert.details}</p>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                  <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-400">{cert.category}</span>
                  {cert.image ? (
                    cert.image.startsWith('http') ? (
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" /> View Proof
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          const originalIdx = certificates.findIndex(c => c.title === cert.title);
                          setSelectedIdx(originalIdx);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" /> View Proof
                      </button>
                    )
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 italic">No image copy</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox pop up */}
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
                  src={certificates[selectedIdx].image!}
                  alt={certificates[selectedIdx].title}
                  className="max-w-full max-h-[68vh] object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 bg-white gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-indigo-600 font-extrabold uppercase tracking-widest">{certificates[selectedIdx].issuer}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{certificates[selectedIdx].year}</span>
                  </div>
                  <h4 className="text-slate-800 font-bold text-base font-outfit mb-0.5">
                    {certificates[selectedIdx].title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                    {certificates[selectedIdx].details}
                  </p>
                </div>
                
                <a
                  href={certificates[selectedIdx].image!}
                  download={`${certificates[selectedIdx].title.replace(/\s+/g, '_')}.png`}
                  className="w-full md:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-150 transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
