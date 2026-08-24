import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { CTEI_PRODUCTS_DATA, HISTORICAL_PUBLICATIONS_MATRIZ, OFFICIAL_SEMILLERO_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [openId, setOpenId] = useState(HISTORICAL_PUBLICATIONS_MATRIZ[0]?.id ?? '');

  return (
    <section id="matriz" className="section-pad bg-[#f4f1e9] text-[#00142f]">
      <div className="container-wide">
        <div className="grid gap-12 border-b border-[#00142f]/25 pb-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <h2 className="max-w-[11ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">Un nodo con trayectoria</h2>
            <p className="mt-7 max-w-[64ch] text-lg leading-8 text-[#28435e]">
              El nodo Neiva forma parte del Semillero Grupo Software Libre Neiva, una estructura institucional que articula investigación formativa, desarrollo sostenible y redes participativas de conocimiento.
            </p>
            <a href="https://investigaciones.unad.edu.co/PSemilleros/Ver/1513" target="_blank" rel="noreferrer" className="route-button mt-8 border-[#00142f] text-[#00142f] hover:bg-[#00142f] hover:text-white">
              Consultar registro SIGIIP <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <dl className="divide-y divide-[#00142f]/20 border-y border-[#00142f]/25">
            <div className="grid grid-cols-[8rem_1fr] gap-5 py-5"><dt className="route-label text-[#2a5c87]">Semillero matriz</dt><dd className="font-semibold">{OFFICIAL_SEMILLERO_INFO.name}</dd></div>
            <div className="grid grid-cols-[8rem_1fr] gap-5 py-5"><dt className="route-label text-[#2a5c87]">Registro</dt><dd className="font-semibold">SIGIIP {OFFICIAL_SEMILLERO_INFO.code} · {OFFICIAL_SEMILLERO_INFO.status}</dd></div>
            <div className="grid grid-cols-[8rem_1fr] gap-5 py-5"><dt className="route-label text-[#2a5c87]">Liderazgo</dt><dd className="font-semibold">{OFFICIAL_SEMILLERO_INFO.leader}</dd></div>
            <div className="grid grid-cols-[8rem_1fr] gap-5 py-5"><dt className="route-label text-[#2a5c87]">Ubicación</dt><dd className="font-semibold">{OFFICIAL_SEMILLERO_INFO.campus}</dd></div>
            <div className="grid grid-cols-[8rem_1fr] gap-5 py-5"><dt className="route-label text-[#2a5c87]">Escuela</dt><dd className="font-semibold">{OFFICIAL_SEMILLERO_INFO.school}</dd></div>
          </dl>
        </div>

        <div className="grid gap-0 border-b border-[#00142f]/25 py-16 md:grid-cols-2">
          <div className="border-b border-[#00142f]/20 pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-12">
            <h3 className="flex items-center gap-4 text-4xl font-semibold uppercase tracking-wide"><span className="h-4 w-4 rounded-full bg-[#f0b429]" />Nuestra misión</h3>
            <p className="mt-5 max-w-[60ch] text-lg leading-8 text-[#28435e]">{OFFICIAL_SEMILLERO_INFO.mission}</p>
          </div>
          <div className="pt-10 md:pl-12 md:pt-0">
            <h3 className="flex items-center gap-4 text-4xl font-semibold uppercase tracking-wide"><span className="h-4 w-4 rounded-full bg-[#38bdf8]" />Nuestra visión</h3>
            <p className="mt-5 max-w-[60ch] text-lg leading-8 text-[#28435e]">{OFFICIAL_SEMILLERO_INFO.vision}</p>
          </div>
        </div>

        <div className="grid gap-14 py-16 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <h3 className="text-5xl font-semibold uppercase leading-none tracking-wide">Evidencia CTeI</h3>
            <p className="mt-5 max-w-md leading-7 text-[#28435e]">La producción registrada muestra una red orientada principalmente a compartir ciencia, crear nuevo conocimiento y formar talento.</p>
          </div>
          <div className="space-y-7">
            {CTEI_PRODUCTS_DATA.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-end justify-between gap-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="font-['Barlow_Condensed'] text-2xl font-semibold">{item.count} · {item.percentage}%</span>
                </div>
                <div className="relative h-5" aria-hidden="true">
                  <div className="absolute left-0 top-2 h-1 w-full bg-[#00142f]/10" />
                  <div className="absolute left-0 top-2 h-1" style={{ width: `${item.percentage}%`, backgroundColor: item.color === '#003366' ? '#1577e8' : item.color }} />
                  <span className="absolute top-[2px] h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#f4f1e9] shadow-[0_0_0_2px_#00142f]" style={{ left: `${item.percentage}%`, backgroundColor: item.color === '#003366' ? '#1577e8' : item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="historico" className="border-t border-[#00142f]/25 pt-16">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h3 className="text-5xl font-semibold uppercase leading-none tracking-wide">Hitos de la ruta</h3>
              <p className="mt-4 max-w-[65ch] text-[#28435e]">Registros históricos del semillero matriz que conectan tecnología abierta con comunidades, pedagogía y divulgación.</p>
            </div>
            <span className="route-label text-[#2a5c87]">4 registros institucionales</span>
          </div>

          <div className="border-y border-[#00142f]/25">
            {HISTORICAL_PUBLICATIONS_MATRIZ.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <article key={item.id} className="border-b border-[#00142f]/20 last:border-b-0">
                  <button onClick={() => setOpenId(isOpen ? '' : item.id)} className="grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 text-left sm:grid-cols-[5rem_1fr_auto]" aria-expanded={isOpen}>
                    <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#00142f] font-['Barlow_Condensed'] font-semibold" style={{ backgroundColor: index % 2 === 0 ? '#f0b429' : '#38bdf8' }}>{String(index + 1).padStart(2, '0')}</span>
                    <span><strong className="block font-['Barlow_Condensed'] text-2xl font-semibold uppercase tracking-wide sm:text-3xl">{item.title}</strong><span className="mt-1 block text-sm text-[#416078]">{item.locationYear}</span></span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="grid gap-6 pb-8 pl-[4rem] sm:pl-[6rem] md:grid-cols-[1fr_.8fr]">
                      <p className="max-w-[68ch] leading-7 text-[#28435e]">{item.summary}</p>
                      <ul className="space-y-2 text-sm text-[#28435e]">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-4 shrink-0 bg-[#25a866]" />{highlight}</li>)}</ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
