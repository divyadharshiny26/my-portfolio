import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import ExtraFeatures from './components/ExtraFeatures';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Scroll progress and active section spy
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'certificates', 'coding-profiles', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for detection

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Mouse parallax movement for cursor glow spot
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white select-none selection:bg-indigo-600/10 selection:text-indigo-600">
      
      {/* Desktop Mouse glow spot */}
      <div
        className="glow-spot fixed inset-0 z-0 pointer-events-none hidden md:block"
        style={{
          '--x': `${mousePos.x}px`,
          '--y': `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 z-50 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* Main Sections Wrapper */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <CodingProfiles />
        <ExtraFeatures />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
