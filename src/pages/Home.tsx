import React from 'react';
import { ArrowUpRight, ArrowRight, Cpu, Users, Sparkles } from 'lucide-react';
import { SAHIL_PROFILE, PROJECTS_OVERVIEW } from '../data/portfolioData';

interface HomeProps {
  onSelectProject: (projectId: string) => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectProject }) => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Exact Arizona Poppy Embossed Botanical Design in the Background of the Texts */}
        <div
          className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[560px] pointer-events-none select-none -z-10 opacity-85 mix-blend-multiply transition-opacity duration-500"
          aria-hidden="true"
        >
          <img
            src="/textures/poppy_hero_2x.webp"
            alt="Embossed Arizona Poppy Botanical Relief"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Subtle Sandy Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sandy-pill text-xs font-mono tracking-wider uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C253B]" />
          <span>Product Experience &amp; Interaction Design</span>
        </div>

        {/* Hero Typography — Directly over the Embossed Botanical Artwork */}
        <div className="space-y-5 max-w-3xl mx-auto mb-10 relative z-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.02]">
            Sahil Husain
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#555047] tracking-tight max-w-2xl mx-auto leading-relaxed">
            Designing intelligent systems at the intersection of{' '}
            <span className="text-[#1D1D1F] font-medium">technology</span>,{' '}
            <span className="text-[#1D1D1F] font-medium">people</span>, and{' '}
            <span className="text-[#1D1D1F] font-medium">everyday experiences</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-medium text-sm tracking-tight transition-all shadow-sm hover:shadow flex items-center gap-2 group"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 rounded-full bg-white hover:bg-[#F3EFE7] text-[#1D1D1F] border border-[#E5DFD5] font-medium text-sm tracking-tight transition-all shadow-sm"
          >
            About Sahil
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="mt-16 pt-8 border-t border-[#E5DFD5] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DFD5]">
            <span className="block font-mono text-[10px] text-[#736E65] uppercase tracking-wider mb-1">
              Background
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              M.Des NID &amp; B.Des NIFT
            </span>
            <span className="text-xs text-[#736E65]">India's Premier Design Institutes</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DFD5]">
            <span className="block font-mono text-[10px] text-[#736E65] uppercase tracking-wider mb-1">
              Industry Focus
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              Samsung ICXT Innovation
            </span>
            <span className="text-xs text-[#736E65]">Connected Living &amp; CMF Strategy</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#E5DFD5]">
            <span className="block font-mono text-[10px] text-[#736E65] uppercase tracking-wider mb-1">
              Location
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              New Delhi, India
            </span>
            <span className="text-xs text-[#736E65]">Open for global design initiatives</span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS — ARCHITECTURAL BENTO SHOWCASE */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#E5DFD5]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#736E65] block mb-1">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
              Featured Case Studies
            </h2>
          </div>
          <span className="font-mono text-xs text-[#736E65]">
            3 In-Depth Research &amp; Experience Projects
          </span>
        </div>

        {/* Bento Cards Grid */}
        <div className="space-y-10">
          {/* Card 01: Project Makaan */}
          <div
            onClick={() => onSelectProject('makaan')}
            className="group relative cursor-pointer rounded-3xl sandy-card p-8 md:p-12 hover:border-[#D5CDBD] transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FBF0F2] text-[#8C253B] font-mono text-xs font-semibold border border-[#F3D7DC]">
                    Project 01 • Samsung ICXT
                  </span>
                  <span className="font-mono text-xs text-[#736E65]">
                    #HarGharKuchKehtaHai
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#8C253B] transition-colors">
                  Project Makaan
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#555047]">
                  Future of Connected Living — Reimagining connected homes through conversational AI
                </h4>

                <p className="text-sm text-[#736E65] leading-relaxed max-w-xl">
                  Comprehensive domestic immersion across 5 Indian cities (Delhi, Guwahati, Hyderabad, Indore, Mumbai) investigating the transition from controlling appliances to expressing natural human intent.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    AI Interaction Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    SmartThings Intelligence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    5 Immersion Zones
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#8C253B] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-sm">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Sneaker Care */}
          <div
            onClick={() => onSelectProject('sneaker-care')}
            className="group relative cursor-pointer rounded-3xl sandy-card p-8 md:p-12 hover:border-[#D5CDBD] transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#EEF5EC] text-[#385A2E] font-mono text-xs font-semibold border border-[#D5E6D2]">
                    Project 02 • Connected Experience
                  </span>
                  <span className="font-mono text-xs text-[#736E65]">
                    $4.5 Bn Market by 2030
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#385A2E] transition-colors">
                  Sneaker Care
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#555047]">
                  Specialized Care Experience — Bridging Indian Gen-Z sneakerhead culture with material-aware wash cycles
                </h4>

                <p className="text-sm text-[#736E65] leading-relaxed max-w-xl">
                  Addressing the gap between high-value sneaker culture and damaging wash methods through downloadable material-aware cycles for Mesh, Canvas, Leather, Suede, and Synthetics.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    Service Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    Product Feature Innovation
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    5.87% CAGR
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#385A2E] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-sm">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Galaxy CMF Design */}
          <div
            onClick={() => onSelectProject('galaxy-cmf')}
            className="group relative cursor-pointer rounded-3xl sandy-card p-8 md:p-12 hover:border-[#D5CDBD] transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#F5EEFB] text-[#5A2A78] font-mono text-xs font-semibold border border-[#E6D4F2]">
                    Project 03 • Trend Forecasting
                  </span>
                  <span className="font-mono text-xs text-[#736E65]">
                    Galaxy A, M &amp; F Series
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#5A2A78] transition-colors">
                  2026 CMF Design
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#555047]">
                  Trends Forecast for Galaxy — Emerging color narratives rooted in consumer sentiment
                </h4>

                <p className="text-sm text-[#736E65] leading-relaxed max-w-xl">
                  Deep dive into lifestyle immersions, global consumer drivers ("Gently Pleasant"), South West Asia regional drivers ("Uplifted Brilliance"), linear and wave pattern studies, and the 2026 Master Pantone Matrix.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    CMF Strategy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    Pantone Color Proposals
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E5DFD5] text-xs font-mono text-[#555047]">
                    Material Innovation
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#5A2A78] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-sm">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / MEET SAHIL — EXECUTIVE BENTO (NO PHOTO, SUBTLE SANDY SURFACES) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#E5DFD5]">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#736E65] block mb-1">
            Design Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
            Meet Sahil
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Statement Card (7 cols) */}
          <div className="md:col-span-7 sandy-card p-8 md:p-10 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#736E65]">
                Philosophy &amp; Narrative
              </span>
              <p className="text-lg md:text-xl text-[#1D1D1F] leading-relaxed font-normal">
                {SAHIL_PROFILE.bioParagraphs[0]}
              </p>
              <p className="text-sm md:text-base text-[#555047] leading-relaxed font-light">
                {SAHIL_PROFILE.bioParagraphs[1]}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-mono text-[#736E65]">
              <span>Sahil Husain</span>
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Right Column: Credentials & Academic Foundation (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="sandy-card p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#736E65] block mb-3">
                  Design Education
                </span>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F8F5EE] border border-[#E5DFD5]">
                    <span className="font-mono text-[11px] text-[#736E65] uppercase tracking-wider block">
                      Postgraduate
                    </span>
                    <span className="text-base font-bold text-[#1D1D1F] block mt-0.5">
                      M.Des — NID India
                    </span>
                    <span className="text-xs text-[#555047]">
                      National Institute of Design
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F5EE] border border-[#E5DFD5]">
                    <span className="font-mono text-[11px] text-[#736E65] uppercase tracking-wider block">
                      Undergraduate
                    </span>
                    <span className="text-base font-bold text-[#1D1D1F] block mt-0.5">
                      B.Des — NIFT India
                    </span>
                    <span className="text-xs text-[#555047]">
                      National Institute of Fashion Technology
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E5DFD5] font-mono text-xs text-[#736E65]">
                Rigorous Form &amp; User Research Foundation
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Intersection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="sandy-card p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-[#F3EFE7] border border-[#E5DFD5] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              Technology
            </h4>
            <p className="text-xs text-[#555047] leading-relaxed">
              Understanding systemic capabilities, connected ecosystems, and conversational intelligent layers like Makaan.
            </p>
          </div>

          <div className="sandy-card p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-[#F3EFE7] border border-[#E5DFD5] flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              People
            </h4>
            <p className="text-xs text-[#555047] leading-relaxed">
              In-depth multi-regional home immersions, authentic user verbatims, and cultural understanding across cohorts.
            </p>
          </div>

          <div className="sandy-card p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-[#F3EFE7] border border-[#E5DFD5] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              Everyday Experiences
            </h4>
            <p className="text-xs text-[#555047] leading-relaxed">
              Crafting usable, thoughtful, adaptive, and meaningful experiences that simplify life and reduce friction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
