import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const CosmicParticles = ({ count = 10000, color = "#ffffff", size = 0.02 }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Add wave effect
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          blending={1}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

// Interactive Particle Field
const InteractiveParticles = ({ count = 5000, color = "#FFD700" }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count), { radius: 2 }));

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      
      // Create orbital motion
      ref.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      ref.current.rotation.y = Math.cos(time * 0.15) * 0.3;
      ref.current.rotation.z += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        blending={1}
        opacity={0.8}
      />
    </Points>
  );
};

// Energy Field Effect
const EnergyField = ({ color = "#00FFFF", intensity = 1 }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      ref.current.rotation.y = Math.cos(time * 0.3) * 0.1;
      ref.current.rotation.z += 0.002;
    }
  });

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={1}
        opacity={0.3 * intensity}
      />
    </Points>
  );
};

const CosmicParticlesCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full h-full fixed inset-0 z-[-1]" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <CosmicParticles count={3000} color="#ffffff" size={0.008} />
        <InteractiveParticles count={2000} color="#FFD700" />
        <EnergyField color="#00FFFF" intensity={0.6} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CosmicParticlesCanvas;
