import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../../data/portfolioData';
import { RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import { ProjectMockupFallback } from '../ui/FallbackArtwork';
import { FadeInView, StaggerItem, StaggerViewGroup } from '../ui/MotionPrimitives';

interface ExploreWorkSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export const ExploreWorkSection: React.FC<ExploreWorkSectionProps> = () => {
  return (
    <section className="mb-24 md:mb-32" data-purpose="portfolio-grid" id="work">
      <FadeInView className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
          Explore My Work
        </h2>
      </FadeInView>

      <StaggerViewGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {PROJECTS.map((project, idx) => {
          const fallbackVariant = idx === 1 ? 'amber' : idx === 2 ? 'sky' : 'slate';
          return (
            <StaggerItem key={project.id}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group text-left relative ${project.cardGradientClass} border ${project.cardBorderClass} rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden h-[400px] transition-all duration-300 hover:-translate-y-1.5 smooth-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]`}
              >
                <div className="z-10">
                  <span className="text-sm font-semibold tracking-wider text-neutral-500 uppercase tabular-nums">
                    {project.index} —
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 mt-1 uppercase leading-[1.18]">
                    {project.shortTitleTop}
                    {project.shortTitleBottom && (
                      <span className="block">{project.shortTitleBottom}</span>
                    )}
                  </h3>
                </div>

                <div className="relative z-10 w-full flex-1 flex items-center justify-center my-2 pointer-events-none">
                  <ResilientImage
                    src={project.cardPreviewImage}
                    alt={`${project.title} Preview`}
                    className="w-full max-w-[290px] max-h-[215px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    fallback={<ProjectMockupFallback title={project.title} variant={fallbackVariant} />}
                  />
                </div>

                <div className="z-10 flex items-center justify-end gap-1.5 text-[11px] font-bold tracking-widest text-neutral-900 uppercase">
                  <span>Visit Live</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </StaggerItem>
          );
        })}
      </StaggerViewGroup>
    </section>
  );
};
