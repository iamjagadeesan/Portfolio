import { FaJs, FaReact, FaHeart, FaRegHeart } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
function ProjectCard({
  toggle,
  title,
  iframeSrc,
  description,
  technologies,
  likeLabel,
  heart,
  onLikeClick,
  checkLabel,
  width
}) {

  return (  // Added return statement
    <div className={` ${toggle?'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]':'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]'} relative my-12 h-4/5 md:h-[50vh] lg:h-[70vh] w-[90vw] md:w-3/4 lg:w-2/3 bg-[conic-gradient(transparent,transparent,#5B21B6,transparent,transparent,#5B21B6,#5B21B6)] rounded-2xl p-[1px] lg:p-[2px] `}
    {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": `500` }
        : {})}
    >
      <h1 className="absolute font-thin text-violet-700 font-display text-xl md:text-2xl lg:text-4xl text-center -translate-y-5 md:-translate-y-6 lg:-translate-y-8 ml-[50%]">
        {title}
      </h1>
      <div className={`h-full w-full ${toggle?'bg-slate-950':'bg-gray-200'} rounded-2xl flex flex-col md:flex-row lg:flex-row justify-between items-center p-4 md:p-4 lg:p-4 gap-4`}>
        {/* Iframe and Technologies */}
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="relative h-4/5 lg:h-4/5 bg-white/40 w-full rounded-xl cursor-not-allowed">
            <iframe
              src={iframeSrc}
              className="h-full w-full rounded-xl pointer-events-none bg-white"
              title={`${title} Demo`}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div className={`mt-4 flex flex-row justify-evenly items-center w-full text-3xl md:text-3xl lg:text-5xl ${toggle?'text-white/80':'text-gray-800'}`}>
            {technologies.map((TechIcon, idx) => (
              <TechIcon key={idx} />
            ))}
          </div>
        </div>

        {/* Description and Actions */}
        <div className="relative h-full w-full md:w-2/3 lg:w-1/2 flex flex-col justify-between items-center">
          <ul className={`md:h-5/6 lg:h-full md:w-full ml-1 md:ml-4 w-5/6 lg:w-4/5 flex flex-col justify-center items-start  gap-2 lg:gap-8 list-disc text-start text-xs md:text-sm lg:text-lg ${toggle?'text-white/75':'text-gray-800'}`}>
            {description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          <div className="flex flex-row justify-between items-center mt-2 w-3/4 md:w-2/3 lg:w-full">
            {/* Like Button */}
            <button
              className="relative hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] bg-gray-200 text-violet-700 h-auto p-2 font-semibold flex flex-row justify-evenly items-center gap-1 md:gap-1 lg:gap-2 text-xs lg:text-lg cursor-pointer border-2 lg:border-2 border-violet-800 rounded-xl transition-all duration-300"
              onClick={onLikeClick} // Handle click
            >
              <span className="lg:block block md:hidden">{likeLabel}</span>
              <span className="text-lg md:text-xl lg:text-md">
                {heart ? <FaHeart /> : <FaRegHeart />}
              </span>
            </button>

            {/* Check it out Button */}
            <a
              href={iframeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] h-auto p-2 font-normal text-white flex flex-row justify-evenly items-center gap-2 md:gap-1 lg:gap-2 text-xs lg:text-lg cursor-pointer ${toggle?'bg-white/10':'bg-violet-700'} backdrop-blur-sm border-2 border-violet-700 rounded-xl transition-all duration-200`}
            >
              <span className="lg:block block md:hidden">{checkLabel}</span>
              <span className="text-lg md:text-xl lg:text-md">
                <BsBoxArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
