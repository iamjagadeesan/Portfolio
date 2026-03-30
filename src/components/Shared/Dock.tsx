import React from "react";
import { motion } from "motion/react";
import {
  House,
  Cog,
  LayoutGrid,
  CalendarRange,
  FolderOpen,
  Mail
} from "lucide-react";

/* =======================
   Dock Icon Component
======================= */

interface DockIconProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isMinimized?: boolean;
  onClick: () => void;
}

export const DockIcon: React.FC<DockIconProps> = ({
  icon,
  label,
  isActive,
  isMinimized,
  onClick
}) => {
  const Icon = icon;

  return (
    <div className="group relative px-2" onClick={onClick}>
      <motion.div
        whileHover={{ scale: 1.2, y: -10 }}
        transition={{ type: "spring", damping: 15, stiffness: 400 }}
        className={`p-2 2xl:p-3 transition-all duration-300 ease-out cursor-pointer rounded-xl ${
          isActive
            ? "bg-black/20 scale-110 shadow-lg text-violet-500"
            : isMinimized
            ? "bg-black/15 text-slate-400"
            : "text-slate-200"
        }`}
      >
        <Icon className="w-7 2xl:w-8 h-7 2xl:h-8" />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700/80 backdrop-blur-md rounded text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
        {label}
      </div>

      {/* Active Dot */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      )}

      {/* Minimized Badge */}
      {isMinimized && !isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
      )}
    </div>
  );
};

/* =======================
   Dock Component
======================= */

interface DockProps {
  activeApp: string | null;
  onAppClick: (app: string | null) => void;
  minimizedApps?: (string | null)[];
  onRestore?: (app: string | null) => void;
}

export const Dock: React.FC<DockProps> = ({
  activeApp,
  onAppClick,
  minimizedApps = [],
  onRestore = () => {}
}) => {
  // Helper to handle app click - restore if minimized, otherwise just click
  const handleDockClick = (app: string | null) => {
    if (minimizedApps.includes(app)) {
      onRestore(app);
    } else {
      onAppClick(app);
    }
  };

  return (
    <footer className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-3xl rounded-[24px] shadow-[0_0_64px_rgba(0,0,0,0.08)] select-none">
      
      <DockIcon
        icon={House}
        label="Home"
        isActive={activeApp === null}
        onClick={() => handleDockClick(null)}
      />

      <DockIcon
        icon={Cog}
        label="About Me"
        isActive={activeApp === "about"}
        isMinimized={minimizedApps.includes("about")}
        onClick={() => handleDockClick("about")}
      />

      <DockIcon
        icon={LayoutGrid}
        label="Skills"
        isActive={activeApp === "skills"}
        isMinimized={minimizedApps.includes("skills")}
        onClick={() => handleDockClick("skills")}
      />

      <div className="w-px h-10 bg-white/10 mx-1" />

      <DockIcon
        icon={CalendarRange}
        label="Experience"
        isActive={activeApp === "experience"}
        isMinimized={minimizedApps.includes("experience")}
        onClick={() => handleDockClick("experience")}
      />

      <DockIcon
        icon={FolderOpen}
        label="Projects"
        isActive={activeApp === "projects"}
        isMinimized={minimizedApps.includes("projects")}
        onClick={() => handleDockClick("projects")}
      />

      <DockIcon
        icon={Mail}
        label="Contact"
        isActive={activeApp === "contact"}
        isMinimized={minimizedApps.includes("contact")}
        onClick={() => handleDockClick("contact")}
      />

    </footer>
  );
};

// import React from 'react';
// import { motion } from 'motion/react';

// interface DockIconProps {
//   icon: string;
//   label: string;
//   isActive?: boolean;
//   onClick: () => void;
//   fill?: boolean;
// }

// export const DockIcon: React.FC<DockIconProps> = ({ icon, label, isActive, onClick, fill }) => {
//   return (
//     <div className="group relative px-2" onClick={onClick}>
//       <motion.div
//         whileHover={{ scale: 1.2, y: -10 }}
//         transition={{ type: 'spring', damping: 15, stiffness: 400 }}
//         className={`p-3 transition-all duration-300 ease-out cursor-default rounded-xl ${
//           isActive ? 'bg-white/20 scale-110 shadow-lg text-blue-400' : 'text-slate-200'
//         }`}
//       >
//         <span className={`material-symbols-outlined text-[32px] block ${fill ? 'material-symbols-fill' : ''}`}>
//           {icon}
//         </span>
//       </motion.div>
//       <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface-bright/80 backdrop-blur-md rounded text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
//         {label}
//       </div>
//       {isActive && (
//         <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
//       )}
//     </div>
//   );
// };

// export const Dock: React.FC<{ activeApp: string | null; onAppClick: (app: any) => void }> = ({ activeApp, onAppClick }) => {
//   return (
//     <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-3xl rounded-[24px] shadow-[0_0_64px_rgba(0,0,0,0.08)] select-none">
//       <DockIcon icon=<House /> label="Home" isActive={activeApp === null} onClick={() => onAppClick(null)} fill />
//       <DockIcon icon="settings" label="About Me" isActive={activeApp === 'about'} onClick={() => onAppClick('about')} />
//       <DockIcon icon="apps" label="Skills" isActive={activeApp === 'skills'} onClick={() => onAppClick('skills')} />
//       <div className="w-px h-10 bg-white/10 mx-1" />
//       <DockIcon icon="calendar_month" label="Experience" isActive={activeApp === 'experience'} onClick={() => onAppClick('experience')} />
//       <DockIcon icon="photo_library" label="Projects" isActive={activeApp === 'projects'} onClick={() => onAppClick('projects')} />
//       <DockIcon icon="mail" label="Contact" isActive={activeApp === 'contact'} onClick={() => onAppClick('contact')} />
//     </footer>
//   );
// };
