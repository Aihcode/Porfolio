import React from 'react';
import { ArrowDown, Github, Linkedin, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import heroWorkspaceImg from '../assets/images/hero_dev_workspace_1793793811648.jpg';

interface HeroProps {
  lang: 'es' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="about" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <span className="font-semibold">{PROFILE_INFO.name}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                Santiago de los Caballeros, RD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] text-balance mb-6">
              {lang === 'es' ? (
                <>
                  Construyendo <span className="text-blue-600 dark:text-blue-400">sistemas empresariales</span> y experiencias web de alto rendimiento.
                </>
              ) : (
                <>
                  Engineering <span className="text-blue-600 dark:text-blue-400">enterprise platforms</span> and high-performance web systems.
                </>
              )}
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              {lang === 'es'
                ? "Más de 10 años transformando lógica en soluciones reales. Desde electrónica y talleres industriales hasta facturación electrónica DGII (eCF), sistemas POS e inventario como HermePOS, y aplicaciones modernas en Next.js, TypeScript y Python."
                : "Over 10 years turning logic into production software. From electronics and industrial workshops to certified Dominican DGII eCF fiscal billing, inventory ERPs like HermePOS, and modern Next.js, TypeScript, and Python systems."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>{lang === 'es' ? 'Explorar 22+ Proyectos Públicos' : 'Explore 22+ Public Projects'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 transition-colors whitespace-nowrap shrink-0"
              >
                {lang === 'es' ? 'Leer Mi Historia' : 'Read My Journey'}
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Aihcode"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shrink-0"
                  title="GitHub @Aihcode"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shrink-0"
                  title="LinkedIn Hermides Medina"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Profile handles & trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-600 dark:text-neutral-400 font-mono pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{lang === 'es' ? 'Disponible para proyectos & consultoría' : 'Available for contracts & senior engineering'}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <a 
                href="https://hermepos.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-neutral-700 dark:text-neutral-300"
              >
                <span>hermepos.com</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Container & Profile Insight */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl group">
              
              {/* Developer Workspace Visual */}
              <div className="aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                <img
                  src={heroWorkspaceImg}
                  alt="Hermides Medina Software Engineering Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Profile Card Overlay */}
              <div className="p-4 sm:p-5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://avatars.githubusercontent.com/u/110110613?v=4"
                      alt="Hermides Medina Avatar"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Hermides Medina</h2>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                          Dev
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        GitHub: <span className="text-neutral-700 dark:text-neutral-300">@Aihcode</span> & <span className="text-neutral-700 dark:text-neutral-300">@Phermidex</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://github.com/Aihcode"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-700 dark:text-neutral-200 transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Metrics Strip Below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              22+
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {lang === 'es' ? 'Repositorios en @Aihcode' : 'Repositories in @Aihcode'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              44+
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {lang === 'es' ? 'Repositorios en @Phermidex' : 'Repositories in @Phermidex'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              10+ {lang === 'es' ? 'Años' : 'Years'}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {lang === 'es' ? 'Trayectoria y Código (2015-2026)' : 'Active Coding (2015-2026)'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-600 dark:text-blue-400">
              DGII eCF
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {lang === 'es' ? 'Facturación & POS Especialista' : 'Certified Fiscal Billing & POS'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
