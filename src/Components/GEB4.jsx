/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 GEB4.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from "leva";

export function GEB4(props) {
  const { nodes, materials } = useGLTF("/Models/GEB4-transformed.glb");
  //to change position and rotation of the model
  const { position, rotation, scale } = useControls("GEB4", {
    position: { value: [197,5,-24], step: 2 },
    rotation: { value: [0, .6, 0], step: .2 },
    scale: { value: 3, step: 0.1 },
  });

  return (
    <group {...props} dispose={null} position={position} rotation={rotation} scale={scale} >
      <group position={[-3.907, -2.853, 4.911]} rotation={[Math.PI, -0.005, Math.PI]} scale={1.457}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.street} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['roow.001']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['ручка.001']} />
      </group>
      <mesh geometry={nodes.Text002.geometry} material={materials['Material.025']} position={[-1.474, -2.746, 8.224]} rotation={[-2.095, -1.547, -0.518]} scale={0.736} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Material.031']} position={[-3.788, -0.382, 8.22]} rotation={[0, 1.555, -1.573]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['glass.002']} position={[-5.727, -1.833, 8.277]} rotation={[0, -1.57, -1.57]} />
      <group position={[-9.786, -2.116, 9.404]} rotation={[0, -0.629, 0]} scale={0.019}>
        <mesh geometry={nodes.Mesh003.geometry} material={materials['dbl_Layer0_001.003']} />
        <mesh geometry={nodes.Mesh003_1.geometry} material={materials['dbl_Layer0_002.003']} />
        <mesh geometry={nodes.Mesh003_2.geometry} material={materials['dbl_Layer0_003.003']} />
        <mesh geometry={nodes.Mesh003_3.geometry} material={materials['dbl_Layer0_005.003']} />
        <mesh geometry={nodes.Mesh003_4.geometry} material={materials['dbl_Layer0_008.003']} />
      </group>
      <mesh geometry={nodes.Cube094.geometry} material={materials['Material.032']} position={[-6.528, 4.738, 10.298]} />
      <mesh geometry={nodes.Cube093.geometry} material={materials['Material.033']} position={[-5.386, 4.738, 16.859]} />
      <mesh geometry={nodes.Cube092.geometry} material={materials['Material.034']} position={[-2.763, 4.208, 16.859]} />
      <mesh geometry={nodes.Cube091.geometry} material={materials['Material.026']} position={[-5.122, -4.803, 10.74]} rotation={[Math.PI, -1.566, Math.PI]} scale={0.098} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Geb2} position={[-5.298, 0.669, 15.111]} rotation={[Math.PI, -1.567, Math.PI]} scale={3.508} />
      <mesh geometry={nodes.Plane017.geometry} material={materials['Material.031']} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.026']} />
    </group>
  )
}

useGLTF.preload('/GEB4-transformed.glb')
