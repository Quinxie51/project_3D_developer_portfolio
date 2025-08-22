import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import useStore from '../../lib/store';

const BridgeRoom = () => {
  const roomRef = useRef();
  
  useFrame((state) => {
    if (roomRef.current) {
      // Subtle camera sway
      roomRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={roomRef}>
      {/* Room walls - made more visible */}
      <Box args={[20, 10, 20]} position={[0, 0, -10]}>
        <meshStandardMaterial color="#1a1f2e" transparent opacity={0.6} />
      </Box>
      <Box args={[20, 10, 20]} position={[0, 0, 10]}>
        <meshStandardMaterial color="#1a1f2e" transparent opacity={0.6} />
      </Box>
      <Box args={[20, 10, 20]} position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#1a1f2e" transparent opacity={0.6} />
      </Box>
      <Box args={[20, 10, 20]} position={[10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#1a1f2e" transparent opacity={0.6} />
      </Box>
      
      {/* Floor - made more visible */}
      <Box args={[20, 0.1, 20]} position={[0, -5, 0]}>
        <meshStandardMaterial color="#2a2f3e" />
      </Box>
      
      {/* Ceiling - made more visible */}
      <Box args={[20, 0.1, 20]} position={[0, 5, 0]}>
        <meshStandardMaterial color="#2a2f3e" />
      </Box>

      {/* Grid lines on floor for better orientation */}
      <group position={[0, -4.9, 0]}>
        {[...Array(10)].map((_, i) => (
          <Box key={i} args={[20, 0.01, 0.1]} position={[0, 0, (i - 5) * 2]}>
            <meshStandardMaterial color="#00ffff" opacity={0.3} transparent />
          </Box>
        ))}
        {[...Array(10)].map((_, i) => (
          <Box key={i + 10} args={[0.1, 0.01, 20]} position={[(i - 5) * 2, 0, 0]}>
            <meshStandardMaterial color="#00ffff" opacity={0.3} transparent />
          </Box>
        ))}
      </group>
    </group>
  );
};

const InteractiveHotspot = ({ position, icon, label, onClick, color = "#00ffff" }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[0.8, 16, 16]} onClick={onClick}>
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {/* Outer glow ring */}
      <Sphere args={[1.2, 16, 16]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.1}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Icon text */}
      <Text
        position={[0, 0, 1.5]}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>

      {/* Label text */}
      <Text
        position={[0, -2, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>

      {/* Connection lines to floor */}
      <Box args={[0.05, 5, 0.05]} position={[0, -2.5, 0]}>
        <meshStandardMaterial color={color} opacity={0.5} transparent />
      </Box>
    </group>
  );
};

const BridgeScene = () => {
  const navigate = useNavigate();
  const { openPanel } = useStore();

  const hotspots = [
    {
      position: [-3, 0, -3],
      icon: "📊",
      label: "Holo Monitor",
      color: "#00ffff",
      action: () => {
        openPanel();
        navigate('/about');
      }
    },
    {
      position: [3, 0, -3],
      icon: "🚀",
      label: "Mission Console",
      color: "#00d4aa",
      action: () => navigate('/projects')
    },
    {
      position: [-3, 0, 3],
      icon: "🧭",
      label: "Navigation Table",
      color: "#ffd700",
      action: () => navigate('/projects')
    },
    {
      position: [3, 0, 3],
      icon: "📡",
      label: "Comms Panel",
      color: "#0066ff",
      action: () => navigate('/contact')
    }
  ];

  return (
    <div className="relative w-full h-screen">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00d4aa" />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
        
        <BridgeRoom />
        
        {hotspots.map((hotspot, index) => (
          <InteractiveHotspot
            key={index}
            position={hotspot.position}
            icon={hotspot.icon}
            label={hotspot.label}
            color={hotspot.color}
            onClick={hotspot.action}
          />
        ))}
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true}
          maxDistance={20}
          minDistance={3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Back Button */}
        <div className="absolute top-8 left-8 pointer-events-auto">
          <motion.button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Airlock
          </motion.button>
        </div>

        {/* Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-space-grotesk font-bold text-white mb-2">
            Bridge
          </h1>
          <p className="text-cyan-400 font-mono text-sm text-center">
            Interactive Command Center
          </p>
        </div>

        {/* Instructions */}
        <div className="absolute top-8 right-8 text-right">
          <div className="text-gray-400 font-mono text-sm">
            <div>Click glowing spheres to navigate</div>
            <div>Use mouse to explore</div>
            <div>Scroll to zoom</div>
          </div>
        </div>

        {/* Status */}
        <div className="absolute bottom-8 left-8">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono">BRIDGE ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-xs font-mono">SYSTEMS NOMINAL</span>
            </div>
          </div>
        </div>

        {/* Hotspot Labels */}
        <div className="absolute bottom-8 right-8 text-right">
          <div className="space-y-2">
            {hotspots.map((hotspot, index) => (
              <div key={index} className="text-xs font-mono">
                <span className="text-cyan-400">{hotspot.label}</span>
                <span className="text-gray-500 ml-2">→ {hotspot.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BridgeScene;
