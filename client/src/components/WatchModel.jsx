
// src/components/WatchModel.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const WatchModel = () => {
  const { scene } = useGLTF('/assets/watch2.glb'); // Ensure the path is correct

  // Track the window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define scale values for different breakpoints:
  // Tailwind’s default breakpoints: sm: ~640px, md: ~768px, lg: ~1024px
  const getScale = (width) => {
    if (width < 640) {
      return 0.05; // Mobile devices
    } else if (width < 1024) {
      return 0.08; // Tablets and small desktops
    } else {
      return 0.1; // Larger desktops
    }
  };

  const scale = getScale(windowWidth);

  // Optional: Adjust camera distance if needed (increase z to zoom out)
  const cameraPosition = [0, 0, 5];

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <primitive object={scene} scale={scale} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default WatchModel;
