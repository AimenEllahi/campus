/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 FinalGeb3.glb --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function FinalGeb3(props) {
  const { nodes, materials } = useGLTF("/Models/FinalGeb3-transformed.glb");
  //to change position and rotation of the model
  const { position, rotation, scale } = useControls("FinalGeb3", {
    position: { value: [3,5,22], step: 2 },
    rotation: { value: [0, -5.6, 0], step: .2 },
    scale: { value: 3, step: 0.1 },
  });

  return (
    <group {...props} dispose={null} position={position} rotation={rotation} scale={scale} >
      <group
        position={[-3.907, -2.853, 4.911]}
        rotation={[Math.PI, -0.005, Math.PI]}
      >
        <mesh geometry={nodes.Plane002.geometry} material={materials.street} />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["roow.001"]}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials["Geb2.002"]}
        />
        <mesh
          geometry={nodes.Plane002_3.geometry}
          material={materials["Material.136"]}
        />
        <mesh
          geometry={nodes.Plane002_4.geometry}
          material={materials["Material.137"]}
        />
        <mesh
          geometry={nodes.Plane002_5.geometry}
          material={materials["Material.138"]}
        />
        <mesh
          geometry={nodes.Plane002_6.geometry}
          material={materials["Geb2.003"]}
        />
        <mesh geometry={nodes.Plane002_7.geometry} material={materials.Grey} />
        <mesh
          geometry={nodes.Plane002_8.geometry}
          material={materials.Metallic}
        />
        <mesh
          geometry={nodes.Plane002_9.geometry}
          material={materials["ручка.001"]}
        />
        <mesh
          geometry={nodes.Plane002_10.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Plane002_11.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Plane002_12.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          geometry={nodes.Plane002_13.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          geometry={nodes.Plane002_14.geometry}
          material={materials["dbl_Layer0_001.002"]}
        />
        <mesh
          geometry={nodes.Plane002_15.geometry}
          material={materials["dbl_Layer0_002.002"]}
        />
        <mesh
          geometry={nodes.Plane002_16.geometry}
          material={materials["dbl_Layer0_003.002"]}
        />
        <mesh
          geometry={nodes.Plane002_17.geometry}
          material={materials["dbl_Layer0_005.002"]}
        />
        <mesh
          geometry={nodes.Plane002_18.geometry}
          material={materials["dbl_Layer0_008.002"]}
        />
        <mesh
          geometry={nodes.Plane002_19.geometry}
          material={materials["Material.139"]}
        />
      </group>
      <mesh
        geometry={nodes.Text003.geometry}
        material={materials["Material.040"]}
        position={[-0.148, -0.98, 5.156]}
        rotation={[1.566, 0.007, -3.132]}
        scale={0.461}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials["Material.062"]}
        position={[-0.125, -2.093, 5.16]}
        rotation={[1.566, 0.007, -3.132]}
        scale={2.016}
      />
    </group>
  );
}

useGLTF.preload("/FinalGeb3-transformed.glb");
