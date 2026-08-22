import React from 'react';
import { ResearchLabContainer } from './ResearchLabContainer';
import { Rocket, ChevronRight, Compass, Code2, Cpu, Globe, CpuIcon } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="inicio" className="relative pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-20 overflow-hidden bg-radial-glow bg-[#001D2D] transition-colors duration-300">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#82D0F5]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#F9A01B]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Narrative & Graphic, Right Interactive Lab Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Description & Actions (7 Columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Institutional & Node Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004F71]/80 border border-[#82D0F5]/50 backdrop-blur-md w-fit shadow-sm">
              <CpuIcon className="w-4 h-4 text-[#82D0F5] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#82D0F5]">
                NODO LOCAL DE INVESTIGACIÓN & DESARROLLO • UNAD
              </span>
            </div>

            {/* Imposing Title & Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-outfit">
                <span className="text-[#F9A01B] block">SEMILLERO GRUSLIN</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-100 mt-1">
                  Software Libre, Innovación Tecnológica & Nodo I+D
                </span>
              </h1>

              {/* Core Mission Description Block */}
              <div className="p-5 rounded-2xl bg-[#002B3E]/90 border-l-4 border-[#F36F21] backdrop-blur-md shadow-md border border-[#004F71]/60">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#F9A01B] mb-2 leading-snug font-outfit">
                  ¿A qué nos dedicamos?
                </h2>
                <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
                  Impulsamos la capacidad investigativa de docentes y estudiantes mediante el desarrollo de proyectos avanzados en Software Libre, plataformas educativas con IA y herramientas interactivas de código abierto, enmarcados en el semillero GRUSLIN (ECBTI).
                </p>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proyectos"
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-[#82D0F5] bg-gradient-to-r from-[#004F71] to-[#003B57] hover:from-[#005f88] hover:to-[#004F71] border border-[#82D0F5]/50 shadow-lg shadow-sky-950/30 hover:border-[#82D0F5] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#82D0F5]" />
                <span>Explorar Proyectos del Nodo</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider text-white bg-[#F36F21] hover:bg-[#d85e19] border border-[#F36F21]/40 shadow-xl shadow-[#F36F21]/25 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 text-white" />
                <span>Postular al Nodo</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Feature Tags Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-[#001D2D]/90 px-3 py-1.5 rounded-lg border border-[#004F71] shadow-sm font-semibold">
                <Code2 className="w-3.5 h-3.5 text-[#F9A01B]" /> GNU/Linux & Código Abierto
              </span>
              <span className="flex items-center gap-1.5 bg-[#001D2D]/90 px-3 py-1.5 rounded-lg border border-[#004F71] shadow-sm font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#82D0F5]" /> Plataformas Educativas & IA
              </span>
              <span className="flex items-center gap-1.5 bg-[#001D2D]/90 px-3 py-1.5 rounded-lg border border-[#004F71] shadow-sm font-semibold">
                <Globe className="w-3.5 h-3.5 text-emerald-400" /> CEAD Neiva &bull; Zona Sur
              </span>
            </div>

          </div>

          {/* Right Column: Research Node Network Container (5 Columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Title Header */}
            <div className="w-full mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase text-[#F9A01B] tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Laboratorio Interactivo I+D+i
              </span>
              <span className="text-[11px] text-[#82D0F5] font-mono font-bold">GRUSLIN NODE-NET</span>
            </div>

            {/* Interactive Research Lab Network Container */}
            <ResearchLabContainer />

            {/* Subcaption */}
            <p className="mt-3 text-xs text-center text-slate-300 max-w-sm font-semibold">
              Red interactiva de nodos de investigación en Software Libre, telemetría IoT y código abierto del Semillero GRUSLIN UNAD.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
