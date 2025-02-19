// // client/src/WatchModel.jsx
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// const Model = () => {
//   // Adjust the path as needed
//   const { scene } = useGLTF('/models/watch.glb'); 
//   return <primitive object={scene} dispose={null} />;
// };

// const WatchModel = () => {
//   return (
//     <Canvas style={{ height: '100vh', background: '#000' }}>
//       {/* Adjust the camera position if needed */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <Model />
//         {/* Optional: add an environment for reflections */}
//         <Environment preset="sunset" />
//       </Suspense>
//       {/* OrbitControls with custom mouse button settings */}
//       <OrbitControls 
//         enablePan={false}
//         enableZoom={true}
//         mouseButtons={{
//           LEFT: null,   // Disable left click rotation if desired
//           RIGHT: 2,     // Use right button for rotation
//           MIDDLE: 1,    // Middle button for zoom
//         }}
//       />
//     </Canvas>
//   );
// };

// export default WatchModel;


import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
// const { scene } = useGLTF('/assets/apple_watch.glb');


const WatchModel = () => {
  const { scene } = useGLTF('/assets/apple_watch.glb'); // Ensure this path is correct

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <primitive object={scene} scale={1.5} />
      <OrbitControls />
    </Canvas>
  );
};

export default WatchModel;
