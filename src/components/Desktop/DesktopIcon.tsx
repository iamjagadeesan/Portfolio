import React from 'react';
import { motion } from 'motion/react';

interface DesktopIconProps {
  icon: React.ElementType;
  label: string;
  gradient: string;
  onClick: () => void;
  fill?: boolean;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, gradient, onClick, fill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group flex flex-col items-center gap-1 cursor-default w-24"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-active:brightness-75 transition-all`}>
        <span className={`material-symbols-outlined text-white text-4xl ${fill ? 'material-symbols-fill' : ''}`}>
          {icon}
        </span>
      </div>
      <span className="text-[11px] font-medium text-white drop-shadow-md px-2 py-0.5 rounded bg-black/20 backdrop-blur-sm">
        {label}
      </span>
    </motion.div>
  );
};
