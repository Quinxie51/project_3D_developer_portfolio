import React from 'react';
import { motion } from 'framer-motion';

const GlassPanel = ({ 
  children, 
  className = "", 
  variant = "light", // "light" or "dark"
  hasInnerStroke = false,
  padding = "p-6",
  borderRadius = "rounded-2xl",
  hover = true,
  ...props 
}) => {
  const baseClasses = `
    ${padding} 
    ${borderRadius} 
    backdrop-blur-xl 
    border 
    transition-all 
    duration-300 
    ease-out
  `;

  const variants = {
    light: `
      bg-white/5 
      border-white/10 
      shadow-glass-light
      hover:bg-white/10 
      hover:border-white/20
    `,
    dark: `
      bg-black/30 
      border-white/5 
      shadow-glass
      hover:bg-black/40 
      hover:border-white/10
    `
  };

  const innerStrokeClass = hasInnerStroke ? "inner-stroke" : "";

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${innerStrokeClass} ${className}`}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -2,
        transition: { duration: 0.2 }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassPanel;
