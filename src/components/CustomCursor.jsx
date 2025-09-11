import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      const newPoint = { x: e.clientX, y: e.clientY, time: Date.now() };
      trailRef.current = [newPoint, ...trailRef.current.slice(0, 19)]; // Keep last 20 points
      setTrail([...trailRef.current]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cosmic Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={`${point.x}-${point.y}-${point.time}`}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 2,
            top: point.y - 2,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: (20 - index) / 20 * 0.6,
            scale: (20 - index) / 20 * 0.5 + 0.5
          }}
          transition={{ duration: 0.1 }}
        >
          <div 
            className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg"
            style={{
              boxShadow: `0 0 ${(20 - index) * 2}px rgba(168, 85, 247, ${(20 - index) / 20 * 0.8})`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Main Cosmic Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : (isHovering ? 1.3 : 1),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Outer Glow Ring */}
        <div 
          className="absolute w-6 h-6 rounded-full border-2 border-purple-400"
          style={{
            boxShadow: `0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.2)`,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          }}
        />
        
        {/* Inner Core */}
        <div 
          className="absolute w-3 h-3 rounded-full top-1.5 left-1.5"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(236, 72, 153, 0.6) 100%)',
            boxShadow: `0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(168, 85, 247, 0.6)`,
          }}
        />
        
        {/* Pulsing Effect */}
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-purple-300 top-[-4px] left-[-4px]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: `0 0 25px rgba(168, 85, 247, 0.4)`,
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
