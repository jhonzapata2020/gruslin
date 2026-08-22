import React, { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';

interface HeaderProps {
  onOpenJoinModal: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b transition-colors duration-300 dark:border-slate-800/80 border-slate-700 dark:bg-[#001935]/95 bg-[#001935]/95 backdrop-blur-md shadow-sm">
      
      {/* Main Clean Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo & Title */}
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 sm:h-11 px-3 rounded-xl bg-gradient-to-br from-[#003366] via-[#00264D] to-[#001935] border border-[#F0B429]/60 shadow-md flex items-center justify-center group-hover:border-[#F0B429] group-hover:shadow-amber-500/20 transition-all shrink-0">
              <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider font-outfit uppercase select-none">
                U<span className="text-sky-400">N</span>AD
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight font-outfit group-hover:text-amber-400 transition-colors">
                  Semillero GRUSLIN
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  ECBTI
                </span>
              </div>
              <span className="text-[11px] text-slate-300 hidden sm:inline font-semibold">
                Software Libre & Investigación UNAD
              </span>
            </div>
          </a>

          {/* Navigation Links Desktop - Well Distributed */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-extrabold tracking-wider uppercase">
            <a
              href="#inicio"
              className="px-3 py-2 rounded-xl text-amber-400 hover:bg-[#00264D] transition-all duration-200"
            >
              Inicio
            </a>
            <a
              href="#acerca"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200"
            >
              Misión & Visión
            </a>
            <a
              href="#lineas"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200"
            >
              Líneas
            </a>
            <a
              href="#proyectos"
              className="px-3 py-2 rounded-xl text-sky-400 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200 font-extrabold flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Proyectos (2)
            </a>
            <a
              href="#dashboard"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200"
            >
              Indicadores
            </a>
            <a
              href="#equipo"
              className="px-3 py-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-[#00264D] transition-all duration-200"
            >
              Integrantes
            </a>
          </nav>

          {/* Right Action Cluster: Institutional Badge */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Right Side Institutional Logo/Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#00264D] border border-amber-400/30 text-[11px] font-mono shadow-sm">
              <Award className="w-4 h-4 text-amber-500 animate-pulse" />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-amber-400 uppercase text-[10px]">SIGIIP UNAD</span>
                <span className="text-slate-300 text-[9px] font-bold">CÓDIGO 1513</span>
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
            href="#acerca"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            Misión, Visión y Objetivos
          </a>
          <a
            href="#lineas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            Líneas de Investigación
          </a>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-400 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            🚀 Proyectos Desarrollados (2)
          </a>
          <a
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            Indicadores SIGIIP
          </a>
          <a
            href="#equipo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            Integrantes del Semillero
          </a>
        </div>
      )}
    </header>
  );
};
