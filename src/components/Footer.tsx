import React from 'react';
import { ShieldCheck, Award, Mail, Globe, MapPin, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001024] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      
      {/* Top Banner with UNAD Golden Accreditation Emblem */}
      <div className="bg-[#001E42] border-b border-[#003366] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003366] to-[#001935] border border-amber-400/50 flex items-center justify-center text-amber-400 font-extrabold text-2xl font-outfit shadow-lg">
              UNAD
            </div>
            <div>
              <h4 className="text-white font-bold text-lg font-outfit">Universidad Nacional Abierta y a Distancia</h4>
              <p className="text-slate-300 text-xs">Rama de Investigación &bull; Semillero GRUSLIN</p>
            </div>
          </div>

          {/* Golden Accreditation Emblem (matching reference image) */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#001935] border border-[#F0B429]/60 shadow-xl shadow-amber-500/10">
            <div className="text-amber-400">
              <Award className="w-10 h-10 animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
                INSTITUCIÓN EDUCATIVA
              </span>
              <span className="text-sm font-extrabold text-white font-outfit uppercase tracking-tight">
                ACREDITADA EN ALTA CALIDAD
              </span>
              <span className="text-[9px] text-slate-300">Resolución MinEducación Colombia</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About GRUSLIN */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base font-outfit">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Semillero GRUSLIN UNAD</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Grupo de Investigación en Software Libre de la UNAD (CEAD Neiva). Fomentamos la cultura Open Source, física aplicada y el desarrollo tecnológico comunitario.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Zona Sur - CEAD Neiva, Huila, Colombia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Navegación</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  &rsaquo; Inicio & Presentación
                </a>
              </li>
              <li>
                <a href="#acerca" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  &rsaquo; Propósito & Misión
                </a>
              </li>
              <li>
                <a href="#lineas" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  &rsaquo; Líneas de Investigación
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  &rsaquo; Métricas de Proyectos
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  &rsaquo; Integrantes de la Rama
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Branches */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Ejes Tecnológicos</h5>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">&bull; Física de Repulsión Gravitatoria</li>
              <li className="text-slate-300">&bull; Software Libre & GNU/Linux</li>
              <li className="text-slate-300">&bull; Prototipado IoT & Sensores</li>
              <li className="text-slate-300">&bull; Transferencia Tecnológica Comunitaria</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Official Email */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Contacto Oficial</h5>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:info@unad.edu.co"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-slate-800 hover:border-amber-400 text-slate-200 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@unad.edu.co</span>
              </a>

              <a
                href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1513"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-[#F0B429]/40 hover:border-amber-400 text-[#F0B429] transition-colors font-semibold"
              >
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Perfil SIGIIP UNAD (1513)</span>
                <ExternalLink className="w-3 h-3 text-amber-400 ml-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Authorship Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-center sm:text-left">
          <div>
            © 2026 Rama de Investigación &bull; Semillero GRUSLIN UNAD. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 text-slate-300">
            Desarrollado con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> por los integrantes del Semillero GRUSLIN.
          </div>
        </div>

      </div>
    </footer>
  );
};
