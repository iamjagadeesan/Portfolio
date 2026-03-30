import React from 'react';
import { PROJECTS } from '../../constants';

export const MobileProjects: React.FC = () => {
  const featured = PROJECTS[0];
  const others = PROJECTS.slice(1);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4 pt-8">
      <div className="mb-8 px-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-1">Projects</h1>
        <p className="text-on-surface-variant text-sm font-medium uppercase tracking-widest">LATEST WORK & EXPERIMENTS</p>
      </div>

      <section className="mb-10 group">
        <a href={featured.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl active:scale-[0.98] transition-transform">
          <img 
            src={featured.image} 
            alt={featured.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest mb-3">Featured Case Study</span>
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{featured.title}</h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-[90%]">{featured.description}</p>
          </div>
        </div>
        </a>
      </section>

      <div className="grid grid-cols-2 gap-4">
        {others.map(project => (
          <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} className="block">
          <div key={project.id} className="flex flex-col gap-2 group">
            <div className="aspect-square rounded-xl overflow-hidden relative active:scale-95 transition-transform bg-surface-container shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="px-1">
              <p className="text-[13px] font-semibold text-white">{project.title}</p>
              <p className="text-[11px] text-on-surface-variant font-medium">{project.category}</p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};
