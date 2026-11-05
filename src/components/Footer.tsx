import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">
              {PROFILE_INFO.name}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {PROFILE_INFO.roles[lang]}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Santiago de los Caballeros, RD
            </span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Aihcode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@Aihcode</span>
            </a>

            <a
              href="https://github.com/Phermidex"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@Phermidex</span>
            </a>

            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              title={lang === 'es' ? 'Volver al inicio' : 'Back to top'}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-3">
          <p>© {new Date().getFullYear()} {PROFILE_INFO.name}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
            Open Source & Enterprise Engineering · HermePOS · Dominican Republic
          </p>
        </div>
      </div>
    </footer>
  );
};
