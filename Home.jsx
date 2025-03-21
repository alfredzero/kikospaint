/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/home.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/home.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.354, 1.052, -0.066]} rotation={[0, Math.PI / 2, 0]} scale={[1.628, 1.628, 0.995]}>
        <mesh geometry={nodes.Plane.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.007']} position={[-0.624, 1.253, 0.11]} rotation={[0, -0.449, 0]} scale={[0.016, 0.025, 0.021]} />
        <mesh geometry={nodes.Circle001.geometry} material={materials['Material.005']} position={[-0.692, 1.259, 0.084]} rotation={[-0.161, 0.389, -1.388]} scale={[0.071, 0.047, 0.111]} />
        <group position={[-0.425, 0.857, -0.11]} scale={[0.941, 1, 1.01]}>
          <mesh geometry={nodes.Plane012_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Plane012_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Plane012_3.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.009']} position={[0.219, -0.171, -1.318]} rotation={[0, 0, -Math.PI / 2]} scale={[0.289, 0.289, 0.472]} />
        <mesh geometry={nodes.Plane003.geometry} material={materials['Material.007']} position={[0.855, -0.362, -1.289]} rotation={[0, 0, -Math.PI / 2]} scale={[0.289, 0.289, 0.472]} />
        <mesh geometry={nodes.Plane004.geometry} material={materials['Material.007']} position={[0.855, -0.003, -1.289]} rotation={[0, 0, -Math.PI / 2]} scale={[0.289, 0.289, 0.472]} />
        <mesh geometry={nodes.Plane005.geometry} material={materials['Material.007']} position={[0.606, 0.298, -1.289]} rotation={[0, 0, -Math.PI]} scale={[0.289, 0.289, 0.472]} />
        <mesh geometry={nodes.Plane006.geometry} material={materials['Material.007']} position={[-0.495, 0.298, -1.289]} rotation={[0, 0, -Math.PI]} scale={[0.289, 0.289, 0.472]} />
        <group position={[-0.694, -0.392, 0.735]} scale={[1, 0.957, 1]}>
          <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.007']} />
        </group>
        <mesh geometry={nodes.Plane010.geometry} material={materials['Material.006']} position={[-0.663, -0.628, 0.817]} scale={[0.17, 0.076, 0.124]} />
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.007']} position={[-0.076, 0.082, 0.785]} rotation={[Math.PI / 2, 0, 0]} scale={[0.006, 0.011, 0.009]} />
        <mesh geometry={nodes.Plane012.geometry} material={materials['Material.007']} position={[-0.694, 0.854, 0.072]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.086, 0.14, 0.086]} />
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.007']} position={[-0.694, 0.956, 0.072]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.086, 0.14, 0.086]} />
      </group>
    </group>
  )
}

useGLTF.preload('/home.glb')
