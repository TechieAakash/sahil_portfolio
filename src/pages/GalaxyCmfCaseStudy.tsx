import React from 'react';
import { PdfPageImage } from '../components/PdfPageImage';
import { ProjectNavigation } from '../components/ProjectNavigation';

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
        {/* Project Meta & Title Text on Top */}
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
            Trends Forecast for Galaxy (Galaxy A, M &amp; F Series)
          </h2>
          <p className="text-lg md:text-xl text-stone-900 font-medium pt-2 leading-relaxed">
            To deep dive into lifestyle immersions &amp; cross industry trends for identifying emerging color narratives rooted in consumer sentiment for Galaxy A,M &amp; F series
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              'CMF Design',
              'Trend Forecasting',
              'Consumer Sentiment',
              'Material Innovation',
            ].map((cat) => (
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

        {/* Hero Slides in Vertical Line Sequence (Not in a pair) */}
        <div className="space-y-10 mt-12">
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

      {/* 2. SMARTPHONE MARKET SCENARIO SLIDE 26 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-26.webp"
          alt="Smartphone Market Scenario Slide 26"
          pageNumber={26}
          onClick={() => onOpenSlide('/pdf-pages/page-26.webp', 'Smartphone Market Scenario', 26)}
        />
      </section>

      {/* 3. CONSUMER SEGMENTS SLIDE 27 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-27.webp"
          alt="Consumer Segments Slide 27"
          pageNumber={27}
          onClick={() => onOpenSlide('/pdf-pages/page-27.webp', 'Consumer Segments', 27)}
        />
      </section>

      {/* 4. CONSUMER SENTIMENT & DRIVERS SLIDES 28 & 29 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
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
      </section>

      {/* 5. GALAXY A SERIES COLOR PROPOSALS SLIDES 30 TO 36 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
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
        <PdfPageImage
          src="/pdf-pages/page-36.webp"
          alt="Galaxy A Series Color Matrix Slide 36"
          pageNumber={36}
          onClick={() => onOpenSlide('/pdf-pages/page-36.webp', 'Galaxy A Series Master Matrix', 36)}
        />
      </section>

      {/* 6. GALAXY M & F SERIES SLIDES 43, 44, 46, 47 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
        <PdfPageImage
          src="/pdf-pages/page-43.webp"
          alt="Galaxy M Series Linear Patterns Slide 43"
          pageNumber={43}
          onClick={() => onOpenSlide('/pdf-pages/page-43.webp', 'M Series Linear Patterns', 43)}
        />
        <PdfPageImage
          src="/pdf-pages/page-44.webp"
          alt="Galaxy M Series Moodboard Slide 44"
          pageNumber={44}
          onClick={() => onOpenSlide('/pdf-pages/page-44.webp', 'M Series Moodboard', 44)}
        />
        <PdfPageImage
          src="/pdf-pages/page-46.webp"
          alt="Galaxy F Series Wave Patterns Slide 46"
          pageNumber={46}
          onClick={() => onOpenSlide('/pdf-pages/page-46.webp', 'F Series Wave Patterns', 46)}
        />
        <PdfPageImage
          src="/pdf-pages/page-47.webp"
          alt="Galaxy F Series Moodboard Slide 47"
          pageNumber={47}
          onClick={() => onOpenSlide('/pdf-pages/page-47.webp', 'F Series Moodboard', 47)}
        />
      </section>

      {/* 7. FINAL COLOR CANDIDATES SLIDE 48 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-48.webp"
          alt="2026 Galaxy M / F Color Candidates Matrix Slide 48"
          pageNumber={48}
          onClick={() => onOpenSlide('/pdf-pages/page-48.webp', 'Final Color Candidates Matrix', 48)}
        />
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
