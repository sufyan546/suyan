import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/agencyData';

interface CtaSectionProps {
  onOpenProjectModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenProjectModal }) => {
  return (
    <section className="py-28 sm:py-40 bg-[#070708] border-t border-white/5 relative overflow-hidden">
      {/* Background cinematic texture */}
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Cinematic background texture"
          className="w-full h-full object-cover scale-110 blur-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#070708]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Top Studio Kicker */}
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#E2B874] mb-6">
          Next Steps · Inquiries & Bookings
        </div>

        {/* Exact Large Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-[0.92] text-balance">
          READY TO MAKE<br />
          YOUR PRODUCT<br />
          <span className="text-[#E2B874]">IMPOSSIBLE TO IGNORE?</span>
        </h2>

        {/* Exact Subtext */}
        <p className="mt-8 sm:mt-10 text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          Tell us what you&apos;re launching. We&apos;ll bring the creative direction.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto px-10 py-5 bg-[#E2B874] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#ebd09b] transition-all duration-300 shadow-xl shadow-[#E2B874]/10 flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <span className="font-bold">→</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-semibold text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Direct Studio Contact Detail */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-300">
          <span>Direct Inquiries: <a href="mailto:hello@adcreative.agency" className="text-white hover:text-[#E2B874] underline">hello@adcreative.agency</a></span>
          <span className="text-neutral-600">·</span>
          <span>Response Window: &lt; 24 Hours</span>
          <span className="text-neutral-600">·</span>
          <span>Worldwide Production</span>
        </div>
      </div>
    </section>
  );
};
