import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './index.css'

function App() {
  
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`${ toggle ? 'bg-gray-950' : 'bg-gray-200' }`}>
        <Navbar toggle={toggle} setToggle={setToggle}/>
        <Home toggle={toggle} />
        <About/>
        <Skills toggle={toggle} />
        <Projects toggle={toggle}/>
        <Contact toggle={toggle}/>
      </div>
    </>
  )
}

export default App
