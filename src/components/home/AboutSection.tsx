import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { BRAND_ASSETS, CORE_SKILLS } from '../../data/portfolioData';
import { RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import { AboutIllustrationFallback } from '../ui/FallbackArtwork';
import { FadeInView } from '../ui/MotionPrimitives';

interface AboutSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="pt-8 mb-24 md:mb-32" data-purpose="about-me-section" id="about">
      <FadeInView>
        <div className="w-12 h-1 bg-[#C59A4E] mb-6 rounded-full" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase mb-8">
          About Me
        </h2>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <FadeInView delay={0.06} className="lg:col-span-5 flex flex-col items-start lg:pr-6">
          <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-[1.2] text-neutral-950 tracking-tight mb-8">
            I turn complex problems into scalable digital solutions.
          </h3>

          <a
            href="/cv"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/about');
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-neutral-900 rounded-full text-xs font-semibold tracking-wider text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200 uppercase whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]"
          >
            <span>Know More</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </FadeInView>

        <FadeInView delay={0.14} className="lg:col-span-7 flex flex-col justify-between">
          <p className="text-neutral-700 text-sm md:text-base leading-relaxed max-w-xl mb-6">
            With 2+ years of experience in full stack development, I specialize in building robust
            backend architectures, high-performance APIs, and interactive frontend interfaces that
            deliver seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-neutral-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="relative w-full max-w-md flex items-center justify-center sm:justify-end ml-auto">
            <ResilientImage
              src={BRAND_ASSETS.aboutIllustration}
              alt="Full Stack Development 3D Illustration"
              className="w-full md:max-w-[400px] h-auto object-contain mx-auto mix-blend-multiply"
              fallback={<AboutIllustrationFallback />}
            />
          </div>
        </FadeInView>
      </div>
    </section>
  );
};
