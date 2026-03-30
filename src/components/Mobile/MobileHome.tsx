import React from 'react';
import { motion } from 'motion/react';
import {
  House,
  Cog,
  Mail,
  Calendar,
  Zap,
  FolderOpen,
  Phone,
  LayoutGrid,
} from "lucide-react";

import { IoIosPerson } from "react-icons/io";

interface MobileAppIconProps {
  icon: string;
  label: string;
  gradient: string;
  onClick: () => void;
  fill?: boolean;
}

export const MobileAppIcon: React.FC<MobileAppIconProps> = ({ icon, label, gradient, onClick, fill }) => {
  return (
    <div className="flex flex-col items-center gap-1.5" onClick={onClick}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className={`w-[60px] h-[60px] rounded-[14px] bg-gradient-to-b ${gradient} flex items-center justify-center shadow-lg transition-transform cursor-pointer`}
      >
        <span className={`material-symbols-outlined text-white text-[32px] ${fill ? 'material-symbols-fill' : ''}`}>
          {icon}
        </span>
      </motion.div>
      <span className="text-white text-[11px] font-medium tracking-wide">{label}</span>
    </div>
  );
};

export const MobileHome: React.FC<{ onAppClick: (app: any) => void }> = ({ onAppClick }) => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-7 px-7 py-6">
      <MobileAppIcon icon={<House /> } label="Home" gradient="from-blue-400 to-blue-600" onClick={() => onAppClick(null)} fill />
      <MobileAppIcon icon={<IoIosPerson />} label="About Me" gradient="from-gray-700 to-gray-900" onClick={() => onAppClick('about')} fill />
      <MobileAppIcon icon={<Zap />} label="My Skills" gradient="from-amber-400 to-orange-600" onClick={() => onAppClick('skills')} fill />
      <MobileAppIcon icon={<Calendar />} label="Experience" gradient="from-indigo-500 to-indigo-800" onClick={() => onAppClick('experience')} fill />
      <MobileAppIcon icon={<LayoutGrid />} label="Projects" gradient="from-emerald-400 to-teal-700" onClick={() => onAppClick('projects')} fill />
      <MobileAppIcon icon={<Phone />} label="Contact" gradient="from-purple-500 to-fuchsia-700" onClick={() => onAppClick('contact')} fill />
      <MobileAppIcon icon={<Mail />} label="Mail" gradient="from-sky-400 to-blue-500" onClick={() => onAppClick('contact')} fill />
    </div>
  );
};
