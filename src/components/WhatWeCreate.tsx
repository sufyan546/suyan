import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Film, Camera, Share2, Lightbulb, Users, Rocket } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { Service } from '../types';

interface WhatWeCreateProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  '01': <Film size={20} className="text-[#E2B874]" />,
  '02': <Camera size={20} className="text-[#E2B874]" />,
  '03': <Share2 size={20} className="text-[#E2B874]" />,
  '04': <Lightbulb size={20} className="text-[#E2B874]" />,
  '05': <Users size={20} className="text-[#E2B874]" />,
  '06': <Rocket size={20} className="text-[#E2B874]" />,
};

export const WhatWeCreate: React.FC<WhatWeCreateProps> = ({ onOpenProjectModal }) => {
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#090a0d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-3">
            Capabilities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
            FROM PRODUCT TO CAMPAIGN.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light">
            Everything ambitious consumer brands need to launch, scale, and dominate the digital landscape.
          </p>
        </div>

        {/* Six Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const isSelected = activeService.number === service.number;

            return (
              <div
                key={service.number}
                onClick={() => setActiveService(service)}
                className={`cursor-pointer p-8 bg-[#0e0f14] border transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'border-[#E2B874] shadow-lg shadow-[#E2B874]/5 bg-[#12141a]'
                    : 'border-white/10 hover:border-white/25 hover:bg-[#111218]'
                }`}
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="font-mono text-xs text-[#E2B874] tracking-widest font-semibold">
                      {service.number}
                    </span>
                    <span className="p-2 rounded bg-white/5 text-neutral-300 group-hover:text-white transition-colors">
                      {serviceIcons[service.number]}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#E2B874] transition-colors">
                    {service.title}
                  </h3>

                  {/* Exact Tagline */}
                  <p className="mt-3 text-sm text-neutral-200 font-medium leading-snug">
                    {service.tagline}
                  </p>

                  {/* Body description */}
                  <p className="mt-3 text-xs text-neutral-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom card features */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-neutral-400">
                    Turnaround: <span className="text-white font-medium">{service.turnaround}</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProjectModal(service.title);
                    }}
                    className="inline-flex items-center gap-1 text-[#E2B874] hover:text-white font-semibold transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Deep Dive Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#121319] border border-[#E2B874]/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E2B874]">
              <span>Active Specification</span>
              <span>·</span>
              <span>{activeService.number} {activeService.title}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-300">
              <span className="text-white font-medium">Standard Formats:</span>
              {activeService.formats.map((f, i) => (
                <span key={f} className="flex items-center gap-2">
                  {i > 0 && <span className="text-neutral-600">·</span>}
                  <span>{f}</span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400 pt-1">
              <span className="text-white font-medium">Included Assets:</span>
              {activeService.deliverables.map((d, i) => (
                <span key={d} className="flex items-center gap-2">
                  {i > 0 && <span className="text-neutral-600">·</span>}
                  <CheckCircle2 size={12} className="text-[#E2B874]" />
                  <span>{d}</span>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenProjectModal(activeService.title)}
            className="px-6 py-3 bg-[#E2B874] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors whitespace-nowrap self-start lg:self-center flex items-center gap-2"
          >
            <span>Book {activeService.title}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
