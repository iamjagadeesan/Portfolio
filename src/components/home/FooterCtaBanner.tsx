import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { RoutePath } from '../../types/portfolio';
import { FadeInView } from '../ui/MotionPrimitives';

interface FooterCtaBannerProps {
  onNavigate: (path: RoutePath) => void;
}

export const FooterCtaBanner: React.FC<FooterCtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="w-full" data-purpose="bottom-cta-banner">
      <FadeInView>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F9EEDB] via-[#FAF2E5] to-[#F7E7CC] p-8 sm:p-12 lg:p-14 border border-amber-200/40 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <svg
            className="absolute right-0 top-0 h-full w-2/3 pointer-events-none opacity-45"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 200"
            aria-hidden="true"
          >
            <path d="M0,200 C150,150 250,50 400,0" stroke="#C88E28" strokeWidth="2" />
            <circle cx="160" cy="145" fill="#C88E28" r="5" />
          </svg>

          <div className="space-y-3 max-w-xl relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111215]">
              Let&apos;s Work Together
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              I&apos;m currently available for freelance work, full-time opportunities, and exciting
              projects.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center gap-3 bg-[#111215] hover:bg-neutral-800 text-white font-medium px-8 py-4 rounded-full transition duration-200 shadow-md group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E]"
            >
              <span>Hire Me</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </FadeInView>
    </section>
  );
};
