import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNode, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiVite, SiC, SiCplusplus } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FaCuttlefish } from 'react-icons/fa6';


function Skills({toggle}) {
  const skills = [
    { Icon: SiVite, name: "Vite.js" },
    { Icon: FaReact, name: "React" },
    { Icon: FaNode, name: "Node.js" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: FaCss3Alt, name: "CSS" },
    { Icon: FaHtml5, name: "HTML" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaJava, name: "Java" },
    { Icon: SiCplusplus, name: "C++" },
    { Icon: SiC, name: "C" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: VscVscode, name: "VS Code" },
  ];

  return (
    <div
      className="w-full flex flex-col items-center gap-4 justify-center pt-16 lg:pt-8"
      data-aos="fade-left"
          data-aos-duration="500"
    >
  
    <div className="lg:mt-8 w-full flex flex-row justify-start items-center mx-2 lg:px-8">
    <div className={`text-nowrap relative text-2xl lg:text-4xl font-thin font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 px-2 rounded-lg`}>My stack</div>
    <div className="relative w-full h-[2px] lg:h-[2px] bg-gradient-to-r from-violet-700  to-transparent shadow-lg shadow-violet-800 ml-0 lg:ml-2 overflow-hidden rounded-lg"></div>
    </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-16 py-8 px-4">
        {skills.map(({ Icon, name }, idx) => (
          <div
  key={idx}
  className={`flex flex-col items-center justify-center p-2 lg:px-4 rounded-xl ${toggle?'bg-transparent lg:bg-gray-950':'bg-transparent lg:bg-gray-200'} drop-shadow-[0_0_4px_rgba(139,92,246,0)] lg:shadow-[0px_0px_30px_1px_rgba(91,33,182,0.5)]`}
>

            <div className="p-2 lg:p-4 rounded-full bg-gradient-to-r from-violet-600 via-violet-800/90 to-violet-900/90 shadow-lg">
              <Icon className="text-4xl md:text-4xl lg:text-6xl text-white/80" />
            </div>
            <p className={`mt-2 text-xs md:text-md lg:text-md  ${toggle?'text-white/80 font-normal':'text-violet-700 font-semibold'} `}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
