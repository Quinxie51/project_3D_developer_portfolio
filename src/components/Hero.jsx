import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { UniverseCanvas, ComputersCanvas } from "./canvas";
import AnimatedText from "./AnimatedText";
import CosmicNavigation from "./CosmicNavigation";
import Projects from "./Projects";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Current location:', location.pathname);
  }, [location]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cosmicWords = [
    "Full Stack Developer",
    "Creative Coder",
    "Digital Architect",
    "Tech Innovator",
    "Problem Solver",
    "Code Explorer"
  ];

  return (
    <>
      {/* Bulletproof Background - Never Disappears */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #4d0099 75%, #6600cc 100%)',
          zIndex: -10,
          pointerEvents: 'none'
        }}
      />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative w-full h-screen mx-auto overflow-hidden"
        style={{
          background: 'transparent'
        }}
      >
        {/* Additional Background Layers */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #4d0099 75%, #6600cc 100%)',
            zIndex: 0
          }}
        />
        
        {/* Enhanced Cosmic Background */}
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/30" />
        
        {/* Additional Cosmic Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-radial from-purple-500/10 via-transparent to-black" />
        
        {/* Static Cosmic Grid - No Mouse Movement */}
        <div className="absolute inset-0 z-2 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Nebula Effect */}
        <div className="absolute inset-0 z-3">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* 3D Universe Canvas - Temporarily Disabled */}
        {/* <div className="absolute inset-0 z-4">
          <UniverseCanvas />
        </div> */}

        {/* 3D Computer Model - Stationary in Center */}
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl">
            <ComputersCanvas />
          </div>
        </div>

        {/* Main Content - Always on Top */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Cosmic Navigation */}
          <CosmicNavigation />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center max-w-4xl mx-auto px-4"
          >


            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className={`${styles.heroHeadText} text-white mb-4`}
              style={{
                textShadow: '0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4)',
              }}
            >
              Greetings, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Quinxie
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mb-8"
            >
              <p className={`${styles.heroSubText} text-white-100 mb-4`}>
                I'm a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  <AnimatedText words={cosmicWords} />
                </span>
              </p>
            </motion.div>

            {/* Cosmic Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Exploring the digital cosmos, crafting innovative solutions, and building 
              experiences that transcend the ordinary. Welcome to my universe of code and creativity.
            </motion.p>

            {/* Cosmic Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "15+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-purple-400/20"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Projects Section - Integrated below Hero */}
      <Projects />
    </>
  );
};

export default Hero;
