import React, { useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Ground component
const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="#111111" roughness={0.8} />
    </mesh>
  );
};

// Neon light component
const NeonLight = ({ color, position }) => {
  const light = useRef();
  
  useFrame((state) => {
    if (light.current) {
      // Subtle pulsing effect
      light.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });
  
  return (
    <group position={position}>
      <pointLight ref={light} color={color} intensity={2} distance={50} />
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
};

// Building component
const Building = ({ position, size }) => {
  const [width, height, depth] = size;
  
  return (
    <mesh position={[position[0], height / 2, position[2]]} castShadow receiveShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial 
        color="#222222" 
        emissive="#ff0000"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

// Scene setup
const Scene = () => {
  const { scene, camera } = useThree();
  
  useEffect(() => {
    // Set background and fog
    scene.background = new THREE.Color('#000000');
    scene.fog = new THREE.FogExp2('#000000', 0.02);
    
    // Set camera position for a good static view
    camera.position.set(0, 20, 100);
    camera.lookAt(0, 0, 0);
  }, [scene, camera]);
  
  // Generate maze-like buildings
  const buildings = [];
  const mazeSize = 15;
  const blockSize = 20;
  
  for (let i = 0; i < mazeSize; i++) {
    for (let j = 0; j < mazeSize; j++) {
      if (Math.random() > 0.6) {
        const x = i * blockSize - mazeSize * blockSize / 2;
        const z = j * blockSize - mazeSize * blockSize / 2;
        const height = Math.random() * 30 + 20;
        
        buildings.push(
          <Building 
            key={`building-${i}-${j}`}
            position={[x, 0, z]} 
            size={[blockSize, height, blockSize]} 
          />
        );
      }
    }
  }
  
  // Slowly rotate the scene
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.05;
    camera.position.x = Math.sin(t) * 100;
    camera.position.z = Math.cos(t) * 100;
    camera.lookAt(0, 0, 0);
  });
  
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.2} color="#333333" />
      
      {/* Neon lights */}
      <pointLight color="#ff0000" intensity={2} position={[0, 50, 0]} distance={200} />
      <pointLight color="#ff0000" intensity={1.5} position={[50, 30, 50]} distance={100} />
      <pointLight color="#ff0000" intensity={1.5} position={[-50, 30, -50]} distance={100} />
      
      {/* Ground */}
      <Ground />
      
      {/* Buildings */}
      {buildings}
    </>
  );
};

// Main ThreeScene component
const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

