import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Rocket, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenJoinModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-700/60 bg-[#001935]/95 backdrop-blur-md">
      
      {/* Top Institutional Ticker Bar */}
      <div className="bg-[#00264D] text-[#F0B429] text-[11px] font-medium py-1 px-4 border-b border-[#003366]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA &bull; UNAD</span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">ECBTI &bull; CEAD Neiva</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Acreditada en Alta Calidad
            </span>
            <span className="text-slate-400 hidden md:inline">|</span>
            <a href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1513" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors">
              SIGIIP (1513)
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Clean Title */}
          <a href="#inicio" className="flex items-center gap-3 group">
            {/* UNAD Crest Badge - Proportional Aesthetic Logo */}
            <div className="h-10 sm:h-11 px-3 rounded-xl bg-gradient-to-br from-[#003366] via-[#00264D] to-[#001935] border border-[#F0B429]/60 shadow-md flex items-center justify-center group-hover:border-[#F0B429] group-hover:shadow-amber-500/20 transition-all shrink-0">
              <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-wider font-outfit uppercase select-none">
                U<span className="text-sky-400">N</span>AD
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight font-outfit group-hover:text-amber-400 transition-colors">
                  Semillero GRUSLIN
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  ECBTI
                </span>
              </div>
              <span className="text-[11px] text-slate-300 hidden sm:inline">
                Software Libre & Investigación UNAD
              </span>
            </div>
          </a>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wide uppercase">
            <a href="#inicio" className="text-amber-400 hover:text-amber-300 transition-colors py-1">
              Inicio
            </a>
            <a href="#acerca" className="text-slate-200 hover:text-amber-400 transition-colors py-1">
              Misión & Visión
            </a>
            <a href="#lineas" className="text-slate-200 hover:text-amber-400 transition-colors py-1">
              Líneas
            </a>
            <a href="#proyecto-samp" className="text-sky-400 hover:text-amber-400 transition-colors py-1 font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SAMP (Live)
            </a>
            <a href="#dashboard" className="text-slate-200 hover:text-amber-400 transition-colors py-1">
              Indicadores
            </a>
            <a href="#equipo" className="text-slate-200 hover:text-amber-400 transition-colors py-1">
              Integrantes
            </a>
          </nav>

          {/* Clean CTA Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenJoinModal}
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 text-slate-900" />
              <span>Unirse al Semillero</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#003366] transition-colors"
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
            href="#proyecto-samp"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-400 hover:text-amber-400 hover:bg-[#003366]/30"
          >
            🚀 Proyecto SAMP (Live Platform)
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
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-400 flex items-center justify-center gap-2 shadow-lg"
            >
              <Rocket className="w-4 h-4" />
              Unirse al Semillero
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
