import React from 'react';
import { GALAXY_CMF_DATA } from '../data/portfolioData';
import { SectionLabel } from '../components/SectionLabel';
import { PdfPageImage } from '../components/PdfPageImage';
import { ProjectNavigation } from '../components/ProjectNavigation';
import { CmfColorExplorer } from '../components/CmfColorExplorer';
import { Lock, Sparkles, Layers, Eye, Compass, Palette } from 'lucide-react';

interface GalaxyCmfCaseStudyProps {
  onSelectProject: (projectId: string) => void;
  onGoHome: () => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const GalaxyCmfCaseStudy: React.FC<GalaxyCmfCaseStudyProps> = ({
  onSelectProject,
  onGoHome,
  onOpenSlide,
}) => {
  return (
    <div className="pt-24 pb-20">
      {/* 1. PROJECT HERO */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto pb-16 border-b border-stone-200">
        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5A2A78] font-bold">
            Project 03 • Trend Forecasting &amp; CMF Strategy
          </span>
          <span className="font-mono text-xs text-stone-500 uppercase">
            Samsung Electronics
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-stone-950 tracking-tight uppercase leading-[0.95]">
            2026 CMF Design
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-700 font-light">
            {GALAXY_CMF_DATA.title} (Galaxy A, M &amp; F Series)
          </h2>
          <p className="text-lg md:text-xl text-stone-900 font-medium pt-2">
            {GALAXY_CMF_DATA.scope}
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {GALAXY_CMF_DATA.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="font-mono text-xs text-stone-500">
            Target Timeline: 2026 Portfolio Deployment
          </div>
        </div>

        {/* Hero Slides (Pages 24 & 25) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <PdfPageImage
            src="/pdf-pages/page-24.webp"
            alt="Trends Forecast for Galaxy Title Slide 24"
            pageNumber={24}
            onClick={() => onOpenSlide('/pdf-pages/page-24.webp', 'Galaxy CMF Forecast Title', 24)}
            priority
          />
          <PdfPageImage
            src="/pdf-pages/page-25.webp"
            alt="2026 CMF design for Galaxy A series Slide 25"
            pageNumber={25}
            onClick={() => onOpenSlide('/pdf-pages/page-25.webp', 'Galaxy A Series Chapter', 25)}
            priority
          />
        </div>
      </section>

      {/* 2. SMARTPHONE MARKET SCENARIO & PRICE BANDS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Market Analysis" number="03.1" title="Smartphone Market Landscape" />

        <div className="bg-stone-900 text-white rounded-2xl p-6 md:p-8 shadow-xl my-6">
          <span className="font-mono text-xs text-purple-300 uppercase tracking-widest block mb-1">
            Industry Dynamics (Slide 26)
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
            {GALAXY_CMF_DATA.marketScenario.title}
          </h3>
          <p className="text-stone-300 text-sm md:text-base font-light">
            “{GALAXY_CMF_DATA.marketScenario.tagline}”
          </p>
        </div>

        {/* 4 Price Tiers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {GALAXY_CMF_DATA.marketScenario.priceTiers.map((tier) => (
            <div key={tier.tier} className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-widest block mb-1">
                {tier.tier}
              </span>
              <span className="text-lg font-extrabold text-stone-900 font-mono block mb-1">
                {tier.price}
              </span>
              <p className="text-xs text-stone-600 leading-tight">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Global vs SWA CMF Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 rounded-xl bg-stone-100/90 border border-stone-200">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-2">
              Global Strategy
            </span>
            <h4 className="text-lg font-bold text-stone-900 mb-3">
              {GALAXY_CMF_DATA.marketScenario.cmfComparison.global.title}
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {GALAXY_CMF_DATA.marketScenario.cmfComparison.global.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-1 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-stone-100/90 border border-stone-200">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5A2A78] font-bold block mb-2">
              Regional Strategy
            </span>
            <h4 className="text-lg font-bold text-stone-900 mb-3">
              {GALAXY_CMF_DATA.marketScenario.cmfComparison.swa.title}
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {GALAXY_CMF_DATA.marketScenario.cmfComparison.swa.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2A78] mt-1 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PdfPageImage
          src="/pdf-pages/page-26.webp"
          alt="Smartphone Market Scenario Slide 26"
          pageNumber={26}
          onClick={() => onOpenSlide('/pdf-pages/page-26.webp', 'Smartphone Market Scenario', 26)}
        />
      </section>

      {/* 3. CONSUMER SEGMENTS: A SERIES VS M & F SERIES */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Personas" number="03.2" title="Consumer Segmentation &amp; Visual Aspirations" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* A Series Persona */}
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold block mb-2">
                Galaxy A Series User
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 mb-3">
                “{GALAXY_CMF_DATA.consumerSegments.aSeries.persona}”
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                {GALAXY_CMF_DATA.consumerSegments.aSeries.desc}
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-stone-400 uppercase tracking-wider block mb-2">
                Lifestyle Reference Brands
              </span>
              <div className="flex flex-wrap gap-2">
                {GALAXY_CMF_DATA.consumerSegments.aSeries.references.map((rf) => (
                  <span key={rf} className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 text-xs font-mono">
                    {rf}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* M & F Series Persona */}
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5A2A78] font-bold block mb-2">
                Galaxy M &amp; F Series User
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 mb-3">
                “{GALAXY_CMF_DATA.consumerSegments.mfSeries.persona}”
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                {GALAXY_CMF_DATA.consumerSegments.mfSeries.desc}
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-stone-400 uppercase tracking-wider block mb-2">
                Lifestyle Reference Brands
              </span>
              <div className="flex flex-wrap gap-2">
                {GALAXY_CMF_DATA.consumerSegments.mfSeries.references.map((rf) => (
                  <span key={rf} className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 text-xs font-mono">
                    {rf}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <PdfPageImage
          src="/pdf-pages/page-27.webp"
          alt="Consumer Segments Slide 27"
          pageNumber={27}
          onClick={() => onOpenSlide('/pdf-pages/page-27.webp', 'Consumer Segments', 27)}
        />
      </section>

      {/* 4. CONSUMER SENTIMENT 2026 & GLOBAL DRIVERS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Consumer Sentiment" number="03.3" title="Expressive &amp; Soothing Realities" />

        <div className="my-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-stone-900 via-[#181D2A] to-[#1F172C] text-white shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-300 block mb-3">
            Consumer Sentiment 2026 (Slide 28)
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            “{GALAXY_CMF_DATA.consumerSentiment.headline}”
          </h3>
          <div className="space-y-4 max-w-3xl text-stone-300 text-sm md:text-base leading-relaxed font-light">
            {GALAXY_CMF_DATA.consumerSentiment.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 4 Global Drivers Grid (Slide 29) */}
        <div className="my-12">
          <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold mb-4">
            Four Global Consumer Drivers
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALAXY_CMF_DATA.globalDrivers.map((drv) => (
              <div key={drv.driver} className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h5 className="font-extrabold text-stone-900 text-base mb-2 font-mono">
                    {drv.driver}
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {drv.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1 font-mono text-[10px] text-stone-500">
                  {drv.references.map((r) => (
                    <span key={r} className="px-1.5 py-0.5 rounded bg-stone-100">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <PdfPageImage
            src="/pdf-pages/page-28.webp"
            alt="Consumer Sentiment 2026 Slide 28"
            pageNumber={28}
            onClick={() => onOpenSlide('/pdf-pages/page-28.webp', 'Consumer Sentiment 2026', 28)}
          />
          <PdfPageImage
            src="/pdf-pages/page-29.webp"
            alt="Global Consumer Drivers Slide 29"
            pageNumber={29}
            onClick={() => onOpenSlide('/pdf-pages/page-29.webp', 'Global Consumer Drivers', 29)}
          />
        </div>
      </section>

      {/* 5. GALAXY A SERIES COLOR PROPOSAL ("GENTLY PLEASANT") */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Galaxy A Series" number="03.4" title="CMF Proposal: Gently Pleasant" />

        {/* Concept Manifesto */}
        <div className="p-8 md:p-10 rounded-2xl bg-stone-100 border border-stone-200 my-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5A2A78] font-bold block mb-2">
            Umbrella CMF Concept
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-3">
            {GALAXY_CMF_DATA.galaxyASeries.concept}
          </h3>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-3xl mb-4">
            {GALAXY_CMF_DATA.galaxyASeries.manifesto}
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200/80">
            <Lock className="w-3.5 h-3.5 shrink-0" />
            <span>{GALAXY_CMF_DATA.galaxyASeries.ndaNotice}</span>
          </div>
        </div>

        {/* 3 Model Directions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {GALAXY_CMF_DATA.galaxyASeries.deviceConcepts.map((dc) => (
            <div key={dc.model} className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-mono text-xs text-[#5A2A78] font-bold block mb-1">
                {dc.model} Direction
              </span>
              <h4 className="text-lg font-bold text-stone-900 mb-2">
                {dc.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {dc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Slides 30, 31, 32, 33, 34, 35, 36 Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <PdfPageImage
            src="/pdf-pages/page-30.webp"
            alt="CMF Concept Gently Pleasant Slide 30"
            pageNumber={30}
            onClick={() => onOpenSlide('/pdf-pages/page-30.webp', 'Gently Pleasant Concept', 30)}
          />
          <PdfPageImage
            src="/pdf-pages/page-31.webp"
            alt="A Series Color Proposals Slide 31"
            pageNumber={31}
            onClick={() => onOpenSlide('/pdf-pages/page-31.webp', 'A Series 3 Proposals', 31)}
          />
          <PdfPageImage
            src="/pdf-pages/page-36.webp"
            alt="Galaxy A Series Color Matrix Slide 36"
            pageNumber={36}
            onClick={() => onOpenSlide('/pdf-pages/page-36.webp', 'Galaxy A Series Master Matrix', 36)}
          />
        </div>

        {/* Dark Core, Silverine, Cool & Warm Deep Dives */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <PdfPageImage
            src="/pdf-pages/page-32.webp"
            alt="Dark Core Classic Darks Slide 32"
            pageNumber={32}
            onClick={() => onOpenSlide('/pdf-pages/page-32.webp', 'Dark Core', 32)}
          />
          <PdfPageImage
            src="/pdf-pages/page-33.webp"
            alt="Light Neutral Silverine Greys Slide 33"
            pageNumber={33}
            onClick={() => onOpenSlide('/pdf-pages/page-33.webp', 'Light Neutral', 33)}
          />
          <PdfPageImage
            src="/pdf-pages/page-34.webp"
            alt="Trend A Cool Renew Blues Slide 34"
            pageNumber={34}
            onClick={() => onOpenSlide('/pdf-pages/page-34.webp', 'Trend A Cool', 34)}
          />
          <PdfPageImage
            src="/pdf-pages/page-35.webp"
            alt="Trend B Warm Radiant Warms Slide 35"
            pageNumber={35}
            onClick={() => onOpenSlide('/pdf-pages/page-35.webp', 'Trend B Warm', 35)}
          />
        </div>
      </section>

      {/* 6. GALAXY M & F SERIES ("UPLIFTED BRILLIANCE") */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Galaxy M &amp; F Series" number="03.5" title="CMF Strategy: Uplifted Brilliance" />

        <div className="p-8 md:p-10 rounded-2xl bg-stone-900 text-white shadow-xl my-8">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-300 block mb-2">
            M &amp; F Series Umbrella Concept
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            {GALAXY_CMF_DATA.galaxyMFSeries.concept}
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-3xl">
            {GALAXY_CMF_DATA.galaxyMFSeries.conceptDesc}
          </p>
          <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10 font-mono text-xs text-stone-400">
            {GALAXY_CMF_DATA.galaxyMFSeries.pillars.map((pil) => (
              <span key={pil} className="px-2.5 py-1 rounded bg-white/10 text-white">
                {pil}
              </span>
            ))}
          </div>
        </div>

        {/* SWA Drivers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {GALAXY_CMF_DATA.galaxyMFSeries.swaDrivers.map((sw) => (
            <div key={sw.name} className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-bold text-sm text-stone-900 block mb-1">
                {sw.name}
              </span>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                {sw.desc}
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-[10px] text-stone-500">
                {sw.brands.map((b) => (
                  <span key={b} className="px-1.5 py-0.5 rounded bg-stone-100">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pattern Studies Slides 42-47 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <PdfPageImage
            src="/pdf-pages/page-43.webp"
            alt="Galaxy M Series Linear Patterns Slide 43"
            pageNumber={43}
            onClick={() => onOpenSlide('/pdf-pages/page-43.webp', 'M Series Linear Patterns', 43)}
          />
          <PdfPageImage
            src="/pdf-pages/page-46.webp"
            alt="Galaxy F Series Wave Patterns Slide 46"
            pageNumber={46}
            onClick={() => onOpenSlide('/pdf-pages/page-46.webp', 'F Series Wave Patterns', 46)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <PdfPageImage
            src="/pdf-pages/page-44.webp"
            alt="Galaxy M Series Moodboard Slide 44"
            pageNumber={44}
            onClick={() => onOpenSlide('/pdf-pages/page-44.webp', 'M Series Moodboard', 44)}
          />
          <PdfPageImage
            src="/pdf-pages/page-47.webp"
            alt="Galaxy F Series Moodboard Slide 47"
            pageNumber={47}
            onClick={() => onOpenSlide('/pdf-pages/page-47.webp', 'F Series Moodboard', 47)}
          />
        </div>
      </section>

      {/* 7. INTERACTIVE CMF COLOR EXPLORER & MASTER MATRIX (Slide 48) */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="CMF Interactive Matrix" number="03.6" title="Final Color Candidates (Slide 48)" />

        <CmfColorExplorer />

        <div className="my-8">
          <PdfPageImage
            src="/pdf-pages/page-48.webp"
            alt="2026 Galaxy M / F Color Candidates Matrix Slide 48"
            pageNumber={48}
            onClick={() => onOpenSlide('/pdf-pages/page-48.webp', 'Final Color Candidates Matrix', 48)}
          />
        </div>
      </section>

      {/* Project Navigation Footer */}
      <ProjectNavigation
        currentProjectId="galaxy-cmf"
        onSelectProject={onSelectProject}
        onGoHome={onGoHome}
      />
    </div>
  );
};
