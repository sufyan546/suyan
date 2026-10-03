import React, { useState } from 'react';
import { CLIENT_CATEGORIES } from '../data/agencyData';
import { ArrowRight, Layers, Sparkles, Check } from 'lucide-react';

interface ClientTypesProps {
  onOpenProjectModal: (categoryName?: string) => void;
}

export const ClientTypes: React.FC<ClientTypesProps> = ({ onOpenProjectModal }) => {
  const [selectedId, setSelectedId] = useState<string>(CLIENT_CATEGORIES[0].id);

  const selectedCategory = CLIENT_CATEGORIES.find((c) => c.id === selectedId) || CLIENT_CATEGORIES[0];

  return (
    <section className="py-24 sm:py-32 bg-[#070708] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-3">
            Industry Focus
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
            BUILT FOR PRODUCTS PEOPLE WANT.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light">
            We partner with ambitious founders and brand teams across premium consumer verticals.
          </p>
        </div>

        {/* Interactive Category Grid / List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Selector Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {CLIENT_CATEGORIES.map((cat, index) => {
              const isSelected = cat.id === selectedId;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  className={`text-left p-5 transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'border-[#E2B874] bg-[#12141c]'
                      : 'border-white/10 bg-[#0d0e12] hover:border-white/20 hover:bg-[#101117]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#E2B874]">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono transition-transform duration-200 ${
                      isSelected
                        ? 'text-[#E2B874] translate-x-1'
                        : 'text-neutral-600 group-hover:text-neutral-400'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Selected Category Specification View (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#0d0e12] border border-[#E2B874]/40 relative shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E2B874]">
                Category Direction Blueprint
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {selectedCategory.name}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight leading-snug">
              {selectedCategory.tagline}
            </h3>

            <div className="mt-8 space-y-6 text-xs sm:text-sm">
              <div className="p-4 bg-[#14161f] border border-white/5">
                <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-1">
                  Tailored Aesthetic Language
                </div>
                <div className="text-neutral-200 font-light leading-relaxed">
                  {selectedCategory.aesthetic}
                </div>
              </div>

              <div className="p-4 bg-[#14161f] border border-white/5">
                <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-1">
                  Lighting & Scene Architecture
                </div>
                <div className="text-neutral-200 font-light leading-relaxed">
                  {selectedCategory.lightingSetup}
                </div>
              </div>

              <div className="p-4 bg-[#14161f] border border-white/5">
                <div className="text-[11px] font-mono uppercase text-[#E2B874] tracking-wider mb-1">
                  Standard Campaign Deliverables
                </div>
                <div className="text-white font-medium">
                  {selectedCategory.typicalDeliverables}
                </div>
              </div>

              <div className="pt-2 text-neutral-400 text-xs font-mono">
                <span className="text-neutral-300">Target Verticals: </span>
                {selectedCategory.sampleBrandTypes}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Launching in {selectedCategory.name}?
              </span>
              <button
                onClick={() => onOpenProjectModal(selectedCategory.name)}
                className="w-full sm:w-auto px-6 py-3 bg-[#E2B874] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors flex items-center justify-center gap-2"
              >
                <span>Start {selectedCategory.name} Project</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
