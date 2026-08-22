import React from 'react';
import { Award, Mail, Globe, MapPin, ExternalLink, Heart, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001D2D] border-t border-[#004F71]/60 text-slate-300 relative overflow-hidden transition-colors duration-300">
      
      {/* Top Banner with Clean Institutional Header & Back to Top */}
      <div className="bg-[#002B3E] border-b border-[#004F71] py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Left: Main Brand Identity */}
          <div className="flex items-center gap-3.5">
            <div className="bg-white/95 px-3 py-1.5 rounded-xl border border-[#F36F21]/60 shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/unad-acreditada-logo.png"
                alt="UNAD Logo Oficial"
                className="h-9 sm:h-10 w-auto object-contain rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-white font-extrabold text-base sm:text-lg font-outfit tracking-tight">
                Universidad Nacional Abierta y a Distancia
              </h4>
              <p className="text-[#F9A01B] text-xs font-extrabold tracking-wide">
                Nodo I+D &bull; Semillero GRUSLIN
              </p>
            </div>
          </div>

          {/* Right: Minimal Accreditation Badge & Back To Top Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001D2D] border border-[#F9A01B]/40 text-[11px] font-bold text-slate-200">
              <Award className="w-3.5 h-3.5 text-[#F9A01B] shrink-0" />
              <span>Acreditada en Alta Calidad &bull; MEN Colombia</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Volver al inicio"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004F71] hover:bg-[#005f88] border border-[#82D0F5]/50 text-[#82D0F5] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <span>Volver arriba</span>
              <ChevronUp className="w-4 h-4 text-[#82D0F5] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About GRUSLIN */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base font-outfit">
              <span className="w-2 h-2 rounded-full bg-[#F9A01B]"></span>
              <span>Semillero GRUSLIN UNAD</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Grupo de Investigación en Software Libre de la UNAD (CEAD Neiva). Fomentamos la cultura Open Source, herramientas abiertas de aprendizaje y desarrollo tecnológico comunitario.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F9A01B] font-semibold">
              <MapPin className="w-4 h-4 text-[#F9A01B] shrink-0" />
              <span>Zona Sur - CEAD Neiva, Huila, Colombia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Navegación</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-[#F9A01B] transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Inicio & Presentación
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#82D0F5] transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Proyectos del Nodo
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-[#82D0F5] transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Equipo del Nodo (5)
                </a>
              </li>
              <li>
                <a href="#matriz" className="hover:text-[#F9A01B] transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Semillero Matriz (SIGIIP 1513)
                </a>
              </li>
              <li>
                <a href="#historico" className="hover:text-[#F9A01B] transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Histórico SIGIIP
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Branches */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Ejes Tecnológicos</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li className="text-slate-300">&bull; Evaluadores de Código (PythonLab)</li>
              <li className="text-slate-300">&bull; Software Libre & GNU/Linux</li>
              <li className="text-slate-300">&bull; Arquitecturas de IA Educativa (SAMP)</li>
              <li className="text-slate-300">&bull; Prototipado IoT & Sensores</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Official Email */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Proyectos & Contacto</h5>
            <div className="space-y-2 text-xs">
              <a
                href="https://samp.gruslin.tech/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#002B3E] border border-[#004F71] hover:border-[#82D0F5] text-[#82D0F5] font-extrabold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#82D0F5] shrink-0" />
                <span>SAMP - Hackathones UNAD ↗</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#82D0F5] ml-auto" />
              </a>

              <a
                href="https://simuladorunad.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#002B3E] border border-[#F36F21]/60 hover:border-[#F36F21] text-[#F9A01B] font-extrabold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#F36F21] shrink-0" />
                <span>Simulador PythonLab UNAD ↗</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F36F21] ml-auto" />
              </a>

              <a
                href="mailto:info@unad.edu.co"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#002B3E] border border-[#004F71] hover:border-[#F9A01B] text-slate-200 transition-colors shadow-sm font-semibold"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@unad.edu.co</span>
              </a>

              <a
                href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1513"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#002B3E] border border-[#F9A01B]/40 hover:border-[#F9A01B] text-[#F9A01B] transition-colors font-extrabold shadow-sm"
              >
                <Globe className="w-4 h-4 text-[#F9A01B] shrink-0" />
                <span>Perfil SIGIIP UNAD (1513)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F9A01B] ml-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Authorship Bar */}
        <div className="mt-12 pt-6 border-t border-[#004F71] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left font-medium">
          <div>
            © 2026 Nodo I+D &bull; Semillero GRUSLIN UNAD. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            Desarrollado con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> por los integrantes del Nodo I+D.
          </div>
        </div>

      </div>
    </footer>
  );
};
