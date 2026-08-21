import React, { useState } from 'react';
import { SOFTWARE_PROJECTS } from '../data/mockData';
import { Code2, Cpu, Terminal, CheckCircle2, ExternalLink, Layers, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';

export const ResearchLabContainer: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const activeProject = SOFTWARE_PROJECTS[activeProjectIdx];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-card border border-[#F0B429]/50 shadow-2xl shadow-sky-950/60 p-5 sm:p-6 space-y-5 bg-gradient-to-br from-[#001E42] via-[#001935] to-[#000F24]">
      
      {/* Header Banner */}
      <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#00264D] border border-amber-400/40 text-amber-400">
            <FolderGit2 className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base font-outfit">Proyectos de Software & I+D</h3>
            <p className="text-[11px] text-slate-300">Desarrollo Abierto del Semillero GRUSLIN</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Activo 2026
        </span>
      </div>

      {/* Project Selector Tabs */}
      <div className="grid grid-cols-2 gap-2">
        {SOFTWARE_PROJECTS.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setActiveProjectIdx(idx)}
            className={`p-2.5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
              activeProjectIdx === idx
                ? 'bg-gradient-to-r from-[#003366] to-[#004B87] border-[#F0B429] shadow-lg text-white'
                : 'bg-[#001935]/80 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-1">
              <span>0{idx + 1}</span>
              <span className="truncate ml-1 font-bold">{proj.type}</span>
            </div>
            <p className="font-bold text-xs line-clamp-1">{proj.title}</p>
          </button>
        ))}
      </div>

      {/* Active Project Card Display */}
      <div className="p-5 rounded-2xl bg-[#00152B] border border-slate-700/80 space-y-4 relative overflow-hidden">
        
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
              {activeProject.type}
            </span>
            <h4 className="text-lg font-bold text-white font-outfit">
              {activeProject.title}
            </h4>
          </div>

          <span className="px-2.5 py-1 rounded-lg bg-[#00264D] text-amber-400 border border-amber-500/40 text-[10px] font-mono font-bold shrink-0">
            {activeProject.status}
          </span>
        </div>

        <p className="text-slate-200 text-xs leading-relaxed">
          {activeProject.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Technologies & Tools:</span>
          <div className="flex flex-wrap gap-1.5">
            {activeProject.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-[#00264D] text-amber-300 border border-amber-500/30 text-[10px] font-mono"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal Code Snippet Visual */}
        <div className="p-3 rounded-xl bg-[#030B18] border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
          <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-800">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" /> gruslin-dev-cli
            </span>
            <span className="text-[10px] text-emerald-400">STATUS: OK</span>
          </div>
          <p className="text-sky-300">$ git clone github.com/gruslin-unad/project-{activeProjectIdx + 1}</p>
          <p className="text-slate-400">&gt; Building Open Source module for ECBTI UNAD...</p>
        </div>

      </div>

      {/* Bottom Telemetry Footer */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
        <span className="flex items-center gap-1 text-slate-300 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Licencia Open Source MIT/GPL
        </span>
        <span className="font-mono text-amber-400 font-bold">Semillero GRUSLIN UNAD</span>
      </div>

    </div>
  );
};
