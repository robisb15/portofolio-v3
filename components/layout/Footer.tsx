import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            &copy; {currentYear} Personal Portfolio. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-slate-500 hover:text-sky-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-sky-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-slate-500 hover:text-sky-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
