import React, { useState } from 'react';
import { BookOpen, Award, Users, Cpu, Wrench, Heart } from 'lucide-react';
import { STORY_SECTIONS } from '../data/portfolioData';

interface StoryTimelineProps {
  lang: 'es' | 'en';
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Cpu className="w-4 h-4 text-blue-400" />,
    <Wrench className="w-4 h-4 text-amber-400" />,
    <Users className="w-4 h-4 text-emerald-400" />,
    <Award className="w-4 h-4 text-purple-400" />,
    <Heart className="w-4 h-4 text-rose-400" />,
  ];

  return (
    <section id="story" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>{lang === 'es' ? 'Mi Historia' : 'My Journey'}</span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {lang === 'es' ? 'Del Taller de Herrería al Desarrollo Enterprise' : 'From Blacksmith Craft to Enterprise Software'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance mb-4">
            {lang === 'es' 
              ? 'Una sinfonía de código forjada con disciplina y mentoría' 
              : 'A symphony of code forged with discipline and mentorship'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {lang === 'es'
              ? 'La historia real de cómo pasé de la electrónica y la herrería tradicional al desarrollo de sistemas empresariales, facturación electrónica y arquitecturas modernas.'
              : 'The genuine story of how I transitioned from hardware electronics and traditional metalcraft to enterprise software, fiscal eCF billing, and modern web architectures.'}
          </p>
        </div>

        {/* Story Grid: Navigation Chapters on left, Focused narrative reading pane on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chapter Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {STORY_SECTIONS.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  activeStep === idx
                    ? 'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-md'
                    : 'bg-white/60 dark:bg-neutral-950/60 border-neutral-200 dark:border-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shrink-0 mt-0.5">
                  {icons[idx]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono mb-1">
                    <span className="text-neutral-500">0{idx + 1}.</span>
                    <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">{section.badge}</span>
                  </div>
                  <h3 className={`text-sm font-semibold truncate ${activeStep === idx ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
                    {section.title[lang]}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                    {section.subtitle[lang]}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Focused Narrative Pane (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7 sm:p-9 shadow-sm relative">
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800/80 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400">
                  {icons[activeStep]}
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-500">
                    Capítulo 0{activeStep + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {STORY_SECTIONS[activeStep].title[lang]}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 tabular-nums shrink-0">
                {STORY_SECTIONS[activeStep].badge}
              </span>
            </div>

            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal mb-8">
              "{STORY_SECTIONS[activeStep].content[lang]}"
            </p>

            {/* Editorial Mentions & People */}
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 font-mono">
                  {lang === 'es' ? 'Mentores & Colaboradores clave:' : 'Key Mentors & Collaborators:'}
                </span>
                <span className="text-neutral-900 dark:text-neutral-300 font-medium">
                  Damian Ureña · Jehovany Córdova · Ing. Diosiris Camacho · Eduardo Reyes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-neutral-100 dark:disabled:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  ←
                </button>
                <span className="font-mono text-neutral-500">
                  {activeStep + 1} / {STORY_SECTIONS.length}
                </span>
                <button
                  disabled={activeStep === STORY_SECTIONS.length - 1}
                  onClick={() => setActiveStep(Math.min(STORY_SECTIONS.length - 1, activeStep + 1))}
                  className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-neutral-100 dark:disabled:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
