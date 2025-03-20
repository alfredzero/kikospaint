"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export function Model(props) {
  const { nodes, materials } = useGLTF("./models/business.glb");
  const { wallColor } = useCustomization(); // Get selected wall color

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Apply custom wall color */}
        <mesh geometry={nodes.Material2_3.geometry}>
          <meshStandardMaterial color={wallColor.color} />
        </mesh>
        <mesh geometry={nodes.Material2_4.geometry}>
          <meshStandardMaterial color={wallColor.color} />
        </mesh>

        {/* Keep other parts unchanged */}
        <lineSegments
          geometry={nodes.Material2.geometry}
          material={materials.edge_color000255}
        />
        <mesh
          geometry={nodes.Material2_1.geometry}
          material={materials.Color01}
        />
        <mesh
          geometry={nodes.Material2_2.geometry}
          material={materials.Color01}
        />
        <mesh
          geometry={nodes.Material2_5.geometry}
          material={materials.Roof_Diffuse}
        />
        <mesh
          geometry={nodes.Material2_6.geometry}
          material={materials.Color02}
        />
        <lineSegments
          geometry={nodes.Material2_7.geometry}
          material={materials.edge_color128128128255}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/business.glb");

export default Model;
