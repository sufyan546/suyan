import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'Protein / Fitness', label: 'Protein & Fitness' },
    { id: 'Coffee', label: 'Coffee & Beverage' },
    { id: 'Beauty', label: 'Beauty & Skincare' },
    { id: 'Fashion & Lifestyle', label: 'Lifestyle & Scent' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeFilter) || activeFilter.includes(p.category));

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#070708] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-3">
              Portfolio
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              SELECTED WORK
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light max-w-xl">
              From product launches to social-first campaigns.
            </p>
          </div>

          {/* Interactive filter tabs (Buttons with click handlers, not static pills) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#101115] border border-white/10 self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer relative bg-[#0d0e12] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/30 ${
                  isFeatured ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual container with hover zoom */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isFeatured ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.brand} - ${project.campaignType}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Small VIEW CASE STUDY hover indicator */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E2B874] text-black text-xs font-semibold uppercase tracking-wider shadow-lg">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>

                  {/* Subtle index number watermark corner */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-[11px] font-mono tracking-widest text-white/60">
                    0{index + 1}
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                    {/* Unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      <span className="text-[#E2B874] font-semibold">{project.brand}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight group-hover:text-white">
                      {project.campaignType}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-300 font-light max-w-2xl line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                      <span className="font-mono">{project.deliverables[0]}</span>
                      <span className="inline-flex items-center gap-1 text-white group-hover:text-[#E2B874] font-medium transition-colors">
                        Explore Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
