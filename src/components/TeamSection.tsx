import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Globe2, Linkedin } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { TeamMember } from '../types';

interface TeamSectionProps { onOpenJoinModal: (memberName?: string) => void; }

const MEMBER_QUERY_KEY = 'integrante';
const PROFILE_HASH = '#perfil-integrante';

const CANONICAL_MEMBER_SLUGS: Record<string, string> = {
  'emmanuel-palacios': 'emmanuel-palacio-gaviria',
};

const memberSlug = (member: TeamMember) => CANONICAL_MEMBER_SLUGS[member.id] ?? member.name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const memberFromUrl = (team: TeamMember[]) => {
  const requested = new URLSearchParams(window.location.search).get(MEMBER_QUERY_KEY);
  if (!requested) return team[0];
  return team.find((member) => memberSlug(member) === requested || member.id === requested) ?? team[0];
};

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenJoinModal }) => {
  const { content } = useContent();
  const [selectedId, setSelectedId] = useState(() => memberFromUrl(content.team)?.id ?? '');
  const detailRef = useRef<HTMLElement>(null);
  const selected = content.team.find((member) => member.id === selectedId) ?? content.team[0];

  const scrollToProfile = () => {
    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      detailRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  };

  const selectMember = (member: TeamMember) => {
    const url = new URL(window.location.href);
    const slug = memberSlug(member);
    const isCurrentDestination = url.searchParams.get(MEMBER_QUERY_KEY) === slug && url.hash === PROFILE_HASH;
    url.searchParams.set(MEMBER_QUERY_KEY, slug);
    url.hash = PROFILE_HASH;
    window.history[isCurrentDestination ? 'replaceState' : 'pushState']({}, '', url);
    setSelectedId(member.id);
    scrollToProfile();
  };

  useEffect(() => {
    const syncProfileFromUrl = () => {
      const member = memberFromUrl(content.team);
      if (!member) return;
      setSelectedId(member.id);
      if (window.location.hash === PROFILE_HASH) scrollToProfile();
    };

    syncProfileFromUrl();
    window.addEventListener('popstate', syncProfileFromUrl);
    window.addEventListener('hashchange', syncProfileFromUrl);
    return () => {
      window.removeEventListener('popstate', syncProfileFromUrl);
      window.removeEventListener('hashchange', syncProfileFromUrl);
    };
  }, [content.team]);

  return <section id="equipo" className="section-pad relative border-b border-white/15 bg-[#061d3c]">
    <div className="container-wide">
      <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div>
          <h2 className="max-w-[9ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">La red tiene rostro</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#b9c8d8]">Docencia, desarrollo e investigación se encuentran en una red de seis personas. Cada perfil aporta una conexión distinta.</p>
          <button onClick={() => onOpenJoinModal()} className="route-button route-button--gold mt-8">Conocer y participar <ArrowUpRight className="h-4 w-4" /></button>
        </div>

        <div className="relative pt-4">
          <div className="absolute bottom-10 left-[2.35rem] top-10 w-1 bg-[#25a866]" aria-hidden="true" />
          <div className="space-y-1">
            {content.team.map((member) => (
              <button key={member.id} onClick={() => selectMember(member)} className={`group relative grid w-full grid-cols-[5rem_1fr_auto] items-center gap-4 overflow-hidden border-b py-5 text-left transition-[background-color,color,border-color,transform] duration-300 sm:gap-6 sm:px-3 ${selected?.id === member.id ? 'border-[#f0b429] bg-[#f0b429] text-[#00142f] shadow-[0_18px_44px_-30px_rgba(0,0,0,.9)]' : 'border-white/15 hover:bg-white/[.035]'}`} aria-pressed={selected?.id === member.id} aria-controls="perfil-integrante">
                {selected?.id === member.id && <span className="absolute inset-y-0 left-0 w-1 bg-[#00142f]" aria-hidden="true" />}
                <div className={`relative z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-4 bg-[#00142f] transition-all duration-300 ${selected?.id === member.id ? 'border-[#f0b429] shadow-[0_0_0_3px_#00142f]' : 'border-[#061d3c] shadow-[0_0_0_2px_#f4f1e9]'}`}>
                  <span className="absolute inset-0 flex items-center justify-center font-['Barlow_Condensed'] text-xl font-semibold tracking-wide text-[#f4f1e9]" aria-hidden="true">{member.initials}</span>
                  <img src={member.avatarUrl} alt="" onError={(event) => { event.currentTarget.hidden = true; }} className={`relative h-full w-full object-cover transition-all duration-500 ${selected?.id === member.id ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0'}`} />
                  <span className={`absolute bottom-0 right-1 h-3 w-3 rounded-full border-2 border-[#061d3c] ${member.status === 'away' ? 'bg-[#f0b429]' : 'bg-[#25a866]'}`} />
                </div>
                <div className="min-w-0">
                  <h3 className={`text-2xl font-semibold uppercase leading-none tracking-wide sm:text-3xl ${selected?.id === member.id ? 'text-[#00142f]' : 'text-white'}`}>{member.name}</h3>
                  <p className={`mt-2 line-clamp-2 text-sm leading-6 ${selected?.id === member.id ? 'text-[#28435e]' : 'text-[#b9c8d8]'}`}>{member.headline}</p>
                  {selected?.id === member.id && <span className="route-label mt-3 flex items-center gap-2 text-[#00142f]"><Check className="h-3.5 w-3.5" />Perfil seleccionado</span>}
                </div>
                {selected?.id === member.id ? <ArrowDownRight className="hidden h-7 w-7 text-[#00142f] sm:block" /> : <ArrowUpRight className="hidden h-6 w-6 text-[#f0b429] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <article ref={detailRef} id="perfil-integrante" key={selected.id} aria-live="polite" aria-labelledby="selected-member-name" className="profile-arrival enamel-panel map-field relative mt-16 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#f0b429]" aria-hidden="true" />
          <div className="absolute right-0 top-0 hidden h-32 w-32 border-b border-l border-white/10 lg:block" aria-hidden="true"><span className="absolute bottom-7 left-7 h-16 w-1 rotate-45 bg-[#f0b429]" /><span className="absolute bottom-[3.55rem] left-[3.55rem] h-4 w-4 rounded-full border-4 border-[#062348] bg-[#f4f1e9] shadow-[0_0_0_2px_#f4f1e9]" /></div>

          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[20rem_1fr] lg:gap-14 lg:p-12">
            <div className="relative">
              <div className="relative mx-auto w-fit lg:mx-0">
                <span className="absolute -inset-4 rounded-full border border-[#38bdf8]/35" aria-hidden="true" />
                <span className="absolute -inset-8 rounded-full border border-white/10" aria-hidden="true" />
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-[#00142f] shadow-[0_0_0_5px_#f4f1e9,0_24px_56px_-28px_rgba(0,0,0,.95)] sm:h-48 sm:w-48">
                  <span className="absolute inset-0 flex items-center justify-center font-['Barlow_Condensed'] text-5xl font-semibold tracking-wide text-[#f4f1e9]" aria-hidden="true">{selected.initials}</span>
                  <img src={selected.avatarUrl} alt={selected.name} onError={(event) => { event.currentTarget.hidden = true; }} className="relative h-full w-full object-cover" />
                </div>
                <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md bg-[#25a866] px-3 py-2 font-['Barlow_Condensed'] text-xs font-semibold uppercase tracking-[.16em] text-[#00142f]"><span className="h-2 w-2 rounded-full bg-[#f4f1e9]" />Perfil activo</span>
              </div>
              {selected.linkedinUrl && <a href={selected.linkedinUrl} target="_blank" rel="noreferrer" className="route-button route-button--quiet mt-12 w-full"><Linkedin className="h-4 w-4" />Ver perfil en LinkedIn</a>}
              {selected.websiteUrl && <a href={selected.websiteUrl} target="_blank" rel="noreferrer" className={`route-button route-button--quiet w-full ${selected.linkedinUrl ? 'mt-3' : 'mt-12'}`}><Globe2 className="h-4 w-4" />Visitar portafolio</a>}
            </div>

            <div className="min-w-0">
              <div className="border-b border-white/20 pb-7 pr-0 lg:pr-24">
                <h3 id="selected-member-name" className="max-w-[14ch] text-[clamp(3rem,6vw,5.6rem)] font-semibold uppercase leading-[.82] tracking-[-0.025em] text-white">{selected.name}</h3>
                <p className="mt-5 max-w-[60ch] text-lg font-medium leading-7 text-[#38bdf8]">{selected.role}</p>
                <p className="mt-2 max-w-[68ch] text-sm leading-6 text-[#b9c8d8]">{selected.headline}</p>
              </div>

              <div className="grid gap-10 pt-8 md:grid-cols-[1.1fr_.9fr]">
                <div><h4 className="text-2xl font-semibold uppercase tracking-wide">Quién es</h4><p className="mt-4 max-w-[68ch] leading-7 text-[#d7e1eb]">{selected.bio}</p><button onClick={() => onOpenJoinModal(selected.name)} className="route-button route-button--gold mt-7">Contactar a {selected.name.split(' ')[0]}<ArrowUpRight className="h-4 w-4" /></button></div>
                <div className="space-y-8"><div><h4 className="route-label text-[#38bdf8]">Enseña y acompaña</h4><ul className="mt-4 space-y-3 text-sm text-[#d7e1eb]">{selected.teaching.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-4 shrink-0 bg-[#f0b429]" />{item}</li>)}</ul></div><div><h4 className="route-label text-[#38bdf8]">Áreas de enfoque</h4><div className="mt-4 flex flex-wrap gap-2">{selected.focusAreas.map((item) => <span key={item} className="rounded-md border border-white/20 bg-[#00142f]/45 px-2.5 py-1.5 text-xs text-[#d7e1eb]">{item}</span>)}</div></div></div>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  </section>;
};
