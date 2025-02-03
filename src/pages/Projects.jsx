import React, { useState, useContext } from "react";
import ProjectCard from '../component/ProjectCard.jsx';
import { FaJs, FaReact, FaHeart, FaRegHeart } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = ({toggle}) => {

  // State for managing project hearts
  const [projectData, setProjectData] = useState([
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
    <div id="projects" className="sm:pt-12 w-full h-auto text-center flex flex-col justify-center items-center my-12">
    
    <div className="lg:mt-8 w-full flex flex-row justify-start items-center mx-2 lg:px-8">
    <div className="text-nowrap relative text-xl md:text-2xl lg:text-4xl font-thin font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-600 to-violet-800 px-2 rounded-lg">My URLs</div>
    <div className="relative w-full h-[2px] lg:h-[3px] bg-gradient-to-r from-violet-700 to-transparent sm:ml-0 lg:ml-2 overflow-hidden rounded-lg"></div>
    </div>

      {projectData.map((project, idx) => (
        <ProjectCard
          key={idx}
          {...project}
          toggle={toggle}
          onLikeClick={() => toggleHeart(idx)} // Pass click handler
        />
      ))}
    </div>
  );
};

export default React.memo(Projects);
