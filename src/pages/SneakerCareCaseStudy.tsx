import React from 'react';
import { SNEAKER_CARE_DATA } from '../data/portfolioData';
import { SectionLabel } from '../components/SectionLabel';
import { PdfPageImage } from '../components/PdfPageImage';
import { ProjectNavigation } from '../components/ProjectNavigation';
import { SneakerMaterialGuide } from '../components/SneakerMaterialGuide';
import { TrendingUp, Users, AlertTriangle, ShieldCheck, Check, Sparkles, ArrowRight, Layers } from 'lucide-react';

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
            {SNEAKER_CARE_DATA.title}
          </h2>
          <p className="text-lg md:text-xl text-stone-900 font-medium pt-2">
            {SNEAKER_CARE_DATA.headline}
          </p>
          <p className="text-base text-stone-600 leading-relaxed">
            {SNEAKER_CARE_DATA.narrative}
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

        {/* Hero Slides (Pages 17 & 18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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

      {/* 2. MARKET METRICS & DRIVERS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Market Landscape" number="02.1" title="India Sneaker Market Trajectory" />

        {/* Large Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          <div className="p-8 rounded-2xl bg-stone-900 text-white shadow-xl flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-wider">
              Year 2026 Valuation
            </span>
            <div className="my-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-white">
                {SNEAKER_CARE_DATA.market.val2026}
              </span>
            </div>
            <span className="font-mono text-xs text-emerald-400">
              Projected Indian Market
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-stone-900 text-white shadow-xl flex flex-col justify-between">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-wider">
              Year 2030 Valuation
            </span>
            <div className="my-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-white">
                {SNEAKER_CARE_DATA.market.val2030}
              </span>
            </div>
            <span className="font-mono text-xs text-emerald-400">
              Substantial Expansion
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-[#385A2E] text-white shadow-xl flex flex-col justify-between">
            <span className="font-mono text-xs text-emerald-200 uppercase tracking-wider">
              Compound Growth
            </span>
            <div className="my-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-white">
                {SNEAKER_CARE_DATA.market.cagr}
              </span>
            </div>
            <span className="font-mono text-xs text-emerald-100">
              CAGR (2026 → 2030)
            </span>
          </div>
        </div>

        {/* Market Drivers & Brands */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#385A2E] font-semibold mb-4">
              Key Market Drivers
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {SNEAKER_CARE_DATA.market.drivers.map((drv) => (
                <div key={drv.title} className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                  <span className="font-bold text-sm text-stone-900 block mb-1">
                    {drv.title}
                  </span>
                  <span className="text-xs text-stone-500 block leading-tight">
                    {drv.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-semibold mb-4">
              Leading Global Footwear Brands
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {SNEAKER_CARE_DATA.market.leadingBrands.map((b) => (
                <div key={b} className="p-4 rounded-lg bg-stone-100 font-bold text-sm text-stone-800 font-mono">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GEN Z SNEAKER CULTURE & LOCAL STARTUPS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Cultural Resonance" number="02.2" title="Status, Identity &amp; Culture" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200">
              <span className="font-mono text-xs uppercase tracking-widest text-[#385A2E] font-semibold block mb-2">
                Cultural Evolution
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 tracking-tight mb-2">
                {SNEAKER_CARE_DATA.culture.consumerLifestyle.statement}
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {SNEAKER_CARE_DATA.culture.consumerLifestyle.traits.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-white text-xs font-mono text-stone-700 border border-stone-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <strong className="block text-stone-900 mb-1 font-mono uppercase">
                  Sneakers as Traceable Assets
                </strong>
                <p>{SNEAKER_CARE_DATA.culture.consumerLifestyle.traceableAssets}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <strong className="block text-stone-900 mb-1 font-mono uppercase">
                  Digital Sneaker Communities
                </strong>
                <p>{SNEAKER_CARE_DATA.culture.consumerLifestyle.onlineCommunity}</p>
              </div>
            </div>

            {/* Indian D2C Startups */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-3">
                Rise of Homegrown Indian Startups
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SNEAKER_CARE_DATA.culture.startups.map((st) => (
                  <div key={st.name} className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="font-bold text-sm text-stone-900 block">{st.name}</span>
                    <span className="font-mono text-[10px] text-[#385A2E] block uppercase my-0.5">{st.focus}</span>
                    <p className="text-[11px] text-stone-500">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PdfPageImage
              src="/pdf-pages/page-19.webp"
              alt="Emerging Sneaker Culture & Startups Slide 19"
              pageNumber={19}
              onClick={() => onOpenSlide('/pdf-pages/page-19.webp', 'Emerging Sneaker Culture', 19)}
            />
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM: SNEAKER WASHING REMAINS A CHALLENGE */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Problem Space" number="02.3" title="Sneaker Washing Remains a Challenge" />

        <p className="text-stone-700 text-base md:text-lg mb-8 max-w-3xl leading-relaxed">
          {SNEAKER_CARE_DATA.problemSpace.subhead}
        </p>

        {/* Hand Wash vs Machine Wash Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Hand Wash */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold">
                  Home Care 01
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-3">
                {SNEAKER_CARE_DATA.problemSpace.handWash.title}
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {SNEAKER_CARE_DATA.problemSpace.handWash.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 font-mono text-[10px] text-stone-400">
              Laborious &amp; high risk of friction damage
            </div>
          </div>

          {/* Machine Wash */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-semibold">
                  Home Care 02
                </span>
                <AlertTriangle className="w-4 h-4 text-rose-600" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-3">
                {SNEAKER_CARE_DATA.problemSpace.machineWash.title}
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {SNEAKER_CARE_DATA.problemSpace.machineWash.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 font-mono text-[10px] text-stone-400">
              Lack of material awareness &amp; cycle safety
            </div>
          </div>

          {/* Sneaker Services */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-indigo-700 font-semibold">
                  Third-Party Services
                </span>
                <Users className="w-4 h-4 text-indigo-600" />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-3">
                {SNEAKER_CARE_DATA.problemSpace.specialisedEmergence.services.title}
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                {SNEAKER_CARE_DATA.problemSpace.specialisedEmergence.services.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 font-mono text-[10px] text-stone-400">
              Recurring cost ($3–$7 / pair) &amp; transit delays
            </div>
          </div>
        </div>

        <PdfPageImage
          src="/pdf-pages/page-20.webp"
          alt="Sneaker Washing Challenges Slide 20"
          pageNumber={20}
          onClick={() => onOpenSlide('/pdf-pages/page-20.webp', 'Sneaker Washing Challenges', 20)}
        />
      </section>

      {/* 5. NEW CYCLE PROPOSAL: SPECIALISED SNEAKER WASH */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Design Proposal" number="02.4" title="Specialised Sneaker Wash Cycle" />

        {/* Core Opportunity Card */}
        <div className="p-8 md:p-10 rounded-2xl bg-stone-900 text-white shadow-xl my-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
            The Innovation Opportunity
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            “{SNEAKER_CARE_DATA.proposal.coreInsight}”
          </h3>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-3xl">
            {SNEAKER_CARE_DATA.proposal.bridgeNarrative}
          </p>
        </div>

        {/* 5 Proposal Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
          {SNEAKER_CARE_DATA.proposal.features.map((feat) => (
            <div key={feat.num} className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#385A2E] font-bold block mb-1">
                  {feat.num}
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Material Guide Simulator */}
        <SneakerMaterialGuide />

        <PdfPageImage
          src="/pdf-pages/page-21.webp"
          alt="New Cycle Proposal Slide 21"
          pageNumber={21}
          onClick={() => onOpenSlide('/pdf-pages/page-21.webp', 'Cycle Proposal', 21)}
        />
      </section>

      {/* 6. WIREFRAMES & PRODUCTION SCREENS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="UI / Interaction Design" number="02.5" title="Connected Sneaker Care UI" />

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">
            5 Stages of the Mobile Experience
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
            {SNEAKER_CARE_DATA.wireframes.stages.map((st) => (
              <div key={st.num} className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                <span className="block font-bold text-stone-900 mb-0.5">
                  0{st.num}. {st.title}
                </span>
                <span className="text-[10px] text-stone-500 block leading-tight">
                  {st.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Low Fidelity Wireframes Slide 22 */}
        <div className="my-10">
          <PdfPageImage
            src="/pdf-pages/page-22.webp"
            alt="Low Fidelity Wireframes Slide 22"
            pageNumber={22}
            onClick={() => onOpenSlide('/pdf-pages/page-22.webp', 'Sneaker Care Wireframes', 22)}
          />
        </div>

        {/* High Fidelity UI Mockups Slide 23 */}
        <div className="my-10">
          <PdfPageImage
            src="/pdf-pages/page-23.webp"
            alt="High Fidelity Sneaker Care Screens Slide 23"
            pageNumber={23}
            onClick={() => onOpenSlide('/pdf-pages/page-23.webp', 'High Fidelity Sneaker Care UI', 23)}
          />
        </div>
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
