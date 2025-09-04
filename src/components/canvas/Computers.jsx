import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const group = useRef();
  const mixer = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const originalMaterial = child.material;

        child.material = new THREE.MeshPhysicalMaterial({
          map: originalMaterial.map,
          normalMap: originalMaterial.normalMap,
          roughnessMap: originalMaterial.roughnessMap,
          metalnessMap: originalMaterial.metalnessMap,
          emissiveMap: originalMaterial.emissiveMap || originalMaterial.map,
          emissive: new THREE.Color(0xffffff),
          emissiveIntensity: 0.5,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          depthWrite: true,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
        });
      }
    });

    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
    // Removed rotation and movement - keeping it stationary
  });

  return (
    <group ref={group} dispose={null}>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} position={[10, 10, 10]} />
              <primitive
          object={scene}
          scale={isMobile ? 0.2 : 0.6}  // Further reduced scale for smaller size
          position={isMobile ? [0, -0.9, 0] : [0, 0.5, 0]}  // Centered position
          rotation={[Math.PI / 6, Math.PI + Math.PI / 4, 0]}  // 225 degrees rotation (Y-axis) - rotated 45 degrees from left to right
        />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)"); // Adjusted for wider range of devices
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
        position: isMobile ? [0, 2, 5] : [0, 3, 5],  // Centered camera position
        fov: isMobile ? 35 : 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}  // Disable rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
