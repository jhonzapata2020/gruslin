import React from 'react';
import { SOFTWARE_PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { ExternalLink, Code2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-16 lg:py-24 bg-[#00142A] relative border-t border-slate-800/80 transition-colors duration-300">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-[#1a7fb3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[550px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00264D] border border-amber-400/60 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Code2 className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>I+D & SOFTWARE LIBRE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
            Proyectos Desarrollados por el Equipo
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            Soluciones educativas y tecnológicas de código abierto desarrolladas para fortalecer la práctica de programación, maratones de código y la investigación formativa en la comunidad académica UNAD.
          </p>
        </div>

        {/* Mapped 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOFTWARE_PROJECTS.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-[#0B1528]/95 rounded-3xl border border-slate-700/60 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between space-y-6 group relative overflow-hidden h-full"
            >
              {/* Subtle top card glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent group-hover:via-amber-400 transition-all duration-500" />

              {/* Card Top: Category Tag & Status Pill */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold font-mono uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-500/30">
                    {project.category}
                  </span>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight font-outfit group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Features Container Box (Consistent rounded container) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#001935]/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b dark:border-slate-800 border-slate-300 pb-2 text-[11px] font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Puntos Clave & Capacidades
                    </span>
                    <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-extrabold">VERIFICADO</span>
                  </div>

                  <ul className="space-y-2 text-xs dark:text-slate-200 text-slate-800 font-medium">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom: Tech Stack Tags & CTA Button */}
              <div className="space-y-5 pt-2 border-t dark:border-slate-800/80 border-slate-300">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg dark:bg-[#00264D] bg-sky-100 dark:text-amber-300 text-sky-900 border dark:border-amber-500/30 border-sky-300 group-hover:border-amber-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Primary CTA Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                >
                  <span>{project.ctaText}</span>
                  <ExternalLink className="w-4 h-4 text-slate-900" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Institutional Commitment Footer Banner */}
        <div className="p-6 sm:p-7 rounded-3xl dark:bg-gradient-to-r dark:from-[#00264D] dark:via-[#003366] dark:to-[#001935] bg-slate-200/90 border dark:border-amber-500/40 border-amber-400/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 dark:text-white text-[#001935]">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl dark:bg-amber-400/10 bg-amber-100 border border-amber-400/50 flex items-center justify-center text-amber-500 shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold dark:text-white text-[#001935] font-outfit uppercase">Desarrollos Oficiales del Semillero GRUSLIN UNAD</h4>
              <p className="text-xs dark:text-slate-300 text-slate-700 font-medium">
                Plataformas libres activas diseñadas para fortalecer el aprendizaje, maratones de código e investigación formativa.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://samp.gruslin.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>SAMP ↗</span>
            </a>
            <a
              href="https://simuladorunad.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-900 text-xs font-bold hover:bg-amber-300 transition-all flex items-center gap-1.5"
            >
              <span>Simulador PythonLab ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
