import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AnimatedPage from './component/AnimatedPage';
import './index.css'

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = toggle ? '#030712' : '#e5e7eb';
  }, [toggle]);

  return (
    <div className="overflow-x-hidden">
      <Navbar toggle={toggle} setToggle={setToggle} />
      <AnimatePresence mode="wait">
        {/* useLocation() is now inside Router context */}
        <Routes location={useLocation()} key={useLocation().pathname}>
          <Route path="/" exact element={<Home toggle={toggle} />} />
          <Route path="/about" element={<About toggle={toggle} />} />
          <Route path="/skills" element={<Skills toggle={toggle} />} />
          <Route path="/projects" element={<Projects toggle={toggle} />} />
          <Route path="/contact" element={<Contact toggle={toggle} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
