


// src/components/WatchModel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const WatchModel = () => {
  const { scene } = useGLTF('/assets/watch2.glb'); // Verify the model path
  const containerRef = useRef(null);
  
  // State to track the container's dimensions
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  // Update container size on mount and on window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateSize(); // initial measurement
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Compute scale based on container width.
  // Tweak these numbers until the model always appears at a good size.
  const getScale = (width) => {
    if (width < 400) return 0.1;     // For very small containers (e.g. mobile overlay)
    else if (width < 640) return 0.1;  // For containers between 400 and 640px (desktop view on a small window)
    else if (width < 1024) return 0.12; // For medium-size containers (tablets/small desktops)
    else return 0.14;                // For large containers (large desktops)
  };

  const scale = getScale(containerSize.width);

  // Compute aspect ratio based on the container's dimensions.
  const aspect =
    containerSize.width && containerSize.height
      ? containerSize.width / containerSize.height
      : window.innerWidth / window.innerHeight;

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50, aspect }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <primitive object={scene} scale={scale} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default WatchModel;








// // src/components/WatchModel.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const WatchModel = () => {
//   const { scene } = useGLTF('/assets/watch2.glb'); // Verify the model path
//   const containerRef = useRef(null);
  
//   // State to track the container's dimensions
//   const [containerSize, setContainerSize] = useState({
//     width: 0,
//     height: 0,
//   });

//   // Update container size on mount and on window resize
//   useEffect(() => {
//     const updateSize = () => {
//       if (containerRef.current) {
//         setContainerSize({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight,
//         });
//       }
//     };
//     updateSize(); // initial measurement
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   // Compute scale based on container width.
//   const getScale = (width) => {
//     if (width < 400) return 0.1;     // For very small containers (e.g. mobile overlay)
//     else if (width < 640) return 0.1;  // For containers between 400 and 640px (small desktops)
//     else if (width < 1024) return 0.12; // For medium-size containers (tablets/small desktops)
//     else return 0.14;                // For large containers (large desktops)
//   };

//   const scale = getScale(containerSize.width);

//   // Compute aspect ratio based on the container's dimensions.
//   const aspect =
//     containerSize.width && containerSize.height
//       ? containerSize.width / containerSize.height
//       : window.innerWidth / window.innerHeight;

//   return (
//     <div ref={containerRef} className="w-full h-full">
//       <Canvas
//         // Option 1: Set background using inline style
//         style={{ background: '#2a2a2a' }}
//         camera={{ position: [0, 0, 5], fov: 50, aspect }}
//       >
//         {/* Option 2: Also set background via a <color> element */}
//         <color attach="background" args={['#2a2a2a']} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} />
//         <primitive object={scene} scale={scale} />
//         <OrbitControls enableZoom={false} enablePan={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default WatchModel;
