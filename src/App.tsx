import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TeamSection } from './components/TeamSection';
import { AboutSection } from './components/AboutSection';
import { JoinModal } from './components/JoinModal';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);
  const [targetMember, setTargetMember] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (memberName?: string) => {
    setTargetMember(memberName);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
    setTargetMember(undefined);
  };

  return (
    <div className="min-h-screen bg-[#001935] text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-slate-900 transition-colors duration-300">
      
      {/* Institutional & Branch Navigation Header */}
      <Header onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero: Identidad de Rama Adscrita (Nodo Local) */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 2. Sección 1: Nuestra Rama de Trabajo (Proyectos SAMP & PythonLab) */}
        <ProjectsSection />

        {/* 3. Equipo de la Rama (Nodo Local de 5 Integrantes) */}
        <TeamSection onOpenJoinModal={(name) => handleOpenJoinModal(name)} />

        {/* 4. Sección 2: Marco Institucional & Semillero Matriz GRUSLIN (Misión/Visión, SIGIIP 1513, Accordion Histórico) */}
        <AboutSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Postulation Form Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        targetMemberName={targetMember}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
