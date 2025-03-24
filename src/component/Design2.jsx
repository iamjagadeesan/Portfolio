import React from "react";

const Design2 = ({toggle}) => {
  return (
    <div className="flex min-h-screen relative translate-x-[4%] translate-y-[50%] md:translate-x-[60%] md:translate-y-[60%] scale-50 md:scale-75 lg:scale-100 lg:translate-x-[140%] lg:translate-y-[70%]">
     <div className={`h-72 w-72 bg-gradient-to-b from-violet-700 via-violet-400 to-transparent p-[2px] rotate-[40deg]`}>
       <div className={`h-full w-full ${toggle?'bg-gray-950':'bg-gray-200'}`}></div>
     </div>
    </div>
  );
};

export default Design2;
