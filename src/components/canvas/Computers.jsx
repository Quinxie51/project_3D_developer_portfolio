import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const group = useRef();
  const mixer = useRef();
  const [tilt, setTilt] = useState(0);

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
          opacity: 0.9,
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

    // Update the tilt value based on time
    const time = state.clock.getElapsedTime();
    setTilt(Math.sin(time) * 0.1); // Adjust the amplitude of tilt here
    if (group.current) {
      group.current.rotation.x = tilt;
    }
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
        scale={isMobile ? 1.6 : 1.7}
        position={isMobile ? [4, 2, 0] : [4, 0.5, 0]}
        rotation={[Math.PI / 5, 0, 0]}
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
      frameloop="always"
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
