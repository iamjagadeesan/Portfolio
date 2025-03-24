import React from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

function Theme({toggle}){

	return(
		<div className={`scale-150 md:scale-100 lg:scale-100 relative h-ful w-full flex flex-row justify-between items-end gap-[1px]`}>
          <div className={`h-4 w-1 bg-violet-700`}></div>
          <div className={`h-5 w-2 bg-violet-700`}></div>
          <div className={`h-3 w-1 bg-violet-800`}></div>
          <div className={`h-2 w-2 bg-violet-600`}></div>
          <span style={{ filter:'drop-shadow(1px 1px 1px white)' }} className={`absolute text-violet-700 ${toggle?'text-[0px] transition-all duration-500 delay-100':'text-[1.1rem] -translate-y-3 translate-x-3 transition-all duration-500 delay-100'}`}><IoSunnySharp /></span>
          <span style={{ filter:'drop-shadow(1px 1px 1px gray)' }} className={`absolute ${toggle?'text-sm -translate-y-4 translate-x-3 transition-all duration-500 delay-100':'text-[0px] transition-all duration-500 delay-100'}`}><FaMoon/></span>
		</div>
		)
}

export default Theme;

