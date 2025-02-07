import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5 },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0 },
  },
  exit: {
    scale: 1.5,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
