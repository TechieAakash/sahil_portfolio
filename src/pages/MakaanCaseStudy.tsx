import React from 'react';
import { MAKAAN_DATA } from '../data/portfolioData';
import { SectionLabel } from '../components/SectionLabel';
import { PdfPageImage } from '../components/PdfPageImage';
import { QuoteBlock } from '../components/QuoteBlock';
import { ProjectNavigation } from '../components/ProjectNavigation';
import { MakaanSimulator } from '../components/MakaanSimulator';
import { ArrowRight, CheckCircle, Sparkles, MapPin, Compass, ShieldAlert, Cpu, HeartHandshake, Eye } from 'lucide-react';

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
        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C253B] font-bold">
            Project 01 • Samsung ICXT
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
            {MAKAAN_DATA.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="font-mono text-xs text-stone-500">
            Shift: Controlling Appliances → Expressing Intentions
          </div>
        </div>

        {/* Hero Slides (Pages 4 & 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <PdfPageImage
            src="/pdf-pages/page-04.webp"
            alt="Future of Connected Living Title Slide"
            pageNumber={4}
            caption="Presentation Title Slide — Experience design | Product experience innovation | AI interaction design"
            onClick={() => onOpenSlide('/pdf-pages/page-04.webp', 'Project Makaan Title', 4)}
            priority
          />
          <PdfPageImage
            src="/pdf-pages/page-05.webp"
            alt="Project Makaan Vision"
            pageNumber={5}
            caption="Core Vision Slide — What if your home understood what you need before you navigate through interfaces?"
            onClick={() => onOpenSlide('/pdf-pages/page-05.webp', 'Project Makaan Core Vision', 5)}
            priority
          />
        </div>
      </section>

      {/* 2. CONTEXT: HOME AS AN INTELLIGENT COMPANION */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Context" number="01.1" title="Home as an Intelligent Companion" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-8">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg text-stone-800 leading-relaxed font-normal">
              {MAKAAN_DATA.context.narrative}
            </p>

            {/* Evolution 3-Step Timeline */}
            <div className="space-y-4 pt-4">
              {MAKAAN_DATA.context.evolution.map((stage) => (
                <div
                  key={stage.step}
                  className={`p-4 rounded-xl border transition-all ${
                    stage.active
                      ? 'bg-stone-900 text-white border-stone-900 shadow-lg'
                      : 'bg-white text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs tracking-widest uppercase opacity-70">
                      Phase {stage.step}
                    </span>
                    {stage.active && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-300">
                        Future Target
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base">{stage.name}</h3>
                  <p className="text-xs mt-1 opacity-80 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <PdfPageImage
              src="/pdf-pages/page-06.webp"
              alt="Home as an Intelligent Companion Architecture"
              pageNumber={6}
              caption="Original Slide 06 — Responsive environment architecture diagram"
              onClick={() => onOpenSlide('/pdf-pages/page-06.webp', 'Context Diagram', 6)}
            />
          </div>
        </div>
      </section>

      {/* 3. RESEARCH METHODOLOGY & REGIONAL DIVERSITY */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Research Methodology" number="01.2" title="Multi-Zone Home Immersions" />

        <div className="bg-stone-100/90 rounded-2xl p-6 md:p-8 border border-stone-200 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-2">
            Research Objective
          </span>
          <p className="text-xl md:text-2xl font-bold text-stone-900 leading-snug">
            “{MAKAAN_DATA.researchMethodology.goal}”
          </p>
          <span className="block font-mono text-xs text-stone-500 mt-2">
            Data Source: {MAKAAN_DATA.researchMethodology.source}
          </span>
        </div>

        {/* Cohorts & Geographic Zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {MAKAAN_DATA.researchMethodology.cohorts.map((cohort) => (
            <div key={cohort.name} className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C253B] font-semibold block mb-1">
                Study Cohort
              </span>
              <h3 className="text-base font-bold text-stone-900 mb-1">
                {cohort.name}
              </h3>
              <span className="text-xs font-mono text-stone-500 block mb-2">
                [{cohort.label}]
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                {cohort.desc}
              </p>
            </div>
          ))}
        </div>

        {/* India Map & Typologies Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <PdfPageImage
              src="/pdf-pages/page-07.webp"
              alt="India Research Immersion Map and Housing Typologies"
              pageNumber={7}
              caption="Slide 07 — 5 Immersion Zones (Delhi, Guwahati, Hyderabad, Indore, Mumbai) and housing typologies"
              onClick={() => onOpenSlide('/pdf-pages/page-07.webp', 'Research Immersion Map', 7)}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-mono uppercase tracking-wider mb-3">
                5 Immersed Indian Cities
              </h4>
              <div className="space-y-2">
                {MAKAAN_DATA.researchMethodology.geographicZones.map((zone) => (
                  <div key={zone.city} className="flex items-center justify-between p-2.5 rounded bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#8C253B]" />
                      {zone.city}
                    </span>
                    <span className="font-mono text-stone-500">{zone.zone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-stone-900 text-sm font-mono uppercase tracking-wider mb-3">
                Housing Typologies
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {MAKAAN_DATA.researchMethodology.housingTypes.map((ht) => (
                  <div key={ht.type} className="p-3 rounded bg-white border border-stone-200 text-center">
                    <span className="block text-xs font-semibold text-stone-900">{ht.type}</span>
                    <span className="block font-mono text-[10px] text-stone-500 mt-1">{ht.ownership}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-stone-900 text-sm font-mono uppercase tracking-wider mb-2">
                Research Toolkit
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {MAKAAN_DATA.researchMethodology.toolsUsed.map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded bg-stone-200/80 text-stone-700 text-xs font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESEARCH GUIDE & ASSUMPTIONS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Field Research" number="01.3" title="Research Guide & Discussion Parameters" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8C253B] font-semibold block mb-3">
                Discussion Parameters
              </span>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {MAKAAN_DATA.researchGuide.discussionParameters.map((param, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C253B] mt-1.5 shrink-0" />
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-3">
                Hypotheses &amp; Assumptions
              </span>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {MAKAAN_DATA.researchGuide.assumptions.map((assump, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                    <span>{assump}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <PdfPageImage
              src="/pdf-pages/page-08.webp"
              alt="Research Guide and Photo Elicitation Field Photos"
              pageNumber={8}
              caption="Slide 08 — Photo elicitation & home immersion documentary in Indian households"
              onClick={() => onOpenSlide('/pdf-pages/page-08.webp', 'Field Photo Elicitation', 8)}
            />
          </div>
        </div>
      </section>

      {/* 5. AFFINITY MAPPING, PAIN POINTS & USER VERBATIMS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Synthesis" number="01.4" title="Affinity Mapping & User Verbatims" />

        {/* Concentric Pain Points Banner */}
        <div className="my-8 p-6 md:p-8 rounded-2xl bg-rose-950/90 text-white border border-rose-900/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rose-300 block mb-1">
              Affinity Mapping Verdict
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {MAKAAN_DATA.affinityMapping.verdict}
            </h3>
            <p className="text-rose-200 text-xs md:text-sm mt-1 max-w-xl">
              Opportunity: {MAKAAN_DATA.affinityMapping.opportunity}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {MAKAAN_DATA.affinityMapping.themes.map((theme) => (
              <span
                key={theme.label}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10"
              >
                {theme.label}
              </span>
            ))}
          </div>
        </div>

        {/* Slide 09 Graphic + Quotes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <PdfPageImage
              src="/pdf-pages/page-09.webp"
              alt="Affinity Mapping concentric circle diagram"
              pageNumber={9}
              caption="Slide 09 — Pain point hierarchy & user verbatim mapping"
              onClick={() => onOpenSlide('/pdf-pages/page-09.webp', 'Pain Point Hierarchy', 9)}
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
              Lived Domestic Realities (Direct User Verbatims)
            </h4>
            {MAKAAN_DATA.affinityMapping.verbatims.map((vb, idx) => (
              <QuoteBlock
                key={idx}
                quote={vb.quote}
                tag={vb.tag}
                authorOrContext="Immersion Participant"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. USER JOURNEY: FRICTION TIMELINE */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Journey Analysis" number="01.5" title="A Simple Need Becomes a Complex Task" />

        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
            Scenario Tested
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-stone-900">
            {MAKAAN_DATA.userJourney.scenario}
          </h3>
        </div>

        {/* Mobile Vertical Timeline (Section 16 Requirement) */}
        <div className="my-8 block md:hidden space-y-2.5">
          {MAKAAN_DATA.userJourney.steps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {step.num}
              </div>
              <div className="flex-1">
                <span className="block font-bold text-xs text-stone-900 leading-tight">
                  {step.title}
                </span>
                <span className="block text-[11px] text-stone-500 leading-snug mt-0.5">
                  {step.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 9-Step Horizontal Timeline */}
        <div className="my-8 hidden md:block overflow-x-auto pb-4">
          <div className="min-w-[760px] grid grid-cols-9 gap-2">
            {MAKAAN_DATA.userJourney.steps.map((step) => (
              <div
                key={step.num}
                className="p-3.5 rounded-xl bg-white border border-stone-200 text-center flex flex-col justify-between shadow-sm relative group hover:border-[#8C253B] transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono text-xs flex items-center justify-center mx-auto mb-2 font-bold">
                  {step.num}
                </span>
                <span className="block font-bold text-xs text-stone-900 mb-1 leading-tight">
                  {step.title}
                </span>
                <span className="block text-[10px] text-stone-500 leading-snug">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight Highlight */}
        <div className="p-6 md:p-8 rounded-2xl bg-stone-100 border-l-4 border-[#8C253B] my-8">
          <blockquote className="text-xl md:text-2xl font-bold text-stone-900 leading-snug">
            “{MAKAAN_DATA.userJourney.insight}”
          </blockquote>
          <span className="block font-mono text-xs text-stone-500 mt-2 uppercase tracking-wider">
            Key Behavioral Takeaway from Slide 10
          </span>
        </div>

        <PdfPageImage
          src="/pdf-pages/page-10.webp"
          alt="User Journey Slide 10"
          pageNumber={10}
          caption="Slide 10 — Step-by-step user journey showing appliance management friction"
          onClick={() => onOpenSlide('/pdf-pages/page-10.webp', 'User Journey Friction', 10)}
        />
      </section>

      {/* 7. CORE INSIGHT & DESIGN OPPORTUNITY */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Core Insight" number="01.6" title="Interfaces Getting More Complicated" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
              “{MAKAAN_DATA.coreInsight.headline}”
            </h3>

            <p className="text-base text-stone-700 leading-relaxed">
              {MAKAAN_DATA.coreInsight.narrative}
            </p>

            <QuoteBlock
              quote={MAKAAN_DATA.coreInsight.vocQuote}
              tag="Voice of Customer — Delhi User"
              variant="highlight"
            />
          </div>

          <div className="lg:col-span-6">
            <PdfPageImage
              src="/pdf-pages/page-11.webp"
              alt="Core Insight Slide 11"
              pageNumber={11}
              caption="Slide 11 — Core insight on human needs vs application toggles"
              onClick={() => onOpenSlide('/pdf-pages/page-11.webp', 'Core Insight', 11)}
            />
          </div>
        </div>

        {/* Opportunity Card (Slide 12) */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[#8C253B] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-rose-200 block mb-2">
              Design Opportunity
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              {MAKAAN_DATA.coreInsight.designOpportunity}
            </h3>
            <p className="text-rose-100 text-lg font-light">
              “{MAKAAN_DATA.coreInsight.designShift}”
            </p>
          </div>

          <button
            onClick={() => onOpenSlide('/pdf-pages/page-12.webp', 'Design Opportunity Slide', 12)}
            className="px-6 py-3 rounded-full bg-white text-[#8C253B] font-mono text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors shadow-lg self-start md:self-auto shrink-0"
          >
            View Slide 12 Original
          </button>
        </div>
      </section>

      {/* 8. INTRODUCING MAKAAN & 4 PILLARS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Solution" number="01.7" title="Introducing Project Makaan" />

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Intelligent Conversational Layer
          </span>
          <h3 className="text-4xl md:text-6xl font-extrabold text-stone-950 uppercase tracking-tight">
            “MAKAAN”
          </h3>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light">
            {MAKAAN_DATA.solutionPillars.definition}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MAKAAN_DATA.solutionPillars.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-mono text-xs font-bold flex items-center justify-center mb-4">
                0{i + 1}
              </div>
              <div>
                <h4 className="font-extrabold text-stone-900 text-base mb-1 font-mono uppercase tracking-wider">
                  {pillar.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <PdfPageImage
          src="/pdf-pages/page-13.webp"
          alt="Introducing Makaan 4 Pillars Architecture"
          pageNumber={13}
          caption="Slide 13 — Four core intelligence pillars of Makaan"
          onClick={() => onOpenSlide('/pdf-pages/page-13.webp', 'Introducing Makaan Pillars', 13)}
        />
      </section>

      {/* 9. EXPERIENCE FLOW & LIVE SIMULATOR */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Experience Flow" number="01.8" title="From Human Intent to a Smarter Home" />

        <p className="text-stone-700 text-base md:text-lg mb-8 max-w-2xl">
          {MAKAAN_DATA.experienceFlow.headline}. Makaan connects people with their living space through a continuous learning loop.
        </p>

        {/* 6 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {MAKAAN_DATA.experienceFlow.steps.map((st) => (
            <div key={st.step} className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#8C253B] font-bold block mb-1">
                  Step 0{st.step}
                </span>
                <h4 className="font-bold text-sm text-stone-900 mb-2 font-mono uppercase">
                  {st.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              {st.example && (
                <div className="mt-3 pt-3 border-t border-stone-100 font-mono text-[11px] text-stone-500 italic">
                  {st.example}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Experience Flow Simulator */}
        <MakaanSimulator />

        <PdfPageImage
          src="/pdf-pages/page-14.webp"
          alt="Experience Flow 6 Steps Slide 14"
          pageNumber={14}
          caption="Slide 14 — Six-step experience flow with continuous learning feedback loop"
          onClick={() => onOpenSlide('/pdf-pages/page-14.webp', 'Experience Flow', 14)}
        />
      </section>

      {/* 10. WIREFRAMES & HIGH FIDELITY SMARTTHINGS UI */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-b border-stone-200">
        <SectionLabel category="Interaction Design" number="01.9" title="Wireframes &amp; Production UI" />

        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">
            5 Core Interface Touchpoints
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
            {MAKAAN_DATA.wireframes.screens.map((sc) => (
              <div key={sc.num} className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                <span className="block font-bold text-stone-900 mb-0.5">
                  0{sc.num}. {sc.title}
                </span>
                <span className="text-[10px] text-stone-500 block leading-tight">
                  {sc.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Low Fidelity Wireframes Slide 15 */}
        <div className="my-10">
          <PdfPageImage
            src="/pdf-pages/page-15.webp"
            alt="Low Fidelity Wireframes Slide 15"
            pageNumber={15}
            caption="Slide 15 — Low fidelity wireframe hierarchy and screen architecture"
            onClick={() => onOpenSlide('/pdf-pages/page-15.webp', 'Low Fidelity Wireframes', 15)}
          />
        </div>

        {/* High Fidelity UI Screen Slide 16 */}
        <div className="my-10">
          <PdfPageImage
            src="/pdf-pages/page-16.webp"
            alt="High Fidelity UI Screens in SmartThings Slide 16"
            pageNumber={16}
            caption="Slide 16 — High fidelity conversational layer integration within Samsung SmartThings"
            onClick={() => onOpenSlide('/pdf-pages/page-16.webp', 'High Fidelity SmartThings UI', 16)}
          />
        </div>
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
