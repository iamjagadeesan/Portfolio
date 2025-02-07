import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useScrollNavigation = (routes) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const currentIndex = routes.indexOf(location.pathname);

      if (scrollY + windowHeight >= scrollHeight - 10) {
        // Scroll Down → Go to Next Page
        const nextRoute = routes[currentIndex + 1];
        if (nextRoute) navigate(nextRoute);
      } else if (scrollY < 10 && lastScrollY > scrollY) {
        // Scroll Up → Go to Previous Page
        const prevRoute = routes[currentIndex - 1];
        if (prevRoute) navigate(prevRoute);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location, navigate, routes, lastScrollY]);
};

export default useScrollNavigation;
