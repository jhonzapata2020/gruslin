import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SampShowcase } from './components/SampShowcase';
import { TeamSection } from './components/TeamSection';
import { JoinModal } from './components/JoinModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
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
    <div className="min-h-screen bg-[#001935] text-slate-100 flex flex-col font-sans selection:bg-[#F0B429] selection:text-slate-900">
      
      {/* Institutional Header */}
      <Header onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* About & Dashboard Section */}
        <AboutSection />

        {/* SAMP Featured Project Section */}
        <SampShowcase />

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

export default App;
