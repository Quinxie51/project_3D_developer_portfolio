import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    console.log("Generating star positions"); // Debugging: Check when star positions are generated
    return random.inSphere(new Float32Array(2000), { radius: 1.2 });
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("StarsCanvas mounted"); // Debugging: Check when StarsCanvas is mounted
    setIsMounted(true); // Ensure the component mounts after the initial render
  }, []);

  if (!isMounted) {
    console.log("StarsCanvas not yet mounted"); // Debugging: Check if the component is not yet mounted
    return null;
  }

  console.log("Rendering StarsCanvas"); // Debugging: Confirm when the canvas is being rendered

  return (
    <div className='w-full h-full fixed inset-0 z-[-1]' style={{ overflow: 'hidden', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
