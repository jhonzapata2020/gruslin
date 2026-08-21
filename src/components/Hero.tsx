import React from 'react';
import { ResearchLabContainer } from './ResearchLabContainer';
import { Rocket, ChevronRight, Award, Compass, Code2, Cpu, Globe } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="inicio" className="relative pt-3 pb-12 lg:pt-4 lg:pb-20 overflow-hidden bg-radial-glow">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Narrative & Graphic, Right Interactive Lab Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & Actions (7 Columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00264D]/90 border border-[#F0B429]/40 backdrop-blur-md w-fit">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Semillero de Investigación SIGIIP (1513) &bull; ECBTI UNAD
              </span>
            </div>

            {/* Title & Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-outfit">
                <span className="text-amber-400">SEMILLERO GRUSLIN</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-200 mt-1">
                  Software Libre, Innovación Tecnológica & Investigación Formativa
                </span>
              </h1>

              {/* Core Mission Quote Block */}
              <div className="p-5 rounded-2xl bg-[#00264D]/70 border-l-4 border-[#F0B429] backdrop-blur-md shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  A qué nos dedicamos:
                </h2>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  Impulsamos la capacidad investigativa de docentes y estudiantes de la UNAD mediante el desarrollo de proyectos novedosos en Software Libre, prototipado IoT, física aplicada y desarrollo social y sostenible.
                </p>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#lineas"
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#003366] to-[#00509E] hover:from-[#004080] hover:to-[#0066CC] border border-[#38BDF8]/40 shadow-lg shadow-sky-900/30 hover:border-sky-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Explorar Líneas de Investigación</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 text-slate-900" />
                <span>Postular al Semillero</span>
                <ChevronRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

            {/* Feature Tags Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-[#001935]/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Code2 className="w-3.5 h-3.5 text-amber-400" /> GNU/Linux & Código Abierto
              </span>
              <span className="flex items-center gap-1.5 bg-[#001935]/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Cpu className="w-3.5 h-3.5 text-sky-400" /> Prototipado IoT & Sensores
              </span>
              <span className="flex items-center gap-1.5 bg-[#001935]/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Globe className="w-3.5 h-3.5 text-emerald-400" /> CEAD Neiva &bull; Zona Sur
              </span>
            </div>

          </div>

          {/* Right Column: Research Node Network Container (5 Columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Title Header */}
            <div className="w-full mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Laboratorio Interactivo I+D+i
              </span>
              <span className="text-[11px] text-slate-400 font-mono">GRUSLIN NODE-NET</span>
            </div>

            {/* Interactive Research Lab Network Container */}
            <ResearchLabContainer />

            {/* Subcaption */}
            <p className="mt-3 text-xs text-center text-slate-400 max-w-sm">
              Red interactiva de nodos de investigación en Software Libre, telemetría IoT y código abierto del Semillero GRUSLIN UNAD.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
