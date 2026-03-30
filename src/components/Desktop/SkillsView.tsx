import React from 'react';
import { SKILLS } from '../../constants';
import { Search, SquareTerminal } from "lucide-react"
import { FaStar } from "react-icons/fa6";

export const SkillsView: React.FC = () => {
  const designTools = SKILLS.filter(s => s.category === 'Design');
  const devStack = SKILLS.filter(s => s.category === 'Development');
  const softSkills = SKILLS.filter(s => s.category === 'Soft Skills');

  return (
    <div className="w-screen flex-1 flex flex-col overflow-hidden bg-surface/75 glass-effect">
      {/* Window Header Navigation */}
      <header className="h-16 flex items-center px-6 shrink-0 relative border-b border-outline-variant/10">
        <div className="flex mx-auto bg-surface-container-low p-1 rounded-lg">
          <button className="px-6 py-1.5 rounded-md text-sm font-medium bg-surface-bright text-primary shadow-sm">All Skills</button>
          <button className="px-6 py-1.5 rounded-md text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Core Stack</button>
          <button className="px-6 py-1.5 rounded-md text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Upcoming</button>
        </div>
        <div className="absolute right-6 flex items-center bg-surface-container-lowest/50 px-3 py-1.5 rounded-md border border-outline-variant/10 w-48">
          <span className="material-symbols-outlined text-sm text-on-surface-variant mr-2"><Search /></span>
          <span className="text-xs text-on-surface-variant/60 font-medium">Search Skills</span>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-10 pb-12">
        {/* Featured Skill Banner */}
        <div className="mt-8 mb-10 group relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary-container to-secondary-container flex items-center p-12 cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdw0Qs6NrExa00UB5lyjqMIQguv6_cp6qURuSdaBdXy0Y3Dx2fuKmHZSWvCUpU_cJ1WSPyt6toNGhsAcxLvw5YkHoUEI-MNKiWPZXlMZ9Vx__3qwl_JVunADbHX_dbtxniFTIKt6VB4CE56yrYjS98C9zsVYaeywQzs3RwDBUzq4NBVE4fe9D6qK1B8IcwsresKrxehOoeru0pqYpgJmCH5iwuNpk6U03taHpfToVz7avZK-UeRrarbql4hBWg0lVpW34j1kxBBaQ')" }}
          />
          <div className="relative z-10 flex gap-10 items-center">
            <div className="w-32 h-32 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center p-4">
              <span className="material-symbols-outlined text-primary-container material-symbols-fill"><SquareTerminal className={`size-28`} /></span>
            </div>
            <div>
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded mb-3 inline-block">Featured Skill</span>
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">Full Stack Architecture</h2>
              <p className="text-white/80 text-lg max-w-md">Mastering the bridge between scalable backends and fluid frontends.</p>
              <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined text-yellow-400 text-sm material-symbols-fill"><FaStar /></span>
                ))}
                <span className="text-white/60 text-xs ml-2">5.0 Proficiency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        {[
          { title: 'Design Tools', skills: designTools },
          { title: 'Development Stack', skills: devStack },
          { title: 'Soft Skills', skills: softSkills }
        ].map((category) => (
          <section key={category.title} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-on-surface">{category.title}</h3>
              <button className="text-primary text-sm font-semibold hover:underline">See All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill) => {

                const Icon = skill.icon;

                return (
                <div key={skill.id} className="flex items-center p-4 rounded-xl hover:bg-surface-container-high transition-all duration-300 cursor-pointer group">
                  <div 
                    className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/10 group-hover:scale-105 transition-transform"
                    style={{ color: skill.color }}
                  >
                    <span className="material-symbols-outlined text-3xl"><Icon className={`text-3xl`} /></span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-on-surface">{skill.name}</h4>
                    <p className="text-xs text-on-surface-variant line-clamp-1">{skill.description}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <span 
                          key={i} 
                          className={`material-symbols-outlined text-[10px] ${i <= skill.rating ? 'text-primary material-symbols-fill' : 'text-on-surface-variant/30'}`}
                        >
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="bg-secondary-container/50 text-primary text-[11px] font-bold px-4 py-1.5 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
                    {skill.status}
                  </button>
                </div>
              )}
                )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
