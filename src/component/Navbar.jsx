import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { BsSubstack } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa"; // Corrected import
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { BiCodeBlock } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { LuMessageSquareShare } from "react-icons/lu";
import { BsEmojiSunglasses } from "react-icons/bs";

const Navbar = ({toggle,setToggle}) => {
  const activeSection = 'haven';
  const [width, setWidth] = useState(window.innerWidth);

  const navLinks = [
    { name: 'Haven', icon: HiOutlineHomeModern },
    { name: 'Persona', icon: BsPerson },
    { name: 'Stack', icon: GoStack },
    { name: 'URLs', icon: BiCodeBlock },
    { name: 'Connect', icon: LuMessageSquareShare } // Corrected icon usage
  ];

  const determineDeviceType = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    determineDeviceType();
    window.addEventListener('resize', determineDeviceType);
    return () => {
      window.removeEventListener('resize', determineDeviceType);
    };
  }, []);

  return (
    <div className={`fixed z-50 w-screen flex flex-row justify-between items-center ${toggle?'bg-gray-950 border-b-1':'bg-gray-200 border-b-2'} backdrop-blur-sm border-violet-700 p-1`}>
      <img src={Logo} className="h-10 w-10 brightness-150" alt="Logo" />
      <div className="z-50 flex lg:flex md:flex flex-row items-center justify-center lg:gap-8 gap-4 mr-2 md:mr-8 lg:mr-8">
        {width > 500 ? (
          navLinks.map((navbar, index) => (
            <a
              key={index}
              href={`#${navbar.name.toLowerCase()}`}
              className={`font-decorative  text-lg decoration-2 ${toggle?'text-gray-200 font-medium':'text-violet-700 font-semibold '} hover:bcolor ${
                activeSection === navbar.name.toLowerCase()
                  ? "underline underline-offset-8 decoration-2 decoration-violet-600"
                  : "bcolor"
              }`}
            >
              {navbar.name}
            </a>
          ))
        ) : (
          navLinks.map(({ name, icon: Icon }, index) => (
            <span
             
              key={index}
              className={`text-sm decoration-2`}
            >
              <Icon className={`text-gray-200  ${toggle ? 'text-white/80':'text-violet-800'} ${ activeSection === name ? 'bg-gradient-radial from-violet-800 to-90% to-transparent text-3xl':'text-2xl' } transition-text duration-400 delay-100 `} />
            </span>
          ))
        )}
        <span className="text-violet-700 text-2xl cursor-pointer" onClick={()=>{setToggle((pre)=>!pre)}}>{toggle ? <BsEmojiSunglasses /> : <BsEmojiSunglasses />}</span>
      </div>
    </div>
  );
};

export default React.memo(Navbar);