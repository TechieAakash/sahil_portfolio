import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PROJECTS_OVERVIEW } from '../data/portfolioData';

interface NavbarProps {
  currentView: string; // 'home' | 'makaan' | 'sneaker-care' | 'galaxy-cmf'
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? 'bg-[#FAF8F5]/85 backdrop-blur-md border-b border-stone-200/70 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-none"
        >
          <span className="font-bold text-base md:text-lg tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors uppercase">
            Sahil Husain
          </span>
          <span className="hidden sm:inline-block ml-3 font-mono text-[11px] text-stone-500 tracking-widest uppercase">
            / Design Portfolio
          </span>
        </button>

        {/* Center/Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-stone-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-stone-950 ${
              currentView === 'home' ? 'text-stone-950 font-semibold underline underline-offset-8' : ''
            }`}
          >
            Work
          </button>

          {/* Projects Quick Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              className={`flex items-center gap-1.5 transition-colors hover:text-stone-950 ${
                currentView !== 'home' ? 'text-stone-950 font-semibold' : ''
              }`}
            >
              <span>Case Studies</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {projectsDropdownOpen && (
              <div
                onMouseLeave={() => setProjectsDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-64 p-2 bg-white/95 backdrop-blur-md rounded-xl border border-stone-200 shadow-xl z-50 flex flex-col gap-1"
              >
                {PROJECTS_OVERVIEW.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleNavClick(project.id)}
                    className={`px-3 py-2 rounded-lg text-left transition-all text-xs font-mono flex items-center justify-between ${
                      currentView === project.id
                        ? 'bg-stone-100 text-stone-900 font-bold'
                        : 'hover:bg-stone-50 text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <span>
                      {project.number} {project.projectName}
                    </span>
                    <span className="text-[10px] text-stone-400">
                      {project.client}
                    </span>
                  </button>
                ))}
              </div>
            )}
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
              }
            }}
            className="transition-colors hover:text-stone-950"
          >
            About
          </button>

          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3.5 py-1.5 rounded-full border border-stone-300 hover:border-stone-800 transition-colors text-stone-800"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-200/60 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 border-b border-stone-200 px-6 py-6 shadow-xl backdrop-blur-lg">
          <div className="flex flex-col gap-4 font-mono text-sm tracking-wider uppercase text-stone-800">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-stone-200/60"
            >
              Overview / Work
            </button>

            <div className="py-2 border-b border-stone-200/60">
              <span className="text-[11px] text-stone-400 block mb-2">Projects:</span>
              <div className="flex flex-col gap-2 pl-2">
                {PROJECTS_OVERVIEW.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleNavClick(project.id)}
                    className="text-left text-xs py-1 hover:text-stone-950 text-stone-600"
                  >
                    {project.number} — {project.projectName} ({project.title})
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
              className="text-left py-2 border-b border-stone-200/60"
            >
              About / Meet Sahil
            </button>

            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 text-stone-900 font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
