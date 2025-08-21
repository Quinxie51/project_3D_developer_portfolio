import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CosmicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add new position to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }];
        // Keep only last 20 positions for the tail
        return newTrail.slice(-20);
      });
      
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Remove old trail positions
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(pos => Date.now() - pos.id < 1000));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* Cosmic trail */}
      {trail.map((pos, index) => (
        <motion.div
          key={pos.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-60"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            scale: [1, 0.5, 0],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Cosmic particles around cursor */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          style={{
            left: mousePosition.x + Math.cos(i * Math.PI / 4) * 30,
            top: mousePosition.y + Math.sin(i * Math.PI / 4) * 30,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Cosmic ring */}
      <motion.div
        className="fixed w-8 h-8 border border-purple-400/50 rounded-full"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Energy field */}
      <motion.div
        className="fixed w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default CosmicCursor;
