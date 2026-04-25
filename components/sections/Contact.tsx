"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blobs for contact area */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[128px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 dark:text-slate-300 max-w-xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-2xl flex items-start gap-4 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-sky-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Email Me</h3>
                <a href="mailto:hello@example.com" className="text-slate-500 dark:text-slate-300 hover:text-sky-500 transition-colors">robiaulia.k@gmail.com</a>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex items-start gap-4 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-sky-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Location</h3>
                <p className="text-slate-500 dark:text-slate-300">Jambi, Indonesia</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass-panel p-8 md:p-10 rounded-2xl"
          >
            <form className="space-y-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                 <input 
                   type="text" 
                   id="name"
                   placeholder="Your Name"
                   className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">Email Address</label>
                 <input 
                   type="email" 
                   id="email"
                   placeholder="john@example.com"
                   className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                 <textarea 
                   id="message"
                   rows={5}
                   placeholder="How can I help you?"
                   className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400 resize-none"
                 />
               </div>
               <button 
                 type="button" 
                 className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl shadow-lg shadow-sky-500/30 transition-all flex items-center justify-center gap-2 group"
               >
                 Send Message
                 <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
