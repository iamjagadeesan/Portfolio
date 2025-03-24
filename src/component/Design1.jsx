import React from "react";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";

const Design1 = ({toggle}) => {
  return (
    <div className="flex min-h-screen relative translate-x-[0%] -translate-y-[25%] md:-translate-x-[70%] md:-translate-y-[10%] scale-50 md:scale-75 lg:scale-100 lg:-translate-x-[160%] lg:-translate-y-[0%]">
      
      {/* Elliptical Orbit */}
      <div className={`absolute w-[300px] h-[300px] border-2 ${toggle?'border-violet-700':'border-gray-800'} rounded-full animate-spin-circle relative`}>
        {/* Planets evenly spaced on the orbit */}
        {[
          { size: "w-5 h-5", offset: "top-[50%] left-[0%]" , Icon:FaCode }, // Mercury
          { size: "w-7 h-7", offset: "-top-[0%] left-[50%]" , Icon:MdDesignServices}, // Venus
          { size: "w-8 h-8", offset: "top-[50%] left-[100%]" , Icon:AiOutlineCode }, // Earth
          { size: "w-6 h-6", offset: "top-[100%] left-[50%]" , Icon:FaLaptopCode}, // Mars
        ].map((planet, index) => (
          <div key={index} className={`absolute rounded-full ${planet.offset} animate-spin-element transform -translate-x-1/2 -translate-y-1/2`} ><planet.Icon className={`text-5xl rounded-full p-1 ${toggle?'bg-gray-950 text-gray-200':'bg-gray-200 text-violet-700'}`} /></div>
        ))}
      </div>
    </div>
  );
};

export default Design1;
