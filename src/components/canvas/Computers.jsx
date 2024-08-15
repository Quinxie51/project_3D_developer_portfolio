import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, materials, animations } = useGLTF("./desktop_pc/scene.gltf");
  const group = useRef();
  const mixer = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const originalMaterial = child.material;

        child.material = new THREE.MeshStandardMaterial({
          map: originalMaterial.map, // Copy texture map
          emissiveMap: originalMaterial.emissiveMap || originalMaterial.map, // Copy emissive map or use texture map
          emissive: new THREE.Color(0xffffff), // Set emissive color to white
          emissiveIntensity: 1, // Adjust emissive intensity as needed
          side: THREE.DoubleSide, // Render both sides if needed
          transparent: originalMaterial.transparent, // Keep transparency settings
          opacity: originalMaterial.opacity, // Keep opacity settings
          alphaTest: 0.5, // Adjust alpha test value as needed
          depthWrite: false, // Adjust depth write settings for transparency
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

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <group ref={group} dispose={null}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 1.2 : 1.3} // Adjusted scale to make the model larger
        position={isMobile ? [0, 0, -2.2] : [2, 0.5, 0]} // Adjusted position to move the model up
        rotation={[Math.PI / 4, Math.PI, Math.PI/2, ]} // Adjusted rotation to tilt the model along the y-axis
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
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
      frameloop='always' // Change this to 'always' for continuous animation
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
