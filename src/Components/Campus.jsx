/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 campus.glb --transform
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export function Campus(props) {
  const { nodes, materials } = useGLTF("/Models/campus-transformed.glb");
  const { camera } = useThree();
  const { position, rotation, fov } = useControls({
    position: {
      value: [264, 37.200000000000045, -149.80000000000052],
      step: 2,
    },
    rotation: { value: [0.2, 2.4, -0.2], step: 0.2 },
    fov: { value: 45, step: 5 },
  });

  useEffect(() => {
    camera.position.set(...position);
    camera.rotation.set(...rotation);
  }, [position, rotation, fov]);
  return (
    <group {...props} dispose={null}>
      <group position={[16.083, -23.741, 31.44]} scale={11.23}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Box} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.Ground} />
      </group>
      <mesh
        geometry={nodes.Cloud_1001.geometry}
        material={nodes.Cloud_1001.material}
        position={[-14.503, 36.564, 112.497]}
        rotation={[0, -0.289, 0]}
        scale={7.169}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.007"]}
        position={[-119.314, -0.415, 75.481]}
        rotation={[-1.564, 0, 0]}
        scale={-382.573}
      />
      <group
        position={[104.596, -13.259, -117.006]}
        rotation={[-Math.PI, 1.569, -Math.PI]}
        scale={[7.705, 7.705, 15.591]}
      >
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Plane003_2.geometry}
          material={materials["Cobblestone sidewalk"]}
        />
        <mesh
          geometry={nodes.Plane003_3.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <mesh geometry={nodes.Plane023.geometry} material={materials.Ground} />
      <mesh geometry={nodes.Plane019.geometry} color={"#ff00ff"} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.Ground} />
      <mesh
        geometry={nodes.Cylinder003_1.geometry}
        material={materials.Ground}
      />
    </group>
  );
}

useGLTF.preload("/campus-transformed.glb");