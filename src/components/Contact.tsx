import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API request (or EmailJS integration)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status back to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Connection</p>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">Let's Connect!</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 font-outfit mb-4">Get in Touch</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                I am actively looking for internship opportunities. Whether you have a question, a project concept, or just want to say hello — feel free to drop a message!
              </p>

              {/* Cards Grid */}
              <div className="space-y-4">
                <a
                  href="mailto:divya.dshiny26@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-150 transition-all group"
                >
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Email Me</p>
                    <p className="text-xs font-bold text-slate-700 truncate">divya.dshiny26@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916369702149"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-150 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Call Me</p>
                    <p className="text-xs font-bold text-slate-700">+91 63697 02149</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-purple-50 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold text-slate-700">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp & LinkedIn Row */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/916369702149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-green-150 transition-all"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/divyadharshiny-v-125a79333/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-150 transition-all"
              >
                <svg className="w-4 h-4 fill-white stroke-none" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-lg border border-green-100"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold font-outfit text-slate-800">Message Sent!</h3>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                    Thank you! Your message has been sent successfully. I will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Inquiry / Partnership Proposal"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, I would love to connect..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-150 disabled:opacity-50 transition-all group"
                  >
                    {status === 'sending' ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
