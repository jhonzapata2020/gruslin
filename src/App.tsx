import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TeamSection } from './components/TeamSection';
import { AboutSection } from './components/AboutSection';
import { JoinModal } from './components/JoinModal';
import { Footer } from './components/Footer';
import { LearningSection } from './components/LearningSection';
import { BlogSection } from './components/BlogSection';
import { AdminPanel } from './components/AdminPanel';
import { ContentProvider } from './context/ContentContext';

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

  const isAdminPanel = new URLSearchParams(window.location.search).get('panel') === 'admin';
  if (isAdminPanel) return <AdminPanel />;

  return (
    <div className="site-shell flex min-h-screen flex-col">
      
      {/* Institutional & Branch Navigation Header */}
      <Header onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero: Identidad de Rama Adscrita (Nodo Local) */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 2. Sección 1: Nuestra Rama de Trabajo (Proyectos SAMP & PythonLab) */}
        <ProjectsSection />

        <LearningSection />

        {/* 3. Equipo de la Rama (Nodo Local de 5 Integrantes) */}
        <TeamSection onOpenJoinModal={(name) => handleOpenJoinModal(name)} />

        <BlogSection />

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
      <ContentProvider><AppContent /></ContentProvider>
    </ThemeProvider>
  );
};

export default App;
