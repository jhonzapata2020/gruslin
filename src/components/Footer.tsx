import React from 'react';
import { ArrowUp, ExternalLink, Mail, MapPin, Settings } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="border-t border-white/15 bg-[#000c20]">
    <div className="container-wide py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white p-2"><img src="/unad-acreditada-logo.png" alt="Universidad Nacional Abierta y a Distancia" className="h-10 w-auto" /></div>
            <div><strong className="block font-['Barlow_Condensed'] text-2xl font-semibold uppercase tracking-wide">GRUSLIN · Nodo Neiva</strong><span className="route-label text-[#38bdf8]">ECBTI · Zona Sur · SIGIIP 1513</span></div>
          </div>
          <p className="mt-6 max-w-xl leading-7 text-[#b9c8d8]">Software libre, investigación formativa e innovación abierta para conectar conocimiento con el desarrollo sostenible de la región.</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-[#b9c8d8]"><MapPin className="h-4 w-4 text-[#f0b429]" />CCAV Neiva, Huila, Colombia</div>
        </div>

        <div>
          <h2 className="text-xl font-semibold uppercase tracking-wide">Rutas</h2>
          <nav className="mt-5 grid gap-3 text-sm text-[#b9c8d8]" aria-label="Navegación del pie">
            <a href="#lineas" className="hover:text-white">Líneas de investigación</a>
            <a href="#proyectos" className="hover:text-white">Proyectos del nodo</a>
            <a href="#equipo" className="hover:text-white">Equipo del nodo</a>
            <a href="#historico" className="hover:text-white">Trayectoria SIGIIP</a>
            <a href="#formacion" className="hover:text-white">Formación y grabaciones</a>
            <a href="#blog" className="hover:text-white">Blog del nodo</a>
          </nav>
        </div>

        <div>
          <h2 className="text-xl font-semibold uppercase tracking-wide">Conexiones</h2>
          <div className="mt-5 grid gap-3 text-sm text-[#b9c8d8]">
            <a href="https://samp.gruslin.tech/" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-white">SAMP <ExternalLink className="h-4 w-4" /></a>
            <a href="https://simuladorunad.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-white">PythonLab <ExternalLink className="h-4 w-4" /></a>
            <a href="mailto:info@unad.edu.co" className="flex items-center justify-between hover:text-white">Contacto UNAD <Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-6 text-xs text-[#7f96ac] sm:flex-row sm:items-center">
        <span>© 2026 Nodo I+D · Semillero GRUSLIN UNAD.</span>
        <div className="flex flex-wrap gap-3"><a href="/?panel=admin" className="route-button route-button--quiet min-h-10 px-3 py-2"><Settings className="h-4 w-4" />Panel editorial</a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="route-button route-button--quiet min-h-10 px-3 py-2">Volver al origen <ArrowUp className="h-4 w-4" /></button></div>
      </div>
    </div>
  </footer>
);
