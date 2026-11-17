import React from 'react';
import { motion, type Variants } from 'motion/react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.08,
} as const;

interface MotionBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export const FadeInMount: React.FC<MotionBlockProps> = ({
  children,
  className,
  delay = 0,
  y = 14,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInView: React.FC<MotionBlockProps> = ({
  children,
  className,
  delay = 0,
  y = 18,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: EASE_OUT_EXPO,
    },
  },
};

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerViewGroup: React.FC<StaggerGridProps> = ({ children, className }) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerMountGroup: React.FC<StaggerGridProps> = ({ children, className }) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};
