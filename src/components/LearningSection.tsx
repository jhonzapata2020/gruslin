import React from 'react';
import { ExternalLink, Play, Radio } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const LearningSection: React.FC = () => {
  const { content } = useContent();
  const recordings = content.recordings.filter((recording) => recording.published);

  return (
    <section id="formacion" className="section-pad border-b border-[#00142f]/20 bg-[#f4f1e9] text-[#00142f]">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <h2 className="max-w-[11ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">Aprender es entrar a la red</h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#28435e]">En la universidad abrimos espacios para aprender programación desde cero y avanzar hacia desarrollo web, backend, sistemas abiertos y arquitectura de software.</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-5 top-8 w-1 bg-[#00142f]" aria-hidden="true" />
            {content.learningPaths.map((path) => (
              <article key={path.id} className="relative grid grid-cols-[3rem_1fr] gap-5 border-b border-[#00142f]/20 py-7 first:pt-0 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="relative z-10 mt-1 h-11 w-11 rounded-full border-[5px] border-[#f4f1e9] shadow-[0_0_0_2px_#00142f]" style={{ backgroundColor: path.color }} />
                <div><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-3xl font-semibold uppercase tracking-wide">{path.title}</h3><span className="route-label text-[#2a5c87]">{path.level}</span></div><p className="mt-3 max-w-[68ch] leading-7 text-[#28435e]">{path.description}</p><div className="mt-4 flex flex-wrap gap-4">{path.topics.map((topic) => <span key={topic} className="text-sm font-semibold">{topic}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[#00142f]/25 pt-14">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><h3 className="text-5xl font-semibold uppercase leading-none tracking-wide">Grabaciones de clase</h3><p className="mt-4 max-w-[65ch] text-[#28435e]">Archivo formativo del nodo. Los enlaces pendientes pueden publicarse desde el panel editorial cuando estén disponibles.</p></div>
            <span className="flex items-center gap-2 text-sm font-semibold text-[#236040]"><Radio className="h-4 w-4" />{recordings.length} sesiones registradas</span>
          </div>

          <div className="mt-8 border-y border-[#00142f]/25">
            {recordings.length === 0 ? <p className="py-10 text-[#416078]">Aún no hay grabaciones publicadas.</p> : recordings.map((recording) => (
              <article key={recording.id} className="grid gap-5 border-b border-[#00142f]/20 py-6 last:border-0 md:grid-cols-[8rem_1fr_auto] md:items-center">
                <div><span className="block font-['Barlow_Condensed'] text-2xl font-semibold">{recording.duration}</span><span className="route-label text-[#2a5c87]">{recording.level}</span></div>
                <div><h4 className="text-2xl font-semibold uppercase tracking-wide">{recording.title}</h4><p className="mt-2 max-w-[68ch] text-sm leading-6 text-[#416078]">{recording.summary}</p></div>
                {recording.url && !recording.placeholder ? <a href={recording.url} target="_blank" rel="noreferrer" className="route-button border-[#00142f] text-[#00142f] hover:bg-[#00142f] hover:text-white"><Play className="h-4 w-4" />Ver clase<ExternalLink className="h-4 w-4" /></a> : <span className="route-label rounded-md border border-[#00142f]/25 px-3 py-2 text-[#416078]">Enlace por publicar</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
