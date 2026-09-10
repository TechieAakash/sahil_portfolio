import React from 'react';
import { SAHIL_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-[#111317] text-stone-300 pt-20 pb-16 px-6 md:px-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto">
        {/* Let's Connect Editorial Block */}
        <div className="mb-16 pb-12 border-b border-stone-800/80 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Let's connect.
            </h2>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              Open to conversations around experience design, intelligent product systems, consumer electronics, CMF innovation, and everyday technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="px-5 py-4 rounded-lg bg-stone-900/90 border border-stone-800">
              <span className="block font-mono text-[11px] text-stone-500 uppercase tracking-widest mb-1">
                Location
              </span>
              <span className="text-white font-medium text-sm">
                New Delhi, India
              </span>
            </div>

            <div className="px-5 py-4 rounded-lg bg-stone-900/90 border border-stone-800">
              <span className="block font-mono text-[11px] text-stone-500 uppercase tracking-widest mb-1">
                Background
              </span>
              <span className="text-white font-medium text-sm">
                NID &amp; NIFT Graduate
              </span>
            </div>
          </div>
        </div>

        {/* Lower Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-xs">
          <div>
            <span className="font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Portfolio
            </span>
            <p className="text-white font-semibold text-sm tracking-wide uppercase">
              {SAHIL_PROFILE.name}
            </p>
            <p className="text-stone-400 mt-1 font-mono">
              DESIGN PORTFOLIO 2026
            </p>
          </div>

          <div>
            <span className="font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Education
            </span>
            <p className="text-stone-300">M.Des — National Institute of Design (NID)</p>
            <p className="text-stone-300 mt-0.5">B.Des — National Institute of Fashion Technology (NIFT)</p>
          </div>

          <div>
            <span className="font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Selected Works
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('makaan')}
                  className="hover:text-white transition-colors text-left"
                >
                  01 — Project Makaan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sneaker-care')}
                  className="hover:text-white transition-colors text-left"
                >
                  02 — Sneaker Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galaxy-cmf')}
                  className="hover:text-white transition-colors text-left"
                >
                  03 — 2026 Galaxy CMF
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home / Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  Meet Sahil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('philosophy')}
                  className="hover:text-white transition-colors"
                >
                  Design Philosophy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 font-mono text-[11px]">
          <div>
            © 2026 Sahil Husain. All project visual narratives sourced directly from the original presentation.
          </div>
          <div>
            New Delhi, India
          </div>
        </div>
      </div>
    </footer>
  );
};
