import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamMember, MemberStatus } from '../types';
import { Users, Send, MessageSquare, Clock, MinusCircle, User } from 'lucide-react';

interface TeamSectionProps {
  onOpenJoinModal: (memberName?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Teams-style status badge matching the attached captures
  const renderTeamsStatusBadge = (id: string, status: MemberStatus) => {
    if (id === 'angel-vargas' || id === 'pablo-hernandez' || status === 'away') {
      // Yellow clock badge (from capture)
      return (
        <div className="w-5 h-5 rounded-full bg-amber-400 border-2 border-[#001935] flex items-center justify-center text-slate-900 shadow-md">
          <Clock className="w-3 h-3 stroke-[3]" />
        </div>
      );
    } else {
      // Red Teams busy/no molestar badge (from capture)
      return (
        <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-[#001935] flex items-center justify-center text-white shadow-md">
          <MinusCircle className="w-3 h-3 stroke-[3]" />
        </div>
      );
    }
  };

  // Custom background styling matching exact captures
  const getAvatarBgClass = (id: string) => {
    switch (id) {
      case 'angel-vargas':
        return 'bg-amber-400 border-amber-300'; // Yellow background from capture
      case 'pablo-hernandez':
        return 'bg-gradient-to-tr from-emerald-800 to-sky-700 border-sky-400'; // Outdoor trees background
      case 'jose-rivas':
        return 'bg-gradient-to-tr from-[#00264D] to-slate-700 border-amber-400'; // Headphones room
      default:
        return 'bg-[#00264D] border-slate-600';
    }
  };

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-[#001935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#00264D] border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" /> Equipo Local del Proyecto
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
              Integrantes del Proyecto
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Rama de Investigación &bull; Semillero GRUSLIN (Grupo Software Libre Neiva UNAD)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#00264D] text-amber-400 text-xs font-mono font-bold border border-[#F0B429]/40">
              5 Integrantes Oficiales
            </span>
          </div>
        </div>

        {/* Member Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-[#F0B429]/60 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between space-y-5 relative group"
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
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#00264D] text-[#F0B429] border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider">
                      {member.id === 'jhon-zapata' ? 'UNAD (Usted)' : 'UNAD GRUSLIN'}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight font-outfit">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-sky-400 mt-1">
                    {member.role}
                  </p>

                  <p className="text-slate-300 text-xs mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#001935] text-slate-300 border border-slate-800"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA Actions */}
              <div className="pt-4 border-t border-slate-800/90 flex flex-col gap-2">
                
                {member.id === 'angel-vargas' || member.id === 'emmanuel-palacios' ? (
                  <button
                    onClick={() => onOpenJoinModal(member.name)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#003366] to-[#00509E] hover:from-[#004080] hover:to-[#0066CC] border border-sky-500/40 hover:border-amber-400 shadow-md transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-amber-500/20"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Aplicar a la Comunidad</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-200 bg-[#00264D] hover:bg-[#003366] border border-slate-700 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                    <span>Solicitar Información</span>
                  </button>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-2xl max-w-md w-full border border-[#F0B429]/50 shadow-2xl space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={selectedMember.avatarUrl}
                alt={selectedMember.name}
                className="w-16 h-16 rounded-full border-2 border-amber-400 object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-white uppercase">{selectedMember.name}</h4>
                <p className="text-xs text-sky-400 font-semibold">{selectedMember.role}</p>
                <p className="text-xs text-amber-400 font-mono">{selectedMember.email}</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed p-3 rounded-lg bg-[#001935]">
              {selectedMember.bio}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  const name = selectedMember.name;
                  setSelectedMember(null);
                  onOpenJoinModal(name);
                }}
                className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-bold text-xs uppercase"
              >
                Postularme con este miembro
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
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
