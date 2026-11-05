import React from 'react';
import { Code2, Server, Database, Briefcase, CheckCircle2 } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: 'es' | 'en';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const categoryIcons = [
    <Code2 className="w-4 h-4 text-blue-400" />,
    <Server className="w-4 h-4 text-emerald-400" />,
    <Database className="w-4 h-4 text-purple-400" />,
    <Briefcase className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>{lang === 'es' ? 'Habilidades & Stack' : 'Skills & Stack'}</span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <span className="text-neutral-600 dark:text-neutral-400">{lang === 'es' ? 'Herramientas de Producción' : 'Production Tooling'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance mb-4">
            {lang === 'es'
              ? 'Arquitecturas probadas en entornos empresariales'
              : 'Tested architectures for demanding enterprise environments'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {lang === 'es'
              ? 'Un equilibrio sólido entre ingeniería frontend moderna, arquitectura backend en Python y TypeScript, y dominio normativo en facturación eCF de República Dominicana.'
              : 'A balanced engineering stack spanning modern frontend frameworks, scalable Python and TypeScript backends, and specialized regulatory domain expertise.'}
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_LIST.map((group, idx) => (
            <div
              key={group.category.en}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shrink-0">
                    {categoryIcons[idx]}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-tight">
                    {group.category[lang]}
                  </h3>
                </div>

                <div className="space-y-2.5 mb-6">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-500">
                {lang === 'es' ? 'Dominio en Producción' : 'Production Proven'}
              </div>
            </div>
          ))}
        </div>

        {/* Dominican Republic DGII Compliance Spotlight banner */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-r from-blue-50/80 via-white to-white dark:from-blue-950/30 dark:via-neutral-900 dark:to-neutral-900 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
              <span className="font-semibold">{lang === 'es' ? 'ESPECIALIDAD REGIONAL' : 'REGIONAL EXPERTISE'}</span>
              <span aria-hidden="true">·</span>
              <span>República Dominicana 🇩🇴</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
              {lang === 'es' ? 'Facturación Electrónica eCF & Comprobantes Fiscales DGII' : 'Dominican DGII eCF Electronic Invoicing'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl">
              {lang === 'es'
                ? 'Experiencia implementando la normativa de comprobantes electrónicos fiscales eCF, secuencias NCF (Norma 06-18), firma digital XML y sincronización directa con los servicios web de la DGII en HermePOS.'
                : 'Deep experience implementing Dominican DGII electronic fiscal invoicing (eCF), NCF sequence validation (Rule 06-18), XML digital signatures, and direct DGII web service synchronization.'}
            </p>
          </div>

          <a
            href="https://github.com/Aihcode/hermepos_v3"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            {lang === 'es' ? 'Ver Implementación en HermePOS' : 'Explore HermePOS Implementation'}
          </a>
        </div>

      </div>
    </section>
  );
};
