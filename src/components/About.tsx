import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.Tech Artificial Intelligence & Data Science",
    duration: "2024 - 2028",
    details: "Currently in 3rd Year. Academic focus on Data Science, AI/ML models, Fullstack with AI, algorithms, and active participation in projects & hackathons. CGPA: 7.51 (Up to IV semester).",
    icon: GraduationCap,
  },
  {
    institution: "Aditya Vidyashram Residential School",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2022 - 2024",
    details: "Completed HSC with Science and Mathematics. Grade: 70.9%",
    icon: BookOpen,
  },
  {
    institution: "Mahatma Gandhi International School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "2021 - 2022",
    details: "Completed Secondary Education. Grade: 70.5%",
    icon: Award,
  }
];

const interests = [
  { name: "Artificial Intelligence", desc: "Building intelligent agents, neural networks, and prompt engineering solutions." },
  { name: "Full Stack Development", desc: "Creating secure, performant web applications using MERN stack and Supabase." },
  { name: "Machine Learning", desc: "Working with data preprocessing, predictive models, algorithms, and training datasets." },
  { name: "Problem Solving", desc: "Active competitive programming on LeetCode and SkillRack with algorithm practice." },
  { name: "Hackathons", desc: "Collaborating with cross-functional teams to build and pitch products under high pressure." },
  { name: "Innovation", desc: "Exploring new paradigms like GenAI analytics and agentic workflows." }
];

const stats = [
  { label: "LeetCode Solved", value: "130+" },
  { label: "SkillRack Solved", value: "790+" },
  { label: "Projects Completed", value: "3+" },
  { label: "Certifications", value: "4" },
  { label: "Internships Completed", value: "1" },
  { label: "Hackathon Finalist", value: "5" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Who I Am &amp; What I Do</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Who I Am Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 font-outfit">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              I am a 3rd Year B.Tech student majoring in **Artificial Intelligence &amp; Data Science** at Sri Eshwar College of Engineering. My engineering journey is defined by a deep curiosity about data-driven systems and web technologies, which has led me to merge Full Stack development with AI capabilities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I love building real-world platforms, whether it's an AI-based recommendation engine or a comprehensive community hub. I thrive in high-energy environments like hackathons, where I can build and iterate rapidly, translate user stories into working code, and collaborate effectively.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-800 font-outfit pt-4">Career Objective</h3>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm relative">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-indigo-600 rounded-l-2xl" />
              <p className="text-slate-600 italic leading-relaxed">
                "Seeking an internship in Data Science, AI/ML, or Fullstack with AI development to apply and expand my engineering skills, build intelligent algorithms, and create products that deliver premium and scalable experiences."
              </p>
            </div>
          </div>

          {/* Right: Core Interests */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-slate-800 font-outfit mb-6">Core Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div key={index} className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-slate-800 mb-2">{interest.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <p className="text-3xl font-extrabold font-outfit text-indigo-600 mb-1">{stat.value}</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 font-outfit mb-8 text-center">Education Timeline</h3>
          
          <div className="relative max-w-4xl mx-auto pl-12 space-y-12 py-2">
            {/* Left vertical timeline line */}
            <div className="absolute left-12 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-sky-400 rounded-full -translate-x-[1px]" />

            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="relative pl-10">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-0 -translate-x-1/2 top-1.5 bg-indigo-600 border-4 border-white w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg mb-2">
                        <Calendar className="w-3 h-3" /> {edu.duration}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 font-outfit">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-slate-500 mb-2">{edu.institution}</p>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">{edu.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
