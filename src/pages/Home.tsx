import React from 'react';
import { ArrowUpRight, Sparkles, MoveDown, Compass, Award, ExternalLink } from 'lucide-react';
import { SAHIL_PROFILE, PROJECTS_OVERVIEW } from '../data/portfolioData';
import { SectionLabel } from '../components/SectionLabel';
import { PdfPageImage } from '../components/PdfPageImage';

interface HomeProps {
  onSelectProject: (projectId: string) => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectProject, onOpenSlide }) => {
  return (
    <div className="min-h-screen">
      {/* 1. EDITORIAL HERO (Section 7) */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200/80">
        {/* Top greeting */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block">
              Portfolio Index 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 tracking-tight">
              Hello !
            </h2>
          </div>

          <div className="hidden sm:block text-right">
            <span className="font-mono text-xs text-stone-600 block tracking-widest uppercase">
              Positioning
            </span>
            <span className="text-sm font-medium text-stone-800">
              Product &amp; Experience Designer
            </span>
          </div>
        </div>

        {/* Center Editorial Title */}
        <div className="my-16 md:my-24">
          <span className="block font-mono text-xs md:text-sm tracking-widest uppercase text-stone-600 mb-3">
            Sahil Husain / Selected Works
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-stone-950 uppercase leading-[0.9] select-none">
            Design<br />Portfolio
          </h1>
          <p className="mt-6 text-base md:text-xl text-stone-600 max-w-2xl font-light leading-relaxed">
            Multidisciplinary design at the intersection of technology, people, and everyday experiences.
          </p>
        </div>

        {/* Bottom Hero Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-stone-200">
          <div>
            <span className="block font-mono text-xs uppercase tracking-widest text-stone-600">
              Designer &amp; Researcher
            </span>
            <span className="text-lg md:text-xl font-bold text-stone-900">
              Sahil Husain
            </span>
          </div>

          <div className="text-left sm:text-center">
            <span className="block font-mono text-xs uppercase tracking-widest text-stone-600">
              Based In
            </span>
            <span className="text-base font-semibold text-stone-800">
              New Delhi, India
            </span>
          </div>

          <div className="text-left sm:text-right">
            <span className="block font-mono text-xs uppercase tracking-widest text-stone-600">
              Education
            </span>
            <span className="font-mono text-xs text-stone-800 font-semibold block">
              M.Des — NID India
            </span>
            <span className="font-mono text-xs text-stone-800 font-semibold block">
              B.Des — NIFT India
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / MEET SAHIL (Section 8) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200/80">
        <SectionLabel category="Introduction" number="00" title="Meet Sahil" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-10">
          {/* Left: Sahil's Portrait & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl bg-stone-900 shadow-xl aspect-[4/5] border border-stone-800">
              <img
                src={SAHIL_PROFILE.image}
                alt="Sahil Husain"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
                  M.DES : NID INDIA • B.DES : NIFT INDIA
                </span>
                <span className="text-white font-bold text-xl tracking-tight mt-1">
                  Sahil Husain
                </span>
                <span className="text-stone-300 text-xs font-mono">
                  New Delhi, India
                </span>
              </div>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-100/90 border border-stone-200">
                <span className="font-mono text-[11px] text-stone-600 uppercase tracking-wider block">
                  Master's Degree
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-1">
                  M.Des
                </span>
                <span className="text-xs text-stone-600">
                  National Institute of Design (NID India)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-stone-100/90 border border-stone-200">
                <span className="font-mono text-[11px] text-stone-600 uppercase tracking-wider block">
                  Bachelor's Degree
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-1">
                  B.Des
                </span>
                <span className="text-xs text-stone-600">
                  National Institute of Fashion Technology (NIFT India)
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-l-2 border-stone-900 pl-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block">
                MEET SAHIL • STATEMENT
              </span>
              {SAHIL_PROFILE.bioParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base md:text-xl text-stone-800 leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Design Focus Triad */}
            <div className="pt-6 border-t border-stone-200">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block mb-4">
                Core Intersections
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SAHIL_PROFILE.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-sm"
                  >
                    <span className="font-bold text-sm text-stone-900 block mb-1">
                      {pillar.title}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Slide 2 Preview Button */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenSlide('/pdf-pages/page-02.webp', 'Meet Sahil (PDF Original Page 2)', 2)}
                className="inline-flex items-center gap-2 text-xs font-mono text-stone-700 hover:text-stone-950 underline underline-offset-4"
              >
                <span>View original portfolio presentation slide 02</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK / PROJECTS OVERVIEW (Section 9) */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionLabel category="Selected Works" number="01–03" title="Featured Projects" />
          <span className="font-mono text-xs text-stone-600 uppercase tracking-wider mb-8 md:mb-0">
            3 In-Depth Case Studies
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {PROJECTS_OVERVIEW.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Image / Slide (7 cols) */}
                <div
                  onClick={() => onSelectProject(project.id)}
                  className="lg:col-span-7 relative cursor-pointer overflow-hidden bg-stone-100 aspect-[16/9] lg:aspect-auto"
                >
                  <img
                    src={project.coverSlide}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-stone-900/80 text-white font-mono text-[11px] backdrop-blur-sm">
                    {project.client}
                  </div>
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-black/60 text-white font-mono text-[11px] backdrop-blur-sm">
                    Case Study {project.number}
                  </div>
                </div>

                {/* Right: Narrative & Action (5 cols) */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-stone-600 tracking-widest">
                        0{index + 1} / 03
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600">
                        {project.client}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950 tracking-tight mb-2">
                      {project.projectName}
                    </h3>
                    <h4 className="text-base font-semibold text-stone-700 mb-4">
                      {project.title}
                    </h4>

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {project.subtitle}
                    </p>

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-mono text-[11px]"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore button */}
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-stone-900 text-white font-mono text-xs uppercase tracking-widest group-hover:bg-stone-800 transition-all shadow-md"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. DESIGN PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200/80">
        <SectionLabel category="Philosophy" number="04" title="Design Approach" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-8 rounded-2xl bg-stone-100/90 border border-stone-200">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block mb-2">
              Human-Centered Rigor
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
              Grounding technology in contextual human behaviour.
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Great experiences are not about adding layers of buttons or features. As evidenced in Makaan, Sneaker Care, and Galaxy CMF, design begins with domestic immersions, regional nuance, and understanding what people truly value before structuring interfaces.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-stone-100/90 border border-stone-200">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block mb-2">
              From Control to Intent
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-4">
              Usable, thoughtful, adaptive and meaningful.
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Whether orchestrating smart domestic appliances through conversational AI or forecasting multi-sensory CMF palettes for millions of smartphones, the goal remains: reducing cognitive friction, empowering natural expression, and elevating everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PDF COMPLETE SLIDE PREVIEW GALLERY */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600 block">
              Artifact Archive
            </span>
            <h3 className="text-2xl font-bold text-stone-900">
              Complete 49-Page Portfolio Deck
            </h3>
          </div>
          <span className="font-mono text-xs text-stone-600">
            Source of Truth
          </span>
        </div>

        <p className="text-stone-600 text-sm mb-8 max-w-2xl">
          Click any slide to open the high-resolution lightbox with zoom and full navigation.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[1, 2, 3, 5, 7, 10, 13, 16, 18, 21, 23, 26, 28, 30, 31, 36, 42, 48].map((pageNum) => (
            <div
              key={pageNum}
              onClick={() => onOpenSlide(`/pdf-pages/page-${String(pageNum).padStart(2, '0')}.webp`, `Portfolio Page ${pageNum}`, pageNum)}
              className="cursor-pointer group relative rounded-lg overflow-hidden border border-stone-200 aspect-[16/9] bg-stone-100 hover:border-stone-400 shadow-sm"
            >
              <img
                src={`/pdf-pages/page-${String(pageNum).padStart(2, '0')}.webp`}
                alt={`Slide ${pageNum}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-mono">
                Page {pageNum}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
