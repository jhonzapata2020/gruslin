import React from 'react';
import { SOFTWARE_PROJECTS } from '../data/mockData';
import { Terminal, ExternalLink, CheckCircle2, FolderGit2, Award } from 'lucide-react';

export const ResearchLabContainer: React.FC = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-card border border-[#F0B429]/50 shadow-xl p-5 sm:p-6 space-y-5 bg-gradient-to-br from-[#001E42] via-[#001935] to-[#000F24] transition-colors duration-300">
      
      {/* Header Banner for Main Container */}
      <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#00264D] border border-amber-400/60 text-amber-400">
            <FolderGit2 className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-sm sm:text-base font-outfit">Proyectos de Software & I+D</h3>
            <p className="text-[11px] text-slate-300 font-semibold">Desarrollos Abiertos del Semillero GRUSLIN</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> 2 Proyectos Activos
        </span>
      </div>

      {/* 2 Separate Cards for the 2 Projects inside Main Container */}
      <div className="space-y-4">
        {SOFTWARE_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="p-4 sm:p-5 rounded-2xl bg-[#00152B]/95 border border-slate-700/80 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md space-y-3.5 group relative overflow-hidden"
          >
            {/* Subtle Top Card Accent Glow Line */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent group-hover:via-amber-400/80 transition-all duration-300" />

            {/* Card Header: Category & Live CTA Button */}
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/30 inline-block">
                  {project.type}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-white font-outfit group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h4>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:from-amber-300 hover:to-amber-400 transition-all shrink-0 hover:scale-105"
              >
                <span>{project.id === 'samp' ? 'Ir al Proyecto' : 'Abrir Simulador'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
              </a>
            </div>

            {/* Description */}
            <p className="text-slate-200 text-xs leading-relaxed font-medium">
              {project.description}
            </p>

            {/* Dedicated Inner Highlight Box for Simulador UNAD PythonLab */}
            {project.id === 'simulador-unad' && (
              <div className="p-3 rounded-xl dark:bg-[#030B18] bg-slate-200/80 border dark:border-amber-500/30 border-amber-400/60 shadow-sm text-[11px] space-y-2">
                <div className="flex items-center justify-between dark:text-slate-400 text-slate-700 pb-1 border-b dark:border-slate-800 border-slate-300">
                  <span className="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-amber-600" /> PythonLab UNAD
                  </span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                    FASES 2, 3 Y 4 ACTIVAS
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-900 dark:text-emerald-300 font-semibold">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Insignias Digitales con QR al aprobar los ejercicios</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 font-mono font-bold text-[9px] uppercase border border-emerald-500/40 shrink-0">
                    VERIFICACIÓN OK
                  </span>
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="space-y-1 pt-1">
              <span className="text-[9px] font-bold dark:text-slate-400 text-slate-700 uppercase tracking-wider block">TECHNOLOGIES & TOOLS:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md dark:bg-[#00264D] bg-sky-100 dark:text-amber-300 text-sky-900 border dark:border-amber-500/30 border-sky-300 text-[10px] font-mono font-bold"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-700 pt-1 border-t dark:border-slate-800 border-slate-300">
        <span className="flex items-center gap-1 dark:text-slate-300 text-slate-800 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Licencia Open Source MIT/GPL
        </span>
        <span className="font-mono text-amber-700 dark:text-amber-400 font-bold">Semillero GRUSLIN UNAD</span>
      </div>

    </div>
  );
};
