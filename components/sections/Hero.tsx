"use client";

import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
        {/* Gradient Blur blobs */}
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-sky-400/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[40%] w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <motion.div variants={itemVariants}>
             <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 text-sm font-semibold mb-4 border border-sky-200 dark:border-sky-800">
               Welcome to my portfolio
             </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-poppins text-slate-800 dark:text-slate-100 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Robi Aulia Kurniawan</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 h-16">
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Developer",
                2000,
                "Devs Ops Engineer",
                2000,
                "IT Operation",
                2000,
                "Database Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto pt-4 text-base md:text-lg"
          >
            I build fast, accessible, and scalable web applications. Transforming complex problems into elegant digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
