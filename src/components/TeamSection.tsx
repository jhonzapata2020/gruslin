import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamMember, MemberStatus } from '../types';
import { Users, Send, Clock, MinusCircle, Cpu } from 'lucide-react';

interface TeamSectionProps {
  onOpenJoinModal: (memberName?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Teams-style status badge matching the captures
  const renderTeamsStatusBadge = (id: string, status: MemberStatus) => {
    if (id === 'angel-vargas' || id === 'pablo-hernandez' || status === 'away') {
      return (
        <div className="w-5 h-5 rounded-full bg-[#F9A01B] border-2 border-[#001D2D] flex items-center justify-center text-slate-900 shadow-md">
          <Clock className="w-3 h-3 stroke-[3]" />
        </div>
      );
    } else {
      return (
        <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-[#001D2D] flex items-center justify-center text-white shadow-md">
          <MinusCircle className="w-3 h-3 stroke-[3]" />
        </div>
      );
    }
  };

  const getAvatarBgClass = (id: string) => {
    switch (id) {
      case 'angel-vargas':
        return 'bg-[#F9A01B] border-[#F9A01B]';
      case 'pablo-hernandez':
        return 'bg-gradient-to-tr from-emerald-800 to-[#004F71] border-[#82D0F5]';
      case 'jose-rivas':
        return 'bg-gradient-to-tr from-[#004F71] to-slate-700 border-[#F9A01B]';
      default:
        return 'bg-[#004F71] border-[#004F71]';
    }
  };

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-[#001D2D] relative border-t border-[#004F71]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#004F71] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#004F71] border border-[#82D0F5]/60 text-[#82D0F5] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Cpu className="w-4 h-4 text-[#82D0F5] animate-pulse" />
              <span>NODO LOCAL DE DESARROLLO E INNOVACIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
              Equipo del <span className="text-[#F9A01B]">Nodo</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
              Equipo de trabajo conformado por 5 investigadores y desarrolladores, enfocado en la creación de herramientas pedagógicas y soluciones abiertas adscritas al Semillero GRUSLIN UNAD.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-2 rounded-xl bg-[#004F71] text-[#82D0F5] font-mono font-extrabold text-xs border border-[#82D0F5]/60 shadow-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-[#82D0F5]" />
              5 Integrantes del Nodo
            </span>
          </div>
        </div>

        {/* Member Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="glass-card p-6 rounded-2xl border border-[#004F71]/80 hover:border-[#82D0F5] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between space-y-5 relative group shadow-lg hover:shadow-xl bg-[#002B3E]"
            >
              
              {/* Card Top Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  
                  {/* Custom Avatar with Teams Status Badge */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full p-0.5 border-2 shadow-lg flex items-center justify-center overflow-hidden ${getAvatarBgClass(member.id)}`}>
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Teams Status Icon Badge */}
                    <div className="absolute -bottom-1 -right-1">
                      {renderTeamsStatusBadge(member.id, member.status)}
                    </div>
                  </div>

                  {/* Institutional Badge */}
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#004F71] text-[#82D0F5] border border-[#82D0F5]/60 text-[10px] font-extrabold uppercase tracking-wider">
                      NODO I+D UNAD
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#82D0F5] transition-colors uppercase tracking-tight font-outfit">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs font-extrabold text-[#F9A01B] mt-1">
                    {member.role}
                  </p>

                  <p className="text-slate-300 text-xs mt-3 leading-relaxed line-clamp-3 font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#001D2D] text-slate-200 border border-[#004F71] font-bold"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA Actions */}
              <div className="pt-4 border-t border-[#004F71] flex flex-col gap-2">
                <button
                  onClick={() => onOpenJoinModal(member.name)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#004F71] to-[#003B57] hover:from-[#005f88] hover:to-[#004F71] border border-[#82D0F5]/40 hover:border-[#F9A01B] shadow-md transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[#82D0F5]/20"
                >
                  <Send className="w-3.5 h-3.5 text-[#F9A01B]" />
                  <span>Contactar en el Nodo</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-2xl max-w-md w-full border border-[#82D0F5]/50 shadow-2xl space-y-4 bg-[#001D2D] text-slate-100">
            <div className="flex items-center gap-4">
              <img
                src={selectedMember.avatarUrl}
                alt={selectedMember.name}
                className="w-16 h-16 rounded-full border-2 border-[#82D0F5] object-cover"
              />
              <div>
                <h4 className="text-lg font-extrabold text-white uppercase">{selectedMember.name}</h4>
                <p className="text-xs text-[#F9A01B] font-extrabold">{selectedMember.role}</p>
                <p className="text-xs text-[#82D0F5] font-mono font-bold">{selectedMember.email}</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed p-3 rounded-lg bg-[#002B3E] border border-[#004F71] font-medium">
              {selectedMember.bio}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  const name = selectedMember.name;
                  setSelectedMember(null);
                  onOpenJoinModal(name);
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#F36F21] hover:bg-[#d85e19] text-white font-bold text-xs uppercase shadow-md"
              >
                Postularme con este integrante
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2.5 rounded-lg bg-[#004F71] text-slate-200 text-xs font-bold hover:bg-[#005f88]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
