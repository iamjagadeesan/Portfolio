import React from 'react';
import { ProjectCategory, RoutePath } from '../types/portfolio';
import { HeroSection } from '../components/home/HeroSection';
import { ExploreWorkSection } from '../components/home/ExploreWorkSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FooterCtaBanner } from '../components/home/FooterCtaBanner';

interface HomePageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onNavigateWork: (filter: ProjectCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onNavigateWork,
}) => {
  return (
    <main className="w-full max-w-[1240px] mx-auto px-6 lg:px-10 pt-10 md:pt-14 pb-20 overflow-x-hidden">
      <HeroSection onNavigate={onNavigate} />
      <ExploreWorkSection onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <ServicesSection onNavigateWork={onNavigateWork} onNavigate={onNavigate} />
      <FooterCtaBanner onNavigate={onNavigate} />
    </main>
  );
};
