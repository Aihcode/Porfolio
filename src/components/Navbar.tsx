import React, { useState } from 'react';
import { Sun, Moon, Globe, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'es' | 'en';
  setLang: (val: 'es' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'es' ? 'Sobre Mí' : 'About', href: '#about' },
    { label: lang === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { label: lang === 'es' ? 'Mi Historia' : 'Story', href: '#story' },
    { label: lang === 'es' ? 'Habilidades' : 'Skills', href: '#skills' },
    { label: lang === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand element */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm">
            HM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {PROFILE_INFO.name}
            </span>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-tight">
              @Aihcode · @Phermidex
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls & 1 Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label="Cambiar idioma"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors whitespace-nowrap shrink-0"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
            <span className="font-mono uppercase font-semibold">{lang}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="p-1.5 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shrink-0"
            title={darkMode ? (lang === 'es' ? 'Modo claro' : 'Light mode') : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-600" />
            )}
          </button>

          {/* GitHub Profile Direct */}
          <a
            href="https://github.com/Aihcode"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center p-1.5 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shrink-0"
            title="GitHub @Aihcode"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <span>{lang === 'es' ? 'Contratar' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-1.5 rounded-md text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Aihcode"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>Aihcode</span>
              </a>
              <a
                href="https://github.com/Phermidex"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>Phermidex</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 text-center"
            >
              {lang === 'es' ? 'Contratar' : 'Contact'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
