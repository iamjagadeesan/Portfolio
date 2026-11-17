import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { BRAND_ASSETS, PROFILE } from '../../data/portfolioData';
import { RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import { LogoFallback } from '../ui/FallbackArtwork';
import { FadeInView } from '../ui/MotionPrimitives';

interface FooterProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-neutral-200/80 bg-white py-8">
      <FadeInView y={12}>
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <ResilientImage
              src={BRAND_ASSETS.monogram}
              alt="Jagadeesan Monogram"
              className="w-5 h-5 object-contain"
              fallback={<LogoFallback className="w-5 h-5 text-[10px]" />}
            />
            <span>© 2026 {PROFILE.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 hover:text-amber-700 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] rounded px-1 py-1"
            >
              <span>Back to Top</span>
              <FiArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </FadeInView>
    </footer>
  );
};
