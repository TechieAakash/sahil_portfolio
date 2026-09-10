import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Layers, Cpu, Users, Eye, ShieldCheck } from 'lucide-react';
import { SAHIL_PROFILE, PROJECTS_OVERVIEW } from '../data/portfolioData';

interface HomeProps {
  onSelectProject: (projectId: string) => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectProject }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1D1D1F]">
      {/* 1. APPLE-STYLE HERO SECTION */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Subtle Ambient Radial Light (Apple Keynote Style) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-b from-amber-100/40 via-purple-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Apple-style Frosted Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-[#515154] text-xs font-mono tracking-wider uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Product Experience &amp; Interaction Design</span>
        </div>

        {/* Apple-style Large Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.02]">
            Sahil Husain
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#515154] tracking-tight max-w-3xl mx-auto leading-relaxed">
            Designing intelligent systems at the intersection of <span className="text-black font-normal">technology</span>, <span className="text-black font-normal">people</span>, and <span className="text-black font-normal">everyday experiences</span>.
          </p>
        </div>

        {/* Apple-style Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-medium text-sm tracking-tight transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 rounded-full apple-glass hover:bg-white text-[#1D1D1F] font-medium text-sm tracking-tight transition-all shadow-sm"
          >
            About Sahil
          </button>
        </div>

        {/* Apple Keynote Style Highlights Bar */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl apple-glass-subtle">
            <span className="block font-mono text-[10px] text-[#86868B] uppercase tracking-wider mb-1">
              Background
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              M.Des NID &amp; B.Des NIFT
            </span>
            <span className="text-xs text-[#86868B]">India's Premier Design Institutes</span>
          </div>

          <div className="p-4 rounded-2xl apple-glass-subtle">
            <span className="block font-mono text-[10px] text-[#86868B] uppercase tracking-wider mb-1">
              Industry Focus
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              Samsung ICXT Innovation
            </span>
            <span className="text-xs text-[#86868B]">Connected Living &amp; CMF Strategy</span>
          </div>

          <div className="p-4 rounded-2xl apple-glass-subtle">
            <span className="block font-mono text-[10px] text-[#86868B] uppercase tracking-wider mb-1">
              Location
            </span>
            <span className="text-sm font-semibold text-[#1D1D1F] block">
              New Delhi, India
            </span>
            <span className="text-xs text-[#86868B]">Open for global design initiatives</span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS — APPLE KEYNOTE BENTO SHOWCASE */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-black/[0.06]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-1">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
              Featured Case Studies
            </h2>
          </div>
          <span className="font-mono text-xs text-[#86868B]">
            3 In-Depth Research &amp; Experience Projects
          </span>
        </div>

        {/* Apple-style Bento Cards Grid */}
        <div className="space-y-12">
          {/* Card 01: Project Makaan */}
          <div
            onClick={() => onSelectProject('makaan')}
            className="group relative cursor-pointer rounded-3xl apple-glass p-8 md:p-12 border border-white/80 hover:border-black/10 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* Ambient project accent glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-to-bl from-rose-100/50 via-amber-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-[#8C253B] font-mono text-xs font-semibold border border-rose-100">
                    Project 01 • Samsung ICXT
                  </span>
                  <span className="font-mono text-xs text-[#86868B]">
                    #HarGharKuchKehtaHai
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#8C253B] transition-colors">
                  Project Makaan
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#515154]">
                  Future of Connected Living — Reimagining connected homes through conversational AI
                </h4>

                <p className="text-sm text-[#86868B] leading-relaxed max-w-xl">
                  Comprehensive domestic immersion across 5 Indian cities (Delhi, Guwahati, Hyderabad, Indore, Mumbai) investigating the transition from controlling appliances to expressing natural human intent.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    AI Interaction Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    SmartThings Intelligence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    5 Immersion Zones
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#8C253B] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-md">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Sneaker Care */}
          <div
            onClick={() => onSelectProject('sneaker-care')}
            className="group relative cursor-pointer rounded-3xl apple-glass p-8 md:p-12 border border-white/80 hover:border-black/10 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* Ambient project accent glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-to-bl from-emerald-100/50 via-teal-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#385A2E] font-mono text-xs font-semibold border border-emerald-100">
                    Project 02 • Connected Experience
                  </span>
                  <span className="font-mono text-xs text-[#86868B]">
                    $4.5 Bn Market by 2030
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#385A2E] transition-colors">
                  Sneaker Care
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#515154]">
                  Specialized Care Experience — Bridging Indian Gen-Z sneakerhead culture with material-aware wash cycles
                </h4>

                <p className="text-sm text-[#86868B] leading-relaxed max-w-xl">
                  Addressing the gap between high-value sneaker culture and damaging wash methods through downloadable material-aware cycles for Mesh, Canvas, Leather, Suede, and Synthetics.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    Service Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    Product Feature Innovation
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    5.87% CAGR
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#385A2E] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-md">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Galaxy CMF Design */}
          <div
            onClick={() => onSelectProject('galaxy-cmf')}
            className="group relative cursor-pointer rounded-3xl apple-glass p-8 md:p-12 border border-white/80 hover:border-black/10 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* Ambient project accent glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-to-bl from-purple-100/50 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-[#5A2A78] font-mono text-xs font-semibold border border-purple-100">
                    Project 03 • Trend Forecasting
                  </span>
                  <span className="font-mono text-xs text-[#86868B]">
                    Galaxy A, M &amp; F Series
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F] group-hover:text-[#5A2A78] transition-colors">
                  2026 CMF Design
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-[#515154]">
                  Trends Forecast for Galaxy — Emerging color narratives rooted in consumer sentiment
                </h4>

                <p className="text-sm text-[#86868B] leading-relaxed max-w-xl">
                  Deep dive into lifestyle immersions, global consumer drivers ("Gently Pleasant"), South West Asia regional drivers ("Uplifted Brilliance"), linear and wave pattern studies, and the 2026 Master Pantone Matrix.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    CMF Strategy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    Pantone Color Proposals
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-xs font-mono text-[#515154]">
                    Material Innovation
                  </span>
                </div>
              </div>

              {/* Action pill */}
              <div className="flex items-center justify-end">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1F] group-hover:bg-[#5A2A78] text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-md">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / MEET SAHIL — APPLE EXECUTIVE BENTO (NO PHOTO) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-black/[0.06]">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-1">
            Design Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
            Meet Sahil
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Statement Card (7 cols) */}
          <div className="md:col-span-7 apple-glass p-8 md:p-10 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#86868B]">
                Philosophy &amp; Narrative
              </span>
              <p className="text-lg md:text-xl text-[#1D1D1F] leading-relaxed font-normal">
                {SAHIL_PROFILE.bioParagraphs[0]}
              </p>
              <p className="text-sm md:text-base text-[#515154] leading-relaxed font-light">
                {SAHIL_PROFILE.bioParagraphs[1]}
              </p>
            </div>

            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#86868B]">
              <span>Sahil Husain</span>
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Right Column: Credentials & Academic Foundation (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="apple-glass p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-3">
                  Design Education
                </span>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/80 border border-black/[0.06] shadow-sm">
                    <span className="font-mono text-[11px] text-[#86868B] uppercase tracking-wider block">
                      Postgraduate
                    </span>
                    <span className="text-base font-bold text-[#1D1D1F] block mt-0.5">
                      M.Des — NID India
                    </span>
                    <span className="text-xs text-[#515154]">
                      National Institute of Design
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 border border-black/[0.06] shadow-sm">
                    <span className="font-mono text-[11px] text-[#86868B] uppercase tracking-wider block">
                      Undergraduate
                    </span>
                    <span className="text-base font-bold text-[#1D1D1F] block mt-0.5">
                      B.Des — NIFT India
                    </span>
                    <span className="text-xs text-[#515154]">
                      National Institute of Fashion Technology
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-black/[0.06] font-mono text-xs text-[#86868B]">
                Rigorous Form &amp; User Research Foundation
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Intersection Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="apple-glass p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              Technology
            </h4>
            <p className="text-xs text-[#515154] leading-relaxed">
              Understanding systemic capabilities, connected ecosystems, and conversational intelligent layers like Makaan.
            </p>
          </div>

          <div className="apple-glass p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              People
            </h4>
            <p className="text-xs text-[#515154] leading-relaxed">
              In-depth multi-regional home immersions, authentic user verbatims, and cultural understanding across cohorts.
            </p>
          </div>

          <div className="apple-glass p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-2xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <h4 className="text-base font-bold text-[#1D1D1F] mb-1">
              Everyday Experiences
            </h4>
            <p className="text-xs text-[#515154] leading-relaxed">
              Crafting usable, thoughtful, adaptive, and meaningful experiences that simplify life and reduce friction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
