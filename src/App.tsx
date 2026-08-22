import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TeamSection } from './components/TeamSection';
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
    <div className="min-h-screen bg-[#001935] text-slate-100 flex flex-col font-sans selection:bg-[#F0B429] selection:text-slate-900 transition-colors duration-300">
      
      {/* Institutional Header */}
      <Header onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* About & Dashboard Section */}
        <AboutSection />

        {/* Official 2 Developed Software Projects Showcase */}
        <ProjectsSection />

        {/* Team Members Section */}
        <TeamSection onOpenJoinModal={(name) => handleOpenJoinModal(name)} />
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
