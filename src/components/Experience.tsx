import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2, CheckCircle2, Maximize2, X, Download } from 'lucide-react';

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Timeline</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Experience layout card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Job Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg">
                    <Calendar className="w-3.5 h-3.5" /> Dec 2025
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold rounded-lg">
                    <Building2 className="w-3.5 h-3.5" /> AlgoTutor Academy
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 font-outfit mb-1">MERN Stack Development Intern</h3>
                  <p className="text-sm font-semibold text-slate-500">Virtual Internship • Full Stack Web Development</p>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  Gained intensive, hands-on industrial training in full-stack JavaScript architectures. Responsible for coding sample RESTful web APIs and integrating secure single-page React applications with Node.js and Express backends.
                </p>

                {/* Key learnings/contributions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Key Learnings &amp; Tasks:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Built RESTful routing endpoints &amp; controllers</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Schema design &amp; CRUD operations with MongoDB</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>User authentication via JWT &amp; password hashing</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>State management using React Context API</span>
                    </div>
                  </div>
                </div>

                {/* Tech list */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Postman", "Git"].map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-white border border-slate-200/50 text-[10px] font-bold text-slate-500 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Certificate Preview Frame */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm cursor-pointer w-full max-w-[280px]" onClick={() => setIsOpen(true)}>
                  <img
                    src="/assets/certificates/algotutor_internship.png"
                    alt="AlgoTutor Certificate Preview"
                    className="w-full h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  {/* Hover overlay indicator */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4" /> View Certificate
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-3">Certificate of Completion</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Full-screen Lightbox overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[85vh] bg-white rounded-2xl p-2 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button floating top-right outside */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-indigo-400 p-2 text-sm font-bold flex items-center gap-1 bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                <img
                  src="/assets/certificates/algotutor_internship.png"
                  alt="AlgoTutor Internship Certificate"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Certificate Actions Footer */}
              <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-slate-100">
                <div>
                  <h4 className="text-slate-800 font-bold text-sm font-outfit">AlgoTutor MERN Development Certificate</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Completed December 2025</p>
                </div>
                <a
                  href="/assets/certificates/algotutor_internship.png"
                  download="AlgoTutor_MERN_Certificate.png"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-150 transition-all"
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
