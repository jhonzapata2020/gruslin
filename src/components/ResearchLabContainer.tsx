import React from 'react';

const stations = [[270,250],[190,250],[130,190],[55,190],[430,250],[535,250],[610,175],[680,175],[275,405],[185,405],[120,480],[40,480],[435,405],[510,405],[575,500],[670,500]];

export const ResearchLabContainer: React.FC = () => (
  <div className="map-field relative min-h-[29rem] overflow-hidden rounded-[1.25rem] border border-white/20 bg-[#021734] shadow-[0_30px_70px_-38px_rgba(0,0,0,.9)] lg:min-h-[38rem]" aria-label="Mapa de líneas de trabajo del nodo GRUSLIN">
    <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-lg border border-white/25 bg-[#00142f]/90 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#25a866]" />
      <span className="route-label text-[#f4f1e9]">Red activa · Neiva</span>
    </div>
    <svg viewBox="0 0 700 650" className="absolute inset-0 h-full w-full" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Red de conocimiento GRUSLIN</title>
      <desc id="map-desc">Cuatro líneas conectan el nodo central con software libre, innovación educativa, ciencia abierta e IoT.</desc>
      <g fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="9">
        <path d="M350 330 L270 250 L190 250 L130 190 L55 190" stroke="#38bdf8" />
        <path d="M350 330 L430 250 L535 250 L610 175 L680 175" stroke="#f0b429" />
        <path d="M350 330 L275 405 L185 405 L120 480 L40 480" stroke="#25a866" />
        <path d="M350 330 L435 405 L510 405 L575 500 L670 500" stroke="#1577e8" />
      </g>
      <g fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" opacity=".55" className="motion-line">
        <path d="M350 330 L270 250 L190 250 L130 190 L55 190" stroke="#f4f1e9" />
        <path d="M350 330 L430 250 L535 250 L610 175 L680 175" stroke="#f4f1e9" />
        <path d="M350 330 L275 405 L185 405 L120 480 L40 480" stroke="#f4f1e9" />
        <path d="M350 330 L435 405 L510 405 L575 500 L670 500" stroke="#f4f1e9" />
      </g>
      <g fill="#f4f1e9" stroke="#00142f" strokeWidth="5">
        {stations.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="9" />)}
      </g>
      <circle cx="350" cy="330" r="34" fill="#00142f" stroke="#f4f1e9" strokeWidth="8" />
      <circle cx="350" cy="330" r="12" fill="#f0b429" />
      <g fill="#f4f1e9" fontFamily="Barlow Condensed" fontSize="18" fontWeight="600" letterSpacing="2">
        <text x="48" y="165">SOFTWARE LIBRE</text>
        <text x="500" y="145">INNOVACIÓN EDUCATIVA</text>
        <text x="42" y="520">CIENCIA ABIERTA</text>
        <text x="525" y="540">IOT + TERRITORIO</text>
      </g>
      <text x="350" y="385" textAnchor="middle" fill="#f4f1e9" fontFamily="Barlow Condensed" fontSize="20" fontWeight="700" letterSpacing="3">GRUSLIN · NEIVA</text>
    </svg>
    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 border-t border-white/20 pt-4">
      <div>
        <span className="route-label block text-[#38bdf8]">Centro de intercambio</span>
        <strong className="font-['Barlow_Condensed'] text-xl font-semibold uppercase tracking-wide">ECBTI · Zona Sur</strong>
      </div>
      <div className="route-label text-right text-[#b9c8d8]">4 líneas<br />1 comunidad abierta</div>
    </div>
  </div>
);
