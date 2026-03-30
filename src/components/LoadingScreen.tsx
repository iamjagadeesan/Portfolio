import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-indigo-950 via-slate-900 to-blue-950 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo/Avatar with pulse */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                  '0 0 40px rgba(99, 102, 241, 0.6)',
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-linear-to-br from-primary-container to-secondary-container flex items-center justify-center border border-white/20 shadow-2xl"
            >
              <span className="text-5xl md:text-6xl font-bold text-white">JD</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Welcome to my <span className="bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant">
            Explore my skills, projects, and experience
          </p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 mt-12"
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-1.5 h-8 md:h-10 bg-linear-to-t from-primary to-purple-400 rounded-full"
              />
            ))}
          </div>
          <span className="text-sm md:text-base text-on-surface-variant font-medium ml-2">
            Loading...
          </span>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 md:bottom-12 text-xs md:text-sm text-on-surface-variant/70"
        >
          Full Stack Developer • Designer • Problem Solver
        </motion.p>
      </div>
    </motion.div>
  );
};
