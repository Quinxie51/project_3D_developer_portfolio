import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Preload, 
  useGLTF, 
  Stars as DreiStars,
  Sphere,
  Float,
  Sparkles
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

// Animated Planet Component
const AnimatedPlanet = ({ position, scale, color, speed, texture }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed * 0.01;
      meshRef.current.rotation.x += speed * 0.005;
      
      // Pulsing effect when hovered
      if (hovered) {
        meshRef.current.scale.setScalar(scale * 1.2);
      } else {
        meshRef.current.scale.setScalar(scale);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Nebula Effect Component
const Nebula = ({ position, color, size }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Sparkles 
        count={100} 
        scale={size} 
        size={6} 
        speed={0.3} 
        color={color}
        opacity={0.6}
      />
    </group>
  );
};

// Floating Orbital Rings
const OrbitalRing = ({ position, radius, color, speed }) => {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += speed * 0.01;
      ringRef.current.rotation.z += speed * 0.005;
    }
  });

  return (
    <group ref={ringRef} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Energy Orbs
const EnergyOrb = ({ position, color, size = 1 }) => {
  const orbRef = useRef();

  useFrame((state) => {
    if (orbRef.current) {
      const time = state.clock.getElapsedTime();
      orbRef.current.position.y = position[1] + Math.sin(time * 2) * 0.5;
      orbRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={orbRef} position={position}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

// Main Universe Scene
const UniverseScene = ({ isMobile }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Star System */}
      <AnimatedPlanet 
        position={[0, 0, 0]} 
        scale={2} 
        color="#FFD700" 
        speed={1}
      />
      
      {/* Orbiting Planets */}
      <AnimatedPlanet 
        position={[8, 2, 0]} 
        scale={0.8} 
        color="#4169E1" 
        speed={0.8}
      />
      <AnimatedPlanet 
        position={[-6, -1, 3]} 
        scale={1.2} 
        color="#FF6B6B" 
        speed={1.2}
      />
      <AnimatedPlanet 
        position={[4, -4, -2]} 
        scale={0.6} 
        color="#32CD32" 
        speed={0.6}
      />
      <AnimatedPlanet 
        position={[-3, 5, -1]} 
        scale={0.9} 
        color="#9370DB" 
        speed={0.9}
      />

      {/* Orbital Rings */}
      <OrbitalRing position={[0, 0, 0]} radius={12} color="#FFD700" speed={0.5} />
      <OrbitalRing position={[0, 0, 0]} radius={8} color="#4169E1" speed={0.3} />
      <OrbitalRing position={[0, 0, 0]} radius={16} color="#FF6B6B" speed={0.7} />

      {/* Energy Orbs */}
      <EnergyOrb position={[12, 8, 0]} color="#FFD700" size={0.5} />
      <EnergyOrb position={[-10, -6, 0]} color="#FF6B6B" size={0.4} />
      <EnergyOrb position={[6, -10, 0]} color="#32CD32" size={0.6} />

      {/* Nebulas */}
      <Nebula position={[15, 10, 5]} color="#FF69B4" size={20} />
      <Nebula position={[-12, -8, 8]} color="#00CED1" size={15} />
      <Nebula position={[8, -12, -5]} color="#FFA500" size={18} />

      {/* Ambient Stars */}
      <DreiStars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
    </group>
  );
};

const UniverseCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [0, 0, 25] : [0, 0, 30],
        fov: isMobile ? 60 : 45,
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        clearColor: [0, 0, 0, 0] // Transparent background
      }}
      style={{
        background: 'transparent'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxDistance={50}
          minDistance={10}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <UniverseScene isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default UniverseCanvas;
