import React from 'react';
import { RESEARCH_LINES, OFFICIAL_SEMILLERO_INFO, COMMUNITY_STRUCTURE, CTEI_PRODUCTS_DATA, DASHBOARD_STATS } from '../data/mockData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Atom,
  Code2,
  Cpu,
  Users,
  Target,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Compass,
  Award,
  BookOpen,
  Eye,
  Flag,
  ListChecks,
  UserCheck,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  // Map string icon names to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Target className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="acerca" className="py-16 lg:py-24 bg-[#00142A] relative">
      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F0B429]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Official Semillero Overview Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#F0B429]/40 shadow-2xl bg-gradient-to-r from-[#001E42] via-[#00264D] to-[#001935]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px]">Semillero de Investigación</span>
              <p className="font-extrabold text-white text-sm">{OFFICIAL_SEMILLERO_INFO.name}</p>
              <span className="text-slate-400">Acrónimo: <strong className="text-amber-400">{OFFICIAL_SEMILLERO_INFO.acronym}</strong> (Código {OFFICIAL_SEMILLERO_INFO.code})</span>
            </div>

            <div className="space-y-1">
              <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px]">Líder del Semillero</span>
              <p className="font-bold text-white text-sm">{OFFICIAL_SEMILLERO_INFO.leader}</p>
              <span className="text-emerald-400 font-mono">Estado: {OFFICIAL_SEMILLERO_INFO.status} &bull; Registro SIGIIP</span>
            </div>

            <div className="space-y-1">
              <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px]">Escuela & Zona</span>
              <p className="font-bold text-white text-xs">{OFFICIAL_SEMILLERO_INFO.campus}</p>
              <span className="text-slate-400">{OFFICIAL_SEMILLERO_INFO.school}</span>
            </div>

            <div className="flex items-center justify-center p-3 rounded-2xl bg-[#001935] border border-amber-500/40 text-center">
              <div className="space-y-1">
                <Award className="w-6 h-6 text-amber-400 mx-auto animate-pulse" />
                <span className="text-[10px] uppercase font-bold text-slate-200">Reconocido por la UNAD</span>
                <p className="text-[11px] font-mono text-sky-400 font-bold">ECBTI &bull; ZSUR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0B429]/10 border border-[#F0B429]/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" /> Perfil Oficial SIGIIP UNAD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            Sección Nosotros: Misión y Visión Oficial
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fundamentos institucionales y proyección de la investigación en Software Libre del Semillero GRUSLIN.
          </p>
        </div>

        {/* Dedicated Highlight Cards: Misión & Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: Misión Oficial */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/40 hover:border-amber-400 shadow-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-amber-400/10 group-hover:text-amber-400/20 transition-colors pointer-events-none">
              <Compass className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#00264D] border border-amber-400/40 text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Investigación & Desarrollo Sostenible</span>
                <h3 className="text-2xl font-bold text-white font-outfit">Misión del Semillero</h3>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2 font-normal">
              {OFFICIAL_SEMILLERO_INFO.mission}
            </p>

            <div className="pt-3 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Promover la capacidad investigativa mediante innovación y software libre
            </div>
          </div>

          {/* Card: Visión Oficial */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sky-500/40 hover:border-sky-400 shadow-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-sky-400/10 group-hover:text-sky-400/20 transition-colors pointer-events-none">
              <Eye className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#00264D] border border-sky-400/40 text-sky-400">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">Redes de Conocimiento Participativo</span>
                <h3 className="text-2xl font-bold text-white font-outfit">Visión del Semillero</h3>
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-2 font-normal">
              {OFFICIAL_SEMILLERO_INFO.vision}
            </p>

            <div className="pt-3 flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Referente en investigación, desarrollo sostenible y uso de TIC
            </div>
          </div>

        </div>

        {/* Section: Community Structure Cards (9 Estudiantes, 8 Docentes, 3 Egresados, 1 Dinamizador, 1 Líder) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Composición Oficial de la Comunidad</span>
              <h3 className="text-2xl font-bold text-white font-outfit">Estructura de la Comunidad Semillero GRUSLIN</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#00264D] text-amber-400 text-xs font-mono font-bold border border-amber-500/40">
              22 Miembros Registrados
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMMUNITY_STRUCTURE.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#001E42]/80 border border-slate-700/80 hover:border-amber-400/60 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-white font-outfit">{item.count}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: item.color + '22', color: item.color }}>
                    {item.percentage}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">{item.role}</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Interactive Dashboard with CTeI Product Percentages */}
        <div id="dashboard" className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F0B429]/30 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-wider uppercase mb-1">
                <TrendingUp className="w-4 h-4" /> Dashboard de Métricas CTeI
              </div>
              <h3 className="text-2xl font-bold text-white font-outfit">
                Distribución de Productos CTeI Reportados
              </h3>
              <p className="text-xs text-slate-300">
                Porcentajes oficiales registrados en la solución SIGIIP de la UNAD
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-[#00264D] text-amber-400 text-xs font-mono font-bold border border-amber-500/40">
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
                    {CTEI_PRODUCTS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#001935" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: number) => [`${val}%`, 'Porcentaje']}
                    contentStyle={{ backgroundColor: '#001935', borderColor: '#F0B429', borderRadius: '10px', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Cards Breakdown (7 Columns) */}
            <div className="lg:col-span-7 space-y-4">
              {CTEI_PRODUCTS_DATA.map((prod, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#001E42]/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: prod.color }}></span>
                      <h4 className="font-bold text-white text-sm sm:text-base">{prod.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-amber-400 font-outfit">{prod.percentage}%</span>
                      <span className="text-xs text-slate-300 block font-mono">({prod.count} productos)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-[#001935] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${prod.percentage}%`, backgroundColor: prod.color }}
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
            <p className="text-slate-300 text-sm sm:text-base">
              Nuestra metodología combina la innovación tecnológica con la filosofía del Software Libre del Semillero GRUSLIN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_LINES.map((line) => (
              <div
                key={line.id}
                className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-[#F0B429]/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#00264D] border border-slate-700 group-hover:scale-110 transition-transform">
                      {renderIcon(line.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-[#001935] px-2.5 py-1 rounded-full border border-slate-800">
                      {line.metricsCount}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-outfit">
                      {line.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#F0B429] mt-0.5">
                      {line.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {line.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex flex-wrap gap-1.5">
                  {line.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#001E42] text-sky-300 border border-sky-900/40"
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
