
// src/components/WatchModel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const WatchModel = () => {
  const { scene } = useGLTF('/assets/watch2.glb'); // Verify the model path
  const containerRef = useRef(null);
  
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getScale = (width) => {
    if (width < 400) return 0.1;
    else if (width < 640) return 0.12;
    else if (width < 1024) return 0.14;
    else return 0.16;
  };

  const scale = getScale(containerSize.width);

  return (
    <div ref={containerRef} className="w-full h-full relative bg-black flex items-center justify-center overflow-hidden">
       {/* Gradient Light Effect */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-2/5 h-2/5 bg-white opacity-10 rounded-full blur-3xl" />
       </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <primitive object={scene} scale={scale} />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default WatchModel;
