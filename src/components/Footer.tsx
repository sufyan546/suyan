import React from 'react';

interface FooterProps {
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProjectModal }) => {
  return (
    <footer className="bg-[#050506] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Logo & Small Text Column (5 cols) */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              className="font-display text-2xl font-extrabold tracking-tight text-white inline-block"
            >
              AD CREATIVE
            </a>
            <p className="text-sm text-neutral-400 font-light max-w-sm">
              Cinematic advertising for modern brands.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              AI-Powered Creative Studio · New York · London · Tokyo
            </div>
          </div>

          {/* Navigation Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E2B874]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-neutral-400 font-light">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenProjectModal}
                  className="hover:text-[#E2B874] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E2B874]">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-neutral-400 font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@adcreative.agency"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © 2026 Ad Creative. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Private Commercial Client Access</span>
            <span className="text-neutral-700">/</span>
            <span className="text-neutral-400">Security & NDA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
