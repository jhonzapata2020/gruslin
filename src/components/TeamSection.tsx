import React, { useState } from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface TeamSectionProps { onOpenJoinModal: (memberName?: string) => void; }

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenJoinModal }) => {
  const { content } = useContent();
  const [selectedId, setSelectedId] = useState(content.team[0]?.id ?? '');
  const selected = content.team.find((member) => member.id === selectedId) ?? content.team[0];

  return <section id="equipo" className="section-pad relative border-b border-white/15 bg-[#061d3c]">
    <div className="container-wide">
      <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div>
          <h2 className="max-w-[9ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">La red tiene rostro</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#b9c8d8]">Docencia, desarrollo e investigación se encuentran en un equipo local de cinco personas. Cada perfil aporta una conexión distinta.</p>
          <button onClick={() => onOpenJoinModal()} className="route-button route-button--gold mt-8">Conocer y participar <ArrowUpRight className="h-4 w-4" /></button>
        </div>

        <div className="relative pt-4">
          <div className="absolute bottom-10 left-[2.35rem] top-10 w-1 bg-[#25a866]" aria-hidden="true" />
          <div className="space-y-1">
            {content.team.map((member) => (
              <button key={member.id} onClick={() => setSelectedId(member.id)} className={`group relative grid w-full grid-cols-[5rem_1fr_auto] items-center gap-4 border-b border-white/15 py-5 text-left transition-colors hover:bg-white/[.035] sm:gap-6 sm:px-3 ${selected?.id === member.id ? 'bg-white/[.05]' : ''}`} aria-pressed={selected?.id === member.id}>
                <div className="relative z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-4 border-[#061d3c] bg-[#00142f] shadow-[0_0_0_2px_#f4f1e9]">
                  <img src={member.avatarUrl} alt="" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                  <span className={`absolute bottom-0 right-1 h-3 w-3 rounded-full border-2 border-[#061d3c] ${member.status === 'away' ? 'bg-[#f0b429]' : 'bg-[#25a866]'}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold uppercase leading-none tracking-wide text-white sm:text-3xl">{member.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#b9c8d8]">{member.headline}</p>
                </div>
                <ArrowUpRight className="hidden h-6 w-6 text-[#f0b429] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <article className="mt-16 grid gap-8 border-y border-white/20 py-8 lg:grid-cols-[.5fr_1.5fr] lg:gap-14 lg:py-12">
          <div className="flex items-start gap-5">
            <img src={selected.avatarUrl} alt={selected.name} className="h-24 w-24 rounded-full object-cover shadow-[0_0_0_3px_#f4f1e9]" />
            <div><h3 className="text-3xl font-semibold uppercase leading-none tracking-wide">{selected.name}</h3><p className="mt-3 text-sm leading-6 text-[#b9c8d8]">{selected.role}</p>{selected.linkedinUrl && <a href={selected.linkedinUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] underline decoration-[#38bdf8]/40 underline-offset-4 hover:text-white"><Linkedin className="h-4 w-4" />Perfil en LinkedIn</a>}</div>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
            <div><h4 className="text-2xl font-semibold uppercase tracking-wide">Quién es</h4><p className="mt-4 max-w-[68ch] leading-7 text-[#b9c8d8]">{selected.bio}</p><button onClick={() => onOpenJoinModal(selected.name)} className="route-button route-button--gold mt-6">Contactar a {selected.name.split(' ')[0]}<ArrowUpRight className="h-4 w-4" /></button></div>
            <div className="space-y-7"><div><h4 className="route-label text-[#38bdf8]">Enseña y acompaña</h4><ul className="mt-3 space-y-2 text-sm text-[#d7e1eb]">{selected.teaching.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-4 shrink-0 bg-[#f0b429]" />{item}</li>)}</ul></div><div><h4 className="route-label text-[#38bdf8]">Áreas de enfoque</h4><div className="mt-3 flex flex-wrap gap-2">{selected.focusAreas.map((item) => <span key={item} className="rounded-md border border-white/20 px-2.5 py-1 text-xs text-[#b9c8d8]">{item}</span>)}</div></div></div>
          </div>
        </article>
      )}
    </div>
  </section>;
};
