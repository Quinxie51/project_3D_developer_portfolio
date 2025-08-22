import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, useGLTF } from '@react-three/drei';

const Spaceship = ({ isExploring, isExiting, onExploreComplete }) => {
  const spaceshipRef = useRef();
  const { scene } = useGLTF('/spaceship.glb');
  
  useFrame((state) => {
    if (spaceshipRef.current) {
      if (isExploring) {
        // No rotation, just gentle floating during exploration
        spaceshipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        spaceshipRef.current.rotation.y = 0;
        
        // After 5 seconds of exploration, trigger completion (increased from 3)
        if (state.clock.elapsedTime > 5) {
          onExploreComplete();
        }
      } else if (isExiting) {
        // Gentle floating during exit (no rotation)
        spaceshipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        spaceshipRef.current.rotation.y = 0;
      } else {
        // Gentle floating animation - no rotation
        spaceshipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        spaceshipRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <primitive 
      ref={spaceshipRef}
      object={scene} 
      scale={[2, 2, 2]} 
      position={[0, 0, 0]}
    />
  );
};

const SpaceshipFallback = ({ isExploring, isExiting }) => {
  const fallbackRef = useRef();
  
  useFrame((state) => {
    if (fallbackRef.current) {
      if (isExploring) {
        // No rotation, just gentle floating during exploration
        fallbackRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        fallbackRef.current.rotation.y = 0;
      } else if (isExiting) {
        // Gentle floating during exit (no rotation)
        fallbackRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        fallbackRef.current.rotation.y = 0;
      } else {
        // Gentle floating animation - no rotation
        fallbackRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        fallbackRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <mesh ref={fallbackRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 3]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
    </mesh>
  );
};

const StarField = () => {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
};

const TypewriterText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100 + Math.random() * 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Airlock = () => {
  const navigate = useNavigate();
  const [isExploring, setIsExploring] = useState(false);
  const [isInsideShip, setIsInsideShip] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleDockAndBoard = () => {
    setIsExploring(true);
  };

  const handleExploreComplete = () => {
    setIsInsideShip(true);
  };

  const handleEnterProjects = () => {
    navigate('/projects');
  };

  const handleExitShip = () => {
    console.log('handleExitShip called!');
    setIsExiting(true);
    
    // After zoom-out animation completes, reset all states
    setTimeout(() => {
      setIsInsideShip(false);
      setIsExploring(false);
      setIsExiting(false);
    }, 3000); // 3 seconds for zoom-out effect
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Starfield Background with Spaceship */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
          {/* Balanced ambient lighting to keep ship white */}
          <ambientLight intensity={0.4} color="#ffffff" />
          
          {/* Blue-purple glow lights positioned around the ship */}
          <pointLight position={[8, 8, 8]} intensity={0.6} color="#4a90e2" />
          <pointLight position={[-8, -8, -8]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, 10, 0]} intensity={0.3} color="#6366f1" />
          <pointLight position={[0, -10, 0]} intensity={0.2} color="#7c3aed" />
          
          {/* Additional rim lighting for dramatic effect */}
          <pointLight position={[12, 0, 0]} intensity={0.4} color="#3b82f6" />
          <pointLight position={[-12, 0, 0]} intensity={0.4} color="#8b5cf6" />
          
          <StarField />
          <Suspense fallback={<SpaceshipFallback isExploring={isExploring} isExiting={isExiting} />}>
            <Spaceship isExploring={isExploring} isExiting={isExiting} onExploreComplete={handleExploreComplete} />
          </Suspense>
          
          <OrbitControls 
            enableZoom={!(isExploring || isExiting)} 
            enablePan={!(isExploring || isExiting)} 
            enableRotate={true}
            maxDistance={isExploring ? 2 : isExiting ? 120 : 30}
            minDistance={isExploring ? 1 : isExiting ? 40 : 10}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Sci-Fi Welcome Text in Corner */}
      <div className="absolute top-8 left-8 z-20 pointer-events-auto">
        <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 shadow-lg shadow-cyan-500/20">
          <div className="text-cyan-400 font-mono text-sm mb-2">
            <span className="text-green-400">[SYSTEM]</span> INITIALIZING...
          </div>
          <div className="text-2xl font-mono font-bold text-white mb-2">
            <TypewriterText 
              text="STARSHIP QUINXIE" 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </div>
          <div className="text-cyan-300 font-mono text-xs">
            <TypewriterText 
              text="Welcome, Commander. Systems online." 
              className="text-cyan-300"
              delay={2000}
            />
          </div>
        </div>
      </div>

      {/* Action Button - Only show when not inside ship and not exiting */}
      {!isInsideShip && !isExiting && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDockAndBoard}
            disabled={isExploring}
            className="px-20 py-4 rounded-none text-lg font-mono bg-gradient-to-r from-blue-600 to-purple-700 border-2 border-blue-400 text-white hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed tracking-widest uppercase"
          >
            DOCK & BOARD
          </motion.button>
        </div>
      )}

      {/* Interior Ship Interface - Show when inside but not exiting */}
      {isInsideShip && !isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 pointer-events-auto"
        >
          {/* Interior Background Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Hologram Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Hologram Border Strokes */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Top Border */}
            <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            {/* Bottom Border */}
            <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            {/* Left Border */}
            <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            {/* Right Border */}
            <div className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-2 h-2 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute top-4 right-4 w-2 h-2 border-r-2 border-t-2 border-cyan-400"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border-l-2 border-b-2 border-cyan-400"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border-r-2 border-b-2 border-cyan-400"></div>
          </div>

          {/* Exit Button - Top Right */}
          <div className="absolute top-8 right-8 z-40 pointer-events-auto">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log('Exit button clicked!');
                handleExitShip();
              }}
              className="px-6 py-3 rounded-none text-sm font-mono bg-gradient-to-r from-red-600 to-red-700 border-2 border-red-400 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg tracking-widest uppercase cursor-pointer"
            >
              EXIT SHIP
            </motion.button>
          </div>
          
          {/* Interior HUD */}
          <div className="absolute top-8 left-8">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-400/50 rounded-lg p-6 shadow-lg shadow-cyan-500/30">
              <div className="text-cyan-400 font-mono text-sm mb-2">
                <span className="text-green-400">[INTERIOR]</span> SHIP SYSTEMS ACTIVE
              </div>
              <div className="text-xl font-mono font-bold text-white mb-2">
                INTERIOR ACCESS GRANTED
              </div>
              <div className="text-cyan-300 font-mono text-xs">
                Welcome to the ship interior, Commander.
              </div>
            </div>
          </div>

          {/* Sci-Fi Interface Squares */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-12">
              {/* About Me Square */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => navigate('/about')}
                className="relative group cursor-pointer"
              >
                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.3, 0, 0]
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                <div className="w-40 h-40 bg-black/80 border-2 border-cyan-400 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-cyan-500/30 overflow-hidden">
                  {/* About Image */}
                  <div className="w-full h-32 rounded-md mb-3 relative overflow-hidden">
                    <img 
                      src="/src/assets/about.png" 
                      alt="About Me" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/40 group-hover:to-purple-400/40 transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-mono text-base font-bold">ABOUT ME</div>
                    <div className="text-gray-300 font-mono text-sm">PROFILE</div>
                  </div>
                </div>
              </motion.div>

              {/* Projects Square */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={handleEnterProjects}
                className="relative group cursor-pointer"
              >
                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.3, 0, 0]
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                <div className="w-40 h-40 bg-black/80 border-2 border-green-400 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-green-500/30 overflow-hidden">
                  {/* Projects Image */}
                  <div className="w-full h-32 rounded-md mb-3 relative overflow-hidden">
                    <img 
                      src="/src/assets/project.png" 
                      alt="Projects" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 group-hover:from-green-400/40 group-hover:to-blue-400/40 transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-mono text-base font-bold">PROJECTS</div>
                    <div className="text-gray-300 font-mono text-sm">PORTFOLIO</div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Square */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => navigate('/contact')}
                className="relative group cursor-pointer"
              >
                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20"
                  animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.3, 0, 0]
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                <div className="w-40 h-40 bg-black/80 border-2 border-blue-400 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-blue-500/30 overflow-hidden">
                  {/* Contact Image */}
                  <div className="w-full h-32 rounded-md mb-3 relative overflow-hidden">
                    <img 
                      src="/src/assets/contact.png" 
                      alt="Contact" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/40 group-hover:to-purple-400/40 transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-mono text-base font-bold">CONTACT</div>
                    <div className="text-gray-300 font-mono text-sm">COMMUNICATE</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interior Status */}
          <div className="absolute bottom-8 left-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-mono">INTERIOR SYSTEMS ONLINE</span>
            </div>
          </div>

          {/* Interior Instructions */}
          <div className="absolute bottom-8 right-8">
            <div className="text-gray-300 font-mono text-sm bg-black/40 backdrop-blur-md border border-gray-600/50 rounded-lg p-4">
              <div>Ship interior accessed successfully</div>
              <div>Click any square to access different sections</div>
              <div>Click "EXIT SHIP" to return to space</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Exit Status */}
      {isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto"
        >
          <div className="text-center">
            <div className="text-red-400 font-mono text-2xl mb-4">
              🚪 EXITING SHIP INTERIOR...
            </div>
            <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden border border-red-400/30">
              <motion.div
                className="h-full bg-gradient-to-r from-red-400 to-orange-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Exploration Status */}
      {isExploring && !isInsideShip && !isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto"
        >
          <div className="text-center">
            <div className="text-blue-400 font-mono text-2xl mb-4">
              🔍 ENTERING SHIP INTERIOR...
            </div>
            <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden border border-cyan-400/30">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Status Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-8 flex space-x-4 pointer-events-auto"
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-mono">SYSTEMS ONLINE</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-sm font-mono">
            {isExploring ? 'ENTERING SHIP' : isInsideShip ? 'INSIDE SHIP' : isExiting ? 'EXITING SHIP' : 'SPACESHIP READY'}
          </span>
        </div>
      </motion.div>

      {/* Coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8 text-right pointer-events-auto"
      >
        <div className="text-blue-400 text-sm font-mono">
          <div>COORDINATES: 42.3601° N, 71.0589° W</div>
          <div>ALTITUDE: 0.0001 LY</div>
          <div>TIME: {new Date().toLocaleTimeString()}</div>
        </div>
      </motion.div>

      {/* Instructions */}
      {!isInsideShip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute top-8 right-8 text-right pointer-events-auto"
        >
          <div className="text-gray-400 font-mono text-sm bg-black/20 backdrop-blur-sm border border-gray-600/30 rounded-lg p-4">
            {isExploring ? (
              <div>Entering ship interior...</div>
            ) : (
              <>
                <div>Use mouse to explore the ship exterior</div>
                <div>Click "DOCK & BOARD" to enter the ship</div>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Airlock;
