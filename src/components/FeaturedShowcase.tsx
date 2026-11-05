import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { ALL_PROJECTS, Repository } from '../data/portfolioData';

interface FeaturedShowcaseProps {
  lang: 'es' | 'en';
  onSelectProject: (project: Repository) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ lang, onSelectProject }) => {
  const featured = ALL_PROJECTS.filter((p) => p.isFeatured);
  const heroProject = featured.find((p) => p.id === 'hermepos_v3') || featured[0];
  const secondaryProjects = featured.filter((p) => p.id !== heroProject.id).slice(0, 3);

  return (
    <section className="py-16 sm:py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span>{lang === 'es' ? 'Proyectos Destacados' : 'Flagship Systems'}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-600 dark:text-neutral-400">{lang === 'es' ? 'Casos de Éxito & Producción' : 'Production Deployments'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance">
              {lang === 'es' 
                ? 'Soluciones empresariales e ingeniería de impacto' 
                : 'Enterprise solutions and impactful engineering'}
            </h2>
          </div>

          <a
            href="#projects"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center gap-1 shrink-0 self-start md:self-auto"
          >
            <span>{lang === 'es' ? 'Ver catálogo completo (22+ repos)' : 'Browse all 22+ repositories'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Hero Card: HermePOS v3 (7 cols) */}
          <div 
            onClick={() => onSelectProject(heroProject)}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
              <img
                src={heroProject.image || "/src/assets/images/project_hermepos_pos_1793793813202.jpg"}
                alt={heroProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono bg-neutral-900/90 text-white dark:bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-neutral-700">
                <span className="font-semibold text-blue-400">@Aihcode</span>
                <span aria-hidden="true">·</span>
                <span>{heroProject.language}</span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {heroProject.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:text-white group-hover:bg-blue-600 transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
                  {heroProject.description[lang]}
                </p>

                {/* Highlights */}
                {heroProject.highlights && (
                  <div className="space-y-1.5 mb-6 text-xs text-neutral-600 dark:text-neutral-400">
                    {heroProject.highlights[lang].map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 font-mono mt-0.5">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Unboxed Metadata Footer */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2 flex-wrap">
                  {heroProject.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < heroProject.tags.length - 1 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={heroProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  {heroProject.liveUrl && (
                    <a
                      href={heroProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-all cursor-pointer group flex flex-col sm:flex-row lg:flex-col justify-between"
              >
                {project.image && (
                  <div className="sm:w-48 lg:w-full aspect-[16/9] sm:aspect-auto lg:aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-950 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">@{project.owner}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.language}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-4 leading-relaxed">
                      {project.description[lang]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="truncate max-w-[200px]">
                      {project.tags.slice(0, 3).join(' · ')}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {lang === 'es' ? 'Detalles →' : 'Details →'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
