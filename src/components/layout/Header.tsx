import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { BRAND_ASSETS, PROFILE } from '../../data/portfolioData';
import { RoutePath } from '../../types/portfolio';
import { ResilientImage } from '../ui/ResilientImage';
import { LogoFallback } from '../ui/FallbackArtwork';
import { EASE_OUT_EXPO } from '../ui/MotionPrimitives';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, hash?: string) => void;
  introDone?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  introDone = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: RoutePath, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(path, hash);
  };

  const navItems: Array<{
    label: string;
    path?: RoutePath;
    hash?: string;
    href?: string;
    external?: boolean;
    isActive: boolean;
  }> = [
    { label: 'CV', path: '/cv', isActive: currentPath === '/cv' },
    { label: 'LinkedIn', href: PROFILE.linkedinUrl, external: true, isActive: false },
    { label: 'Work', path: '/work', isActive: currentPath === '/work' },
    { label: 'About', path: '/about', isActive: currentPath === '/about' },
    { label: 'Contact', path: '/contact', isActive: currentPath === '/contact' },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        introDone ? 'bg-white/80 border-neutral-100' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="inline-flex items-center gap-2.5 font-extrabold tracking-wider text-base md:text-[17px] text-[#111215] uppercase whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] rounded-lg px-1 py-1"
        >
          {introDone ? (
            <motion.div
              layoutId="brand-logo-shared"
              transition={{
                layout: { duration: 0.72, ease: EASE_OUT_EXPO },
              }}
              className="w-8 h-8 flex items-center justify-center shrink-0"
            >
              <ResilientImage
                src={BRAND_ASSETS.logo}
                alt="Jagadeesan Monogram"
                className="w-8 h-8 object-contain"
                fallback={<LogoFallback className="w-8 h-8" />}
              />
            </motion.div>
          ) : (
            <div className="w-8 h-8 shrink-0" aria-hidden="true" />
          )}
          <motion.span
            initial={false}
            animate={{ opacity: introDone ? 1 : 0, x: introDone ? 0 : -6 }}
            transition={{ duration: 0.36, delay: introDone ? 0.25 : 0, ease: EASE_OUT_EXPO }}
          >
            {PROFILE.name}
          </motion.span>
        </a>

        {/* Desktop Navigation Links */}
        <motion.nav
          aria-label="Main Navigation"
          initial={false}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : -4 }}
          transition={{ duration: 0.38, delay: introDone ? 0.28 : 0, ease: EASE_OUT_EXPO }}
          className="hidden md:flex items-center gap-9"
        >
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-1 text-[12px] font-bold tracking-widest uppercase text-neutral-800 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] rounded"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.hash ? `/#${item.hash}` : item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.path) {
                    handleLinkClick(item.path, item.hash);
                  }
                }}
                className={`relative py-1 text-[12px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] rounded ${
                  item.isActive
                    ? 'text-[#111215]'
                    : 'text-neutral-800 hover:text-amber-700'
                }`}
              >
                {item.label}
                {item.isActive && (
                  <motion.span
                    layoutId="header-nav-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#DFB13E] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          )}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-neutral-800 hover:bg-neutral-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB13E] ${
            introDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="relative w-6 h-6 flex items-center justify-center" aria-hidden="true">
            <FiMenu
              className={`absolute w-6 h-6 transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? 'opacity-0 rotate-90 scale-75'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <FiX
              className={`absolute w-6 h-6 transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          mobileMenuOpen
            ? 'grid-rows-[1fr] opacity-100 pointer-events-auto visible'
            : 'grid-rows-[0fr] opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile Navigation"
            className={`border-t border-neutral-200 bg-white px-6 py-4 space-y-2 shadow-lg transition-transform duration-300 ease-out ${
              mobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
            }`}
          >
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between min-h-[44px] px-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 hover:text-amber-700 transition-colors"
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.hash ? `/#${item.hash}` : item.path}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.path) {
                      handleLinkClick(item.path, item.hash);
                    }
                  }}
                  className={`flex items-center justify-between min-h-[44px] px-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                    item.isActive
                      ? 'bg-amber-50 text-amber-900'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-amber-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isActive && <span className="text-xs font-bold text-[#B8860B]">Active</span>}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
