"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 w-full max-w-[1400px]">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center w-full max-w-sm mb-6">
            <div className="flex-1 h-[1px] bg-sky-200 dark:bg-sky-900/50"></div>
            <h2 className="px-4 text-2xl md:text-3xl font-bold font-poppins tracking-wider text-slate-800 dark:text-slate-100 uppercase">Experiences</h2>
            <div className="flex-1 h-[1px] bg-sky-200 dark:bg-sky-900/50"></div>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200/50 dark:border-slate-800/50 md:border-none space-y-12 ml-4 pl-8 md:ml-0 md:pl-0">
          {/* Animated Central Line for Desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-sky-400/50 via-sky-500 to-transparent -translate-x-1/2"
          ></motion.div>

          {EXPERIENCE.map((exp, idx) => {
             const isEven = idx % 2 === 0;

             return (
              <div key={idx} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start justify-between group`}>
                 {/* Timeline Marker */}
                 <div className="absolute -left-[50px] top-0 md:top-6 md:left-1/2 md:-translate-x-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)] z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]">
                   {exp.type === "education" ? (
                     <GraduationCap size={18} className="text-sky-500" />
                   ) : (
                     <Briefcase size={18} className="text-sky-500" />
                   )}
                 </div>

                 {/* Empty space for grid balancing */}
                 <div className="hidden md:block w-1/2"></div>

                 {/* Content Card container with slide animation */}
                 <motion.div 
                   initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
                   className={`w-full md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}
                 >
                    <div className={`py-1 transition-all duration-300 transform group-hover:-translate-y-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <span className="inline-block text-sm italic text-slate-500 dark:text-slate-300 mb-1 font-medium">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-tight">{exp.role}</h3>
                      <h4 className="text-lg text-sky-500 font-medium mb-3">
                        {exp.type === "education" ? exp.company : `@ ${exp.company}`}
                      </h4>
                      
                      {exp.tasks && exp.tasks.length > 0 ? (
                        <ul className={`space-y-2 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                          {exp.tasks.map((task, i) => (
                            <li key={i} className={`flex flex-row items-center gap-2 ${isEven ? 'md:flex-row-reverse md:text-right' : 'md:text-left'} text-left`}>
                              <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                              <span className="text-slate-600 dark:text-slate-300 text-[15px] leading-snug">
                                {task}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p 
                          className={`text-slate-600 dark:text-slate-300 text-[15px] leading-snug`}
                          dangerouslySetInnerHTML={{ __html: exp.description || "" }}
                        />
                      )}
                    </div>
                 </motion.div>
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
