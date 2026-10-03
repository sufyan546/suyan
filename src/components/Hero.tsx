import React, { useState } from 'react';
import { ArrowDownRight, Play, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/agencyData';

interface HeroProps {
  onOpenProjectModal: () => void;
  onOpenShowreelModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Fullscreen cinematic background with slow ambient movement */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#070708]">
        <img
          src={HERO_IMAGE}
          alt="Cinematic luxury product advertising shot"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-40 md:opacity-45 transition-transform duration-1000 ease-out"
          style={{
            animationDuration: '14s',
            transform: isHovered ? 'scale(1.08)' : 'scale(1.03)',
          }}
          referrerPolicy="no-referrer"
        />

        {/* Dramatic cinematic grading scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708] via-transparent to-[#070708]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070708]/40 to-[#070708]" />

        {/* Subtle studio hairline grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      {/* Production Viewfinder / Cinema HUD (Minimalist, quiet) */}
      <div className="absolute top-24 left-6 sm:left-12 right-6 sm:right-12 z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-neutral-300 font-semibold">REC</span>
          <span className="text-neutral-600">·</span>
          <span>4K PRORES 422HQ</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-neutral-400">
          <span>24.00 FPS</span>
          <span className="text-neutral-600">·</span>
          <span>SHUTTER 1/48</span>
          <span className="text-neutral-600">·</span>
          <span>T1.4</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        {/* Studio Label (Clean, unboxed text as mandated by constitution) */}
        <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase font-mono text-neutral-300 mb-6 sm:mb-8">
          <span className="font-semibold text-[#E2B874]">AD CREATIVE</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-300">AI-POWERED CREATIVE STUDIO</span>
        </div>

        {/* Massive Bold Grotesk Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-5xl text-balance">
          WE MAKE PRODUCTS<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            LOOK IMPOSSIBLE
          </span><br />
          <span className="relative inline-block">
            TO IGNORE.
            <span className="absolute -bottom-2 left-0 w-24 sm:w-36 h-[3px] bg-[#E2B874]" />
          </span>
        </h1>

        {/* Exact Subheadline */}
        <p className="mt-8 sm:mt-10 text-base sm:text-xl md:text-2xl text-neutral-200 max-w-2xl font-light leading-relaxed">
          Cinematic advertising, product visuals and social creatives built for brands that want to stand out.
        </p>

        {/* CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#E2B874] transition-all duration-300 active:scale-[0.98]"
          >
            <span>View Our Work</span>
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onOpenProjectModal}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <span className="text-[#E2B874]">→</span>
          </button>

          {/* Quick Reel Anchor */}
          <a
            href="#showreel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden lg:inline-flex items-center gap-2.5 text-xs uppercase font-mono tracking-wider text-neutral-300 hover:text-white transition-colors pl-4 border-l border-white/10"
          >
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#E2B874]">
              <Play size={10} className="fill-white translate-x-0.5" />
            </span>
            <span>Watch Showreel (0:45)</span>
          </a>
        </div>

        {/* Claim-Adjacent Category Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2B874]" />
            <span className="font-mono uppercase tracking-wider text-neutral-200">Creative Production For:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-neutral-300 font-medium">
            <span>D2C Brands</span>
            <span className="text-neutral-600">·</span>
            <span>Protein & Fitness</span>
            <span className="text-neutral-600">·</span>
            <span>Food & Beverage</span>
            <span className="text-neutral-600">·</span>
            <span>Skincare & Beauty</span>
            <span className="text-neutral-600">·</span>
            <span>Coffee</span>
            <span className="text-neutral-600">·</span>
            <span>Lifestyle</span>
          </div>
        </div>
      </div>
    </section>
  );
};
