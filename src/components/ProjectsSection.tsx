import React from 'react';
import { ArrowUpRight, Check, GitBranch } from 'lucide-react';
import { RESEARCH_LINES } from '../data/mockData';
import { useContent } from '../context/ContentContext';

const lineColors = ['#38bdf8', '#f0b429', '#25a866', '#1577e8'];

export const ProjectsSection: React.FC = () => {
  const { content } = useContent();
  const operationalProjects = content.projects.filter((project) => !project.isConcept);
  const conceptProjects = content.projects.filter((project) => project.isConcept);

  const renderProjectRail = (projects: typeof content.projects, offset = 0) => (
    <div className="relative">
      <div className="absolute left-[.85rem] top-0 h-full w-1 bg-[#f0b429] md:left-6 md:w-2" aria-hidden="true" />
      <div className="grid gap-8 pl-9 md:pl-20">
        {projects.map((project, index) => (
          <article key={project.id} className="enamel-panel relative overflow-visible p-6 sm:p-8 lg:grid lg:grid-cols-[.8fr_1.2fr] lg:gap-12 lg:p-10">
            <div className="absolute -left-[2.15rem] top-10 h-5 w-5 rounded-full border-4 border-[#00142f] bg-[#f4f1e9] shadow-[0_0_0_2px_#f4f1e9] md:-left-[4.65rem] md:top-12 md:h-7 md:w-7 md:border-[6px] md:shadow-[0_0_0_3px_#f4f1e9]" />
            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f0b429] font-['Barlow_Condensed'] font-semibold text-[#f0b429]">{String(index + offset + 1).padStart(2, '0')}</span>
                <span className={`route-label flex items-center gap-2 ${project.isConcept ? 'text-[#f7ca5b]' : 'text-[#7ee2ab]'}`}><span className={`h-2 w-2 rounded-full ${project.isConcept ? 'bg-[#f0b429]' : 'bg-[#25a866]'}`} />{project.status}</span>
              </div>
              <h3 className="text-4xl font-semibold uppercase leading-[.95] tracking-wide text-white lg:text-5xl">{project.title}</h3>
              <p className="mt-6 leading-7 text-[#b9c8d8]">{project.description}</p>
              {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="route-button route-button--gold mt-8">{project.ctaText}<ArrowUpRight className="h-4 w-4" /></a> : <span className="route-label mt-8 inline-flex border-b border-[#f0b429] pb-2 text-[#f7ca5b]">Sin enlace público · concepto editorial</span>}
            </div>
            <div className="mt-10 border-t border-white/20 pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="mb-5 flex items-center gap-3"><GitBranch className="h-5 w-5 text-[#38bdf8]" /><span className="route-label text-[#38bdf8]">{project.isConcept ? 'Capacidades propuestas' : 'Capacidades verificables'}</span></div>
              <ul className="space-y-4">
                {project.features.map((feature) => <li key={feature} className="flex gap-3 leading-6 text-[#d7e1eb]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#f0b429]" />{feature}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((technology) => <span key={technology} className="rounded-md border border-white/20 px-2.5 py-1 text-xs font-medium text-[#b9c8d8]">{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return <>
    <section id="lineas" className="surface-porcelain section-pad relative border-b border-white/15 text-[#00142f]">
      <div className="container-wide grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="max-w-[10ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">Cuatro líneas. Un mismo destino.</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#28435e]">
            El nodo conecta formación, tecnología y territorio. Cada línea tiene una función distinta; todas comparten conocimiento y construyen sobre software abierto.
          </p>
          <a href="#proyectos" className="route-button mt-8 border-[#00142f] text-[#00142f] hover:bg-[#00142f] hover:text-white">Ver resultados <ArrowUpRight className="h-4 w-4" /></a>
        </div>

        <div className="relative">
          <div className="absolute bottom-12 left-[1.2rem] top-12 w-1 bg-[#00142f] sm:left-[1.45rem]" aria-hidden="true" />
          {RESEARCH_LINES.map((line, index) => (
            <article key={line.id} className="relative grid grid-cols-[3rem_1fr] gap-4 border-b border-[#00142f]/20 py-8 first:pt-0 sm:grid-cols-[3.5rem_1fr] sm:gap-7">
              <div className="relative z-10 mt-1 grid h-12 w-12 place-items-center rounded-full border-[5px] border-[#f4f1e9] text-sm font-semibold text-[#00142f]" style={{ backgroundColor: lineColors[index], boxShadow: '0 0 0 2px #00142f' }}>
                {index + 1}
              </div>
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-3xl font-semibold uppercase leading-none tracking-wide">{line.title}</h3>
                  <span className="route-label text-[#28435e]">{line.metricsCount}</span>
                </div>
                <p className="max-w-[68ch] leading-7 text-[#28435e]">{line.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {line.tags.map((tag) => <span key={tag} className="route-label flex items-center gap-2 text-[#00142f]"><span className="h-1.5 w-4" style={{ backgroundColor: lineColors[index] }} />{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="proyectos" className="surface-enamel section-pad border-b border-white/15">
      <div className="container-wide">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-[12ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">Proyectos del nodo</h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-8 text-[#b9c8d8]">Servicios que ya operan y conceptos transparentemente identificados para mostrar hacia dónde puede crecer el trabajo del nodo.</p>
          </div>
          <div className="flex items-center gap-3 border-b border-[#25a866] pb-3">
            <span className="h-3 w-3 rounded-full bg-[#25a866]" />
            <span className="route-label">2 servicios operativos</span>
          </div>
        </div>

        <div>
          <div className="mb-7"><span className="route-label text-[#7ee2ab]">Ruta A · evidencia pública</span><h3 className="mt-2 text-3xl font-semibold uppercase tracking-wide">Servicios operativos</h3></div>
          {renderProjectRail(operationalProjects)}
          {conceptProjects.length > 0 && <div className="mt-20"><div className="mb-7 border-t border-white/15 pt-10"><span className="route-label text-[#f7ca5b]">Ruta B · laboratorio de ideas</span><h3 className="mt-2 text-3xl font-semibold uppercase tracking-wide">Conceptos en exploración</h3><p className="mt-3 max-w-[65ch] leading-7 text-[#b9c8d8]">Estas propuestas son demostrativas: no representan servicios activos ni resultados ya entregados. Están aquí para hacer visible una dirección posible de investigación y desarrollo.</p></div>{renderProjectRail(conceptProjects, operationalProjects.length)}</div>}
        </div>
      </div>
    </section>
  </>;
};
