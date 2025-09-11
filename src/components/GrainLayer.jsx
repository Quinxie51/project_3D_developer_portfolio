import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GrainLayer = ({ isVisible = true, opacity = 0.03 }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  if (!isVisible || !isEnabled) return null;

  return (
    <>
      {/* Grain overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: opacity,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Toggle button - positioned in top-right corner */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="fixed top-4 right-4 z-50 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white text-xs hover:bg-black/30 transition-colors duration-200"
        title={isEnabled ? "Disable grain" : "Enable grain"}
      >
        {isEnabled ? "G" : "G"}
      </button>
    </>
  );
};

export default GrainLayer;
