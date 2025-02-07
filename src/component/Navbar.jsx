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

const Navbar = ({ toggle, setToggle }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  const navLinks = [
    { name: "Haven", path: "/", icon: HiOutlineHomeModern },
    { name: "Persona", path: "/about", icon: BsPerson },
    { name: "Stack", path: "/skills", icon: GoStack },
    { name: "URLs", path: "/projects", icon: BiCodeBlock },
    { name: "Connect", path: "/contact", icon: LuMessageSquareShare }
  ];

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`fixed z-50 w-full flex justify-between items-center ${toggle ? 'bg-gray-950' : 'bg-gray-200'} backdrop-blur-sm border-b-2 border-violet-700 p-2`}>
      <img src={Logo} className="h-10 w-10 brightness-150" alt="Logo" />

      <div className="flex flex-row items-center gap-4 lg:gap-6 mr-2 lg:mr-4">
        {width > 500 ? (
          navLinks.map(({ name, path }, index) => (
            <Link
              key={index}
              to={path}
              className={`tracking-wide font-decorative text-lg ${toggle ? 'text-gray-200 font-light' : 'text-violet-700 font-semibold'} transition-all duration-300 ${
                location.pathname === path ? "underline decoration-2 decoration-violet-600 underline-offset-8" : ""
              }`}
            >
              {name}
            </Link>
          ))
        ) : (
          navLinks.map(({ name, path, icon: Icon }, index) => (
<Link key={index} to={path}>
  <Icon
    className={`transition-all duration-300 ${toggle ? 'text-gray-200' : 'text-violet-800'} 
      ${location.pathname === path ? 'text-3xl' : 'text-2xl'}`}
    style={{
      background: location.pathname === path && toggle
        ? 'radial-gradient(circle, #6d28d9 0%, transparent 90%)'
        : '',
      filter: location.pathname === path && !toggle
        ? 'drop-shadow(1px 1px 1px #6d28d9)'
        : ''
    }}
  />
</Link>


          ))
        )}

        <span
          className={`${toggle ? "text-gray-200" : "text-violet-700"} text-2xl cursor-pointer`}
          onClick={() => setToggle(prev => !prev)}
        >
          {toggle ? <FaMoon /> : <IoSunny />}
        </span>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
