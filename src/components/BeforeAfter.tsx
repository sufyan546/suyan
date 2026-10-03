import React, { useState, useRef, useCallback } from 'react';
import { COMPARISON_AFTER_IMAGE } from '../data/agencyData';
import { SlidersHorizontal, Sparkles, AlertCircle } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // safe
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#090a0d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E2B874] mb-3">
            Transformation
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05] text-balance">
            THE PRODUCT IS ALREADY GOOD.<br />
            <span className="text-[#E2B874]">WE MAKE IT LOOK THAT WAY.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light">
            Compare flat manufacturer catalog photography against Ad Creative’s cinematic commercial direction.
          </p>
        </div>

        {/* Preset controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <SlidersHorizontal size={14} className="text-[#E2B874]" />
            <span className="hidden sm:inline">Drag or click slider to compare:</span>
            <span className="text-white font-semibold tabular-nums">{Math.round(sliderPosition)}% After</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSliderPosition(0)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                sliderPosition === 0
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#14151b] text-neutral-400 hover:text-white'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                sliderPosition === 50
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#14151b] text-neutral-400 hover:text-white'
              }`}
            >
              50 / 50
            </button>
            <button
              onClick={() => setSliderPosition(100)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                sliderPosition === 100
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#14151b] text-neutral-400 hover:text-white'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-black border border-white/10 select-none overflow-hidden cursor-ew-resize group shadow-2xl"
        >
          {/* AFTER LAYER (Full background) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={COMPARISON_AFTER_IMAGE}
              alt="Cinematic commercial creative with explosive ice shards and dynamic rim lighting"
              className="w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Overlay Badge */}
            <div className="absolute top-6 right-6 z-10 bg-black/80 backdrop-blur-md border border-[#E2B874]/60 px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E2B874] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                  AFTER: CINEMATIC ADVERTISING
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-mono block mt-0.5">
                Volumetric light · Ice physics · Liquid splash choreography · 4K
              </span>
            </div>
          </div>

          {/* BEFORE LAYER (Clipped by slider position) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-[#18191f] pointer-events-none border-r border-white/40"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Simulation of basic unstyled flat packshot */}
            <div
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#22242b] to-[#15161b]"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
              }}
            >
              {/* Product mock in flat basic studio look */}
              <div className="relative w-44 sm:w-56 aspect-[1/2] rounded-lg bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 shadow-md border border-neutral-700/60 flex flex-col justify-between p-4 filter saturate-50 brightness-90">
                <div className="text-[10px] font-mono text-neutral-400 tracking-wider">
                  FLAT RAW PACKSHOT
                </div>
                <div className="text-center my-auto">
                  <div className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
                    SAMPLE BEVERAGE CAN
                  </div>
                  <div className="text-[9px] text-neutral-500 font-mono mt-1">
                    Standard White Backdrop
                  </div>
                </div>
                <div className="text-[8px] font-mono text-neutral-600 text-center">
                  Unedited E-Commerce Sample
                </div>
              </div>

              {/* Grid lines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03]" />
            </div>

            {/* Before Label */}
            <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-bold">
                  BEFORE: RAW PRODUCT PHOTO
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 font-mono block mt-0.5">
                Flat studio light · Static phone/tabletop shot · No narrative hook
              </span>
            </div>
          </div>

          {/* Draggable Vertical Split Divider */}
          <div
            className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center font-bold text-xs select-none">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>

        {/* Strategic takeaway */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-400 font-light">
          <div className="p-4 bg-[#0e0f14] border border-white/5">
            <span className="font-mono uppercase text-neutral-300 font-semibold block mb-1">
              The Reality for Most D2C Brands:
            </span>
            Basic packshots get lost in the feed in 0.4 seconds. Consumers don&apos;t scroll through catalogs; they stop for sensory, high-drama storytelling that commands attention.
          </div>
          <div className="p-4 bg-[#0e0f14] border border-white/5">
            <span className="font-mono uppercase text-[#E2B874] font-semibold block mb-1">
              The Ad Creative Effect:
            </span>
            We surround your product with visceral textures, macro lighting, motion vectors, and commercial depth that immediately communicates premium luxury and superior taste.
          </div>
        </div>
      </div>
    </section>
  );
};
