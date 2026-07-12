import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Sparkles, Heart } from 'lucide-react';

const learning = [
  { name: "Data Science & Analytics", desc: "Exploring statistical modelling, predictive workflows, and dashboard visualizations using Power BI/Tableau." },
  { name: "Fullstack with AI", desc: "Building MERN projects integrated with intelligent features, API routes, and secure databases." },
  { name: "AI/ML Engineering", desc: "Strengthening understanding of algorithms, training datasets, and model evaluations." },
  { name: "Hackathon Prototyping", desc: "Learning rapid wireframing, component structuring, and quick deployment pipelines for contest sprints." }
];

const roadmap = [
  {
    phase: "Phase 1: Hackathons & Project Lab (2026 - 2027)",
    title: "Hackathon Sprints & Fullstack AI",
    details: "Active participation in regional and national hackathons, coding innovative MERN projects with embedded AI functionality, and designing public portfolios."
  },
  {
    phase: "Phase 2: Analytics & Model Tuning (2027 - 2028)",
    title: "Data Science & ML Integration",
    details: "Specializing in data pipelines, analytics tools (Power BI, Tableau), and deploying web APIs with machine learning models for real-world projects."
  },
  {
    phase: "Phase 3: Career Growth (2028+)",
    title: "Fullstack AI & ML Engineer",
    details: "Joining a top tier product firm to build, scale, and optimize intelligent web applications, predictive models, and user-centric data products."
  }
];

export default function ExtraFeatures() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column: Currently Learning & Why Hire Me */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-outfit">Currently Learning</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learning.map((learn, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 hover:bg-white hover:border-indigo-100 hover:shadow-md transition-all">
                    <h4 className="font-bold text-slate-800 text-sm mb-1.5">{learn.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{learn.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-outfit">Why Hire Me?</h3>
              </div>

              <div className="bg-gradient-to-tr from-indigo-50/50 to-blue-50/50 border border-indigo-100/50 rounded-3xl p-6 md:p-8 space-y-4">
                <div className="flex gap-3">
                  <span className="text-indigo-600 font-extrabold text-sm">✓</span>
                  <p className="text-xs text-slate-600 leading-relaxed"><strong className="text-slate-800">Fast Adaptive Learner:</strong> Able to pick up and integrate new tech frameworks rapidly (e.g. Supabase, Tailwind, Python AI scripts).</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-indigo-600 font-extrabold text-sm">✓</span>
                  <p className="text-xs text-slate-600 leading-relaxed"><strong className="text-slate-800">Hackathon Tempered:</strong> Proven track record of delivering fully functioning prototypes within 24-48 hours under pressure.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-indigo-600 font-extrabold text-sm">✓</span>
                  <p className="text-xs text-slate-600 leading-relaxed"><strong className="text-slate-800">Interdisciplinary Profile:</strong> Strong blending of frontend styling (Tailwind/React) with backend scripting (Node/Python) and AI concepts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Roadmap & Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 font-outfit">AI Roadmap &amp; Goals</h3>
            </div>

            <div className="border border-slate-200/60 rounded-3xl p-6 md:p-8 space-y-6">
              {roadmap.map((step, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-200 last:border-0 last:pb-0 pb-6">
                  {/* Bullet */}
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-600 border-2 border-white shadow-sm" />
                  
                  <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider mb-1">{step.phase}</p>
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5 font-outfit">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.details}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
