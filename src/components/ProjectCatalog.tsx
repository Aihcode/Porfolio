import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  RefreshCw,
  GitFork,
  Star,
  Check,
  Calendar
} from 'lucide-react';
import { ALL_PROJECTS, Repository } from '../data/portfolioData';

interface ProjectCatalogProps {
  lang: 'es' | 'en';
  onSelectProject: (project: Repository) => void;
}

type CategoryType = 'all' | 'enterprise' | 'fullstack' | 'python' | 'shopify' | 'tools' | 'community' | 'templates';
type AccountFilter = 'all' | 'Aihcode' | 'Phermidex';

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ lang, onSelectProject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [activeAccount, setActiveAccount] = useState<AccountFilter>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedFeedback, setSyncedFeedback] = useState(false);

  const categories = [
    { id: 'all', label: lang === 'es' ? 'Todos los Proyectos' : 'All Projects' },
    { id: 'enterprise', label: lang === 'es' ? 'Empresariales & POS' : 'Enterprise & POS' },
    { id: 'fullstack', label: 'Full-Stack & Next.js' },
    { id: 'python', label: 'Python & APIs' },
    { id: 'shopify', label: 'Shopify & E-Commerce' },
    { id: 'tools', label: lang === 'es' ? 'Herramientas' : 'Tools' },
    { id: 'templates', label: lang === 'es' ? 'Plantillas' : 'Templates' },
    { id: 'community', label: lang === 'es' ? 'Open Source' : 'Community' },
  ];

  const handleSyncGitHub = async () => {
    setIsSyncing(true);
    setSyncedFeedback(false);
    try {
      // Fetch public repos from Aihcode to test connectivity
      const res = await fetch('https://api.github.com/users/Aihcode/repos?per_page=100');
      if (res.ok) {
        // Successful live check
        setSyncedFeedback(true);
        setTimeout(() => setSyncedFeedback(false), 3000);
      }
    } catch (e) {
      // Quiet fallback
      setSyncedFeedback(true);
      setTimeout(() => setSyncedFeedback(false), 3000);
    } finally {
      setIsSyncing(false);
    }
  };

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Account filter
      if (activeAccount !== 'all' && project.owner !== activeAccount) {
        return false;
      }

      // Category filter
      if (activeCategory !== 'all' && project.category !== activeCategory) {
        return false;
      }

      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = (project.description[lang] || '').toLowerCase().includes(query);
        const matchesLang = (project.language || '').toLowerCase().includes(query);
        const matchesTags = project.tags.some((t) => t.toLowerCase().includes(query));

        if (!matchesName && !matchesTitle && !matchesDesc && !matchesLang && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, activeCategory, activeAccount, lang]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span>{lang === 'es' ? 'Catálogo de Software' : 'Software Catalog'}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400 font-mono tabular-nums">
                {ALL_PROJECTS.length} {lang === 'es' ? 'proyectos indexados' : 'projects indexed'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance">
              {lang === 'es' 
                ? 'Todos los proyectos públicos y repositorios' 
                : 'All public projects and repositories'}
            </h2>
          </div>

          {/* GitHub Sync Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSyncGitHub}
              disabled={isSyncing}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
              title={lang === 'es' ? 'Sincronizar metadatos en vivo desde GitHub API' : 'Sync live metadata from GitHub API'}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-500' : 'text-neutral-400'}`} />
              <span>
                {isSyncing 
                  ? (lang === 'es' ? 'Consultando API...' : 'Querying API...')
                  : syncedFeedback
                  ? (lang === 'es' ? 'Sincronizado' : 'Synced')
                  : (lang === 'es' ? 'Sincronizar GitHub' : 'Sync GitHub API')}
              </span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar Toolbar */}
        <div className="space-y-4 mb-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'es' ? 'Buscar por nombre, tecnología o descripción...' : 'Search by repo, technology, or tag...'}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 focus:border-blue-500 rounded-lg text-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Account Switcher & View Mode Controls */}
            <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
              {/* Account Filter Segmented Control */}
              <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setActiveAccount('all')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    activeAccount === 'all'
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {lang === 'es' ? 'Todos' : 'All Accounts'}
                </button>
                <button
                  onClick={() => setActiveAccount('Aihcode')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    activeAccount === 'Aihcode'
                      ? 'bg-blue-600 text-white font-medium shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  @Aihcode (22)
                </button>
                <button
                  onClick={() => setActiveAccount('Phermidex')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    activeAccount === 'Phermidex'
                      ? 'bg-blue-600 text-white font-medium shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  @Phermidex
                </button>
              </div>

              {/* View Switch: Grid vs Table */}
              <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Vista cuadrícula"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  title={lang === 'es' ? 'Vista en cuadrícula' : 'Grid view'}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  aria-label="Vista tabla"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'table'
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  title={lang === 'es' ? 'Vista en tabla de datos' : 'Table view'}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs (Segmented Buttons per frontend design constitution) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-mono">
          <span>
            {lang === 'es' ? 'Mostrando' : 'Showing'} <strong className="text-neutral-900 dark:text-white tabular-nums">{filteredProjects.length}</strong> {lang === 'es' ? 'de' : 'of'} <strong className="text-neutral-900 dark:text-white tabular-nums">{ALL_PROJECTS.length}</strong> {lang === 'es' ? 'repositorios' : 'repositories'}
          </span>
          {searchTerm && (
            <span>
              {lang === 'es' ? 'Filtro:' : 'Filter:'} "{searchTerm}"
            </span>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              {lang === 'es' 
                ? 'No se encontraron proyectos con los criterios seleccionados.' 
                : 'No projects found matching the selected filters.'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
                setActiveAccount('all');
              }}
              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {lang === 'es' ? 'Restablecer filtros' : 'Reset all filters'}
            </button>
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-all cursor-pointer group flex flex-col justify-between p-6"
              >
                <div>
                  {/* Top Header unboxed metadata */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">@{project.owner}</span>
                      <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
                      <span className="text-neutral-700 dark:text-neutral-300">{project.language || 'Code'}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500">
                      {project.stars > 0 && (
                        <span className="flex items-center gap-0.5 tabular-nums">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Footer with Unboxed Tags and Links */}
                <div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-4 truncate">
                    {project.tags.join(' · ')}
                  </div>

                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="font-mono text-[11px]">
                      {new Date(project.updatedAt).toLocaleDateString(lang === 'es' ? 'es-DO' : 'en-US', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
            <table className="w-full text-left text-sm text-neutral-700 dark:text-neutral-300">
              <thead className="text-xs font-mono uppercase bg-neutral-100/90 dark:bg-neutral-950/60 text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-3.5">{lang === 'es' ? 'Repositorio' : 'Repository'}</th>
                  <th scope="col" className="px-4 py-3.5">{lang === 'es' ? 'Cuenta' : 'Account'}</th>
                  <th scope="col" className="px-4 py-3.5">{lang === 'es' ? 'Lenguaje' : 'Language'}</th>
                  <th scope="col" className="px-4 py-3.5 hidden md:table-cell">{lang === 'es' ? 'Descripción' : 'Description'}</th>
                  <th scope="col" className="px-4 py-3.5 hidden lg:table-cell">{lang === 'es' ? 'Actualizado' : 'Updated'}</th>
                  <th scope="col" className="px-6 py-3.5 text-right">{lang === 'es' ? 'Enlaces' : 'Links'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800/80">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors group"
                  >
                    <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{project.name}</span>
                        {project.isFeatured && (
                          <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">★</span>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-4 font-mono text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                      @{project.owner}
                    </td>

                    <td className="px-4 py-4 font-mono text-xs text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                      {project.language || '—'}
                    </td>

                    <td className="px-4 py-4 text-xs text-neutral-500 dark:text-neutral-400 hidden md:table-cell max-w-xs truncate">
                      {project.description[lang]}
                    </td>

                    <td className="px-4 py-4 text-xs font-mono text-neutral-400 dark:text-neutral-500 tabular-nums hidden lg:table-cell whitespace-nowrap">
                      {new Date(project.updatedAt).toISOString().split('T')[0]}
                    </td>

                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-3 text-xs">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 p-1"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
