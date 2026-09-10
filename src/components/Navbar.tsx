import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { PROJECTS_OVERVIEW } from '../data/portfolioData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-2xl border-b border-black/[0.06] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xl py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Apple-style Minimal Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-bold text-sm md:text-base tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
            Sahil Husain
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[10px] font-mono text-[#86868B] tracking-wider uppercase">
            Design
          </span>
        </button>

        {/* Center/Right: Apple-style Translucent Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/[0.05] text-xs font-medium text-[#515154]">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              currentView === 'home'
                ? 'bg-white text-black font-semibold shadow-sm border border-black/[0.06]'
                : 'hover:text-black hover:bg-white/60'
            }`}
          >
            Overview
          </button>

          {/* Project Direct Buttons */}
          <button
            onClick={() => handleNavClick('makaan')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              currentView === 'makaan'
                ? 'bg-white text-black font-semibold shadow-sm border border-black/[0.06]'
                : 'hover:text-black hover:bg-white/60'
            }`}
          >
            01 Makaan
          </button>

          <button
            onClick={() => handleNavClick('sneaker-care')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              currentView === 'sneaker-care'
                ? 'bg-white text-black font-semibold shadow-sm border border-black/[0.06]'
                : 'hover:text-black hover:bg-white/60'
            }`}
          >
            02 Sneaker Care
          </button>

          <button
            onClick={() => handleNavClick('galaxy-cmf')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              currentView === 'galaxy-cmf'
                ? 'bg-white text-black font-semibold shadow-sm border border-black/[0.06]'
                : 'hover:text-black hover:bg-white/60'
            }`}
          >
            03 Galaxy CMF
          </button>

          <button
            onClick={() => {
              if (currentView !== 'home') {
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-3.5 py-1.5 rounded-full transition-all duration-200 hover:text-black hover:bg-white/60"
          >
            About
          </button>
        </nav>

        {/* Right CTA / Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-1.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white text-xs font-medium transition-all shadow-sm hover:shadow"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-full hover:bg-black/[0.05] text-[#1D1D1F] focus:outline-none transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glassmorphic Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#1D1D1F]">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                currentView === 'home' ? 'bg-black/[0.05] font-semibold' : ''
              }`}
            >
              Overview
            </button>

            <div className="py-2 border-y border-black/[0.06] my-1">
              <span className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider block px-3 mb-2">
                Case Studies
              </span>
              <div className="flex flex-col gap-1">
                {PROJECTS_OVERVIEW.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleNavClick(project.id)}
                    className={`text-left text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      currentView === project.id ? 'bg-black/[0.06] font-semibold text-black' : 'text-[#515154] hover:bg-black/[0.03]'
                    }`}
                  >
                    <span>{project.number} {project.projectName}</span>
                    <span className="text-[10px] font-mono text-[#86868B]">{project.client}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (currentView !== 'home') {
                  handleNavClick('home');
                  setTimeout(() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.04]"
            >
              About Sahil
            </button>

            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="text-left py-2.5 px-3 rounded-lg bg-[#1D1D1F] text-white font-semibold text-center mt-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
