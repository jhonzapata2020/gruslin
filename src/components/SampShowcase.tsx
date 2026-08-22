import React, { useState } from 'react';
import {
  ExternalLink,
  Shield,
  Brain,
  Trophy,
  Activity,
  Layers,
  Sparkles,
  Globe,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const SampShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="proyecto-samp" className="py-16 lg:py-24 bg-[#001935] relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1a7fb3]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00264D] border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Proyecto Insignia Desarrollado en GRUSLIN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-outfit">
            SAMP &bull; <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-sky-400 to-cyan-300">Sistema Académico de Maratones</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Plataforma institucional de código abierto diseñada para la coordinación de hackathones universitarias,
            evaluación automatizada y entrenamiento asistido por Inteligencia Artificial.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://samp.gruslin.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explorar SAMP en Vivo</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>

            <div className="inline-flex rounded-xl bg-[#00264D] p-1 border border-slate-700">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  activeTab === 'overview'
                    ? 'bg-[#003366] text-amber-400 shadow-md border border-amber-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Capacidades</span>
              </button>

              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  activeTab === 'preview'
                    ? 'bg-[#003366] text-amber-400 shadow-md border border-amber-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Vista Previa Live</span>
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-700/80 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-mono font-bold uppercase">
              <Activity className="w-4 h-4" /> Disponibilidad
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">24/7</p>
            <p className="text-[11px] text-slate-400">Seguimiento continuo</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-700/80 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-sky-400 text-xs font-mono font-bold uppercase">
              <Globe className="w-4 h-4" /> Cobertura
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">+42</p>
            <p className="text-[11px] text-slate-400">Sedes y centros UNAD</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-700/80 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-mono font-bold uppercase">
              <Brain className="w-4 h-4" /> Asistencia IA
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">IA Tutora</p>
            <p className="text-[11px] text-slate-400">Guía y pistas progresivas</p>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-700/80 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 text-xs font-mono font-bold uppercase">
              <Trophy className="w-4 h-4" /> Evaluación
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">En Vivo</p>
            <p className="text-[11px] text-slate-400">Rankings & Maratones</p>
          </div>
        </div>

        {/* Tab 1: Overview and Capabilities */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature Card 1 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">IA Tutora e Inteligente</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Asistente conceptual integrado que proporciona pistas graduadas para orientar al estudiante sin revelar directamente la solución final.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-amber-300 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Pistas adaptativas 24/7
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-sky-400/50 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">Hackathones & Maratones</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Entorno especializado para crear maratones de programación por equipos, asignación de retos algorítmicos y tablas de posiciones.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-sky-300 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Tablas de posiciones globales
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-400/50 transition-all duration-300 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit">Supervisión en Tiempo Real</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Monitoreo seguro de envíos de código, validación de test cases automatizada e infraestructura académica distribuida.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-emerald-300 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Monitoreo seguro de envíos
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Interactive Browser Preview Frame */}
        <div className={`glass-card rounded-2xl border border-slate-700 overflow-hidden shadow-2xl ${activeTab === 'preview' ? 'block' : 'hidden'}`}>
          {/* Simulated Browser Bar */}
          <div className="bg-[#00264D] px-4 py-3 border-b border-slate-700 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl mx-auto bg-[#001935] px-3 py-1.5 rounded-lg border border-slate-700 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 overflow-hidden text-slate-300 font-mono text-[11px]">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">https://samp.gruslin.tech/</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                SSL OK
              </span>
            </div>

            <a
              href="https://samp.gruslin.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors p-1.5 rounded-lg hover:bg-[#003366]"
              title="Abrir en pantalla completa"
            >
              <Maximize2 className="w-4 h-4" />
            </a>
          </div>

          {/* Iframe Live View Container */}
          <div className="relative w-full h-[520px] bg-[#0d141d] flex items-center justify-center">
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-[#0d141d] flex flex-col items-center justify-center gap-3 text-slate-400 z-10">
                <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-mono font-semibold">Cargando aplicación en vivo (samp.gruslin.tech)...</p>
              </div>
            )}

            <iframe
              src="https://samp.gruslin.tech/"
              title="SAMP Live Platform"
              className="w-full h-full border-0"
              onLoad={() => setIframeLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>

        {/* Footer Callout Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#F0B429]/40 bg-gradient-to-r from-[#00264D] via-[#003366] to-[#001935] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-outfit flex items-center justify-center md:justify-start gap-2">
              <Globe className="w-5 h-5 text-sky-400" />
              <span>Desarrollado para la Comunidad Académica UNAD</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              SAMP fue diseñado por investigadores y estudiantes del semillero GRUSLIN para fortalecer la práctica de programación competitiva.
            </p>
          </div>

          <a
            href="https://samp.gruslin.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Acceder a SAMP</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
