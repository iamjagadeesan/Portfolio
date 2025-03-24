import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { BiCodeBlock } from "react-icons/bi";
import { LuMessageSquareShare } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import Theme from "./Theme.jsx";

const Navbar = ({ toggle, setToggle, width }) => {
  const location = useLocation();
  const [menuBar,setMenuBar] = useState(false);

  const toggleMenu = () => { setMenuBar(!menuBar)}

  const toView = (id) => {document.getElementById(id).scrollIntoView({behavior:'auto',block: "start"})}

  const navLinks = [
    { name: "Welcome", path: "/", icon: HiOutlineHomeModern, link:'home' },
    { name: "Persona", path: "/about", icon: BsPerson, link:'about' },
    { name: "Stack", path: "/skills", icon: GoStack, link:'skills' },
    { name: "URLs", path: "/projects", icon: BiCodeBlock, link:'projects' },
    { name: "Connect", path: "/contact", icon: LuMessageSquareShare, link:'contact' }
  ];


  return (
    <div className={`fixed z-50 w-full flex flex-col justify-start items-center ${toggle ? 'bg-gray-950' : 'bg-gray-200'} backdrop-blur-sm border-b-2 border-violet-700`}>
      <div className={`z-50 w-full flex justify-between items-center ${toggle ? 'bg-gray-950' : 'bg-gray-200'} backdrop-blur-sm p-1 lg:p-2`}>
      <img src={Logo} title="Logo" onClick={() => window.location.reload()} className="cursor-pointer h-10 w-10 brightness-150" alt="Logo" />

      <div className="flex flex-row items-center gap-4 lg:gap-6 mr-2 lg:mr-4">
        {width > 500 ? (
          navLinks.map(({ name, path }, index) => (
            <Link
              key={index}
              to={path}
              className={`tracking-wide font-decorative md:text-md lg:text-lg ${toggle ? 'text-gray-200 font-light' : 'text-violet-700 font-semibold'} transition-all duration-100 ${
                location.pathname === path ? "underline decoration-2 decoration-violet-600 underline-offset-8" : ""
              }`}
            >
              {name}
            </Link>
          ))
        ) : (
          <div onClick={toggleMenu} className={`flex flex-col justify-between items-end ${menuBar?'gap-0 transition-gap ease-in-out duration-200 delay-100': 'gap-2 transition-gap ease-in-out duration-400 delay-400'} w-8 `}>
            <span className={`${menuBar?'rotate-45 transition-rotate ease-in-out duration-400 delay-400': 'rotate-none transition-rotate ease-in-out duration-300 delay-100'} h-[2px] w-full bg-violet-700 rounded-lg`}></span>
            <span className={`${menuBar?'-rotate-45 w-full -translate-y-[2px] transition-rotate ease-in-out duration-400 delay-400': 'rotate-none w-3/4 transition-rotate ease-in-out duration-300 delay-100'} h-[2px] bg-violet-700 rounded-lg`}></span>
          </div>
        )
      }

      <span
          className={`hidden md:block lg:block ${toggle ? "text-gray-200" : "text-violet-700"} text-2xl cursor-pointer`}
          onClick={() => setToggle(prev => !prev)}
          title="To change Theme"
        >
         <Theme toggle={toggle} />
        </span>
      </div>
      </div>

      <div className={`block md:hidden lg:hidden ${menuBar?'h-screen transition-height transition-translate ease-in-out duration-700 delay-100':'-translate-y-48 h-0 transition-height transition-translate ease-in-out duration-700 delay-100'} w-[100%]  flex flex-col justify-evenly items-center`}>
        {navLinks.map(({ name, path, icon: Icon,link }, index) => (
 <span key={index} onClick={() => {toView(link); toggleMenu()}} className={`${menuBar?'duration-300 delay-100':' duration-300 delay-100'} flex flex-row justify-center items-center gap-2 font-decorative font-semibold text-xl text-violet-700`}>
   <Icon
    className={`transition-all duration-300 text-2xl`}
  /> {name}
</span>


          ))}
        <span
          className={`block ${toggle ? "text-gray-200" : "text-violet-700"} text-2xl cursor-pointer mb-24`}
          onClick={() => setToggle(prev => !prev)}
        >
          <Theme toggle={toggle}/>
        </span>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
