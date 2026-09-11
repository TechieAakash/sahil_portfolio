import React from 'react';
import { MAKAAN_DATA } from '../data/portfolioData';
import { PdfPageImage } from '../components/PdfPageImage';
import { ProjectNavigation } from '../components/ProjectNavigation';

interface MakaanCaseStudyProps {
  onSelectProject: (projectId: string) => void;
  onGoHome: () => void;
  onOpenSlide: (src: string, title: string, pageNum: number) => void;
}

export const MakaanCaseStudy: React.FC<MakaanCaseStudyProps> = ({
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
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C253B] font-bold">
            Project 01 • Samsung Electronics
          </span>
          <span className="font-mono text-xs text-stone-500 uppercase">
            {MAKAAN_DATA.hashtag}
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-stone-950 tracking-tight uppercase leading-[0.95]">
            Project Makaan
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-700 font-light">
            {MAKAAN_DATA.title}
          </h2>
          <p className="text-lg md:text-xl text-stone-900 font-medium pt-2">
            {MAKAAN_DATA.coreStatement}
          </p>
        </div>

        {/* Categories & Meta */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              'Experience Design',
              'Product Experience Innovation',
              'AI Interaction Design',
              'Service Design',
              'Product Feature Innovation',
              'Connected Product Experience',
            ].map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Slides in Vertical Line Sequence (Not in a pair) */}
        <div className="space-y-10 mt-12">
          <PdfPageImage
            src="/pdf-pages/page-04.webp"
            alt="Future of Connected Living Title Slide"
            pageNumber={4}
            onClick={() => onOpenSlide('/pdf-pages/page-04.webp', 'Project Makaan Title', 4)}
            priority
          />
          <PdfPageImage
            src="/pdf-pages/page-05.webp"
            alt="Project Makaan Vision"
            pageNumber={5}
            onClick={() => onOpenSlide('/pdf-pages/page-05.webp', 'Project Makaan Core Vision', 5)}
            priority
          />
        </div>
      </section>

      {/* 2. CONTEXT SLIDE 06 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-06.webp"
          alt="Home as an Intelligent Companion Architecture Slide 06"
          pageNumber={6}
          onClick={() => onOpenSlide('/pdf-pages/page-06.webp', 'Context Diagram', 6)}
        />
      </section>

      {/* 3. RESEARCH METHODOLOGY SLIDE 07 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-07.webp"
          alt="India Research Immersion Map and Housing Typologies Slide 07"
          pageNumber={7}
          onClick={() => onOpenSlide('/pdf-pages/page-07.webp', 'Research Immersion Map', 7)}
        />
      </section>

      {/* 4. FIELD RESEARCH SLIDE 08 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-08.webp"
          alt="Research Guide and Photo Elicitation Field Photos Slide 08"
          pageNumber={8}
          onClick={() => onOpenSlide('/pdf-pages/page-08.webp', 'Field Photo Elicitation', 8)}
        />
      </section>

      {/* 5. AFFINITY MAPPING SLIDE 09 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-09.webp"
          alt="Affinity Mapping concentric circle diagram Slide 09"
          pageNumber={9}
          onClick={() => onOpenSlide('/pdf-pages/page-09.webp', 'Pain Point Hierarchy', 9)}
        />
      </section>

      {/* 6. USER JOURNEY SLIDE 10 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-10.webp"
          alt="User Journey Friction Timeline Slide 10"
          pageNumber={10}
          onClick={() => onOpenSlide('/pdf-pages/page-10.webp', 'User Journey Friction', 10)}
        />
      </section>

      {/* 7. CORE INSIGHT SLIDES 11 & 12 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
        <PdfPageImage
          src="/pdf-pages/page-11.webp"
          alt="Core Insight Interfaces Getting More Complicated Slide 11"
          pageNumber={11}
          onClick={() => onOpenSlide('/pdf-pages/page-11.webp', 'Core Insight', 11)}
        />
        <PdfPageImage
          src="/pdf-pages/page-12.webp"
          alt="Design Opportunity Slide 12"
          pageNumber={12}
          onClick={() => onOpenSlide('/pdf-pages/page-12.webp', 'Design Opportunity Slide', 12)}
        />
      </section>

      {/* 8. SOLUTION PILLARS SLIDE 13 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-13.webp"
          alt="Introducing Makaan 4 Pillars Architecture Slide 13"
          pageNumber={13}
          onClick={() => onOpenSlide('/pdf-pages/page-13.webp', 'Introducing Makaan Pillars', 13)}
        />
      </section>

      {/* 9. EXPERIENCE FLOW SLIDE 14 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <PdfPageImage
          src="/pdf-pages/page-14.webp"
          alt="Experience Flow 6 Steps Slide 14"
          pageNumber={14}
          onClick={() => onOpenSlide('/pdf-pages/page-14.webp', 'Experience Flow', 14)}
        />
      </section>

      {/* 10. WIREFRAMES & PRODUCTION UI SLIDES 15 & 16 */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200 space-y-10">
        <PdfPageImage
          src="/pdf-pages/page-15.webp"
          alt="Low Fidelity Wireframes Slide 15"
          pageNumber={15}
          onClick={() => onOpenSlide('/pdf-pages/page-15.webp', 'Low Fidelity Wireframes', 15)}
        />
        <PdfPageImage
          src="/pdf-pages/page-16.webp"
          alt="High Fidelity UI Screens in SmartThings Slide 16"
          pageNumber={16}
          onClick={() => onOpenSlide('/pdf-pages/page-16.webp', 'High Fidelity SmartThings UI', 16)}
        />
      </section>

      {/* 11. FINAL STATEMENT */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-stone-950 text-white shadow-2xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-rose-400">
            {MAKAAN_DATA.hashtag}
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            “{MAKAAN_DATA.finalStatement}”
          </h3>
          <p className="text-stone-400 text-sm font-mono uppercase tracking-wider pt-2">
            Samsung Experience Design Collaboration • Sahil Husain
          </p>
        </div>
      </section>

      {/* Project Navigation Footer */}
      <ProjectNavigation
        currentProjectId="makaan"
        onSelectProject={onSelectProject}
        onGoHome={onGoHome}
      />
    </div>
  );
};
