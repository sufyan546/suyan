import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const Showreel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [progress, setProgress] = useState(35);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const clips = [
    {
      id: 'macro',
      title: 'Macro Product Shots',
      image: '/src/assets/images/hero_product_cinematic_1791031858517.jpg',
      tag: 'Macro 100mm · 240 FPS',
      description: 'Microscopic surface tension, crystal droplets & gold deboss reflections.',
    },
    {
      id: 'reveals',
      title: 'Product Reveals',
      image: '/src/assets/images/work_skincare_launch_1791031914085.jpg',
      tag: 'Volumetric Mist · Golden Hour',
      description: 'Architectural silhouettes emerging slowly through directional sunbeams.',
    },
    {
      id: 'textures',
      title: 'Food & Fluid Textures',
      image: '/src/assets/images/work_surge_protein_bar_1791031883488.jpg',
      tag: 'Texture Fractures · Fluid Physics',
      description: 'Gourmet dark fudge breaking with floating airborne almond flakes.',
    },
    {
      id: 'fitness',
      title: 'Fitness & Energy Scenes',
      image: '/src/assets/images/product_comparison_cinematic_1791031931391.jpg',
      tag: 'Explosive Cold Shock · 3D Splash',
      description: 'Frost crystals and carbonation shockwaves at maximum velocity.',
    },
    {
      id: 'packaging',
      title: 'Packaging Close-Ups',
      image: '/src/assets/images/work_abcoffee_campaign_1791031899970.jpg',
      tag: 'Matte Finish · Specular Catchlight',
      description: 'Artisanal matte black tactile foil and cascading roasted coffee beans.',
    },
    {
      id: 'cinematic',
      title: 'Cinematic Environments',
      image: '/src/assets/images/hero_product_cinematic_1791031858517.jpg',
      tag: 'Obsidian Set · Ambient Haze',
      description: 'Minimalist luxury studio environments crafted for unforgettable brand recall.',
    },
  ];

  // Auto cycle clips when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveClipIndex((prev) => (prev + 1) % clips.length);
      setProgress((prev) => (prev >= 100 ? 0 : prev + 16.6));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, clips.length]);

  const toggleSound = () => {
    const isNowPlayingAudio = audioEngine.toggle();
    setIsMuted(!isNowPlayingAudio);
  };

  const currentClip = clips[activeClipIndex];

  return (
    <section id="showreel" className="py-24 sm:py-32 bg-[#070708] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Full-width Cinematic Video Frame */}
        <div
          className={`relative w-full aspect-video sm:aspect-[21/9] bg-black border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 aspect-auto h-screen border-none' : ''
          }`}
        >
          {/* Active scene image with cinematic zoom drift */}
          <img
            key={currentClip.id}
            src={currentClip.image}
            alt={currentClip.title}
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Deep Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 pointer-events-none" />

          {/* Center Heading Overlay (Exact user request) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pointer-events-none">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#E2B874] mb-3">
              Official Reel 2026
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none">
              AD CREATIVE SHOWREEL
            </h2>
            <p className="mt-4 text-base sm:text-2xl text-neutral-300 font-light tracking-wide">
              Products. Stories. Attention.
            </p>
          </div>

          {/* Top Info Bar */}
          <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="font-semibold text-white">REEL MASTER</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[#E2B874]">{currentClip.tag}</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="p-2 bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 text-white transition-colors"
                title={isMuted ? 'Unmute cinematic ambient audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#E2B874]" />}
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 text-white transition-colors"
                title="Toggle fullscreen"
              >
                <Maximize2 size={15} />
              </button>
            </div>
          </div>

          {/* Bottom Player Controls & Scrub Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 space-y-4">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/20 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#E2B874] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/70 backdrop-blur-md p-4 border border-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#E2B874] transition-colors shrink-0"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="translate-x-0.5" />}
                </button>
                <div>
                  <div className="font-mono text-xs text-[#E2B874] font-semibold">
                    Cut {activeClipIndex + 1} of {clips.length}: {currentClip.title}
                  </div>
                  <div className="text-xs text-neutral-300 font-light mt-0.5">
                    {currentClip.description}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span>00:1{activeClipIndex}:32</span>
                <span>/</span>
                <span>00:45:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scene Selector Ribbon */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {clips.map((clip, index) => (
            <button
              key={clip.id}
              onClick={() => {
                setActiveClipIndex(index);
                setProgress(((index + 1) / clips.length) * 100);
              }}
              className={`p-3 text-left border transition-all duration-200 ${
                activeClipIndex === index
                  ? 'border-[#E2B874] bg-[#121319]'
                  : 'border-white/10 bg-[#0c0d11] hover:border-white/25 hover:bg-[#0f1015]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#E2B874] tracking-wider mb-1">
                0{index + 1}
              </div>
              <div className="text-xs font-semibold text-white tracking-tight leading-tight truncate">
                {clip.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
