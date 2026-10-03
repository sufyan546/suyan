import React from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISON_DATA } from '../data/agencyData';

export const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#090a0d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with exact requested copy */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-4">
            The Production Shift
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05] text-balance">
            TRADITIONAL PRODUCTION<br />
            ISN&apos;T THE ONLY WAY TO MAKE<br />
            <span className="text-[#E2B874]">GREAT ADVERTISING.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            Ad Creative combines creative strategy, cinematic direction and modern AI production to help consumer brands create more visual content, faster.
          </p>
        </div>

        {/* High-Impact Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Studio Model */}
          <div className="p-8 sm:p-10 bg-[#0d0e12] border border-white/10 relative">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Legacy Production House
              </span>
              <span className="text-xs font-mono text-neutral-500">Traditional Shoot</span>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  Turnaround Timeline
                </div>
                <div className="text-xl font-bold text-neutral-300">
                  {COMPARISON_DATA.traditional.turnaround}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Weeks of pre-production, scouting, call sheets, and delayed post-production.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  Shoot Budget
                </div>
                <div className="text-xl font-bold text-neutral-300">
                  {COMPARISON_DATA.traditional.cost}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Heavy overhead: studio rental, crew wages, equipment, catering, and insurance.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  Deliverable Volume
                </div>
                <div className="text-xl font-bold text-neutral-300">
                  {COMPARISON_DATA.traditional.volume}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Single orientation, fixed angles, limited creative variations for paid testing.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  Logistical Burden
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {COMPARISON_DATA.traditional.logistics}
                </p>
              </div>
            </div>
          </div>

          {/* Ad Creative Studio Model */}
          <div className="p-8 sm:p-10 bg-[#11131a] border border-[#E2B874] relative shadow-xl shadow-[#E2B874]/5">
            {/* Top highlight bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2B874]/20">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E2B874] font-bold">
                AD CREATIVE STUDIO
              </span>
              <span className="text-xs font-mono text-white bg-[#E2B874]/20 px-2.5 py-1 text-[#E2B874]">
                Modern Creative System
              </span>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <div className="text-xs font-mono text-[#E2B874] uppercase tracking-wider mb-1">
                  Turnaround Timeline
                </div>
                <div className="text-2xl font-extrabold text-white font-display">
                  {COMPARISON_DATA.adCreative.turnaround}
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  From initial brief to final ready-to-run 4K commercial assets in under a week.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#E2B874] uppercase tracking-wider mb-1">
                  Production Investment
                </div>
                <div className="text-2xl font-extrabold text-white font-display">
                  {COMPARISON_DATA.adCreative.cost}
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  Direct capital into creative testing and media spend rather than physical shoot overhead.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#E2B874] uppercase tracking-wider mb-1">
                  Deliverable Volume
                </div>
                <div className="text-2xl font-extrabold text-white font-display">
                  {COMPARISON_DATA.adCreative.volume}
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  Full 9:16, 16:9, and 1:1 cutdowns with 5–10 distinct hook scripts for paid media scale.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-[#E2B874] uppercase tracking-wider mb-1">
                  Logistical Burden
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {COMPARISON_DATA.adCreative.logistics}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Principles Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <div>
            <div className="font-mono text-xs text-[#E2B874] tracking-widest uppercase mb-2">
              01 · Strategic Art Direction
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Technology is merely the camera. What makes ads convert is rigorous consumer psychology, hook architecture, and refined luxury aesthetics.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs text-[#E2B874] tracking-widest uppercase mb-2">
              02 · Rapid Creative Velocity
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Consumer feeds fatigue quickly. We provide brands with continuous creative volume so paid media accounts never run out of fresh high-performing winners.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs text-[#E2B874] tracking-widest uppercase mb-2">
              03 · Uncompromising Fidelity
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every shadow, water droplet, and specular reflection is sculpted to commercial perfection, rivaling the most expensive agency productions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
