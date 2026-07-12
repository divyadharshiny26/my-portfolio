import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Trophy, Brain } from 'lucide-react';

const roles = [
  "AI Developer",
  "React Developer",
  "Problem Solver",
  "Hackathon Enthusiast",
  "MERN Developer",
  "Future AI Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        if (displayText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before start deleting
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob [animation-delay:2s] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:4s] pointer-events-none" />

      {/* Hero container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open for Internships & Placement Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl font-bold font-outfit tracking-tight text-slate-900 mb-4 leading-[1.05] max-w-full"
          >
            <span className="block">Hello, I'm</span>
            <span className="block mt-1 text-indigo-600 md:bg-gradient-to-r md:from-indigo-600 md:via-blue-600 md:to-sky-500 md:bg-clip-text md:text-transparent">
              DIVYADHARSHINY V
            </span>
          </motion.h1>



          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-500 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            3rd Year B.Tech Artificial Intelligence &amp; Data Science student at Sri Eshwar College of Engineering. I specialize in building impactful AI applications, creating scalable full-stack web platforms, and solving complex problems under pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              download="Divyadharshiny_V_Resume.pdf"
              className="px-6 py-3.5 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-150 transition-all font-semibold flex items-center gap-2 group"
            >
              Download Resume <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-full text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all font-semibold flex items-center gap-2 shadow-sm"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mt-10 text-slate-400"
          >
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Connect:</span>
            <a
              href="https://github.com/divyadharshiny26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/divyadharshiny-v-125a79333/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://leetcode.com/u/_divya-d-26_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all font-semibold text-xs min-w-[42px] flex items-center justify-center"
            >
              LC
            </a>
            <a
              href="https://www.skillrack.com/faces/resume.xhtml?id=514391&key=6272083e287e22217a8cf1aab53090e9befad804"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all font-semibold text-xs min-w-[42px] flex items-center justify-center"
            >
              SR
            </a>
          </motion.div>
        </div>

        {/* Right column photo / animated frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px]"
          >
            {/* Background glowing/rotating ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-blue-500 to-sky-400 rounded-[28px] animate-spin-slow opacity-80 blur-[2px]" />

            {/* Nested frame layer */}
            <div className="absolute inset-2 bg-white rounded-[24px] p-2.5 flex items-center justify-center shadow-xl">
              <div className="relative w-full h-full overflow-hidden rounded-[18px] bg-slate-100 border border-slate-200/70">
                <img
                  src="/assets/profile_photo.jpg"
                  alt="Divyadharshiny V"
                  className="w-full h-full object-contain object-center bg-slate-100 transition-transform duration-700 hover:scale-[1.03]"
                />

              </div>
            </div>


          </motion.div>
        </div>

      </div>
    </section>
  );
}
