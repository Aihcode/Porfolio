/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { ProjectCatalog } from './components/ProjectCatalog';
import { StoryTimeline } from './components/StoryTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Repository } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek dark mode
  });

  const [lang, setLang] = useState<'es' | 'en'>(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'es') return savedLang;
    return 'es'; // Default to Spanish as requested
  });

  const [selectedProject, setSelectedProject] = useState<Repository | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
      />

      <main>
        {/* Split Hero & Metrics Strip */}
        <Hero lang={lang} />

        {/* Flagship Bento Showcase */}
        <FeaturedShowcase
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Full Repository Catalog (all 22+ projects) */}
        <ProjectCatalog
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* "Mi Historia" Biographical Journey */}
        <StoryTimeline lang={lang} />

        {/* Technical Competencies & DGII Specialization */}
        <SkillsSection lang={lang} />

        {/* Direct Contact & Interaction Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Clean Footer */}
      <Footer lang={lang} />

      {/* Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </div>
  );
}
