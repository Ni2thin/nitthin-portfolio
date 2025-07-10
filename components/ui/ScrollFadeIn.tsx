"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1.1,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn; 