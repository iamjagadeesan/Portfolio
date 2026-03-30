import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Maximize2, FolderOpen } from "lucide-react";

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  isMinimized?: boolean;
}

export const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  onClose,
  onMinimize,
  children,
  icon,
  width = "850px",
  height = "520px",
  className = "",
  isMinimized = false,
}) => {
  const [isMaximized, setIsMaximized] = React.useState(false);

  /* =======================
     Actions
  ======================= */
  const handleMaximize = () => setIsMaximized((prev) => !prev);

  return (
    <AnimatePresence>
      {isOpen && !isMinimized && (
        <motion.div
          layout
          drag={!isMaximized}                // 🔥 enable drag when not maximized
          dragMomentum={false}              // smooth stop
          dragElastic={0.1}                 // slight bounce
          dragConstraints={!isMaximized ? {
            top: -200,
            bottom: 200,
            left: -400,
            right: 400,
          } : undefined}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            ...(isMaximized ? { x: 0, y: 0 } : {}),  // Reset both x and y when maximized
          }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`z-40 flex flex-col overflow-hidden shadow-2xl border border-outline-variant/20 glass-panel ${
            isMaximized
              ? "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen rounded-none"
              : "absolute top-20 left-1/2 -translate-x-1/2 rounded-lg"
          } ${isMaximized ? "" : className}`}
          style={isMaximized ? { } : { width, height }}
        >
          {/* =======================
              Title Bar (DRAG HANDLE)
          ======================= */}
          <div className="h-12 flex items-center px-4 shrink-0 select-none bg-white/5 cursor-grab active:cursor-grabbing">
            
            {/* Traffic Lights */}
            <div className="flex gap-2 cursor-default">
              
              {/* Close */}
              <button
                onClick={onClose}
                className="group w-3.5 h-3.5 rounded-full bg-[#FF5F56] flex items-center justify-center"
              >
                <X className="w-3 h-3 text-black/70 opacity-0 group-hover:opacity-100 transition" />
              </button>

              {/* Minimize */}
              <button
                onClick={onMinimize}
                className="group w-3.5 h-3.5 rounded-full bg-[#FFBD2E] flex items-center justify-center"
              >
                <Minus className="w-3 h-3 text-black/70 opacity-0 group-hover:opacity-100 transition" />
              </button>

              {/* Maximize */}
              <button
                onClick={handleMaximize}
                className="group w-3.5 h-3.5 rounded-full bg-[#27C93F] flex items-center justify-center"
              >
                <Maximize2 className="w-3 h-3 text-black/70 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </div>

            {/* Title */}
            <div className="flex-1 flex justify-center pointer-events-none">
              <div className="flex items-center gap-2 text-on-surface-variant text-[13px] font-medium">
                {icon || <FolderOpen className="w-4 h-4" />}
                <span>{title}</span>
              </div>
            </div>

            <div className="w-12"></div>
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};