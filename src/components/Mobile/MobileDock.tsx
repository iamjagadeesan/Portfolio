import React from 'react';
import { motion } from 'motion/react';
import {
  House,
  Cog,
  Mail
} from "lucide-react";
import { IoIosPerson } from "react-icons/io";

interface MobileDockProps {
  activeApp: string | null;
  onAppClick: (app: any) => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({ activeApp, onAppClick }) => {
  return (
    <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[350px] h-[92px] bg-white/10 backdrop-blur-[30px] rounded-[34px] flex items-center justify-around px-4 z-50 border border-white/5 shadow-2xl">
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => onAppClick(null)}
        className={`w-[60px] h-[60px] rounded-[16px] bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center shadow-md ${activeApp === null ? 'scale-110' : ''}`}
      >
        <span className="material-symbols-outlined text-white material-symbols-fill"><House /></span>
      </motion.div>
      
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => onAppClick('projects')}
        className={`w-[60px] h-[60px] rounded-[16px] bg-gradient-to-br from-emerald-300 to-emerald-500 flex items-center justify-center shadow-md ${activeApp === 'projects' ? 'scale-110' : ''}`}
      >
        <span className="material-symbols-outlined text-white material-symbols-fill"><Cog /></span>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => onAppClick('about')}
        className={`w-[60px] h-[60px] rounded-[16px] bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center shadow-md ${activeApp === 'about' ? 'scale-110' : ''}`}
      >
        <span className="material-symbols-outlined text-gray-800 material-symbols-fill"><IoIosPerson className={`text-3xl`} /></span>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => onAppClick('contact')}
        className={`w-[60px] h-[60px] rounded-[16px] bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center shadow-md ${activeApp === 'contact' ? 'scale-110' : ''}`}
      >
        <span className="material-symbols-outlined text-white material-symbols-fill"><Mail /></span>
      </motion.div>
    </nav>
  );
};
