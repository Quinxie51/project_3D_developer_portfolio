import React from 'react';
import { motion } from 'framer-motion';

const Tag = ({ 
  children, 
  variant = "default", // "default", "primary", "secondary"
  size = "md", // "sm", "md", "lg"
  className = "",
  onClick,
  interactive = false
}) => {
  const baseClasses = `
    inline-flex 
    items-center 
    justify-center 
    font-text 
    font-medium 
    tracking-wide 
    transition-all 
    duration-200 
    ease-out
    rounded-full
  `;

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base"
  };

  const variantClasses = {
    default: `
      bg-white/5 
      text-gray-200 
      border 
      border-white/10 
      hover:bg-white/10 
      hover:border-white/20
    `,
    primary: `
      bg-white/10 
      text-white 
      border 
      border-white/20 
      hover:bg-white/20 
      hover:border-white/30
    `,
    secondary: `
      bg-black/30 
      text-gray-300 
      border 
      border-white/5 
      hover:bg-black/40 
      hover:border-white/10
    `
  };

  const interactiveClasses = interactive ? "cursor-pointer hover:scale-105" : "";

  return (
    <motion.span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      whileHover={interactive ? { scale: 1.05 } : {}}
      whileTap={interactive ? { scale: 0.95 } : {}}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
