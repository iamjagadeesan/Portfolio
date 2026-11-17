import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory, RoutePath } from '../types/portfolio';
import { ResilientImage } from '../components/ui/ResilientImage';
import { ProjectMockupFallback } from '../components/ui/FallbackArtwork';
import { EASE_OUT_EXPO, FadeInMount } from '../components/ui/MotionPrimitives';

interface WorkPageProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
  onNavigate: (path: RoutePath) => void;
}

const FILTER_OPTIONS: Array<{ id: ProjectCategory; label: string }> = [
  { id: 'all', label: `All Projects (${PROJECTS.length})` },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'b2b', label: 'B2B & Enterprise' },
  { id: 'fullstack', label: 'Full Stack Architecture' },
];

export const WorkPage: React.FC<WorkPageProps> = ({
  activeFilter,
  onFilterChange,
  onNavigate,
}) => {
  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-neutral-950 transition-colors"
          >
            Home
          </a>
          <span className="text-neutral-400" aria-hidden="true">
            /
          </span>
          <span className="text-neutral-900">Explore My Work</span>
        </nav>
      </div>

      {/* Hero & Filter Bar */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-6 pb-10">
        <FadeInMount className="max-w-[820px] mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111215] tracking-tight leading-[1.12]">
            Explore My Work —{' '}
            <span className="gold-gradient-text">Case Studies &amp;</span>{' '}
            Engineering Architecture.
          </h1>

          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-4"
            data-purpose="project-filter-controls"
          >
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Project category filters"
            >
              {FILTER_OPTIONS.map((option) => {
                const isSelected = activeFilter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onFilterChange(option.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] ${
                      isSelected
                        ? 'bg-[#111215] text-white border-[#111215]'
                        : 'bg-white text-neutral-700 hover:text-neutral-950 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest tabular-nums">
              Showing {filteredProjects.length} of {PROJECTS.length} Selected Works
            </div>
          </div>
        </FadeInMount>
      </section>

      {/* Project Showcase List */}
      <main className="max-w-[1240px] mx-auto px-6 lg:px-10 pb-20 space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const fallbackVariant = idx === 1 ? 'amber' : idx === 2 ? 'sky' : 'slate';
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.36, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className={`project-card-glow ${project.cardGradientClass} border ${project.cardBorderClass} rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_-2px_rgba(17,18,21,0.04)]`}
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Details */}
                <div className="lg:col-span-6 space-y-5">

                  <div>
                    <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#111215] tracking-tight leading-tight uppercase">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-neutral-700 text-sm leading-relaxed">{project.summary}</p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#DFB13E] mt-1.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Stack Chips */}
                  <div className="space-y-2.5 pt-1">
                    <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/95 border border-neutral-200/75 text-[11px] font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#141518] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]"
                    >
                      <span>Visit Live</span>
                      <FiArrowRight className="w-4 h-4 text-[#DFB13E]" />
                    </a>
                  </div>
                </div>

                {/* Right Device Mockup */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live website`}
                  className="lg:col-span-6 bg-white border border-neutral-200/60 rounded-2xl p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-[0_2px_14px_-4px_rgba(0,0,0,0.05)] group"
                >
                  <ResilientImage
                    src={project.caseStudyImage}
                    alt={`${project.title} multi-device mockup`}
                    className="w-full h-auto max-h-[320px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.04]"
                    fallback={<ProjectMockupFallback title={project.title} variant={fallbackVariant} />}
                  />
                </a>
              </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </main>
    </div>
  );
};
