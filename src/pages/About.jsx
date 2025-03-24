import { useState, useEffect } from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import { GiGraduateCap } from 'react-icons/gi';
import { FaLaptop } from 'react-icons/fa';


const contentArray = [
  { title: 'Who Am I?', content: "I'm Jagadeesan, a passionate developer crafting digital experiences where design meets functionality." },
  { title: 'My Background', content: "I specialize in React, modern tools, and elegant designs to deliver seamless experiences. My journey started with curiosity, driven by the need to solve complex problems with simple and efficient solutions." },
  { title: 'My Strengths', content: "Strong in problem-solving, proficient in UI/UX design and development, and adaptable with a growth mindset." },
  { title: 'My Vision', content: "I aim to bridge the gap between creativity and logic, crafting solutions that not only function but inspire. Let's build a world where technology makes life easier, more connected, and innovative." }
];

const images = [`url(${pic1})`, `url(${pic2})`, `url(${pic3})`, `url(${pic4})`];

function About({ toggle, width }) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const stats = [
  { label: "5+ Projects", gradient: "bg-[conic-gradient(#6d28d9,transparent)]" },
  { label: "15+ Certifications", gradient: "bg-[conic-gradient(#6d28d9,#6d28d9,transparent)]" },
  { label: "100+ GitHub Commits", gradient: "bg-[conic-gradient(#6d28d9,#6d28d9)]" } // Updated stat
];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const visibleIndices = isMobile ? [index] : [(index) % contentArray.length, (index + 1) % contentArray.length];

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-8"
    {...(width > 500
        ? { "data-aos": "fade-left", "data-aos-duration": "500" }
        : {})}
    id="about"
     >
    <div className="lg:mt-8 w-full flex flex-row justify-start items-center lg:px-8"
    {...(width < 500
        ? { "data-aos": "fade-left", "data-aos-duration": "700" }
        : {})}
    >
    <div className={`text-nowrap relative text-2xl lg:text-4xl font-thin font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-violet-500 to-violet-700 px-2 rounded-lg`}>About Me</div>
    <div className="relative w-full h-[2px] lg:h-[2px] bg-gradient-to-r from-violet-700  to-transparent shadow-lg shadow-violet-800 ml-0 lg:ml-2 overflow-hidden rounded-lg"></div>
    </div>

     <div className="absolute inset-0 z-[-99] flex items-center justify-center min-h-screen opacity-[0.4] blur-2xl lg:translate-x-40">
        <div
          className="bg-violet-700 rounded-full blur-2xl w-1/2 lg:w-1/4 h-2/5 lg:h-2/4 translate-y-72 lg:translate-y-8 -m-12"
          style={{
            boxShadow: '0 0 30px rgba(192, 132, 252, 0.8), 0 0 40px rgba(192, 132, 252, 0.8), 0 0 60px rgba(192, 132, 252, 0.8)',
          }}
        ></div>
      </div>

    <div className="z-30 w-full h-full lg:h-screen flex flex-col lg:flex-row justify-between items-center gap-4 p-4 lg:p-12 lg:px-24 lg:pt-8">
      {/* Image Section */}
      <div className={` ${toggle?'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]':'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]'} h-auto lg:h-full w-full lg:w-1/3 flex flex-col justify-center items-center`}
      {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": "700" }
        : {})}
      >
        <div className="relative w-full h-[80vh] lg:h-full rounded-2xl shadow-lg border-2 border-violet-700 overflow-hidden">
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black/90"></div>
          <div className="absolute inset-0  z-30 flex flex-col justify-end items-start text-white p-8" >
            <h1 className="text-xl font-normal font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-700">{contentArray[index].title}</h1>
            <p className="text-sm w-full text-white/70">{contentArray[index].content}</p>
          </div>
          <div className="absolute inset-0 z-10 flex overflow-hidden">
              <div key={index} className="h-full w-full transition-all duration-700 bg-cover bg-start" style={{ backgroundImage: images[index] }} 
              data-aos="fade-left"
    data-aos-duration="700"></div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4 p-4">
        {/* Education & Experience */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Education */}
          <div className="border-l-2 border-violet-700 pl-6 w-full"
          {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": "700" }
        : {})}
          >
            <div className="mb-6 relative">
              <GiGraduateCap className={`absolute -left-10 text-3xl ${toggle?'bg-gray-950':'bg-gray-200'} text-violet-700 rounded-full`} />
              <div className={` ${toggle? 'bg-gray-950' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
                <h3 className={`text-xl font-semibold ${toggle?'text-gray-200':'text-gray-800'}`}>Master of Computer Applications</h3>
                <p className={`${toggle?'text-gray-400':'text-gray-600'}`}>SRM IST, Trichy</p>
                <p className={`text-xs lg:text-sm ${toggle?'text-gray-400':'text-gray-600'}`}>Graduated: 2024 | CGPA: 8.56</p>
              </div>
            </div>
            <div className="relative">
              <GiGraduateCap className={`absolute -left-10 text-3xl ${toggle?'bg-gray-950':'bg-gray-200'} text-violet-700 rounded-full`} />
              <div className={` ${toggle? 'bg-gray-950' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
                <h3 className={`text-xl font-semibold ${toggle?'text-gray-200':'text-gray-800'}`}>Bachelor of Science</h3>
                <p className={`${toggle?'text-gray-400':'text-gray-600'}`}>AVASC, Thanjavur</p>
                <p className={` text-xs lg:text-sm ${toggle?'text-gray-400':'text-gray-600'}`}>Graduated: 2022 | Percentage: 80.37%</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className={`w-full ${toggle?'bg-gray-950 text-gray-200':'bg-gray-200 text-gray-800'} rounded-lg shadow-md p-4 flex flex-col justify-evenly items-start`}
          {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": "700" }
        : {})}
          >
            <h1 className="text-xl text-violet-700 font-semibold flex items-center gap-2"><FaLaptop /> Experience</h1>
            <div className="flex flex-row justify-between items-center gap-8">
              <h1 className="text-sm lg:text-md font-semibold">Data Science Internship</h1>
              <p className="text-[.5rem] lg:text-xs italic">May 23 - June 23</p>
            </div>
            <p className="text-sm">SHIASH Info Solutions Private Limited, Chennai</p>
            <ul className="list-disc text-xs pl-4 lg:text-sm">
              <li>Gained hands-on experience in data analysis, preprocessing, and visualization.</li>
              <li>Applied machine learning techniques to solve real-world business challenges.</li>
            </ul>
          </div>
        </div>

        {/* Soft Skills & Other Interests */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Soft Skills */}
          <div className={`w-full py-4 ${toggle?'bg-gray-950 text-gray-200':'bg-gray-200 text-gray-800'} p-4 rounded-lg shadow-md`} 
          {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": "700" }
        : {})}
          >
            <h1 className="text-xl text-violet-700 font-semibold">Soft Skills</h1>
            <div className="mt-2">
              <p>Problem-Solving <span className="float-right">90%</span></p>
              <div className="w-full bg-gray-300 rounded-full h-1"><div className="bg-violet-700 h-1 w-9/10 rounded-full"></div></div>
              <p>Teamwork <span className="float-right">85%</span></p>
              <div className="w-full bg-gray-300 rounded-full h-1"><div className="bg-violet-700 h-1 w-4/5 rounded-full"></div></div>
            </div>
          </div>
          
          {/* Other Interests */}
          <div className={`w-full text-[.6rem] lg:text-xs flex flex-row justify-between items-center ${toggle ? 'bg-gray-950 text-gray-200' : 'bg-gray-200 text-gray-800'} p-4 rounded-lg shadow-md`}
          {...(width < 500
        ? { "data-aos": "fade-up", "data-aos-duration": "700" }
        : {})}
          >
  {stats.map((stat, index) => (
    <div key={index} className={`size-20 lg:size-24 rounded-full ${toggle ? 'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] lg:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]'} relative ${stat.gradient} p-[4px]`}>
      <div className={`p-1 text-wrap relative text-center flex flex-col justify-center items-center h-full w-full rounded-full ${toggle ? 'bg-gray-950' : 'bg-gray-200'} font-semibold`}>
        {stat.label}
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;