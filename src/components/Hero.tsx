import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ResearchLabContainer } from './ResearchLabContainer';

interface HeroProps { onOpenJoinModal: () => void; }

const MobileNetworkMap = () => (
  <div className="map-field relative mt-6 h-44 overflow-hidden rounded-xl border border-white/20 bg-[#021734] lg:hidden" aria-label="Mapa resumido de la red GRUSLIN">
    <svg viewBox="0 0 360 170" className="h-full w-full" role="img" aria-label="Cuatro rutas conectadas al nodo GRUSLIN Neiva">
      <g fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="6">
        <path d="M180 86 L128 45 L46 45" stroke="#38bdf8" />
        <path d="M180 86 L232 45 L314 45" stroke="#f0b429" />
        <path d="M180 86 L128 127 L46 127" stroke="#25a866" />
        <path d="M180 86 L232 127 L314 127" stroke="#1577e8" />
      </g>
      <g fill="#f4f1e9" stroke="#00142f" strokeWidth="4">
        <circle cx="46" cy="45" r="7" /><circle cx="128" cy="45" r="7" /><circle cx="232" cy="45" r="7" /><circle cx="314" cy="45" r="7" />
        <circle cx="46" cy="127" r="7" /><circle cx="128" cy="127" r="7" /><circle cx="232" cy="127" r="7" /><circle cx="314" cy="127" r="7" />
      </g>
      <circle cx="180" cy="86" r="23" fill="#00142f" stroke="#f4f1e9" strokeWidth="6" />
      <circle cx="180" cy="86" r="8" fill="#f0b429" />
      <text x="180" y="158" textAnchor="middle" fill="#f4f1e9" fontFamily="Barlow Condensed" fontSize="12" fontWeight="600" letterSpacing="2">4 LÍNEAS · 1 NODO</text>
    </svg>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => (
  <section id="inicio" className="surface-enamel relative border-b border-white/15 py-8 lg:py-12">
    <div className="container-wide grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-12">
      <div className="relative z-10 py-5 lg:py-16">
        <h1 className="max-w-[12ch] text-[clamp(4.2rem,8vw,7.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.025em] text-[#f4f1e9]">
          Código que conecta <span className="text-[#f0b429]">territorio</span>
        </h1>
        <MobileNetworkMap />
        <p className="mt-6 max-w-[62ch] text-lg leading-8 text-[#b9c8d8] lg:mt-8">
          Somos el nodo Neiva del Semillero GRUSLIN de la UNAD: una comunidad que convierte software libre, investigación formativa e innovación educativa en herramientas abiertas con impacto regional.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#lineas" className="route-button route-button--gold">Recorrer el nodo <ArrowDownRight className="h-4 w-4" /></a>
          <button onClick={onOpenJoinModal} className="route-button route-button--quiet">Conectar con el equipo <ArrowUpRight className="h-4 w-4" /></button>
        </div>
        <div className="mt-12 grid grid-cols-3 border-y border-white/20 py-5">
          <div><strong className="block font-['Barlow_Condensed'] text-3xl text-white">1513</strong><span className="route-label text-[#38bdf8]">SIGIIP</span></div>
          <div className="border-x border-white/15 px-5"><strong className="block font-['Barlow_Condensed'] text-3xl text-white">02</strong><span className="route-label text-[#f0b429]">Proyectos live</span></div>
          <div className="pl-5"><strong className="block font-['Barlow_Condensed'] text-3xl text-white">05</strong><span className="route-label text-[#25a866]">Integrantes</span></div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <span className="pointer-events-none absolute -left-24 top-[48%] z-20 h-1 w-28 bg-[#f0b429]" aria-hidden="true" />
        <span className="pointer-events-none absolute -left-1 top-[calc(48%-6px)] z-20 h-4 w-4 rounded-full border-4 border-[#00142f] bg-[#f4f1e9] shadow-[0_0_0_2px_#f4f1e9]" aria-hidden="true" />
        <ResearchLabContainer />
      </div>
    </div>
  </section>
);
