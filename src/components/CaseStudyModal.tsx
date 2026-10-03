import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenProjectModal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenProjectModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d0e12] border border-white/10 shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a0d]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <span className="text-[#E2B874] font-semibold">{project.brand}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero Visual in Modal */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full bg-black overflow-hidden">
          <img
            src={project.image}
            alt={project.campaignType}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E2B874] block mb-1">
                Commercial Case Study
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                {project.campaignType}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview & Hook */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Campaign Narrative
              </h3>
              <p className="text-base text-neutral-200 leading-relaxed font-light">
                {project.description}
              </p>
              <div className="p-4 bg-[#14161c] border-l-2 border-[#E2B874] text-xs text-neutral-300">
                <span className="font-semibold text-white block mb-1">Creative Hook Architecture:</span>
                {project.creativeHook}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Performance Results
              </h3>
              <div className="space-y-2">
                {project.metrics?.map((m) => (
                  <div key={m.label} className="p-3 bg-[#14161c] border border-white/5">
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#E2B874] tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables & Storyboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Asset Deliverables
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#E2B874] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Key Storyboard Frames
              </h3>
              <ul className="space-y-2 text-xs font-mono text-neutral-300">
                {project.storyboardShots.map((shot, idx) => (
                  <li key={shot} className="flex items-start gap-2.5 p-2 bg-[#14161c]">
                    <span className="text-[#E2B874] font-semibold">0{idx + 1}</span>
                    <span>{shot}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Director Notes */}
          <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 font-mono">
            <span className="text-neutral-200">Director&apos;s Aesthetic Notes: </span>
            {project.directorNotes}
          </div>

          {/* Modal CTA footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <span className="text-xs text-neutral-400">
              Need a similar campaign system for your product?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenProjectModal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#E2B874] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Creative Direction</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
