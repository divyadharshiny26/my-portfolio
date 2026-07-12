import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Database, Users } from 'lucide-react';

const projects = [
  {
    title: "Alumni Network & Career Hub Platform",
    year: "2026",
    tagline: "Full-Stack Networking & Career Portal",
    description: "A secure, scalable web application connecting students with college alumni for mentorship, career advice, and job referral opportunities, designed following MVC architecture principles.",
    features: [
      "Secure user authentication (JWT & Session based)",
      "Dynamic messaging and networking portal",
      "Supabase integration for secure database schema",
      "Robust RESTful API design using Node and Express"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "REST API", "MVC Architecture", "Git"
    ],
    github: "https://github.com/divyadharshiny26/University-Alumni-Network-and-Career-Hub",
    icon: Users,
    color: "from-indigo-500 via-blue-500 to-sky-400",
  },
  {
    title: "AI based internship recommendation engine",
    year: "2026",
    tagline: "Intelligent Recommendation Platform",
    description: "An AI-powered internship discovery system that analyzes student profiles (skills, interests, CGPA) and uses matching algorithms to suggest highly relevant internship openings.",
    features: [
      "Intelligent matching workflow and logic",
      "Interactive student and recruiter dashboards",
      "TF-IDF and similarity analysis via Python",
      "Real-time notifications and tracking"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Python", "Tailwind CSS", "ML matching", "Tableau"
    ],
    github: null,
    icon: Cpu,
    color: "from-purple-500 via-indigo-500 to-blue-400",
  },
  {
    title: "Parking Space Management System",
    year: "2025",
    tagline: "Online Booking & Fee Management Portal",
    description: "A web-based portal enabling vehicle parking reservations, slot cancellations, and automatic slot occupancy monitoring with integrated billing modules.",
    features: [
      "Real-time slot availability tracking",
      "Automatic fee calculation by vehicle class",
      "Interactive visual map of slots layout",
      "Clean dashboard for parking admin operators"
    ],
    techStack: [
      "HTML5", "CSS3", "Python", "MySQL", "Database Normalization", "Tkinter / Flask"
    ],
    github: "https://github.com/divyadharshiny26/Parking_Management_System",
    icon: Database,
    color: "from-blue-500 via-sky-500 to-teal-400",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                {/* Visual Header Grid Panel */}
                <div className={`h-40 bg-gradient-to-tr ${project.color} p-6 flex flex-col justify-between relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {project.year}
                    </span>
                    <ProjectIcon className="w-8 h-8 text-white opacity-85" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">{project.tagline}</p>
                    <h3 className="text-white font-bold text-lg font-outfit truncate">{project.title}</h3>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-200/50 text-[10px] font-bold text-slate-600 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer CTAs */}
                    {project.github && (
                      <div className="flex gap-3 pt-3 border-t border-slate-100">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg> Code base
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
