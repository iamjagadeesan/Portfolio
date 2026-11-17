import React from 'react';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const OrbitTechStack: React.FC = () => {
  return (
    <div
      className="orbit-container relative w-full aspect-square sm:w-[460px] sm:h-[460px] sm:aspect-auto lg:w-[560px] lg:h-[560px] flex items-center justify-center select-none"
      aria-label="Interactive orbiting technology stack"
    >
      {/* Concentric Orbital Rings */}
      <div className="absolute w-[42%] h-[42%] sm:w-[230px] sm:h-[230px] lg:w-[260px] lg:h-[260px] rounded-full border border-amber-300/45 pointer-events-none shadow-[0_0_15px_rgba(223,197,152,0.15)]" />
      <div className="absolute w-[56%] h-[56%] sm:w-[310px] sm:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full border border-dashed border-amber-400/35 pointer-events-none" />
      <div className="absolute w-[71%] h-[71%] sm:w-[390px] sm:h-[390px] lg:w-[450px] lg:h-[450px] rounded-full border border-amber-400/25 pointer-events-none" />
      <div className="absolute w-[86%] h-[86%] sm:w-[470px] sm:h-[470px] lg:w-[540px] lg:h-[540px] rounded-full border border-amber-300/30 pointer-events-none" />
      <div className="absolute w-[96%] h-[96%] sm:w-[540px] sm:h-[540px] lg:w-[620px] lg:h-[620px] rounded-full border border-dashed border-neutral-300/60 pointer-events-none" />

      {/* Ring 1: TypeScript */}
      <div className="orbit-track orbit-cw-22 absolute w-[42%] h-[42%] sm:w-[230px] sm:h-[230px] lg:w-[260px] lg:h-[260px] rounded-full">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div
            className="orbit-badge counter-cw-22 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-sky-300/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="TypeScript"
          >
            <SiTypescript className="w-full h-full text-[#3178C6]" aria-label="TypeScript" />
          </div>
        </div>
      </div>

      {/* Ring 2: Next.js & React.js */}
      <div className="orbit-track orbit-ccw-28 absolute w-[56%] h-[56%] sm:w-[310px] sm:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full">
        <div className="absolute top-[14.6%] right-[14.6%] -translate-y-1/2 translate-x-1/2">
          <div
            className="orbit-badge counter-ccw-28 w-8 h-8 rounded-full bg-neutral-900/95 backdrop-blur-md border border-neutral-700 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="Next.js"
          >
            <SiNextdotjs className="w-full h-full text-white" aria-label="Next.js" />
          </div>
        </div>
        <div className="absolute bottom-[14.6%] left-[14.6%] translate-y-1/2 -translate-x-1/2">
          <div
            className="orbit-badge counter-ccw-28 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-cyan-400/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="React.js"
          >
            <SiReact className="w-full h-full text-[#087ea4]" aria-label="React.js" />
          </div>
        </div>
      </div>

      {/* Ring 3: Tailwind CSS & Node.js */}
      <div className="orbit-track orbit-cw-34 absolute w-[71%] h-[71%] sm:w-[390px] sm:h-[390px] lg:w-[450px] lg:h-[450px] rounded-full">
        <div className="absolute top-1/2 -right-4 -translate-y-1/2">
          <div
            className="orbit-badge counter-cw-34 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-cyan-300/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="Tailwind CSS"
          >
            <SiTailwindcss className="w-full h-full text-[#06B6D4]" aria-label="Tailwind CSS" />
          </div>
        </div>
        <div className="absolute top-1/2 -left-4 -translate-y-1/2">
          <div
            className="orbit-badge counter-cw-34 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-emerald-400/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="Node.js"
          >
            <SiNodedotjs className="w-full h-full text-[#339933]" aria-label="Node.js" />
          </div>
        </div>
      </div>

      {/* Ring 4: Express.js, MongoDB & MySQL */}
      <div className="orbit-track orbit-ccw-40 absolute w-[86%] h-[86%] sm:w-[470px] sm:h-[470px] lg:w-[540px] lg:h-[540px] rounded-full">
        <div className="absolute top-[14.6%] left-[14.6%] -translate-y-1/2 -translate-x-1/2">
          <div
            className="orbit-badge counter-ccw-40 w-8 h-8 rounded-full bg-neutral-900/95 backdrop-blur-md border border-neutral-700 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="Express.js"
          >
            <SiExpress className="w-full h-full text-white" aria-label="Express.js" />
          </div>
        </div>
        <div className="absolute top-[14.6%] right-[14.6%] -translate-y-1/2 translate-x-1/2">
          <div
            className="orbit-badge counter-ccw-40 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-emerald-400/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="MongoDB"
          >
            <SiMongodb className="w-full h-full text-[#47A248]" aria-label="MongoDB" />
          </div>
        </div>
        <div className="absolute bottom-[14.6%] right-[14.6%] translate-y-1/2 translate-x-1/2">
          <div
            className="orbit-badge counter-ccw-40 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-sky-300/80 shadow-md flex items-center justify-center hover:scale-110 transition-transform p-1.5"
            title="MySQL"
          >
            <SiMysql className="w-full h-full text-[#4479A1]" aria-label="MySQL" />
          </div>
        </div>
      </div>
    </div>
  );
};
