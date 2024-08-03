import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Mascot = () => {
  const mascot = useGLTF("./planet/butterfly.gltf"); // Ensure the path is correct

  return <primitive object={mascot.scene} scale={0.5} />;
};

const MascotCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Mascot />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MascotCanvas;
