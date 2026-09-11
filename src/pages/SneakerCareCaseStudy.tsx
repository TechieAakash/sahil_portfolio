import React from 'react';
import { SNEAKER_CARE_DATA } from '../data/portfolioData';
import { PdfPageImage } from '../components/PdfPageImage';
import { ProjectNavigation } from '../components/ProjectNavigation';

interface SneakerCareCaseStudyProps {
  onSelectProject: (projectId: string) => void;
  onGoHome: () => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const SneakerCareCaseStudy: React.FC<SneakerCareCaseStudyProps> = ({
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
          <span className="font-mono text-xs uppercase tracking-widest text-[#385A2E] font-bold">
            Project 02 • Connected Product Experience
          </span>
          <span className="font-mono text-xs text-stone-500 uppercase">
            Samsung Electronics
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-stone-950 tracking-tight uppercase leading-[0.95]">
            Sneaker Care
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-700 font-light">
            Specialized Care Experience
          </h2>
          <p className="text-lg md:text-xl text-stone-900 font-medium pt-2">
            Rising Sneaker-Head culture in India
          </p>
          <p className="text-base text-stone-600 leading-relaxed">
            For Indian Gen-Z sneakers are emerging as a platform for self expression and fashion driving sneaker sales massively among the cohort.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {SNEAKER_CARE_DATA.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="font-mono text-xs text-stone-500">
            Cohort: Indian Gen Z (13 to 28 yrs)
          </div>
        </div>

        {/* Hero Slides in Vertical Line Sequence (Not in a pair) */}
        <div className="space-y-10 mt-12">
          <PdfPageImage
            src="/pdf-pages/page-17.webp"
            alt="Specialized Care Experience Cover Slide 17"
            pageNumber={17}
            onClick={() => onOpenSlide('/pdf-pages/page-17.webp', 'Specialized Care Experience Title', 17)}
            priority
          />
          <PdfPageImage
            src="/pdf-pages/page-18.webp"
            alt="Sneaker Care Context Slide 18"
            pageNumber={18}
            onClick={() => onOpenSlide('/pdf-pages/page-18.webp', 'Sneaker Care Culture Context', 18)}
            priority
          />
        </div>
      </section>

      {/* 2. CULTURAL RESONANCE SLIDE 19 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-19.webp"
          alt="Emerging Sneaker Culture & Startups Slide 19"
          pageNumber={19}
          onClick={() => onOpenSlide('/pdf-pages/page-19.webp', 'Emerging Sneaker Culture', 19)}
        />
      </section>

      {/* 3. PROBLEM SPACE SLIDE 20 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-20.webp"
          alt="Sneaker Washing Challenges Slide 20"
          pageNumber={20}
          onClick={() => onOpenSlide('/pdf-pages/page-20.webp', 'Sneaker Washing Challenges', 20)}
        />
      </section>

      {/* 4. DESIGN PROPOSAL SLIDE 21 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-21.webp"
          alt="New Cycle Proposal Slide 21"
          pageNumber={21}
          onClick={() => onOpenSlide('/pdf-pages/page-21.webp', 'Cycle Proposal', 21)}
        />
      </section>

      {/* 5. WIREFRAMES & PRODUCTION SCREENS SLIDES 22 & 23 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
        <PdfPageImage
          src="/pdf-pages/page-22.webp"
          alt="Low Fidelity Wireframes Slide 22"
          pageNumber={22}
          onClick={() => onOpenSlide('/pdf-pages/page-22.webp', 'Sneaker Care Wireframes', 22)}
        />
        <PdfPageImage
          src="/pdf-pages/page-23.webp"
          alt="High Fidelity Sneaker Care Screens Slide 23"
          pageNumber={23}
          onClick={() => onOpenSlide('/pdf-pages/page-23.webp', 'High Fidelity Sneaker Care UI', 23)}
        />
      </section>

      {/* Project Navigation Footer */}
      <ProjectNavigation
        currentProjectId="sneaker-care"
        onSelectProject={onSelectProject}
        onGoHome={onGoHome}
      />
    </div>
  );
};
