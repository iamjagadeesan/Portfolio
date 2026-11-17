import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SERVICES } from '../../data/portfolioData';
import { ProjectCategory, RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import {
  BackendIsometricIllustration,
  FrontendIsometricIllustration,
  IntegrateIsometricIllustration,
} from './ServiceIllustrations';
import { FadeInView, StaggerItem, StaggerViewGroup } from '../ui/MotionPrimitives';

interface ServicesSectionProps {
  onNavigateWork: (filter: ProjectCategory) => void;
  onNavigate: (path: RoutePath) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateWork }) => {
  return (
    <section className="mb-24 md:mb-32" data-purpose="services-grid" id="services">
      <FadeInView className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
          Explore My Services
        </h2>
      </FadeInView>

      <StaggerViewGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <button
              type="button"
              onClick={() => onNavigateWork(service.targetFilter)}
              className="w-full group text-left relative bg-gradient-to-br from-[#F8FAFF] via-[#F2F6FD] to-[#EBF1FC] border border-[#E4EAF5] rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden h-[390px] transition-all duration-300 hover:-translate-y-1.5 smooth-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]"
            >
              <div className="z-10">
                <span className="text-sm font-semibold tracking-wider text-neutral-500 uppercase tabular-nums">
                  {service.index} —
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-900 mt-1 uppercase leading-snug">
                  {service.title}
                </h3>
              </div>

              <div className="relative z-10 w-full flex-1 flex items-center justify-end sm:justify-center my-2 pointer-events-none transition-transform duration-500 group-hover:scale-105">
                <div className="w-[240px] h-[180px] sm:w-[260px] sm:h-[195px] flex items-center justify-center">
                  <ResilientImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-md"
                    fallback={
                      <>
                        {service.variant === 'frontend' && <FrontendIsometricIllustration />}
                        {service.variant === 'backend' && <BackendIsometricIllustration />}
                        {service.variant === 'integrate' && <IntegrateIsometricIllustration />}
                      </>
                    }
                  />
                </div>
              </div>

              <div className="z-10 flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-neutral-900 uppercase mt-auto">
                <span>View Projects</span>
                <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerViewGroup>
    </section>
  );
};
