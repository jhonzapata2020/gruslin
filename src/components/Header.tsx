import React, { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';

interface HeaderProps {
  onOpenJoinModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b transition-colors duration-300 border-slate-800/80 bg-[#001935]/95 backdrop-blur-md shadow-sm">
      
      {/* Main Clean Navbar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo & Title */}
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <div className="bg-white/95 px-2.5 py-1.5 rounded-xl border border-amber-400/60 shadow-sm flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-amber-500/20 transition-all shrink-0">
              <img
                src="/unad-official-logo.png"
                alt="UNAD Logo Oficial"
                className="h-7 sm:h-8 w-auto object-contain rounded-sm"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight font-outfit group-hover:text-amber-400 transition-colors whitespace-nowrap">
                  Semillero GRUSLIN
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 shrink-0 whitespace-nowrap">
                  ECBTI
                </span>
              </div>
              <span className="text-[11px] text-slate-300 hidden xl:inline font-semibold whitespace-nowrap">
                Software Libre & Investigación UNAD • Nodo I+D
              </span>
            </div>
          </a>

          {/* Navigation Links Desktop - Single-line guaranteed */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-extrabold tracking-wider uppercase">
            <a
              href="#inicio"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200 whitespace-nowrap"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="px-3 py-2 rounded-xl text-emerald-300 hover:text-emerald-200 hover:bg-[#00264D] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Proyectos del Nodo</span>
            </a>
            <a
              href="#equipo"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-[#00264D] transition-all duration-200 whitespace-nowrap"
            >
              Equipo del Nodo (5)
            </a>
            <a
              href="#matriz"
              className="px-3 py-2 rounded-xl text-amber-400 hover:text-amber-300 hover:bg-[#00264D] transition-all duration-200 font-extrabold whitespace-nowrap"
            >
              Semillero Matriz
            </a>
            <a
              href="#historico"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200 whitespace-nowrap"
            >
              Histórico SIGIIP
            </a>
          </nav>

          {/* Right Action Cluster: Institutional Badge */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Right Side Institutional Logo/Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#00264D] border border-amber-400/40 text-[11px] font-mono shadow-sm shrink-0 whitespace-nowrap">
              <Award className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-amber-300 uppercase text-[10px]">SEMILLERO MATRIZ</span>
                <span className="text-slate-300 text-[9px] font-bold">SIGIIP 1513 &bull; UNAD</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-[#003366] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001935] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-2">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-amber-400 bg-[#003366]/40"
          >
            Inicio
          </a>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-emerald-300 hover:bg-[#003366]/30"
          >
            🚀 Proyectos del Nodo
          </a>
          <a
            href="#equipo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:bg-[#003366]/30"
          >
            👥 Equipo del Nodo (5 Integrantes)
          </a>
          <a
            href="#matriz"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-amber-400 hover:bg-[#003366]/30"
          >
            🏛️ Semillero Matriz GRUSLIN (SIGIIP 1513)
          </a>
          <a
            href="#historico"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            📜 Histórico SIGIIP
          </a>
        </div>
      )}
    </header>
  );
};
