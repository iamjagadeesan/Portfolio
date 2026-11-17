import React from 'react';
import { FiArrowDown, FiArrowRight, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { BRAND_ASSETS, PROFILE } from '../../data/portfolioData';
import { RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import { PortraitFallback } from '../ui/FallbackArtwork';
import { OrbitTechStack } from './OrbitTechStack';
import { FadeInMount } from '../ui/MotionPrimitives';

interface HeroSectionProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="mb-20 md:mb-28 relative overflow-visible" data-purpose="hero-statement">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Left Column: Hero Content & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start z-20">
          <FadeInMount delay={0.04}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF6E2] border border-[#F0DFB1] text-[#8F6612] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" aria-hidden="true" />
              <span>Available</span>
            </div>
          </FadeInMount>

          <FadeInMount delay={0.09}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#111215] mb-5 max-w-xl">
              Hi, I&apos;m {PROFILE.name} — Full Stack Developer
            </h1>
          </FadeInMount>

          <FadeInMount delay={0.14}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
              Building scalable web applications, robust APIs, and fluid digital experiences with
              precision, performance, and modern engineering practices.
            </p>
          </FadeInMount>

          {/* Experience & Location Metadata */}
          <FadeInMount delay={0.18}>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold tracking-wider text-neutral-800 uppercase mb-9">
              <span className="inline-flex items-center gap-2">
                <FiBriefcase className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
                <span>{PROFILE.experienceYears}</span>
              </span>
              <span className="text-neutral-300" aria-hidden="true">
                |
              </span>
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-[#A87920]" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </span>
            </div>
          </FadeInMount>

          {/* Primary & Secondary Actions */}
          <FadeInMount delay={0.22}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/work');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] text-white hover:bg-neutral-800 text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F1D58E] hover:bg-[#e5c574] text-[#111215] font-bold text-xs sm:text-sm uppercase tracking-wide transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111215]"
              >
                <span>Get in Touch</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeInMount>
        </div>

        {/* Right Column: Orbit System + Portrait */}
        <div className="lg:col-span-6 relative overflow-x-hidden flex items-center justify-center w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-0 sm:min-h-[480px] lg:min-h-[540px] overflow-hidden sm:overflow-visible">
          <FadeInMount delay={0.14} y={10} className="w-full h-full flex items-center justify-center">
            <div className="relative scale-125 md:scale-100 flex items-center justify-center w-full h-full lg:translate-x-8">
              <OrbitTechStack />
              <div className="absolute inset-x-0 bottom-0 h-[82%] sm:h-[84%] pointer-events-none z-10 flex items-end justify-center">
                <ResilientImage
                  src={BRAND_ASSETS.heroPortrait}
                  alt="Jagadeesan — Full Stack Developer"
                  className="h-full w-auto max-h-[82vw] sm:max-h-[440px] object-contain object-bottom mix-blend-multiply"
                  fallback={<PortraitFallback />}
                />
              </div>
            </div>
          </FadeInMount>
        </div>
      </div>
    </section>
  );
};
