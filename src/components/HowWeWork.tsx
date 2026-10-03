import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#070708] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-3">
            Production Pipeline
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
            FROM IDEA TO AD.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light">
            A frictionless 4-step pipeline turning raw product concepts into cinematic commercial assets in under 7 days.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-8 bg-[#0d0e12] border transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'border-[#E2B874] bg-[#12141c]'
                    : 'border-white/10 hover:border-white/30 hover:bg-[#101117]'
                }`}
              >
                <div>
                  {/* Top Step Number */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#E2B874] tracking-tight">
                      {step.number}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      <Clock size={12} />
                      <span>{step.timeline}</span>
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#E2B874] transition-colors">
                    {step.title}
                  </h3>

                  {/* Exact Tagline */}
                  <p className="mt-3 text-sm text-neutral-200 font-medium leading-relaxed">
                    {step.tagline}
                  </p>

                  {/* Detailed explanation */}
                  <p className="mt-3 text-xs text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Milestones list */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Key Outputs:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {step.milestones.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <CheckCircle size={11} className="text-[#E2B874] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Pipeline Visual Indicator */}
        <div className="mt-12 p-6 bg-[#0f1016] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#E2B874]" />
            <span className="text-white uppercase tracking-wider font-semibold">Total Turnaround:</span>
            <span className="text-neutral-400">5 to 7 Business Days from Brief to Final Ad Delivery</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <span>Zero physical shoot overhead</span>
            <span className="text-neutral-600">·</span>
            <span>Unlimited digital re-lighting</span>
            <span className="text-neutral-600">·</span>
            <span>Commercial rights included</span>
          </div>
        </div>
      </div>
    </section>
  );
};
