import React from 'react';
import { PROJECTS } from '../../constants';
import { IoIosApps } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

export const ProjectsView: React.FC = () => {
  const featured = PROJECTS[0];
  const others = PROJECTS.slice(1);

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-surface-container-low/50 backdrop-blur-xl flex flex-col py-4 gap-6 shrink-0">
        <section className="px-4">
          <h3 className="text-[10px] font-bold text-outline uppercase tracking-widest px-2 mb-2">Favorites</h3>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/20 text-primary font-medium text-sm">
              <span className="material-symbols-outlined text-[18px] material-symbols-fill"><IoIosApps /></span>
              Projects
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-on-surface-variant hover:bg-white/5 font-medium text-sm cursor-pointer">
              <span className="material-symbols-outlined text-[18px]"><MdOutlineSchedule /></span>
              Experience
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md text-on-surface-variant hover:bg-white/5 font-medium text-sm cursor-pointer">
              <span className="material-symbols-outlined text-[18px]"><IoMdMail /></span>
              Contact
            </div>
          </div>
        </section>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-surface-dim/30 p-8 overflow-y-auto no-scrollbar">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Selected Projects</h1>
        
        <div className="grid grid-cols-2 gap-4 pb-10">
          {/* Featured Project */}
          <a href={featured.url} target="_blank" rel="noopener noreferrer" key={featured.id} className="col-span-2">
          <div className="group relative overflow-hidden rounded-xl h-64 bg-surface-container-high border border-outline-variant/10 cursor-pointer">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            <div className="absolute bottom-0 p-6">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                {featured.category}
              </span>
              <h4 className="text-2xl font-bold">{featured.title}</h4>
              <p className="text-on-surface-variant text-sm mt-1 max-w-md">{featured.description}</p>
            </div>
          </div>
          </a>

          {/* Other Projects */}
          {others.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id}>
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl h-48 bg-surface-container-high border border-outline-variant/10 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="text-on-surface-variant text-xs mt-1">{project.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
