"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Cpu, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Total Projects", value: "10+" },
    { label: "Years Experience", value: "2+" },
    // { label: "Technologies Used", value: "15+" },
  ];

  const strengths = [
    { icon: <Code2 className="text-sky-500" size={24} />, title: "Clean Code", desc: "Writing maintainable and readable code architectures." },
    { icon: <Cpu className="text-indigo-500" size={24} />, title: "Problem Solving", desc: "Tackling complex backend logic and optimizations." },
    { icon: <Rocket className="text-blue-500" size={24} />, title: "Scalable Systems", desc: "Building systems designed for growth." },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 rounded-3xl mx-4 md:mx-12 my-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              Professional Summary
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I am a passionate Fullstack Developer with a strong focus on building
              scalable SaaS products and complex web architectures. I merge technical
              expertise with design sensibilities to deliver seamless UI/UX experiences.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {strengths.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 bg-sky-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
            <div className="p-6 rounded-2xl flex flex-col justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 bg-transparent text-center items-center">
               <CheckCircle2 className="text-slate-400 mb-2" size={32} />
               <p className="text-sm font-medium text-slate-500">Dedicated to Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
