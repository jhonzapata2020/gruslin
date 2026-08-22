import React, { useState } from 'react';
import {
  RESEARCH_LINES,
  OFFICIAL_SEMILLERO_INFO,
  HISTORICAL_PUBLICATIONS_MATRIZ,
  COMMUNITY_STRUCTURE,
  CTEI_PRODUCTS_DATA,
} from '../data/mockData';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Atom,
  Code2,
  Cpu,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  Compass,
  Award,
  Eye,
  ChevronDown,
  ChevronUp,
  FileText,
  Bookmark,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  // Accordion open/close state for historical publications
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('carepa-antioquia');

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-[#82D0F5]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#F9A01B]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Target className="w-6 h-6 text-[#F9A01B]" />;
    }
  };

  // Recharts colors adhering strictly to UNAD official palette
  const CHART_COLORS = ['#F9A01B', '#004F71', '#82D0F5'];

  return (
    <section id="matriz" className="py-16 lg:py-24 bg-[#001D2D] relative border-t border-[#004F71]/60 transition-colors duration-300">
      {/* Decorative top glow bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F9A01B]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 2 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004F71] border border-[#F9A01B]/60 text-[#F9A01B] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4 text-[#F9A01B]" /> CONTEXTO INSTITUCIONAL UNAD
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-outfit">
            Marco Institucional & Semillero Matriz <span className="text-[#F9A01B]">GRUSLIN</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            Nuestro Nodo de Investigación y Desarrollo se apoya en la trayectoria oficial, aval institucional y trayectoria histórica del Semillero Grupo Software Libre Neiva (GRUSLIN - SIGIIP 1513).
          </p>
        </div>

        {/* Official Semillero Overview Banner (SIGIIP 1513) */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#F9A01B]/50 shadow-xl bg-gradient-to-r from-[#002B3E] via-[#004F71]/80 to-[#001D2D]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            
            <div className="space-y-1">
              <span className="text-[#F9A01B] font-extrabold uppercase tracking-wider block text-[10px]">Semillero Matriz</span>
              <p className="font-extrabold text-white text-sm">{OFFICIAL_SEMILLERO_INFO.name}</p>
              <span className="text-slate-300 font-semibold">Código Registro SIGIIP: <strong className="text-[#F9A01B]">{OFFICIAL_SEMILLERO_INFO.code}</strong></span>
            </div>

            <div className="space-y-1">
              <span className="text-[#F9A01B] font-extrabold uppercase tracking-wider block text-[10px]">Responsable del Semillero General</span>
              <p className="font-extrabold text-white text-sm">{OFFICIAL_SEMILLERO_INFO.leader}</p>
              <span className="text-emerald-300 font-mono font-extrabold">Estado: {OFFICIAL_SEMILLERO_INFO.status} &bull; UNAD</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#F9A01B] font-extrabold uppercase tracking-wider block text-[10px]">Escuela & Campus</span>
              <p className="font-extrabold text-white text-xs">{OFFICIAL_SEMILLERO_INFO.school}</p>
              <span className="text-slate-300 font-semibold">Campus: <strong className="text-[#82D0F5]">{OFFICIAL_SEMILLERO_INFO.campus}</strong></span>
            </div>

            <div className="flex items-center justify-center p-3 rounded-2xl bg-[#001D2D] border border-[#F9A01B]/60 text-center shadow-sm">
              <div className="space-y-1">
                {/* AMBER BADGE: REGISTRO INSTITUCIONAL SIGIIP */}
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F9A01B]/15 text-[#F9A01B] border border-[#F9A01B]/60 font-bold block uppercase">
                  {OFFICIAL_SEMILLERO_INFO.institutionalBadgeText}
                </span>
                <p className="text-[11px] font-mono text-[#82D0F5] font-extrabold mt-1">ECBTI &bull; ZSUR (Neiva)</p>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Highlight Cards: Misión & Visión Matriz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: Misión Oficial Matriz */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#F9A01B]/40 bg-[#002B3E] hover:border-[#F9A01B] shadow-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-[#F9A01B]/10 group-hover:text-[#F9A01B]/20 transition-colors pointer-events-none">
              <Compass className="w-32 h-32" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#004F71] border border-[#F9A01B]/60 text-[#F9A01B]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-[#F9A01B] tracking-wider">Semillero Matriz UNAD</span>
                  <h3 className="text-2xl font-extrabold text-white font-outfit">Misión del Semillero General</h3>
                </div>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2 font-medium">
              {OFFICIAL_SEMILLERO_INFO.mission}
            </p>

            <div className="pt-3 flex items-center gap-2 text-xs text-[#F9A01B] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#F9A01B]" /> Promover la capacidad investigativa mediante innovación y software libre
            </div>
          </div>

          {/* Card: Visión Oficial Matriz */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#82D0F5]/40 bg-[#002B3E] hover:border-[#82D0F5] shadow-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-[#82D0F5]/10 group-hover:text-[#82D0F5]/20 transition-colors pointer-events-none">
              <Eye className="w-32 h-32" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#004F71] border border-[#82D0F5]/60 text-[#82D0F5]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-[#82D0F5] tracking-wider">Redes de Conocimiento Participativo</span>
                  <h3 className="text-2xl font-extrabold text-white font-outfit">Visión del Semillero General</h3>
                </div>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2 font-medium">
              {OFFICIAL_SEMILLERO_INFO.vision}
            </p>

            <div className="pt-3 flex items-center gap-2 text-xs text-[#82D0F5] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#82D0F5]" /> Referente en investigación, desarrollo sostenible y uso de TIC
            </div>
          </div>

        </div>

        {/* SECTION SUB-BLOCK: ACCORDION DE PRODUCCIÓN HISTÓRICA DEL SEMILLERO MATRIZ */}
        <div id="historico" className="space-y-6 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#004F71] pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9A01B]/15 text-[#F9A01B] border border-[#F9A01B]/60 text-xs font-mono font-bold uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5 text-[#F9A01B]" /> REGISTRO INSTITUCIONAL SIGIIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit mt-2">
                Producción Histórica del Semillero Matriz
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                Publicaciones, ponencias y desarrollos regionales registrados históricamente por el Semillero Matriz GRUSLIN (SIGIIP 1513).
              </p>
            </div>

            <span className="px-3.5 py-1.5 rounded-xl bg-[#004F71] text-[#F9A01B] text-xs font-mono font-bold border border-[#F9A01B]/60 shadow-sm shrink-0">
              4 Hitos Históricos Matriz
            </span>
          </div>

          {/* Interactive Accordion Container */}
          <div className="space-y-3">
            {HISTORICAL_PUBLICATIONS_MATRIZ.map((item) => {
              const isOpen = openAccordionId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#002B3E] border border-[#004F71]/80 hover:border-[#F9A01B]/70 transition-all overflow-hidden shadow-md"
                >
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-[#004F71]/40 transition-colors gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#004F71] border border-[#F9A01B]/50 text-[#F9A01B] shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#F9A01B]/15 text-[#F9A01B] border border-[#F9A01B]/40 font-bold uppercase">
                            REGISTRO INSTITUCIONAL SIGIIP
                          </span>
                          <span className="text-xs text-slate-300 font-mono font-semibold">
                            &bull; {item.locationYear}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-extrabold text-white font-outfit">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#004F71] text-[#F9A01B] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Accordion Content Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#004F71]/80 space-y-4 animate-fadeIn bg-[#001D2D]">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                        {item.summary}
                      </p>

                      {/* Highlights */}
                      <div className="p-4 rounded-xl bg-[#002B3E] border border-[#004F71] space-y-2">
                        <span className="text-[11px] font-mono font-extrabold text-[#F9A01B] uppercase tracking-wider block">
                          Puntos Clave del Registro Histórico Matriz:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-200">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F9A01B] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-[#004F71] text-[#82D0F5] border border-[#82D0F5]/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Section: Community Structure Cards */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-[#004F71] pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F9A01B]">Composición de la Comunidad Matriz</span>
              <h3 className="text-2xl font-extrabold text-white font-outfit">Estructura Global del Semillero GRUSLIN</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#004F71] text-[#F9A01B] text-xs font-mono font-extrabold border border-[#F9A01B]/60 shadow-sm">
              22 Miembros Registrados
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMMUNITY_STRUCTURE.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#002B3E] border border-[#004F71] hover:border-[#F9A01B] transition-all space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-white font-outfit">{item.count}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: item.color + '22', color: item.color }}>
                    {item.percentage}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-xs">{item.role}</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Interactive Dashboard with CTeI Product Percentages */}
        <div id="dashboard" className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#004F71] bg-[#002B3E] shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#004F71] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[#F9A01B] text-xs font-bold tracking-wider uppercase mb-1">
                <TrendingUp className="w-4 h-4 text-[#F9A01B]" /> Dashboard de Métricas CTeI Matriz
              </div>
              <h3 className="text-2xl font-extrabold text-white font-outfit">
                Distribución de Productos CTeI Reportados (SIGIIP 1513)
              </h3>
              <p className="text-xs text-slate-300 font-semibold">
                Porcentajes oficiales registrados en la solución SIGIIP de la UNAD
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#004F71] text-[#F9A01B] text-xs font-mono font-extrabold border border-[#F9A01B]/60 shadow-sm">
                12 Productos Totales
              </span>
            </div>
          </div>

          {/* Grid: Donut Chart & Detailed Percentage Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Donut Chart (5 Columns) */}
            <div className="lg:col-span-5 h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CTEI_PRODUCTS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="percentage"
                  >
                    {CTEI_PRODUCTS_DATA.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} stroke="#001D2D" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: number) => [`${val}%`, 'Porcentaje']}
                    contentStyle={{ backgroundColor: '#001D2D', borderColor: '#F9A01B', borderRadius: '10px', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Cards Breakdown (7 Columns) */}
            <div className="lg:col-span-7 space-y-4">
              {CTEI_PRODUCTS_DATA.map((prod, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#001D2D] border border-[#004F71] space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}></span>
                      <h4 className="font-extrabold text-white text-sm sm:text-base">{prod.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#F9A01B] font-outfit">{prod.percentage}%</span>
                      <span className="text-xs text-slate-300 block font-mono font-semibold">({prod.count} productos)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-[#002B3E] overflow-hidden border border-[#004F71]">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${prod.percentage}%`, backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Section 4: Lines of Research Cards */}
        <div id="lineas" className="space-y-8 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
              Líneas de Trabajo y Ejes de Investigación
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-semibold">
              Articulación entre la innovación tecnológica del nodo local y la filosofía del Software Libre del Semillero Matriz GRUSLIN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_LINES.map((line) => (
              <div
                key={line.id}
                className="glass-card p-6 rounded-2xl border border-[#004F71] hover:border-[#F9A01B] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group shadow-sm bg-[#002B3E]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#004F71] border border-[#004F71] group-hover:scale-110 transition-transform">
                      {renderIcon(line.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 bg-[#001D2D] px-2.5 py-1 rounded-full border border-[#004F71] font-bold">
                      {line.metricsCount}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-extrabold text-white group-hover:text-[#F9A01B] transition-colors font-outfit">
                      {line.title}
                    </h4>
                    <p className="text-xs font-extrabold text-[#F9A01B] mt-0.5">
                      {line.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {line.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#004F71] mt-4 flex flex-wrap gap-1.5">
                  {line.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#004F71] text-[#82D0F5] border border-[#82D0F5]/30 font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
