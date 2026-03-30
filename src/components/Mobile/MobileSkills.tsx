import React from 'react';
import { SKILLS } from '../../constants';
import { SquareTerminal, Zap } from "lucide-react"
import { FaStar } from "react-icons/fa6";

export const MobileSkills: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4 pt-8">
      <div className="flex justify-between items-end mb-8 px-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Skills</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest ring-1 ring-white/10">
          <img 
            src="https://avatars.githubusercontent.com/u/170252175?v=4" 
            alt="Profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Featured Card */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-10 group bg-surface-container shadow-2xl">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9yCQHQZ6lKZWfXLVcl1ZFHDrN5O1d2LKcv-mNWjcq3_L-iUM3R7l1ecyR7AaBHBDGWm3j6j-H1ZPnfROlzQ9gZ4cmfXpYqnkNu4bZ6cAqJiFzkHnULDAziA11e4w6X1a22zsUBorRx1LiJXyRERNcgadEyEQyn6RI_o7tCSlNYJfwbSrG_17Hd0tv_fE8IPRM09JOWxHjGc3Pi2F7yhPAv4OPeZC7ymF4KJhRIB5sVogxvBTXzaUwAlY6qkayjgfp8vBYSMLVgBI" 
          alt="Featured"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">FEATURED STACK</p>
          <h2 className="text-3xl font-bold text-white mb-4">Mastering Modern UI Architecture</h2>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl material-symbols-fill"><Zap/></span>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Full Stack Mastery</p>
              <p className="text-gray-300 text-[10px]">High Performance Systems</p>
            </div>
            <button className="bg-white text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase">Open</button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-10">
        {['Development Stack', 'Design Tools', 'Soft Skills'].map(cat => (
          <section key={cat}>
            <div className="flex justify-between items-center mb-4 px-2">
              <h3 className="text-xl font-bold text-white">{cat}</h3>
              <span className="text-blue-400 text-sm font-medium">See All</span>
            </div>
            <div className="space-y-4">
              {SKILLS.filter(s => s.category.includes(cat.split(' ')[0])).map(skill => 
              {
                const Icon = skill.icon;
                return (
                  <div key={skill.id} className="flex items-center gap-4 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-surface-container-highest flex items-center justify-center border border-white/5 shadow-lg relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundColor: skill.color }} />
                      <span className="material-symbols-outlined text-2xl" style={{ color: skill.color }}><Icon/></span>
                    </div>
                    <div className="flex-1 border-b border-white/5 pb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
                          <p className="text-[11px] text-gray-400">{skill.description}</p>
                        </div>
                        <button className="bg-surface-container-high text-blue-400 text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase">
                          {skill.status}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
