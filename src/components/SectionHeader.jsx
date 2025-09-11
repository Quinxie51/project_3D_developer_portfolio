import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "", 
  align = "left",
  showLine = true 
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <motion.div 
      className={`${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {subtitle && (
        <motion.p 
          className="text-gray-300 text-sm font-text tracking-wide uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tighter leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      {showLine && (
        <motion.div 
          className={`mt-6 h-px bg-gradient-to-r ${
            align === "center" 
              ? "from-transparent via-white/20 to-transparent mx-auto w-24" 
              : align === "right"
              ? "from-transparent to-white/20 w-24 ml-auto"
              : "from-white/20 to-transparent w-24"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      )}
    </motion.div>
  );
};

export default SectionHeader;
