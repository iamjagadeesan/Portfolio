import React from 'react';
import icon from '../assets/logo.png'


function Intro({toggle}){

	return(
		<div className={`relative flex items-center justify-center h-screen w-full overflow-x-hidden ${toggle?'bg-gray-950 text-gray-200':'bg-gray-200 text-gray-900'}`}>
        <h1 className="absolute inset-0 text-xl md:text-2xl lg:text-3xl font-bold font-decorative w-screen h-screen flex flex-col justify-center items-center">Welcome to My Portfolio</h1>
        <img src={icon} className={`h-1/3 lg:h-2/3 max-w-min brightness-150 animate-pulse`}/>
      </div>
		)
}

export default Intro;