import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CosmicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.05 }}
      />

      {/* Cursor Particles */}
      {isHovering && (
        <motion.div
          className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-30"
          initial={{ 
            x: mousePosition.x - 4, 
            y: mousePosition.y - 4,
            scale: 0,
            opacity: 1
          }}
          animate={{
            x: mousePosition.x - 4 + (Math.random() - 0.5) * 100,
            y: mousePosition.y - 4 + (Math.random() - 0.5) * 100,
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}

      {/* Cursor Ring */}
      <motion.div
        className="fixed w-12 h-12 border border-purple-400/50 rounded-full pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
};

export default CosmicCursor;
