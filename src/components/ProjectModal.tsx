import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, Copy, Check, Terminal, Calendar, Tag } from 'lucide-react';
import { Repository } from '../data/portfolioData';

interface ProjectModalProps {
  project: Repository | null;
  onClose: () => void;
  lang: 'es' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Metadata Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
          <span className="text-blue-600 dark:text-blue-400 font-semibold">@{project.owner}</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
          <span>{project.language || 'Code'}</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600">·</span>
          <span className="tabular-nums">
            {new Date(project.updatedAt).toLocaleDateString(lang === 'es' ? 'es-DO' : 'en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 pr-10">
          {project.title}
        </h2>

        {/* Optional Artwork */}
        {project.image && (
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            {lang === 'es' ? 'Descripción del Proyecto' : 'Project Overview'}
          </h3>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.description[lang]}
          </p>
        </div>

        {/* Highlights if any */}
        {project.highlights && (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              {lang === 'es' ? 'Aspectos Técnicos Destacados' : 'Technical Highlights'}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {project.highlights[lang].map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            {lang === 'es' ? 'Tecnologías y Enfoque' : 'Technologies & Scope'}
          </h3>
          <div className="text-xs text-neutral-600 dark:text-neutral-300 font-mono">
            {project.tags.join(' · ')}
          </div>
        </div>

        {/* Git Clone Command snippet */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'es' ? 'Clonar Repositorio' : 'Clone Repository'}</span>
          </h3>
          <div className="flex items-center justify-between gap-3 p-3 bg-neutral-100 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-800 dark:text-neutral-300 overflow-x-auto">
            <span className="select-all truncate">{cloneCommand}</span>
            <button
              onClick={handleCopyClone}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-neutral-700 transition-colors shrink-0"
              title="Copiar comando"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400">{lang === 'es' ? 'Copiado' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{lang === 'es' ? 'Copiar' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>{lang === 'es' ? 'Ver en GitHub' : 'View on GitHub'}</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{lang === 'es' ? 'Abrir Sitio / Demo' : 'Visit Live Deployment'}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
