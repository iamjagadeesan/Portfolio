import React, { useState, useContext } from "react";
import ProjectCard from '../component/ProjectCard.jsx';
import { FaJs, FaReact, FaHeart, FaRegHeart, FaNode } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiMongodb, SiExpress } from "react-icons/si";

const Projects = ({toggle, width}) => {

  const [projectData, setProjectData] = useState([
    {
      title: "FeastReady",
      iframeSrc: "https://feastready-frontend.onrender.com",
      description: [
        "A React-based food ordering web app styled with Tailwind CSS and powered by a Node.js backend with MongoDB.",
        "Features South Indian cuisine search, cart management, promo code discounts, delivery details, and order tracking.",
      ],
      technologies: [SiVite, FaReact, RiTailwindCssFill, FaNode, SiExpress, SiMongodb],
      likeLabel: "Like this",
      heart: false,
      checkLabel: "Check it out",
    },
    {
      title: "MoviesBuff",
      iframeSrc: "https://iamjagadeesan.github.io/MoviesBuff/",
      description: [
        "A React-based web app styled with Tailwindcss and powered by the TMDB API.",
        "Features Now playing, Top Rated, and Popular movies, search functionality, a watchlist, and detailed movie information.",
      ],
      technologies: [SiVite, FaReact, RiTailwindCssFill],
      likeLabel: "Like this",
      heart: false,
      checkLabel: "Check it out",
    },
    {
      title: "Weathercheck",
      iframeSrc: "https://iamjagadeesan.github.io/Weathercheck/",
      description: [
        "A React-based weather app styled with Tailwindcss.",
        "Displays real-time weather data, temperature, and forecast information using OpenWeatherMap API.",
      ],
      technologies: [SiVite, FaReact, RiTailwindCssFill],
      likeLabel: "Like this",
      heart: false,
      checkLabel: "Check it out",
    },
    {
      title: "TodoList",
      iframeSrc: "https://iamjagadeesan.github.io/Todolist/",
      description: [
        "A simple, user-friendly app to manage daily tasks effectively.",
        "Features add, edit, delete, and mark tasks as completed.",
      ],
      technologies: [SiVite, FaReact, RiTailwindCssFill],
      likeLabel: "Like this",
      heart: false,
      checkLabel: "Check it out",
    },
  ]);

  // Toggle heart state
  const toggleHeart = (index) => {
    setProjectData((prevData) =>
      prevData.map((project, idx) =>
        idx === index ? { ...project, heart: true } : project
      )
    );
  };

  return (
    <div id="projects" className="w-full h-auto text-center flex flex-col justify-center items-center pt-16 lg:pt-10"
    {...(width > 500
        ? { "data-aos": "fade-left", "data-aos-duration": "500" }
        : {})}
    >
    
    <div className="lg:mt-8 w-full flex flex-row justify-start items-center mx-2 lg:px-8"
    {...(width < 500
        ? { "data-aos": "fade-left", "data-aos-duration": "700" }
        : {})}
    >
    <div className="text-nowrap relative text-2xl  lg:text-4xl font-thin font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-600 to-violet-800 px-2 rounded-lg">My URLs</div>
    <div className="relative w-full h-[2px] lg:h-[3px] bg-gradient-to-r from-violet-700 to-transparent sm:ml-0 lg:ml-2 overflow-hidden rounded-lg"></div>
    </div>

      {projectData.map((project, idx) => (
        <ProjectCard
          key={idx}
          {...project}
          toggle={toggle}
          onLikeClick={() => toggleHeart(idx)} // Pass click handler
          width={width}
        />
      ))}
    </div>
  );
};

export default React.memo(Projects);
