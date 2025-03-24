import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Mypic from '../assets/me.png';
import BG from '../assets/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChangingText from "../component/ChangingText.jsx"
import Design1 from '../component/Design1.jsx'
import Design2 from '../component/Design2.jsx'

function Home({ toggle, width }) {

  const toView = (id) => {document.getElementById(id).scrollIntoView({behavior:'smooth'})}

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      debounceDelay: 50,
      offset: 10,
    });
  }, []);


  return (
    <section
      className="relative h-screen w-full flex lg:flex-row items-center justify-center text-center gap-4 lg:px-8 overflow-hidden"
      {...(width > 500
        ? { "data-aos": "fade-left", "data-aos-duration": "500" }
        : {})}
    >
      <div className="absolute inset-0 flex items-center justify-center min-h-screen opacity-[0.4] blur-2xl" >
        <div
          className={`bg-violet-700 rounded-full blur-2xl w-1/2 lg:w-1/4 h-2/4 -m-12 shadow-custom-dark`}

          {...(width < 500
        ? { "data-aos": "zoom-in", "data-aos-duration": "1000" , "data-aos-delay": "1000" }
        : {})}
        ></div>
      </div>

      <div className="absolute inset-0 w-full h-full  flex justify-center items-center">
        <img src={BG} className="h-3/4 opacity-0"/>
      </div>

      <Design1 toggle={toggle} />

      <Design2 toggle={toggle} />

      {/* Main Content */}
      <div className="absolute inset-1 overflow-hidden p-5 flex flex-col lg:flex-col items-center justify-center gap-4">
        {/* Greeting Section */}
        <div
          className="text-violet-500 ml-6 lg:ml-8 relative lg:w-1/4 flex flex-row justify-between items-center text-3xl lg:text-5xl italic font-albert font-extrabold">
          <h1 className="p-1 text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-violet-600 to-violet-900"
          {...(width < 500
        ? { "data-aos": "fade", "data-aos-duration": "500" , "data-aos-delay": "100" }
        : {})}
          >
            Hi
          </h1>
          <div className="relative size-40 lg:size-[12rem]">
          <div className={`absolute mt-16 lg:mt-20 h-full w-full blur-sm bg-gradient-to-b from-50% from-transparent to-80% ${toggle ?  'to-violet-950/80' : 'to-violet-400/90'} rounded-b-full`}></div>
            <img src={Mypic} loading="lazy" alt="Jagadeesan's picture" className="rounded-b-full" />
          </div>
          <h1 className="p-1 text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-violet-600 to-violet-900"
          {...(width < 500
        ? { "data-aos": "fade", "data-aos-duration": "500" , "data-aos-delay": "200" }
        : {})}
          >
            I'm
          </h1>
        </div>

        {/* Name Section */}
        <h1
          className={`text-7xl z-30 lg:text-[7rem] font-bold p-4 text-transparent bg-clip-text ${toggle ? 'bg-gradient-to-br from-violet-300 via-violet-600 to-violet-900':'bg-gradient-to-b from-violet-900 via-violet-700 to-violet-500'} font-name -mt-8 -ml-8 lg:-mt-8`}       
          {...(width < 500
        ? { "data-aos": "fade", "data-aos-duration": "500" , "data-aos-delay": "300" }
        : {})}
           >
          Jagadeesan
        </h1>

        {/* Dynamic Text Section */}
        <div
          className={`w-full lg:w-full flex flex-row justify-start items-center -mt-10 text-sm md:text-lg lg:text-xl font-bold italic z-30 ${toggle?'text-white/80':'text-gray-800 font-extrabold '}`}
        >
          <span className="w-1/2"></span>
          <ChangingText words={["Tech Enthusiast", "Future Coder", "Innovation Seeker", "Growth Seeker"]} />
        </div>

        {/* Intro Section */}
        <p
          className={`text-md lg:text-xl mt-0 lg:mt-2 tracking-wide md:w-2/3 lg:w-1/2 ${
            toggle ? "text-white/80 font-normal" : "text-gray-800 font-semibold"
          }`}
          {...(width < 500
        ? { "data-aos": "zoom-in", "data-aos-duration": "500" , "data-aos-delay": "600" }
        : {})}
        >
          Welcome to my full-stack playground! From pixel-perfect UIs to rock-solid APIs, this is
          where creativity meets logic—let's build something extraordinary.
        </p>

        {/* Buttons */}
        <div className="text-xs lg:text-base mt-4 w-[80vw] md:w-1/2 lg:w-1/3 lg:px-4 flex flex-row justify-between items-center">
          <Link
  {...(width > 500 ? { to: "/projects" } : {})}
  onClick={() => toView("projects")}
  className={`text-sm lg:text-lg inline-block bg-gradient-to-br from-white via-gray-200 to-gray-400 border-[1px] lg:border-[2px] lg:py-2 lg:px-4 py-2 px-2 rounded-lg font-bold transition-transform hover:scale-105 shadow-md ${
    toggle ? "text-violet-700 border-gray-200 " : "text-violet-700 border-gray-300"
  }`}
  {...(width < 500
        ? { "data-aos": "zoom-in", "data-aos-duration": "500" , "data-aos-delay": "700" }
        : {})}
>
  Explore My URLs
</Link>
          <Link
             {...(width > 500
        ? { "to": "/contact"}
        : {})}
            onClick={() => {toView("contact")}}
            className={`text-gray-100 text-sm lg:text-lg inline-block bg-gradient-to-br from-violet-400 via-violet-700 to-violet-950 lg:py-2 lg:px-4 py-2 px-2 rounded-lg font-semibold transition-transform hover:scale-105 shadow-md ${
              toggle ? "border-violet-700 border-[1px] lg:border-[1px]" : "border-violet-400 border-[1px] lg:border-[2px]"
            }`}
            {...(width < 500
        ? { "data-aos": "fade", "data-aos-duration": "500" , "data-aos-delay": "800" }
        : {})}
          >
            Let's Connect Yours
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Home);
