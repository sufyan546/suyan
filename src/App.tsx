import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { WhatWeCreate } from './components/WhatWeCreate';
import { HowWeWork } from './components/HowWeWork';
import { BeforeAfter } from './components/BeforeAfter';
import { Showreel } from './components/Showreel';
import { WhyUs } from './components/WhyUs';
import { ClientTypes } from './components/ClientTypes';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>();
  const [modalDefaultCategory, setModalDefaultCategory] = useState<string | undefined>();

  const handleOpenProjectModal = (serviceName?: string, categoryName?: string) => {
    setModalDefaultService(serviceName);
    setModalDefaultCategory(categoryName);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#EDEDED] font-sans selection:bg-[#E2B874] selection:text-black">
      {/* Top Bar Contract Navigation */}
      <Navbar onOpenProjectModal={() => handleOpenProjectModal()} />

      <main>
        {/* SECTION 1 — HERO */}
        <Hero onOpenProjectModal={() => handleOpenProjectModal()} />

        {/* SECTION 2 — SELECTED WORK */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* SECTION 3 — WHAT WE CREATE */}
        <WhatWeCreate onOpenProjectModal={(service) => handleOpenProjectModal(service)} />

        {/* SECTION 4 — HOW WE WORK */}
        <HowWeWork />

        {/* SECTION 5 — BEFORE / AFTER */}
        <BeforeAfter />

        {/* SECTION 6 — CREATIVE SHOWREEL */}
        <Showreel />

        {/* SECTION 7 — WHY AD CREATIVE */}
        <WhyUs />

        {/* SECTION 8 — CLIENT TYPES */}
        <ClientTypes onOpenProjectModal={(category) => handleOpenProjectModal(undefined, category)} />

        {/* SECTION 9 — CTA */}
        <CtaSection onOpenProjectModal={() => handleOpenProjectModal()} />
      </main>

      {/* SECTION 10 — FOOTER */}
      <Footer onOpenProjectModal={() => handleOpenProjectModal()} />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        defaultService={modalDefaultService}
        defaultCategory={modalDefaultCategory}
      />
    </div>
  );
}
