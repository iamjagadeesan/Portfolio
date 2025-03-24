import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [toggle, setToggle] = useState(darkModeQuery.matches);
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = toggle ? '#030712' : '#e5e7eb';
  }, [toggle]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <Intro toggle={toggle} />
    );
  }

  return (
    <>
      <div className="overflow-x-hidden hidden md:block lg:block">
        <Navbar toggle={toggle} setToggle={setToggle} width={width} />
          <Routes location={useLocation()} key={useLocation().pathname}>
            <Route path="/" exact element={<Home toggle={toggle} width={width} />} />
            <Route path="/about" element={<About toggle={toggle} width={width} />} />
            <Route path="/skills" element={<Skills toggle={toggle} width={width} />} />
            <Route path="/projects" element={<Projects toggle={toggle} width={width} />} />
            <Route path="/contact" element={<Contact toggle={toggle} width={width} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>

      <div className="block md:hidden lg:hidden overflow-x-hidden" id="home">
        <Navbar toggle={toggle} setToggle={setToggle} width={width} />
        <Home toggle={toggle} width={width} />
        <About toggle={toggle} width={width} />
        <Skills toggle={toggle} width={width} />
        <Projects toggle={toggle} width={width} />
        <Contact toggle={toggle} width={width} />
      </div>
    </>
  );
}

export default App;
