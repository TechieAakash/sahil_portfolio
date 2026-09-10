import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox, LightboxItem } from './components/Lightbox';
import { Home } from './pages/Home';
import { MakaanCaseStudy } from './pages/MakaanCaseStudy';
import { SneakerCareCaseStudy } from './pages/SneakerCareCaseStudy';
import { GalaxyCmfCaseStudy } from './pages/GalaxyCmfCaseStudy';

// Pre-build array of all 49 PDF slides for seamless Lightbox browsing
const ALL_SLIDES: LightboxItem[] = Array.from({ length: 49 }, (_, i) => {
  const page = i + 1;
  let title = `Portfolio Page ${page}`;

  if (page === 1) title = 'Hello ! Design Portfolio (Sahil Husain, New Delhi)';
  else if (page === 2) title = 'Meet Sahil (M.Des NID, B.Des NIFT)';
  else if (page === 3) title = 'Contents / Projects Overview';
  else if (page === 4) title = '01 — Future of Connected Living (Samsung ICXT)';
  else if (page === 5) title = 'Project Makaan (#HarGharKuchKehtaHai)';
  else if (page === 6) title = 'Context: Home as an Intelligent Companion';
  else if (page === 7) title = 'Research Methodology: 5 Zones of India & Housing Types';
  else if (page === 8) title = 'Research Guide & Photo Elicitation';
  else if (page === 9) title = 'Affinity Mapping & User Verbatims';
  else if (page === 10) title = 'User Journey: A Simple Need Becomes a Complex Task';
  else if (page === 11) title = 'Core Insight: Ecosystems Smarter, Interfaces Complicated';
  else if (page === 12) title = 'Design Opportunity: What if the Home Understood Intentions?';
  else if (page === 13) title = 'Introducing Makaan: 4 Core Intelligence Pillars';
  else if (page === 14) title = 'Experience Flow: 6 Step Intent Cycle & Learning Loop';
  else if (page === 15) title = 'Low Fidelity Wireframes: 5 Screen Architectures';
  else if (page === 16) title = 'High Fidelity Mockups within Samsung SmartThings';
  else if (page === 17) title = '02 — Specialized Care Experience (Samsung)';
  else if (page === 18) title = 'Sneaker Care: Rising Sneaker-Head Culture in India';
  else if (page === 19) title = 'India Sneaker Market ($4.5B) & Local Startup Ecosystem';
  else if (page === 20) title = 'The Problem: Sneaker Washing Remains a Challenge';
  else if (page === 21) title = 'Proposal: Specialised Sneaker Wash Cycle';
  else if (page === 22) title = 'Sneaker Care: Low Fidelity Wireframes';
  else if (page === 23) title = 'Sneaker Care: High Fidelity Production Mockups';
  else if (page === 24) title = '03 — Trends Forecast for Galaxy (2026 CMF Design)';
  else if (page === 25) title = '2026 CMF Design for Galaxy A Series';
  else if (page === 26) title = 'Smartphone Market Scenario & SKU Price Bands';
  else if (page === 27) title = 'Consumer Segments: A Series vs M & F Series';
  else if (page === 28) title = 'Consumer Sentiment 2026: Expressive & Soothing Realities';
  else if (page === 29) title = 'Global Consumer Drivers: Exploring Joy through Comfort';
  else if (page === 30) title = 'CMF Concept: Gently Pleasant';
  else if (page === 31) title = 'Galaxy A Series Color Proposal (A57, A37, A27)';
  else if (page === 32) title = 'Dark Core: Classic Darks & Navy Pantone Codes';
  else if (page === 33) title = 'Light Neutral: Silverine Greys Pantone Codes';
  else if (page === 34) title = 'Trend A Cool: Renew Blues Pantone Codes';
  else if (page === 35) title = 'Trend B Warm: Radiant Warms Pantone Codes';
  else if (page === 36) title = 'Galaxy A Series Master Color Matrix (NDA Notice)';
  else if (page === 37) title = '2026 CMF Design for Galaxy M & F Series';
  else if (page === 38) title = 'SWA Consumer Drivers: Cultural Belonging & Emotion';
  else if (page === 39) title = 'SWA Lifestyle: A New Identity is Emerging';
  else if (page === 40) title = 'CMF Concept: Uplifted Brilliance';
  else if (page === 41) title = 'CMF Impression: Layered Visual Tactility & Immersive Harmony';
  else if (page === 42) title = 'Galaxy M Series: Lively Luxe Concept';
  else if (page === 43) title = 'Galaxy M Series: Linear Patterns Study';
  else if (page === 44) title = 'Galaxy M Series: Moodboard & Color Palette';
  else if (page === 45) title = 'Galaxy F Series: Radiant Flair Concept';
  else if (page === 46) title = 'Galaxy F Series: Wave Patterns Study';
  else if (page === 47) title = 'Galaxy F Series: Moodboard & Dynamic Palette';
  else if (page === 48) title = '2026 Galaxy M / F Color Candidates Master Matrix';
  else if (page === 49) title = 'Portfolio Conclusion';

  return {
    src: `/pdf-pages/page-${String(page).padStart(2, '0')}.webp`,
    title,
    pageNumber: page,
    caption: `SAHIL HUSAIN DESIGN PORTFOLIO 2026 — SLIDE ${page} OF 49`
  };
});

export function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Sync with window.location.hash for shareable links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['makaan', 'sneaker-care', 'galaxy-cmf'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSlide = (_src: string, _title: string, pageNum: number) => {
    const targetIdx = pageNum >= 1 && pageNum <= 49 ? pageNum - 1 : 0;
    setLightboxIndex(targetIdx);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-stone-900 selection:bg-stone-900 selection:text-white relative">
      {/* Subtle Architectural Botanical Bas-Relief Tile Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-repeat opacity-[0.075] mix-blend-multiply transition-opacity duration-300"
        style={{
          backgroundImage: "url('/textures/botanical-tiles.webp')",
          backgroundSize: "680px auto",
        }}
        aria-hidden="true"
      />
      {/* Subtle radial softening for harmonious reading comfort */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 25%, transparent 40%, rgba(247, 244, 238, 0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Editorial Navigation */}
      <div className="relative z-40">
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Main View Container */}
      <main className="flex-grow relative z-10">
        {currentView === 'home' && (
          <Home
            onSelectProject={handleNavigate}
            onOpenSlide={handleOpenSlide}
          />
        )}

        {currentView === 'makaan' && (
          <MakaanCaseStudy
            onSelectProject={handleNavigate}
            onGoHome={() => handleNavigate('home')}
            onOpenSlide={handleOpenSlide}
          />
        )}

        {currentView === 'sneaker-care' && (
          <SneakerCareCaseStudy
            onSelectProject={handleNavigate}
            onGoHome={() => handleNavigate('home')}
            onOpenSlide={handleOpenSlide}
          />
        )}

        {currentView === 'galaxy-cmf' && (
          <GalaxyCmfCaseStudy
            onSelectProject={handleNavigate}
            onGoHome={() => handleNavigate('home')}
            onOpenSlide={handleOpenSlide}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Full-Screen PDF Slide Lightbox with Arrow & Esc controls */}
      <Lightbox
        isOpen={lightboxOpen}
        items={ALL_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}

export default App;
