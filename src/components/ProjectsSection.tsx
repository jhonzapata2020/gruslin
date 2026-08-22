import React from 'react';
import { SOFTWARE_PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-16 lg:py-24 bg-[#00142A] relative border-t border-slate-800/80 transition-colors duration-300">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header - Exact title & badge specifications */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00264D] border border-cyan-400/60 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>PROYECTOS ACTIVOS • NODO I+D</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
            Proyectos y Desarrollos del Nodo
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            Soluciones tecnológicas y entornos de software diseñados y mantenidos por este nodo de desarrollo.
          </p>
        </div>

        {/* Mapped 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOFTWARE_PROJECTS.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-[#0B1528]/95 rounded-3xl border border-slate-700/60 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between space-y-6 group relative overflow-hidden h-full"
            >
              {/* Subtle top card glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent group-hover:via-emerald-400 transition-all duration-500" />

              {/* Card Top: Category Tag & Status Pill */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  
                  {/* GREEN / CYAN BADGE: PROYECTO ACTIVO DEL NODO */}
                  <span className="text-xs font-extrabold font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-400/60 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    PROYECTO ACTIVO DEL NODO
                  </span>

                  <span className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight font-outfit group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Features Container Box (Consistent rounded container) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#001935]/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Puntos Clave & Capacidades del Nodo
                    </span>
                    <span className="text-[10px] text-emerald-400 font-extrabold">VERIFICADO</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-200 font-medium">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom: Tech Stack Tags & CTA Button */}
              <div className="space-y-5 pt-2 border-t border-slate-800/80">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-[#00264D] text-cyan-300 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
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
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#00264D] via-[#003366] to-[#001935] border border-cyan-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-outfit uppercase">Desarrollos del Nodo I+D • UNAD</h4>
              <p className="text-xs text-slate-300 font-medium">
                Plataformas activas diseñadas por nuestro equipo de 5 integrantes para el Semillero GRUSLIN UNAD.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://samp.gruslin.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>SAMP Live ↗</span>
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
