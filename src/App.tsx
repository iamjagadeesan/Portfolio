import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { ProjectCategory, RoutePath } from './types/portfolio';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { IntroSplash } from './components/layout/IntroSplash';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CvPage } from './pages/CvPage';
import { EASE_OUT_EXPO } from './components/ui/MotionPrimitives';

function parseRouteFromLocation(): RoutePath {
  const path = window.location.pathname;
  if (path === '/work' || path === '/about' || path === '/contact' || path === '/cv') {
    return path;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => parseRouteFromLocation());
  const [workFilter, setWorkFilter] = useState<ProjectCategory>('all');
  const [introDone, setIntroDone] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (introDone) return;
    const timer = window.setTimeout(() => {
      setIntroDone(true);
    }, 1350);
    return () => window.clearTimeout(timer);
  }, [introDone]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(parseRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: RoutePath, hash?: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', hash ? `${path}#${hash}` : path);
      setCurrentPath(path);
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToWorkWithFilter = useCallback(
    (filter: ProjectCategory) => {
      setWorkFilter(filter);
      navigate('/work');
    },
    [navigate]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col justify-between bg-white text-[#111215]">
        <IntroSplash introDone={introDone} />
        <Header currentPath={currentPath} onNavigate={navigate} introDone={introDone} />

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
            >
              {currentPath === '/' && (
                <HomePage
                  onNavigate={navigate}
                  onNavigateWork={navigateToWorkWithFilter}
                />
              )}
              {currentPath === '/work' && (
                <WorkPage
                  activeFilter={workFilter}
                  onFilterChange={setWorkFilter}
                  onNavigate={navigate}
                />
              )}
              {currentPath === '/about' && <AboutPage onNavigate={navigate} />}
              {currentPath === '/contact' && <ContactPage onNavigate={navigate} />}
              {currentPath === '/cv' && <CvPage onNavigate={navigate} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
