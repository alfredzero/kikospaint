import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import { useThree } from "@react-three/fiber";

export function Home(props) {
  const { scene, nodes, materials } = useGLTF("/models/home.glb");
  const { wallColor } = useCustomization();
  const { gl } = useThree(); // WebGL context for cleanup

  useEffect(() => {
    if (materials["Material.004"]) {
      materials["Material.004"].color.set(wallColor.color);
    }
    if (materials["Material.003"]) {
      materials["Material.003"].color.set(wallColor.color);
    }
  }, [wallColor, materials]);

  // ✅ Cleanup: Prevent WebGL crashes & memory leaks
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.isMaterial) {
            child.material.dispose();
          }
        }
      });
      gl.dispose();
    };
  }, [scene, gl]);

  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={[5, 5, 5]}>
      {/* Walls - Customizable Color */}
      <mesh geometry={nodes.Plane.geometry}>
        <meshStandardMaterial attach="material" color={wallColor.color} />
      </mesh>
      <mesh geometry={nodes.Plane_1.geometry}>
        <meshStandardMaterial attach="material" color={wallColor.color} />
      </mesh>

      {/* Other Parts (No Metal Components) */}
      <mesh
        geometry={nodes.Plane_2.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        geometry={nodes.Plane_3.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        geometry={nodes.Plane_4.geometry}
        material={materials["Material.006"]}
      />

      {/* Roof and Details */}

      {/* Windows & Frames */}

      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["Material.007"]}
        position={[0.855, -0.362, -1.289]}
      />

      {/* Door */}
      <group position={[-0.694, -0.392, 0.735]} scale={[1.2, 1.2, 1.2]}>
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/home.glb");

export default Home;
