import React from 'react';
import { ShieldCheck, Award, Mail, Globe, MapPin, ExternalLink, Heart } from 'lucide-react';
import { UnadLogo } from './UnadLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001024] border-t border-slate-800 text-slate-400 relative overflow-hidden transition-colors duration-300">
      
      {/* Top Banner with UNAD Golden Accreditation Emblem */}
      <div className="bg-[#001E42] border-b border-[#003366] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <UnadLogo size="lg" showText={false} />
            <div>
              <h4 className="text-white font-extrabold text-lg font-outfit">Universidad Nacional Abierta y a Distancia</h4>
              <p className="text-amber-400 text-xs font-bold tracking-wide">Rama de Investigación &bull; Semillero GRUSLIN</p>
            </div>
          </div>

          {/* Official UNAD Acreditada Logo Image with Rounded Border Radius */}
          <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl border-2 border-amber-400/80 shadow-xl shadow-amber-500/10 overflow-hidden transition-transform hover:scale-[1.02]">
            <img
              src="/unad-acreditada-logo.png"
              alt="UNAD - Universidad Nacional Abierta y a Distancia Acreditada en Alta Calidad"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About GRUSLIN */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base font-outfit">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Semillero GRUSLIN UNAD</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Grupo de Investigación en Software Libre de la UNAD (CEAD Neiva). Fomentamos la cultura Open Source, física aplicada y el desarrollo tecnológico comunitario.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Zona Sur - CEAD Neiva, Huila, Colombia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Navegación</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Inicio & Presentación
                </a>
              </li>
              <li>
                <a href="#acerca" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Propósito & Misión
                </a>
              </li>
              <li>
                <a href="#lineas" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Líneas de Investigación
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Métricas de Proyectos
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  &rsaquo; Integrantes de la Rama
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Branches */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">Ejes Tecnológicos</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li className="text-slate-300">&bull; Física de Repulsión Gravitatoria</li>
              <li className="text-slate-300">&bull; Software Libre & GNU/Linux</li>
              <li className="text-slate-300">&bull; Prototipado IoT & Sensores</li>
              <li className="text-slate-300">&bull; Transferencia Tecnológica Comunitaria</li>
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
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-sky-500/50 hover:border-amber-500 text-sky-300 font-extrabold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>SAMP - Hackathones UNAD ↗</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400 ml-auto" />
              </a>

              <a
                href="https://simuladorunad.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-amber-500/50 hover:border-amber-500 text-amber-300 font-extrabold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Simulador PythonLab UNAD ↗</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600 ml-auto" />
              </a>

              <a
                href="mailto:info@unad.edu.co"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-slate-800 hover:border-amber-500 text-slate-200 transition-colors shadow-sm font-semibold"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@unad.edu.co</span>
              </a>

              <a
                href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1513"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#001935] border border-[#F0B429]/40 hover:border-amber-500 text-[#F0B429] transition-colors font-extrabold shadow-sm"
              >
                <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Perfil SIGIIP UNAD (1513)</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600 ml-auto" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Authorship Bar */}
        <div className="mt-12 pt-6 border-t dark:border-slate-800/80 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-slate-400 text-slate-600 text-center sm:text-left font-medium">
          <div>
            © 2026 Rama de Investigación &bull; Semillero GRUSLIN UNAD. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            Desarrollado con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> por los integrantes del Semillero GRUSLIN.
          </div>
        </div>

      </div>
    </footer>
  );
};
