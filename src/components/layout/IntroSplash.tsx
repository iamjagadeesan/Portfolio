import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_ASSETS } from '../../data/portfolioData';
import { ResilientImage } from '../ui/ResilientImage';
import { LogoFallback } from '../ui/FallbackArtwork';
import { EASE_OUT_EXPO } from '../ui/MotionPrimitives';

interface IntroSplashProps {
  introDone: boolean;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ introDone }) => {
  return (
    <>
      {/* Fullscreen Backdrop Overlay (fades out behind navbar as logo lands) */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            key="intro-splash-backdrop"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-40 bg-white flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Subtle warm luminous aura behind center */}
            <div className="w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,_rgba(253,246,226,0.75)_0%,_rgba(255,255,255,0)_70%)] blur-2xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered Logo Stage with Moving White Light Shadow Effect */}
      {!introDone && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
          aria-label="Loading portfolio"
        >
          <div className="relative flex items-center justify-center">
            {/* Soft Moving White & Warm Shadow Halo Behind Logo */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, x: -24, scale: 0.9 }}
              animate={{ opacity: [0, 0.95, 0.7], x: [-24, 0, 24], scale: [0.92, 1.06, 1] }}
              transition={{ duration: 1.15, ease: 'easeInOut' }}
              className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.98)_0%,_rgba(223,197,152,0.38)_45%,_transparent_72%)] blur-xl pointer-events-none"
            />

            {/* Shared-Element Logo Container that Morphs into Navbar Slot */}
            <motion.div
              layoutId="brand-logo-shared"
              initial={{ opacity: 0, scale: 0.84 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.38,
                ease: EASE_OUT_EXPO,
                layout: { duration: 0.72, ease: EASE_OUT_EXPO },
              }}
              className="relative w-28 h-28 sm:w-32 sm:h-32 p-5 flex items-center justify-center"
            >
              {/* Moving White Inner Light Glow */}
              <motion.div
                aria-hidden="true"
                initial={{ x: '-90%' }}
                animate={{ x: '90%' }}
                transition={{ duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none rotate-130 absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95)_0%,_rgba(253,246,226,0.45)_45%,_transparent_75%)]"
              />

              <ResilientImage
                src={BRAND_ASSETS.logo}
                alt="Jagadeesan Monogram"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_6px_14px_rgba(17,18,21,0.14)]"
                fallback={<LogoFallback className="w-16 h-16 text-2xl" />}
              />

              {/* Sweeping Diagonal White Light Beam Across Logo */}
              <motion.div
                aria-hidden="true"
                initial={{ x: '-170%', opacity: 0.8 }}
                animate={{ x: '210%', opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-y-[-35%] left-0 z-20 w-14 -skew-x-12 bg-gradient-to-r from-transparent via-white/95 to-transparent blur-[2px] shadow-[0_0_26px_10px_rgba(255,255,255,0.95)]"
              />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
