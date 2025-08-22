import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Cylinder } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { projects, categories, getProjectsByCategory } from '../../lib/projects';
import useStore from '../../lib/store';

const DataCartridge = ({ project, position, onClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      if (hovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.1;
      }
    }
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'uiux': return '#00ffff';
      case 'dev': return '#ffd700';
      case 'creative': return '#ff00ff';
      default: return '#00ffff';
    }
  };

  return (
    <group position={position}>
      <Cylinder
        ref={meshRef}
        args={[0.3, 0.3, 1, 8]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={getCategoryColor(project.category)}
          emissive={getCategoryColor(project.category)}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </Cylinder>
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.2}
        color={getCategoryColor(project.category)}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        {project.title}
      </Text>
    </group>
  );
};

const HolographicPanel = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="glass-panel p-8 rounded-2xl max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-cyan-400 font-mono text-sm">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-space-grotesk font-semibold text-white mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-space-grotesk font-semibold text-white mb-3">
              Features
            </h3>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.githubLink}
            className="glow-button px-6 py-2 rounded-lg text-sm font-semibold"
          >
            View on GitHub
          </a>
          <a
            href={project.liveLink}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-400/20"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectBay = () => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory, selectedProject, setSelectedProject } = useStore();
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  const handleCartridgeClick = (project) => {
    setSelectedProject(project);
  };

  const closePanel = () => {
    setSelectedProject(null);
  };

  // Calculate grid positions for cartridges
  const getCartridgePositions = (projects) => {
    const positions = [];
    const cols = 3;
    const spacing = 3;
    
    projects.forEach((project, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      positions.push([
        (col - 1) * spacing,
        0,
        (row - Math.floor(projects.length / cols / 2)) * spacing
      ]);
    });
    
    return positions;
  };

  const cartridgePositions = getCartridgePositions(filteredProjects);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Panoramic Window Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-light to-space-bg">
        <div className="absolute inset-0 bg-nebula opacity-30"></div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4aa" />
          
          {/* Data Cartridges */}
          {filteredProjects.map((project, index) => (
            <DataCartridge
              key={project.id}
              project={project}
              position={cartridgePositions[index]}
              onClick={() => handleCartridgeClick(project)}
            />
          ))}
          
          <OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            enableRotate={true}
            maxDistance={20}
            minDistance={5}
          />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-8">
          <div>
            <h1 className="text-4xl font-space-grotesk font-bold text-white mb-2">
              Project Bay
            </h1>
            <p className="text-cyan-400 font-mono text-sm">
              Data Cartridges: {filteredProjects.length} Active
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-gray-400 font-mono text-sm">
              <div>Click cartridges to view details</div>
              <div>Use mouse to explore</div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="absolute top-8 left-8">
          <motion.button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-panel rounded-full p-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-space-grotesk font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-space-dark'
                      : 'text-gray-300 hover:text-white hover:bg-cyan-500/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid Info */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-space-grotesk font-bold text-white mb-2">
              {filteredProjects.length} Projects Available
            </h2>
            <p className="text-gray-400 max-w-md">
              Explore the interactive 3D grid of data cartridges. 
              Each cartridge contains detailed information about a project.
            </p>
          </div>
        </div>

        {/* Status Bar */}
        <div className="p-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono">BAY OPERATIONAL</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-xs font-mono">CARTRIDGES LOADED</span>
              </div>
            </div>
            
            <div className="text-right text-xs font-mono text-gray-400">
              <div>Category: {categories.find(c => c.id === selectedCategory)?.name}</div>
              <div>Active: {filteredProjects.length} cartridges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Panel */}
      {selectedProject && (
        <HolographicPanel project={selectedProject} onClose={closePanel} />
      )}
    </div>
  );
};

export default ProjectBay;
