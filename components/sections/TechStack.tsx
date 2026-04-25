"use client";

import { motion, type Variants } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center w-full max-w-sm mb-6">
            <div className="flex-1 h-[1px] bg-sky-200 dark:bg-sky-900/50"></div>
            <h2 className="px-4 text-2xl md:text-3xl font-bold font-poppins tracking-wider text-slate-800 dark:text-slate-100 uppercase">Stacks</h2>
            <div className="flex-1 h-[1px] bg-sky-200 dark:bg-sky-900/50"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-300 text-sm md:text-base">
            The core technologies I use to build scalable and reliable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {TECH_STACK.map((tech, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariant}
              whileHover={{ scale: 1.03 }}
              className="group flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:border-sky-400/50 hover:shadow-sky-500/10 transition-all duration-300"
            >
              <tech.icon 
                className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]" 
                style={{ color: tech.color }}
              />
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-700 dark:text-slate-200">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
