import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Globe, ArrowUpRight } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'es' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(
      formSubject || (lang === 'es' ? 'Contacto desde Portafolio' : 'Portfolio Inbound Inquiry')
    )}&body=${encodeURIComponent(
      `Nombre: ${formName}\nEmail: ${formEmail}\n\nMensaje:\n${formMessage}`
    )}`;
    window.location.href = mailto;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>{lang === 'es' ? 'Contacto & Colaboración' : 'Get in Touch'}</span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {lang === 'es' ? 'Inicia una conversación' : 'Start a Conversation'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white text-balance mb-4">
            {lang === 'es'
              ? '¿Tienes un proyecto en mente o buscas un desarrollador?'
              : 'Have a project in mind or looking for a developer?'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {lang === 'es'
              ? 'Disponible para consultoría en facturación DGII eCF, desarrollo de aplicaciones en Next.js/React, integraciones de backend o proyectos full-stack.'
              : 'Available for technical consulting on Dominican DGII eCF fiscal billing, custom Next.js/React web applications, and senior full-stack development.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{lang === 'es' ? 'CORREO DIRECTO' : 'DIRECT EMAIL'}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">{lang === 'es' ? 'Copiado' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">{lang === 'es' ? 'Copiar' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono break-all"
              >
                {PROFILE_INFO.email}
              </a>
            </div>

            {/* LinkedIn Profile */}
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">LinkedIn</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Hermides Medina
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Profiles (@Aihcode & @Phermidex) */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>{lang === 'es' ? 'PERFILES DE GITHUB' : 'GITHUB PROFILES'}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://github.com/Aihcode"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-left transition-colors group"
                >
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">@Aihcode</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">22+ repos</div>
                </a>

                <a
                  href="https://github.com/Phermidex"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-left transition-colors group"
                >
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">@Phermidex</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">44+ repos</div>
                </a>
              </div>
            </div>

            {/* Location & Website */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>Santiago de los Caballeros, RD</span>
              </div>

              <a
                href={PROFILE_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 font-mono transition-colors font-medium"
              >
                <span>hermepos.com</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Interactive Email Drafting Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
              {lang === 'es' ? 'Enviar un Mensaje Directo' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              {lang === 'es'
                ? 'Completa el formulario para redactar un correo con formato listo para enviar a hermidesm05@gmail.com'
                : 'Fill out this form to draft a structured email directly to hermidesm05@gmail.com'}
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1.5">
                    {lang === 'es' ? 'Nombre' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={lang === 'es' ? 'Tu nombre o empresa' : 'Your name or company'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1.5">
                    {lang === 'es' ? 'Correo Electrónico' : 'Your Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1.5">
                  {lang === 'es' ? 'Asunto / Proyecto' : 'Subject / Project'}
                </label>
                <input
                  type="text"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder={lang === 'es' ? 'Ej. Facturación eCF / Desarrollo de App' : 'e.g. DGII eCF Invoicing / Web App Dev'}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-600 dark:text-neutral-400 mb-1.5">
                  {lang === 'es' ? 'Mensaje' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder={lang === 'es' ? 'Cuéntame sobre tu proyecto, requerimientos o consulta...' : 'Tell me about your requirements, project timeline, or questions...'}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:border-blue-500 outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Abrir en Correo' : 'Send via Email Client'}</span>
                </button>

                {sentNotice && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Abriendo cliente de correo...' : 'Opening email client...'}</span>
                  </span>
                )}
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
