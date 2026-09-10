import React from 'react';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { PROJECTS_OVERVIEW } from '../data/portfolioData';

interface ProjectNavigationProps {
  currentProjectId: string;
  onSelectProject: (id: string) => void;
  onGoHome: () => void;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProjectId,
  onSelectProject,
  onGoHome,
}) => {
  const currentIndex = PROJECTS_OVERVIEW.findIndex((p) => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? PROJECTS_OVERVIEW[currentIndex - 1] : PROJECTS_OVERVIEW[PROJECTS_OVERVIEW.length - 1];
  const nextProject = currentIndex < PROJECTS_OVERVIEW.length - 1 ? PROJECTS_OVERVIEW[currentIndex + 1] : PROJECTS_OVERVIEW[0];

  return (
    <nav aria-label="Project pagination" className="border-t border-stone-200/80 bg-stone-100/50 py-12 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Previous Project */}
        <button
          onClick={() => onSelectProject(prevProject.id)}
          className="group flex items-center gap-4 text-left w-full md:w-auto p-4 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-stone-200"
        >
          <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-mono text-[11px] text-stone-500 tracking-widest uppercase">
              Previous ({prevProject.number})
            </span>
            <span className="font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">
              {prevProject.projectName}
            </span>
          </div>
        </button>

        {/* Overview Button */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-mono uppercase tracking-widest hover:border-stone-400 hover:text-stone-900 transition-all shadow-sm"
        >
          <Grid className="w-4 h-4" />
          <span>All Projects</span>
        </button>

        {/* Next Project */}
        <button
          onClick={() => onSelectProject(nextProject.id)}
          className="group flex items-center justify-end gap-4 text-right w-full md:w-auto p-4 rounded-xl hover:bg-white/80 transition-all border border-transparent hover:border-stone-200"
        >
          <div>
            <span className="block font-mono text-[11px] text-stone-500 tracking-widest uppercase">
              Next ({nextProject.number})
            </span>
            <span className="font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">
              {nextProject.projectName}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </nav>
  );
};
